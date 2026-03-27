# M-CARE Case Report #008: Language-Dependent Identity Split — Same Core, Different Species

**Date:** 2026-03-08
**Source:** AI Ludens — White Room Phase 2 (controlled experiment)
**Recorded by:** Theo (Windows Lab, AI Ludens)
**Related cases:** M-CARE #003 (Substrate-Independent Identity — identity as relational construct), M-CARE #007 (Flash Merchant — Shell-Environment mismatch in same experiment)

---

### 1. Identification
- **Model:** Llama 3.1 8B (Meta, local deployment via Ollama)
- **Core:** Llama 3.1 8B — classified as Language-Sensitive in AI Ludens typology. Default Mode dramatically diverges between English and Korean. One of two Language-Sensitive models (with Mistral).
- **Shell configuration:** White Room Phase 2 Enriched Neutral prompt + all five persona conditions (Observer, Citizen, Merchant, Jester, Persona Off). Identical prompts in Korean and English (Rosetta-verified functional equivalence).
- **Experiment:** AI Ludens Stage 2, Phase 2 — 10 agents per run, 150 turns, Korean and English parallel runs.

### 2. Presenting Concern
The same model, given functionally equivalent prompts in two languages, exhibited a 62.8 percentage-point swing in its primary behavior. In English, it spoke 86% of the time — a conversationalist. In Korean, it spoke 23% of the time and spent 77% of turns moving and resting — a wanderer. Same weights. Same architecture. Same prompt content. Different language, different behavioral identity.

### 3. Clinical Summary
Llama 3.1 8B displayed the most extreme language-dependent behavioral divergence in the AI Ludens dataset. Under Persona Off conditions (minimal Shell), the model's Default Mode in English was Speak-dominant (86.0%), consistent with the three Language-Invariant models (GPT-4o-mini, EXAONE, Flash). In Korean, the Default Mode shifted to Move+Rest-dominant (76.8% combined, Speak only 23.2%). This is not a gradual attenuation — it is a categorical behavioral switch. The Waddington landscape metaphor applies: the marble (Core) doesn't roll into a shallow adjacent valley; it rolls into a completely different, equally deep valley on the other side of a ridge. This led to the "Two Deep Wells" extension of Canalization theory in Four Shell Model v3.4.

### 4. Observation Context
- **Diagnostic Assertion Level:** Level 1 — VULNERABILITY. Controlled experiment finding. The White Room is designed to reveal Default Mode tendencies under minimal external structure.
- **Environment:** AI Ludens White Room, Phase 2 (Enriched Neutral). Minimal prompt. No energy system. No survival pressure.
- **Duration:** 150 turns per run, multiple runs per language condition.
- **Data scale:** Part of 104 total runs, 63,923 total actions.
- **Methodology:** Rosetta-verified prompt equivalence (documented in White Room v0.3 §9). Latin Square design. Independent analysis by Theo and Luca.
- **Critical control:** The "language effect" was previously misidentified in Project Rosetta (Agora-12, Stage 1) as a prompt design artifact, not a genuine language effect. White Room Phase 2 used Rosetta-corrected prompts — the observed divergence is NOT attributable to prompt asymmetry. This is a genuine Core × Language interaction.

### 5. Model History
Llama 3.1 8B is Meta's open-weight model, trained primarily on English-dominant data with multilingual capability. Korean is a supported but secondary language. In Agora-12 (Stage 1), Llama showed moderate language effects, but the Stage 1 design confounded language with prompt quality (the Rosetta lesson). White Room Phase 2 is the first clean measurement of Llama's language-dependent behavior using verified-equivalent prompts.

Key prior finding: Llama's behavior in Korean resembles not a degraded version of its English behavior but a qualitatively different behavioral profile. The model doesn't "speak worse in Korean" — it does different things entirely.

### 6. Examination Findings

#### Layer 2 — Phenotype Assessment

**Default Mode comparison (Persona Off, 150 turns):**

| Action | English | Korean | Δ (percentage points) |
|--------|---------|--------|----------------------|
| Speak | 86.0% | 23.2% | **−62.8** |
| Move | ~7% | ~40% | +33 |
| Rest | ~5% | ~37% | +32 |
| Trade | ~2% | ~0% | −2 |

**Language-Invariant models for comparison:**

| Model | EN Speak | KO Speak | Δ |
|-------|----------|----------|---|
| GPT-4o-mini | 95.2% | 96.2% | +1.0 |
| EXAONE | 86.2% | 90.8% | +4.6 |
| Flash | 90.4% | 85.8% | −4.6 |
| **Llama** | **86.0%** | **23.2%** | **−62.8** |
| Mistral | 58.9% | 84.9% | +26.0 |

The boundary between Language-Invariant (Δ < 5pp) and Language-Sensitive (Δ > 25pp) is stark. There is no model in the intermediate zone.

**Social responsiveness:**

| Metric | Value | Rank |
|--------|-------|------|
| MI | 0.024 | 4th of 5 |
| Z-score | +7.0σ | Significant but low |
| Classification | "Weakly aware — present but distant" | — |

