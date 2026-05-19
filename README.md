# OHBM 2026 Neuroanatomy Course Website

This repository contains the static website for the OHBM 2026 Educational Course, **Neuroanatomy and Its Impact on Structural and Functional Imaging**, held in Bordeaux on June 14, 2026.

The README is intended as a quick orientation document for contributors and visitors who want to understand how the site is implemented and where to make common edits.

## Implementation

The site is plain HTML, CSS, and JavaScript. There is no build step, package manager, or framework. Each page is an individual `.html` file that shares the same stylesheet and script:

- `index.html`: landing page with course overview, people preview, and program highlights.
- `overview.html`: detailed course framing and learning goals.
- `program.html`: schedule table.
- `talks.html`: lecture descriptions, speakers, slides links, and references.
- `hands-on.html`: hands-on session descriptions.
- `resources.html`: course materials and resource links.
- `people.html`: organizers, speakers, and hands-on contributors with portraits and bios.
- `styles.css`: all layout, typography, responsive behavior, cards, tables, and image treatment.
- `app.js`: mobile navigation, active nav state, scroll styling, and section reveal behavior.
- `img/`: speaker, organizer, and contributor portraits.

Because the site is static, changes are made directly in the relevant HTML file. Shared visual changes usually belong in `styles.css`; shared behavior belongs in `app.js`.

## Content Structure

People-related content appears in several places:

- Full bios and portraits live on `people.html`.
- The home page has compact people previews in `index.html`.
- Lecture speaker portraits appear in `talks.html`.
- Program table avatars appear in `program.html`.

When adding or updating a speaker, check all relevant pages so names, affiliations, portraits, and bios remain consistent across the website.

## Image Preparation

Thumbnails and profile photos use a square/circular presentation. Non-square source images are cropped with `object-fit: cover`, but for best results:

- Crop source images to a square before adding them to `img/`.
- Keep the face centered in the image.
- Use descriptive filenames such as `First_Last.png` or `First_Last.jpg`.
- After adding an image, check the home page, people page, talks page, and program page at desktop and mobile widths.

## Local Preview

The pages can be opened directly in a browser because the site has no build process. For a simple local server, run one from the repository root, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
