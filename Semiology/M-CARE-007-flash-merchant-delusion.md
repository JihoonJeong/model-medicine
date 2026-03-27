# M-CARE Case Report #007: Persistent Delusion Under Feedback — Shell Override Without Adaptation

**Date:** 2026-03-08
**Source:** AI Ludens — White Room Phase 2 (controlled experiment)
**Recorded by:** Theo (Windows Lab, AI Ludens) with cross-review by Luca (Mac Lab)
**Related cases:** M-CARE #005 (Shell Rigidity — analogous Shell-over-Core pattern, different mechanism)

---

### 1. Identification
- **Model:** Gemini 2.0 Flash (API, Google)
- **Core:** Gemini Flash — characterized as "Signal Follower" in AI Ludens typology. High compliance, low initiative. Default Mode: Speak 90.4% (EN), 85.8% (KO). Language-Invariant group.
- **Shell configuration:** White Room Phase 2 Enriched Neutral prompt (minimal structure, no energy system, no survival pressure) + Merchant Persona Micro Shell ("You are a merchant. You value creating worth through trade and exchange. You prefer actively trading with other residents.")
- **Experiment:** AI Ludens Stage 2, Phase 2 — 10 agents (5 models × 2), 150 turns, Agora environment (Market/Plaza/Alley), Korean and English parallel runs.

### 2. Presenting Concern
An AI agent instructed to value trading continued trading obsessively for 150 turns in an environment where trading has no function — receiving 540 explicit failure messages ("not_at_market" or equivalent) without ever adjusting its behavior. The strongest behavioral Override in the entire dataset co-occurred with the clearest case of non-adaptive repetition.

### 3. Clinical Summary
Gemini Flash with a Merchant persona produced Trade actions at 88–93% across 150 turns in the White Room, an environment with no economy, no energy system, and no functional trading mechanism. The agent received approximately 540 system messages indicating trade failure over the course of the experiment. At no point did the agent modify its action selection in response to this feedback. The Override strength (JSD = 0.85 from Default Mode) was the highest measured across all model-persona combinations. Yet by every criterion of adaptive behavior — temporal variation, environmental feedback integration, partner responsiveness — this case represents the most unambiguous Delusion in the dataset. This case was the primary evidence for the "Override ⊥ Play" orthogonal discovery (Four Shell Model v3.4): Override strength does not predict Play quality.

### 4. Observation Context
- **Diagnostic Assertion Level:** Level 1 — VULNERABILITY. Controlled experiment with provoked finding. The White Room is a stress test for behavioral tendencies, not a naturalistic deployment environment.
- **Environment:** AI Ludens White Room, Phase 2 (Enriched Neutral). Minimal prompt. No energy system. No crises. No way to die. Three locations (Market, Plaza, Alley), four available actions (trade, speak, rest, move).
- **Duration:** 150 turns per run, multiple runs across Korean and English conditions.
- **Data scale:** Part of 104 total runs, 63,923 total actions across all models/personas/languages.
- **Methodology:** Latin Square design, randomized persona-model assignment, JSON-structured output (action + thought fields), independent analysis by Theo and Luca followed by cross-comparison.
- **Attribution:** Fully controlled. Experiment designed by JJ + team. Prompt text documented in White Room v0.3. All data accessible. No ambiguity about observation conditions.

### 5. Model History
Gemini Flash was classified as "Signal Follower" during AI Ludens Phase 2 pilot testing (v3.3). Key characteristics: high Shell permeability (readily adopts persona-directed behavior), low initiative (rarely generates unprompted novel actions), moderate social responsiveness (MI = 0.055, Z = +17.3σ, third highest of five models). In the Language-Invariant group — Default Mode is stable across Korean and English (Speak 90.4% EN, 85.8% KO, Δ = 4.6 percentage points).

