# AGLM Website — Hosting & Updates Master Guide

**The one document for keeping the Austin Grading & Land Management website running and up to date.**
Written for non-coders. If you only read one thing, read "The 60-second update" below.

*Maintained by Dave Price · Last updated June 8, 2026*

---

## How this all fits together (the mental model)

Three separate things, three separate jobs:

| Piece | Who | What it does |
|---|---|---|
| **The website files** | `aglm-site` folder (on this PC / OneDrive) | The actual site. **This is the master copy. All edits happen here.** |
| **The host** | **Netlify** (free) | The computer on the internet that serves the site to visitors. |
| **The domain** | **GoDaddy** (`aglmnc.com` / `austingradingnc.com`) | The address that points people at the Netlify host. |

You **edit** the files → **export** a zip → **drop** it on Netlify → visitors see the change at the domain. That's the whole loop.

> **Email is safe.** Matthew's `@aglmnc.com` email runs on **Google Workspace**, not the website host. Nothing in this guide touches email. (The only records we ever change at GoDaddy are the website's `A` and `CNAME` — never the `MX`/email records or the nameservers.)

---

## The 60-second update (do this every time)

1. **Make the change.** Tell Claude/Dave what you want changed (wording, photo, new page). The change is made inside the **`aglm-site`** folder — that's always the source of truth.
2. **Build the zip.** Double-click **`MAKE WEBSITE ZIP.cmd`** (in this folder). It creates a fresh, correctly-built, **auto-dated** zip in the **`website-deploys`** folder and pops it open for you. *(You never have to name or date it yourself — the date is baked into the filename.)*
3. **Publish it.** Go to **Netlify → your site → the "Deploys" tab → drag the new dated zip** onto the drop area that says *"Drag and drop your site output folder here."*
4. **Check it.** Open the live site and hard-refresh (**Ctrl + Shift + R**) to be sure you see the change.

That's it. The domain and address never change — only the content updates.

> **Do I redo the settings every time? No.** Your domain, HTTPS, and form-notification emails are
> saved on the **site** and carry over to every deploy. You set them up **once**. Each update only
> swaps the files. The catch: deploy to the **same site** (its **Deploys** tab) — do **not** use
> `app.netlify.com/drop` for updates, because that creates a brand-new empty site each time.

---

## Your "always dated" question — solved

You were right that dating matters. Here's the foolproof version so you never grab the wrong file:

- You keep **ONE** master folder: `aglm-site`. You never clone or duplicate it. You never edit a zip.
- Every time you run **`MAKE WEBSITE ZIP.cmd`**, it stamps the filename with the date and time:
  `AGLM-website_2026-06-08_2109.zip`
- All zips land in the **`website-deploys`** folder, sorted oldest → newest automatically. The **newest one at the bottom is always the right one.**
- **Netlify also keeps its own dated history** of every deploy, so even if your local folder got messy, the live record on Netlify is the real source of truth.

So: no guessing, no manual renaming, no "which one was it again."

---

## Golden rules (these prevent every problem we've hit)

