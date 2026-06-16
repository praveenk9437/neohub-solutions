# Neohub Solutions — Corporate Website

Premium enterprise technology consulting website built with Next.js 16, Tailwind CSS v4, Framer Motion, and canvas particle animations. Deployed via GitHub Pages at [neohubsolutions.com](https://www.neohubsolutions.com).

## Quick Start

```bash
npm install
npm run dev        # Development server at http://localhost:3000
npm run build      # Production static export to ./out/
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Metrics, Who We Are, Services, Industries, Tech Ecosystem, Why Choose Us, Success Stories, CTA |
| `/about/` | Company overview, mission, values, leadership, global delivery model |
| `/services/` | All 6 service categories with capabilities detail |
| `/industries/` | 8 industry-specific solution pages |
| `/insights/` | Filterable blog/insights with search |
| `/careers/` | Benefits, culture, open positions with department filter |
| `/contact/` | Contact form (Formspree), office info |

## Setup Required

### 1. Contact Form (Formspree)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy the form ID
3. Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx` line with:
   ```
   https://formspree.io/f/YOUR_ACTUAL_FORM_ID
   ```

### 2. GitHub Pages Deployment
1. Create a GitHub repo named `neohub-solutions`
2. Push code: `git init && git add . && git commit -m "Initial commit" && git remote add origin https://github.com/YOUR_USERNAME/neohub-solutions.git && git push -u origin main`
3. Go to repo Settings → Pages → Source: **GitHub Actions**
4. Every push to `main` auto-deploys via `.github/workflows/deploy.yml`

### 3. Custom Domain DNS
Add these DNS records at your domain registrar:
```
Type: CNAME  Name: www   Value: YOUR_GITHUB_USERNAME.github.io
Type: A      Name: @     Value: 185.199.108.153
Type: A      Name: @     Value: 185.199.109.153
Type: A      Name: @     Value: 185.199.110.153
Type: A      Name: @     Value: 185.199.111.153
```

## Brand Colors

| Token | Hex | Class |
|-------|-----|-------|
| Primary Orange | `#E8673A` | `bg-neo-orange` / `text-neo-orange` |
| Background | `#080808` | `bg-neo-black` |
| Dark Surface | `#0F0F0F` | `bg-neo-dark` |
| Card | `#161616` | `bg-neo-surface` |
| Text | `#F5F5F5` | `text-neo-text` |
| Muted | `#9CA3AF` | `text-neo-muted` |

Colors are configured in `src/app/globals.css` via Tailwind v4's `@theme` directive.

## Customization

- **Logo**: Replace `public/logo1.jpeg` / `public/logo2.jpeg`
- **Colors**: Edit `@theme` block in `src/app/globals.css`
- **Services**: Edit `src/data/services.ts`
- **Industries**: Edit `src/data/industries.ts`
- **Blog posts**: Edit `src/data/insights.ts` + add files to `content/blog/`
- **Team**: Edit leadership array in `src/app/about/page.tsx`
- **Careers**: Edit `src/data/careers.ts`
- **Office address**: Edit `src/components/layout/Footer.tsx` and `src/app/contact/page.tsx`
- **SEO keywords**: Edit `src/app/layout.tsx` metadata
