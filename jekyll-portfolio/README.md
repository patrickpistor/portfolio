# Jekyll Portfolio Template

A clean, minimal portfolio template for designers and developers — inspired by [mnts.lt](https://www.mnts.lt/). Built with Jekyll and ready to deploy to GitHub Pages in minutes.

**[View demo →](#)** · **[Use this template →](#)**

![Portfolio preview](https://picsum.photos/seed/portfolio-preview/1200/630)

---

## Features

- **Dark & light mode** — follows OS preference by default; manual toggle in the nav persists via `localStorage`
- **Three project layout modes** — `visual` (image-dominant), `text` (editorial, no hero), `mixed` (image + prose)
- **Personal blog** — tag filtering, reading time, related posts, reading progress bar
- **Data-driven customization** — no HTML editing required to add projects, change the footer, or update your bio
- **Font pairing system** — four curated Google Font pairings selectable by name in `_config.yml`
- **Accent color** — set your brand color once; it propagates everywhere via CSS custom properties
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

### `_config.yml` — site identity & branding

| Key | What it changes |
|-----|----------------|
| `title` | Your name — shown in the nav logo and browser tab |
| `tagline` | Short role descriptor shown in the nav (desktop) |
| `description` | Site meta description (SEO) |
| `email` | Used by the Contact button if `contact_url` is a `mailto:` link |
| `url` | Your live site URL (e.g. `https://yourusername.github.io`) |
| `baseurl` | Leave blank for user pages; set to `/repo-name` for project pages |
| `accent_color` | Any hex value — propagates to links, buttons, tags, and highlights |
| `font_pairing` | `modern` \| `editorial` \| `mono` \| `classic` (see below) |
| `logo` | Path to a logo image. Leave blank to use your name as text |
| `avatar` | Path to your photo — shown on the About page |
| `hero_greeting` | The big heading on the home page (e.g. "Hi there!") |
| `hero_intro` | The paragraph beneath the greeting |
| `hero_cta_label` | Text for the home page CTA button |
| `hero_cta_url` | Where the CTA button links |
| `about_bio` | Multi-line bio text (supports Markdown) |
| `skills` | List of skill labels shown as tags on the About page |
| `social_links` | List of social profiles (see format below) |
| `contact_label` | Text for the Contact button in the nav |
| `contact_url` | Where the Contact button links (e.g. `mailto:you@example.com`) |

#### Font pairings

| Name | Heading font | Body font | Vibe |
|------|-------------|-----------|------|
| `modern` | Inter | Inter | Clean, professional, neutral |
| `editorial` | Playfair Display | Source Serif 4 | Literary, warm, timeless |
| `mono` | Space Grotesk | JetBrains Mono | Technical, distinctive, dev-forward |
| `classic` | Lora | Open Sans | Traditional, readable, friendly |

#### Social links format

```yaml
social_links:
  - label: "GitHub"
    url: "https://github.com/yourusername"
    icon: "github"   # github | x | linkedin | dribbble
```

---

### `_data/projects.yml` — your work

Each entry becomes a card on the home page. Order in this file is the order on the page.

```yaml
- title: "Project Title"
  category: "Brand & Web"
  description: "One or two sentences about the project."
  cover: "/assets/images/project-cover.jpg"   # or a full URL
  url: "/work/project-slug/"                  # or an external URL
  layout_hint: "mixed"                        # visual | text | mixed
  featured: false                             # true = larger card in the grid
  year: "2024"
```

#### Layout hints

| Value | Card style | Best for |
|-------|-----------|---------|
| `visual` | Full image, text overlay | Photography, brand, visual work |
| `text` | No image, bold typography | Writing, editorial, concept work |
| `mixed` | Image above, text below | Most projects (default) |

---

### `_data/footer.yml` — footer columns

Add, remove, or reorder columns. Each column has a heading and a list of links:

```yaml
columns:
  - heading: "Work"
    links:
      - label: "Selected Projects"
        url: "/#work"
```

Set `newsletter.enabled: false` to hide the newsletter block entirely.

---

### Adding a project page

Create a file in `_projects/`:

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

#### Visual layout extras

Add a `gallery` list to show an image grid:

```yaml
gallery:
  - src: "/assets/images/detail-1.jpg"
    alt: "Detail view"
    caption: "Optional caption"
    full: true    # spans full grid width
```

#### Mixed layout extras

Add a `sections` list for alternating image + text blocks:

```yaml
sections:
  - heading: "The Problem"
    body: "Description of the challenge."
    image: "/assets/images/problem.jpg"
  - heading: "The Solution"
    body: "How you solved it."
    image: "/assets/images/solution.jpg"
    image_right: true    # puts image on the right
```

---

### Writing a blog post

Create a file in `_posts/` named `YYYY-MM-DD-your-post-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-06-01
tags: [Design, Process]
excerpt: "A short summary shown in the post list."
cover: "/assets/images/post-cover.jpg"   # optional
---

Your post content in Markdown.
```

---

## Deploying to GitHub Pages

### Option A: Automatic (recommended)

1. Push your code to the `main` branch of a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. That's it — the included `.github/workflows/deploy.yml` handles the rest

Your site will be live at `https://yourusername.github.io/repo-name/`.

> **User pages** (`yourusername.github.io`): set `baseurl: ""` in `_config.yml`.  
> **Project pages** (`yourusername.github.io/repo-name`): set `baseurl: "/repo-name"`.

### Option B: Classic GitHub Pages

1. Go to **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose `main` / `(root)`

---

## Project structure

```
.
├── _config.yml          ← Site identity, branding, nav, social links
├── _data/
│   ├── projects.yml     ← Home page project grid
│   └── footer.yml       ← Footer columns and newsletter block
├── _layouts/
│   ├── default.html     ← Base layout (nav + footer)
│   ├── home.html        ← Home page wrapper
│   ├── post.html        ← Blog post layout
│   ├── project-visual.html
│   ├── project-text.html
│   └── project-mixed.html
├── _includes/
│   ├── head.html        ← <head> with fonts, theme script, SEO
│   ├── nav.html         ← Sticky nav with theme toggle
│   ├── footer.html      ← Data-driven footer
│   └── icons/           ← SVG icon partials
├── _posts/              ← Blog posts (YYYY-MM-DD-title.md)
├── _projects/           ← Project detail pages
├── _sass/               ← Modular SCSS (edit to customize styles)
├── assets/
│   ├── css/main.scss    ← SCSS entry point
│   └── images/          ← Your images go here
├── blog/index.html      ← Blog listing page
├── index.html           ← Home page
├── about.md             ← About page
└── .github/workflows/
    └── deploy.yml       ← GitHub Actions deployment
```

---

## Customizing styles

All colors are CSS custom properties in `_sass/_variables.scss`. To change the light and dark theme:

```scss
:root {
  --bg:   #ffffff;
  --text: #111111;
  // ...
}

[data-theme="dark"] {
  --bg:   #0f0f0f;
  --text: #f0f0f0;
  // ...
}
```

The accent color is set in `_config.yml` and injected as `--accent` at build time — you don't need to touch the SCSS for that.

---

## License

MIT — use it for personal or commercial projects, attribution appreciated but not required.
