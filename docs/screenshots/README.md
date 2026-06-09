# Screenshot Capture Guide

This folder holds the promo graphics used in the root README. Below are the exact filenames the README expects, plus instructions for capturing each one.

## Files to create

| Filename | What to capture |
|----------|-----------------|
| `home-light.png` | Home page, light mode — full viewport |
| `home-dark.png` | Home page, dark mode — full viewport |
| `layout-visual.png` | A `project-visual` detail page — `/work/brand-identity/` |
| `layout-text.png` | A `project-text` detail page — `/work/type-specimen/` |
| `layout-mixed.png` | A `project-mixed` detail page — `/work/product-landing/` |

## Recommended settings

- **Viewport:** 1440 × 900 (desktop) for full-page captures; 1200 × 630 crop for OG/social previews
- **Scale:** 2× (retina) if your tool supports it — results in a 2400 × 1260 image for social

## Steps

1. Run the site locally: `bundle exec jekyll serve --livereload`
2. Open [http://localhost:4000](http://localhost:4000) in your browser.
3. For `home-light.png`: capture the page as-is (light mode is the default).
4. For `home-dark.png`: click the dark-mode toggle in the nav, then capture.
5. For each layout screenshot, navigate to the URL listed above and capture.

## Adding screenshots to the README

Once you have your images, open `README.md` and uncomment the screenshot block near the top:

```markdown
![Home page — light mode](docs/screenshots/home-light.png)
![Home page — dark mode](docs/screenshots/home-dark.png)
![Visual layout](docs/screenshots/layout-visual.png)
![Text layout](docs/screenshots/layout-text.png)
![Mixed layout](docs/screenshots/layout-mixed.png)
```

Remove the `<!--` and `-->` comment wrappers around those lines.
