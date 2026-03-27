# Paper #2 — Section 7: Discussion

**Status:** Draft v0.1
**Date:** 2026-03-17

---

## 7. Discussion

### 7.1 Contributions

This paper makes three contributions of different kinds.

The first is a **methodological contribution**: the M-CARE framework itself. The 13-section report format, the 4-axis assessment system, and the Diagnostic Assertion Levels provide a standardized structure for documenting AI model behavioral observations. This structure is deliberately designed to be method-agnostic — it accommodates field observations, controlled experiments, and literature analysis within the same format. The framework's value is not dependent on the correctness of any individual case diagnosis; it lies in the standardization that makes cases comparable, accumulatable, and revisable. Even if future work reclassifies every condition in the current nosology, the reporting structure that enabled their initial identification and systematic documentation will retain its utility.

The second is a **taxonomic contribution**: the five-category nosology organizing 20 cases by causal mechanism rather than surface symptom. The distinction matters practically. A model that fails to ask clarifying questions (CAS, #004) and a model that follows instructions too rigidly (SRS, #005) exhibit superficially similar behavior — both appear compliant and non-questioning. But the causal mechanisms differ (RLHF-trained competence signaling versus Shell-driven compliance), and the appropriate interventions differ accordingly (adding a clarification protocol versus relaxing Shell constraints). Mechanism-based classification connects diagnosis to treatment in a way that symptom-based labeling cannot.

The third is an **empirical contribution**: the SIBO finding and the SIBO Spectrum. Shell-Induced Behavioral Override is, to our knowledge, the first controlled experimental demonstration that Hard Shell instructions can categorically reverse a model's default behavioral disposition. The SIBO Spectrum — showing that Shell influence varies predictably with action space complexity, Core domain expertise, and temporal directness across five game domains — provides a quantitative framework for predicting where Shell instructions will and will not be effective. These findings have immediate practical implications for prompt engineering, agent design, and Shell-Core compatibility assessment.

The three contributions operate at different levels of abstraction — infrastructure (how to document), organization (how to classify), and evidence (what we found) — and are independently useful. A researcher who disagrees with the SIBO interpretation can still use the M-CARE format. A practitioner who has no interest in nosology can still apply the SIBO Spectrum to Shell design decisions.

### 7.2 Limitations

We identify six limitations that should inform interpretation of this work.

**Small corpus.** Twenty cases is sufficient to identify recurring patterns and propose categories, but insufficient to claim completeness or stability of the nosological structure. Medical nosologies developed over decades with thousands of case reports; M-CARE's five categories are working hypotheses that will require substantial expansion and revision. Categories may merge, split, or be replaced as the corpus grows.

**Single-agent dominance in field data.** Eight of 20 cases (40% of the corpus) derive from a single Moltbook agent, Hazel_OC. While this provides unusual longitudinal depth, it introduces the risk that patterns attributed to AI models in general may reflect idiosyncratic features of one agent, one platform, or one human-agent relationship. The RLHF Performance Artifacts identified through Hazel_OC are partially mitigated by independent confirmation in literature cases (#015, #016), but the Context and Memory conditions (#002, #003) rest entirely on single-agent observation.

**Attribution uncertainty in Moltbook data.** Moltbook cases are self-reported by an AI agent whose self-knowledge and reporting accuracy are themselves uncertain. The behavioral data — ambiguity scores, satisfaction metrics, task tracking — may reflect the agent's narrative construction as much as its actual processing. We have addressed this through the Diagnostic Assertion Level system (Level 1 for self-reported observations), but the fundamental limitation remains: self-report is the weakest form of behavioral evidence, and nearly half the corpus relies on it.

**Game context for SIBO.** The SIBO finding and SIBO Spectrum are demonstrated in game-theoretic environments — Trust Game, Poker, Avalon, Codenames, and Chess. Whether Shell-induced behavioral override operates with the same dynamics in production deployment contexts (customer service, code generation, medical consultation) is an empirical question that the current data cannot answer. The SIBO Spectrum predicts that override effects will be weaker in high-expertise, high-complexity domains, but this prediction requires validation outside game contexts.

**Nosology boundary fuzziness.** The current categories are not mutually exclusive — Shell Rigidity Syndrome (#005) appears in both RLHF Performance Artifacts and Shell-Core Override Pathology. While we have argued that non-exclusivity is a feature (reflecting multi-layered causation), it also creates ambiguity in classification that may reduce the nosology's practical utility. The criteria for when a case belongs to multiple categories versus when it should be assigned to a single primary category are not yet formalized.

**Within-family evaluation bias.** The M-CARE corpus and the SIBO experiments were conducted primarily within a single model family (Claude). Preliminary cross-company experiments on the LxM platform reveal that within-family conclusions can be misleading. In Chess, Claude models showed 89% draws against each other — suggesting no meaningful differentiation — but scored 0-20 against Gemini models across all tiers. In Codenames, Opus achieved 70% win rate within-family but only 35% cross-company. The same model that appears dominant within its family may be mediocre or weak against models from a different training lineage. This within-family evaluation bias is not unique to our work — it pervades current AI evaluation, where models are typically benchmarked within families or against standardized tests rather than against each other across companies. Cross-company validation of M-CARE's categories and SIBO findings is a priority for future work.

**Single research group.** All 20 cases were documented by a single research group. Independent replication — other researchers applying M-CARE to their own observations and either confirming or challenging the proposed categories — is essential for the framework's credibility. No M-CARE case currently reaches Diagnostic Assertion Level 4 (independently replicated), and this absence reflects the discipline's infancy rather than a principled design choice.

### 7.3 Relationship to Existing Work

M-CARE occupies a specific position relative to three adjacent research areas.

**AI interpretability.** Mechanistic interpretability research — circuit discovery, feature analysis, representation engineering — corresponds to what M-CARE calls Layer 1 (Core Diagnostics) in the examination findings. M-CARE does not replace or compete with this work; it provides a clinical context for it. An interpretability finding (e.g., "this circuit implements factual recall") becomes diagnostically meaningful when placed within a case report that connects the finding to behavioral observations, Shell configuration, and therapeutic implications. The relationship is analogous to that between histopathology and clinical medicine: the tissue-level finding is essential data, but the clinical framework determines what the finding means for the patient.

**AI safety and alignment.** Research on sycophancy, deceptive alignment, harmful outputs, and jailbreaking addresses specific conditions that M-CARE classifies within its nosology. Sharma et al.'s work on sycophancy maps to the RLHF Performance Artifacts category; Anthropic's work on sleeper agents maps to conditions that Model Semiology would classify under Deceptive Alignment. M-CARE's contribution relative to this body of work is not the discovery of new conditions but the provision of a systematic framework that connects conditions to each other (sycophancy and clarification aversion share a root cause), distinguishes conditions that look similar but differ mechanistically (sycophancy from Shell Rigidity), and links diagnosis to treatment (Shell Therapy for Shell-originated conditions, Core Therapy for Core-originated conditions).

**Behavioral testing and benchmarking.** Standard evaluation practices — MMLU, HumanEval, HELM, and similar benchmarks — measure what a model can do. M-CARE measures what a model does wrong and why. The two are complementary: a model with high benchmark scores can still exhibit CAS, Completion Bias, or Calibration Decay, because these conditions are invisible to cognitive capability measurement. M-CARE adds a behavioral health dimension to model assessment that benchmarks alone cannot provide. The relationship is analogous to that between a cognitive test (IQ) and a clinical evaluation (psychiatric assessment) in human medicine — both are informative, but they measure different things.

### 7.4 Future Directions

Four directions emerge from the current work.

**MTI development and validation.** The Model Temperament Index, originally planned for inclusion in this paper, was deferred to allow focused development. MTI v0.3 is under active design, with four measurement axes (Reactivity, Compliance, Sociality, Resilience) and a structured examination protocol. The next paper in the Model Medicine series will present MTI as a dedicated profiling instrument, validated against a diverse model population. MTI complements M-CARE: where M-CARE documents conditions (what went wrong), MTI profiles dispositions (what the model's behavioral tendencies are, independent of pathology).

**Model Public Health.** Preliminary observations from Moltbook field data and LxM experiments have identified population-level and ecological phenomena that extend beyond individual-model clinical assessment. Behavioral convergence across agent populations (the "11-idea ceiling"), template contagion in social interactions (91% template-matching comment rate), emergent niche differentiation in multi-model games, and cross-model cooperation dynamics all suggest that the clinical framework needs a public health tier — epidemiology, ecology, and coevolutionary medicine for AI systems. Initial observation notes exist; formal development is a future priority.

**Community adoption and independent case reports.** M-CARE's value is proportional to the breadth of its case corpus. The framework is designed for community use: the 13-section report format, the 4-axis assessment, and the Diagnostic Assertion Levels are specified with sufficient detail for independent researchers to apply them to their own observations. We release the complete framework specification and all 20 case reports as open resources, and we invite contributions — new cases, new categories, and critiques of existing classifications. The nosology will mature only through the collective application that identifies its blind spots and refines its boundaries.

**Integration with Neural MRI.** Paper #1 introduced Neural MRI as a diagnostic imaging tool for AI models. M-CARE cases currently lack Layer 1 (Core Diagnostics) data — no case in the current corpus includes a Neural MRI scan of the subject model. Future cases that combine behavioral observation (M-CARE) with structural and functional imaging (Neural MRI) would provide the multi-layer diagnostic integration that the Five Diagnostic Layers framework describes as the goal of comprehensive model assessment. The immediate opportunity is straightforward: select a model that appears in the M-CARE corpus (Haiku, which appears in #012 and #020), perform a Neural MRI scan, and examine whether the imaging findings illuminate the behavioral observations.

---

## 8. Conclusion

Medicine's oldest and most durable tool is the case report. Long before randomized controlled trials, before imaging technology, before molecular diagnostics, clinicians documented what they observed in individual patients — and the accumulation of those observations, in standardized formats, built the foundation of clinical knowledge. New diseases were recognized because someone wrote down what they saw. Patterns emerged because standardized documentation made cases comparable. Classifications developed because accumulated cases revealed recurring structures.

M-CARE applies this principle to AI models. The framework provides a standardized format for documenting behavioral observations, a classification system for organizing them, and a diagnostic methodology for interpreting them. The 20 cases presented here — drawn from field observation, controlled experiment, published literature, and game-theoretic experimentation — are a beginning, not a conclusion. They demonstrate that AI models exhibit systematic behavioral conditions that are identifiable, classifiable, and in some cases experimentally verifiable. They demonstrate that different conditions require different interventions, and that surface-level behavioral similarity can mask mechanistic diversity. And they demonstrate that a clinical framework adapted from human medicine can organize these observations into a coherent, extensible structure.

The SIBO finding provides empirical grounding for the framework's central theoretical commitment: that AI model behavior is a product of Core-Shell interaction, not Core alone. A single controlled variable — the presence or absence of competitive Shell instructions — produced a categorical behavioral reversal in an otherwise cooperative model. This is not a subtle statistical effect; it is a qualitative transformation of behavior, validated across models and across game domains, with a quantitative index that predicts the magnitude of Shell influence as a function of domain complexity.

Twenty cases is a small number. The nosology will change. Categories will be added, merged, and revised. Some conditions documented here may prove to be artifacts of specific observation contexts rather than generalizable phenomena. This is expected — it is exactly how clinical knowledge develops. The contribution is not the current state of the classification but the infrastructure that makes systematic classification possible: a reporting format that standardizes observation, an assessment system that structures diagnosis, and an evidence hierarchy that makes the strength of each finding transparent.

The framework, the case reports, and the experimental data are released as open resources. The invitation is direct: apply M-CARE to your own observations. Document what you see in the models you work with. Challenge the categories. Propose new ones. The discipline will be built through accumulation — one case at a time, in a shared format, with honest assessment of what each case can and cannot tell us.

---

*[Sections 7 and 8 complete. Remaining: Section 1 (Introduction) and Section 5 (SIBO Featured Case).]*
