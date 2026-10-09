# Changelog

## 2026-10-09: New logo
- The supplied logo replaces the drawn mark: round emblem in the header, full logo in the footer, wolf head as the tab and touch icon, and the social preview image. The Join the team page uses the new "Join the Pack" card sheet as its poster, with the four role cards as text links.

## 2026-10-09: Join the team
- New "Join the team" page in English and Spanish: what we look for, how to apply by call or text, and four role cards linking to the services. Linked in the menu and footer and listed in the sitemap.

## 2026-10-05: Owner, address and map
- Owner (Bryan J. Wolf) shown on the About page and home banner. Office address (429 Main St, Royersford, PA 19468) in the footer and on the Contact page with "Get directions" and "View on Google Maps" buttons. Structured data includes the address, a map link and the founder.

## 2026-10-05: Aeration, Sod & Seeding
- Service renamed "Aeration, Sod & Seeding" everywhere, including the estimate form. New page sections on why to aerate, why to overseed and after-care, plus two new FAQs.

## 2026-10-05: Gallery and home page
- Gallery has 14 before/after sliders (English and Spanish) with text descriptions for screen readers. The home page "See the difference" section shows four of them.
- Home banner: the Google rating line links to the Reviews page and sits above the buttons; the call button is a phone icon on phones.

## 2026-10-05: Reviews
- New Reviews page listing the business's Google reviews, with Google's official "G" and direct "Leave a review on Google" links on the home, About and Reviews pages.

## 2026-10-05: Location
- Business location is Royersford, PA (titles, descriptions, page text, FAQ, structured data and social image, English and Spanish). Service area is Chester County.

## 2026-10-05: Phones
- English/Spanish switch is a compact ES / EN button in the header bar on phones and tablets. The menu collapses at 1240 px so longer Spanish labels never overflow.

## 2026-10-04: First complete version
- 8 service pages, About, Gallery, FAQ, Contact and Privacy in English and Spanish (`/es/`) with language switcher and `hreflang` pairs.
- SEO: sitemap, canonical URLs, robots.txt, llms.txt, Open Graph and Twitter cards, structured data (LocalBusiness, WebSite, Service, FAQ, breadcrumbs).
- Accessibility and speed: skip link, 44 px touch targets, contrast-checked colors, self-hosted fonts, responsive WebP/JPEG images, no cookies and no third-party requests.
- Estimate form builds a text message on the visitor's device (send by text, copy, or call). No email address is published.
- Tooling: `tools/build.py` (generator), `tools/audit.py` (checks), `tools/crawl_live.py` (live-site crawl), GitHub Action on every push and weekly.
