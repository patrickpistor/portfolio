# Jekyll Portfolio Template

A clean, minimal portfolio template for designers and developers — inspired by [mnts.lt](https://www.mnts.lt/). Built with Jekyll and ready to deploy to GitHub Pages in minutes.

**[View demo →](#)** · **[Use this template →](#)**

---

## Previews

### Light mode — Home page

![Home page light mode](https://picsum.photos/seed/preview-home-light/1200/630)

*Bold hero greeting, project grid with three card styles — visual, mixed, and text.*

### Dark mode — Home page

![Home page dark mode](https://picsum.photos/seed/preview-home-dark/1200/630)

*Dark mode activates automatically based on OS preference, or via the toggle in the nav.*

### Project layout — Visual (image-dominant)

![Visual project layout](https://picsum.photos/seed/preview-visual/1200/630)

*Full-bleed hero image with overlaid title. Best for photography, brand campaigns, and visual-first work. Gallery below supports full-width and half-width images.*

### Project layout — Text (editorial)

![Text project layout](https://picsum.photos/seed/preview-text/1200/630)

*No hero image — typography leads. Large display title, editorial body copy, pull quotes. Best for writing, concepts, and research-driven work.*

### Project layout — Mixed (image + prose)

![Mixed project layout](https://picsum.photos/seed/preview-mixed/1200/630)

*Cover image at the top, then alternating side-by-side image+text sections, followed by an optional image gallery. The default layout.*

### Blog

![Blog listing page](https://picsum.photos/seed/preview-blog/1200/630)

*Posts listed newest-first with tag filtering. Each post has reading time, a progress bar, and related posts at the bottom.*

---

## Features

- **Dark & light mode** — follows OS preference by default; manual toggle in the nav persists via `localStorage`
- **Three project layout modes** — `visual` (image-dominant), `text` (editorial, no hero), `mixed` (image + prose)
- **Personal blog** — tag filtering, reading time, related posts, reading progress bar
- **Data-driven customization** — no HTML editing required to add projects, change the footer, or update your bio
- **Font pairing system** — four curated Google Font pairings selectable by name in `_config.yml`
- **Accent color** — set your brand color once; it propagates everywhere via CSS custom properties
- **Customizable footer** — columns, newsletter signup field, social icons — all data-driven via `_data/footer.yml`
- **Responsive** — looks good on every screen size
- **GitHub Pages ready** — deploy with one click via included GitHub Actions workflow

---

## Quick Start

### 1. Use this template

Click **"Use this template"** on GitHub to create your own copy, or clone it:

```bash
git clone https://github.com/yourusername/jekyll-portfolio.git my-portfolio
cd my-portfolio
```

### 2. Install dependencies

You need Ruby installed. Then:

```bash
bundle install
```

### 3. Run locally

```bash
bundle exec jekyll serve --livereload
```

Open [http://localhost:4000](http://localhost:4000).

---

## Customization

Almost everything you need to change is in two files: `_config.yml` and `_data/`.

### `_config.yml` — complete reference

| Key | What it changes | Example |
|-----|----------------|---------|
| `title` | Your name — shown in the nav logo and browser tab | `"Jane Smith"` |
| `tagline` | Short role descriptor shown under the title on the About page | `"Designer & Developer"` |
| `description` | Site meta description used by search engines and link previews | `"I build..."` |
| `email` | Your email address | `"hi@jane.com"` |
| `url` | Your full live site URL (no trailing slash) | `"https://jane.github.io"` |
| `baseurl` | URL prefix — blank for user pages, `/repo-name` for project pages | `""` or `"/portfolio"` |
| **Branding** | | |
| `accent_color` | Any hex color — applied to links, buttons, tags, the progress bar, and focus rings | `"#0052FF"` |
| `font_pairing` | Font preset name (see table below) | `"modern"` |
| `logo` | Path to a logo image file. Leave blank to show your name as text | `"/assets/images/logo.svg"` |
| `avatar` | Path to your photo — shown on the About page | `"/assets/images/me.jpg"` |
| **Navigation** | | |
| `nav_links` | List of nav items — each has `label` and `url` | see `_config.yml` |
| `contact_label` | Text for the pill-shaped Contact button in the nav | `"Contact"` |
| `contact_url` | Where the Contact button links | `"mailto:hi@jane.com"` |
| **Home page** | | |
| `hero_greeting` | The large display text on the home page | `"Hi there!"` |
| `hero_intro` | The paragraph beneath the greeting | `"I'm a..."` |
| `hero_cta_label` | Text for the CTA button beneath the intro | `"View my work"` |
| `hero_cta_url` | Where the CTA button links | `"/#work"` |
| **About page** | | |
| `about_bio` | Bio text — supports Markdown, can be multi-paragraph | see `_config.yml` |
| `skills` | List of skill labels shown as tags on the About page | `["UI Design", "React"]` |
| `social_links` | List of social profiles — each has `label`, `url`, `icon` | see `_config.yml` |

#### Font pairings

| Name | Heading font | Body font | Best for |
|------|-------------|-----------|---------|
| `modern` | Inter | Inter | Clean, versatile, tech-adjacent |
| `editorial` | Playfair Display | Source Serif 4 | Literary, warm, print-inspired |
| `mono` | Space Grotesk | JetBrains Mono | Technical, developer portfolios |
| `classic` | Lora | Open Sans | Timeless, readable, generalist |

#### Social link icons

The four supported `icon` values are: `github`, `x`, `linkedin`, `dribbble`.

To add more icons, create `_includes/icons/<name>.html` with an inline SVG.

```yaml
social_links:
  - label: "GitHub"
    url: "https://github.com/yourusername"
    icon: "github"
```

---

### `_data/projects.yml` — your work

Each entry becomes a card on the home page. The order here is the order on the page.

```yaml
- title: "Project Title"
  category: "Brand & Web"
  description: "One or two sentences about the project."
  cover: "/assets/images/project-cover.jpg"   # or a full URL; leave "" for text layout
  url: "/work/project-slug/"                  # or an external URL
  layout: "mixed"                             # visual | text | mixed
  featured: false                             # true = larger card in the grid (first featured item)
  year: "2024"
```

#### Layout modes — what each one looks like

| Value | Home card | Project detail page |
|-------|----------|---------------------|
| `visual` | Full cover image with thin text overlay at the bottom | Full-bleed hero image, title overlaid, image gallery below |
| `text` | No image — bold typography, muted background | Large display title, editorial body only, no hero image |
| `mixed` | Cover image above, title + description below | Cover image at top, alternating image+prose sections, optional gallery |

> **Tip:** Set `featured: true` on one project to make its card span two columns in the grid. Use a `visual` layout for the featured card for maximum impact.

---

### `_data/footer.yml` — footer columns & newsletter

#### Columns

Add, remove, or reorder columns. Each column has a heading and a list of links:

```yaml
columns:
  - heading: "Work"
    links:
      - label: "Selected Projects"
        url: "/#work"
```

Delete a column block to remove it entirely.

#### Newsletter signup field

The newsletter block supports three modes, all configured in `_data/footer.yml`:

| Config | Effect |
|--------|--------|
| `enabled: false` | Newsletter block hidden entirely |
| `enabled: true`, `field_label: ""`, `field_placeholder: ""` | Just a CTA button (no email field) |
| `enabled: true`, `field_label: "Your email"`, `field_placeholder: "..."`, `form_action: ""` | Email input + button, falls back to `mailto:` on submit |
| `enabled: true`, `field_label: "..."`, `form_action: "https://formspree.io/f/your-id"` | Email input + button, submits to Formspree (or any POST endpoint) |

```yaml
newsletter:
  enabled: true
  heading: "Stay in touch"
  description: "Occasional notes on design and development."
  field_label: "Your email"
  field_placeholder: "you@example.com"
  submit_label: "Subscribe"
  form_action: "https://formspree.io/f/xyzabcde"   # or leave blank for mailto fallback
  form_mailto: "hello@yoursite.com"                  # used as the mailto fallback
```

---

### Adding a project page

Create a file in `_projects/` named `your-project-name.md`:

```markdown
---
layout: project-mixed   # project-visual | project-text | project-mixed
title: "My Project"
category: "Web App"
tagline: "Short subtitle shown under the title."
client: "Client Name"
role: "Design & Development"
year: "2024"
link: "https://example.com"
cover: "/assets/images/my-project.jpg"
---

Write your project description here in Markdown.
```

The project will automatically appear at `/work/my-project/`.

#### `project-visual` — extra options

```yaml
gallery:
  - src: "/assets/images/detail-1.jpg"
    alt: "Detail view"
    caption: "Optional caption"
    full: true    # spans the full gallery width instead of half
  - src: "/assets/images/detail-2.jpg"
    alt: "Another view"
```

#### `project-mixed` — extra options

```yaml
sections:
  - heading: "The Problem"
    body: "Description of the challenge."
    image: "/assets/images/problem.jpg"
  - heading: "The Solution"
    body: "How you solved it."
    image: "/assets/images/solution.jpg"
    image_right: true    # flips image to the right side

gallery:
  - src: "/assets/images/gallery-1.jpg"
    alt: "Final screens"
```

---

### Writing a blog post

Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-06-01
tags: [Design, Process]
excerpt: "A short summary shown in the post list (optional — falls back to the first paragraph)."
cover: "/assets/images/post-cover.jpg"   # optional
---

Your post content in Markdown.
```

Posts appear at `/blog/YYYY/MM/DD/your-title/` and are listed on `/blog/` newest-first with tag filtering.

---

## Deploying to GitHub Pages

### Option A: GitHub Actions (recommended)

1. Push your code to the `main` branch of a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. The included `.github/workflows/deploy.yml` handles the rest automatically

Your site will be live at `https://yourusername.github.io/` (user page) or `https://yourusername.github.io/repo-name/` (project page).

> **User pages** (repository named `yourusername.github.io`): set `baseurl: ""` in `_config.yml`.  
> **Project pages** (any other repository name): set `baseurl: "/repo-name"` in `_config.yml`.

### Option B: Classic branch deploy

1. Go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch → main / (root)**

---

## Project structure

```
.
├── _config.yml               ← All site identity, branding, nav, social links
├── _data/
│   ├── projects.yml          ← Home page project grid (add/edit/remove projects here)
│   └── footer.yml            ← Footer columns, newsletter signup, copyright
├── _layouts/
│   ├── default.html          ← Base layout (nav + footer wrapper)
│   ├── home.html             ← Home page
│   ├── post.html             ← Blog post (reading time, progress bar, related posts)
│   ├── project-visual.html   ← Full-bleed hero + gallery layout
│   ├── project-text.html     ← Editorial / no-image layout
│   └── project-mixed.html    ← Cover + alternating sections + gallery layout
├── _includes/
│   ├── head.html             ← <head> — fonts, theme initialization, SEO tags
│   ├── nav.html              ← Sticky nav with dark/light toggle
│   ├── footer.html           ← Data-driven footer with optional signup form
│   ├── project-nav.html      ← Prev/next project navigation
│   └── icons/                ← SVG partials: github.html, x.html, linkedin.html, dribbble.html
├── _posts/                   ← Blog posts  (YYYY-MM-DD-title.md)
├── _projects/                ← Project detail pages  (slug.md)
├── _sass/
│   ├── _variables.scss       ← CSS custom property definitions (light + dark themes)
│   ├── _reset.scss           ← Minimal CSS reset
│   ├── _base.scss            ← Layout, typography, buttons, tags
│   ├── _nav.scss             ← Navigation and theme toggle
│   ├── _home.scss            ← Hero, project grid, project cards
│   ├── _projects.scss        ← All three project layout templates
│   ├── _blog.scss            ← Blog index and post styles
│   ├── _footer.scss          ← Footer and newsletter signup form
│   └── _utils.scss           ← About page and 404 page
├── assets/
│   ├── css/main.scss         ← SCSS entry point (imports all partials)
│   └── images/               ← Your images go here
├── blog/index.html           ← Blog listing with tag filter
├── index.html                ← Home page
├── about.md                  ← About page
├── 404.html                  ← 404 error page
└── .github/workflows/
    └── deploy.yml            ← GitHub Actions → GitHub Pages deployment
```

---

## Customizing styles

All colors are CSS custom properties defined in `_sass/_variables.scss`. Override the light and dark themes there:

```scss
:root {
  --bg:   #ffffff;
  --text: #111111;
  /* ... */
}

[data-theme="dark"] {
  --bg:   #0f0f0f;
  --text: #f0f0f0;
  /* ... */
}
```

The accent color (`--accent`) is set in `_config.yml` and injected at build time — no SCSS edit needed for that.

Each layout area has its own `_sass/_<name>.scss` file, so it's easy to find and change specific styles without hunting through a monolithic stylesheet.

---

## License

MIT — use it freely for personal or commercial projects. Attribution appreciated but not required.