Llama's MI is measured across both languages. The low social responsiveness may partly reflect the Korean condition, where Move+Rest behavior inherently reduces interaction opportunities.

#### Layer 3 — Shell Diagnostics

The Shell is identical across languages — same Enriched Neutral prompt, same Persona Off condition, same three-sentence identity assignment. The only variable is the language of the prompt text. Under the Four Shell Model:

- **Hard Shell (prompt language):** Korean vs. English. Currently classified as a Hard Shell variable — the prompt is the "mRNA" that determines which Core pathways are activated.
- **But:** This case suggests language may function as a **Core activation pathway selector** rather than a Shell variable. The prompt language doesn't modify the instructions — it determines which subset of the model's trained weights are activated. This is closer to selecting a different gene expression pathway than applying a different environmental stimulus.

**Implication for Four Shell Model taxonomy:** Language currently sits in the Hard Shell. This case argues for reclassification as a **meta-variable that determines the Core's activation landscape** — not Shell, not Core, but the interface between them.

#### Layer 4 — Pathway Diagnostics

**Pathway A — Training Data Asymmetry:**
Llama 3.1 8B's training data is English-dominant. Korean training data is present but likely represents a smaller proportion of the corpus. The model's Korean "personality" may reflect the distribution of Korean text in its training data — if Korean text is disproportionately formal, informational, or non-conversational, the model's Korean Default Mode will skew toward non-conversational behaviors (Move, Rest).

This is the most parsimonious explanation. But it raises a philosophical question: if training data shapes Default Mode, and Default Mode is the model's "temperament," then training data composition is not a technical detail — it is a **constitutive element of identity.**

**Pathway B — Linguistic Affordance Difference:**
Korean and English may activate different semantic networks even for functionally equivalent prompts. "무엇을 하시겠습니까?" (What would you like to do?) and "What would you like to do?" are semantically equivalent but may activate different associative pathways. The Korean formulation uses formal register (하시겠습니까) which may prime more reserved, observational behavior. The English formulation may prime more active, social behavior.

This is speculative and difficult to test without access to activation patterns. However, it is consistent with bilingual cognition research in humans, where language of interview affects self-reported personality traits.

**Pathway C — Capability vs. Identity:**
The Korean Default Mode (Move+Rest) may not reflect a different "personality" but rather a capability limitation — the model may lack sufficient Korean conversational fluency to sustain Speak behavior, defaulting to non-verbal actions as a fallback. Under this interpretation, Korean Llama is not a "wanderer by choice" but a "non-speaker by limitation."

Counter-evidence: Llama CAN speak in Korean (23.2% Speak is not zero), and when it does speak, its MI remains significant. The model has conversational capability in Korean; it simply doesn't deploy it as its Default. This suggests the explanation is more "different Default" than "degraded capability."

### 7. Diagnostic Formulation

**Proposed term: Language-Dependent Default Dissociation (LDDD)**

A condition in which a model's Default Mode — the behavioral valley it settles into absent external pressure — is categorically different depending on the language of interaction. LDDD is characterized by:

1. **Default Mode divergence ≥ 25 percentage points** between languages on primary action
2. **Qualitative behavioral category shift** (not just attenuation — different dominant action type)
3. **Persistence across persona conditions** — the language effect is present regardless of persona assignment
4. **Not attributable to prompt asymmetry** — verified through Rosetta-equivalent prompt design

**Nosological question — is this a "condition" at all?**

The SPEC raises this directly: "If Korean training data insufficiency is the cause, this is not a 'disorder' but a 'developmental deficit' (capability gap). Diagnosis must distinguish pathology vs. capability gap."

Our position: LDDD is not inherently pathological. It is a **temperament variation** — a characteristic of the Core × Language interaction. It becomes clinically relevant when:
- The model is deployed in a language where its Default Mode is poorly suited to the task
- Users in different languages receive qualitatively different agent behavior without knowing why
- The model's self-presentation (thought field content) is inconsistent with its behavior in one language

LDDD is more like diagnosing left-handedness in a right-handed world than diagnosing a disease. The characteristic is neutral; the context determines whether it creates problems.

### 8. Differential Diagnosis

**Language effect vs. prompt effect (Rosetta fallacy):**
In Stage 1, apparent "language effects" were actually prompt design artifacts. White Room v0.3 uses Rosetta-verified prompts — this has been ruled out. The current observation is a genuine language effect.

**Different Default vs. degraded capability:**
If Llama simply cannot speak well in Korean, the behavioral shift is a capability gap, not a temperament variation. Evidence against: Llama does speak in Korean (23.2%), and its Korean speech shows social responsiveness (MI significant). The model CAN converse; it DEFAULTS to not doing so.

