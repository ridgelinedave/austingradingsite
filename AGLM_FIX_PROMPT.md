# Claude Code Prompt: Austin Grading & Land Management (aglmnc.com) Upgrade

> Paste everything inside the code fence into Claude Code, run from the AGLM site folder.
> The current site is strong and professional. The goal is not a redesign. It is more depth,
> more services, and more differentiation so the site stops feeling basic and starts to pop.
> Note: there are two copies in the project (aglm-site and aglm-site-REVIEW). Confirm which is
> the live production version first and work in that one; reconcile the other.

---

```
You are upgrading an existing, already-professional static website for Austin Grading & Land
Management LLC (AGLM), a site-work contractor in Burnsville, NC (Yancey County). The site is
multi-page, clean, and well-built (Oswald/Inter type, charcoal theme, NCDOT trust signals,
GeneralContractor schema, real project photos, mobile quick-bar). Do NOT redesign it. Your job is
to add depth, add services, and sharpen differentiation so it reads as the premium WNC site-work
firm, not a basic brochure.

READ FIRST: index.html, services.html, commercial.html, projects.html, about.html, and css/style.css
so you fully understand the existing design system before changing anything.

== HARD RULES (do not violate) ==
1. NO em-dashes anywhere. Use commas, periods, colons, or parentheses.
2. NEVER invent credentials, bonding/insurance limits, NCDOT work codes, project stats, client
   names, or testimonials. The existing site already leaves "CONFIRM" comments for these. Keep that
   discipline. Anything unverified gets a "TODO(owner): confirm with Matthew" comment, not a claim.
3. CRITICAL for this job: do not list a service AGLM cannot actually perform. Every new service you
   add must be marked "TODO(owner): confirm AGLM performs this and owns/rents the equipment" until
   Matthew confirms. Propose, do not promise.
4. Preserve the existing design system: palette, Oswald/Inter type, trust ribbon, card and split
   layouts, schema, mobile bar, accessibility. Improve on it, do not replace it.
5. Keep it a fast static multi-page site. No frameworks, no CMS unless requested.
6. NAP source of truth, must match Google Business Profile exactly everywhere:
   Austin Grading and Land Management LLC · 5464 Prices Creek Road, Burnsville, NC 28714 ·
   (828) 284-6182 · matthew@aglmnc.com · Serving Yancey, Mitchell, Avery, Buncombe, Madison, Ashe.

== BUSINESS CONTEXT ==
- Owner: Matthew. NCDOT pre-qualified, NC licensed commercial General Contractor.
- Strong differentiators already on site: NCDOT prequal, commercial GC license, detailed drainage
  (HDPE/RCP, catch basins, drop inlets, underdrain), retaining walls, clean commercial targeting
  (GCs, developers, civil engineers, municipalities, NCDOT primes).
- Current named services: Excavation & Site Prep, Grading & Earthwork, Drainage, Road & Driveway
  Grading, Retaining Walls, NCDOT/Public Work, Erosion & Sediment Control.

== TASK LIST (in order) ==

[GROUP A: COMPETITOR RESEARCH STEP — do this first and report before building]
A1. Research local Western NC excavating, grading, and land-management competitors to find services
    and content AGLM should add or spotlight. Use web search. Start with these real local competitors
    (already identified), and find 3 to 5 more:
      - Black Enterprises Land Management (blackenterpriseslandmanagement.com)
      - Foothills Grading & Trucking (foothillsgrading.com)
      - Adam Young Trucking & Grading (adamyoungtruckingandgrading.com)
      - Mitchell Construction Co (mitchellconstructioncollc.com)
      - King Land Clearing (kinglandclearing.com)
      - TriStar Landworx, Appalachian Excavating & Grading, Mountain Folk Land Clearing
A2. Build a gap table: for each competitor, list the services they name and the content/features they
    have (galleries, before/after, equipment lists, financing, FAQs, service-area pages). Mark which
    of these AGLM does NOT currently name on its site.
A3. Output a prioritized "services to add or spotlight" list with a one-line rationale and the local
    search term it targets. Seed findings from a prior Black Enterprises comparison (validate and expand):
      - Forestry Mulching (high-volume WNC search term; multiple competitors lead with it)
      - Land Clearing (spotlight as a standalone named service, not buried under excavation)
      - Demolition & Concrete Removal (structure demo, concrete removal, debris haul-off)
      - Brush Clearing / Storm-Debris Removal (downed trees, storm silt, heavy brush)
      - Pond Construction
      - Slope Correction / Stabilization (common search phrasing; AGLM does walls + grading already)
    Pause here and report the table + recommendations before writing service copy.

[GROUP B: SERVICE EXPANSION]
B1. For each new service Matthew confirms (see Group A), add a real service block to services.html
    and a card to the homepage services snapshot, matching the existing card/split markup exactly.
    Each new service needs: a benefit-led local description, the WNC angle, a real image slot
    (TODO(owner): photo), and a Request a Quote CTA. Mark each block "TODO(owner): confirm AGLM
    performs this" until cleared.
B2. Use local-search-friendly H2/H3 headers, for example "Forestry Mulching in Western North Carolina"
    and "Land Clearing & Site Prep in Yancey County", to bridge service content with Map Pack intent.
B3. Add the confirmed new services to the GeneralContractor JSON-LD "knowsAbout" array and to the
    nav/footer/anchor links so they are crawlable and discoverable.

[GROUP C: MAKE IT POP — depth and credibility, not redesign]
C1. Give services real estate. The services page currently stacks short blocks on one URL. Either
    expand each into a fuller block (specifics, a short FAQ, local terms, related projects) or, better
    for SEO, split the top services into their own pages (/forestry-mulching, /land-clearing,
    /excavation, /drainage, etc.). Recommend which and do it.
C2. Strengthen proof: add a real project gallery and, where photos exist, before/after pairs on the
    Projects page. Add 2 to 3 short case studies with scope detail (TODO(owner): confirm client
    permission before naming anyone). Pull from the project photos already in the folder.
C3. Add an equipment / capability showcase (machines AGLM runs) and a simple process timeline
    (Quote, Plan, Self-Perform, Final Grade & Compliance). This signals capacity and self-perform scope.
C4. Add real, confirmed stats to the credentials bar (years, projects, acres cleared) only if Matthew
    supplies real numbers. Otherwise leave the existing qualitative stats. Do not invent figures.
C5. Add a testimonials section (real only) and link the existing capability-statement PDF as a
    "Download Capabilities" button for commercial bidders. The PDF already exists in the project.
C6. Elevate the hero with a stronger action image or a short muted looping clip of equipment working,
    if assets exist (TODO(owner): footage). Keep the existing layout and type.

[GROUP D: SEO / LOCAL FOOTPRINT]
D1. Add FAQ schema to service pages. Keep titles, meta, OG unique and accurate after the additions.
D2. Consider town-level service pages for the highest-intent new services (forestry mulching, land
    clearing, excavation) targeting Burnsville, Spruce Pine, Bakersville, Newland, Banner Elk,
    Weaverville, Marshall, Mars Hill. Make them genuinely unique, not thin clones.
D3. Descriptive geo alt text on all new images. Reconcile the two site copies (aglm-site vs
    aglm-site-REVIEW) into ONE source of truth so they cannot drift.

[GROUP E: QA]
E1. Run Lighthouse (mobile + desktop) and W3C HTML validation. Report before/after, fix errors.
E2. Verify accessibility (focus states, alt text, heading order, contrast), no broken links/images,
    and that the PDF and all CTAs work.

== OUTPUT ==
Do Group A and report the gap table and recommendations BEFORE building. Then work group by group,
summarizing changes and listing every TODO(owner) item, especially the confirmation list of which new
services AGLM actually performs, so Matthew gets one clean punch list to approve before anything goes live.
```
