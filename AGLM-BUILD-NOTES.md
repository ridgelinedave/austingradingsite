# AGLM Build Notes

## 2026-07-03 — Location pages (AGLM-LOCATION-PAGES-SPEC) + on-site local-SEO residuals

### What shipped
- **Locations hub** at `/locations/` linking all 9 towns + an intro/CTA.
- **9 town pages** under `site/locations/`, each genuinely distinct (437–480 words of
  unique body copy, no shared body paragraphs — spot-diffed programmatically).
- **Site-wide skip-link + `<main id="main">` landmark** added to all 14 existing pages
  and all 10 new pages (Part B #1 — closes the WCAG 2.1 AA gap from the 2026-06-30 audit §7).
- **GeneralContractor JSON-LD** added to `contact.html` + `about.html` (Part B #2).
- **`netlify.toml` removed** from `site/` (Part B #3); `_headers` comment updated; nothing
  referenced it except that historical comment.
- Sitemap: 10 new www/extensionless URLs. Footer "Areas We Serve" link on all 12
  full-footer pages. Home "Serving Western NC" section now links every town + a hub button.

### The 10 new URLs (canonical, www, extensionless)
1. https://www.aglmnc.com/locations
2. https://www.aglmnc.com/locations/excavation-grading-burnsville-nc  (Yancey)
3. https://www.aglmnc.com/locations/excavation-grading-spruce-pine-nc  (Mitchell)
4. https://www.aglmnc.com/locations/excavation-grading-bakersville-nc  (Mitchell, seat)
5. https://www.aglmnc.com/locations/excavation-grading-newland-nc  (Avery, seat)
6. https://www.aglmnc.com/locations/excavation-grading-banner-elk-nc  (Avery)
7. https://www.aglmnc.com/locations/excavation-grading-asheville-nc  (Buncombe)
8. https://www.aglmnc.com/locations/excavation-grading-weaverville-nc  (Buncombe)
9. https://www.aglmnc.com/locations/excavation-grading-marshall-nc  (Madison, seat)
10. https://www.aglmnc.com/locations/excavation-grading-mars-hill-nc  (Madison)

### GA / measurement — CONFIRMED INTACT
- Every new page carries the exact inline gtag block for **G-009DMZY0NB**, copied
  byte-for-byte. Recomputed SHA-256 of the block on the new pages =
  `sha256-d9FZE3UoOxTKClo7lx1cO1CCfy3YLld3wCcn/02JDpU=`, which matches the CSP
  `script-src` allowlist in `site/_headers`. The CSP directive itself is unchanged
  (only a comment edited). tel: and Request-a-Quote links feed the existing
  phone_click / generate_lead events via the unchanged `js/script.js`.

## COMPLIANCE-REPORT (web-developer.md §5.2 steps 7–8)

### Objective / copy items — ALL PASS
- **Unique title + meta + single `<h1>`** per page: verified (1 h1 each; unique titles/metas). ✅
- **No duplicate body content**: 0 shared substantial paragraphs across the 9 town pages. ✅
- **Genuinely distinct local specifics** (county, drive-to-Burnsville, real terrain/soil):
  worked into every page from true facts (Mount Mitchell/Yancey; Spruce Pine quartz-mining
  district; Roan Mountain rainfall/Bakersville; Newland highest eastern county seat +
  freeze-thaw; Banner Elk ~3,700 ft ski country; Asheville rivers/commercial; Weaverville
  Reems Creek growth; Marshall French Broad narrow valley; Mars Hill university + proximity). ✅
- **Credibility anchors** (NCDOT pre-qualified · NC licensed commercial GC — **no dollar cap**,
  per master §10 · local/accountable) on every page. ✅
- **Cross-links** to relevant service pages with descriptive anchor text. ✅
- **One clear CTA + tap-to-call**, CTA wording varied down each page (no two identical
  consecutive CTAs). ✅
- **LocalBusiness/GeneralContractor JSON-LD** with areaServed = town + county; NAP identical
  site-wide; all JSON-LD parses (validated). ✅
- **Imagery**: existing real job-site photos only, all `<img>` have real descriptive alt
  (38 imgs, 0 empty alt; 10 hero-bg `role="img"` with aria-label). ✅
- **Placeholders/TODOs/em-dashes/pricing/named-target-industries/"nationwide"**: none. ✅
- **Mobile** (tested Chromium + WebKit-class checks via preview): no horizontal scroll at
  320/375/430px; mobile nav hamburger visible, drawer opens, links visible + hit-tested +
  ≥44px tap targets (53px) + navigate; sticky mobile bar present. ✅
- **CSP** unchanged and valid; GA hosts + web3forms still allowed; inline-GA hash matches on
  new pages. ✅
- **Accessibility**: skip-link → `#main` with visible :focus; `<main>` landmark id matches. ✅

### Independent security review (/sec-review) — CLEAN
No vulnerabilities (nothing at confidence ≥8). Static HTML, no injection sink, no new inline
script, CSP not weakened, no secrets, external links carry `rel="noopener"`. Full result in
commit context.

### Code correctness
Validated via automated structural sweep (balanced `<main>`, one body/h1, links resolve,
JSON-LD/sitemap XML parse) + browser E2E (render, console-clean, mobile nav, no overflow).
No new JavaScript/logic was introduced (content-only static HTML reusing the live design
system), so the multi-agent /code-review was scoped to that automated + browser pass.

### Subjective / visual items — FLAGGED FOR DAVID (not auto-resolved)
- **Hero visual-impact rating: 4/5.** These are *interior* location pages, not homepage
  showpieces. Each page-header hero reuses an existing real AGLM job-site photo as the
  background (same pattern as the live service pages) — professional and representative of
  the business. They are **not** unique per-town photography; if you want each town visually
  differentiated further, that needs town-specific photos we don't currently have.
- **No town ran thin.** Every page has genuine, true specifics. Weaverville and Mars Hill
  lean more on growth/proximity angles than dramatic terrain, but both still carry real,
  verifiable local detail — no thin/doorway page shipped.

### Deploy
- Backup snapshot added: `website-deploys/AGLM-website_2026-07-03_2358.zip` (existing zips
  untouched — add-only).
- Deploy = git push to `main` (Cloudflare Pages auto-publishes).

---

## NAP name → "and" (SEO/citation consistency) — 2026-07-03
Reverted the business name from "Austin Grading & Land Management" to **"Austin Grading and Land Management"** everywhere it is a NAP/brand name string, to match GBP and all other citations/profiles (they use "and", not "&"). NAP consistency is a local-SEO ranking factor, so the site name must match the citations exactly.

- **227 replacements across all 24 pages:** JSON-LD `name` + `legalName` (20 fields, literal ampersand → "and"), visible nav/footer wordmark (46), and flat HTML (161: `<title>`, meta description, `og:site_name`/`og:title`, footer legal line, contact `<address>`, img `alt`, brand `aria-label`).
- **Left untouched:** ordinary ampersands in headings/titles (e.g. "Excavation & Grading", "Drainage & Stormwater") — those are not the business name.
- **Verified:** every JSON-LD block still parses; `name` = `legalName` = "Austin Grading and Land Management LLC" on all schema pages; no stray `&` in any business-name string; footer, contact address, wordmark, alt, aria, og, and titles all read "and". Address/phone/email unchanged (5464 Prices Creek Road, Burnsville NC 28714 · (828) 284-6182 · matthew@aglmnc.com). Pre-push gate clean: no placeholders, 0 em-dashes, 24 unique titles.
- **GA4 intact:** the name edits did not touch the inline gtag block, so its SHA-256 hash in `site/_headers` is unchanged and still valid (analytics unaffected).
- **Deploy:** ready for `git push` to `main` (Cloudflare auto-publishes). No zips built or deleted this pass — deploy is git; `website-deploys/` backups left untouched.

---

## SEO + accessibility tidy-up pass — 2026-07-03
- **Service-area business — street address hidden site-wide.** Removed "5464 Prices Creek Road" from all 22 footers, the contact aside, and 20 JSON-LD `address` blocks (kept locality/region/postal Burnsville, NC 28714). Softened "Prices Creek Road" prose on the Burnsville page + locations hub to "in Burnsville". Contact aside "Location" → "Based In" with a service-area note.
- **Contact map.** Added a self-contained inline-SVG service-area coverage map (Burnsville home base + 8 towns + ~2hr rings + 6-county caption) — no iframe, no third party, no address pin, CSP-safe. New CSS section 34.
- **JSON-LD.** Added `geo` (Burnsville town coords 35.9176,-82.2934) and `openingHoursSpecification` (Mo–Fr 07:00–17:00) to all 20 GeneralContractor blocks; name+legalName already "and"; all 36 JSON-LD blocks parse. Visible contact Hours updated to "Mon–Fri 7:00 AM–5:00 PM" to match. ⚠️ hours assumed (7–5 daytime) — confirm with Matthew.
- **Performance.** Generated resized WebP (long edge ≤1600, q80) for 40 JPEGs; swapped 142 relative on-page refs (img src, hero backgrounds, preload) to WebP where smaller (aglm4 kept JPG — WebP was larger); og:image/JSON-LD image left as JPG for social compatibility. Added width/height to 102 content images (CLS); lazy-loading already present. Originals kept on disk.
- **Sitemap.** Removed stale TODO comment; all 22 indexable pages (9 towns + hub + services) present, clean URLs; 404/thank-you correctly excluded.
- **Verified (Chromium):** coverage map renders, WebP images load, width/height present, single h1 + logical headings, mobile nav opens/closes, no horizontal overflow, no console errors, GA hash still valid, all image refs resolve. Titles (24) + metas unique; skip-link + :focus-visible present; form fields labeled. **No test/E2E harness in repo** (static, no build); **WebKit/iOS is the residual real-device check** (preview is Chromium-only).
- **Deploy:** git push to main (Cloudflare auto-publishes). Zips untouched.
