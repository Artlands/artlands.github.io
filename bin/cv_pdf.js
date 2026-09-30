#!/usr/bin/env node
// Print the web CV (/cv/) and research statement (/research/) of a built site
// to PDF, so each "Download PDF" link always matches the web version.
// Run after `jekyll build`:
//
//   node bin/cv_pdf.js [site_dir]
//
// Default site_dir=_site; PDFs are written to <site_dir>/assets/pdf/.
// Requires the `playwright` package and a Chromium browser.

const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const siteDir = path.resolve(process.argv[2] || "_site");

// selector: an element that must exist, so an empty page fails loudly.
const pages = [
  { url: "/cv/", out: "CV_JieLi.pdf", selector: ".cv-md h2", footer: "Curriculum Vitae" },
  { url: "/research/", out: "ResearchStatement_JieLi.pdf", selector: ".cv-page h2", footer: "Research Statement" },
];

const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

// Minimal static file server for the built site.
const server = http.createServer((req, res) => {
  let file = path.join(siteDir, decodeURIComponent(new URL(req.url, "http://localhost").pathname));
  if (!file.startsWith(siteDir)) {
    res.writeHead(403).end();
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404).end();
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

(async () => {
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const browser = await chromium.launch();
  try {
    for (const p of pages) {
      const url = `http://127.0.0.1:${server.address().port}${p.url}`;
      const outPath = path.join(siteDir, "assets/pdf", p.out);
      const page = await browser.newPage();
      await page.emulateMedia({ media: "print", colorScheme: "light" });
      await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
      await page.evaluate(() => document.fonts.ready);
      const sections = await page.locator(p.selector).count();
      if (sections === 0) throw new Error(`No sections found at ${url}`);
      // "Last updated" is hidden in print and shown in the footer instead,
      // so it never spills onto a page of its own.
      const updated = (await page.locator(".cv-update").first().textContent({ timeout: 1000 }).catch(() => "")).trim();
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      await page.pdf({
        path: outPath,
        format: "Letter",
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: "<span></span>",
        footerTemplate:
          '<div style="width:100%;font-size:8px;color:#666;padding:0 0.65in;display:flex;justify-content:space-between;">' +
          `<span>Jie Li — ${p.footer}</span><span>${updated}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
      });
      console.log(`Wrote ${path.relative(process.cwd(), outPath)} (${sections} sections)`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
