# Miserable Offender

Source for [MiserableOffender.com](https://www.miserableoffender.com) — a site that displays quotes related to the phrase "Miserable Offender" from the Anglican *Book of Common Prayer* and to the use and language of Common Prayer.

## Structure

- **index.html** — Random quote display with fade animations, keyboard/swipe navigation
- **allquotes.html** — Full list of all quotes
- **about.html** — About page
- **css/miserable.css** — Shared design tokens, nav, and base styles
- **css/index.css** — Styles specific to the quote display page
- **css/page.css** — Shared styles for interior pages
- **quotes.json** — Quote data (`text`, `source` required; `author`, `url` optional)
- **js/nav.js** — Shared hamburger menu logic (included by all pages)
- **images/** — Static assets; sticker thumbnails use the `-thumb` suffix convention

## Development

No build step required. Because `index.html` fetches `quotes.json`, a local server is needed (opening via `file://` won't work):

```bash
npx serve .
# or
python -m http.server
```

## Adding Quotes

Add objects to `quotes.json`:

```json
{
  "text": "Quote text here.",
  "source": "Source Name",
  "author": "Optional Author",
  "url": "https://optional-link.example.com"
}
```

## Hosting

Deployed via GitHub Pages from the `main` branch.
