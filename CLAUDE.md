# CLAUDE.md

## Overview

This is a static HTML website (no build process, no dependencies) that displays random quotes related to the "miserable offender" concept from the Book of Common Prayer. It is hosted at www.miserableoffender.com via GitHub Pages.

## Development

No build step required. Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python -m http.server
```

The `fetch('quotes.json')` call in the JS requires a server (not `file://`), so a local server is needed to test quote loading.

## Architecture

- **index.html** — Random quote display with fade animations; navigate via buttons, keyboard (←/→/Space), or swipe
- **allquotes.html** — Full list of all quotes loaded from `quotes.json`
- **about.html** — About page explaining the site's purpose and context
- **stickers.html** — Sticker gallery; clicking opens full-size image in a new tab
- **404.html** — Custom 404 page; uses `css/page.css` like other interior pages
- **css/miserable.css** — Shared design tokens (`--parchment`, `--charcoal`, `--silver`, `--muted`), nav styles, base styles, and `prefers-reduced-motion` rule (used by all pages)
- **css/index.css** — Styles specific to `index.html` (card, animations)
- **css/page.css** — Shared styles for interior pages (`about.html`, `allquotes.html`, `stickers.html`, `404.html`)
- **quotes.json** — Array of quote objects; `text` and `source` are required, `author` and `url` are optional
- **images/** — Static assets; sticker thumbnails use the `-thumb` suffix convention
- **js/nav.js** — Shared hamburger nav logic (included by all pages)
- **CNAME** — Sets the custom domain for GitHub Pages (`www.miserableoffender.com`)

Key functions in `index.html` (inline script):
- `shuffle(arr)` — Fisher-Yates shuffle
- `getNextQuote()` — advances through the shuffled `deck`; wraps to start when exhausted (no reshuffle)
- `getPrevQuote()` — steps back through the deck, wrapping if needed
- `displayQuote(quote)` — renders to DOM, conditionally shows/hides author and source elements; sets/removes `cite` attribute on the `<blockquote>`
- `changeQuote(getQuoteFn)` — orchestrates fade-out → swap → fade-in animations; shared by `nextQuote` and `prevQuote`

