# Austin Grading & Land Management — Website Build Brief (for Claude Code)

You are building the marketing website for **Austin Grading and Land Management LLC (AGLM)**, a Western North Carolina site-work and excavation contractor based in Burnsville, NC. This file is your complete build reference.

**Read `AGLM-MASTER.md` (same folder) first.** It is the source of truth for every fact, service, color, and copy decision. This file tells you *how to build*; the master file tells you *what's true and why*. If the two ever conflict, the master file wins — flag the conflict.

**Also read `BRAND-GUIDE.md` — the LOCKED visual system (colors, fonts, logo, do/don'ts).** The brand tokens and font rules below are copied from it. Do NOT substitute colors or fonts, invent shades, add a third font, or introduce a second accent color. When in doubt about how the brand looks applied, match `capability-statement/`. **Logo system:** lead with Matthew's ICON (`Branding/aglm-icon-white.png` on dark, `aglm-icon-charcoal.png` on light), paired with the company name set in **Oswald** (the clean wordmark). Do NOT use the original template logo font from `Branding/AGLM-logos/` for the wordmark.

---

## 0. Ground rules

- **Do not invent facts.** Anything marked `⚠️ CONFIRM` in the master file is unverified. Where a fact isn't confirmed, use the approved placeholder pattern below — never a made-up number, year, license #, or project value.
  - Placeholder pattern: wrap in an HTML comment AND show a neutral fallback. Example: `<!-- TODO: confirm year established -->Serving Western North Carolina for years` (not "since 2015").
- Ask before adding any library not listed here. No frameworks, no build step.
- No cookie banner, no popups, no chat widget, no blog (yet — leave room for one), no fake testimonials.
- This is **v1 for Matthew's review** — present on Netlify and invite critique.

---

## 1. Goal & audience

**Primary goal:** a professional, credible site that (a) generates quote requests from commercial clients and (b) backs up the capability statement when AGLM pitches GCs and developers. It must rank locally across the target counties.

**Audience (in priority order):** general contractors, property developers/investors, civil engineers & architects, commercial property owners, municipal offices, NCDOT primes — then higher-end residential. Write to a peer who can carry a scope, not down to a homeowner. (Full ICP in master §6.)

**Primary CTA everywhere:** **"Request a Quote"** → contact form.

---

## 2. Tech stack

- **Plain HTML + CSS + vanilla JS.** No frameworks, no bundlers.
- **Static, Netlify-ready.** Clean structure, fast load, mobile-first.
- **Google Fonts only — LOCKED, no substitutions:** `Oswald` (500/600/700) for headings/labels/numbers, `Inter` (400/500/600) for body. Do not swap in another font.
- **Icons:** inline SVG only. No icon libraries.
- **Images:** use AGLM's real photos from `Site Photos/` (see §8). Compress to web sizes; serve WebP where possible with JPG fallback. Lazy-load below the fold.
- **Forms:** Netlify Forms (preferred — zero backend) OR a `mailto:`/Formspree fallback. Leave a clear `TODO` with the action target. Route submissions to **matthew@aglmnc.com** (see master §13 — standardize off the Gmail).
- **No localStorage / sessionStorage.**

---

## 3. File structure

```
aglm-site/
├── index.html
├── services.html            (or anchor sections on index — see §6)
├── projects.html
├── about.html
├── contact.html
├── css/
│   └── style.css            (single linked stylesheet)
├── js/
│   └── script.js            (smooth scroll, sticky nav, form, fade-ins)
├── images/                  (optimized site photos + logo)
├── netlify.toml             (build/redirect config if needed)
└── AGLM-MASTER.md / WEBSITE-BRIEF.md  (reference only — do not deploy)
```

Decision: build a **multi-page site** (Home / Services / Projects / About / Contact). Per-service depth and per-page titles help local SEO (this is how Mountain Folk ranks — master §8). If you start single-page, still give each section a strong `id` and ensure unique, keyword-rich `<title>`/meta per page when you split.

---

## 4. Brand tokens (CSS custom properties)

Mirror the master §3 palette exactly:

```css
:root{
  --base:#1A1A1A;        /* charcoal-black bg */
  --surface:#33383D;     /* iron gray — cards / alt sections (matches BRAND-GUIDE) */
  --accent:#E8801A;      /* construction amber — CTAs, key numbers, highlights */
  --accent-hover:#C86A12;
  --earth:#DFCCA7;       /* tan secondary — dividers, subtle accents */
  --text-light:#F5F5F4;
  --muted:#A8A29E;
  --light-bg:#F5F4F2;    /* contrast sections */
  --text-dark:#1A1A1A;
  --border:#3A3A3A;
}
```

Typography scale:
- Hero H1: `clamp(2.5rem, 6vw, 4.5rem)`, Oswald 700, uppercase, line-height 1.05, letter-spacing 0.01em
- Section H2: `clamp(1.75rem, 3.5vw, 2.5rem)`, Oswald 600, uppercase
- Card title: `1.15rem`, Oswald 600 or Inter 600
- Body: `1rem`, Inter 400, line-height 1.7
- Eyebrow label: `0.75rem`, Inter 600, uppercase, letter-spacing 0.12em, color `--accent`
- Button: `0.95rem`, Inter 600, uppercase, letter-spacing 0.03em

Aesthetic: heavy, industrial, rugged. Dark base, amber accent, sharp or barely-rounded corners (≤4px). Strong photo treatment (dark/warm overlay so text stays legible). Generous spacing. No corporate gradients-for-the-sake-of-it; geometric/utilitarian.

Utility classes to define: `.container{max-width:1140px;margin:0 auto;padding:0 1.5rem}`, `.section{padding:5rem 0}`, `.eyebrow`, `.btn-primary` (amber bg, dark text), `.btn-outline` (amber border, transparent), `.grid`.

---

## 5. Global elements

**Sticky nav:** dark bg, bottom border. Left: AGLM **icon** (`Branding/aglm-icon-white.png`) followed by the company name in **Oswald** ("AUSTIN GRADING & LAND MANAGEMENT", or "AUSTIN GRADING" with "& LAND MANAGEMENT" lighter on a second line). Icon leads, wordmark follows. Right: links (Services, Projects, About, Contact) + amber **"Request a Quote"** button. Mobile: hamburger → drawer; always keep the Quote button + tap-to-call visible. Add `.scrolled` shadow via JS at `scrollY>20`.

**Trust ribbon** (thin bar under nav or in hero): `NCDOT PRE-QUALIFIED · NC LICENSED GENERAL CONTRACTOR · BURNSVILLE, NC` — small caps, tan/amber.

**Footer:** dark. Logo + one-line positioning; NAP block (name, 5464 Prices Creek Road, Burnsville NC 28714, (828) 284-6182, matthew@aglmnc.com); service-area county list (master §7); quick links; "NCDOT Pre-Qualified · NC Licensed GC (Intermediate, up to $1.5M)"; © 2026 Austin Grading and Land Management LLC.

**Tap-to-call:** phone is a `tel:` link everywhere. Sticky mobile call/quote bar is a plus.

---

## 6. Pages & content

Copy below is approved starting copy — use it (don't Lorem Ipsum). Tighten, don't inflate. Keep the two credibility anchors (NCDOT pre-qualified; licensed commercial GC up to $1.5M) visible on every page.

### HOME (index.html)
- **Hero** — full-bleed job-site photo (`graded property.jpg` or `grading 1.jpg`), dark warm overlay.
  - Eyebrow: `SERVING YANCEY · MITCHELL · AVERY · BUNCOMBE · MADISON · ASHE`
  - H1: **"SITE WORK DONE RIGHT THE FIRST TIME."**
  - Subhead: *"Excavation, grading, drainage, and land development across Western North Carolina — from a locally owned, NCDOT pre-qualified contractor led by a licensed commercial General Contractor."*
  - CTAs: **Request a Quote** (primary) · **See Our Work** (outline → projects)
- **Trust strip** (3 signals): `NCDOT Pre-Qualified` · `NC Licensed GC — Intermediate (up to $1.5M/project)` · `Local WNC Operator — Burnsville`
- **Services snapshot** — 6–7 cards (icon + title + one line), from master §5, linking to Services.
- **Why AGLM** — short block of differentiators (master §10): licensed & prequalified, mountain-terrain expertise, right-sized, done right the first time.
- **Featured project teaser** — the James B. Price job (master §9/§11) with 2–3 photos → links to Projects.
- **Service area** — county list + short "areas we serve" line for SEO.
- **CTA band** (amber or photo bg): "Have a site that needs work? Let's talk." → Request a Quote.

### SERVICES (services.html)
- Intro: AGLM handles the full site-work scope — from raw land to finished pad.
- One detailed block per service (master §5), each with a 2–4 sentence description, a representative photo, and a "Request a Quote" link. Give each an `id` for deep links. Order: **Excavation & Site Preparation (lead)**, Grading & Earthwork, Drainage Solutions, Road & Driveway Grading, Retaining Walls (boulder + segmental block), NCDOT / Public Infrastructure, Erosion & Sediment Control.
- Optional "markets we serve" sub-section (commercial, development, municipal, residential) — Branch-style framing (master §8).

### PROJECTS (projects.html)
- Photo-grid gallery from `Site Photos/` (master §11). Group loosely: Grading/Pads, Drainage/Pipe, Clearing.
- **Featured case study:** James B. Price Jr. General Contracting — use `JamesBPrice PROJECT photos/` + the text from `project explanation.png`:
  > "Set the basin for the septic pump, covered the septic, ran water and power ditch, and ditched to divert a small spring away from the porch, then final-graded around the house." (Partner: James B. Price Jr. General Contracting LLC.)
- Use `[IMAGE]` placeholder slots only where you run out of real photos; never fake project values/clients. ⚠️ CONFIRM permission before naming the client publicly.

### ABOUT (about.html)
- Story: locally owned and operated, Burnsville-based. Matthew Austin, owner — **NC Licensed General Contractor, Intermediate Classification (projects up to $1.5M)**; **NCDOT pre-qualified.** Family operation (Matthew; Mason — hauling; Andrew). Built for WNC's steep, wet, rocky ground.
- Years in business: **omit the founding year entirely** (company is newer, ~2021–2022). Lead with capability and credentials, not tenure — e.g. "built for WNC's terrain," not "since 20XX." Do not state a founding year anywhere.
- Stat block (amber numbers): `Up to $1.5M` per project · `NCDOT` pre-qualified · `6+` counties served · `5.0★` rated (HomeAdvisor). (Pull only confirmed numbers from master §2/§9.)
- Light "licensed & insured" line — ⚠️ CONFIRM insurance before stating limits.

### CONTACT (contact.html)
- H2: "Request a Quote." Subhead: tell us about the site and scope; we'll get back fast.
- Form (Netlify Forms): Name, Company, Phone, Email, Project Type (select: General Contractor / Developer / Commercial Owner / Municipal / Civil Engineer-Architect / Residential / Other), Project Location (county/town), Message. Submit: **"Send Request →"**.
- Display NAP + service area + hours. On success: hide form, show "Thanks — we'll be in touch shortly." (no reload).
- Email destination: **matthew@aglmnc.com** with `TODO` comment.

---

## 7. SEO requirements

- Unique, keyword-rich `<title>` + meta description per page using master §7 keywords (e.g., Home: "Excavation & Grading Contractor in Western NC | Austin Grading & Land Management").
- One `<h1>` per page; logical `<h2>/<h3>`.
- **LocalBusiness / GeneralContractor JSON-LD** in `<head>`: legal name, address (5464 Prices Creek Road, Burnsville, NC 28714), phone (828-284-6182), email matthew@aglmnc.com, `areaServed` = target counties, `url`. (Pull values from master §2/§7.)
- Descriptive `alt` text on every image (include service + location where natural).
- Semantic HTML5 landmarks; fast load (compressed images, deferred JS); favicon from the logo mark.
- `sitemap.xml` + `robots.txt`.
- Footer county list + per-service pages support local ranking.

---

## 8. Photo mapping

Source: `AustinGrading/Site Photos/` (copy optimized versions into `images/`). Apply a consistent dark/warm treatment so the mixed-quality set looks unified (master §11).

- **Hero candidates:** `graded property.jpg`, `grading 1.jpg`
- **Excavation/Grading:** `graded property.jpg`, `grading 1.jpg`, `clearing property.jpg`, `price property 2022.jpg`, `aglmphoto2–5`, `AGLMphoto1.webp`, `stagedphoto2023.jpg`
- **Drainage/Pipe/Septic:** `pipephoto1–10.jpg`, `property culvery1.jpg`
- **Featured case study:** `JamesBPrice PROJECT photos/projectphoto1–7aglm.jpg`
- **Logo:** use `Branding/aglm-icon-white.png` (dark bg) and `aglm-icon-charcoal.png` (light bg) for the icon; set the wordmark in Oswald. Favicon from the icon. (Vector source for the icon: `Branding/AGLM-logos/print_transparent.svg`.)
Crop tightly, keep equipment in frame where possible. Request 4–6 sharper recent photos from Matthew before final.

---

## 9. JavaScript (js/script.js)

1. Smooth scroll for in-page anchors.
2. Sticky-nav `.scrolled` shadow at `scrollY>20`.
3. Mobile nav toggle.
4. Form submit handling (Netlify Forms success state without reload; graceful error message).
5. IntersectionObserver fade-in (`opacity 0→1`, `translateY 20px→0`) on cards/sections.
Keep it lightweight and dependency-free.

---

## 10. Netlify deployment notes

- Static drag-and-drop or Git deploy. Add `netlify.toml` if redirects/headers are needed.
- Enable **Netlify Forms**: add `data-netlify="true"` + hidden `form-name` to the contact form; set a form-submission email notification to matthew@aglmnc.com.
- Custom domain: point **aglmnc.com** (and/or austingradingnc.com) from GoDaddy DNS to Netlify; enable HTTPS. (Recommend aglmnc.com as primary per master §13; 301 the other to it.)
- Add a 404 page.

---

## 11. Build order (for a fast reviewable draft)

1. `css/style.css` — tokens, reset, utilities, nav, hero.
2. `index.html` — full home page with real copy + hero photo.
3. Nav + footer (shared markup) across pages.
4. `services.html`, then `projects.html` (gallery + case study).
5. `about.html`, `contact.html` (with Netlify Forms).
6. `js/script.js`.
7. SEO pass: titles/meta/JSON-LD/alt/sitemap.
8. Image optimization + photo treatment.
9. Deploy to Netlify; share preview link for Matthew's critique.

---

## 12. Definition of done (v1)

- Loads fast, looks professional and rugged on mobile and desktop.
- Every page carries the two credibility anchors and a Request-a-Quote path.
- Real AGLM photos throughout; no stock, no fake testimonials, no invented facts.
- Contact form delivers to matthew@aglmnc.com.
- All `⚠️ CONFIRM` items either confirmed or handled with the approved placeholder pattern.
- Unique titles/meta + LocalBusiness JSON-LD live.

*Build f