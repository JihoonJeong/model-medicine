# Position Paper LaTeX Conversion — Spec for Cody

**Date:** 2026-03-05
**From:** JJ
**To:** Cody (Claude Code)
**Goal:** Convert Model Medicine position paper from Markdown to arXiv-ready LaTeX

---

## 1. Source Files

**Position paper:** `~/Projects/model-medicine/NeuralMRI/position-paper-draft.md`
- ~1,194 lines, 11 sections + References
- 30 references across 7 categories
- 6 figure captions embedded in text (Section 4.4)

**Figure files:** Need to be generated/exported as static images.
- Figures 1–2: PNG composites (previously generated in earlier sessions — may need regeneration)
- Figures 3–6: Were React/SVG components — need export to PDF or PNG for LaTeX
- Figure filenames referenced in paper:
  - `fig-case1-five-modality-scan.png`
  - `fig-case2-cross-model-comparison.png`
  - `fig-case3-perturbation-trace.jsx` → needs static export
  - `fig-case4-patterns-irreducible.jsx` → needs static export
  - `fig-case4-correspondence.jsx` → needs static export
  - `fig-synthesis-progressive-argument.jsx` → needs static export

**Note:** If figure files cannot be located or regenerated, use placeholder boxes with captions. Paper can be submitted and figures updated in a later arXiv version.

---

## 2. Target Format

**Template:** Standard arXiv single-column or two-column article class. Recommended:
- `\documentclass[11pt]{article}` with reasonable margins, or
- Use a clean preprint style like `preprint.sty` or `arxiv.sty` (available on GitHub)

**NOT a conference/journal format** — this is an independent position paper, not a submission to a specific venue.

---

## 3. Structure Mapping

### Front Matter
- Title: "Model Medicine: A Clinical Framework for Understanding, Diagnosing, and Treating AI Models"
- Author: Jihoon 'JJ' Jeong, MD, MPH, PhD
- Affiliation: Department of Electrical Engineering and Computer Science, Daegu Gyeongbuk Institute of Science and Technology (DGIST); ModuLabs
- Correspondence: jihoon.jeong@dgist.ac.kr
- Date: March 2026
- AI Research Collaborators block (see paper header for full text — preserve as a front-matter note or footnote)

### Abstract
- Paper currently has no separate abstract. **Generate from Section 1 (Introduction)** — extract a ~200-word summary covering:
  - What Model Medicine is
  - Why it's needed (the Vesalius-to-Osler gap)
  - What the paper presents (Four Shell Model, Neural MRI, MTI, Semiology, Therapeutics)
  - Key empirical grounding (Agora-12: 720 agents, 24,923 decisions; Neural MRI: 4 clinical cases)
  - Note: Present as the author's own abstract, not AI-generated text

### Sections (preserve numbering as-is)
```
1. Introduction: Why AI Needs Medicine (with 1.1, 1.2, 1.3)
2. The Model Medicine Framework (with 2.1–2.4)
3. The Four Shell Model (with 3.1–3.8)
4. Neural MRI (with 4.1–4.5)
5. The Five Diagnostic Layers (with 5.1–5.8)
6. Toward Clinical Model Sciences (with 6.1–6.4)
7. Living Systems (with 7.1–7.4)
8. The Layered Core Hypothesis (with 8.1–8.4)
9. Model Therapeutics (with 9.1–9.3)
10. Open Questions and Community Invitation (with 10.1–10.3)
11. Conclusion
References (7 subcategories — flatten into single bibliography)
```

### Special Elements to Handle
- **Tables:** Several inline tables (Section 2.2 taxonomy, Section 4.1 Neural MRI modality mapping, Section 6.2 semiology matrix, etc.) — convert to proper LaTeX tables
- **Code/technical notation:** Some inline code formatting (e.g., `git diff`, `SOUL.md`, function names) — use `\texttt{}`
- **Bold/italic emphasis:** Convert Markdown bold/italic to LaTeX equivalents
- **Unicode characters:** Paper contains some Unicode (ΔL, ≈, →, ×) — ensure proper LaTeX encoding
- **Bullet lists and nested lists:** Convert to `itemize`/`enumerate` environments
- **Block quotes or indented passages:** Use `quote` environment

---

## 4. References

- Currently formatted as annotated bibliography (each entry has a bracketed annotation explaining its relevance)
- For LaTeX: Convert to standard `\bibliographystyle{unsrt}` or `plainnat` format
- **Remove the bracketed annotations** from the compiled references — those were for draft purposes
- 30 entries across 7 categories — flatten into single numbered bibliography
- Use `\cite{}` with author-year in text (Sharma et al., 2023) format — match current inline citation style
- Consider `natbib` package for author-year citations

---

## 5. Figures

- Place figures near their references in Section 4.4
- Use `\begin{figure}[htbp]` with `\centering`
- Captions are already written in the Markdown — transfer directly
- Figure width: `\textwidth` for full-width, `0.8\textwidth` for most figures
- Figures 4A and 4B are described as panels of Figure 4 — can be combined with `subfigure` or kept separate

---

## 6. Style Notes

- **Tone:** Academic but accessible — preserve the paper's voice. Do not over-formalize.
- **Footnotes:** The AI Research Collaborators note can be a footnote on the first page or a dedicated subsection before the introduction.
- **URLs:** Paper contains GitHub and HuggingFace URLs — use `\url{}` with `hyperref` package
- **Section depth:** `\section{}` for ## headings, `\subsection{}` for ### headings
- **Page numbers:** Include (arXiv papers typically have page numbers)
- **Line numbers:** Optional but can help with review — consider `lineno` package

---

## 7. Output

- Main file: `main.tex`
- Bibliography: `references.bib` (BibTeX format)
- Figures: `figures/` directory
- All in a single directory, ready to zip and upload to arXiv
- Output directory: `~/Projects/model-medicine/arxiv-submission/`
- Test compile locally before finalizing (`pdflatex main.tex` + `bibtex main` + `pdflatex` × 2)

---

## 8. Metadata for arXiv Submission Form

For when JJ uploads:
- **Title:** Model Medicine: A Clinical Framework for Understanding, Diagnosing, and Treating AI Models
- **Authors:** Jihoon Jeong
- **Abstract:** (generated in Step 3 above)
- **Primary category:** cs.AI
- **Cross-list:** cs.CL (optional)
- **Comments:** "30 pages, 6 figures. Project page: https://jihoonjeong.github.io/model-medicine/"
- **License:** CC BY 4.0
- **Code:** https://github.com/JihoonJeong/Neural-MRI
- **ACM classes:** (optional, can skip)

---

## 9. Priority

1. LaTeX skeleton with front matter + all sections transferred
2. Tables properly formatted
3. References in BibTeX
4. Figure placeholders (with captions)
5. Compile test
6. Figure files (generate/export if possible, placeholder boxes if not)

**Target:** Compilable LaTeX zip ready for arXiv upload
