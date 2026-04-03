# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- **css/miserable.css** — Shared design tokens, nav, and base styles (used by all pages)
- **css/index.css** — Styles specific to `index.html` (card, animations)
- **css/page.css** — Shared styles for interior pages (`about.html`, `allquotes.html`)
- **quotes.json** — Array of quote objects `{ text, author?, source, url? }`
- **images/** — Static assets

All JavaScript is inline in each HTML file. Key functions in `index.html`:
- `shuffle(arr)` — Fisher-Yates in-place shuffle
- `getNextQuote()` — advances through the shuffled `deck`; wraps to start when exhausted (no reshuffle)
- `getPrevQuote()` — steps back through the deck, wrapping if needed
- `displayQuote(quote)` — renders to DOM, conditionally shows/hides author and source elements
- `changeQuote(getQuoteFn)` — orchestrates fade-out → swap → fade-in animations; shared by `nextQuote` and `prevQuote`

All pages share a hamburger nav menu (top-right, fixed). The nav links differ per page:
- `index.html` — links to All Quotes, About
- `allquotes.html` — links to Home (index), About
- `about.html` — links to Home (index), All Quotes

## CSS Design Tokens

Defined in `css/miserable.css`, available to all pages:

```css
--parchment: #e8e2d9   /* primary text */
--charcoal:  #0d0d0d   /* background */
--silver:    #c0c0c8   /* accent */
--muted:     #d8d0c4   /* secondary text */
```

## Adding Quotes

Add objects to `quotes.json`. Both `author` and `url` are optional; `text` and `source` are required.
