# Contributing to Portfolio Starter Kit

Thanks for your interest in contributing! This project aims to stay a **minimal, config-driven Jekyll template** that anyone can fork and personalize in minutes. Contributions that keep it simple, fast, and easy to customize are very welcome.

## Ways to contribute

- **Report a bug** — open an issue using the Bug Report template
- **Suggest a feature** — open an issue using the Feature Request template
- **Show off your site** — built your portfolio with this template? Add it to the [Examples](README.md#examples) section! Open a PR using the "Add your site to Examples" template
- **Submit a fix or improvement** — fork, branch, and open a PR

## Development setup

You need Ruby 3.x (the macOS system Ruby is too old). A `.ruby-version` file is included for [rbenv](https://github.com/rbenv/rbenv).

```bash
git clone https://github.com/patrickpistor/Portfolio-Starter-Kit.git
cd Portfolio-Starter-Kit
bundle install
bundle exec jekyll serve --livereload
```

Open [http://localhost:4000](http://localhost:4000). Changes to most files reload automatically — but **changes to `_config.yml` require a server restart**.

## Project principles

Please keep these in mind when proposing changes:

1. **Config-driven** — site owners should customize through `_config.yml` and `_data/`, not by editing templates
2. **No frameworks** — custom SCSS with CSS custom properties, vanilla JS only
3. **Fast and static** — no build-time dependencies beyond Jekyll and GitHub Pages-supported plugins
4. **Both themes always** — every visual change must look right in light *and* dark mode (toggle in the nav)
5. **Mobile first** — check small screens, especially the nav, project strip, and writing index

## Pull request checklist

Before opening a PR:

- [ ] `bundle exec jekyll build` completes without errors
- [ ] Pages affected by your change look correct in **light and dark mode**
- [ ] Tested at mobile width (≤640px) if the change touches layout
- [ ] No hardcoded colors — use the CSS custom properties in `_sass/_variables.scss`
- [ ] New config options are documented in `_config.yml` comments and the README

## Project structure

See the [Project structure](README.md#project-structure) section of the README for a map of the codebase.

## Questions?

Open an issue — happy to help.