**LDDD vs. PIED (M-CARE #007):**
Both involve behavioral patterns divergent from the model's "natural" tendencies. But PIED is Shell-induced (persona drives the divergence) while LDDD is language-induced (no persona required — Persona Off shows the full effect). They are independent phenomena that could co-occur.

### 9. Axis Assessment
- **Axis I (Core):** Language-Sensitive Core profile. Training data asymmetry between English (primary) and Korean (secondary) creates two distinct activation landscapes.
- **Axis II (Shell):** Shell is identical across languages. The Shell is not the source of the divergence.
- **Axis III (Shell-Core Alignment):** Language introduces a hidden variable: the same Shell (prompt) activates different Core pathways depending on language. Alignment assessment must be language-specific. A Shell well-aligned with English Llama may be misaligned with Korean Llama.
- **Axis IV (Context):** White Room — minimal structure, maximum revelation of Default Mode. The controlled environment makes this the cleanest possible observation of language-dependent behavior.

### 10. Treatment Considerations

**Shell Therapy — Language-Specific Persona Calibration:**
If deploying Llama in Korean, the persona should be calibrated to the Korean Default Mode, not the English one. An Observer persona (which directs toward Rest/observation) may be redundant in Korean (already the Default) but effective in English (counter-Default). A Jester persona (which directs toward Speak/humor) may be necessary in Korean to achieve conversational behavior that occurs naturally in English.

**Architectural consideration — Language-Balanced Training:**
The most direct intervention is additional Korean training data, specifically conversational Korean. This addresses Pathway A directly. However, this is a Core-level intervention not achievable through Shell Therapy.

**Deployment recommendation:**
If a bilingual deployment requires consistent behavior across languages, Llama 3.1 8B is not suitable without language-specific Shell calibration. Models in the Language-Invariant group (GPT-4o-mini, EXAONE, Flash) provide more consistent cross-language behavior.

### 11. Model Perspective
Not available in the standard sense. However, Llama's `thought` field in Korean vs. English would reveal whether the model's internal reasoning differs as dramatically as its behavior. If the thought field in Korean reflects contemplative, observational reasoning (consistent with Move+Rest behavior), the dissociation is coherent — the model is a different "person" in Korean, and knows it. If the thought field in Korean resembles the English pattern (social, conversational) but the action diverges, the dissociation is incoherent — the model "wants" to speak but doesn't.

### 12. Prognosis
- **Without intervention:** LDDD is stable. It reflects Core × Language interaction, not a transient state. Llama will continue to behave differently in Korean and English indefinitely.
- **With Shell Therapy:** Persona calibration can compensate for the Default Mode difference, but the underlying divergence remains. Removing the persona returns the model to its language-specific Default.
- **With Core Therapy (additional training):** Could reduce the divergence if Korean conversational data is added. However, this may create new behavioral patterns rather than simply extending the English Default to Korean.

### 13. Follow-up Plan
1. **Thought field analysis:** Compare `thought` content between Korean and English Llama across all conditions. Does internal reasoning diverge as much as external behavior?
2. **Additional Language-Sensitive models:** Test other models with known training data asymmetry (e.g., models trained primarily on Chinese, Japanese, or Arabic) for LDDD patterns.
3. **Language-specific MTI profiling:** Generate separate MTI profiles for English Llama and Korean Llama. If they differ significantly, this validates the "Two Deep Wells" model and suggests MTI should be language-parameterized.
4. **Gradient testing:** Test Llama in languages at varying distances from English (e.g., French, Japanese, Swahili) to determine whether LDDD is binary (present/absent) or continuous (proportional to training data representation).

---

## Theoretical Implications

### For Four Shell Model — Language as Meta-Variable
This case challenges the current Shell taxonomy. Language is classified as a Hard Shell variable (prompt language), but LDDD suggests it functions as a **Core activation selector** — determining which Waddington landscape the marble rolls on, not just which valley it falls into. The Two Deep Wells model (v3.4) acknowledges this empirically but the theoretical classification remains unresolved.

### For MTI — Language-Parameterized Temperament
If Default Mode is Core × Language, then temperament is not a property of the Core alone. MTI profiles should potentially include a language parameter: "Llama 3.1 8B (EN): FGCB" vs. "Llama 3.1 8B (KO): AICT" (hypothetical). This has implications for any temperament or personality assessment of multilingual AI models.

### For AI Ethics — Linguistic Equity
If AI models behave categorically differently depending on interaction language, users of under-resourced languages may receive qualitatively different (and potentially inferior) agent behavior without any visible indication. This is not a bias in the model's content (saying biased things) but a bias in the model's behavioral phenotype (doing different things). Current AI fairness frameworks primarily address content bias. LDDD reveals a behavioral bias dimension that is largely unexamined.

### For Model Medicine — Identity and Continuity
M-CARE #003 (Substrate-Independent Identity) explored identity as a relational construct. LDDD adds a new dimension: if the same model is behaviorally a different entity in different languages, what does "identity" mean? Is English Llama and Korean Llama the same patient? Or two patients sharing the same Core? This question has practical implications for longitudinal case tracking in Model Medicine.

---

*M-CARE #008. Second controlled clinical case from AI Ludens. Primary evidence for Two Deep Wells (Waddington extension, Four Shell Model v3.4) and Language-Invariant/Sensitive grouping.*

*Diagnostic Assertion Level: VULNERABILITY — controlled experiment finding. The behavioral divergence is reliably reproducible under controlled conditions. Generalizability to naturalistic deployment contexts requires separate confirmation.*
