#!/usr/bin/env node
// Print the web CV (/cv/) of a built site to PDF, so the "Download PDF" link
// always matches the web version. Run after `jekyll build`:
//
//   node bin/cv_pdf.js [site_dir] [output_path]
//
// Defaults: site_dir=_site, output_path=<site_dir>/assets/pdf/CV_JieLi.pdf
// Requires the `playwright` package and a Chromium browser.

const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const siteDir = path.resolve(process.argv[2] || "_site");
const outPath = path.resolve(process.argv[3] || path.join(siteDir, "assets/pdf/CV_JieLi.pdf"));

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
  const url = `http://127.0.0.1:${server.address().port}/cv/`;
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.emulateMedia({ media: "print", colorScheme: "light" });
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    const entries = await page.locator(".cv-md h2").count();
    if (entries === 0) throw new Error(`No CV sections found at ${url}`);
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
        '<span>Jie Li — Curriculum Vitae</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>',
    });
    console.log(`Wrote ${path.relative(process.cwd(), outPath)} (${entries} CV sections)`);
  } finally {
    await browser.close();
    server.close();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
