---
layout: project-mixed
title: "Terrain Studio"
category: "Web App"
tagline: "A collaborative design tool for landscape architects with real-time multiplayer editing."
client: "Terrain Studio"
role: "Product Design, Front-End Development"
year: "2024"
link: "https://example.com"
cover: "https://picsum.photos/seed/terrain/1600/900"
sections:
  - heading: "The Problem"
    body: "Landscape architects were emailing PDFs back and forth and annotating over phone calls. The collaboration problem was being solved the same way it was in 2005."
    image: "https://picsum.photos/seed/terrain2/800/600"
  - heading: "The Solution"
    body: "A browser-based canvas tool built around a shared multiplayer session. Every team member sees the same site plan, in real time. Comments are anchored to specific locations on the canvas."
    image: "https://picsum.photos/seed/terrain3/800/600"
    image_right: true
gallery:
  - src: "https://picsum.photos/seed/terrain4/800/600"
    alt: "Canvas view"
    caption: "The main editing canvas"
  - src: "https://picsum.photos/seed/terrain5/800/600"
    alt: "Layer panel"
    caption: "Layer and annotation panel"
  - src: "https://picsum.photos/seed/terrain6/800/600"
    alt: "Mobile view"
    caption: "Responsive view for site visits"
---

Terrain Studio is a design and collaboration tool for landscape architecture firms. The core insight: the design review process was broken, and fixing it required rethinking the canvas, not just adding comments to an existing tool.

## My Role

I worked with the founding team from concept through launch — product strategy, interface design, and front-end implementation. The stack uses a WebSocket server for real-time sync and a canvas API for rendering.

## Design Challenges

The hardest problem wasn't the multiplayer sync — it was the *awareness* layer. How do you show multiple people working on the same document without the interface becoming chaotic?

We landed on a minimal presence system: initials in the corner, a coloured cursor per user, and a soft highlight around whatever area each person is actively working in. Enough to orient yourself; not enough to distract.
