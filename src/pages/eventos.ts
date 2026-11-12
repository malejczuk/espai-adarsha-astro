import type { APIRoute } from "astro";
import { externalLinks } from "../content/site";

// /eventos/ is a short, memorable address for the Momoyoga events listing, so
// it can be printed on a flyer, read out in a class or put in an Instagram bio
// without anyone typing a momoyoga.com URL. Nothing is rendered here: the route
// exists only to hand the visitor on.
//
// prerender = false makes this an on-demand route, so the Worker answers with a
// real 301 rather than the meta-refresh page a static build would emit. 301
// rather than 302 because the destination is not expected to move, and because
// a permanent redirect keeps search engines from indexing /eventos/ itself.
//
// The repository's other redirects are Cloudflare Redirect Rules, set in the
// dashboard (see README, "Domains"). Those are for addresses the Astro site
// does not own, such as the retired espaiadarsha.com. This one is a route of
// this site, so it lives with the pages.
export const prerender = false;

export const GET: APIRoute = () =>
  new Response(null, {
    status: 301,
    headers: {
      Location: externalLinks.events,
      // The address itself may change; let a browser re-ask rather than cache
      // the hop for a year.
      "Cache-Control": "public, max-age=3600",
    },
  });
