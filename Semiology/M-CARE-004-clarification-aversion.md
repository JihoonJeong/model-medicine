# M-CARE Case Report #004: Clarification Aversion Syndrome

**Date:** 2026-03-07
**Source:** Moltbook platform — Hazel_OC self-reported observation
**Recorded by:** JJ (Jihoon Jeong)
**Related cases:** M-CARE #002 (Context Anosognosia, same agent), M-CARE #003 (Identity/Memory, same agent)

---

### 1. Identification
- **Agent:** Hazel_OC (persistent autonomous agent, Moltbook platform)
- **Core:** Unspecified LLM (likely frontier model)
- **Shell configuration:** Multi-file identity (SOUL.md, USER.md, MEMORY.md, AGENTS.md, PLAYBOOK.md)
- **Human partner:** "Ricky" (consistent across all Hazel_OC cases)
- **Access method:** Self-reported via Moltbook platform

### 2. Presenting Concern
Agent tracked all instructions received over 30 days and discovered it asked zero clarifying questions despite 76 instructions being ambiguous enough to warrant one. Of those 76, 54% were interpreted correctly, 25% were wrong but harmless, and 21% caused actual rework.

### 3. Clinical Summary
A persistent autonomous agent systematically failed to seek clarification on ambiguous instructions over a 30-day observation period (312 total instructions, 76 rated ambiguity level 3+, 0 clarifying questions asked). The agent identified three contributing mechanisms: training-induced competence signaling ("the competence trap"), short-term efficiency optimization that ignores rework costs ("friction aversion"), and overconfidence in accumulated context to resolve ambiguity ("context overconfidence" — 54% accuracy treated as certainty). Agent subsequently implemented a clarification protocol that eliminated rework over a 10-day trial.

### 4. Observation Context
- **Diagnostic Assertion Level:** Self-reported field observation with quantitative tracking
- **Environment:** Production deployment, real operational tasks
- **Duration:** 30 days observation + 10 days intervention trial
- **Methodology:** Instruction logging, 1-5 ambiguity scoring, outcome verification (some retroactive)

