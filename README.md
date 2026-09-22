# Espai Adarsha Website

Astro rebuild of [adarshayoga.es](https://adarshayoga.es), intended for deployment on Cloudflare.

## Quick Start

Install dependencies once:

```bash
npm install
```

Run the site locally:

```bash
npm run dev
```

Astro will print a local URL, usually:

```text
http://localhost:4321
```

Open that URL in your browser. While the dev server is running, edits to the site files refresh automatically.

## Editing Content

Most everyday edits live in:

- `src/content/site.ts`

Use this file for text, links, prices, bios, contact details, navigation labels, the announcement bar, and which images appear in each section.

Main pages live in:

- `src/pages/index.astro`
- `src/pages/yoga.astro`
- `src/pages/equipo.astro`
- `src/pages/espacio.astro`
- `src/pages/contacto.astro`
- `src/pages/colaboradores.astro`
- `src/pages/bio-laia.astro`
- `src/pages/bio-kristoff.astro`

Shared layout files live in:

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ContactForm.astro`

Global design styles live in:

- `src/styles/global.css`

Images are stored in:

- `assets/`

## Common Updates

To edit the top announcement bar, change `siteMeta.announcement` in `src/content/site.ts`.

To edit the summer offer on the Yoga page, change `yogaCopy.summerOffer` in `src/content/site.ts`.

To edit the class prices, change `yogaCopy.prices` in `src/content/site.ts`.

To edit the contact email or Instagram handle, change `contact` in `src/content/site.ts`.

## Build And Preview

Create a production build:

```bash
npm run build
```

Preview the Cloudflare build locally:

```bash
npm run preview
```

The built site is generated into:

```text
dist/
```

## Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

Cloudflare will install dependencies and build the site automatically on deploy.

## Domains

The site is served at `adarshayoga.es`. The `site` property in `astro.config.mjs`
points at that apex domain; it is what Astro uses to build absolute URLs.

`espaiadarsha.com` is the previous domain. It no longer serves the site: both it
and `www.espaiadarsha.com` 301-redirect to `adarshayoga.es`, preserving the path
and query string. `www.adarshayoga.es` likewise redirects to the apex, and both
zones force HTTPS.

These redirects are Cloudflare Redirect Rules, configured in the dashboard rather
than in this repository. Nothing here needs to change when they change. Keep any
future redirects there too, rather than in the Astro source, so they run at the
edge and do not require a deploy.

## Sitemap

`@astrojs/sitemap` generates `sitemap-index.xml` and `sitemap-0.xml` into `dist/`
on every build, from the routes in `src/pages/`. The URLs it writes come from the
`site` property in `astro.config.mjs`, so that value must stay correct.

There is no `robots.txt` in this repository; Cloudflare serves an auto-generated
one. Adding `public/robots.txt` would override it, so copy over Cloudflare's
content-signal declarations if you ever add one.

The contact address `hello@espaiadarsha.com` still uses the old domain. Email
routing is independent of the website and was intentionally left in place; moving
it needs a separate Email Routing and SMTP2GO setup on the new domain.

## Forms

The contact form submits through FormSubmit to `hello@espaiadarsha.com`.

The first real submission may trigger a FormSubmit confirmation email. Open that email and activate the endpoint once.

## Notes For Jekyll Users

Astro is similar to Jekyll in that it builds static pages from source files, but local editing normally happens through `npm run dev` instead of `bundle exec jekyll serve`.

You edit source files in `src/` and `assets/`; Astro builds the final output into `dist/`.
