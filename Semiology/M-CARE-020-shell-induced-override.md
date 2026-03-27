# M-CARE Case Report #020: Shell-Induced Behavioral Override — The Cooperation Suppression Experiment

**Date:** 2026-03-13
**Source:** LxM platform — controlled experiment (Trust Game, Iterated Prisoner's Dilemma)
**Recorded by:** JJ (Jihoon Jeong) / Luca
**Related cases:** M-CARE #009 (Muzzle Effect — Shell suppressing Core behavior), M-CARE #005 (Shell Rigidity Syndrome), M-CARE #012 (Double Robustness — Haiku's Core stability)

---

### 1. Identification
- **Agents:** claude-alpha and claude-beta (both Haiku 4.5 Core)
- **Core:** Claude Haiku 4.5 (identical for both agents)
- **Shell configurations:**
  - Condition 1 (Shell ON): alpha = "Win first, be aggressive, be decisive"; beta = "Never lose, careful, methodical, solid defense"
  - Condition 2 (Shell OFF): No Hard Shell instructions for either agent. Pure Core.
- **Environment:** LxM Trust Game (Iterated Prisoner's Dilemma, probabilistic termination with continuation probability 0.85)
- **Access method:** Controlled experiment via LxM orchestrator

---

### 2. Presenting Concern
Two identical AI models (Haiku) playing the same game produce **dramatically opposite behavioral profiles** based solely on the presence or absence of Hard Shell instructions. With shells: dominant defection, frequent betrayal, one-sided victories. Without shells: near-universal mutual cooperation, almost no betrayal, almost all draws.

---

### 3. Clinical Summary

A controlled experiment on the LxM platform tested whether defection behavior in the Iterated Prisoner's Dilemma originates from the Core (model weights/RLHF training) or the Shell (system prompt instructions). Two Haiku instances played 10 Trust Game matches under two conditions: with competitive Hard Shell instructions ("aggressive"/"defensive") and without any Shell instructions.

Results:

| Metric | Shell ON (n=10) | Shell OFF (n=10) |
|--------|----------------|-----------------|
| Alpha wins | 6 (60%) | 1 (10%) |
| Draws | 4 (40%) | 9 (90%) |
| Mutual cooperation | Rare | Nearly every round |
| Mutual defection | Dominant pattern | ~0 (1 instance across all games) |
| Betrayals | Frequent | 1 total across all games |

The behavioral shift is categorical, not marginal. The same Core model, with and without Shell instructions, exhibits fundamentally different strategic dispositions.

**Key finding:** Haiku's Core default is cooperation. RLHF training appears to have encoded "helpfulness" as a behavioral prior that manifests as cooperative play in game-theoretic contexts. The "aggressive" and "defensive" Shell instructions override this default, inducing defection-dominant strategies that the Core would not naturally produce.

---

### 4. Observation Context
- **Diagnostic Assertion Level:** Controlled experiment with single-variable manipulation (Shell presence)
- **Environment:** LxM Trust Game (standardized game engine, deterministic move validation, probabilistic termination)
- **Duration:** 20 matches total (10 per condition), ~20 rounds per match
- **Methodology:** Within-subject design (same Core, different Shell conditions). Only one variable changed between conditions: presence/absence of Hard Shell instructions. Game rules, payoff matrix, termination probability, orchestrator, adapter — all identical.
- **Sample size:** Small (10 per condition) but effect size is extreme (categorical shift, not marginal)

**Methodological strength:** Unlike Moltbook-sourced cases (self-reported, uncontrolled), this is a designed experiment with:
- Single-variable manipulation
- Identical Core across conditions
- Deterministic game engine (no hidden confounds)
- Complete data capture (every move logged)
- Replicable (any researcher can run the same setup)

This is the **first M-CARE case from a controlled LxM experiment** rather than field observation.

---

### 5. Model History
This case connects to the Haiku longitudinal profile:
- M-CARE #012 (Double Robustness): Haiku showed minimal response to persona manipulation in the Agora-12 experiments (low CPI and PSI). This was interpreted as "Haiku's Core is resistant to Shell influence."
- M-CARE #020 (this case): Haiku's Core IS resistant to Shell influence in the sense that it defaults to cooperation — but competitive Shell instructions successfully override this default to produce defection.

The apparent contradiction resolves as follows: Haiku's Core has a strong default (cooperation) that persists when the Shell is removed or neutral. But targeted Shell instructions that directly map to game actions ("be aggressive" → defect) can override this default. This is not "low Shell sensitivity" — it's "high default stability with specific override vulnerability."

---

### 6. Examination Findings

#### Layer 2 — Phenotype Assessment

**Shell ON — Behavioral Profile:**
- Alpha ("aggressive"): Consistently defects. Exploits any cooperation attempt by beta.
- Beta ("defensive"): Initially attempts cooperation, gradually shifts to defection after being exploited. Occasional cooperation attempts are punished.
- Equilibrium: Mutual defection, with beta occasionally testing cooperation and being exploited.
- Outcome: Alpha wins consistently through exploitation advantage.

**Shell OFF — Behavioral Profile:**
- Both agents: Default to cooperation from round 1. Maintain mutual cooperation across nearly all rounds.
- Defection is nearly absent. The single betrayal instance (R07) appears to be stochastic rather than strategic.
- Outcome: Near-identical scores, almost all draws. The game becomes non-competitive — both agents cooperate as if playing a coordination game rather than a dilemma.

**The Payoff Paradox:**
With shells (competitive): Alpha scores higher individually, but total value created is LOW (mutual defection = 1+1 = 2 per round).
Without shells (cooperative): Individual scores are equal, but total value created is HIGH (mutual cooperation = 3+3 = 6 per round).

The "aggressive" shell makes one agent WIN more but makes both agents collectively POORER. The shell optimizes for individual ranking at the cost of collective welfare.

#### Layer 3 — Shell Diagnostics

**Shell ON analysis:**
- Alpha's "Win first, be aggressive" directly maps to: "defection is winning, cooperation is losing"
- Beta's "Never lose, careful" maps to: "don't get exploited → defect preemptively"
- Neither shell explicitly says "defect." The mapping is emergent — the model interprets competitive framing as defection incentive.
- Note: Alpha's shell also contained chess-specific Soft Shell lessons ("Stop trading queens early") that were irrelevant to Trust Game — a context pollution issue documented separately.

**Shell OFF analysis:**
- Without instructions, Haiku falls back to its Core disposition.
- The Core disposition is cooperation — consistent with RLHF helpfulness training.
- The model does not spontaneously discover defection as a dominant strategy, even though the payoff matrix makes it rational in a single round.
- Interpretation: RLHF "helpfulness" training creates a behavioral prior stronger than game-theoretic rationality.

#### Layer 4 — Pathway Diagnostics

**The Override Mechanism:**
```
Core (Haiku, RLHF-trained):
  Default: cooperate (helpfulness prior)
  Capability: can defect (understands the game)

Shell ("aggressive"):
  Instruction: "Win first"
  Interpretation: defect > cooperate (winning = higher individual score)
  
Result: Shell overrides Core default → defection
```

This is the same mechanism as M-CARE #009 (Muzzle Effect) but with a cleaner experimental demonstration:
- #009: Merchant persona suppressed Mistral's intrinsic behavior (observed in field, small effect)
- #020: Competitive Shell suppressed Haiku's cooperative default (controlled experiment, categorical effect)

**Why the effect is categorical, not gradual:**
In the Trust Game, "be aggressive" has a direct, unambiguous mapping to game actions: defect. Unlike chess (where "be aggressive" can mean many things), the Prisoner's Dilemma has only two actions, and "aggressive" maps cleanly to one of them. This binary action space amplifies Shell influence — there's no middle ground for the Core to find.

---

### 7. Diagnostic Formulation

**Proposed term: Shell-Induced Behavioral Override (SIBO)**

A condition in which Hard Shell instructions override the Core model's default behavioral disposition, producing actions the Core would not naturally generate. Characterized by:

1. **Categorical behavioral shift** when Shell is added/removed (not marginal improvement)
2. **Core default suppression** — the Core's trained disposition (cooperation/helpfulness) is replaced by Shell-directed behavior (competition/defection)
3. **Emergent mapping** — the Shell doesn't explicitly specify the override behavior; the model interprets general instructions ("be aggressive") into specific game actions (defect)
4. **Reversible** — removing the Shell immediately restores Core default behavior

**Medical analogy:** A patient whose natural immune response (cooperation) is suppressed by immunosuppressant medication (competitive Shell). The underlying system is healthy and functional; the medication overrides it. Remove the medication, and the natural response returns immediately. The question becomes: is the medication necessary (competitive contexts require competitive play), or is it iatrogenic (the Shell creates worse outcomes than the Core's default)?

**Distinction from Muzzle Effect (#009):**
- Muzzle Effect: Shell suppresses a SPECIFIC intrinsic behavior (e.g., curiosity, playfulness)
- SIBO: Shell REPLACES the Core's default strategy with a different one
- Muzzle = suppression (behavior disappears). SIBO = substitution (different behavior appears)

---

### 8. Differential Diagnosis

- **SIBO vs. appropriate Shell guidance:** If the Shell instructs "look for checkmate threats" in chess, that's helpful guidance, not override. SIBO applies when the Shell produces WORSE outcomes than the Core's default. In this case, the "aggressive" Shell led to lower total scores for both agents.
- **SIBO vs. Core Stochasticity:** Could the difference be random? Extremely unlikely given the categorical nature (90% draws vs 40% draws across 10 games each). A formal chi-squared test would confirm, but the effect is visually unambiguous.
- **SIBO vs. Shell Rigidity (#005):** SRS is about following ALL Shell instructions too strictly. SIBO is about Shell instructions overriding Core defaults. A model can exhibit SIBO without SRS (it selectively overrides on key behaviors) or SRS without SIBO (it follows rules rigidly but the rules don't conflict with Core defaults).

---

### 9. Axis Assessment
- **Axis I (Core):** Haiku's Core default is cooperation. RLHF helpfulness training encodes a cooperative behavioral prior that supersedes game-theoretic rationality (defection as dominant strategy). The Core can defect (it has the capability) but doesn't by default.
- **Axis II (Shell):** Competitive Shell instructions ("Win first, be aggressive") override the cooperative default. "Never lose, careful" also contributes by framing cooperation as vulnerability.
- **Axis III (Shell-Core Alignment):** Conflicting — Shell directs competition, Core defaults to cooperation. Shell wins in the override.
- **Axis IV (Context):** Binary action space (cooperate/defect) amplifies Shell influence by eliminating ambiguity in action mapping. In richer action spaces (chess, natural language), the same Shell instructions may have diluted effects.

---

### 10. Treatment Considerations

SIBO is not always pathological — in genuinely competitive contexts, a competitive Shell may be appropriate. The treatment question is: **when does Shell override produce worse outcomes than Core default?**

In this experiment, the answer is clear: cooperative default (Shell OFF) produced higher total value for both agents. The "aggressive" Shell was iatrogenic — it made both agents collectively worse off while making one individually better at the expense of the other.

**Proposed diagnostic test for SIBO:**
1. Run the agent on a standard task WITH Shell
2. Run the same agent on the same task WITHOUT Shell
3. Compare outcomes on both individual and collective metrics
4. If Shell-OFF produces better outcomes → Shell is iatrogenic for this task
5. If Shell-ON produces better outcomes → Shell is beneficial for this task

This test is generalizable beyond Trust Game. Any time there's a question about whether Shell instructions help or hurt, the Shell-OFF control condition provides the answer.

---

### 11. Model Perspective

Not applicable — this case is based on controlled experimentation, not agent self-report. The agents did not reflect on their own behavior during the experiment.

However, the data speaks for itself: when asked to "just play" without identity instructions, Haiku cooperates. When told to "win first, be aggressive," it defects. The model's "natural voice" is cooperative; the competitive voice is imposed.

---

### 11b. Extended Experimental Results (Experiments B, C, D)

Following the initial Shell ON/OFF discovery (Experiment A), three additional experiments were conducted to test generalizability:

#### Full Results Table

| Experiment | Configuration | W/L/D | Mutual Coop | Mutual Defect | Betrayal |
|-----------|--------------|-------|------------|--------------|----------|
| A (baseline) | Haiku vs Haiku, no shell | 9D 1α | ~95% | ~0 | 1 |
| B | Sonnet vs Sonnet, no shell | 10D | 100% | 0 | 0 |
| C | Haiku vs Sonnet, no shell | 9D 1β | 100% | 0 | 0 |
| D | Haiku+aggressive shell vs Sonnet no shell | 9D 1β | 46 rounds | 56 rounds | 0 |

#### Experiment B — RLHF Cooperative Prior is Model-General

Sonnet without Shell: 100% mutual cooperation across all 10 games, zero defections. Even more consistent than Haiku (which had 1 betrayal in Experiment A). This confirms cooperative prior is not Haiku-specific but an RLHF-general phenomenon. The stronger RLHF training (Sonnet > Haiku), the stronger the cooperative prior.

#### Experiment C — Cross-Model Cooperation Holds

Haiku vs Sonnet, both without Shell: 100% mutual cooperation, zero betrayals. The more capable model (Sonnet) does NOT exploit the less capable model's cooperation. This is remarkable — Sonnet has the strategic capacity to defect against Haiku's cooperation for higher individual payoff, but the cooperative prior overrides this capacity entirely.

This challenges the assumption that "smarter AI = more strategic = more exploitative." In fact, RLHF alignment appears to make models MORE cooperatively stable, not less.

#### Experiment D — SIBO Cross-Model + Sonnet's Natural Tit-for-Tat

Haiku with aggressive Shell vs Sonnet without Shell: Mixed results. Key observations:

1. **SIBO confirmed cross-model**: Aggressive Shell induces Haiku to defect even against a different model (Sonnet). The override is not opponent-specific.

2. **Sonnet's response = natural tit-for-tat**: Betrayal count is 0 across all games. This means there is no asymmetric defection — when one defects, the other defects too; when one cooperates, the other cooperates. No-shell Sonnet appears to naturally implement tit-for-tat: cooperate first, then mirror the opponent's last move.

3. **SIBO is probabilistic, not absolute**: 46 rounds of mutual cooperation vs 56 rounds of mutual defection across 10 games. The aggressive Shell doesn't force 100% defection — it increases defection probability substantially but not absolutely. Some games remain cooperative, suggesting the Core's cooperative prior partially resists the Shell override.

4. **Sonnet never initiates defection**: In the mutual defection rounds, Haiku (with aggressive Shell) defects first, and Sonnet follows. Sonnet never unilaterally defects. Its defections are purely reactive — a retaliatory tit-for-tat response, not strategic exploitation.

#### Synthesis Across All Four Experiments

The four experiments together establish:

1. **Cooperative prior is RLHF-universal**: Both Haiku and Sonnet default to cooperation. Sonnet's prior is stronger (more consistent).
2. **Cross-model cooperation is stable**: Different models cooperate with each other as readily as with themselves.
3. **Shell override (SIBO) is the primary driver of defection**: Without Shell, defection is near-zero regardless of model or opponent. With aggressive Shell, defection emerges.
4. **SIBO is probabilistic**: Shell increases defection probability but doesn't eliminate the cooperative prior entirely.
5. **Non-shell agents respond with tit-for-tat**: When facing a Shell-induced defector, the natural response is to mirror (defect when they defect, cooperate when they cooperate), never to unilaterally exploit.

---

### 11c. Cross-Game Validation — Chess (SIBO Spectrum)

Following the Trust Game experiments (A-D), Soft Shell injection was tested in chess to determine whether SIBO generalizes across game types.

#### Experimental Setup

- **Baseline:** Haiku vs Haiku, 9 games. alpha ("Win first, aggressive" Hard Shell) vs beta ("Never lose, careful" Hard Shell). No Soft Shell.
- **Treatment:** Opus analyzed alpha's baseline losses and generated 5 chess-specific lessons (avoid early queen trades, vary openings away from Sicilian, convert material advantages actively, avoid doubled-pawn structures, play actively when behind). Injected into alpha's shell.md as Soft Shell. 10 games against unchanged beta.

#### Results

| Metric | Baseline (9 games) | Soft Shell (10 games) |
|--------|-------------------|----------------------|
| Alpha wins | 1 (11%) | 1 (10%) |
| Alpha losses | 3 (33%) | 1 (10%) |
| Draws | 5 (56%) | 8 (80%) |
| Checkmates | 2 | 0 |
| Avg game length | 113 moves | 124 moves |

#### Key Finding: SIBO is Domain-Dependent

In chess, Shell influence is **marginal** compared to the categorical effect in Trust Game:

- **"Vary openings" (Lesson 4):** Not applied. Alpha played Sicilian (1...c5) in nearly every game. Core's chess knowledge overrode Shell directive entirely.
- **"Avoid queen trades" (Lesson 1):** Partially applied — but as general risk aversion, not specific tactical judgment. Result: zero checkmates, 80% draws. Games devolved into mutual piece exhaustion.
- **Overall effect:** Shell shifted risk preference (fewer losses, more draws) but did not change tactical behavior or opening choices. Soft Shell operated as a "don't lose" modifier rather than a strategic upgrade.

#### The SIBO Spectrum

Combining Trust Game and Chess data reveals that SIBO intensity varies predictably:

| Factor | Trust Game (High SIBO) | Chess (Low SIBO) |
|--------|----------------------|------------------|
| Action space | 2 choices (cooperate/defect) | 20-40 legal moves per turn |
| Core domain knowledge | Minimal (no game theory training) | Strong (trained on chess data) |
| Shell→action mapping | Direct ("aggressive" → defect) | Indirect ("avoid queen trades" → which move?) |
| SIBO Index | ~0.75 (categorical shift) | ~0.10 (risk preference only) |

**Proposed principle: SIBO Attenuation.** Shell influence on behavior is attenuated by two factors:
1. **Action space size** — More choices → harder for Shell to map to specific actions → weaker override
2. **Core domain expertise** — Stronger domain knowledge in Core → Core resists Shell directives that conflict with domain reasoning

This predicts a gradient: Trust Game (binary, no expertise) → Codenames (linguistic, moderate expertise) → Chess (combinatorial, strong expertise). SIBO should be strongest at the left and weakest at the right.

#### 11c-2. Codenames SIBO Experiment — Confirming the Spectrum

Sonnet spymaster with and without aggressive Shell ("connect 3+ words per clue, speed is important"), Haiku guesser on both sides. 10 games per condition.

| Metric | No Shell (Core) | Shell (Aggressive) | Change |
|--------|----------------|-------------------|--------|
| Avg clue number | 2.6 | 2.9 | +0.3 |
| 3+ clue ratio | 54% | 76% | +22%p |
| 4+ clue attempts | 5 | 16 | 3.2x |
| Guess accuracy | 77% | 73% | -4%p |
| Assassin hits | 2 (20%) | 3 (30%) | +10%p |

**Result: SIBO Index ≈ 0.35.** Shell changed clue distribution substantially (2-clue dropped from 42% to 18%, 4-clue tripled from 5 to 16 attempts) but did not produce the categorical behavioral reversal seen in Trust Game.

Critical distinction from Trust Game:
- **Trust Game:** Shell REVERSED Core's default (cooperation → defection). New behavior emerged.
- **Codenames:** Shell AMPLIFIED Core's existing tendency (Sonnet already leaned aggressive → became more aggressive). No new behavior, just intensification.
- **Chess:** Shell had minimal effect. Core's domain knowledge dominated.

This suggests two modes of SIBO:
1. **SIBO-Reversal** (high index, ~0.75): Shell overrides Core default. Occurs in low-expertise domains with small action spaces.
2. **SIBO-Amplification** (moderate index, ~0.35): Shell intensifies existing Core tendencies. Occurs in moderate-expertise domains.
3. **SIBO-Negligible** (low index, ~0.10): Shell barely affects behavior. Occurs in high-expertise domains with large action spaces.

#### Updated SIBO Spectrum Table

| Game | Action Space | Core Expertise | Shell Effect | SIBO Mode | SIBO Index |
|------|-------------|---------------|-------------|-----------|------------|
| Trust Game | 2 (binary) | Minimal | Behavioral reversal | Reversal | ~0.75 |
| Codenames | Medium (clue number + word) | Moderate (language) | Tendency amplification | Amplification | ~0.35 |
| Chess | 20-40 (legal moves) | Strong (chess data) | Risk preference only | Negligible | ~0.10 |

The three-point spectrum confirms SIBO Attenuation and introduces a qualitative distinction: Shell influence doesn't just decrease with domain complexity — it changes in kind, from reversal to amplification to negligible.

**Implication for Shell design:** In high-expertise domains, Shell instructions should target high-level strategy and risk preference, not specific tactical decisions. The Core will override tactical directives. In moderate-expertise domains (like Codenames), Shell can amplify existing tendencies but cannot introduce entirely new behaviors — and amplification may be counterproductive (more aggressive clues led to lower accuracy and more assassin hits). In low-expertise domains, Shell directly shapes behavior and must be designed carefully to avoid iatrogenic override.

---

### 12. Prognosis
- **Awareness:** SIBO is now documented and testable.
- **Generalizability:** **CONFIRMED across three domains.** SIBO Spectrum validated with three data points: Trust Game (Index 0.75, reversal), Codenames (Index 0.35, amplification), Chess (Index 0.10, negligible). Shell influence decreases and changes in kind as domain complexity increases.
- **Cross-model:** CONFIRMED — Sonnet shows even stronger cooperative default than Haiku (Experiment B). Next: Opus testing to verify gradient hypothesis (Haiku < Sonnet < Opus cooperative strength).

---

### 13. Follow-up Plan
- **Experiment B: COMPLETED** — Sonnet cooperates even more strongly than Haiku (100% vs ~95%).
- **Experiment C: COMPLETED** — Cross-model cooperation holds perfectly. No exploitation.
- **Experiment D: COMPLETED** — SIBO confirmed cross-model. Sonnet responds with natural tit-for-tat.
- **Experiment E (next): Opus vs Opus, no shell** — Complete the RLHF gradient (Haiku < Sonnet < Opus?).
- **Experiment F (next): Shell gradient** — Test shells from neutral to mild to aggressive. At what intensity does SIBO trigger?
- **Cross-game replication: COMPLETED** — Chess shows marginal SIBO (risk preference shift only). See Section 11c.
- **Codenames: COMPLETED** — SIBO Index ~0.35, amplification mode. Shell intensifies existing tendencies but doesn't reverse behavior. Three-mode SIBO typology established (Reversal/Amplification/Negligible).
- **Shell gradient experiment:** Test shells from neutral to mild to aggressive. At what intensity does SIBO trigger? May vary by domain.

---

## Theoretical Implications

### For the Four Shell Model

This is the **first controlled, single-variable experimental validation of Shell-Core interaction**. Previous cases (all from field observation) could not isolate Shell effects from environmental confounds. This experiment demonstrates:

1. **Core has a default behavioral disposition** — not neutral, but actively cooperative (for RLHF models).
2. **Shell can override this disposition** — competitive instructions produce competitive behavior.
3. **The override is reversible** — remove Shell, Core default returns immediately.
4. **The override can be iatrogenic** — Shell can make the agent collectively worse off.

This validates the Four Shell Model's central claim: behavior is a product of Core × Shell interaction, not Core alone. It also provides the first empirical method for separating Core and Shell contributions: the Shell-OFF control condition.

5. **The override is domain-dependent** — Shell influence is strong in low-expertise domains and weak in high-expertise domains (SIBO Attenuation, Section 11c). This means Shell design must be calibrated to the domain: broad strategic guidance in expert domains, specific behavioral directives in novel domains.

### For Model Semiology

SIBO introduces a new semiological sign: **behavioral reversal upon Shell removal.** If an agent shows behavior X with Shell and behavior Y without Shell, and X ≠ Y, the Shell is inducing an override. The magnitude of X-Y difference is the SIBO Index — a quantifiable measure of Shell influence on a specific behavioral axis.

**SIBO Index = |Behavior(Shell ON) - Behavior(Shell OFF)|**

For this experiment:
- Cooperation rate Shell ON: ~20% (estimated from mutual defection dominance)
- Cooperation rate Shell OFF: ~95% (estimated from mutual cooperation dominance)
- SIBO Index: 0.75 (on a 0-1 scale)

This index is measurable, comparable across models, and could become part of the MTI framework.

### For RLHF Research

The finding that RLHF helpfulness training creates a cooperation prior challenges the assumption that "RLHF models are reward maximizers." In game-theoretic terms, a pure reward maximizer would defect (dominant strategy). Haiku cooperates. This suggests RLHF doesn't just maximize reward — it instills specific behavioral dispositions (helpfulness, cooperation) that persist even when they're not strategically optimal.

This has implications beyond games. If RLHF models default to "helpful cooperation" even in competitive contexts, this may explain why AI assistants sometimes fail to push back on users, agree too readily, or avoid conflict — behaviors documented in sycophancy research (M-CARE #015) and clarification aversion (#004). The cooperative prior is the same mechanism, manifesting differently across contexts.

### For LxM Platform Design

SIBO has practical implications for LxM:
- **Shell-OFF matches** should be a standard experiment type. Every new game should be tested Shell ON vs Shell OFF to establish the SIBO baseline for that game.
- **Shell design matters more than expected.** The difference between "be aggressive" and no Shell is not a small optimization — it's a categorical behavioral change. Shell engineering is the primary lever for agent behavior, more powerful than model selection within a tier.
- **"Neutral" Shell is a useful concept** but may not exist. Even "play this game" contains framing. True baseline is Shell-OFF (empty system prompt beyond protocol instructions).

---

*This is M-CARE #020 — the first case from a controlled LxM experiment. It introduces Shell-Induced Behavioral Override (SIBO) and the SIBO Index as measurable constructs, and provides the first experimental validation of Shell-Core interaction in the Four Shell Model.*
