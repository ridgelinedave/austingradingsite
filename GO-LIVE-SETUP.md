# AGLM Website — Go-Live Setup (one time)

**Goal:** put the new site on Netlify, then point the GoDaddy domain at it so the new site
replaces the old GoDaddy Website Builder site. Plain-English, do it top to bottom.

**Time:** ~30 minutes of clicking + some waiting for the internet to catch up.

**You'll need:** your Netlify login, your GoDaddy login, and the deploy zip
(run `MAKE WEBSITE ZIP.cmd` to make a fresh one in `website-deploys/`).

> **Email is safe the whole way.** Matthew's `@aglmnc.com` email is on Google Workspace, which
> we never touch. In Part 2 we change only the **website** records (`A` and `CNAME`) — never the
> email records (`MX`) and never the nameservers.

---

## PART 1 — Put the site on Netlify (~10 min)

**1. Make a free Netlify account.**
Go to **app.netlify.com** → Sign up (the "Sign up with Google" button is easiest). It's free.

**2. Upload the site.**
- Run **`MAKE WEBSITE ZIP.cmd`** to get the newest dated zip from `website-deploys/`.
- In Netlify, go to **app.netlify.com/drop** and **drag that zip** onto the page.
- Wait ~30 seconds. Netlify gives you a temporary address like `clever-name-1234.netlify.app`.

**3. (Optional) Give it a tidier name.**
Site → **Site configuration → Change site name** → type something like `austin-grading`.
Your address becomes `austin-grading.netlify.app`. **Write this address down — you'll need it in Part 2.**

**4. Test it.**
Open the `.netlify.app` address on your computer **and** your phone. Click around. This is the real site, just on a temporary address.

**5. Turn on the contact form email.**
- First, **enable form detection** and **redeploy** (Netlify only finds the form on a deploy *after* detection is on): Forms → Enable form detection, then drag the zip onto the Deploys tab again. A form named **`quote`** should then appear under Forms.
- Then add the email(s): **Site configuration → Notifications → Form submission notifications → Add notification → Email notification.** The email field takes one address each, so add **two**: one to **`matthew@aglmnc.com`** and one to **`dave@aglmnc.com`**.
- (Now quote requests email both of you and are saved in the Forms tab.)

✅ At this point the site is fully live on the temporary `.netlify.app` address. Part 2 just swaps the real domain onto it.

---

## PART 2 — Point the GoDaddy domain at Netlify (~10 min + waiting)

**First, pick the main address.** Recommended: **`aglmnc.com`** (short, matches the email).
The other one (`austingradingnc.com`) will just forward to it. Use whichever you prefer — the steps are the same.

**1. In Netlify, add the domain.**
- Site → **Domain management → Add a domain** → type `aglmnc.com` → **Add**.
- Netlify may ask "Use Netlify DNS?" — **say no / skip it.** Choose to **keep your existing DNS** (this is what protects the email).
- Netlify will now show you two things to create at GoDaddy:
  - an **A record** value (an IP, currently `75.2.60.5`), and
  - a **CNAME** target (your `your-site.netlify.app` address).
- Also click **Add a domain** again and add `www.aglmnc.com`, and repeat for `austingradingnc.com` if you own it. (Netlify will auto-redirect the extras to the main one.)

**2. In GoDaddy, change two records.**
- Log in at **godaddy.com** → **My Products** → find the domain → **DNS** (or "Manage DNS").
- Find the **A record** with Name **`@`**. Click edit (pencil) → change its **Value** to **`75.2.60.5`** → **Save**.
- Find or add a **CNAME** with Name **`www`** → set **Value** to **`your-site.netlify.app`** → **Save.**
- **Leave everything else alone** — especially anything that says **MX** or **TXT** (that's the Google email) and the **Nameservers** (don't change those).

**3. If GoDaddy won't let you edit the A record:**
That means the old **Website Builder** is still "holding" the domain. Two easy options:
- In GoDaddy, open the **Website Builder** → **Settings → Domain → disconnect/remove** the domain, then go back and edit the DNS records as above; **or**
- **Call GoDaddy support** (they're 24/7) and say exactly this: *"Point my domain to an external host. Set the A record for @ to 75.2.60.5 and a CNAME for www to `your-site.netlify.app`. Do not change my MX records or nameservers — my email is on Google Workspace."* They'll do it in a few minutes.

**4. Wait.**
DNS changes take anywhere from a few minutes to a few hours (occasionally up to a day). Netlify's Domain page will flip to **"Netlify DNS configured / verified"** when it sees the change, and it automatically turns on the **https** lock. You don't have to do anything during the wait.

**5. Finish in Netlify.**
- Domain management → set **`aglmnc.com`** as the **Primary domain**.
- Turn on **Force HTTPS** (one toggle) so visitors always get the secure version.

✅ Now `aglmnc.com` shows the new site, with the padlock, and `www` + the other domain redirect to it. The new site has officially replaced the old one.

---

## PART 3 — Retire the old GoDaddy site (~5 min, AFTER the new one is confirmed live)

Once you've checked that `aglmnc.com` is showing the new site:

- In GoDaddy, **cancel the Website Builder subscription** (you're not using it anymore).
- **KEEP** the domain registration (you still own the address) and **KEEP** the Google Workspace email. Only the old website-building tool goes away.

---

## The whole thing in one breath

1. Drag the zip to Netlify → get a `.netlify.app` address.
2. In Netlify add `aglmnc.com` (keep your DNS, don't use Netlify DNS).
3. In GoDaddy change **A `@` → 75.2.60.5** and **CNAME `www` → your-site.netlify.app**. Touch nothing else.
4. Wait for the padlock, set the primary domain, Force HTTPS.
5. Cancel the old GoDaddy Website Builder; keep the domain + email.

**If you ever feel unsure at the GoDaddy step, call their support and read them step 2 — that's the safe button.**

---

## Two blanks to fill in as you go
- Netlify site address: `______________________.netlify.app`
- Primary domain chosen: `aglmnc.com`  /  `austingradingnc.com`  (circle one)

*For day-to-day updates after go-live, see `HOSTING-MASTER.md`.*
