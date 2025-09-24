---
layout: page
title: Segmentation and Semantic Classification with Pretrained Models
description: An advanced computer vision system combining Meta's SAM (Segment Anything Model) and OpenAI's CLIP for intelligent object detection, segmentation, and natural language-based identification in images.
img: assets/img/8_1.jpg
importance: 2
category: project gallery
related_publications: false
---

This project presents an intelligent animal detection and classification system that combines state-of-the-art computer vision models to identify and locate animals in images using natural language prompts. The system leverages Meta's Segment Anything Model (SAM) for precise object segmentation and OpenAI's CLIP for semantic understanding, creating a powerful tool for wildlife monitoring and research applications.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/8_1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false muted=false %}
    </div>
</div>
<div class="caption text-center">
     Video 1. Real-time animal detection and classification demonstration.
</div>

### Processing Workflow

```python
# Simplified workflow representation
1. Load input image → Image preprocessing
2. Generate object masks → SAM segmentation
3. Filter high-quality masks → Quality assessment
4. Extract object crops → Bounding box extraction
5. Classify each crop → CLIP classification
6. Match user prompt → Semantic matching
7. Generate output visualization → Result overlay
```
