---
layout: page
title: Indoor Positioning for Mobile Robots
description: Thanks to UWB technology, robots can now navigate indoors with centimeter-level precision. The project was carried out at PIAP Lukasiewicz, a leading Polish government defence research institute.
img: assets/img/1_1.jpg
importance: 2
category: project gallery
related_publications: false
---

[GitHub Repository](https://github.com/KavinPalanichamy/IndoorNavigation)

A novel approach to solving the challenge of Indoor positioning for mobile robots with UWB technology. The system automatically transitions between GNSS and UWB based on signal quality and availability, ensuring continuous positioning accuracy.

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include video.liquid path="assets/video/1_1.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false muted=false %}
    </div>
</div>
<div class="caption text-center">
     Video 1. Real-time demonstration of a mobile Robot using UWB beacons for localization. The initial noise that is visible is the GNSS Signal.
</div>

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_2.jpg" title="DWM 10001-DEV by QORVO" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-center">
     Fig 1. PIAP Hunter with UWB modules
</div>

## System Overview

The project addresses the limitations of traditional GNSS in indoor environments by integrating UWB technology for centimeter-level precision. The system automatically transitions between GNSS and UWB based on signal quality and availability, ensuring continuous positioning accuracy.

Key features include:

- Seamless transition between indoor and outdoor navigation
- Centimeter-level positioning accuracy indoors
- Integration with existing GNSS systems
- Real-time position tracking and visualization

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1_3.png" title="Testing Setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig 2. Testing setup
</div>

## Technical Implementation

The system utilizes Qorvo's UWB modules configured as anchors and tags. The anchors are strategically placed in the indoor environment, while tags are mounted on mobile robots. A Raspberry Pi processes the positioning data and converts local coordinates to global coordinates using the Haversine formula.

## Results and Performance

Testing demonstrated superior positioning accuracy in indoor environments using UWB compared to GNSS:

- Stable positioning in indoor corridors (shown in green)
- Successful automatic transition to GNSS outdoors
- Reliable performance in GNSS-challenged environments
- Real-time position updates with minimal latency

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/1_4.png" title="Console Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Fig 3. Navigation results showing UWB positioning (green) vs GNSS (blue) indoors
</div>

## Network Configuration Guidelines

For optimal UWB network performance:

1. Symmetric module arrangement
2. 10m spacing between rows
3. Variable height placement for Z-axis coverage
4. Strategic anchor positioning for maximum coverage

The project successfully demonstrates the feasibility of seamless indoor-outdoor navigation for mobile robots, opening new possibilities for autonomous navigation in complex environments.
