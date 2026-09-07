# My Defence Journey — Upgraded & Reality-Checked

## What changed in this version
- Unified all canonical pages under one navigation and one shared stylesheet/script.
- Added a consistent project description and verification notice across the website.
- Expanded the About page with the project's objective, mission, scope, workflow and feature set.
- Replaced generic exam descriptions with source-linked information for NDA & NA, Agniveer SSR, AFCAT and CDS.
- Added 2026 reference dates for NDA II and CDS II from UPSC; added current-cycle references for Navy SSR and AFCAT from official sources.
- Added official-source links for UPSC, Indian Navy and Indian Air Force.
- Kept a basic dashboard disclaimer so the local eligibility checker is clearly a guidance tool, not an official decision.
- Improved the dashboard, contact form, responsive navigation, and browser-local study tools.
- Kept compatibility redirects for home.html, army.html, exam.html and defence.html.
- Retained the subtle gold crosshair click ripple and normal mouse pointer for better usability.

## Canonical pages
- index.html
- exams.html
- career.html
- preparation.html
- dashboard.html
- about.html
- contact.html

## Run
Open index.html in a browser or serve the folder through a simple local static server.

## Data note
Exam information was checked against official UPSC, Join Indian Navy and Indian Air Force sources on 5 September 2026. Recruitment rules can change, so the latest official notification always takes priority.

## Branding update
- Header branding now uses a shield-style **MDJ** mark with a gold border and star accent.
- The name is displayed as **MY DEFENCE / JOURNEY** for a stronger military-inspired hierarchy.
- Clicking the logo or project name returns to the homepage; when already on the homepage it refreshes the page.


## UI upgrade in this version
- Persistent Light/Dark mode across all canonical pages.
- Opening-screen loader animation.
- Scroll progress indicator and Back-to-top control.
- Scroll-reveal animations with reduced-motion support.
- Stronger hover/active/press feedback for interactive buttons and navigation.
- Active-page navigation state and small usability shortcut for search fields.
- Theme choice is saved in browser localStorage; no backend is required.


## Visual Backgrounds
The upgraded theme uses defence-themed background imagery from Wikimedia Commons.
- National Defence Academy aerial view: Government of India / Indian Navy source, available under the Government Open Data License - India.
- SUDAN Block of National Defence Academy: Sourabh.scd, CC BY-SA 4.0.
- Indian National Flag: Farighkaunain, CC0 1.0.
The images are used as visual backgrounds with dark/light overlays.

### Branding assets
The project now includes the My Defence Journey green-and-gold emblem as `assets/logo-mark.png` and the full wordmark as `assets/logo-full.png`. The logo is used in the site navigation, browser icon and footer branding.


## Modern brand system
The UI uses a navy / defence-green / gold palette, Montserrat headings, Inter body text and Rajdhani tactical labels. Light and dark themes share the same component system and responsive layout. Developer credit: Sumedh Dhamdhere.
