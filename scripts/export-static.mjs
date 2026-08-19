/**
 * Post-build static export for Nginx hosting (no Node process at runtime).
 *
 * Starts the Nitro SSR server briefly, fetches prerendered HTML for `/`,
 * and writes `.output/public/index.html`. Assets are already in `.output/public/`.
 *
 * Requires a working production build first (`npm run build`).
 */
import { spawn } from "node:child_process";
import { writeFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const serverEntry = join(root, ".output/server/index.mjs");
const outFile = join(root, ".output/public/index.html");
const port = Number(process.env.EXPORT_STATIC_PORT ?? 4173);
const baseUrl = `http://127.0.0.1:${port}/`;

async function waitForServer(maxMs = 30_000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(baseUrl, { redirect: "follow" });
      if (res.ok) return res;
    } catch {
      // server not ready yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`SSR server did not become ready on ${baseUrl}`);
}

async function main() {
  await access(serverEntry, constants.R_OK);

  const child = spawn(process.execPath, [serverEntry], {
    cwd: root,
    env: { ...process.env, PORT: String(port), NITRO_PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let stderr = "";
  child.stderr?.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  const kill = () => {
    if (!child.killed) child.kill("SIGTERM");
  };
  process.on("exit", kill);
  process.on("SIGINT", () => {
    kill();
    process.exit(1);
  });

  try {
    const res = await waitForServer();
    const html = await res.text();
    if (!html.includes("<html")) {
      throw new Error("Response did not look like HTML — SSR may have failed.");
    }
    await writeFile(outFile, html, "utf8");
    console.log(`Wrote ${outFile} (${html.length} bytes)`);
  } finally {
    kill();
    await new Promise((resolve) => child.on("close", resolve));
    if (stderr.trim()) {
      console.error(stderr.trim());
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
