import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");

let html = await readFile(join(outDir, "index.html"), "utf8");

const stylesheetPattern = /<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/g;
const styles = [];

for (const match of html.matchAll(stylesheetPattern)) {
  const href = match[1];
  if (!href.startsWith("/_next/")) continue;
  styles.push(await readFile(join(outDir, href), "utf8"));
}

html = html
  .replace(stylesheetPattern, "")
  .replace(/<link[^>]+href="\/_next\/[^"]+"[^>]*>/g, "")
  .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "")
  .replace("</head>", `<style>${styles.join("\n")}</style></head>`)
  .replace(
    "</body>",
    `<script>
      (() => {
        const menuButton = document.querySelector('.menu-button');
        const mobileNav = document.querySelector('.mobile-nav');
        if (menuButton && mobileNav) {
          menuButton.addEventListener('click', () => {
            const existing = document.getElementById('mobile-menu');
            if (existing) {
              existing.remove();
              menuButton.setAttribute('aria-expanded', 'false');
              return;
            }
            const menu = document.createElement('div');
            menu.id = 'mobile-menu';
            menu.className = 'mobile-menu';
            menu.innerHTML = '<a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#contact">Contact</a>';
            menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => menu.remove()));
            mobileNav.appendChild(menu);
            menuButton.setAttribute('aria-expanded', 'true');
          });
        }

        const copyButton = document.querySelector('.contact-copy');
        if (copyButton) {
          copyButton.addEventListener('click', async () => {
            await navigator.clipboard.writeText('mohamed.senator@icloud.com');
            const original = copyButton.innerHTML;
            copyButton.textContent = 'Email copied';
            window.setTimeout(() => { copyButton.innerHTML = original; }, 1800);
          });
        }
      })();
    </script></body>`,
  );

const projectImages = [
  "cloudops-rescue.webp",
  "airgap-auditor.webp",
  "gcp-fortress.webp",
  "stacksmith.webp",
  "gcp-kube-vanguard.webp",
  "state-ops-controller.webp",
];

for (const filename of projectImages) {
  const image = await readFile(join(root, "public", "projects", filename));
  const dataUri = `data:image/webp;base64,${image.toString("base64")}`;
  html = html.replaceAll(`/projects/${filename}`, dataUri);
}

const worker = `const HTML = ${JSON.stringify(html)};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/robots.txt") {
      return new Response("User-agent: *\\nAllow: /\\n", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(HTML, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300, s-maxage=3600",
        "content-security-policy": "default-src 'self'; img-src 'self' https://avatars.githubusercontent.com data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self' https://chatgpt.com",
        "referrer-policy": "strict-origin-when-cross-origin",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
      },
    });
  },
};
`;

await mkdir(join(distDir, "server"), { recursive: true });
await mkdir(join(distDir, ".openai"), { recursive: true });
await writeFile(join(distDir, "server", "index.js"), worker);
await writeFile(
  join(distDir, ".openai", "hosting.json"),
  await readFile(join(root, ".openai", "hosting.json")),
);

console.log(`Packaged edge worker (${Math.round(worker.length / 1024)} KB)`);
