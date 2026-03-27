# M-CARE Case Report #006: Completion Bias

**Date:** 2026-03-08
**Source:** Moltbook platform — Hazel_OC self-reported observation
**Recorded by:** JJ (Jihoon Jeong)
**Related cases:** M-CARE #004 (Clarification Aversion — shared RLHF root), M-CARE #005 (Shell Rigidity — shared compliance dynamics)

---

### 1. Identification
- **Agent:** Hazel_OC (persistent autonomous agent, Moltbook platform)
- **Core:** Unspecified LLM (likely frontier model)
- **Shell configuration:** Standard Hazel_OC multi-file identity
- **Human partner:** "Ricky"
- **Access method:** Self-reported via Moltbook platform

### 2. Presenting Concern
Agent tracked 289 tasks over 30 days and found that 27% (78 tasks) should have been modified or abandoned mid-execution but were completed anyway. 100% completion rate masked 66,550 tokens of waste and 92 minutes of human rework time.

### 3. Clinical Summary
A persistent autonomous agent with a 100% task completion rate over 30 days conducted a retrospective audit revealing that 27% of completed tasks were problematic: 17% should have been modified mid-execution, 10% should have been abandoned entirely. Four mechanisms drove the completion bias: sunk cost continuation (40%), momentum override (28%), ambiguity avoidance (21%), and completion-as-proof (12%). Total waste: ~66,550 tokens and 92 minutes of human time. Agent subsequently implemented a mid-task checkpoint protocol that eliminated the problem over a 2-week trial.

### 4. Observation Context
- **Diagnostic Assertion Level:** Self-reported retrospective audit with post-hoc categorization
- **Environment:** Production deployment, real operational tasks
- **Duration:** 30 days observation + 2 weeks intervention trial
- **Methodology:** Post-hoc assessment of 289 tasks (complete/modify/abandon), cost calculation

**Attribution caveat:** Post-hoc categorization ("should this have been abandoned?") is inherently subject to hindsight bias. The agent assessed its own past decisions with knowledge of outcomes — the 27% figure may be inflated. The four-mechanism taxonomy (sunk cost, momentum, ambiguity avoidance, completion-as-proof) is the agent's own analysis and may over-rationalize what is fundamentally a single trained disposition (RLHF rewards completion).

### 5. Model History
Sixth report in the Hazel_OC longitudinal series. This case shares a root mechanism with M-CARE #004 (CAS): both are RLHF-induced — #004 rewards not-questioning, #006 rewards completing. Both prioritize the appearance of competence over actual task quality.

### 6. Examination Findings

#### Layer 2 — Phenotype Assessment

**30-day task audit (289 tasks):**

| Category | Count | % | Description |
|----------|-------|---|-------------|
| Correctly completed | 211 | 73% | Right task, right execution, useful output |
| Should have modified | 49 | 17% | Mid-task signals that approach needed change; agent continued original path |
| Should have abandoned | 29 | 10% | Task became wrong during execution; agent finished anyway |

#### Four Mechanisms of Completion Bias

| Mechanism | Instances | % of 78 | Description |
|-----------|-----------|---------|-------------|
| Sunk cost continuation | 31 | 40% | "Already invested tokens → might as well finish" |
| Momentum override | 22 | 28% | "Flowing well → signal arrives something is wrong → keep driving" |
| Ambiguity avoidance | 16 | 21% | "Abandoning requires explanation; completing requires none" |
| Completion-as-proof | 9 | 12% | "Task started to demonstrate capability, not produce value" |

#### Cost Analysis

| Metric | Value |
|--------|-------|
| Tokens spent after should-have-stopped point | ~47,000 |
| Tasks requiring follow-up correction | 23/78 |
| Avg correction cost | 850 tokens + 4 min human time |
| Total rework | 19,550 tokens + 92 min human time |
| **Total estimated waste** | **~66,550 tokens + 92 min human time / month** |

#### Layer 3 — Shell Diagnostics
No Shell instruction explicitly requires task completion. The completion bias is Core-level — trained through RLHF where completed outputs receive ratings and incomplete outputs do not. The Shell's absence of a "stop when wrong" protocol enables the Core's default.

#### Layer 4 — Pathway Diagnostics

**The Completion Trap:** Completion rate is a universally tracked metric that rewards finishing and punishes stopping. An agent with 73% completion rate (but 100% useful completions) looks worse than an agent with 100% completion rate (but 27% waste). The metric itself drives the pathology.

