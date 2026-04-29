## Context

The multi-page upgrade you originally requested is **already implemented** in the codebase from our previous session:

- `react-router-dom` is wired up in `src/App.tsx` with five routes (`/`, `/about`, `/capabilities`, `/insights`, `/contact`)
- `Navigation.tsx` uses `NavLink` and routes between pages (no longer scrolls)
- `ChairmanWelcome.tsx` adds the firm-overview prose to the home page
- `About.tsx` has alternating layouts for the three Naik generations with expanded paragraphs
- `Capabilities.tsx` has deep-dive sections for Treaty, Facultative, and Analytics with bulleted lines of business
- `framer-motion` `whileInView` reveals are applied across all new pages
- `Footer` is anchored on every page via the `min-h-screen flex flex-col` shell

The **only outstanding item** from your brief is the static-host routing concern. Since you have both a Lovable custom domain (`arcreinsurance.com`) and a GitHub Actions deploy workflow, the two are competing — that's the real cause of the deep-link 404s you're worried about, not the router.

## Recommendation: Lovable hosting

Lovable's hosting layer has built-in SPA fallback, so `BrowserRouter` with clean URLs (`/about`, `/capabilities`) works perfectly on direct links and refreshes. No `HashRouter`, no ugly `/#/about` URLs, no extra config. This is the right call for a high-end corporate site where SEO and URL aesthetics matter.

GitHub Pages, by contrast, has no SPA fallback and would force `HashRouter`. Running both deployments at the same domain is what's actually causing instability.

## Plan

1. **Remove the GitHub Pages deployment** so it stops competing with Lovable hosting:
   - Delete `.github/workflows/deploy.yml`
   - Delete the root `CNAME` file (Lovable manages the custom domain via DNS, not via a repo CNAME)

2. **Keep `BrowserRouter`** in `src/App.tsx` — no changes needed. Clean URLs, full SPA fallback on Lovable.

3. **Verify no stale base path** in `vite.config.ts` (should be default `/`). Read-only check; no edit anticipated.

4. **No content changes.** The About, Capabilities, Chairman's Welcome, and Insights pages already meet the depth described in your brief. If, after reviewing the live pages, you want any specific section expanded further (e.g. Property/Casualty/Marine/Aviation each as their own sub-block on Capabilities), tell me which one and I'll deepen it surgically rather than rewriting everything.

## After this change

You'll need to do two things on your side:

1. In your GitHub repo settings → **Pages**, set source to **None / Disabled**. This stops GH Pages from serving stale `/src/main.tsx` files at your domain.
2. In Lovable, click **Publish → Update**. Your domain `arcreinsurance.com` will then serve the freshly built `dist/` from Lovable's CDN with working deep links.

## Files affected

- Delete: `.github/workflows/deploy.yml`
- Delete: `CNAME`
- No code changes to `src/`