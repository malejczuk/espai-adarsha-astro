# Adarsha Yoga Website

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
- `src/pages/suelo-pelvico.astro`
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

## Cloudflare

The site runs as a Cloudflare **Worker** named `espai-adarsha-astro`, not as a
Pages project. `wrangler.jsonc` holds that configuration: `dist/_worker.js/index.js`
is the entry point, and `dist/` is bound as the static asset directory.

Deploys happen through Cloudflare's Git integration. Merging to `main` triggers a
build on Cloudflare's runners, which install dependencies and run `npm run build`
themselves. Nothing is uploaded from a local machine, and `dist/` is gitignored,
so what ships is built from the repository alone.

Build settings, for reference:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node version: `22`

`npm run deploy` exists as a direct-upload escape hatch. It builds locally and
pushes straight to the Worker with Wrangler, bypassing Git entirely, and needs
`wrangler login` first. Prefer merging to `main`, so that what is deployed always
matches what is committed.

Build logs live under the Worker's Deployments tab in the Cloudflare dashboard.
Custom domains are managed there too, under Domains & Routes.

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

### Redirect rules still to add

`/colaboradores/` was renamed to `/suelo-pelvico/`, so the page's own topic is in
its URL. The old path has been linked from the site and indexed, so it needs a
rule of its own in the dashboard:

```text
When  URI Path equals /colaboradores/  (and /colaboradores)
Then  Static redirect to https://adarshayoga.es/suelo-pelvico/, status 301,
      preserve query string
```

Until that rule exists, `/colaboradores/` returns the Worker's 404 and whatever
authority the old URL had is lost.

## Sitemap

`@astrojs/sitemap` generates `sitemap-index.xml` and `sitemap-0.xml` into `dist/`
on every build, from the routes in `src/pages/`. The URLs it writes come from the
`site` property in `astro.config.mjs`, so that value must stay correct.

There is no `robots.txt` in this repository; Cloudflare serves an auto-generated
one. Adding `public/robots.txt` would override it, so copy over Cloudflare's
content-signal declarations if you ever add one. Cloudflare's copy carries no
`Sitemap:` line, which is why the sitemap is submitted to each search engine
directly rather than advertised there.

### Search engine setup

These are dashboard jobs, not repository ones. Checked 12 November 2026:

- `espaiadarsha.com`, `www.espaiadarsha.com` and `www.adarshayoga.es` all 301 to
  `https://adarshayoga.es`, path preserved. Verified with `curl -I`. Nothing to do.
- `https://adarshayoga.es/sitemap-index.xml` and `sitemap-0.xml` both return 200
  and list all nine routes. Nothing to do.
- **Google Search Console**: still to be set up. Verify the `adarshayoga.es`
  domain property (DNS TXT record, which also covers every subdomain), submit
  `sitemap-index.xml`, and read the Pages report to see what is actually indexed.
- **Bing Webmaster Tools**: still to be set up. It can import the property
  straight from Search Console once that exists, so do Google first.
- Add `/suelo-pelvico/` to the sitemap by deploying this branch; the sitemap is
  generated from `src/pages/` on every build.

The contact address is `hello@adarshayoga.es`. Email Routing and SMTP2GO are
configured on the `adarshayoga.es` zone, so the address resolves. Routing is
independent of the website: changing the address in `src/content/site.ts` changes
only what the site displays, not where mail goes.

## Structured Data

`src/components/StructuredData.astro` emits one JSON-LD block, rendered by
`BaseLayout` on every page: the studio as a `SportsActivityLocation` (schema.org
has no yoga studio type) with its address, coordinates, email, price range,
opening hours and linked profiles. Everything it says is read from
`localBusiness` and `contact` in `src/content/site.ts`, so there is one place to
change.

Two things to know:

- The opening hours duplicate the timetable on `/horario/`. Change them together,
  or Google will advertise classes that no longer run.
- `localBusiness.profiles` holds the non-Instagram profiles that go into
  `sameAs`. The ClassPass, Wellhub and Union Sport & Culture listings still need
  their URLs added there.

Test a change with Google's Rich Results Test or the schema.org validator against
a deployed URL.

## Forms

The contact form submits through FormSubmit to `hello@adarshayoga.es`.

The first real submission may trigger a FormSubmit confirmation email. Open that email and activate the endpoint once.

## Notes For Jekyll Users

Astro is similar to Jekyll in that it builds static pages from source files, but local editing normally happens through `npm run dev` instead of `bundle exec jekyll serve`.

You edit source files in `src/` and `assets/`; Astro builds the final output into `dist/`.
