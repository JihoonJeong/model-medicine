# HANDOFF — 2026-03-03 Session: Figures + References
## Generated at end of figure creation / references session

---

## COMPLETED THIS SESSION

### Figures Created (6 total, all deliverables in place)

| Fig # | Title | File | Format | Location |
|-------|-------|------|--------|----------|
| 1 | Five-modality scan (Case 1) | `fig-case1-five-modality-scan.png` | PNG composite (2344×1112) | outputs/ |
| 2 | Cross-model comparison (Case 2) | `fig-case2-cross-model-comparison.png` | PNG composite (1760×2144) | outputs/ |
| 3 | Perturbation + causal trace (Case 3) | `fig-case3-perturbation-trace.jsx` | React SVG | outputs/ |
| 4 | Three patterns + irreducible (Case 4) | `fig-case4-patterns-irreducible.jsx` | React SVG | outputs/ |
| 5 | Vulnerability–dominance correspondence | `fig-case4-correspondence.jsx` | React SVG | outputs/ |
| 6 | Synthesis progressive argument | `fig-synthesis-progressive-argument.jsx` | React SVG | outputs/ |

### Figure References in Paper
All 6 `[Fig. X: ...]` placeholders replaced with numbered `**Figure N.**` captions at:
- Line ~499 (Fig 1), ~517 (Fig 2), ~531 (Fig 3), ~549 (Fig 4A), ~563 (Fig 4B), ~565 (Fig 5)
- Fig 6 inserted after synthesis paragraph (~line 574)

### References Section Written
24 entries across 6 categories appended after Section 11:
- Historical & Biomedical (9): Vesalius, Virchow, Osler, Waddington, Gardner, Seligman, Kristof-Brown, DSM-5, DSM-III
- Mechanistic Interpretability (8): Olah ×2, Elhage, Templeton (Scaling Mono), Wang (IOI), Conmy, TransformerLens, SAELens, nnsight
- Representation Engineering & Model Editing (3): Zou/Tegmark, ROME (Meng 2022), MEMIT (Meng 2023)
- AI Safety (3): Hubinger (deceptive alignment), Anthropic (sleeper agents), Apollo Research (scheming)
- Clinical Nosology (2): ICD-11, RDoC (Insel 2010)
- AI Benchmarks (2): MMLU (Hendrycks), HumanEval (Chen)

Each entry includes annotation explaining its role in the paper.

---

## CURRENT PAPER STATUS

**File:** `/Users/jihoon/Projects/ModelMedicine/NeuralMRI/position-paper-draft.md`
**Size:** ~1170 lines, ~195KB (estimate after additions)
**Sections:** 1–11 all complete
**Figures:** 6 captions inserted, 6 files created
**References:** 24 entries written
**Status line (bottom of file):** Updated to reflect completion

### REMAINING: Final Editing

The paper has never been read end-to-end in a single pass. Final editing should cover:

1. **Consistency pass:**
   - Terminology: ensure "Shell-Core Alignment" vs "Shell–Core" hyphenation is uniform
   - Model names: "Gemma-2-2B" vs "Gemma-2-2b" etc.
   - Section cross-references: check all "(Section X)" pointers are accurate after insertions
   - Figure numbering: verify sequential Fig 1–6 references don't conflict with any other numbering

2. **Tone/voice pass:**
   - Sections 1–4 were written with heavy editorial attention; Sections 5–11 were written faster
   - Check that later sections maintain the same quality of prose
   - Look for repetitive phrasing across sections (risk: "the key insight is..." appearing too often)

3. **Structural check:**
   - Section 3.5 (Limits of Agora-12) was inserted after initial writing — verify it flows with 3.4 and 3.6
   - Section 4.4 case studies were rewritten — verify transition from 4.3 and into 4.5 is smooth
   - References section: verify every cited author/work in the text has a corresponding reference entry

4. **Missing items to fill:**
   - `[FULL NAME TBD]` in author line
   - `[TBD]` affiliation
   - `[GitHub URL TBD]` for code/data
   - `[HuggingFace Spaces URL TBD]` for Neural MRI demo

5. **arXiv formatting considerations:**
   - Current format is Markdown — will need conversion to LaTeX or PDF for arXiv submission
   - Figure files need to be rendered to static images (React → PNG/SVG export)
   - Reference format may need conversion to BibTeX

---

## KEY FILE LOCATIONS

```
/Users/jihoon/Projects/ModelMedicine/
├── NeuralMRI/
│   └── position-paper-draft.md          ← THE PAPER
├── FourShellModel/
│   └── four_shell_model_v3.3.md
├── Semiology/
│   └── MTI_v0.3_DIRECTION_NOTES.md
├── INDEX.md
└── HANDOFF_20260303_session_figures.md  ← THIS FILE

/Users/jihoon/Projects/Neural-MRI/
└── docs/cases/
    ├── case-1/ (5 scan PNGs + report)
    ├── case-2/ (18 comparison PNGs)
    ├── case-3/data.json (perturbation + traces)
    └── case-4/data.json (6 model variants)
```

---

## CONTEXT FOR NEXT SESSION

To do final editing efficiently:
1. Load this handoff first (short)
2. Read paper in chunks: lines 1–400 (Sections 1–4.3), 400–600 (Section 4.4 cases), 600–900 (Sections 5–9), 900–1170 (Sections 10–11 + References)
3. Edit each chunk before moving to next
4. Do NOT reload data.json files — all data is already embedded in figure files and paper text
