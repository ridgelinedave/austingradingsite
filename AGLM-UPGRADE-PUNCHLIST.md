# AGLM Website Upgrade — Gap Analysis & Punch List

*Group A deliverable. Built from a read of the live site plus competitor research across the WNC site-work market. Nothing here goes live until Matthew confirms the items marked ★CONFIRM.*

*Prepared by Dave Price · for review by Matthew Austin*

---

## 0. Which site copy is live (resolved)

- **`aglm-site` is the master / production source.** Per `HOSTING-MASTER.md`: "This is the master copy. All edits happen here," and `MAKE WEBSITE ZIP.cmd` builds the Netlify deploy zip from it.
- **`aglm-site-REVIEW` is a stray working copy** that drifted (its files are newer by ~2 days and a handful of images differ). It is a reconciliation hazard.
- **Action:** all upgrades happen in `aglm-site`. At the end, `aglm-site-REVIEW` gets deleted (or replaced with a copy of the final `aglm-site`) so the two cannot drift again. (Group D3.)

---

## 1. What AGLM names today

Excavation & Site Prep (lead) · Grading & Earthwork · Drainage Solutions · Road & Driveway Grading · Retaining Walls · NCDOT / Public Work · Erosion & Sediment Control.

**Structure today:** one `services.html` with seven stacked short blocks. No per-service pages, no town pages, no FAQ, no equipment list, no testimonials, no PDF download link, no process/timeline.

---

## 2. Competitor gap table

Direct Burnsville/Yancey rivals are **Adam Young Trucking & Grading** and **Black Enterprises Land Management** (same towns). Foothills (Marion), Mountain Folk (Weaverville), Appalachian (Lenoir), Dixie (Weaverville), Fowler (Brevard), King (statewide) are adjacent.

### 2a. Services competitors name that AGLM does NOT

| Service | Who names it | AGLM names it? | AGLM actually does it? (internal evidence) |
|---|---|---|---|
| **Forestry Mulching** | Black Ent., King, Appalachian, Mountain Folk, Fowler (often the LEAD service) | ❌ No | ❓ No mention anywhere in AGLM's own docs. Needs a mulcher head. **★CONFIRM equipment.** |
| **Land Clearing** (as a standalone) | Universal | ⚠️ Buried under Excavation | ✅ Yes — listed as a supporting capability in AGLM-MASTER; clearing photos on Projects page. Low risk. |
| **Septic System Installation** | Adam Young (Level IV cert), Foothills, Fowler, Murphy | ❌ No | ✅ Yes — septic is literally the featured Projects case study; HomeAdvisor history. **Big unforced gap.** |
| **Demolition & Concrete Removal** | Adam Young, Black Ent., Dixie, Fowler | ❌ No | ✅ Likely — supporting capability in AGLM-MASTER; NCDOT code 0210 Removal & Demolition. **★CONFIRM scope.** |
| **Storm-Debris / Helene Recovery** | Adam Young, Appalachian, Black Ent. | ❌ No | ✅ Likely — NCDOT codes 6000 Debris Removal / 1651 Tree Removal; hauling via Mason. Strong funded demand. |
| **Slope / Bank Stabilization** | Adam Young, Murphy, Fowler | ⚠️ Implied by walls + riprap | ✅ Yes — does walls, riprap, grading already. Repackage existing work. Low risk. |
| **Hauling / Trucking** | Foothills, Adam Young, Fowler | ❌ No | ✅ Yes — Mason's hauling, USDOT 3880062. Low risk. |
| **Pond Construction / Cleanout** | Mitchell, Dixie, Fowler, Adam Young (cleanouts) | ❌ No | ❓ Not mentioned in AGLM docs. **★CONFIRM.** |
| **Hydroseeding** | Adam Young, Mitchell, Fowler | ❌ No | ❓ Not mentioned. Needs a hydroseeder. **★CONFIRM.** |

### 2b. Website features competitors have that AGLM lacks

