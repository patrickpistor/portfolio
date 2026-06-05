#!/usr/bin/env bash
set -e

JEKYLL_DIR="/home/runner/workspace/jekyll-portfolio"
VITE_DIR="/home/runner/workspace/artifacts/portfolio-preview"

echo "==> Building Jekyll site..."
cd "$JEKYLL_DIR"
bundle exec jekyll build

echo "==> Starting Jekyll watch (background)..."
bundle exec jekyll build --watch --force_polling --incremental 2>&1 &
JEKYLL_PID=$!

cleanup() {
  echo "==> Stopping Jekyll watch..."
  kill "$JEKYLL_PID" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "==> Starting Vite..."
cd "$VITE_DIR"
exec node_modules/.bin/vite --config vite.config.ts --host 0.0.0.0
