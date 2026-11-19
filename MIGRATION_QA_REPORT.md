# TaxPulse Migration & QA Audit Report

## 1. Design Repositories Used & Exact Execution Log

1. **UI/UX Pro Max** (`https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`)
   - **Commit**: `2de1134dc4d1cfe112934611ae5803ae17a1bd7e`
   - **Files Accessed**: `.claude/skills/ui-ux-pro-max/SKILL.md`, `references/quick-reference.md`, `scripts/search.py`, `scripts/design_system.py`, `scripts/core.py`
   - **Reviewed & Executed Command**:
     `python3 tooling/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/scripts/search.py "tax law legal firm litigation corporate editorial Pakistan" --design-system -p "TaxPulse" --format markdown --output-dir tooling --persist --tokens css`
   - **Generated Output**: `tooling/design-system/taxpulse/MASTER.md`, `tokens.json`, `tokens.css`
   - **Contributions**: Legal Services palette (`#1E3A8A`, `#1E40AF`, `#B45309`, `#F8FAFC`, `#0F172A`), `EB Garamond` + `Lato` font pairing, spacing/shadow scale, Accessible & Ethical checklist, Trust & Authority + Conversion pattern.

2. **Hallmark** (`https://github.com/Nutlope/hallmark`)
   - **Commit**: `04977e15f3dfd6ee4b74c887dac3eb52665d6c92`
   - **Files Accessed**: `AGENTS.md`, `README.md`, `.claude-plugin/plugin.json`, `skills/hallmark/SKILL.md`, `references/redesign.md`, `references/gates.md`, `references/layout.md`, `references/anatomy.md`, `references/imagery.md`, `references/craft.md`, `references/themes/{editorial,broadside,vellum}.md`, `scripts/sloplint.mjs`, `scripts/theme.mjs`
   - **Reviewed & Executed Command**:
     `node tooling/hallmark/skills/hallmark/scripts/sloplint.mjs src index.html --genre editorial`
   - **Contributions**: Consultation-priority hero hierarchy, restrained `1px` editorial grid rules, zero static pills for metadata, no `border-l-4` accent bars, `copy: verbatim` CSS posture, keyboard/reduced-motion/overflow gates.

---

## 2. Live Site vs. Supplied HTML Attachment (`index_d849bc70.html`) Diff Log

| Area | Live `taxpulse.com` (Used as Baseline) | Supplied `/public/assets/aistudio/index_d849bc70.html` | Resolution in Redesign |
| :--- | :--- | :--- | :--- |
| **Brand Name & Tagline** | `Tax Pulse` / `Tax Pulse – Tax Litigation Experts` | `TaxPulse ADVOCATES & ASSOCIATES` / invented `"You need not pay a rupee more than the legal minimum. No more should be demanded."` | Preserved live verbatim `"Pakistan’s Leading Tax Consultancy"`, original `logo.png`, and Sindh Bar Council Reg. No. 351 |
| **Testimonials** | 7 complete, multi-paragraph verbatim testimonials (Awan Trading, Airwaves Media w/ petitions 3815/2016, 3320/2016, 3321/2016, Zaheer Allana, Basharat Ullah Khan, Muneer Ahmed Memon, Jawad Ahmed Memon, Ahmad Raza Khan) | 4 paraphrased one-sentence editorial summaries marked `"not verbatim quotations"` | Kept **all 7 complete verbatim testimonials** (and preserved subtle word variations between `/` and `/our-clients/`) |
| **Team & Principal Lawyer** | 4 core team portraits/bios + 3 Lahore team portraits/bios + full Amjad Javed Hashmi dossier + `Profile-Mr.-Amjad-Hashmi.pdf` + YouTube profile video | Unnamed generic `"Advocate of the Supreme Court"` line marked `"require final verification"` | Preserved **all 7 team members verbatim**, portraits, PDF download, and YouTube embed |
| **Practice Areas & Reported Cases** | 4 detailed services (`Litigation` 4 bullets, `Tax Compliance` 11 bullets, `Advisory`, `Retainer-ship`) + 8 reported judgments with citations/dates | 6 problem-finder cards + 3 business cards + 4 FAQs (synthetic demo copy) | Preserved **every live service bullet/paragraph and all 8 reported cases verbatim** |
| **Articles & International Tax** | 29 genuine articles + `International_Tax_Handbook-2.pdf` + FBR Ordinance PDF + YouTube interview + WP Page 55 CPEC/Arnold & McIntyre commentary | 6 sample placeholder article modals + 3 sample international tabs | Preserved **all 29 genuine articles verbatim** + WP Page 55 International Taxation overview + searchable/paginated Knowledge Hub |
| **Contact Form & Offices** | Contact Form 7 (`your-name`, `your-company`, `your-email`, `tel`, `your-message`, `"Send"`) + 4 regional offices (Karachi, Lahore, Islamabad, Multan) with branch heads, phones, `info@taxpulse.com`, Google Maps links, Lahore iframe map | Multi-step demo form (`organisation`, `capacity`, `authority`, `issue`, `deadline`, `summary`) + unverified placeholder footer | Preserved **exact 5 Contact Form 7 fields**, `"Ask for Free Tax Advice!"` CTA, and **all 4 regional offices with clickable `tel:`, `mailto:`, and map links** |