| Feature | Competitor benchmark | AGLM today | Opportunity |
|---|---|---|---|
| Per-service dedicated pages | Foothills, Mountain Folk, Appalachian, King | ❌ one page | SEO: split top services into own URLs |
| Town / service-area pages | Foothills & King (reach into Burnsville/Newland) | ❌ none | SEO: own the towns competitors already farm |
| FAQ + FAQ schema | Foothills, Mountain Folk, King | ❌ none | Map-pack + rich-result wins |
| Equipment / fleet list | Only Appalachian & King (RARE) | ❌ none | **White space** — signals self-perform capacity. **★CONFIRM fleet.** |
| Testimonials / reviews | Mountain Folk, Dixie, King | ❌ none (has 5.0 HomeAdvisor) | **★CONFIRM** real quotes/permission |
| Before/after pairs | Only Appalachian & Mountain Folk (RARE) | ⚠️ one road-repair pair | **White space** — most persuasive format for this trade |
| Capability-statement PDF download | n/a | ❌ exists but unlinked | Easy win for commercial bidders |
| Process / timeline | Nobody | ❌ none | **Pure differentiator** — Quote → Plan → Self-Perform → Final Grade |
| Financing | Nobody | ❌ none | White space, but low relevance to AGLM's commercial buyer — **skip** |

---

## 3. Prioritized services to ADD or SPOTLIGHT

Ranked by value × confidence. Search term = the local phrase it targets.

| # | Service | Why | Target search term | Risk / gate |
|---|---|---|---|---|
| 1 | **Land Clearing** (spotlight as standalone) | Universal competitor service; AGLM already does it; currently hidden | `land clearing Burnsville NC` | Low — proceed, mark TODO(owner) confirm |
| 2 | **Septic System Installation** | AGLM's own featured case study is septic, yet it isn't a named service; Adam Young owns this locally | `septic system installation Yancey County NC` | Low — confirm cert level vs Adam Young's Level IV |
| 3 | **Driveway & Private-Road Repair** (sharpen existing Roads block + Helene angle) | High mountain demand; Helene washed out thousands of private roads in Yancey; documented contractor shortage | `driveway / private road repair Yancey County` | Low — already a service, just sharpen |
| 4 | **Storm-Debris / Helene Recovery** | Funded, undersupplied demand through 2026-27 ($75M private road program, stream grants) | `storm debris removal Western NC` | Low-Med — confirm scope |
| 5 | **Slope & Bank Stabilization** | Repackages walls + riprap + grading; Helene-relevant | `slope stabilization Burnsville NC` | Low — proceed |
| 6 | **Demolition & Debris Removal** | Common competitor service; in AGLM's NCDOT codes | `demolition Yancey County NC` | Med — ★CONFIRM scope/equipment |
| 7 | **Forestry Mulching** | THE highest-volume marketed term in WNC; competitors lead with it | `forestry mulching Burnsville NC` | **High — ★CONFIRM mulcher.** Biggest upside IF equipped |
| 8 | **Hauling / Trucking** | Real (Mason / USDOT); rounds out self-perform story | `hauling gravel dirt Burnsville NC` | Low — confirm truck types |
| — | Pond Construction | Niche, lower volume | `pond construction Western NC` | **High — ★CONFIRM**, hold unless confirmed |
| — | Hydroseeding | Competitor add-on | `hydroseeding Western NC` | **High — ★CONFIRM equipment**, hold unless confirmed |

---

## 4. The confirmation list for Matthew (the one clean punch list)

**Which of these does AGLM actually perform / own or rent the equipment for?** (Yes / No / Sub it out)

1. Forestry mulching — do you run a mulcher head? ★ (biggest single upside)
2. Land clearing as a named service — yes? (we believe yes)
3. Septic system installation — yes, and what NC certification level? ★
4. Demolition & concrete removal — structures? concrete? to what size? ★
5. Storm-debris / Helene cleanup & private-road repair — taking this work? ★
6. Slope / streambank stabilization — yes? (we believe yes)
7. Hauling / trucking as a listed service — Mason's truck types/capacity?
8. Pond construction or cleanout — yes/no? ★
9. Hydroseeding — yes/no? ★
10. **Equipment list** — what do you own/run (makes + sizes)? Needed for the fleet showcase. ★
11. **Testimonials** — 2-3 real quotes we may publish (and permission to name)? ★
12. **Real stats** — years in business, # projects, acres cleared, etc. (only real numbers go on the stats bar) ★
13. James B. Price Jr. GC job — OK to name them publicly on the case study? ★

