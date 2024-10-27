const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');
const https = require('https');

const FEED_URL = 'https://kavinpalanichamy.substack.com/feed';
const POSTS_DIR = './posts';

// Custom user agent to identify our bot
const USER_AGENT = 'SubstackFetcher/1.0 (GitHub Actions; +https://github.com/kavinpalanichamy/kavinpalanichamy.github.io)';

async function sanitizeFileName(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

async function createMarkdownContent(item) {
  const date = await formatDate(item.pubDate);
  return `---
title: ${item.title}
date: ${date}
link: ${item.link}
---

${item.content || item['content:encoded']}

---
*Originally published on [Substack](${item.link})*
`;
}

async function fetchPosts() {
  try {
    const parser = new Parser({
      customFields: {
        item: [['content:encoded', 'content']]
      },
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'application/rss+xml, application/xml, application/atom+xml, text/xml;q=0.9, */*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      requestOptions: {
        agent: new https.Agent({
          rejectUnauthorized: true,
          keepAlive: true
        }),
        timeout: 10000 // 10 second timeout
      }
    });

    console.log(`Fetching RSS feed from ${FEED_URL}...`);
    console.log('Using User-Agent:', USER_AGENT);

    const feed = await parser.parseURL(FEED_URL);
    
    if (!feed || !feed.items) {
      throw new Error('Invalid feed structure received');
    }

    console.log(`Successfully fetched feed. Found ${feed.items.length} items.`);
    const fetchedPosts = [];

    for (const item of feed.items) {
      if (!item.title) {
        console.warn('Skipping item with no title');
        continue;
      }

      const fileName = `${await sanitizeFileName(item.title)}.md`;
      const filePath = path.join(POSTS_DIR, fileName);

      if (!fs.existsSync(filePath)) {
        console.log(`Processing new post: ${item.title}`);
        const content = await createMarkdownContent(item);
        fs.writeFileSync(filePath, content, 'utf8');
        fetchedPosts.push(fileName);
      }
    }

    if (fetchedPosts.length > 0) {
      console.log('New posts added:', fetchedPosts);
    } else {
      console.log('No new posts found.');
    }
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      response: error.response?.data,
    });

    if (error.message.includes('403')) {
      console.error(`
Access forbidden (403). This could be due to:
1. Rate limiting
2. IP blocking
3. User-Agent blocking
4. Geographic restrictions

Try visiting ${FEED_URL} in a browser to verify the feed is accessible.
`);
    }

    process.exit(1);
  }
}

// Ensure posts directory exists
try {
  if (!fs.existsSync(POSTS_DIR)) {
    console.log(`Creating posts directory at ${POSTS_DIR}`);
    fs.mkdirSync(POSTS_DIR, { recursive: true });
  }
} catch (error) {
  console.error('Error creating posts directory:', error);
  process.exit(1);
}

fetchPosts();