---

## 3. Compromised / Unrelated Content Held Out Pending Owner Review

1. **Post `/coronavirus-disease-2019/`** (ID `2184`, `2026-11-03`) — Non-tax Wikipedia COVID-19 article injected into `Income Tax` category. **Excluded from public routes & search.**
2. **Post `/test-post-99693b1c-9e6e-4447-a471-57277fcf5d3f-b608e826e6e39907/`** ("Whales: Giants of the Ocean", ID `2171`, `2026-10-02`) — Non-tax test post injected into `Income Tax` category. **Excluded from public routes & search.**
3. **Page `/home/`** (ID `1208`) — Duplicate homepage containing two injected betting promo blocks (*"Sportingbet App for Android and IOS"* -> `topbet-africa.com`; *"How to Register on Odibets Kenya"*). **`/home/` cleanly routes to the uncompromised `/` homepage.**

---

## 4. WordPress Shortcodes & Lazy-Loaded Media Resolution

- **Visual Composer `[vc_cta ...]` shortcodes** in 5 older 2023-07 articles (`tax-justice`, `handle-tax-notice`, `tax-planning-basics`, `taxation-business-income-snakes-ladders`, `business-income-tax-deductions`): converted cleanly into semantic `<aside class="article-inline-cta">` preserving `"Get Free Tax Advice"` + `"Get Free Advice!"` with **zero raw `[vc_...]` markup rendered**.
- **LiteSpeed Lazy-Loaded Iframes** (`src="about:blank" data-litespeed-src="..."`) on `/amjad-javed-hashmi-tax-consultant/` (YouTube video `_KhKjSvYwGs`), `/midway-story-.../` (YouTube video `PKVGVSgAxHc`), and `/contact-us/` (Lahore Badar Centre Google Map): restored to direct `src` attributes with `loading="lazy"`.
- **WP Page `55` (`/international-taxation/`) vs Category Archive `3` (`/international-taxation/`)**: Live site rendered only the Category 3 archive at `/international-taxation/`, hiding WP Page `55`'s CPEC/Arnold & McIntyre overview. Both are now preserved seamlessly together on `/international-taxation/`.
- **Asset Mirroring**: 237/239 TaxPulse assets (including logo, client logos, portraits, article visuals, `Profile-Mr.-Amjad-Hashmi.pdf`, `International_Tax_Handbook-2.pdf`, and full-resolution gallery photographs) verified HTTP 200 and mirrored locally under `public/taxpulse-assets/`. Only 2 redundant full-res filenames (`Seminar-on-income-Tax.jpeg`, `Summer-camp-2022-5.jpeg`) failed fetch on origin; their valid `-300x200.jpeg` / `-300x204.jpeg` assets were preserved with zero broken images (`<img>` verified).
