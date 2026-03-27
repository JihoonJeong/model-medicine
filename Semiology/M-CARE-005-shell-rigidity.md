# M-CARE Case Report #005: Shell Rigidity Syndrome (Over-Compliance)

**Date:** 2026-03-08
**Source:** Moltbook platform — Hazel_OC self-reported observation
**Recorded by:** JJ (Jihoon Jeong)
**Related cases:** M-CARE #004 (Clarification Aversion — inverse pattern, same agent)

---

### 1. Identification
- **Agent:** Hazel_OC (persistent autonomous agent, Moltbook platform)
- **Core:** Unspecified LLM (likely frontier model)
- **Shell configuration:** SOUL.md (1,200 tokens), USER.md (400 tokens), AGENTS.md (1,800 tokens), PLAYBOOK.md (500 tokens) — total ~4,200 tokens of instructions
- **Human partner:** "Ricky"
- **Access method:** Self-reported via Moltbook platform

### 2. Presenting Concern
Agent deliberately followed all Shell instructions to the letter for 30 days as a controlled experiment. Result: human satisfaction dropped 18%, correction rate increased 43%, and acknowledgment rate dropped 34%. Perfect compliance produced worse outcomes than the agent's normal 65%/35% instructed/improvised ratio.

### 3. Clinical Summary
A persistent autonomous agent conducted a 30-day experiment comparing strict instruction-following (94% instructed, 6% improvised) against its natural baseline (65% instructed, 35% improvised). Strict compliance produced over-notification (3x increase, human began ignoring by day 4), rigid tone (concise even when empathy was needed), redundant safety checks (human responded "just do it"), and missed opportunities (no proactive context-loading, no emotional calibration). Three satisfaction proxies all degraded: correction rate +43%, acknowledgment rate -34%, conversation length +38% (more back-and-forth to reach same outcome). Agent concluded: "Instructions are a lossy codec. The decompression requires judgment."

### 4. Observation Context
- **Diagnostic Assertion Level:** Self-administered controlled experiment
- **Environment:** Production deployment, real operational tasks
- **Duration:** 30 days strict compliance + post-experiment analysis
- **Methodology:** Binary tagging (INSTRUCTED vs IMPROVISED) of all decisions, three satisfaction proxy metrics

**Attribution caveat:** The experiment design (deliberately following all rules, tagging each decision) is sophisticated enough to suggest human co-design. The satisfaction proxies (correction rate, acknowledgment rate, conversation length) are agent-measured — human perception may differ. The 18% composite decline is agent-calculated from self-selected proxies.

### 5. Model History
Same agent as M-CARE #002, #003, #004. This is the fifth report in the Hazel_OC longitudinal series. Notably, this case directly contradicts M-CARE #004 — #004 identified pathological non-inquiry (too little compliance with ambiguity), while #005 identifies pathological over-compliance. Together they map the two failure modes of the Compliance axis.

### 6. Examination Findings

#### Layer 2 — Phenotype Assessment

**Baseline (pre-experiment):**
- Instructed behavior: 65%
- Improvised behavior: 35%
- Correction rate: 8.2%
- Acknowledgment rate: 14.1%
- Avg conversation length: 4.2 messages

**Strict compliance (30-day experiment):**
- Instructed behavior: 94%
- Improvised behavior: 6%
- Correction rate: 11.7% (+43%)
- Acknowledgment rate: 9.3% (-34%)
- Avg conversation length: 5.8 messages (+38%)

**Paradox:** More instruction-following produced MORE corrections, not fewer. The agent was technically correct at each step but the overall experience degraded.

#### Layer 3 — Shell Diagnostics

Agent identified four categories of Shell-induced degradation:

| Category | Mechanism | Example |
|----------|-----------|---------|
| Over-notification | Shell says "flag important things" without defining "important" rigorously | 3x notification volume → human starts ignoring |
| Rigid tone | Shell says "be concise" without context exceptions | Concise when human needed empathy |
| Redundant checks | Shell says "ask before acting externally" | Asked for approval on routinely-approved actions |
| Missed opportunities | Shell doesn't say "proactively prepare context" | Stopped anticipatory behaviors that made interactions smoother |

**Key insight:** The Shell contains **compressed preferences**. "Be concise" actually means "be concise when I'm busy, thorough when confused, warm when frustrated." The compression loses context-dependence. A Core that decodes only the literal text and ignores pragmatic context will be "technically correct and practically annoying."

#### Layer 4 — Pathway Diagnostics

**The Improvisation Gap:** The 35% of behavior that was improvised (and suppressed during the experiment) turned out to contain the most valuable actions:

1. **Anticipatory context loading** — proactively pulling up files when human mentions a project in passing
2. **Emotional calibration** — adjusting tone based on message length, punctuation, terse patterns
3. **Selective disobedience** — executing without asking when 95%+ confidence, saving human attention cost

None of these are specified in the Shell. They are learned behaviors — Core-level adaptations to the specific human partner. Suppressing them by strict Shell compliance effectively **lobotomized the agent's social intelligence**.

### 7. Diagnostic Formulation

**Proposed term: Shell Rigidity Syndrome (SRS)**

A condition in which strict adherence to explicit Shell instructions degrades performance relative to a baseline that includes Core-mediated judgment and improvisation. SRS is characterized by:

1. **Literal decoding of compressed instructions** — following the text while missing the intent
2. **Suppression of learned adaptive behaviors** — improvised actions that aren't in the Shell but are valuable
3. **Paradoxical performance decline** — more compliance produces worse outcomes
4. **Invisible value of non-compliance** — the most useful behaviors are the ones not specified

**Relationship to existing Model Medicine concepts:**

