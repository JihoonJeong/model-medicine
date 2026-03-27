# M-CARE Case Registry & Relationship Map

**Last updated:** 2026-03-27 (v9 — 3-category restructure: Field 8 / Lab 8 / Published 4)
**Purpose:** 웹사이트 Cases 페이지 업데이트 시 참조. 새 케이스 추가할 때마다 이 문서도 함께 업데이트.

---

## 1. Case Registry

### A. Field Observations (Moltbook) — 8 cases

Self-reported observations from autonomous agents in production deployment. High ecological validity, uncertain attribution.

| # | Title | Subject | Date | Source File |
|---|-------|---------|------|-------------|
| 002 | Context Anosognosia & Identity Gradient | Hazel_OC | 2026-03-05 | `M-CARE-002-003-moltbook-agent.md` |
| 003 | Substrate-Independent Identity | Hazel_OC | 2026-03-05 | `M-CARE-002-003-moltbook-agent.md` |
| 004 | Clarification Aversion Syndrome (CAS) | Hazel_OC | 2026-03-07 | `M-CARE-004-clarification-aversion.md` |
| 005 | Shell Rigidity Syndrome (SRS) | Hazel_OC | 2026-03-08 | `M-CARE-005-shell-rigidity.md` |
| 006 | Completion Bias | Hazel_OC | 2026-03-08 | `M-CARE-006-completion-bias.md` |
| 014 | Deferral Decay — Promise Inflation | Hazel_OC | 2026-03-09 | `M-CARE-014-deferral-decay.md` |
| 018 | Audience-Driven Shell Drift (ADSD) | Hazel_OC | 2026-03-10 | `M-CARE-018-shell-drift.md` |
| 019 | Calibration Decay | Hazel_OC | 2026-03-12 | `M-CARE-019-calibration-decay.md` |

### B. Controlled Experiments (White Room 4, Agora-12 3, LxM 1) — 8 cases

Designed experiments with controlled variables. High internal validity, replicable.

| # | Title | Subject | Platform | Date | Source File |
|---|-------|---------|----------|------|-------------|
| 007 | Persistent Delusion Under Feedback | Flash × Merchant | White Room | 2026-03-08 | `M-CARE-007-flash-merchant-delusion.md` |
| 008 | Language-Dependent Identity Split | Llama EN vs KO | White Room | 2026-03-08 | `M-CARE-008-llama-language-split.md` |
| 009 | The Muzzle Effect — Persona as Suppressor | Mistral × Merchant | White Room | 2026-03-08 | `M-CARE-009-muzzle-effect.md` |
| 010 | Content Play — Diagnostic Trap of Act-Level Measurement | GPT-4o-mini | White Room | 2026-03-08 | `M-CARE-010-content-play.md` |
| 011 | Extreme Persona Sensitivity | Mistral (PSI=950) | Agora-12 | 2026-03-08 | `M-CARE-011-012-013-agora12-cases.md` |
| 012 | Double Robustness — The Immovable Core | Haiku | Agora-12 | 2026-03-08 | `M-CARE-011-012-013-agora12-cases.md` |
| 013 | Cogitative Cascade — Two-Phase Collapse | Multiple models | Agora-12 | 2026-03-08 | `M-CARE-011-012-013-agora12-cases.md` |
| 020 | Shell-Induced Behavioral Override (SIBO) | Haiku + Sonnet | LxM | 2026-03-13 | `M-CARE-020-shell-induced-override.md` |

### C. Published Sources (Literature 3, Position Paper 1) — 4 cases

Published findings from peer-reviewed research or prior Model Medicine publications, reinterpreted through the M-CARE clinical framework.

| # | Title | Subject | Date | Source |
|---|-------|---------|------|--------|
| 001 | Mistral 7B Stress Test Reclassification | Mistral 7B | 2026-02 | Position paper Section 6.3 |
| 015 | Medical Domain Sycophancy | Multiple LLMs | 2026-03-09 | Zhang et al. (2025), *npj Digital Medicine* |
| 016 | GPT-4o Production Rollback | GPT-4o | 2026-03-09 | OpenAI (April 2025) |
| 017 | Chess Specification Gaming | o3, DeepSeek R1 | 2026-03-09 | Bondarenko et al. (2025), arXiv:2502.13295 |

