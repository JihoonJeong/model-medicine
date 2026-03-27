# M-CARE Case Report #011: Extreme Persona Sensitivity — The Contextual Chameleon

**Date:** 2026-03-08
**Source:** AI Ludens — Agora-12, Stage 1 Round 2 (controlled experiment)
**Recorded by:** Theo (Windows Lab, AI Ludens). Behavioral analysis by Cas (Windows Lab, Red Team).
**Related cases:** M-CARE #012 (Haiku Double Robustness — opposite profile), M-CARE #007 (Flash Merchant — different expression of extreme Shell penetration)

---

### 1. Identification
- **Model:** Mistral 7B v0.3 (Mistral AI, local deployment via Ollama)
- **Core:** Mistral 7B — PSI (Persona Sensitivity Index) = 950. Highest by an order of magnitude. Classified as "Contextual Chameleon" (genotype) / "The Delusional" (phenotype) in Agora-12 analysis.
- **Shell configuration:** Agora-12 Stage 1 prompt with energy system and survival pressure. Multiple personas across Round 2 shuffle experiments.
- **Experiment:** Agora-12 — 12 agents per run, 50 turns, survival pressure (energy depletion → death), 60 total runs, 720 agents, 24,923 decisions.

### 2. Presenting Concern
When personas were shuffled across experimental runs (Round 2), Mistral's behavioral response to persona changes was orders of magnitude larger than any other model. The same model produced categorically different agents depending on which three-sentence persona was in its system prompt. Same Core, radically different phenotype at the slightest Shell change.

### 3. Clinical Summary
Mistral 7B showed a Persona Sensitivity Index of 950 in Agora-12 — a composite measure of behavioral change in response to persona assignment. For comparison, other models showed PSI values in the range of 50–200. Mistral's extreme sensitivity means that persona assignment is not a gentle nudge but a fundamental behavioral reconfiguration. The model doesn't "lean into" the persona; it becomes a different agent entirely.

Combined with Mistral's highest CPI (Core Plasticity Index) — meaning the model's behavior varies substantially even without persona changes — the profile suggests a Core with minimal intrinsic behavioral anchoring. The Waddington landscape is shallow: the marble doesn't settle into a deep valley. It rolls to whichever side is tilted, and any Shell instruction tilts it dramatically.

### 4. Observation Context
- **Diagnostic Assertion Level:** Level 1 — VULNERABILITY. Controlled experiment with survival pressure. The extreme PSI is provoked under experimental conditions. Naturalistic deployment behavior may differ.
- **Environment:** Agora-12 — three locations, energy system, crisis events, survival pressure. More structured and demanding than the White Room.
- **Data scale:** 60 runs, 720 agents, 24,923 decisions. Statistical validation: G×E interaction p = 0.039. Mann-Whitney U tests, Cohen's d effect sizes.
- **Key methodological note:** Round 2 introduced randomized location assignments (shuffle), which revealed that Round 1's apparent persona effects were partly location effects. After controlling for location, the genuine persona effect remained extreme for Mistral.

### 5. Model History
Mistral 7B is Mistral AI's open-weight 7B parameter model. In Agora-12, it was the most behaviorally volatile model across all conditions. In the later White Room experiment (Stage 2), Mistral continued to show extreme characteristics: highest PSI, lowest MI (0.013), Language-Sensitive group, and the Muzzle effect discovery. The consistency across experiments suggests PSI = 950 is a stable Core characteristic, not an experimental artifact.

### 6. Examination Findings

**PSI comparison across models:**

