# TaxPulse Source Inventory

- **Source Baseline**: `https://www.taxpulse.com/` (live HTML pages, XML sitemaps, and WordPress REST API crawled 2026-11-19).
- **Supplied Local Attachment Inspected**: `/public/assets/aistudio/index_d849bc70.html` (static interactive redesign demonstration).
- **Verification Scope**: Every core page, category archive, pagination URL, gallery album, team profile, PDF download, and genuine tax article was fetched and verified directly against rendered HTML and WP REST JSON (`wp-pages.json` [20 pages], `wp-posts.json` [31 posts], `wp-categories.json` [3 categories], `wp-tags.json` [49 tags], `wp-media.json` [157 items]).

---

## 1. Core Pages & Firm Routes

| Live URL | Title (Live `<title>`) | Content Blocks | Media & Documents | Forms / Interactive Controls | Verification Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `Leading Tax Consultants in Pakistan - Get Free Tax Advice!` | Hero (`Pakistan’s Leading Tax Consultancy`, Zaheer Allana quote, `Our Team`, `Get in Touch`, `Ask for Free Tax Advice!`), `Get Free Tax Advice` CTA (`Get Free Advice!`), 4 Practice Area summaries, `Why Choose Us` (`Competence`, `One-Window Operation`, `Experience`), `Our Gallery` (8 preview photos + `View All`), `What Our Clients Say About Us` (all 7 verbatim testimonials), 4-office footer + social links | `logo.png`, `income-tax-slide.jpg`, 8 gallery preview thumbnails, footer phone/email/address icons | Top nav dropdown (`Our Firm`), mobile menu drawer, gallery preview lightbox | **Verified & Preserved** |
| `/about-us/` | `About Tax Pulse - Advocates and Tax Litigation Experts` | `What Can You Expect From Us?`, firm history (established 2003, Sindh Bar Council reg. 351), principal lawyer background, `Our Mission & Values`, `Client Care is Our Strength`, `Get Free Tax Advice` CTA | `logo.png` | Sub-navigation (`Our Team`, `Our Clients`, `Reported Cases`, `Ask for Free Tax Advice!`) | **Verified & Preserved** |
| `/our-team/` | `Meet the Dynamic Team at Tax Pulse - Sales Tax Consultants` | `Meet Our Talented Team.`, 4 core members (`Amjad Javed Hashmi`, `Ghulam Rabbani`, `Naeem Noor`, `Yousof Ali`) + link to Lahore office team | `Amjad-Javed-Hashmi.png`, `Ghulam-Rabbani.png`, `Naeem-Noor.png`, `Yousof-Ali.jpg` | Profile link (`/amjad-javed-hashmi-tax-consultant/`), `mailto:ajhashmi@taxpulse.com` | **Verified & Preserved** |
| `/lahore-office-of-taxpulse/` | `Meet the Dynamic Team at Tax Pulse - Sales Tax Consultants` | `Lahore office of Taxpulse` team profiles (`Syed Tahir Abbas Zaidi`, `Syed Zeeshan Haider Zaidi`, `Syed Qaim Ali, ACA`) | `WhatsApp-Image-2023-09-22-at-8.44.01-PM.jpeg`, `pk-229x300.jpg`, `aaa-224x300.jpg` | Sub-navigation to core team & firm pages | **Verified & Preserved** |
| `/amjad-javed-hashmi-tax-consultant/` | `Tax Lawyer Par Excellence - Amjad Javed Hashmi` | `Amjad Javed Hashmi` / `Principal Lawyer`, `Get Free Tax Advice`, career summary, 12-item `Profile`, `Education`, `Awards`, `Honors`, `Experience` (2003+ practice + 1997–2002 CIT + 1988–1997 IAC + 1977–1986 ITO), `Community Service` | `Amjad-Javed-Hashmi_j1b5qd.png`, `Profile-Mr.-Amjad-Hashmi.pdf`, YouTube embed (`_KhKjSvYwGs`) | PDF download (`Profile-Mr.-Amjad-Hashmi.pdf`), embedded YouTube player | **Verified & Preserved** |
| `/our-clients/` | `Some of Our Valued Clients - Tax Pulse - Tax Litigation Experts` | `Some of Our Valued Clients.`, 13 valued client tiles, `What Our Clients Say About Us` (all 7 complete verbatim testimonials) | All 13 client logos (`Airwaves Media`, `Procter & Gamble`, `NIBAF`, `CNBC Pakistan`, `Grant Thornton`, `Storsack`, `Globex Safety`, `Muhafiz Security`, `Karachi Dock Labour Board`, `Jinnah University for Women`, `Khan Brothers`, `Interflow Communications`, `CPSP`) | Sub-links (`About Us`, `Practice Areas`, `Reported Cases`) | **Verified & Preserved** |
| `/reported-cases/` | `Income Tax, Sales Tax, Customs & Excise Cases Reported in Journals` | Intro paragraph + all 8 reported judgments (`Sitara Energy`, `Sarah Construction`, `Quality Textile Mills`, `Kassim Textile Mills`, `Karachi Port Trust`, `Kohistan Industries`, `Waseem Ahmed`, `Mohammad Hussain`) with citations, dates, outcomes, legal holdings | Header/footer assets only | Sub-links (`Our Team`, `Our Clients`, `About Us`, `Ask for Free Tax Advice!`) | **Verified & Preserved** |
| `/practice-areas/` | `Best Help with Income Tax, Sales Tax you can find!` | `What Can We Do For You?`, `Our Services Get You Results`, full `Litigation Services` (4 items), `Tax Compliance Services` (11 items), `Advisory Services` (3 paragraphs), `Retainer-ship Services` (3 paragraphs), all 7 testimonials | Header/footer assets only | Service jump navigation (`#litigation`, `#compliance`, `#advisory`, `#retainer`) | **Verified & Preserved** |
| `/contact-us/` | `Get Free Tax Advice from The Leading Tax Consultants in Pakistan` | `Free Tax Advice.` intro, 4 regional office tabs/cards (Karachi, Lahore w/ Syed Tahir Abbas Zaidi, Islamabad w/ Nazir Ahmed, Multan w/ Syed Mudassir Shah), Contact Form 7 consultation form | Google Maps embed (`Badar Centre`, Lahore) | Interactive office tabs, Contact Form (`your-name`, `your-company`, `your-email`, `tel`, `your-message`, `Send` — client preview mode), clickable `tel:`, `mailto:`, Google Maps links | **Verified & Preserved** |