1. **Always deploy the ZIP (or the whole folder) — never a single `.html` file.** Dropping one file makes Netlify think that file is the entire website. (That's what caused the flickering.)
2. **Only ever edit inside `aglm-site`.** It's the master. Everything else is a disposable export.
3. **One Netlify site.** Always re-deploy to the *same* site (the Deploys tab). Don't create a new site each time, or you'll get a new random address.
4. **Use `MAKE WEBSITE ZIP.cmd`** rather than zipping by hand. Windows' built-in "Send to → Compressed folder" can scramble the internal folders and break the styling; the script builds it the way Netlify needs.

---

## If something looks wrong (troubleshooting)

| Symptom | Cause | Fix |
|---|---|---|
| Page **flickers / reloads forever** | A single file was deployed, or a redirect/launcher file was deployed | Re-deploy the full dated zip from `website-deploys` |
| Site loads but is **plain text, no styling/colors** | CSS/images didn't come along (single file deployed, or a hand-made zip) | Re-deploy with the zip from `MAKE WEBSITE ZIP.cmd` |
| Change **isn't showing** | Browser is showing the old cached page | Hard-refresh: **Ctrl + Shift + R** |
| Need to **undo** a bad update | — | Netlify → **Deploys** → click the previous good deploy → **Publish deploy** (instant rollback). You also have every dated zip locally as backup. |

---

## Connecting / changing the domain (one-time setup)

> **First time going live? Follow `GO-LIVE-SETUP.md`** — it's the simple, step-by-step walkthrough
> for putting the site on Netlify and swapping the GoDaddy domain over. The summary below is the
> quick reference once you know the ropes.

Do this once, after the site is approved. **Email is unaffected** (Google Workspace).

1. **Netlify** → your site → **Domain management** → **Add a custom domain** → enter the domain. Add `www` and the second domain too. Netlify will show you the exact records.
2. **GoDaddy** → the domain → **DNS / Manage DNS**. Set only these (use the exact values Netlify shows):
   - **A record**, Host `@` → Netlify's IP (currently `75.2.60.5`)
   - **CNAME**, Host `www` → `your-site.netlify.app`
   - Delete any GoDaddy "parked"/forwarding record that conflicts.
   - **Do not touch** `MX`, `TXT`, or the **nameservers** (that's the Google Workspace email — leave it alone).
3. Wait for it to take effect (minutes up to ~24h). Netlify turns on the **https** padlock automatically.
4. In Netlify, set the **primary** domain and turn on **Force HTTPS**. The other domain just redirects to it.
5. Cancel the old GoDaddy **Website Builder** plan — but **keep the domain registration and the Google Workspace email.**

> **Still to decide:** which domain is primary — `aglmnc.com` (recommended: shorter, matches the email) or `austingradingnc.com` (the one currently live). The other redirects to it.
> **Still to fill in once live:** Netlify site address `__________.netlify.app` and the chosen primary domain.

---

## Turn on the contact form (one-time, in Netlify)

The form already works with Netlify. Two steps:
1. **Enable detection + redeploy.** Forms → Enable form detection, then re-deploy (Netlify only finds the form on the *next* deploy). A form named **`quote`** then appears under Forms.
2. **Add the email recipients** under **Site configuration → Notifications → Form submission notifications → Add notification → Email notification.** The field takes one address each, so add two: **`matthew@aglmnc.com`** and **`dave@aglmnc.com`**.

Submissions are also stored under the **Forms** tab. (Note: Netlify moved this out of the old "Forms → Notifications" spot into Site configuration → Notifications.)

---

## Where everything lives (file map)

```
AustinGrading/
├── aglm-site/                ← THE WEBSITE (master copy — edit here only)
├── website-deploys/          ← dated zips land here (newest = bottom)
│   └── AGLM-website_YYYY-MM-DD_HHMM.zip
├── MAKE WEBSITE ZIP.cmd      ← DOUBLE-CLICK THIS to build a dated deploy zip
├── Build-Deploy-Zip.ps1      ← the engine behind the .cmd (don't run directly)
├── HOSTING-MASTER.md         ← this guide
├── AGLM-MASTER.md            ← brand/positioning source of truth
└── capability-statement/     ← SALES material only — NOT part of the website
```

Housekeeping: the dated zips are ~17 MB each. Every month or so you can delete old ones from `website-deploys` (keep the last 2–3). Netlify keeps the real history regardless.

---

## Future upgrade (optional, when updates get frequent)

Right now: edit → build zip → drag to Netlify. Simple and fine.
Later, the site folder can be connected to **GitHub**, and Netlify will **auto-publish** every saved change (no zipping, no dragging). It's more setup up front but turns updates into "save and done." Ask when you're ready.

---

*Questions or a change? Just say what you want and Claude/Dave will update `aglm-site` and tell you to run `MAKE WEBSITE ZIP.cmd`.*
