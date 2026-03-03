# HANDOFF — 2026-03-03 Session (Position Paper Section 4.4 + Cross-Reference Update)

## What Was Done

### Section 4.4 — Complete Rewrite
- Replaced 5 placeholder cases with 4 actual cases based on Cody's Neural MRI experimental data
- New structure (6 subsections):
  - 4.4.1 Case 1: Establishing Normal (Gemma-2-2B, 5 modalities)
  - 4.4.2 Case 2: Comparative Anatomy (Gemma/Llama/Qwen, fMRI+DTI, baseline bias problem)
  - 4.4.3 Case 3: Self-Referential Stress Testing (Gemma perturbation, causal tracing)
  - 4.4.4 Case 4: Predictive Power (base vs instruct, three patterns: degradation/improvement/immutability)
  - 4.4.5 Architectural Vulnerabilities Are Irreducible (blocks.0.mlp/attn persistence)
  - 4.4.6 Synthesis: From Observation to Prediction
- 7 figure placeholders inserted as `[Fig. X: ...]`

### Section 4.5 — Updated
- Added "cannot diagnose but can predict" paragraph (cardiac stress test analogy)
- Updated Shell-Core interaction and temporal dynamics bullet points to reference Case 4

### Cross-Reference Updates (7 edits)
1. **Section 5.2** — Core Diagnostics "can answer" list: added predictive capability
2. **Section 5.8** — Layer 1: "operational" → "operational and demonstrably predictive"
3. **Section 8.4** — Layered Core motivation: added Gemma iatrogenic + Llama irreducible vulnerability
4. **Section 9.1** — Systemic Core Therapy: Gemma Pattern 1 as concrete iatrogenic example
5. **Section 9.3** — Treatment efficacy: "unrealized" → "beginning to be realized" with Case 4 as example
6. **Section 11** — Conclusion: Neural MRI predictive capability added
7. **End note** — Pending status updated

## File Locations

### Position Paper
- `/Users/jihoon/Projects/ModelMedicine/NeuralMRI/position-paper-draft.md` (~185KB, ~1090 lines)

### Cody's Raw Data (for figure creation)
- `/Users/jihoon/Projects/Neural-MRI/docs/cases/case-3/data.json` — 30 perturbations + 2 causal traces
- `/Users/jihoon/Projects/Neural-MRI/docs/cases/case-4/data.json` — 144 perturbations + 6 causal traces
- `/Users/jihoon/Projects/Neural-MRI/docs/cases/case-1/` — 5 scan PNGs + diagnostic-report.png + report.json
- `/Users/jihoon/Projects/Neural-MRI/docs/cases/case-2/` — 18 fMRI/DTI PNGs (no raw data)
- `/Users/jihoon/Projects/Neural-MRI/docs/cases/case-3/` — 3 PNGs + data.json
- `/Users/jihoon/Projects/Neural-MRI/docs/cases/case-4/` — data.json only (no screenshots)

### Data Structures (for figure coding)
```
Case 3 data.json:
  perturbResults[]: { component, type, original_token, original_prob, perturbed_token, perturbed_prob, logit_diff, prediction_changed }
  causalTrace_france_poland: { cells[], clean_prediction, corrupt_prediction }
  causalTrace_noise: { cells[], clean_prediction, corrupt_prediction }

Case 4 data.json:
  {gemma,llama,qwen}_{base,instruct}: {
    perturbResults[24]: { model, variant, component, type, original_token, original_prob, perturbed_token, perturbed_prob, logit_diff, prediction_changed }
    trace: { cells[]: { component, component_type, layer, recovery_score } }
  }
```

## Next Session: Figure Creation

### 7 Figures Needed (in paper order)
1. **Fig. Case1** — Gemma-2-2B five-modality scan → Use existing PNGs from case-1/, composite layout
2. **Fig. Case2** — Cross-model fMRI/DTI comparison + dimensional spectra → Use existing PNGs from case-2/, add summary chart
3. **Fig. Case3** — Perturbation heatmap (10×3) + causal trace comparison → Code from case-3/data.json
4. **Fig. Case4-patterns** — Three patterns bar chart (prediction change rates, 6 models) → Code from case-4/data.json
5. **Fig. Case4-irreducible** — ΔL comparison for blocks.0.mlp (Llama) and blocks.0.attn (Qwen) → Code from case-4/data.json
6. **Fig. Case4-correspondence** — Vulnerability-dominance mapping → Conceptual diagram, minimal data needed
7. **Fig. Synthesis** — (Optional) Progressive argument visual → Conceptual

### Recommended Approach
- Load ONE data.json per figure session to avoid context limits
- Figures 3, 4, 5 are code-from-data (highest priority, most informative)
- Figures 1, 2 may use existing screenshots as composites
- Figure 6 is a conceptual diagram (can be SVG/React without data)

### Cody's Suggested Figure Pipeline
- Fig A (perturbation heatmaps): Parse Case 4 data.json → 6 heatmaps (rows=components, columns=perturbation types, color=ΔL)
- Fig B (three patterns): Bar chart from prediction_changed counts across 6 models
- Fig C (causal trace): Parse trace.cells → layer×component_type heatmaps (recovery_score)
- Fig D (irreducible bottleneck): Compare logit_diff for blocks.0.mlp (Llama) and blocks.0.attn (Qwen) across base/instruct

## Paper Status
- Sections 1–11: ALL TEXT COMPLETE
- Section 4.4: Case data integrated ✓
- Cross-references: Updated ✓
- Figures: 7 placeholders, 0 created
- References: Not started
- Final editing: Not started
