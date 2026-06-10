---
title: "Shipping a Design System Solo"
date: 2026-01-15
tags: [design-systems, engineering]
description: "Lessons from building and maintaining a design system as a team of one — what to systematize, what to skip, and when tokens earn their keep."
---

Design systems are usually pitched as a team sport: a squad of designers, a component library guild, a governance committee. But most of us work on small teams — or alone. Here's what actually matters when you're the whole department.

## Start with tokens, not components

Components are seductive because they're visible. But the highest-leverage move is boring: name your colors, spacing, radii, and type styles, and use those names *everywhere*.

```css
:root {
  --space-4: 1rem;
  --radius-md: 8px;
  --text-muted: #666;
}
```

Once tokens exist, every future component inherits consistency for free. Skip this step and you'll be reconciling seventeen shades of gray in six months.

## Document by deleting

Solo systems don't need a documentation site. They need fewer decisions. Every time you catch yourself choosing between two patterns, kill one. The deleted option *is* the documentation.

## Know what not to systematize

One-off marketing pages, experiments, anything you'll touch once — let them be messy. A system earns its keep through repetition. If a pattern appears twice, note it. Three times, tokenize it. Until then, hardcode it and move on.

## The payoff

Six months in, the real benefit isn't visual consistency — it's speed. When the defaults are good, you stop making small decisions and start making better big ones.
