<p align="center">
  <img src="assets/images/avatar.png" alt="Patrick Pistor" width="110">
</p>

<h1 align="center">Patrick Pistor</h1>

<p align="center">
  <strong>Software Engineer</strong> · Bentonville, Arkansas
</p>

<p align="center">
  <a href="https://patrickpistor.com"><img src="https://img.shields.io/badge/Website-patrickpistor.com-f6e251?style=flat&logo=googlechrome&logoColor=111" alt="Website"></a>
  <a href="https://github.com/patrickpistor/patrickpistor.github.io/actions/workflows/deploy.yml"><img src="https://github.com/patrickpistor/patrickpistor.github.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy"></a>
  <a href="https://jekyllrb.com"><img src="https://img.shields.io/badge/Jekyll-3.10-CC0000?logo=jekyll&logoColor=white" alt="Jekyll"></a>
  <a href="https://www.ruby-lang.org"><img src="https://img.shields.io/badge/Ruby-3.3-CC342D?logo=ruby&logoColor=white" alt="Ruby"></a>
  <a href="https://pages.github.com"><img src="https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222?logo=github" alt="GitHub Pages"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
</p>

<p align="center">
  Source repo for <a href="https://patrickpistor.com">patrickpistor.com</a> — my personal portfolio, project case studies, and writing.
</p>

---

## About

I'm a software engineer based in Bentonville, Arkansas. This site is where I share selected work, occasional writing, and a bit about what I'm building.

**What I do:** Software Engineering · Web Development

---

## Links

| | |
|---|---|
| **Website** | [patrickpistor.com](https://patrickpistor.com) |
| **Email** | [contact@patrickpistor.com](mailto:contact@patrickpistor.com) |
| **LinkedIn** | [linkedin.com/in/ppistor](https://www.linkedin.com/in/ppistor/) |
| **GitHub** | [github.com/patrickpistor](https://github.com/patrickpistor) |
| **Dribbble** | [dribbble.com/patrickpistor](https://dribbble.com/patrickpistor) |
| **Substack** | [patrickpistor.substack.com](https://patrickpistor.substack.com/) |
| **Resume** | [LinkedIn profile](https://www.linkedin.com/in/ppistor/) *(PDF coming soon)* |

---

## Site

| Page | URL |
|------|-----|
| Home | [patrickpistor.com](https://patrickpistor.com) |
| Work | [patrickpistor.com/work/](https://patrickpistor.com/work/) |
| Writing | [patrickpistor.com/writing/](https://patrickpistor.com/writing/) |
| About | [patrickpistor.com/about/](https://patrickpistor.com/about/) |

---

## Stack

- **[Jekyll](https://jekyllrb.com)** — static site generator
- **SCSS** — styling via `_sass/` partials
- **Vanilla JS** — theme toggle, blog search/sort, email copy
- **[GitHub Actions](https://github.com/patrickpistor/patrickpistor.github.io/actions/workflows/deploy.yml)** — build & deploy to GitHub Pages
- **Custom domain** — `patrickpistor.com` via [`CNAME`](CNAME)

Dark/light mode, RSS feed, SEO tags, and empty states for projects and writing are all baked in.

---

## Running Locally

Requires Ruby 3.3 (see [`.ruby-version`](.ruby-version)).

```bash
git clone https://github.com/patrickpistor/patrickpistor.github.io.git
cd patrickpistor.github.io
bundle install
bundle exec jekyll serve --livereload
```

Open [http://localhost:4000](http://localhost:4000).

> Changes to [`_config.yml`](_config.yml) require restarting the Jekyll server.

---

## Template credit

Forked from [Portfolio Starter Kit](https://github.com/Eligeant/Portfolio-Starter-Kit) created by my company [Eligeant](https://github.com/Eligeant). Customized for personal use.

---

## License

[MIT](LICENSE) — use freely for personal or commercial projects.
