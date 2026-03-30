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

- **index.html** — Single page with all markup and inline JavaScript
- **miserable.css** — All styles with CSS custom properties
- **quotes.json** — Array of quote objects `{ text, author?, source, url? }`
- **images/** — Static assets

All JavaScript is inline in `index.html`. Key functions:
- `getRandomQuote()` — picks a random quote, avoiding consecutive repeats via `lastIndex`
- `displayQuote(quote)` — renders to DOM, conditionally shows/hides author and source elements
- `nextQuote()` — orchestrates fade-out → swap → fade-in animations

## CSS Design Tokens

```css
--ink:    #e8e2d9   /* primary text */
--cream:  #0d0d0d   /* background */
--silver: #c0c0c8   /* accent */
--muted:  #d8d0c4   /* secondary text */
```

## Adding Quotes

Add objects to `quotes.json`. Both `author` and `url` are optional; `text` and `source` are required.
