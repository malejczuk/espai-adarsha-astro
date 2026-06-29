# Espai Adarsha Website

Astro rebuild of [espaiadarsha.com](https://www.espaiadarsha.com), intended for deployment on Cloudflare Pages.

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

## Forms

The contact form submits through FormSubmit to `hello@espaiadarsha.com`.

The first real submission may trigger a FormSubmit confirmation email. Open that email and activate the endpoint once.

## Notes For Jekyll Users

Astro is similar to Jekyll in that it builds static pages from source files, but local editing normally happens through `npm run dev` instead of `bundle exec jekyll serve`.

You edit source files in `src/` and `assets/`; Astro builds the final output into `dist/`.