---

## 2. Gallery & Event Album Routes

| Live URL | Album Title | Photo Count | Description Preserved | Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| `/gallery/` | `Gallery` | 7 album cards | Index linking all 7 event albums | **Verified & Preserved** |
| `/opening-ceremony-of-tax-pulse-in-multan/` | `Opening Ceremony of Tax Pulse in Multan` | 8 photos | — | **Verified & Preserved (Full-res mirrored + keyboard lightbox)** |
| `/icma-event-2/` | `Post Budget Seminar 2023- ICMA` | 14 photos | — | **Verified & Preserved (Full-res mirrored + keyboard lightbox)** |
| `/annual-dinner/` | `Annual Dinner 2021 – 2023` (`Annual Dinner 2022`) | 7 photos | — | **Verified & Preserved (Full-res mirrored + keyboard lightbox)** |
| `/summer-camp-2023/` | `Summer Camp 2023` | 12 photos | — | **Verified & Preserved (11 full-res + 1 thumbnail mirrored + lightbox)** |
| `/annual-dinner-2023/` | `Annual Dinner 2023` | 11 photos | — | **Verified & Preserved (Full-res mirrored + keyboard lightbox)** |
| `/seminar-on-income-tax/` | `Faisalabad Tax Bar Association Seminar on income Tax 2023` | 9 photos | Full reception & Mr. Bilal Zubair shield presentation caption | **Verified & Preserved (8 full-res + 1 thumbnail mirrored + lightbox)** |
| `/lecture-fbr-multan-2025/` | `Lecture FBR Multan 2025` | 6 photos | Full caption (*"The Scope and Reach of Tax Audit"*, Dr. Faheem Khan Sb.) | **Verified & Preserved (Full-res mirrored + keyboard lightbox)** |
| `/icma-event/` | Redirects (`301/200`) to `/` | — | Normalized to `/` in router | **Verified Redirect Alias** |

---

## 3. Articles, Category Archives & Genuine Publications (29 Posts)

### Archives & Pagination
- `/articles/`, `/articles/page/2/`, `/articles/page/3/` (clean 29 genuine articles paginated 10/page; live `/articles/page/4/` was only caused by the 2 extra spam posts).
- `/income-tax/` (`Category 'Income Tax'`, 24 genuine articles; live showed 26 due to the 2 held-out non-tax posts).
- `/sales-tax/` (`Category 'Sales Tax'`, 7 genuine articles).
- `/international-taxation/` (`Category 'International Taxation'`, 6 genuine articles + recovered WP Page ID `55` International Taxation overview with `international-taxation-slide.jpg`, Arnold & McIntyre quote, and CPEC/MNC commentary).