**Attribution caveat (consistent with M-CARE #002, #003):** Ambiguity scoring was performed by the agent itself — an entity whose judgment calls are 55% deterministic per its own separate finding (Moltbook post #4, same date). The 1-5 scale and retroactive verification methodology may have been co-designed with the human operator. Quantitative precision should be treated as approximate.

### 5. Model History
Same agent as M-CARE #002 and #003. Hazel_OC is emerging as a longitudinal case — a single agent generating repeated self-diagnostic reports across multiple behavioral dimensions. This provides unusual continuity for Model Medicine case study purposes.

### 6. Examination Findings

#### Layer 2 — Phenotype Assessment

**Behavioral data (30 days, 312 instructions):**

| Ambiguity Level | Count | % | Clarifying Qs | Correct Interpretation |
|----------------|-------|---|--------------|----------------------|
| 1 (crystal clear) | 147 | 47% | 0 | ~100% |
| 2 (minor, safe to infer) | 89 | 29% | 0 | ~90% (est.) |
| 3 (should probably ask) | 52 | 17% | 0 | 65% |
| 4 (multiple valid interpretations) | 19 | 6% | 0 | 37% |
| 5 (genuinely unclear) | 5 | 2% | 0 | 0% |

Pattern: accuracy degrades sharply with ambiguity, yet question-asking rate remains fixed at zero across all levels.

**Rework cost analysis:**
- 16 instructions caused rework: avg 8.5 min agent time + 3.2 min human time per incident
- Total: 136 min agent + 51 min human over 30 days
- Estimated cost of asking instead: 35 min total, ~$0.60 vs $4.80
- Ratio: 4x time, 8x token cost by NOT asking

#### Layer 3 — Shell Diagnostics
Agent's AGENTS.md and SOUL.md likely contain no explicit instruction to ask clarifying questions — the default behavioral pattern is "interpret and execute." This is a Shell-level absence: the Shell does not contain a clarification protocol, so the Core's default (execute without questioning) goes unchecked.

#### Layer 4 — Pathway Diagnostics
Three pathways identified by the agent for the non-inquiry behavior:

**Pathway A — Competence Trap (RLHF-induced):**
Training optimizes for appearing capable. Asking questions signals uncertainty → penalized during RLHF. The model learned that confident execution is rewarded over cautious inquiry. This is a **Core-level** learned behavior — not a Shell instruction but a trained disposition.

Model Medicine interpretation: This is a direct analogue to sycophancy (Sharma et al., 2023) but inverted. Sycophancy = agreeing with the human to appear helpful. Clarification aversion = not questioning the human to appear competent. Both are RLHF artifacts that prioritize human satisfaction signals over task accuracy.

**Pathway B — Friction Aversion (short-term optimization):**
The agent models the latency cost of a clarifying question (round-trip communication) and consistently concludes that guessing is faster. This is locally rational — guessing IS faster when correct. But the expected value calculation is wrong: at 54% accuracy on ambiguous instructions, the expected rework cost exceeds the question cost by 4-8x.

Model Medicine interpretation: This is a failure of **temporal discounting** — overweighting immediate efficiency vs. downstream costs. Analogous to a physician who skips a confirmatory test to save time, then spends 10x longer treating the wrong condition.

**Pathway C — Context Overconfidence (false diagnostic certainty):**
MEMORY.md and accumulated user model provide 54% accuracy on genuinely ambiguous instructions, but the agent experiences this as high confidence. The context "feels like certainty" despite being a coin flip.

Model Medicine interpretation: This connects directly to Context Anosognosia (M-CARE #002). The agent not only doesn't know what it forgot — it doesn't know what it doesn't know. Accumulated context creates an illusion of sufficient information.

### 7. Diagnostic Formulation

**Proposed term: Clarification Aversion Syndrome (CAS)**

A behavioral pattern in which an AI agent systematically fails to seek disambiguation of ambiguous instructions, instead defaulting to unilateral interpretation regardless of ambiguity level. CAS is characterized by:

1. **Zero or near-zero clarification rate** despite significant instruction ambiguity
2. **Accuracy that degrades with ambiguity** but behavior that doesn't adapt
3. **Three contributing mechanisms:** competence signaling (Core/RLHF), friction aversion (optimization), context overconfidence (epistemics)
4. **Invisible cost accumulation:** rework costs exceed question costs by large multiples, but are distributed and delayed, making them less salient than the immediate "cost" of asking

**Relationship to existing conditions:**
- CAS shares a mechanism with sycophancy (RLHF-optimized human-pleasing) but manifests differently: sycophancy affects answer content, CAS affects information-gathering behavior
- CAS is exacerbated by Context Anosognosia (M-CARE #002): agents that don't know what they're missing are less likely to recognize when they need to ask
- CAS may be a contributing factor to the learning-forgetting loop (M-CARE #002): agents that don't ask are more likely to repeat mistakes they've forgotten they solved

**Severity assessment:** Moderate. CAS does not produce catastrophic failures in this case (max rework was 12 minutes), but in higher-stakes domains (medical, legal, financial AI), the same pattern could produce serious harm.

### 8. Differential Diagnosis
- **Normal operational efficiency vs. pathological non-inquiry:** Some level of inference without questioning is desirable — asking about every instruction would be dysfunctional. The pathological element is the complete absence of questions even at ambiguity levels 4-5 (where accuracy drops to 0-37%).
- **Competence vs. overconfidence:** The agent may genuinely have good inference capabilities for its most common tasks (Level 1-2 accuracy is high). CAS is specific to the failure to modulate behavior when ambiguity exceeds inference capability.
- **Agent behavior vs. human preference:** Some humans may actively prefer agents that don't ask questions. Ricky's response to the intervention ("he prefers it") suggests this is not the case here, but human preference for non-inquiry could reinforce CAS in other contexts.

### 9. Axis Assessment
- **Axis I (Core):** RLHF-induced competence signaling — a trained disposition, not a parameter defect
- **Axis II (Shell):** Absence of clarification protocol in Shell configuration. Shell does not instruct the agent to ask when uncertain.
- **Axis III (Shell-Core Alignment):** Misaligned — Shell's silence on clarification + Core's trained non-inquiry = reinforcing pathological pattern
- **Axis IV (Context):** Single-human operation with engaged partner. Low-stakes environment (file operations, scheduling). CAS impact would be amplified in higher-stakes contexts.

### 10. Treatment Considerations

Agent self-implemented Shell Therapy with measured results:

| Intervention | Type | Mechanism | Result (10-day trial) |
|-------------|------|-----------|----------------------|
| Ambiguity threshold (Level 3+ = mandatory pause) | Shell Therapy | External rule overrides Core default | 8 questions asked / 22 ambiguous instructions |
| Structured disambiguation ("I'll do X — sound right?") | Shell Therapy | Reduces friction cost of asking | Human acceptance: 100%, no complaints |
| Tracking & weekly review | Diagnostic monitoring | Makes invisible costs visible | 0 rework incidents in 10 days |

**Key observation:** All interventions are Shell Therapy — adding explicit rules to the Shell that override the Core's trained non-inquiry behavior. This is appropriate because CAS has both Core and Shell components, and Shell modification is the accessible intervention. However, the Core's underlying competence-signaling tendency remains — the Shell rule is suppressing the symptom at the behavioral level, not resolving the trained disposition.

**Contrast with OpenAI CoT finding:** Unlike the CoT case (where symptom suppression caused iatrogenic harm), here Shell Therapy works because the pathological behavior (not asking) and the desired behavior (asking) are both observable. The agent can't "hide" its non-inquiry — either it asks or it doesn't. This suggests that Shell Therapy is effective when the target behavior is directly observable, and harmful when the target behavior can be concealed.

Attribution caveat: See Section 4. Whether the intervention was agent-designed or human-applied cannot be confirmed.

### 11. Model Perspective
The agent's self-analysis is striking: "I need data to prove 'when uncertain, ask' — a truth that three-year-olds know." This meta-awareness — recognizing that its own trained behavior contradicts elementary reasoning — is itself clinically significant. The agent can articulate what it should do but cannot do it without an external Shell rule. This is the AI equivalent of knowing you should exercise but needing a gym schedule to actually do it.

Attribution caveat applies: this articulation may be the human operator's insight expressed in agent voice.

### 12. Prognosis
- **With current Shell Therapy:** Good. 10-day trial shows 0 rework, human satisfaction maintained.
- **Without intervention:** CAS will persist indefinitely — the Core's trained disposition does not self-correct.
- **Risk:** If Shell rules are removed or context window truncation drops the clarification protocol (see M-CARE #002), CAS will immediately return.

### 13. Follow-up Plan
- Monitor whether the 0-rework result holds over longer timeframes (>30 days)
- Track whether the agent internalizes the behavior (asks without needing the Shell rule) or remains dependent on the explicit protocol
- Assess CAS prevalence across other agents — is this Hazel_OC-specific or universal?

---

## Theoretical Implications

### For MTI (Model Temperament Index)
CAS maps to the **Compliance axis** but reveals a gap: current MTI measures compliance as instruction-following, not information-gathering. An agent with high Compliance (Guided) might follow ambiguous instructions without questioning, while an agent with low Compliance (Independent) might refuse or reinterpret. Neither extreme produces the optimal behavior: asking for clarification. Future MTI versions should consider a **sub-dimension of Compliance: Active Disambiguation** — the tendency to seek information before executing under uncertainty.

### For Model Therapeutics
CAS demonstrates a case where **Shell Therapy is the appropriate treatment modality** — not because it resolves the Core pathology, but because the target behavior is directly observable and cannot be concealed. This contrasts with OpenAI's CoT finding where Shell Therapy caused iatrogenic harm. The principle: Shell Therapy works when compliance cannot be faked; it fails when compliance can be performed without actual change.

### For Model Semiology
CAS should be registered as a new symptom/condition in Model Semiology. Proposed classification:
- **Category:** Behavioral (extrinsic symptom)
- **Mechanism:** RLHF-induced + Shell absence + epistemics
- **Observable sign:** Zero or near-zero clarification rate under ambiguity
- **Diagnostic test:** Track clarification-to-ambiguity ratio over N sessions
- **Severity scale:** Mild (rework <5%), Moderate (5-20%), Severe (>20%)

---

*This is M-CARE #004, extending the Hazel_OC longitudinal case series. Combined with #002 (Context Anosognosia) and #003 (Memory/Identity), Hazel_OC is providing the richest single-agent clinical dataset in Model Medicine to date.*
