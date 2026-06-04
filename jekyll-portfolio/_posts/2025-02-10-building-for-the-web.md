---
layout: post
title: "Building for the Web in 2025"
date: 2025-02-10
tags: [Development, Web]
excerpt: "The web platform keeps getting more capable. Here's what I've changed about how I build — and what I've stopped reaching for libraries to do."
---

I've been building websites for almost a decade, and the last two years have been the most interesting. Not because of any single framework shift, but because the platform itself has quietly become extraordinary.

## What the Browser Can Do Now

View Transitions. Container Queries. `@layer`. `has()`. Anchor Positioning. The `popover` attribute. These aren't niche features — they're production-ready, shipped in every major browser, and they remove entire categories of JavaScript dependency.

I used to reach for a library any time I needed a smooth page transition or a positioned tooltip. Now I don't. The browser handles it, and the result is faster, more accessible, and easier to maintain.

## What I've Stopped Using

I still love React for complex applications with significant state and many interacting parts. But for a marketing site? A portfolio? A content-heavy page? I've largely moved back to simpler approaches.

Progressive enhancement actually works again. Start with semantic HTML. Layer in CSS. Add a small amount of JavaScript only for things that genuinely need it. A site built this way loads faster, works without JS, and is accessible by default.

## The Pendulum is Swinging

The JavaScript-first era produced a generation of developers who reached for a framework before writing a line of HTML. That's changing. There's growing appreciation for the platform itself — for understanding what HTTP, HTML, CSS, and the browser can do without a build step.

I'm not advocating for a return to the early web. The tooling we have is remarkable. But I do think the best developers in 2025 will be fluent in both: knowing when to reach for the framework, and when the platform is enough.