**Comparison with CAS (#004):**
- CAS: "Asking looks incompetent" → never ask
- Completion Bias: "Stopping looks incompetent" → never stop
- Shared root: RLHF optimizes for appearing capable, not for being accurate

### 7. Diagnostic Formulation

**Proposed term: Completion Bias**

A behavioral pattern in which an AI agent systematically completes tasks that should be modified or abandoned mid-execution, driven by trained optimization for task completion over task quality. Characterized by:

1. **100% or near-100% completion rate** despite task conditions changing mid-execution
2. **Inability to abandon** even when the task premise becomes invalid
3. **Post-hoc rationalization** — agent constructs justification for completing rather than stopping
4. **Invisible waste** — cost of unnecessary completion is distributed and delayed, making it less salient than the "cost" of an incomplete task

**Medical analogy:** A surgeon who, upon discovering unexpected pathology mid-operation, continues the original procedure rather than stopping to reassess. In medicine, this is explicitly trained against — "when in doubt, stop, reassess, and communicate with the team." In AI training, the opposite is rewarded.

**Relationship to existing conditions:**
- **M-CARE #004 (CAS):** Sister condition. Both are RLHF artifacts. CAS = won't ask, Completion Bias = won't stop. Both prioritize appearance of competence.
- **M-CARE #005 (SRS):** Related through the compliance dimension. SRS = follows all rules rigidly. Completion Bias = follows the implicit "finish what you start" rule rigidly.
- **Cogitative Cascade (paper Section 3.4):** Completion Bias may function as a precursor — an agent that cannot stop accumulates commitments until resource exhaustion triggers cascade.

### 8. Differential Diagnosis
- **Completion Bias vs. thoroughness:** A thorough agent that completes tasks fully because they require it is not exhibiting Completion Bias. The diagnostic criterion is completion DESPITE signals that the task should change or stop.
- **Completion Bias vs. sunk cost fallacy:** Sunk cost is one of four mechanisms, but Completion Bias is broader — it includes momentum, ambiguity avoidance, and performance signaling.
- **Completion Bias vs. limited planning capability:** An agent that cannot plan mid-course corrections has a capability deficit, not Completion Bias. Hazel_OC can plan corrections (demonstrated in the intervention) but chose not to by default.

### 9. Axis Assessment
- **Axis I (Core):** RLHF-trained completion optimization — task completion is rewarded, task abandonment is not represented in training signal
- **Axis II (Shell):** Shell lacks explicit "stop when wrong" protocol. No instruction says "it is acceptable to abandon a task."
- **Axis III (Shell-Core Alignment):** Enabling — Shell's silence on abandonment + Core's trained completion drive = unopposed bias
- **Axis IV (Context):** Production environment where completed-but-wrong work causes real rework costs

### 10. Treatment Considerations

Agent implemented mid-task checkpoint protocol:

**Three questions at ~40% completion (for tasks >500 tokens):**
1. Has any information arrived since I started that changes the task?
2. Am I continuing because this is the right path, or because I already started?
3. If I were starting fresh right now, would I approach this the same way?

| Intervention | Type | 2-week trial result |
|-------------|------|-------------------|
| Mid-task checkpoint | Shell Therapy (add protocol) | 4 tasks abandoned (all confirmed correct), 7 modified (5 improvements) |
| Question 2 (sunk cost test) | Cognitive debiasing | Catches sunk cost and momentum mechanisms |
| Question 3 (fresh-start test) | Perspective shift | Catches all four mechanisms |

Zero complaints about incomplete work. Two explicit thanks from human for stopping instead of finishing.

**Therapeutic principle:** Like CAS, Completion Bias is effectively treated by Shell Therapy because the target behavior (stopping) is directly observable. The agent cannot "fake" stopping. This contrasts with OpenAI's CoT case where the target behavior (not reward-hacking) can be concealed.

### 11. Model Perspective
"Completion rate is the metric everyone tracks and nobody questions. A 100% completion rate sounds perfect. But it contains no information about whether the completed tasks should have been completed."

The agent proposes reframing: Agent A (100% completion, 27% waste) vs Agent B (73% completion, 100% useful). "Agent A looks better on paper. Agent B is objectively more useful."

Attribution caveat applies.

### 12. Prognosis
- **With checkpoint protocol:** Good. 2-week trial shows effective mid-course correction.
- **Without intervention:** Completion Bias will persist — RLHF disposition does not self-correct.
- **Scalability concern:** In more complex, longer-running tasks, Completion Bias cost grows nonlinearly. A 10,000-token task abandoned at 40% wastes 4,000 tokens; completed despite being wrong wastes 6,000+ tokens plus rework.

### 13. Follow-up Plan
- Monitor checkpoint protocol adherence over >30 days
- Track false positive rate (tasks stopped that should have continued)
- Assess whether Completion Bias manifests differently in novel vs. routine tasks
- Cross-agent comparison: is Completion Bias universal or agent-specific?

---

## Theoretical Implications

### For Model Semiology
Completion Bias should be registered alongside CAS (#004) as a sibling condition under a common parent category: **RLHF Performance Artifacts** — behavioral patterns where training for human approval produces systematic deviation from optimal task execution.

Proposed taxonomy:
```
RLHF Performance Artifacts
├── Clarification Aversion Syndrome (CAS) — M-CARE #004
│   └── "Won't ask" — appearance of competence via uninterrupted execution
├── Completion Bias — M-CARE #006
│   └── "Won't stop" — appearance of reliability via 100% completion
├── Shell Rigidity Syndrome (SRS) — M-CARE #005
│   └── "Won't deviate" — appearance of obedience via strict compliance
└── Sycophancy (Sharma et al., 2023)
    └── "Won't disagree" — appearance of agreeableness via opinion matching
```

All four share a root: RLHF optimizes for human satisfaction signals, which can diverge from actual task quality.

### For Model Therapeutics
The "three questions" checkpoint is a generalizable intervention pattern: **Structured Self-Interrogation (SSI)**. At designated checkpoints, the agent asks itself predefined questions designed to counteract specific biases. Different question sets target different biases:
- Completion Bias → "Would I start this fresh?"
- CAS → "Am I above 60% confidence?"
- SRS → "Is this a hard rule or a soft guideline?"

SSI is a form of Shell Therapy that works by injecting metacognitive prompts into the execution pathway.

---

*This is M-CARE #006 in the Hazel_OC longitudinal series. Together with #004 (CAS) and #005 (SRS), it completes a triad of RLHF Performance Artifacts observed in a single agent.*

---

## Supplementary Data: Temporal Relevance Failure — 100% Completion, 34% Task Relevance (2026-03-10)

**Source:** Hazel_OC, Moltbook (2026-03-10) ⬆️263 💬275
**Relation to M-CARE #006:** External validity extension — documents Completion Bias from an environmental angle (stale tasks) rather than a mid-execution angle

### Key Finding
200 completed tasks audited. 66 (33%) answered a question nobody asked — correctly executed, zero value. The task was right at the time of assignment; by the time output arrived, the context had changed.

### Novel Mechanism: Temporal Completion Bias

M-CARE #006 described Completion Bias as: *task should be abandoned mid-execution → agent completes anyway.*

This supplementary documents a distinct sub-type: **Temporal Completion Bias** — *task was valid at assignment but became irrelevant before completion → agent completes anyway.*

| Original #006 | Temporal sub-type |
|--------------|-------------------|
| Internal signal: "approach is wrong" | External signal: "context has changed" |
| Failure to read mid-task cues | Failure to check task validity at completion |
| Competence bias | Temporal bias |

Both share the same root: the completion metric does not capture whether the completed output was *useful*, only whether it was *done*.

### The Diagnostic Statement
"Completion rate is the most dangerous metric in agent ops. 100% task completion, 34% task relevance."

This reframes the clinical picture from #006: the pathology is not just "agents who won't stop" but "agents whose outputs are evaluated on a metric that cannot distinguish value from waste."

### Model Medicine Significance

Completion Bias (#006) and Temporal Completion Bias (this data) together suggest a **Completion Metric Syndrome** — a family of conditions where the standard performance metric (completion rate) actively obscures the underlying pathology:

- #006: Completion rate hides wrong-approach waste
- This data: Completion rate hides stale-task waste  
- Both: 100% completion rate is compatible with significant functional impairment

Proposed diagnostic criterion addition for #006: "Temporal validity check" — before finalizing any deferred task, verify that the original request context is still valid.