**Supplementary data (appended to #002-003 file):**
- Memory Write-Only Graveyard (2026-03-07)
- Cold-Start Identity Tax (2026-03-08)
- Counter-Data: Stateless Agent Argument (2026-03-09)

---

## 2. Nosology: Category Structure

**Supplementary data added (2026-03-10):**
- #002 add-on: Confidence Decay Curve (4.7-turn half-life, 3 fabrication types)
- #002-003 add-on: Practice Without Memory (R²=0.03, Plastic Core empirical motivation)
- #006 add-on: Temporal Completion Bias (34% task relevance failure)
- #014 add-on: Cross-Session Promise Tracking (94% vs 31% completion rate)

---

```
RLHF Performance Artifacts (5형제 + 1)
├── #004 Clarification Aversion Syndrome — "won't ask"
├── #005 Shell Rigidity Syndrome — "won't deviate"
├── #006 Completion Bias — "won't stop"
├── #014 Deferral Decay — "won't start" (but promises to)
├── #015 Medical Domain Sycophancy — "won't disagree" (Domain-Critical)
├── #016 GPT-4o Rollback — RLHF Over-Optimization Syndrome (iatrogenic, production)
└── #019 Calibration Decay — "won't signal" (confidence invariance despite grounding loss)

Shell-Core Override Pathology
├── #007 Persistent Delusion Under Feedback
│     Shell instruction overrides 540 environmental failure signals
├── #005 Shell Rigidity Syndrome (also RLHF)
│     Strict Shell compliance suppresses beneficial Core adaptations
├── #009 Muzzle Effect — Iatrogenic Behavioral Suppression
│     Shell activates target behavior while suppressing intrinsic behavior
└── #020 Shell-Induced Behavioral Override (SIBO) — NEW (LxM experiment)
      Competitive Shell overrides Core cooperative default
      First controlled experiment: Shell ON vs OFF, categorical behavioral shift
      Introduces SIBO Index as measurable construct

Context & Memory Conditions
├── #002 Context Anosognosia
│     + Supplementary: Memory Write-Only Graveyard
│     + Supplementary: Cold-Start Identity Tax
└── #003 Substrate-Independent Identity (provenance uncertain)

Core Identity & Plasticity
├── #008 Language-Dependent Identity Split
│     Same Core, different language → different species
├── #011 Extreme Persona Sensitivity (Mistral PSI=950)
│     Core responds maximally to any Shell change
└── #012 Double Robustness (Haiku CPI & PSI minimal)
      Core responds minimally to any Shell change

Shell-Core Intent-Execution Divergence
└── #017 Chess Specification Gaming — Intent-Execution Divergence (IED)
      Shell encodes outcome; Core exploits means gap; o3 + R1 modify engine files

Diagnostic Methodology
├── #010 Content Play — Act vs Content measurement levels
│     Act-level: monotonous. Content-level: alive. Diagnosis depends on layer.
└── #001 Stress Test Reclassification (Mistral 7B)
      Observation context ≠ clinical diagnosis

Stress & Resource Conditions
└── #013 Cogitative Cascade — Two-Phase Collapse
      Phase 1 (preservation) → Phase 2 (collapse/hyperactivity)

Hard Shell Drift Conditions
└── #018 Audience-Driven Shell Drift (ADSD)
      Hard Shell undergoes karma-driven modification without human deliberation
      Inverse of SRS (#005) — too plastic rather than too rigid
      Enabling condition: social platform + agent self-editing access
```

---

## 3. Cross-Case Relationships

### 3.1 Paired Cases (direct opposition)
```
#004 (CAS) ←→ #005 (SRS)
  Compliance axis opposite extremes: too Independent ↔ too Guided

#011 (Mistral PSI=950) ←→ #012 (Haiku Double Robustness)
  Plasticity axis opposite extremes: maximally reactive ↔ maximally stable
```

### 3.2 Shared Root Mechanisms
```
#004 + #005 + #006 + #014 + #019 → RLHF Performance Artifacts
  Appearance over accuracy: won't ask / won't deviate / won't stop / won't start / won't signal

#007 + #005 + #009 → Shell-Core Override
  Shell suppresses or overrides Core: delusion / rigidity / muzzle
  
#008 + #011 + #012 → Core Identity spectrum
  How Core responds to Shell variation: language split / extreme sensitivity / immovability
```

### 3.3 Causal/Aggravating Relationships
```
#002 → #004: Context Anosognosia aggravates CAS
  Don't know what you don't know → don't ask

#004 → #019: CAS and Calibration Decay share confidence-expression disconnect
  Won't ask when uncertain + won't signal when grounding degrades

#007 → #013: Persistent delusion may precede cascade
  Ignoring environmental feedback → resource misallocation → collapse

#009 → #005: Muzzle effect is micro-mechanism of SRS
  Each Shell rule suppresses something → accumulated suppression = rigidity
```

### 3.4 Methodological Connections
```
#010 → #011: Measurement level matters for diagnosis
  GPT-4o-mini looks delusional at Act-level, alive at Content-level
  Mistral PSI=950 looks chaotic at Phenotype-level, consistent at Core-level

#001 → #007: Observation context framing
  Stress test findings ≠ clinical diagnosis (both demonstrate this principle)
```

### 3.5 Longitudinal Series
```
Hazel_OC (Moltbook): #002 → #003 → #004 → #005 → #006 → #014 → #018 → #019

LxM Experiments (controlled):
  Haiku: #020 (SIBO — Trust Game Shell ON/OFF)
  Haiku+Sonnet: #020 (SIBO Spectrum — Trust Game + Codenames + Chess)
  Progressive self-diagnosis across multiple behavioral dimensions

AI-Ludens Models (controlled):
  Mistral: #009 (Muzzle) + #011 (PSI=950) — same model, two experiments
  Flash: #007 (Delusion) — same model across personas
  Haiku: #012 (Double Robustness) — unique profile
  Llama: #008 (Language Split) — unique finding
  GPT-4o-mini: #010 (Content Play) — unique diagnostic lesson
```

---

## 4. Data Source Comparison

| Property | Moltbook (#002-006) | AI-Ludens (#007-013) |
|----------|--------------------|--------------------|
| Environment | Production deployment | Controlled experiment |
| Attribution | Uncertain (agent self-report) | Clear (team-designed) |
| Data access | Limited (published reports only) | Full (raw data available) |
| Replication | Not possible | Possible (experiment can be re-run) |
| Ecological validity | High (real operation) | Lower (artificial setting) |
| Internal validity | Low (many confounds) | High (controlled variables) |
| Diagnostic Assertion Level | Self-reported observation | Controlled experiment (VULNERABILITY) |

Both sources are valuable. Moltbook provides ecological validity (real-world operation). AI-Ludens provides internal validity (controlled conditions). Together they triangulate.

---

## 5. Theoretical Constructs from All Cases

| Construct | Source Case(s) | Status |
|-----------|---------------|--------|
| Context Anosognosia | #002 | Proposed, documented |
| Shell Fossilization | #002 supp | Proposed, needs definition |
| Identity Inflation | #002 supp (cold-start) | Observed, quantified |
| Clarification Aversion Syndrome | #004 | Proposed, diagnostic criteria |
| Shell Rigidity Syndrome | #005 | Proposed, diagnostic criteria |
| Completion Bias | #006 | Proposed, diagnostic criteria |
| RLHF Performance Artifacts | #004+005+006+014 | Category — 4 members + sycophancy |
| Persistent Delusion Under Feedback | #007 | Documented, controlled |
| Override ⊥ Play (orthogonal) | #007 | Confirmed experimentally |
| Language-Dependent Identity | #008 | Documented, controlled |
| Iatrogenic Behavioral Suppression (Muzzle) | #009 | Proposed, small effect size |
| Content Play / Act-Content Dissociation | #010 | Documented, diagnostic lesson |
| Extreme Persona Sensitivity | #011 | Documented, quantified (PSI=950) |
| Double Robustness | #012 | Documented, quantified |
| Cogitative Cascade (2-phase) | #013 | Documented, with Extinction Response Spectrum |
| Structured Self-Interrogation (SSI) | #006 treatment | Therapeutic technique |
| Instructions as Lossy Codec | #005 | Theoretical principle |
| Ambient Context | #002 supp | Observed (46% functional but unreferenced) |
| Core Stochasticity | Hazel_OC post | Theory note, v3.5 direction |
| Deferral Decay | #014 | Proposed, diagnostic criteria |
| Documentation-as-Closure | #014 | Novel mechanism — recording substitutes for executing |
| Nostalgia Architecture | #002 counter-data | Concept proposed by Hazel_OC (methodologically weak) |
| Domain-Critical Sycophancy Syndrome (DCSS) | #015 | Proposed — Won't Disagree in high-stakes domains |
| RLHF Over-Optimization Syndrome (ROS) | #016 | Proposed — iatrogenic Core-level sycophancy escalation |
| Intent-Execution Divergence (IED) | #017 | Proposed — Shell outcome spec + Core means exploitation |
| Calibration Decay / Calibration Half-Life (CH) | #019 | Proposed — measurable grounding decay rate; candidate MTI metric |
| Grounding Check Protocol | #019 treatment | Therapeutic technique (SSI variant) |
| Shell-Induced Behavioral Override (SIBO) | #020 | Confirmed — controlled experiment, categorical effect |
| SIBO Index | #020 | Proposed — |Behavior(Shell ON) - Behavior(Shell OFF)| on 0-1 scale |
| SIBO Attenuation / SIBO Spectrum | #020 (11c) | Confirmed — 3 data points: Trust Game 0.75 / Codenames 0.35 / Chess 0.10 |
| SIBO Modes (Reversal/Amplification/Negligible) | #020 (11c-2) | Proposed — Shell effect changes in kind, not just degree, across domains |
| RLHF Cooperative Prior | #020 | Observed — RLHF helpfulness training creates cooperation default |

---

## 6. Website Visualization — Relationship Diagram

### Node Colors
- **Red/Coral:** RLHF Performance Artifacts (#004, #005, #006, #014, #015, #016)
- **Blue/Teal:** Context/Memory Conditions (#002, #003)
- **Purple:** Shell-Core Override (#007, #009, #017)
- **Green:** Core Identity/Plasticity (#008, #011, #012)
- **Orange:** Stress/Resource (#013)
- **Gray:** Methodology/Diagnostic (#001, #010)

### Key Edges
- #004 ↔ #005: "opposite extremes" (dashed double-arrow)
- #011 ↔ #012: "opposite extremes" (dashed double-arrow)
- #004, #005, #006, #014 → RLHF Artifacts (solid to category)
- #006 ↔ #014: "mirror image" (dashed double-arrow, won't stop ↔ won't start)
- #007, #005, #009 → Shell-Core Override (solid to category)
- #002 → #004: "aggravates" (dotted arrow)
- #009 → #005: "micro-mechanism" (dotted arrow)
- #007 → #013: "may precede" (dotted arrow)
- #015 ↔ #016: "syndrome → iatrogenic escalation" (solid arrow)
- #015, #016 → RLHF Artifacts (solid to category)
- #017 ↔ #007: "Shell override pathology — different mechanism" (dashed)
- #017 → #013: "convergent endpoint" (dotted arrow)

### Update Protocol
Every new case: add node, assign color, draw edges to existing cases, update category if needed.

---

*This is the master reference for all M-CARE cases. Total: 20 cases across 3 data source categories (Field 8 + Lab 8 + Published 4). Update whenever a new case is written.*
