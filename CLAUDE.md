# CLAUDE.md — Austin Grading & Land Management site (repo-level)

Deployment + structure notes for this repo. Separate from the agency ops-folder
governance docs. Business/build docs live in the `AGLM-*.md` files at this root.

## What this is
Public marketing site for Austin Grading & Land Management (AGLM), an excavation /
grading / land-clearing contractor. Live at https://www.aglmnc.com. In production.

## Tech stack
- **Pure static HTML/CSS/JS.** No framework, no build step, no build command.
- Contact form uses **Web3Forms** (client-side POST to api.web3forms.com).

## Repo layout
```
/                <- repo root (this file)
├── site/        <- THE SERVED FOLDER. Cloudflare publishes ONLY this.
│   ├── *.html (index, services, about, commercial, contact, projects,
│   │           grading, excavation, drainage, driveways, land-clearing, septic,
│   │           thank-you, 404)
│   ├── AGLM-Capability-Statement.pdf  <- real download, LINKED from index+commercial
│   │                                     and used in EMAIL CAMPAIGNS — its URL
│   │                                     https://www.aglmnc.com/AGLM-Capability-Statement.pdf
│   │                                     MUST stay stable (don't rename/move it)
│   ├── css/, js/, images/
│   ├── robots.txt, sitemap.xml
│   └── _headers   <- security headers + CSP (Cloudflare-native)
├── AGLM-*.md, BRAND-GUIDE.md, ...  <- internal docs (siblings, NOT served)
└── .gitignore
```

## Deployment — git → GitHub → Cloudflare Pages
- **GitHub repo (private):** https://github.com/ridgelinedave/austingradingsite
- **Host:** Cloudflare Pages project `austingradingsite`, git-connected. **Production branch `main` — every push auto-publishes** in ~1 min.
- **Build settings:** Build command = **(blank)**; **Build output directory = `site`**.
- **Live:** https://www.aglmnc.com — canonical host = **www**; apex 301→www via the Cloudflare zone Redirect Rule (created at cutover). URLs are clean/extensionless.

## The served folder is website-only (hard rule)
Cloudflare serves the whole `site/` folder as-is. Keep only website files in it.
The in-`site/` tooling (`README-DEPLOY.md`, `netlify.toml`, `serve.ps1`, `.impeccable/`)
is **gitignored in place** — local only, excluded from repo/deploy. `.gitignore` also
excludes private `assets/` + `retainer/`, `website-deploys/` backups, and `node_modules/`.

## Headers, CSP & redirects (important)
- **`site/_headers`** carries the security headers + a **CSP with a SHA-256 hash of the one
  inline gtag (GA4) script**. ⚠️ If that inline GA block is edited by even one character,
  **recompute the hash** in `_headers` or analytics silently break.
- **apex→www** is a **Cloudflare zone Redirect Rule**, NOT `_redirects` (Pages `_redirects`
  matches path only, not hostname).
- **Clean URLs:** canonicals/sitemap/internal links use extensionless URLs (`/services`);
  the old `.html` URLs still 301 to clean, so inbound links survive.

## Web3Forms note (do NOT scrub)
The `access_key` in `site/contact.html` (`361ae28f-…`) is a **public routing token, not a
secret.** Safe to commit; must stay.

## Old domain
`austingradingnc.com` → `aglmnc.com` is handled by **GoDaddy registrar domain forwarding**
(not a Cloudflare rule). No action needed here.

## Making changes / rollback
- Edit files in `site/`, commit, push to `main` → live in ~1 min. Confirm in Cloudflare → Deployments (Success).
- Risky change → branch → Cloudflare preview URL → merge to `main` when confirmed.
- **Rollback:** Cloudflare → Deployments → "Rollback to this deployment" (replaces zip backups).
- **Never delete `website-deploys/` zips** — frozen rollback snapshots.
