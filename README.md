# Wedding Invite Website

A one-page wedding invitation hosted free on GitHub Pages.

## Customise

1. **Text and details**: open `config.js` and change names, dates, events, venue, WhatsApp number, things to know and Instagram. That's the only file you need to edit.
2. **Painting stories**: `images/groom.jpg` (Rama breaking the bow) and `images/bride.jpg` (young Sita with the bow) each fill the screen. As guests scroll, the view zooms into the figure, the rest blurs, and the name appears. To use different pictures, replace the files and adjust `groomFocus` / `brideFocus` in `config.js` (x and y are where the figure sits, 0–1 across and down; size is the figure's height as a share of the picture). Edit or empty the captions with `groomCaption` / `brideCaption`.
3. **Photos**: the files in `images/` are placeholders (`.svg`). Upload your own photos to the `images/` folder (e.g. `hero.jpg`), then update the matching path in `config.js` (e.g. `"images/hero.svg"` → `"images/hero.jpg"`).
   - `hero` – first screen, landscape works best (around 1800×1100)
   - `story` – full-width picture after the hero
   - `mehendi`, `haldi`, ... – one portrait photo per event (around 600×800)
   - `gallery-1` ... – portrait photos for the slideshow; add as many as you like
   - `closing` – last screen; a venue or temple shot at night looks lovely
   - Compress photos before uploading (e.g. squoosh.app) so the page loads fast on phones.
4. **Music (optional)**: upload an `.mp3` next to `index.html` and set `music: "yourfile.mp3"` in `config.js`.

To edit on GitHub: open a file, click the pencil icon, change it, and click **Commit changes**. To add photos: open the `images` folder → **Add file → Upload files**. The live site updates within a minute or two.

## The artwork

The Pichwai scenes (gopuram, gardens, cow procession, lotus pond, lit temple) are SVG files in `art/`. They're drawn to join seamlessly, so the painting flows as you scroll.

## Turning on GitHub Pages (one time)

**Settings → Pages** → *Build and deployment* → **Deploy from a branch** → branch **main**, folder **/ (root)** → **Save**.

## WhatsApp link preview
After you upload your own hero photo, change the `og:image` line in `index.html` to the full address of `images/preview.jpg` on your domain, e.g. `https://yourdomain.com/images/preview.jpg`, so the photo shows when you share the link.
