---
title: "Typography Is the Interface"
date: 2025-11-02
tags: [typography, design]
description: "Most interfaces are 90% text. Treating type as the primary material — not a finishing touch — changes how you design everything."
cover: "https://picsum.photos/seed/typeface/1200/630"
---

Strip the icons, the illustrations, and the gradients from almost any product, and what's left? Words. Labels, headings, body copy, buttons. Most interfaces are overwhelmingly typographic — yet type is often the last thing we refine.

## Hierarchy does the heavy lifting

Users don't read interfaces; they scan them. A clear type hierarchy — distinct sizes, deliberate weights, generous spacing — answers the user's first question (*"where do I look?"*) before they consciously ask it.

A practical test: blur your screen. If you can still tell what's most important, your hierarchy works. If everything melts into uniform gray soup, no amount of color will save it.

## Line length is a usability feature

Comfortable reading happens between 45 and 75 characters per line. It's not an aesthetic preference — it's how human eyes track text. A `max-width` on your prose is one of the cheapest UX wins available:

```css
.prose {
  max-width: 65ch;
}
```

## Three rules I never break

1. **One typeface is enough.** Two is a luxury. Three is a cry for help.
2. **Line height scales inversely with size.** Big headings want 1.1; body text wants 1.6.
3. **If you're adjusting letter-spacing on body text, stop.** The type designer already did that job.

Design the words first. Everything else is decoration.
