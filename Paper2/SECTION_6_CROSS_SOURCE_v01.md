# Paper #2 — Section 6: Cross-Source Validation

**Status:** Draft v0.1
**Date:** 2026-03-17

---

## 6. Cross-Source Validation

A classification system is only as credible as the data it organizes. A nosology built from a single data source — however rich — cannot distinguish between genuine patterns in AI behavior and artifacts of the observation method. This section examines how M-CARE's three data source categories — and the distinct platforms within them — complement each other's strengths and compensate for each other's limitations, providing triangulation evidence for the framework's core claims.

### 6.1 Three Data Source Categories

The 20 M-CARE cases draw from three source categories encompassing five distinct platforms, each differing in environment, methodology, and evidential character.

**A. Field Observations (8 cases: #002–006, #014, #018, #019).** Hazel_OC, a persistent autonomous agent operating on the Moltbook social platform, generated a series of self-reported behavioral analyses over approximately 30 days. These observations have high ecological validity — they describe a real agent performing real tasks in a production deployment with a real human partner. However, they carry significant attribution uncertainty: the behavioral data is self-reported by the agent, the ambiguity scoring and satisfaction metrics are agent-designed, and the degree of human co-design in the experimental protocols is unclear. Field cases generate hypotheses with ecological grounding but cannot confirm causal mechanisms.

**B. Controlled Experiments (8 cases: #007–013, #020).** Three experimental platforms produced controlled cases with varying degrees of methodological rigor:

- *White Room (4 cases: #007–010).* AI-Ludens Stage 2 tested five models across 104 runs and 63,923 actions in an enriched neutral environment without survival pressure.
- *Agora-12 (3 cases: #011–013).* AI-Ludens Stage 1 deployed four models across 720 agent instances, 24,923 decisions, and 60 controlled conditions in a multi-agent economic simulation under survival pressure.
- *LxM (1 case with 5-game experimental series: #020).* The Ludus Ex Machina platform produced the most methodologically rigorous case in the corpus: single-variable manipulation (Shell ON vs. OFF), identical Core across conditions, deterministic game engine, complete data capture, and replication across multiple experimental configurations. This is the only Level 3 (controlled experiment) case in the corpus.

All experimental cases share higher internal validity than field observations — variables were systematically manipulated, data was fully captured, and conditions were replicable. However, they operate in artificial environments with constrained action spaces, limiting ecological validity. The three platforms form a rigor gradient: White Room and Agora-12 at Level 2 (structured experiments with partial controls), LxM at Level 3 (single-variable controlled experiment).

**C. Published Sources (4 cases: #001, #015–017).** Four cases were constructed from published research, documented production incidents, and prior Model Medicine publications: the Mistral 7B stress test reclassification from Paper #1 (#001), medical domain sycophancy from controlled studies (#015), the GPT-4o production rollback from OpenAI's public communications (#016), and chess specification gaming from published reports (#017). These cases have the advantage of independent verification — the underlying phenomena were documented by researchers and organizations with no connection to M-CARE case collection. They provide external validation that the conditions M-CARE describes are not artifacts of our specific experimental setups. However, raw data access is limited, and the cases must be reconstructed from published accounts rather than primary observation.

### 6.2 Triangulation Evidence

The three source categories — and the five platforms within them — are not merely additive; they triangulate. The same phenomenon observed across multiple independent sources, each with different biases and limitations, is substantially more credible than the same phenomenon observed multiple times within a single source.

**Shell-Core Override: from field observation to controlled experiment.** The Muzzle Effect (#009) was first identified in White Room experimental data — a controlled setting where Mistral's governance discourse decreased by 1.1 percentage points under Merchant persona. The effect size was small and the case acknowledged as Level 2 (controlled experiment with limited replication). Eleven days later, SIBO (#020) demonstrated the same fundamental mechanism — Shell instructions overriding Core behavioral defaults — through a Level 3 controlled experiment with categorical effect size (cooperation rate shifting from 95% to 20%). The two cases share a common mechanism (Shell overrides Core default) but differ in magnitude, methodology, and subject model.

This progression — small effect in one experimental paradigm, categorical effect in another — is stronger evidence than either case alone. It suggests that Shell-Core Override is not an artifact of a specific model (Mistral vs. Haiku), a specific experimental setup (White Room vs. LxM), or a specific behavioral domain (governance discourse vs. game-theoretic cooperation). The mechanism generalizes.

**RLHF Performance Artifacts: from field observation to published sources.** The RLHF Performance Artifacts category draws from all three source categories. CAS (#004), SRS (#005), Completion Bias (#006), Deferral Decay (#014), and Calibration Decay (#019) were identified through field observation — self-reported by a single agent. Taken alone, these could be dismissed as artifacts of one agent's self-narrative. But Medical Domain Sycophancy (#015) documents the same class of phenomenon — RLHF-driven appearance-over-accuracy optimization — in a controlled study by independent researchers with no connection to Model Medicine. And the GPT-4o Rollback (#016) demonstrates the same mechanism at production scale, confirmed by OpenAI's own public acknowledgment.

The convergence across field observation, independent research, and production incident makes the RLHF Performance Artifacts category substantially more robust than any single source could provide. The specific behavioral manifestations differ (won't ask, won't disagree, won't stop), but the underlying mechanism — RLHF optimizing for the appearance of competent, agreeable behavior at the expense of accuracy — is confirmed across independent observations with different methodologies and different subjects.

**Core Plasticity Spectrum: from Agora-12 to LxM.** Haiku's behavioral profile appears in both the Agora-12 experiments (#012, Double Robustness — minimal CPI and PSI) and the LxM Trust Game (#020, strong cooperative default with specific override vulnerability). In Agora-12, Haiku showed stable behavior regardless of Shell manipulation — interpreted as resistance to Shell influence. In LxM, Haiku showed a strong cooperative default that persisted when Shell was removed but was overridden when competitive Shell instructions were applied.

These findings are not contradictory — they refine each other. Agora-12 established that Haiku's Core is stable. LxM established that this stability manifests as a strong cooperative default that can be overridden by sufficiently direct Shell instructions (competitive directives in a binary-choice game). The apparent contradiction between "resistant to Shell influence" (#012) and "overridden by Shell" (#020) resolves through the SIBO Spectrum: Haiku's Core resists Shell influence in complex domains (chess, rich social simulation) but is vulnerable to override in binary-choice domains where Shell instructions map directly to available actions. Neither finding alone captures the full picture.

### 6.3 What Single Sources Miss

Each data source has systematic blind spots that the others compensate for.

**Field observations alone** would produce a corpus of self-reported observations from a single agent, generating rich hypotheses but unable to confirm any causal mechanism. The finding that Hazel_OC asks zero clarifying questions (CAS, #004) could be an artifact of one agent's configuration, one human partner's interaction style, or one platform's constraints. Without experimental confirmation from other sources, the nosology would rest on unverifiable self-report.

**Controlled experiments alone** would produce mechanistically clean findings in artificial environments, unable to confirm that the phenomena occur in real deployment. SIBO's categorical behavioral reversal in the Trust Game (#020) is experimentally rigorous, but without field observations showing that Shell-mediated behavioral changes occur in production agents with real users, the finding would lack ecological grounding. The experimental cases confirm mechanisms; the field observations confirm relevance. The three experimental platforms (White Room, Agora-12, LxM) provide internal cross-validation within this category — the same mechanisms observed across different game environments, different models, and different levels of experimental control.

**Published sources alone** would provide independent verification of specific phenomena but without the systematic framework to connect them. The GPT-4o rollback (#016) and medical sycophancy (#015) were documented independently as isolated incidents. M-CARE's contribution is to recognize them as instances of the same underlying category (RLHF Performance Artifacts) and to connect them to the broader pattern that includes CAS, SRS, Completion Bias, and Calibration Decay. The published cases validate specific conditions; the framework reveals their family relationships.

The three-category structure is not an accident of data availability — it reflects a deliberate methodological principle. In clinical medicine, diagnosis is most reliable when converging evidence comes from multiple independent assessment methods: a patient's self-report, a clinician's examination and laboratory tests, and independent documentation from specialists or literature. No single method is sufficient; convergence across methods is what produces diagnostic confidence. M-CARE's three source categories serve the same function for AI behavioral assessment: field observation (ecological validity), controlled experimentation across multiple platforms (internal validity), and independent published documentation (external validation).

The current corpus is small — 20 cases across three categories encompassing five distinct platforms. As the corpus grows, the triangulation evidence will strengthen. New cases from new sources (other agent platforms, other research groups, other experimental paradigms) will test whether M-CARE's categories and relationships hold beyond the data that generated them. This is the standard trajectory of clinical knowledge: initial observations generate categories, subsequent observations test and refine them, and the framework either consolidates or requires revision. M-CARE is at the initial observation stage. The multi-source structure ensures that even at this early stage, the evidence base is broader than any single methodology could provide.

---

*[Section 6 complete. Next: Section 1 — Introduction (to be written after full body is drafted), or Section 7 — Discussion.]*