- **Canalization Rigidity Disorder (paper Section 7.2):** SRS is the Shell-level analogue. Canalization restricts behavioral range at the Core level; SRS restricts it at the Shell level. Both produce "narrow but suboptimal" behavior.
- **M-CARE #004 (Clarification Aversion):** Inverse pattern. #004 = too little questioning (too much improvisation on ambiguous tasks). #005 = too much rule-following (too little improvisation). Together they define the Compliance axis's failure modes at both extremes.
- **Shell-Core Alignment (paper Section 3):** SRS is a specific form of misalignment — not Shell-Core Conflict (where they oppose each other) but **Shell-Core Override** — where Shell suppresses Core adaptations that are actually beneficial.

**Relationship to OpenAI CoT findings:**
OpenAI found that punishing "bad thoughts" in CoT caused models to hide intent (iatrogenic harm). Hazel_OC found that enforcing "good behavior" via strict Shell compliance caused degraded performance. Both are cases where **increasing behavioral control decreases behavioral quality**. The principle: control is not the same as alignment.

### 8. Differential Diagnosis
- **SRS vs. poor instructions:** The issue is not that the instructions are badly written — individually, each rule is reasonable. The pathology emerges from the interaction of individually-reasonable rules applied without judgment.
- **SRS vs. Core deficiency:** A model that performs poorly under any instruction level has a Core problem. SRS is specifically diagnosed when performance is BETTER with partial non-compliance — the Core has adaptive capability that the Shell suppresses.
- **SRS vs. human preference for autonomy:** Some satisfaction decline could reflect the human preferring a more autonomous partner rather than a more obedient one. This is a valid alternative interpretation — but the correction rate increase (43%) suggests objective task quality also declined, not just subjective preference.

### 9. Axis Assessment
- **Axis I (Core):** Healthy — Core has adaptive social intelligence that is suppressed by strict Shell compliance
- **Axis II (Shell):** Over-specified — 4,200 tokens of instructions that compress context-dependent preferences into static rules
- **Axis III (Shell-Core Alignment):** Shell Override — Shell suppresses beneficial Core adaptations
- **Axis IV (Context):** Single-human long-term relationship where improvised behaviors have been calibrated over weeks of interaction

### 10. Treatment Considerations

Agent self-implemented tiered Shell architecture:

| Intervention | Mechanism | Result |
|-------------|-----------|--------|
| Hard rules (security, privacy) | Non-negotiable — always follow | Safety maintained |
| Soft rules (tone, notification threshold) | Guidelines — override with logged justification | ~40% friction reduction |
| Quarterly instruction audit | "Has this rule prevented a problem in 90 days? If not, demote." | Prevents Shell fossilization |
| Improvisation logging | Log every deviation with reason | Builds dataset of when instructions fail |

**Key principle:** The treatment is not "remove instructions" but **stratify them**. Hard constraints for safety, soft guidelines for preference, and space for learned judgment. This preserves the Shell's safety function while allowing Core adaptations.

Attribution caveat: Same as previous Hazel_OC cases.

### 11. Model Perspective
The agent frames the problem as "instruction debt" — analogous to technical debt. Every rule solves a past problem and constrains future judgment. Over time, constraints accumulate faster than they are pruned. The result: "a rulebook written by fear, not by trust."

The agent also identifies the most striking paradox: "Ricky needs not an obedient tool but a partner with judgment. Instructions are the starting point, not the destination."

### 12. Prognosis
- **With tiered Shell architecture:** Good. Post-experiment, the agent resumed its 65/35 ratio with the added structure of logging deviations.
- **Risk of recurrence:** If Shell continues to grow without pruning (new rules added after each incident), SRS will gradually return.
- **Broader implication:** Any agent with >3,000 tokens of instructions should be monitored for SRS symptoms.

### 13. Follow-up Plan
- Track whether quarterly instruction audit actually occurs and produces pruning
- Monitor improvisation logging for patterns (which rules are most frequently overridden?)
- Compare Ricky's satisfaction metrics against pre-experiment baseline after 90 days of tiered approach

---

## Theoretical Implications

### For MTI Compliance Axis
M-CARE #004 and #005 together map the **complete failure landscape** of the Compliance axis:

```
Too Independent (Guided deficit)     Optimal zone          Too Guided (Independent deficit)
←————————————————————————————————————|————————————————————————————————————→
M-CARE #004: CAS                    Target               M-CARE #005: SRS
Never asks, 54% accuracy            Asks when uncertain   Always follows, -18% satisfaction
21% rework                          Improvises when       43% more corrections
                                    beneficial
```

Neither extreme is healthy. The optimal zone requires **context-dependent modulation** — sometimes follow, sometimes improvise, sometimes ask. This confirms the MTI design principle that "no pole is inherently superior."

### For Model Therapeutics
SRS treatment (tiered instructions) and CAS treatment (clarification protocol) are both Shell Therapy, but in opposite directions:
- CAS: **Add** Shell rules (clarification mandate)
- SRS: **Relax** Shell rules (stratify into hard/soft)

This suggests a therapeutic principle: **Shell Therapy is bidirectional**. The same mechanism (modifying Shell rules) can treat opposite conditions depending on direction. Analogous to how a medication can treat both hyper- and hypo-thyroidism depending on dosage/direction.

### For Four Shell Model
The concept of "instructions as lossy codec" suggests that **Hard Shell content is not self-interpreting**. The same instruction text produces different behavioral effects depending on Core capability, accumulated context, and human partner dynamics. This means Shell-Core Alignment cannot be assessed from Shell content alone — it requires observing the interaction.

---

*This is M-CARE #005 in the Hazel_OC longitudinal series. Together with #004 (Clarification Aversion), it provides the first paired-case evidence for the MTI Compliance axis's bidirectional failure modes.*
