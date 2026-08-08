# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

rivernate.com — a personal site built from a terminal/phosphor-themed design system
(design system source: Claude Design project `665cb5c7-b17d-4984-8e23-b647e7f6179c`,
namespace `RivernateDesignSystem_665cb5`). Plain static HTML/CSS/JS, no build step,
no package.json — React, ReactDOM, and Babel Standalone are loaded from unpkg at
runtime and JSX is transpiled in-browser.

The previous incarnation of this repo (Azure Pipelines/CodeBuild + Terraform-managed
S3/CloudFront) is archived at tag `archive/legacy-site` and branch `archive/legacy`.

## Commands

There is no build, lint, or test tooling in this repo. To iterate locally, serve the
directory with any static file server, e.g.:

```
python3 -m http.server 8099
```

Deploy (see "Deploy" below for why this must be run manually):

```
npx wrangler deploy
```

## Deploy

This is a **Cloudflare Workers** project using static assets (`[assets] directory = "."`
in `wrangler.toml`), *not* Cloudflare Pages, despite the name/domain. The Worker is
named `rivernate-com`.

**The GitHub git-integration build trigger is not actually wired up** — pushing to
`main` does not auto-deploy. Cloudflare's dashboard "Import a repository" flow only
did a one-time build; `/accounts/{account}/builds/workers/rivernate-com/triggers` is
empty. Until this is fixed (reconnect via the Worker's Settings → Build in the
dashboard, or add a GitHub Actions workflow that runs `wrangler deploy`), every change
needs an explicit `npx wrangler deploy` after pushing.

`wrangler` deploy respects `.assetsignore` (gitignore-style syntax) for excluding
files from the uploaded asset bundle — it does **not** read `.gitignore`. Keep both
files in sync when adding directories that shouldn't ship (this bit us once: `.git/`
and `.wrangler/tmp` got uploaded as public static assets before `.assetsignore`
existed).

DNS for `rivernate.com` lives in the same Cloudflare account/zone. ProtonMail
MX/DKIM/SPF/DMARC records live alongside the site's DNS — don't touch those when
changing site-related DNS.

## Architecture

**Routing:** `index.html` is the single entry point. It boots a React `App` component
that does client-side hash routing (`#/`, `#/writing`, `#/post/<slug>`, `#/projects`,
`#/about`) — there is no server-side routing and no other page-serving HTML file
except `storybook.html` and `foundations.html` (see below).

**Load order matters** in `index.html`: React/ReactDOM/Babel CDN scripts, then
`_ds_bundle.js` (compiled design system components), then `data.js` (content), then
the `js/*.jsx` screen files (each transpiled in-browser via `<script type="text/babel">`),
then the inline `App` bootstrap script. Each `js/*.jsx` file expects
`window.RivernateDesignSystem_665cb5` and `window.RN_DATA` to already exist.

**`_ds_bundle.js` is compiled output — do not hand-edit it.** It's the design
system's component library (Button, Card, TerminalWindow, NavBar, Dialog, etc.),
pulled from the Claude Design project via the `DesignSync` MCP tool. It registers
everything on `window.RivernateDesignSystem_665cb5`. If a component needs to change,
that should happen in the source design system project and be re-synced, not patched
in place here (a one-off exception was made for `js/AboutScreen.jsx`'s copy, which is
site content, not a component).

**`js/*.jsx` are page screens**, one per route (`HomeScreen`, `WritingScreen`,
`PostScreen`, `ProjectsScreen`, `AboutScreen`), plus `Shell.jsx` which owns the
`NavBar`, the theme/font selector (persisted to `localStorage` under `rn-scheme`,
applied via `data-theme`/`data-font` attributes on `<html>`), and the footer. Each
screen file ends with `Object.assign(window, {...})` to expose its component globally
since there's no module system.

**`data.js`** holds the site's content (`window.RN_DATA.posts`, `window.RN_DATA.projects`)
as plain data — no CMS, no fetch calls. Adding a post or project means editing this file.

**`styles.css`** is an import-only entry point pulling in `tokens/*.css` (colors,
typography, spacing, effects, font-schemes, alternate color themes, base resets) in a
specific order — theme/font overrides must load after the base tokens they override.

**Component storybook:** `storybook.html` is a sidebar + iframe gallery over
`components/<group>/<group>.card.html` demo pages (one per component category: core,
content, feedback, forms, navigation, terminal, theming) plus `foundations.html`
(hand-built color/type/spacing token reference — not sourced from the design system's
`guidelines/*.card.html`, which were not imported). Each `<group>.card.html` is a
self-contained demo page with its own CDN script tags and a `<!-- @dsCard -->` marker
comment used by the source design system's own tooling.

**Theming:** nine alternate colour schemes (`[data-theme]` in `tokens/themes.css`,
plus `paper` in `tokens/colors.css`) and five alternate monospace fonts (`[data-font]`
in `tokens/font-schemes.css`) are all pure CSS attribute selectors — switching schemes
is just setting an attribute on `<html>`, no JS re-render needed beyond what
`ThemeSelector` already does.
