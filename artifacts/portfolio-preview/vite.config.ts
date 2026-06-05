import { defineConfig, type Plugin } from "vite";
import path from "path";

const rawPort = process.env.PORT ?? "6000";
const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const JEKYLL_SITE = path.resolve(
  import.meta.dirname,
  "../../jekyll-portfolio/_site",
);

function jekyllLivereloadPlugin(): Plugin {
  return {
    name: "jekyll-livereload",
    configureServer(server) {
      server.watcher.add(JEKYLL_SITE);
      server.watcher.on("change", (changedPath) => {
        if (changedPath.startsWith(JEKYLL_SITE)) {
          server.ws.send({ type: "full-reload" });
        }
      });
      server.watcher.on("add", (addedPath) => {
        if (addedPath.startsWith(JEKYLL_SITE)) {
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

export default defineConfig({
  base: "/",
  root: JEKYLL_SITE,
  publicDir: false,
  appType: "mpa",
  plugins: [jekyllLivereloadPlugin()],
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
