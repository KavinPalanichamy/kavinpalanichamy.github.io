import os
import xmltodict
from datetime import datetime

# Load and parse the XML file
with open('posts/rss_feed.xml') as xml_file:
    rss_content = xmltodict.parse(xml_file.read())

items = rss_content['rss']['channel']['item']

# Ensure _posts directory exists
os.makedirs('_posts', exist_ok=True)

# Create Markdown files for each item
for item in items:
    title = item['title'].replace(" ", "-").lower()
    pub_date = datetime.strptime(item['pubDate'], '%Y-%m-%d %H:%M:%S')
    filename = f"_posts/{pub_date.strftime('%Y-%m-%d')}-{title}.md"

    md_content = f"""---
layout: post
title: {item['title']}
date: {pub_date.strftime('%Y-%m-%d %H:%M:%S')}
description: {item['description']}
redirect: {item['link']}
---
"""

    # Check if the file already exists to avoid overwriting
    if not os.path.exists(filename):
        with open(filename, 'w') as md_file:
            md_file.write(md_content)
