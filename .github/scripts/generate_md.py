import os
import xmltodict
from datetime import datetime

# Load and parse the XML file
with open('posts/rss_feed.xml') as xml_file:
    rss_content = xmltodict.parse(xml_file.read())

# Get the list of items from the RSS feed
items = rss_content['rss']['channel']['item']

# Convert to list if single item is returned as dict
if isinstance(items, dict):
    items = [items]

# Ensure _posts directory exists
os.makedirs('_posts', exist_ok=True)

# Create Markdown files for each item
for item in items:
    title = item['title'].replace(" ", "-").lower() if 'title' in item else ''
    pub_date = datetime.strptime(item.get('pubDate', ''), '%a, %d %b %Y %H:%M:%S %z')
    filename = f"_posts/{pub_date.strftime('%Y-%m-%d')}-{title}.md"

    md_content = f"""---
layout: post
title: {item.get('title', '')}
date: {pub_date.strftime('%Y-%m-%d %H:%M:%S')}
description: {item.get('description', '')}
redirect: {item.get('link', '')}
---

{item.get('content:encoded', '')}
"""

    # Check if the file already exists to avoid overwriting
    if not os.path.exists(filename):
        with open(filename, 'w') as md_file:
            md_file.write(md_content)
