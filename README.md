# Portfolio Starter Kit

A minimal, customizable portfolio template built with Jekyll. Fork it, fill in your details, and deploy to GitHub Pages in minutes. Link to your resume, your Substack, and showcase your work with three distinct project layouts.

**[Use this template →](https://github.com/patrickpistor/Portfolio-Starter-Kit/generate)**

---

## Screenshots

> Professional screenshots coming soon. To add yours, drop images in `docs/screenshots/` and uncomment the lines below.

<!--
![Home page — light mode](docs/screenshots/home-light.png)
![Home page — dark mode](docs/screenshots/home-dark.png)
![Visual layout](docs/screenshots/layout-visual.png)
![Text layout](docs/screenshots/layout-text.png)
![Mixed layout](docs/screenshots/layout-mixed.png)
-->

See [`docs/screenshots/README.md`](docs/screenshots/README.md) for capture instructions.

---

## Features

- **Dark & light mode** — follows OS preference; manual toggle in the nav persists via `localStorage`
- **Project grid** — data-driven home page cards; first card is the hero, rest fill a responsive grid
- **Three project layouts** — `project-visual` (full-bleed hero + gallery), `project-text` (editorial, no image), `project-mixed` (cover + alternating sections + gallery)
- **Resume link** — drop a PDF at `assets/resume.pdf` and add it to `nav_links` in `_config.yml`
- **Substack / writing link** — add your URL directly in `nav_links`; optionally set `substack.username` to surface a secondary nav link
- **Accent color** — set once in `_config.yml`; propagates everywhere via CSS custom properties
- **Four font pairings** — `modern`, `editorial`, `mono`, `classic`; pick one in `_config.yml`
- **GitHub Pages ready** — deploy with the included GitHub Actions workflow

---

## Quick start

You need Ruby 3.x installed (the macOS system Ruby is too old). Install it via [rbenv](https://github.com/rbenv/rbenv) or `brew install ruby`. A `.ruby-version` file is included for rbenv. Then:

```bash
git clone https://github.com/patrickpistor/Portfolio-Starter-Kit.git my-portfolio
cd my-portfolio
bundle install
bundle exec jekyll serve --livereload
```

Open [http://localhost:4000](http://localhost:4000).

---

## Customize in 5 minutes

Almost everything lives in two files.

**`_config.yml`** — your name, bio, accent color, font pairing, nav links, social icons:

```yaml
title: "Your Name"
tagline: "Designer & Developer"
accent_color: "#0052FF"
font_pairing: "modern"   # modern | editorial | mono | classic

nav_links:
  - label: "Work"
    url: "/#work"
  - label: "Writing"
    url: "https://yourname.substack.com"
  - label: "About"
    url: "/about/"
  - label: "Resume"
    url: "/assets/resume.pdf"
```

**`_data/projects.yml`** — the cards on your home page:

```yaml
- title: "My Project"
  category: "Brand & Web"
  description: "Short description shown on the card."
  cover: "/assets/images/project-cover.jpg"   # leave blank for an icon card
  url: "/work/my-project/"
  year: "2024"
```

---

## Adding a project

**1. Add a card** to `_data/projects.yml` (see above). The first entry becomes the full-width hero card.

**2. Create a detail page** at `_projects/my-project.md`:

```markdown
---
layout: project-visual   # project-visual | project-text | project-mixed
title: "My Project"
category: "Brand & Web"
tagline: "Short subtitle."
client: "Client Name"
role: "Design & Development"
year: "2024"
cover: "/assets/images/cover.jpg"
---

Write your project description here in Markdown.
```

The page is automatically available at `/work/my-project/`.

### Layout options

| Layout | Best for |
|--------|----------|
| `project-visual` | Photography, brand campaigns — full-bleed hero + image gallery |
| `project-text` | Writing, research, concepts — large display title, no hero image |
| `project-mixed` | Most projects — cover image, alternating image+prose sections, optional gallery |

---

## Deploy to GitHub Pages

1. Push your repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` handles the rest on every push to `main`.

**User pages** (`yourusername.github.io`): leave `baseurl: ""` in `_config.yml`.  
**Project pages** (any other repo name): set `baseurl: "/repo-name"` in `_config.yml`.

---

## Project structure

```
.
├── _config.yml          ← site identity, branding, nav, social links
├── _data/
│   └── projects.yml     ← home page project grid
├── _layouts/
│   ├── project-visual.html
│   ├── project-text.html
│   └── project-mixed.html
├── _projects/           ← project detail pages (slug.md)
├── _sass/               ← SCSS partials (_variables, _home, _projects, …)
├── assets/
│   ├── css/main.scss
│   └── images/          ← your images go here
├── about.md
├── index.html
├── Gemfile
└── .github/workflows/deploy.yml
```

---

## License

MIT — use freely for personal or commercial projects.
