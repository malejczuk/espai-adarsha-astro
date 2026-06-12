# Espai Adarsha Astro

Static Astro rebuild of [espaiadarsha.com](https://www.espaiadarsha.com) for Cloudflare Pages.

## Edit the website

Most day-to-day text, links, prices, contact details, and image choices live in:

- `src/content/site.ts`

Pages live in:

- `src/pages/index.astro`
- `src/pages/yoga.astro`
- `src/pages/espacio.astro`
- `src/pages/contacto.astro`
- `src/pages/colaboradores.astro`

Shared layout and form files live in:

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ContactForm.astro`

Design styles live in:

- `src/styles/global.css`

Images are imported from the existing `assets/` directory.

## Work offline

Install dependencies once while you have internet:

```bash
npm install
```

Then start the local development server:

```bash
npm run dev
```

Astro will print a local URL, usually:

```text
http://localhost:4321
```

Open that URL in your browser. You can edit files while the server is running and Astro will refresh the page automatically.

Unlike Jekyll + GitHub Pages, Astro is a local build tool. The final site is generated into `dist/` when you run:

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```

## Deploy on Cloudflare Pages

In Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

Cloudflare will run `npm install` and `npm run build` automatically on each deploy.

## Forms

Forms submit through FormSubmit to `espaiadarsha@gmail.com`.

The first real submission may trigger a FormSubmit confirmation email. Open that email and activate the form endpoint once.
