# Austin Grading & Land Management — Brand Guide

**The locked visual system for AGLM.** Every deliverable — website, capability statement, Google profile, signage, business cards — uses these exact colors, fonts, and rules. This is the source of truth for *look*; `AGLM-MASTER.md` is the source of truth for *facts*. **Claude Code and any designer must follow this file exactly — do not substitute colors or fonts.**

*Created by Dave Price · June 2026*

---

## 1. Brand in one line

Rugged, professional, and built for the mountains. AGLM should look like serious heavy-equipment work done by people you can trust with a commercial site — not a homeowner's side hustle, not a faceless corporation.

**Feel:** heavy · industrial · clean · confident · local.

---

## 2. Logo

**Locked direction: lead with the icon, then a clean wordmark.**

Matthew's existing logo package (in `Branding/AGLM-logos/`) gave us a strong **icon** — two mountain peaks with an excavator bucket. We keep the icon and pair it with the company name set in **Oswald** (our brand font). **We do NOT use the original template's display font** for the wordmark — that novelty typeface is the part that looked cheap.

### The lockup
- **Icon leads** (left or top), **wordmark follows**: "AUSTIN GRADING & LAND MANAGEMENT" in Oswald, uppercase.
- Drop "AND" and "Burnsville, NC" from the logo itself — those live in taglines/contact, not the mark.
- Icon alone is the minimal mark for tight spots (favicon, GBP avatar, social).

### Files (in `Branding/`)
| File | Use |
|---|---|
| `aglm-icon-white.png` | Icon on dark backgrounds |
| `aglm-icon-charcoal.png` | Icon on light backgrounds |
| `AGLM-logos/print_transparent.svg` | Original vector source (full lockup) — icon can be pulled from here |
| `AGLM-logos/icononly_transparent.png` | Original black icon, transparent |

The original full logo files remain in `AGLM-logos/` for reference, but the working mark going forward is **icon + Oswald wordmark**.

### Usage rules
- White icon on dark backgrounds; charcoal icon on light.
- Clear space around the lockup equal to the icon's height; don't crowd it.
- Minimum icon size ~24px on screen.
- Don't stretch, add shadows, recolor the icon arbitrarily, or set the wordmark in the old template font.

---

## 3. Color palette

A monochrome logo means the **color comes from the system, not the logo.** This palette is charcoal + machinery amber + warm clay — heavy-equipment energy, with the clay tone nodding to the red WNC soil AGLM actually moves.

### Core

| Name | Hex | Role |
|---|---|---|
| **Charcoal** | `#1A1A1A` | Primary dark. Backgrounds, headers, footers. The dominant color. |
| **Iron Gray** | `#33383D` | Secondary surface — cards, panels, dividers on dark. The "steel/equipment" tone. |
| **Machinery Amber** | `#E8801A` | **Primary accent.** CTAs, key numbers, highlights, icons, rules. Use with intent, not everywhere. |
| **Amber Deep** | `#C86A12` | Hover state / print-safe amber / amber on light backgrounds. |
| **Clay Tan** | `#DFCCA7` | Secondary warm accent — eyebrows, subtle dividers, labels on dark. Nods to NC clay. |
| **Bone** | `#F5F4F2` | Light section background; logo/text knockout on dark. |

### Neutrals (text)

| Name | Hex | Role |
|---|---|---|
| Text Light | `#F5F4F2` | Body text on dark |
| Muted | `#A8A29E` | Secondary text on dark |
| Text Dark | `#1A1A1A` | Body text on light |
| Text Mid | `#5C5751` | Secondary text on light |
| Hairline | `#E2DDD4` | Borders/dividers on light |

### Usage ratio (the "60-30-10" rule)
- **~60% Charcoal** (dark base) · **~30% Bone/Iron Gray** (surfaces, contrast sections) · **~10% Machinery Amber** (accents only).
- **Amber is a spice, not a sauce.** Never use it as a large background fill or for body text. One accent color only — don't introduce a second bright color.
- Clay Tan is a quiet supporting tone — labels, thin dividers — never competes with amber.

---

## 4. Typography

**Two fonts. No exceptions.** Both are free Google Fonts.

| Use | Font | Weights | Notes |
|---|---|---|---|
| Headlines, labels, numbers | **Oswald** | 500 / 600 / 700 | Condensed, industrial. ALL CAPS for headlines and eyebrows, slight letter-spacing. |
| Body, descriptions, forms | **Inter** | 400 / 500 / 600 | Clean, highly readable. Sentence case. |

Rules: no serifs anywhere, no script, no third font. Headlines uppercase; body sentence case. Generous line-height on body (1.6–1.7). Key stats/numbers in Oswald + amber for punch.

Import:
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap
```

---

## 5. Visual style

- **Sharp, not soft:** corner radius 0–4px max. This is construction, not a SaaS app.
- **High contrast:** charcoal backgrounds, bone text, amber punches.
- **Photos:** real AGLM job sites only (no stock). Apply a consistent treatment — slightly warm, good contrast — and a dark overlay (40–60% charcoal) behind any text on a photo so it stays legible. The source photos are mixed quality; tight crops + uniform treatment unify them.
- **Accents/dividers:** thin amber rules (2–4px) and amber left-borders on cards. Iron-gray panels on dark.
- **Eyebrows:** small Oswald uppercase labels in amber or clay above section titles.
- **Icons:** simple line/solid SVG, single color (amber or bone). No clip-art, no emoji in print pieces.

---

## 6. Voice (summary — full version in AGLM-MASTER.md §3)

Plain, confident, no-fluff — like a foreman who knows the work. Lead with capability and specifics ("NCDOT pre-qualified," "up to $1.5M per project"), not adjectives. Short sentences. Talk to GCs and developers as a peer. Banned words: synergy, leverage, holistic, seamless, world-class, cutting-edge.

---

## 7. Guardrails for Claude Code (read before building the site)

These exist because automated builds tend to drift. Hold the line:

1. **Use the exact hex values in §3.** Do not invent shades, gradients, or a second accent color.
2. **Use only Oswald + Inter** (§4). Do not substitute "similar" fonts or add a third.
3. **Amber ≤ ~10% of any screen.** Charcoal dominates; amber accents only. Never amber as a page/section background or body text.
4. **Corners ≤ 4px.** No pill buttons, no big rounded cards.
5. **Real photos only**, with the dark overlay rule for text legibility. No stock photography, no AI filler images.
6. **Logo:** use the provided files only (white on dark, charcoal on light, amber variant for hero/accent). Respect clear space and minimum size; don't re-typeset, stretch, or invent new logo colors.
7. When unsure, **match the capability statement** (`/capability-statement/`) — it is the reference for how the brand looks applied.
8. Don't introduce decorative elements not described here (no gradients-for-flair, glows, or trendy effects).

---

*Locked system. If a color or font needs to change, change it here first, then cascade to the website brief, capability statement, and brand board.*
