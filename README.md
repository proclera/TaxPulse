# TaxPulse Web Redesign

Editorial React + Vite + Tailwind CSS redesign of **Tax Pulse – Tax Litigation Experts** (`https://www.taxpulse.com/`), preserving all genuine firm copy, client testimonials, reported cases, team dossiers, event galleries, and 29 tax articles.

---

## Local Development & Build (Windows PowerShell)

After exporting or downloading the project archive:

```powershell
# 1. Install dependencies
npm install

# 2. Run unit tests (route matching, article filtering, consultation form validation)
npm test

# 3. Start local development server on http://localhost:3000
npm run dev

# 4. Build optimized production bundle into dist/
npm run build

# 5. Preview the production dist/ build locally
npm run preview
```

---

## Static Hosting & Trailing-Slash SPA Routing

This application uses clean History API URLs (e.g., `/about-us/`, `/our-team/`, `/practice-areas/`, `/articles/`, `/international-taxation/`, `/gallery/`, `/contact-us/`, `/<article-slug>/`). When deploying `dist/` to static hosting, configure a rewrite fallback to `/index.html` for non-file paths so direct deep-link visits and browser refreshes resolve cleanly:

### Apache (`.htaccess` inside `dist/`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Vercel (`vercel.json`)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## Project Notes

- **Preview Mode Form**: The consultation form performs accessible client-side validation without transmitting enquiries externally. Connect `ConsultationForm.tsx` to your production mail/CRM endpoint prior to live deployment.
- **Documentation**: See `DESIGN.md`, `SOURCE_INVENTORY.md`, and `MIGRATION_QA_REPORT.md` for design tokens, verified route inventory, and quarantined live URLs excluded from the public build.
