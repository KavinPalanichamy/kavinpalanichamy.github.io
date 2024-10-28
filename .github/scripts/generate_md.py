import os
import xmltodict
from datetime import datetime

# Load and clean up the XML content
with open('posts/rss_feed.xml') as xml_file:
    # Read the XML file and skip script tags if present
    content = ''.join([line for line in xml_file if not line.strip().startswith('<script')])
    rss_content = xmltodict.parse(content)

# Extract items safely
items = rss_content['rss']['channel'].get('item', [])

# Convert single item to list if necessary
if isinstance(items, dict):
    items = [items]

# Ensure the _posts directory exists
os.makedirs('_posts', exist_ok=True)

# Create Markdown files for each item
for idx, item in enumerate(items):
    if isinstance(item, dict):  # Only proceed if item is a dictionary
        title = item.get('title', '').replace(" ", "-").lower()
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
    else:
        print(f"Warning: Item at index {idx} is not a dictionary. Item type: {type(item)}, Content: {item}")
