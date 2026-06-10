---
title: "Static Sites Are Underrated"
date: 2025-08-20
tags: [engineering, web]
description: "In a world of hydration strategies and edge runtimes, the humble static site remains the fastest, cheapest, most durable way to publish."
---

Every few years the industry rediscovers a truth it keeps forgetting: for most websites, generating HTML ahead of time beats generating it on every request.

## The boring superpowers

A static site has no servers to patch, no database to back up, no cold starts, and no runtime to exploit. Hosting is free or close to it. Pages arrive as fast as the CDN can move them — which is very fast.

But the underrated part is *durability*. A folder of HTML and Markdown will build and deploy a decade from now. The same can rarely be said for an app pinned to a specific framework version, ORM, and managed database.

## "But I need dynamic features"

Less often than you'd think:

- **Search and filtering** — client-side JavaScript over a small JSON index handles thousands of items effortlessly.
- **Forms** — point them at any of a dozen form endpoints.
- **Comments and reactions** — third-party embeds, or skip them entirely.

The dynamic slice of most "dynamic" sites is a rounding error. Render the other 98% once, at build time.

## Where the line actually is

Real-time collaboration, per-user dashboards, anything with authentication at its core — build an app. But a portfolio, a blog, documentation, a marketing site? Static wins on every axis that matters: speed, cost, security, and longevity.

Choose boring. Your future self will thank you.
