const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const FEED_URL = 'https://kavinpalanichamy.substack.com/feed';
const POSTS_DIR = './posts';

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
      }
    });

    console.log(`Fetching RSS feed from ${FEED_URL}...`);
    const feed = await parser.parseURL(FEED_URL);
    const fetchedPosts = [];

    for (const item of feed.items) {
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
    console.error('Error fetching posts:', error);
    process.exit(1);
  }
}

fetchPosts();