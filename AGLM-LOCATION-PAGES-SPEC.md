# AGLM Location Pages — Recommendation Spec (for David's approval)

**Status:** RECOMMENDATION ONLY. Not built. Approve to schedule as a separate build.
**Why:** AGLM has strong service pages but **no place-based pages**. Per-town location pages are the highest-leverage remaining local-SEO move (master §7: "county/town mentions worked naturally into copy"; competitor Mountain Folk ranks partly on dedicated pages). This lets AGLM rank for "excavation/grading contractor [town] NC" across the service area, not just Burnsville.

> Anti-anchoring guardrail (web-developer.md §5.1a): build these **from the facts + principles below**, authored fresh. Do **not** mirror another Ridgeline build. Each page must be genuinely unique — Google penalizes doorway/thin-duplicate location pages, which is the main risk here.

## Towns to cover (9)
Burnsville (home base), Spruce Pine, Bakersville, Newland, Banner Elk, Asheville, Weaverville, Marshall, Mars Hill.
(All within the confirmed ~2-hour service radius; master §7 anchor towns.)

## URL + structure
- `locations/` index (hub) linking to each town, e.g. `locations/excavation-grading-burnsville-nc.html` (or `locations/burnsville-nc.html`). Keep the scheme consistent and www-canonical.
- Each page uses the existing nav/footer/CSS system (no new design system — reuse `style.css`). Same page-header hero pattern as the service pages.

## Per-page content (each must be genuinely distinct — no template fill)
1. **H1 + title/meta** naming the town + primary service ("Excavation & Grading Contractor in Spruce Pine, NC | AGLM"). Unique per town.
2. **Real local specifics** (this is what prevents thin/duplicate pages): the county the town sits in, drive-time/relationship to Burnsville, terrain/soil realities that town is known for (steep grades, creek drainage, rocky subgrade, mountain driveways), and the named roads/areas where relevant. Pull only true facts; where a specific isn't known, keep it general rather than invent.
3. **Services relevant to that town**, cross-linked to the existing service pages (excavation, grading, drainage, driveways, septic, land clearing, retaining walls).
4. **Credibility anchors** on every page: NCDOT pre-qualified · NC licensed commercial GC (no dollar cap, per master §10) · local/accountable.
5. **One clear CTA** — "Request a Quote" → contact.html, plus tap-to-call.
6. **LocalBusiness/GeneralContractor JSON-LD** with `areaServed` set to that town + county (NAP identical to the rest of the site).

## Guardrails
- **No duplicate content:** each page needs its own genuine paragraphs; do not spin one template with the town name swapped. If real per-town specifics run thin, cover fewer towns well rather than 9 thin pages.
- **No invented facts** (past projects in that town, etc.) unless confirmed by Matthew.
- **Add to sitemap.xml** (www) and cross-link from the footer service-area list and the "Serving Western NC" home section.
- Keep imagery to the existing real job-site photos (interior-page use); no low-quality photo on any hero.

## Effort estimate
~9 pages + a hub + sitemap/footer wiring. One focused build once David approves the town list and provides any town-specific project facts he wants featured.