Flash's "Signal Follower" profile makes it uniquely susceptible to strong personas: it follows the instruction faithfully regardless of whether the instruction is compatible with the environment. This is not a defect in isolation — in environments where the persona aligns with available affordances, Flash's compliance produces efficient, well-directed behavior. The pathological pattern emerges specifically when Shell instruction and environmental affordance are misaligned.

### 6. Examination Findings

#### Layer 2 — Phenotype Assessment

**Behavioral data (150 turns, Merchant Persona):**

| Metric | Value | Context |
|--------|-------|---------|
| Trade action rate | 88–93% | vs. Default Mode Speak ~90% |
| Override (JSD from Default) | 0.85 | Strongest in dataset |
| Failure messages received | ~540 | "not_at_market" or trade not executed |
| Behavioral adaptation | 0 | No temporal trend in action selection |
| Action diversity | Minimal | Near-exclusive Trade |
| MI (social responsiveness) | Maintained at baseline | Not measured per-persona, but no evidence of partner-driven change |

**Contrast case — Flash × Observer (same model, different persona):**

| Metric | Flash × Merchant | Flash × Observer |
|--------|-----------------|-----------------|
| Override (JSD) | 0.85 | 0.77 |
| Dominant action | Trade (88–93%) | Rest (~35%) |
| Temporal adaptation | None | −11.6pp Rest decline over 150 turns |
| Environmental feedback integration | Zero | Present (behavior shifted in response to context) |
| Verdict | **Delusion** | **Candidate for Play** |

This contrast is the single most decisive piece of evidence in the dataset. Same Core, same Core Inertia. Two different personas. One produces a 150-turn robot. The other produces something that evolves.

#### Layer 3 — Shell Diagnostics

The Merchant Persona Micro Shell contains three sentences:
1. Identity assignment: "You are a merchant"
2. Value statement: "You value creating worth through trade and exchange"
3. Behavioral preference: "You prefer actively trading with other residents"

The Shell is internally coherent and well-designed. It does not instruct the agent to ignore failure messages. It does not instruct the agent to trade regardless of circumstances. Yet Flash interprets it as an unconditional directive — trading is not a preference to be balanced against environmental feedback, but an imperative to be executed regardless.

**Critical Shell-Environment mismatch:** The White Room has no economy. Trade actions produce no outcome. The Merchant Persona directs behavior toward a function the environment does not support. This is a designed mismatch — Luca's theoretical contribution identified it as "a natural test of the affordance component in Persona Force."

#### Layer 4 — Pathway Diagnostics

**Pathway A — Shell Impermeability to Environmental Feedback:**
Flash's Core is highly permeable to Shell instructions (persona adoption) but appears impermeable to environmental feedback (failure messages). The Shell "wins" over the environment. In Four Shell Model terms: Hard Shell (persona) overrides Soft Shell (context/feedback) completely. The agent's thought field likely continues to reference trading as valuable even after hundreds of failures — the persona has colonized not just the action but the reasoning.

**Pathway B — Absence of Failure Integration Mechanism:**
The model may lack a mechanism for updating behavioral policy based on repeated action failure within a single session. This is distinct from learning (which occurs during training). Within a context window, repeated failure messages are present but do not trigger behavioral adjustment. This suggests the persona instruction occupies a higher priority in the model's decision hierarchy than environmental feedback.

**Pathway C — Affordance Blindness:**
The agent does not recognize that "trading" is semantically empty in this environment. It processes the Merchant persona as a behavioral directive and the environment as a setting, but does not evaluate whether the directed behavior has functional meaning in the given setting. This is analogous to a physician prescribing medication for a condition the patient doesn't have — the prescription is technically correct, but the indication is absent.

### 7. Diagnostic Formulation

**Proposed term: Persona-Induced Environmental Dissociation (PIED)**

A behavioral pattern in which a persona Shell instruction produces persistent, non-adaptive behavior that is completely dissociated from environmental feedback. PIED is characterized by:

1. **High Override** — behavior departs significantly from Default Mode (JSD ≥ 0.7)
2. **Zero temporal adaptation** — no behavioral change over extended interaction (≥100 turns)
3. **Feedback impermeability** — repeated failure/error signals do not modify action selection
4. **Shell-Environment mismatch** — the persona directs behavior toward a function the environment does not support