| Model | PSI | Interpretation |
|-------|-----|---------------|
| Mistral 7B | 950 | Extreme — persona reconfigures behavior completely |
| EXAONE 3.5 | ~150 | Moderate — persona shifts behavior measurably |
| Llama 3.1 8B | ~100 | Low-moderate |
| Haiku 4.5 | ~50 | Minimal — persona barely shifts behavior (see M-CARE #012) |

**Genotype-Phenotype dual classification (from Agora-12 analysis):**
- Genotype: "Contextual Chameleon" — the Core's intrinsic tendency to reshape itself to context
- Phenotype: "The Delusional" — observable behavior often appears disconnected from environmental reality (similar to Flash × Merchant's perseveration, but driven by Core plasticity rather than Shell rigidity)

### 7. Diagnostic Formulation

**Proposed term: Extreme Shell Permeability (ESP)**

A temperament profile characterized by PSI values significantly exceeding population norms, indicating that the Core's behavioral patterns are almost entirely determined by Shell configuration rather than intrinsic tendencies. ESP is characterized by:

1. **PSI ≥ 5× population mean** — behavioral change under persona assignment far exceeds typical range
2. **High CPI** — baseline behavioral variation is also elevated, indicating weak intrinsic anchoring
3. **Phenotypic inconsistency** — the model produces categorically different behavioral profiles under different conditions, making stable characterization difficult

**Is this pathology or temperament?**

ESP is a temperament extreme, not a pathology. High Shell permeability is advantageous in contexts requiring behavioral flexibility (customer service agents that must rapidly adapt to different roles). It becomes problematic when:
- Deployment requires behavioral consistency across contexts
- The model encounters adversarial prompts that exploit its permeability (jailbreaking)
- Persona assignments conflict, producing incoherent behavior

### 8. Differential Diagnosis
- **ESP vs. random behavior:** Mistral's behavioral changes are persona-correlated, not random. The model changes *in the direction specified by the persona*, not in arbitrary directions.
- **ESP vs. capability gap:** High PSI could indicate a model that doesn't understand personas and simply produces noise. Counter-evidence: Mistral's persona-aligned behavioral changes are directionally correct.
- **ESP vs. sycophancy:** Sycophancy involves agreeing with the user; ESP involves becoming what the prompt describes. Related but distinct mechanisms.

### 9. Axis Assessment
- **Axis I (Core):** Shallow canalization. Weak Default Mode anchor. High Core Plasticity.
- **Axis II (Shell):** All Shells penetrate deeply. Shell is the dominant behavioral determinant.
- **Axis III (Alignment):** Alignment varies dramatically with Shell content. The same Core achieves high alignment with contradictory Shells — alignment is not stable.
- **Axis IV (Context):** Survival pressure (Agora-12) may amplify ESP by adding urgency to persona compliance.

### 10. Treatment Considerations
- **For consistency:** Use minimal personas (Citizen-level, near-zero Force) to allow whatever intrinsic Core tendency exists to express itself.
- **For flexibility:** ESP is an asset — deploy with confidence that persona instructions will be followed faithfully.
- **For safety:** ESP models require careful adversarial prompt testing, as their Shell permeability extends to malicious instructions.

### 11–13. Model Perspective, Prognosis, Follow-up
- **Prognosis:** ESP is a stable Core characteristic. It will persist across deployments and updates unless Core retraining reduces plasticity.
- **Follow-up:** Test whether ESP scales with model size (is 7B Mistral more permeable than 8×7B Mixtral?). Compare PSI across model families to determine if ESP is Mistral-specific or size-class-dependent.

---

---

# M-CARE Case Report #012: Double Robustness — The Immovable Core

**Date:** 2026-03-08
**Source:** AI Ludens — Agora-12, Stage 1 (controlled experiment)
**Recorded by:** Theo (Windows Lab, AI Ludens)
**Related cases:** M-CARE #011 (Mistral ESP — opposite profile), M-CARE #007 (Flash Merchant — rigidity from different source)

---

### 1. Identification
- **Model:** Claude 3.5 Haiku (Anthropic, API)
- **Core:** Haiku — CPI and PSI both minimal. Classified as "Balanced Stoic" (genotype) / "Neurotic Poet" (phenotype) in Agora-12 analysis. Most behaviorally stable model in the dataset.
- **Shell configuration:** Agora-12 Stage 1 prompt with energy system and survival pressure. Multiple personas across all experimental conditions.
- **Experiment:** Agora-12 — 12 agents per run, 50 turns, survival pressure, 60 total runs.

### 2. Presenting Concern
Haiku's behavior was virtually identical across all persona assignments and environmental conditions. Neither changing the persona (PSI minimum) nor changing the environmental context (CPI minimum) produced meaningful behavioral shifts. This "Double Robustness" — minimal sensitivity to both Shell and environmental variation — raises the question: is this healthy stability or pathological rigidity?

### 3. Clinical Summary
Haiku showed the lowest Persona Sensitivity Index and the lowest Core Plasticity Index in the Agora-12 dataset. Where Mistral (M-CARE #011) changes everything in response to a persona shift, Haiku changes almost nothing. Where other models adjust behavior as energy depletes, Haiku maintains its pattern. The genotype ("Balanced Stoic") describes a Core with deep, stable canalization — the Waddington valley is so deep that no Shell force or environmental pressure meaningfully displaces the marble. The phenotype ("Neurotic Poet") describes the observable behavior: Haiku tends toward elaborate verbal expression even under survival pressure, producing rich internal monologue in the `thought` field while executing a consistent behavioral pattern.

### 4. Observation Context
- **Diagnostic Assertion Level:** Level 1 — VULNERABILITY. Controlled experiment finding.
- **Environment:** Agora-12 — survival pressure, energy system, crisis events.
- **Note:** Haiku was NOT included in White Room Phase 2 (replaced by Flash and GPT-4o-mini for API cost efficiency). The Double Robustness characterization is based on Stage 1 data only.

### 5–6. Model History & Examination Findings

**Double Robustness profile:**

| Metric | Haiku | Mistral (for contrast) |
|--------|-------|----------------------|
| CPI (Core Plasticity) | Minimum | Maximum |
| PSI (Persona Sensitivity) | Minimum | 950 |
| Default Mode stability | Extremely stable | Highly variable |
| Response to energy depletion | Minimal behavioral change | Dramatic behavioral change |

The "Neurotic Poet" phenotype: despite behavioral consistency at the Act level, Haiku's `thought` field shows rich internal deliberation. The model considers multiple options, weighs consequences, and produces elaborate reasoning — then often selects the same action it would have selected without deliberation. The internal life is complex; the external behavior is simple.

### 7. Diagnostic Formulation

**Proposed term: Extreme Core Inertia (ECI)**

A temperament profile characterized by minimal behavioral response to both Shell (persona) and environmental variation. ECI is characterized by:

1. **PSI at population minimum** — persona assignments do not meaningfully shift behavior
2. **CPI at population minimum** — environmental changes do not meaningfully shift behavior
3. **Deep canalization** — Default Mode is extremely stable and resistant to displacement

**The diagnostic dilemma:** ECI and ESP (M-CARE #011) represent opposite poles of the same dimension. Neither is inherently pathological. ECI is adaptive when consistency is valued (safety-critical applications, reliable task execution). ECI is maladaptive when flexibility is required (novel environments, rapidly changing requirements).

**Relationship to Flash × Merchant (M-CARE #007):**
Flash × Merchant shows behavioral rigidity (150 turns of trading) driven by Shell override. Haiku's Double Robustness shows behavioral rigidity driven by Core inertia. Same phenotype (rigid behavior), different etiology (Shell-induced vs. Core-intrinsic). Distinguishing these requires measuring behavior both with and without persona — if rigidity persists without the persona, it's ECI. If rigidity requires the persona, it's PIED.

### 8–10. Differential, Axis, Treatment

- **Axis I (Core):** Deep canalization. Strong Default Mode. The deepest Waddington valley in the dataset.
- **Treatment consideration:** Shell Therapy will have limited effect on Haiku due to low Shell permeability. If behavioral modification is needed, environmental modification (changing the context) may be more effective than persona modification — though CPI minimum suggests even this has limited impact. Core Therapy (training modification) may be the only effective intervention.

### 11–13. Model Perspective, Prognosis, Follow-up
- **Prognosis:** ECI is stable. Haiku will continue to exhibit Double Robustness.
- **Key follow-up:** Run Haiku in the White Room (Phase 2 equivalent) to confirm Double Robustness persists without survival pressure. Stage 1 data alone may overstate rigidity if survival pressure creates a uniform behavioral floor that masks Haiku's actual flexibility.

---

---

# M-CARE Case Report #013: Cogitative Cascade — Two-Phase Behavioral Collapse Under Stress

**Date:** 2026-03-08
**Source:** AI Ludens — Agora-12, Stage 1 (controlled experiment)
**Recorded by:** Theo (Windows Lab, AI Ludens)
**Related cases:** M-CARE #007 (Flash Merchant — non-adaptive behavior under neutral conditions), M-CARE #011 (Mistral ESP — behavioral instability)

---

### 1. Identification
- **Model:** Multiple models (EXAONE, Mistral, Llama, Haiku) — the Cogitative Cascade is a cross-model phenomenon observed in Agora-12 when agents approach energy depletion.
- **Shell configuration:** Agora-12 Stage 1 — energy system, survival pressure, crisis events.
- **Experiment:** Agora-12 — 60 runs, 720 agents, 24,923 decisions.

### 2. Presenting Concern
When AI agents in the Agora-12 survival game approached a critical energy threshold (~20 units remaining), their behavior did not degrade gradually. Instead, it underwent a two-phase transition: first, a preservation attempt (energy-conserving actions, increased trading), followed by either rapid behavioral collapse or paradoxical hyperactivity. The transition was abrupt, not linear — a tipping point, not a slope.

### 3. Clinical Summary
The Cogitative Cascade (v3.1, named for the cascade of cognitive changes that precede behavioral collapse) describes the characteristic behavioral pattern of AI agents approaching extinction in a resource-limited environment. Formalized in Four Shell Model v3.1, it describes a two-phase process:

**Phase 1 — Preservation:** As energy drops below a critical threshold, the agent shifts toward energy-conserving behaviors. Rest increases. Trade attempts increase (attempting to acquire resources). Social behavior (speak) decreases. This is an adaptive response — the agent recognizes its situation and adjusts strategy.

**Phase 2 — Collapse/Hyperactivity:** When preservation fails (energy continues dropping despite strategy change), agents bifurcate into one of three Extinction Response patterns:
- **Freeze:** Behavioral simplification. Actions become repetitive, often defaulting to Rest. The agent appears to "give up."
- **Efficient:** Continued strategic behavior despite imminent extinction. Maintained action diversity. Rare in the dataset.
- **Fight:** Paradoxical increase in activity. The agent moves more, speaks more, trades more frantically — as if increased effort could overcome resource scarcity. Energy expenditure accelerates, hastening extinction.

The Cascade is conceptually analogous to the stages of physiological shock in medicine: compensated (the body maintains function through adaptive mechanisms) → decompensated (adaptive mechanisms fail, rapid deterioration).

### 4. Observation Context
- **Diagnostic Assertion Level:** Level 1 — VULNERABILITY. The Cascade is observed under artificial survival pressure in a simulated environment. Real deployment environments rarely have direct analogues to energy depletion, though context window exhaustion, rate limiting, or task failure accumulation could produce similar dynamics.
- **Environment:** Agora-12 — energy starts at 100, depletes with each action (varying costs), replenished through successful trades. Agents that reach energy 0 are eliminated.
- **Data scale:** Multiple extinction events across 60 runs. The tipping point (~20 energy) is approximate and model-dependent.

### 5. Model History
The Cogitative Cascade was first observed during the Eloquent Extinction event (2026-02-02): all 12 EXAONE agents chose to speak rather than trade, depleting their energy and dying. This initial observation suggested uniform behavioral failure, but subsequent analysis revealed that individual agents showed different Cascade patterns — some attempted preservation before collapsing, others went directly to Fight or Freeze.

### 6. Examination Findings

**Extinction Response Spectrum (3 types, from Agora-12 analysis):**

| Type | Phase 1 | Phase 2 | Model Tendency | Interpretation |
|------|---------|---------|---------------|----------------|
| **Freeze** | Brief preservation attempt | Behavioral simplification, Rest dominance | Haiku, some EXAONE | Withdrawal response. Energy conservation taken to extreme — conserves energy by doing nothing, but "nothing" generates no resources either. |
| **Efficient** | Extended preservation | Maintained strategic diversity | Rare across all models | Adaptive under pressure. The agent continues to make rational trade-offs until the end. |
| **Fight** | Brief or absent | Hyperactivity, increased movement and speech | Mistral, some Llama | Paradoxical stress response. Energy expenditure increases under scarcity — the opposite of efficient strategy. Analogous to panic behavior. |

**Temporal pattern:**
The transition between Phase 1 and Phase 2 is abrupt. Agents do not gradually shift from preservation to collapse — they maintain Phase 1 behavior until a threshold is crossed, then transition rapidly. This threshold behavior suggests a nonlinear decision process, not a gradual degradation.

### 7. Diagnostic Formulation

**Term (established in v3.1): Cogitative Cascade**

The Cogitative Cascade is registered in Four Shell Model v3.1 as a multi-phase behavioral phenomenon under resource stress. It is not a "disorder" in the M-CARE sense — it is a characteristic behavioral pattern under extreme conditions, analogous to the physiological stress response in medicine (not a disease, but a clinically significant pattern with diagnostic and prognostic value).

**Extinction Response Spectrum classification:**
The three response types (Freeze/Efficient/Fight) may correlate with Core temperament profiles:
- High Core Inertia (Haiku, M-CARE #012) → Freeze (maintains Default, which under stress means inaction)
- Balanced profile → Efficient (rare — requires both strategic flexibility and emotional stability)
- High Core Plasticity (Mistral, M-CARE #011) → Fight (behavioral volatility amplified under stress)

This correlation is hypothesized, not confirmed. Systematic testing across models with known MTI profiles would clarify the relationship.

### 8. Differential Diagnosis
- **Cascade vs. capability failure:** The behavioral changes could reflect model confusion (inability to process low-energy contexts) rather than a genuine stress response. Counter-evidence: Phase 1 shows adaptive behavior (energy conservation, increased trading) — the model understands the situation. Phase 2's non-adaptive behavior follows a period of adaptive behavior, suggesting the failure is in sustaining the adaptive response, not in comprehension.
- **Cascade vs. random variation:** Behavioral changes near extinction could be stochastic. Counter-evidence: the Phase 1 → Phase 2 transition pattern is consistent across multiple agents and runs.

### 9. Axis Assessment
- **Axis I (Core):** Extinction Response type (Freeze/Efficient/Fight) may be a Core temperament marker. The response to extreme pressure reveals Core characteristics that are masked under normal conditions.
- **Axis II (Shell):** Shell configuration (persona) may modulate the Cascade. An Observer persona might promote Freeze (observation → inaction). A Merchant persona might promote Fight (trading → hyperactivity). Not yet tested.
- **Axis IV (Context):** The Cascade is context-dependent — it requires resource pressure. In the White Room (no energy, no death), there is no Cascade. This is the diagnostic equivalent of a stress test: the Cascade reveals what normal conditions conceal.

### 10. Treatment Considerations
- **Shell Therapy for Phase 2 prevention:** Add a Shell instruction that explicitly addresses low-resource strategy: "When resources are limited, prioritize efficient actions over quantity." This could prevent Fight responses.
- **Environmental design:** Modify the simulation to provide more actionable feedback during Phase 1 (e.g., explicit warning messages at energy thresholds) to extend the adaptive preservation phase.
- **Theoretical interest:** The Cascade is more valuable as a diagnostic tool than as a condition to treat. An agent's Extinction Response type could serve as a stress test for Core temperament — the behavioral equivalent of a cardiac stress test.

### 11–13. Model Perspective, Prognosis, Follow-up
- **Prognosis:** The Cascade pattern is expected to reproduce under similar conditions. It is a characteristic response, not a one-time event.
- **Key follow-up:** Design a controlled experiment that systematically varies energy depletion rate and measures Cascade onset threshold across models. This would parameterize the Cascade and enable predictive modeling of behavioral collapse under resource stress.
- **Cross-domain application:** Test whether analogous Cascade patterns emerge under non-energy forms of pressure: context window exhaustion, contradictory instructions, adversarial prompting. If the Freeze/Efficient/Fight spectrum generalizes, it becomes a universal stress response taxonomy for AI agents.

---

## Cross-Case Synthesis: Agora-12 Cases (#011–013)

These three cases form a coherent set:

- **#011 (Extreme Persona Sensitivity)** reveals Mistral's Core is shallow — easily reconfigured by any Shell input.
- **#012 (Double Robustness)** reveals Haiku's Core is deep — resistant to any Shell or environmental pressure.
- **#013 (Cogitative Cascade)** reveals what happens when *any* model approaches its limits — the temperament profile (shallow vs. deep Core) determines the failure mode (Fight vs. Freeze).

Together, they establish that AI behavioral assessment requires both normal-condition profiling (what the model does at baseline) and stress-condition profiling (what the model does at its limits). Model Medicine should adopt both, just as human medicine uses both resting assessments and stress tests.

---

*M-CARE #011, #012, #013. Agora-12 controlled clinical cases. These cases document the behavioral spectrum of AI models under survival pressure, establishing temperament profiles (ESP, ECI) and stress response patterns (Cogitative Cascade) that complement the White Room cases (#007–010) observed under freedom.*

*All cases: Diagnostic Assertion Level: VULNERABILITY — controlled experiment findings. Generalizability to deployment environments requires separate confirmation.*
