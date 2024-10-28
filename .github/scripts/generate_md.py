import os
import xmltodict
from datetime import datetime

# Load and clean up the XML content
with open('posts/rss_feed.xml') as xml_file:
    # Read the XML file, skipping script tags if present
    content = ''.join([line for line in xml_file if not line.strip().startswith('<script')])
    rss_content = xmltodict.parse(content)

# Safely extract items
items = rss_content['rss']['channel'].get('item', [])

# Ensure items is a list of dictionaries
if isinstance(items, dict):  # If a single dictionary, wrap in a list
    items = [items]
elif isinstance(items, list):
    items = [item for item in items if isinstance(item, dict)]  # Filter out non-dictionaries
else:
    items = []  # Default to empty list if structure is unexpected

# Ensure the _posts directory exists
os.makedirs('_posts', exist_ok=True)

# Date parsing function with multiple format support
def parse_date(date_str):
    for fmt in ('%a, %d %b %Y %H:%M:%S %z', '%Y-%m-%d %H:%M:%S'):
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    return None  # Return None if no format matches

# Create Markdown files for each valid dictionary item
for item in items:
    # Confirm that item has the required structure
    title = item.get('title', '').replace(" ", "-").lower()
    pub_date_str = item.get('pubDate', '')

    pub_date = parse_date(pub_date_str)
    if pub_date is None:
        print(f"Skipping item due to unrecognized date format: {pub_date_str}")
        continue

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
        print(f"File {filename} already exists. Skipping creation.")