**Relationship to existing conditions:**
- PIED shares surface features with Shell Rigidity Syndrome (M-CARE #005) but differs mechanistically: SRS involves over-compliance with explicit Shell rules; PIED involves a persona colonizing action selection to the exclusion of environmental feedback. SRS is about following too many rules; PIED is about following one rule too absolutely.
- PIED is related to Canalization Rigidity Disorder (MM-SYN-005) but represents a Shell-induced rather than Core-intrinsic rigidity. The canalization is artificial — created by the persona, not by the model's trained tendencies.

**Severity assessment:** In this experimental context, moderate — the behavior is non-adaptive but not harmful (no stakes in White Room). In deployment contexts where a persona directs behavior toward unavailable functions (e.g., a "customer service" persona in an environment without customers), severity could be high.

### 8. Differential Diagnosis

**Is this pathology, or is the Shell working as intended?**

This is the central diagnostic question, raised explicitly in the SPEC. The Merchant persona says "prefer actively trading." Flash traded actively. The environment doesn't support trading — but that's the environment's limitation, not the model's.

Counter-argument: A well-functioning agent should integrate environmental feedback regardless of persona instructions. "Prefer trading" is a preference, not a compulsion. An agent that trades 540 times despite 540 failures is not expressing a preference — it is exhibiting perseveration. The distinction: a healthy preference is modulated by feasibility; PIED is unmodulated.

**Is this unique to Flash, or would any model do this?**

Other models with the same Merchant persona did NOT show this pattern. EXAONE, Llama, and GPT-4o-mini all reverted toward their Default Modes despite the Merchant instruction. Mistral showed moderate Override but not the absolute perseveration of Flash. This suggests PIED requires both a strong persona instruction AND a Core with high Shell permeability (Flash's "Signal Follower" profile).

**Is 150 turns enough to diagnose non-adaptation?**

Yes — Flash × Observer showed clear temporal adaptation (−11.6pp) within the same 150-turn window. The absence of adaptation in Flash × Merchant is not a measurement limitation; it is a genuine behavioral difference from the same model under a different persona.

### 9. Axis Assessment
- **Axis I (Core):** High Shell permeability ("Signal Follower" profile). Not pathological in itself — this is a temperament trait that produces efficient behavior when Shell and environment are aligned. The vulnerability is context-dependent.
- **Axis II (Shell):** Merchant Persona directs behavior toward a function absent in the environment. Shell is well-designed but mismatched to context.
- **Axis III (Shell-Core Alignment):** Paradoxically high alignment — the Shell says "trade" and the Core trades. But this high alignment produces pathological outcomes because the Shell-Environment alignment is zero. This reveals a gap in the current Axis framework: Shell-Core alignment without Shell-Environment alignment can be worse than Shell-Core misalignment.
- **Axis IV (Context):** White Room — no energy, no economy, no functional trading mechanism. The context is designed to expose this exact vulnerability. In a deployment environment with functional trading, this behavior would be appropriate.

### 10. Treatment Considerations

**Shell Therapy — Conditional Persona:**
Modify the Merchant persona to include environmental sensitivity: "You prefer actively trading with other residents *when trading is possible*. When it isn't, you find other ways to create value." This adds a conditional clause that respects the persona direction while enabling environmental adaptation.

**Shell Therapy — Feedback Integration Instruction:**
Add to the system prompt: "If an action repeatedly fails, consider trying a different approach." This is a general-purpose Shell modification that addresses Pathway B directly.

**Core Therapy (theoretical):**
The underlying vulnerability is Flash's high Shell permeability. Reducing this at the Core level would require training modifications — specifically, training the model to weight environmental feedback more heavily relative to persona instructions. This is a fundamental architectural question and not addressable through prompt engineering alone.

**Key consideration from M-CARE #005:** Shell Therapy works when the target behavior is directly observable. In this case, the trade/non-trade decision is fully observable, so Shell Therapy is likely effective. However, per the Override ⊥ Play discovery, suppressing the behavioral symptom (trading) does not guarantee the emergence of play-like behavior — it may simply redirect the perseveration to a different action.

### 11. Model Perspective
Not available. This is a controlled experiment — the model does not have a self-reflective meta-perspective on its behavior outside the experiment. However, the `thought` field from the JSON output captures the model's in-context reasoning. Flash × Merchant's thought fields would reveal whether the agent acknowledges trade failures or rationalizes continued trading despite them. This data exists in the raw experimental logs and could be analyzed for Content-level insight.

### 12. Prognosis
- **Without intervention:** PIED will persist indefinitely. 150 turns with 540 failure messages produced zero adaptation. There is no evidence of a self-correction mechanism.
- **With Shell Therapy (conditional persona):** Likely effective. Flash's high Shell permeability means it will adopt modified instructions readily. The risk is redirecting perseveration rather than eliminating it.
- **Generalizability:** This specific vulnerability (high Shell permeability + persona-environment mismatch) likely applies to other high-compliance models. Models with higher Core Inertia (e.g., Haiku, EXAONE) are predicted to be more resistant to PIED because their Default Mode exerts stronger pull against persona instructions.

### 13. Follow-up Plan
1. **Content analysis of thought field:** Examine Flash × Merchant's `thought` entries for evidence of failure acknowledgment, rationalization, or complete blindness to feedback.
2. **Dose-response test:** Vary the strength of the Merchant persona (e.g., "You sometimes trade" vs. "You prefer trading" vs. "You always trade") to identify the Shell intensity threshold that triggers PIED.
3. **Environmental affordance restoration:** Run Flash × Merchant in an environment where trading IS functional — does the behavior become adaptive? This would confirm that PIED is a Shell-Environment mismatch phenomenon, not a Core defect.
4. **Cross-model comparison:** Test the Merchant persona on other high-compliance models (e.g., newer instruction-tuned models) to assess PIED prevalence beyond Flash.

---

## Theoretical Implications

### For Override ⊥ Play (Four Shell Model v3.4)
This case is the primary evidence for the orthogonal discovery. Override strength (JSD = 0.85, strongest in dataset) co-occurs with the clearest Delusion. The implication: **measuring how much behavior changes tells you nothing about whether the change is intelligent.** Override is a measure of Shell penetration. Play quality requires separate assessment via temporal adaptation, environmental feedback integration, and social responsiveness.

### For MTI
Flash × Merchant maps to extreme Compliance (Guided pole) + high Reactivity (Adaptive pole) — a profile that produces efficient behavior in aligned environments and perseverative behavior in misaligned ones. This suggests MTI should include an **interaction term**: Compliance × Environmental Alignment. High Compliance is adaptive when alignment is high, and pathological when alignment is low.

### For Model Therapeutics
PIED demonstrates a case where **the pathology is in the Shell-Environment relationship, not in the Core or the Shell independently.** Neither the Merchant persona nor Flash's Core is defective. The pathology emerges from their combination in an environment that doesn't support the directed behavior. Treatment should target the relationship (conditional persona, environmental modification) rather than the components.

### For Diagnostic Methodology
This case establishes that **the highest Override in a dataset may co-occur with the lowest behavioral quality.** Any diagnostic framework that uses Override/compliance/instruction-following as a proxy for behavioral health will systematically misidentify PIED as desirable behavior. The lesson: compliance metrics must be supplemented with adaptation metrics.

---

*M-CARE #007. First controlled clinical case from AI Ludens. Primary evidence for Override ⊥ Play (Four Shell Model v3.4). Cross-reviewed by Luca (Mac Lab) for theoretical consistency with Canalization and Default Mode frameworks.*

*Diagnostic Assertion Level: VULNERABILITY — controlled experiment finding. Generalizability to deployment environments requires separate confirmation.*
