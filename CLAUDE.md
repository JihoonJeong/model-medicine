# Model Medicine — Project Guide for Claude Code

## Project Overview
Model Medicine is an open research project proposing clinical medicine frameworks for AI behavioral diagnosis. Static website hosted on GitHub Pages at `jihoonjeong.github.io/model-medicine`.

## Tech Stack
- Static site: plain HTML/CSS/JS in `docs/` directory
- Dark theme with DICOM viewer aesthetic (CSS custom properties)
- Inline SVG relationship diagrams (no external libraries)
- GitHub Pages deployment from `docs/` on `main` branch

## Key Directories
- `docs/` — Website root (GitHub Pages serves from here)
  - `docs/cases/` — M-CARE case report pages (001-019) + index with SVG relationship map
  - `docs/essays/` — Essays listing page (links to Medium)
  - `docs/css/style.css` — Main stylesheet
  - `docs/js/main.js` — Main JS
  - `docs/favicon.svg` — SVG favicon (dark bg, blue "M", cyan accent)
- `Semiology/` — Source markdown for M-CARE case reports
  - `CASE_REGISTRY.md` — Master reference for all cases (check version before updates)
- `FourShellModel/` — Theory documents
- `Essays/` — Essay source markdown
- `SPEC_*.md` — Update specifications (JJ writes these as instructions)

## Website Update Workflow
1. JJ writes a `SPEC_website_update_*.md` or provides instructions
2. Read source files from `Semiology/` folder
3. Create/update HTML pages in `docs/`
4. Update counts, nav links, SVG relationship map
5. Commit and push to `main` (deploys automatically)

## Case Page Conventions
- Template: match existing case pages (nav, fonts, meta box, case-body, case-nav, footer)
- Favicon: `<link rel="icon" href="../favicon.svg" type="image/svg+xml">`
- Case nav: `← Previous Case` (left) + `Next Case →` or `All Cases →` (right)
- Sequential nav chain: each case links to prev/next
- Supplementary data sections: `margin-top:3rem; padding-top:2rem; border-top:1px solid var(--border);`

## SVG Relationship Map (cases/index.html)
- viewBox: 900x730
- Node colors by category:
  - Red/Coral `#ff6b6b` — RLHF Performance Artifacts
  - Purple `#b478ff` — Shell-Core Override
  - Teal `#5ce0d8` — Context/Memory
  - Green `#64dc64` — Core Identity/Plasticity
  - Orange `#ffb432` — Stress/Resource
  - Amber `#e6a020` — Hard Shell Drift
  - Gray `#6a6a82` — Methodology/Diagnostic
- Edge types: dashed (opposite/mirror), dotted with arrow (aggravates/enables), solid with arrow (category membership)

## Communication
- JJ communicates in Korean, code/commits in English
- Keep responses concise
- Commit messages in English, descriptive
- Use background agents for parallel case page creation when adding multiple cases
