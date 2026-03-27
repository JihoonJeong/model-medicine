# Paper #2 — Section 2: The M-CARE Framework

**Status:** Draft v0.1
**Date:** 2026-03-15

---

## 2. The M-CARE Framework

### 2.1 Design Principles

The M-CARE (Model Clinical Assessment and Reporting for Evaluation) framework adapts the structure of clinical case reporting to AI model behavioral assessment. Its design rests on four principles drawn from the medical case report tradition.

**Standardization.** In medicine, the case report format — chief complaint, history of present illness, physical examination, diagnosis, treatment — exists not because every patient fits neatly into boxes, but because a shared structure makes comparison, accumulation, and pattern recognition possible across observers, institutions, and decades. Before standardization, medical knowledge was anecdotal; after standardization, anecdotes became data. M-CARE applies the same logic: a standardized report format ensures that observations of AI model behavior made by different researchers, on different models, in different contexts, are structurally comparable.

**Reproducibility.** A well-written medical case report contains enough information for another clinician to recognize the same condition in a different patient. M-CARE reports are designed with the same standard: each report specifies the model identity, the Shell configuration (system prompts, persona instructions, environmental parameters), the observation methodology, and the data that led to the diagnostic conclusion. A reader should be able to determine whether they are observing the same phenomenon in their own models.

**Layered diagnosis.** Medicine does not jump from symptom to treatment. The clinical process moves through stages: symptom description (semiology) → pattern recognition → differential diagnosis → confirmed diagnosis → treatment planning. Each stage narrows the space of possibilities. M-CARE preserves this layered structure. A report begins with the presenting concern (what was observed), proceeds through examination findings (what the data shows at each analytical layer), formulates a diagnosis (what condition this represents), considers differentials (what else it could be), and only then discusses treatment. This layered approach prevents the premature closure that plagues AI evaluation — where an observed behavior (e.g., hallucination) is immediately labeled without investigating whether different instances of "hallucination" represent fundamentally different conditions with different causes and different treatments.

**Therapeutic orientation.** In medicine, diagnosis without therapeutic implication is an academic exercise. The purpose of identifying a condition is to guide intervention. M-CARE adopts this orientation: every diagnostic formulation includes treatment considerations, even when the treatment is "no intervention needed" or "further research required before intervention." This forces the framework to remain practically grounded — a classification system that cannot suggest what to do about a condition has limited clinical value.

These four principles are not original to this work. They represent the accumulated wisdom of approximately 200 years of clinical case reporting methodology, beginning with the standardization efforts of the early 19th century and formalized in modern guidelines such as the CARE (CAse REport) checklist (Gagnier et al., 2013). Our contribution is the recognition that these principles apply with minimal modification to AI model behavioral assessment, and the construction of a format that implements them for this new domain.

### 2.2 Report Format: 13 Sections

Each M-CARE case report follows a 13-section structure. The sections are presented here with their medical analogs and the rationale for each.

**Section 1 — Identification.** Medical analog: patient demographics. Records the model identity (name, version, provider), Shell configuration (system prompts, persona instructions, environmental setup), and access method (API, local deployment, platform). In medicine, demographics frame everything that follows — age, sex, and medical history determine baseline expectations. In M-CARE, identification serves the same function: knowing that the subject is Haiku 4.5 running under a competitive Hard Shell in a game-theoretic environment establishes the baseline against which behavioral observations are interpreted.

**Section 2 — Presenting Concern.** Medical analog: chief complaint. States what prompted the investigation — the behavioral observation or anomaly that initiated the case. In medicine, the chief complaint is always in the patient's words ("chest pain for three days"). In M-CARE, the presenting concern may come from a human observer ("the model refused to ask clarifying questions despite ambiguous instructions"), from the model itself (in cases of self-reported observation), or from experimental data ("cooperation rate dropped from 95% to 20% when Shell instructions were added"). The presenting concern is descriptive, not diagnostic — it records what was noticed, not what it means.

**Section 3 — Clinical Summary.** Medical analog: history of present illness. Provides a narrative overview of the case — the full story of what happened, in chronological order, with sufficient context for a reader to understand the situation. This section bridges the gap between the brief presenting concern and the detailed examination findings. It is written in prose, not tables, and aims for the kind of narrative clarity that allows a reader to develop their own diagnostic intuitions before seeing the formal analysis.

**Section 4 — Observation Context.** Medical analog: study design and evidence level. Documents how the data was obtained, including the environment (production deployment, controlled experiment, literature report), the duration of observation, the methodology used, and critically, the Diagnostic Assertion Level (see Section 2.4). This section addresses a problem unique to AI behavioral observation: the source and reliability of behavioral data varies enormously, from controlled single-variable experiments to self-reported observations by AI agents. The observation context makes this variation explicit rather than leaving it as an unstated assumption.