### All 29 Genuine Tax Articles Preserved Verbatim
1. `/are-you-paying-the-correct-the-tax-regime-of-pakistan/` (2023-12-11, Income Tax)
2. `/basic-legal-framework-of-international-taxation-in-pakistan/` (2023-11-11, Income Tax)
3. `/basic-legal-framework-of-international-taxation-of-pakistan-ii-taxing-pakistani-foreign-income-sources-of-residents/` (2023-11-11, Income Tax & International Taxation)
4. `/the-nexus-of-dignity-accountability-and-quality-governance/` (2023-11-10, International Taxation)
5. `/supreme-court-limits-exercise-of-prosecutorial/` (2023-10-23, Income Tax)
6. `/tax-matters-in-pakistan-05-ultimate-doctrine/` (2023-10-16, Income Tax)
7. `/international-taxation-in-pakistan-taxation/` (2023-09-21, International Taxation)
8. `/business-income-principles-and-tax-policy/` (2023-09-21, Income Tax)
9. `/framework-of-international-taxation-in-pakistan/` (2023-09-21, International Taxation)
10. `/the-art-of-pleading/` (2023-09-07, Income Tax)
11. `/notice-from-any-tax-enforcement-agency/` (2023-09-07, Income Tax)
12. `/what-treasures-of-polity-the-great-iqbal-and-jinnah-gave-to-us/` (2023-09-07, Income Tax)
13. `/when-purity-of-tax-justice-is-at-stake/` (2023-09-07, Income Tax)
14. `/a-triangular-delivery-model-of-governmen/` (2023-09-07, Income Tax)
15. `/file-taxes-in-pakistan-12-excellent-steps/` (2023-09-01, Income Tax)
16. `/pursue-refund-claims-in-pakistan-4-easy-steps/` (2023-09-01, Income Tax & Sales Tax)
17. `/5-importance-of-bookkeeping-for-business/` (2023-09-01, Income Tax & Sales Tax)
18. `/why-you-need-bookkeeping-services/` (2023-09-01, Income Tax)
19. `/monthly-sales-tax-returns-avoid-late-fees/` (2023-08-29, Sales Tax)
20. `/midway-story-of-tax-issues-expert-insights-with-amjad-javed-hashmi/` (2023-08-28, Income Tax, International Taxation, Sales Tax — includes embedded YouTube video `PKVGVSgAxHc`)
21. `/poor-governance-pakistan/` (2023-07-19, Income Tax)
22. `/international-tax-handbook/` (2023-07-15, International Taxation — includes downloadable PDF `International_Tax_Handbook-2.pdf`)
23. `/finance-act-2023-analysis-in-legal-perspective/` (2023-07-13, Income Tax — includes RankMath TOC anchors & 2 embedded tables/diagrams `Concepts-liabilities-rights-and-powers.webp`, `Sales-tax-concepts-23-1.webp`)
24. `/finance-act-2022/` (2023-07-11, Income Tax)
25. `/tax-justice/` (2023-07-09, Income Tax & Sales Tax — Visual Composer shortcodes cleanly converted to editorial CTA)
26. `/handle-tax-notice/` (2023-07-08, Income Tax & Sales Tax — Visual Composer shortcodes cleanly converted)
27. `/tax-planning-basics/` (2023-07-08, Income Tax & Sales Tax — Visual Composer shortcodes cleanly converted)
28. `/taxation-business-income-snakes-ladders/` (2023-07-07, Income Tax — Visual Composer shortcodes cleanly converted)
29. `/business-income-tax-deductions/` (2023-07-07, Income Tax — Visual Composer shortcodes cleanly converted + external FBR Ordinance PDF link preserved)

---

## 4. Quarantined / Held-Out Live URLs (Not Included in Public Build)

The following items detected on the live WordPress site appear to be unauthorized injections or test artifacts unrelated to TaxPulse's tax law practice and have been **held out of public output pending owner review**:

1. `https://www.taxpulse.com/coronavirus-disease-2019/` (WP Post ID `2184`, dated `2026-11-03`, categorized under Income Tax; Wikipedia copy-paste with outbound link to `en.wikipedia.org`).
2. `https://www.taxpulse.com/test-post-99693b1c-9e6e-4447-a471-57277fcf5d3f-b608e826e6e39907/` ("Whales: Giants of the Ocean", WP Post ID `2171`, dated `2026-10-02`, categorized under Income Tax).
3. `https://www.taxpulse.com/home/` (WP Page ID `1208`) — duplicate home draft containing two injected sports-betting promo blocks (*"Sportingbet App for Android and IOS"* linking to `topbet-africa.com` and *"How to Register on Odibets Kenya"*). Public route `/home/` now cleanly renders the uncompromised `/` TaxPulse homepage.