Until each is confirmed, the matching block carries a `TODO(owner): confirm` comment and is NOT promised.

---

## 5. Build recommendation (Groups B-D)

- **C1 — split, don't stack.** Give the top 3-4 high-intent services their own pages (`/forestry-mulching`, `/land-clearing`, `/septic`, `/excavation`) for SEO, and keep `services.html` as the hub that links to them. Lower-volume services stay as rich blocks on the hub.
- **Proceed now (low risk, mark TODO confirm):** Land Clearing, Septic, Driveway/Private-Road + Helene, Slope/Bank Stabilization, Hauling. Add Demolition.
- **Hold for confirmation before building:** Forestry Mulching, Pond, Hydroseeding, equipment showcase specifics, testimonials, real stats.
- **Easy wins regardless:** link the capability PDF ("Download Capabilities"), add a process/timeline, add before/after framing to Projects, add FAQ + FAQ schema, add the new (confirmed) services to `knowsAbout` JSON-LD + nav/footer.
- **Town pages (D2):** Burnsville, Spruce Pine, Bakersville, Newland for the top services — built unique, not thin clones.

---

## 6. BUILD LOG (what actually shipped in this pass)

All changes are in `aglm-site` (the master). Nothing goes live until Matthew approves the confirm list above and the zip is deployed.

**New dedicated service pages** (split per C1, each with Service + FAQPage JSON-LD, mini-FAQ, related-project gallery, local H2/H3): `excavation.html`, `land-clearing.html`, `grading.html`, `drainage.html`, `driveways.html` (incl. washed-out / private-road repair, evergreen, no Helene branding), `septic.html`. The land-clearing and septic pages carry `TODO(owner): confirm` gates.

**services.html** rebuilt as a hub: 11-card grid linking to the six pages + on-page blocks for Retaining Walls, NCDOT, Erosion Control, and two NEW gated services (Slope & Bank Stabilization, Hauling & Trucking), plus a Quote → Plan → Self-Perform → Final Grade process timeline.

**index.html:** added Land Clearing + Septic + Slope cards (linking to the new pages), expanded `knowsAbout` schema, a "Download Capabilities" PDF button, and a testimonials section (honest 5.0 HomeAdvisor proof + a commented, ready-to-fill real-quote scaffold).

**commercial.html:** "Download Capabilities" PDF + an "Equipment We Run" showcase (gated `TODO(owner): confirm fleet`; lists only equipment classes visible in AGLM's own photos, no invented makes/models).

**Site-wide:** capability PDF copied in as `AGLM-Capability-Statement.pdf`; sitemap.xml updated with the six new URLs; FAQ + FAQPage schema on all service pages.

**Reconciliation (D3), IMPORTANT:** `aglm-site-REVIEW` was NOT a stale fork. It held real, brand-aligned improvements the master lacked: SEO head tags (apple-touch-icon, theme-color, hero preload, og:site_name/og:url/absolute og:image/twitter:card), a `sameAs` Facebook link, a Facebook `.social` icon component, and the brand-guide-correct surface color `#33383D` (the master was using off-brand `#262626`). All were merged INTO the master across every page, then `aglm-site-REVIEW` was deleted so there is one source of truth. Facebook URL used: facebook.com/austinexcavatingnc (confirm this is the right page).

**QA:** zero em-dash/en-dash characters site-wide; no broken relative links; no relative og:images; no console errors; design system verified rendering (iron-gray cards, Oswald/amber system intact). W3C validation and Lighthouse to be run on the deployed build.

## 7. Scope decisions locked this pass
- Built the **low-risk service set only**: Land Clearing, Septic, Driveways/Private-Road, Slope & Bank Stabilization, Hauling. Demolition, Forestry Mulching, Pond, and Hydroseeding were NOT built, pending Matthew.
- **No Helene/disaster branding:** storm-driven demand is captured through evergreen "washed-out driveway / private-road repair" and "slope & bank stabilization" instead.
- **Town pages (D2) deferred** as a fast-follow once Matthew confirms the service list, to avoid thin-clone pages that hurt SEO. Service pages already embed the town and county names.