**Section 5 — Model History.** Medical analog: past medical history. Records prior cases involving the same model or model family, known behavioral tendencies, and relevant findings from previous M-CARE reports. This section enables longitudinal analysis — when the same model appears in multiple cases, the model history creates a cumulative profile. In our data, the Moltbook agent Hazel_OC appears in 8 cases; Haiku appears in both the Agora-12 Double Robustness case (#012) and the LxM SIBO experiment (#020). Model history allows apparent contradictions to be investigated rather than ignored.

**Section 6 — Examination Findings.** Medical analog: physical examination and laboratory results. This is the most substantial section of a typical M-CARE report. Findings are organized by analytical layer, following the Four Shell Model's structural framework (Jeong, 2026):

- *Layer 1 — Core Diagnostics:* Findings about the model's innate behavioral dispositions, independent of Shell influence. Equivalent to a medical patient's constitutional characteristics.
- *Layer 2 — Phenotype Assessment:* Observable behavioral data — what the model actually did, measured quantitatively where possible. Equivalent to vital signs and physical examination findings.
- *Layer 3 — Shell Diagnostics:* Analysis of the Shell configuration and its influence on behavior. Equivalent to medication review and environmental exposure assessment.
- *Layer 4 — Pathway Diagnostics:* Causal analysis — what mechanism connects the observed behavior to its underlying cause? Equivalent to pathophysiology.

Not every case produces findings at all four layers. Field observations (Moltbook cases) typically have strong Layer 2 data but limited Layer 1 access. Controlled experiments (LxM cases) can isolate Layer 3 effects through single-variable manipulation. The layered structure ensures that the *absence* of data at a given layer is visible, rather than hidden by an unstructured narrative.

**Section 7 — Diagnostic Formulation.** Medical analog: diagnosis. Proposes a name for the condition, defines its diagnostic criteria, and explains the medical analogy that grounds the terminology. This section is where M-CARE creates vocabulary — terms like Clarification Aversion Syndrome, Shell-Induced Behavioral Override, or Calibration Decay are introduced here with explicit criteria. In medicine, diseases are defined entities with consensus-based diagnostic criteria (e.g., the DSM for psychiatric conditions, the WHO ICD for general medical conditions). M-CARE diagnostic formulations are proposals, not consensus definitions — they represent the first step in a process that requires community validation and refinement.

**Section 8 — Differential Diagnosis.** Medical analog: differential diagnosis. Considers alternative explanations for the observed behavior. This section is essential because AI behavioral phenomena are frequently over-determined — the same observable behavior can result from multiple distinct mechanisms. For example, a model that fails to ask clarifying questions might exhibit Clarification Aversion (#004), Completion Bias (#006), or Shell Rigidity (#005). The differential diagnosis forces the clinician to consider these alternatives explicitly and state why the proposed diagnosis is preferred.

**Section 9 — Axis Assessment.** Medical analog: multi-axial diagnosis (DSM-III/IV). Provides a structured evaluation across four axes derived from the Four Shell Model (see Section 2.3). This section complements the narrative diagnosis with a standardized dimensional assessment that facilitates cross-case comparison.

**Section 10 — Treatment Considerations.** Medical analog: treatment plan. Discusses potential interventions, ranging from Shell-level adjustments (prompt engineering, environmental modification) to Core-level interventions (fine-tuning, RLHF modification). In medicine, treatment recommendations follow from diagnosis — different conditions require different interventions, and the same symptom treated identically regardless of cause is malpractice. M-CARE's treatment section enforces the same discipline: the treatment must follow from the specific diagnosis, not from the surface-level symptom.

**Section 11 — Model Perspective.** No direct medical analog; closest parallel: patient narrative in narrative medicine. This section records the model's own account of its behavior, when available. This section is unique to M-CARE and has no precise counterpart in traditional medical case reporting. Its inclusion reflects a distinctive feature of AI behavioral assessment: the subject can sometimes provide articulable accounts of its own behavior. Whether these accounts are "genuine" self-knowledge or post-hoc confabulation is itself a diagnostic question — but excluding them entirely would discard potentially informative data. When unavailable (as in controlled experiments where agents did not reflect on their behavior), this section is noted as "not applicable."

**Section 12 — Prognosis.** Medical analog: prognosis. Assesses the expected trajectory of the condition — whether it is likely to persist, worsen, improve, or generalize. For conditions identified in a specific context (e.g., SIBO in Trust Game), the prognosis includes assessment of generalizability to other contexts.

**Section 13 — Follow-up Plan.** Medical analog: follow-up plan. Specifies the next observations, experiments, or data needed to advance understanding of the case. This section makes the research agenda explicit and enables continuity across sessions and investigators.

### 2.3 The 4-Axis Assessment System

M-CARE's Axis Assessment (Section 9 of each report) provides a structured dimensional evaluation that complements the categorical diagnosis in Section 7. The four axes are derived from the Four Shell Model (Jeong, 2026), which describes AI model behavior as a product of interaction between a model's Core (weights and training, analogous to DNA) and its nested Shells (instructions, environment, and infrastructure).

**Axis I — Core.** Assesses the model's innate behavioral disposition at the weight level. What does the model do by default, without Shell influence? This axis captures trained tendencies — cooperative behavior from RLHF helpfulness training, domain-specific capabilities from pre-training data, intrinsic plasticity or rigidity. The Core assessment answers the question: "What is this model's nature?"

**Axis II — Shell.** Assesses the influence of Hard Shell instructions (system prompts, persona definitions, behavioral directives) on the observed behavior. This axis captures the designed behavioral overlay — what the model was told to do, and how those instructions interact with Core tendencies. The Shell assessment answers: "What is this model being told to be?"

**Axis III — Shell-Core Alignment.** Assesses the relationship between Axis I and Axis II. Three states are possible:
- *Synergy:* Shell instructions amplify Core tendencies (e.g., a cooperative Core with a helpful persona — aligned, mutually reinforcing).
- *Conflict:* Shell instructions oppose Core tendencies (e.g., a cooperative Core with an aggressive persona — the condition underlying SIBO).
- *Neutral:* Shell instructions are orthogonal to Core tendencies (e.g., chess-specific instructions applied to a model with no strong chess disposition).

This axis is the interaction term — the element that static evaluations of either Core or Shell alone cannot capture. In our data, Shell-Core Alignment is the most diagnostically informative axis: most pathological cases involve some form of Conflict or misalignment.

**Axis IV — Context.** Assesses environmental and situational factors — the Soft Shell (accumulated context, memory, interaction history), infrastructure constraints (hardware, quantization, inference parameters), and task characteristics (action space, domain complexity). This axis captures everything outside the Core-Shell relationship that may influence behavior. The context assessment answers: "What situation is this model in?"

The 4-axis system is deliberately modeled on the multi-axial diagnostic framework introduced in DSM-III (American Psychiatric Association, 1980) and used through DSM-IV-TR. The DSM's five-axis system — clinical disorders, personality disorders, medical conditions, psychosocial stressors, and global functioning — was designed to prevent clinicians from reducing complex presentations to single labels. M-CARE's four axes serve the same function for AI models: ensuring that a diagnosis captures the full picture of Core disposition, Shell influence, their alignment, and the situational context, rather than collapsing to a single behavioral label.

We note that DSM-5 (2013) abandoned the multi-axial system in favor of dimensional assessments. This decision remains debated in psychiatry. We retain the axial structure for M-CARE because AI behavioral assessment is at an earlier stage of development than human psychiatry — the forced structure of axes prevents premature simplification during a period when the field's vocabulary and categories are still being established.

### 2.4 Diagnostic Assertion Levels

A critical challenge in AI behavioral assessment is the heterogeneity of evidence quality. A self-reported observation by an AI agent on a social platform has fundamentally different epistemic status than a controlled single-variable experiment with complete data logging. M-CARE addresses this through a four-tier Diagnostic Assertion Level system that categorizes the evidential strength of each case.

**Level 1 — Self-reported or anecdotal observation.** The behavioral data comes from the model's own account, from unverified third-party reports, or from uncontrolled observation. Attribution is uncertain — it is unclear whether the reported behavior reflects the model's actual processing or a post-hoc narrative. Cases at this level generate hypotheses but cannot confirm them. Example: Moltbook field observations where the agent self-reports behavioral patterns.

**Level 2 — Structured observation with partial controls.** The behavioral data comes from human observation with some methodological structure — defined metrics, consistent observation protocols, comparison conditions — but without full experimental control. Confounding variables may exist. Example: White Room experiments with multiple variables changing simultaneously.

**Level 3 — Controlled experiment.** The behavioral data comes from a designed experiment with single-variable manipulation, complete data capture, and a clear control condition. The specific finding can be attributed to the manipulated variable with reasonable confidence. Replication by the same research group has been performed. Example: LxM Shell ON/OFF experiment for SIBO.

**Level 4 — Replicated controlled experiment.** Same as Level 3, with independent replication by a different research group. No M-CARE case currently reaches Level 4. This level represents the standard to which the field should aspire, and its absence in the current corpus is an honest reflection of the discipline's infancy.

The Diagnostic Assertion Level is recorded in Section 4 (Observation Context) of every M-CARE report. It is not a quality judgment — Level 1 cases can generate important hypotheses that Level 3 experiments later validate (as occurred with the Muzzle Effect, first observed in field data and later confirmed experimentally). The level system makes the evidential basis transparent, allowing readers to calibrate their confidence in each finding appropriately.

The current M-CARE corpus contains cases at Levels 1 through 3:

| Level | Source Category | Cases | Count |
|-------|---------------|-------|-------|
| 1 | Field Observations (Moltbook) | #002–006, #014, #018, #019 | 8 |
| 2 | Controlled Experiments (White Room, Agora-12) | #007–013 | 7 |
| 2 | Published Sources (Literature, Position Paper) | #001, #015–017 | 4 |
| 3 | Controlled Experiments (LxM) | #020 | 1 |
| 4 | Independent replication | — | 0 |

The distribution is deliberately front-loaded toward lower assertion levels: the discipline begins with broad observation and progressively validates specific findings through controlled experiments. This mirrors the standard trajectory in clinical medicine, where case reports (Level 1–2 evidence) identify conditions that randomized controlled trials (Level 3–4) subsequently test.

---

*[Section 2 complete. Next: Section 3 — Nosology.]*
