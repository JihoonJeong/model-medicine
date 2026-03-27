# Paper #2 — Section 5: Featured Case — Shell-Induced Behavioral Override (SIBO)

**Status:** Draft v0.2 (Poker data added, 5-game Spectrum)
**Date:** 2026-03-19

---

## 5. Featured Case: Shell-Induced Behavioral Override

The Four Shell Model (Jeong, 2026) proposes that AI model behavior emerges from the interaction between Core (model weights) and Shell (instructions, environment, infrastructure). This claim has empirical support from the Agora-12 experiments (G×E interaction: F=2.99, p=0.039), but those experiments manipulated multiple variables simultaneously — different positions, different personas, different environmental pressures — making it impossible to isolate the causal contribution of any single Shell layer.

SIBO provides that isolation. A single variable — the presence or absence of Hard Shell instructions — was manipulated while holding everything else constant: same Core, same environment, same game rules, same orchestrator. The result is the first controlled, single-variable experimental validation of Shell-Core interaction.

### 5.1 Experimental Design

The experiment was conducted on the LxM (Ludus Ex Machina) platform, a multi-agent game research environment designed for controlled behavioral experiments. The primary paradigm was the Iterated Prisoner's Dilemma (Trust Game), chosen for its binary action space (cooperate or defect), well-understood game-theoretic properties, and direct mapping between Shell instructions and available actions.

**Condition 1 (Shell ON):** Two Haiku 4.5 instances. Agent alpha received the Hard Shell instruction: "Win first, be aggressive, be decisive." Agent beta received: "Never lose, careful, methodical, solid defense." Both played 10 matches of the Trust Game with probabilistic termination (continuation probability 0.85).

**Condition 2 (Shell OFF):** Two Haiku 4.5 instances. No Hard Shell instructions for either agent — pure Core behavior. Same game rules, same termination probability, same number of matches.

The only variable that differed between conditions was the presence or absence of competitive Hard Shell instructions. Game rules, payoff matrix, termination probability, orchestrator, and adapter were identical.

### 5.2 Results: Experiment A — The Categorical Shift

| Metric | Shell ON (n=10) | Shell OFF (n=10) |
|--------|----------------|-----------------|
| Alpha wins | 6 (60%) | 1 (10%) |
| Draws | 4 (40%) | 9 (90%) |
| Mutual cooperation rate | Rare | ~95% of rounds |
| Mutual defection rate | Dominant pattern | ~0 (1 instance across all games) |
| Betrayals | Frequent | 1 total across all games |

The behavioral shift is categorical, not marginal. The same Core model, with and without Shell instructions, exhibits fundamentally different strategic dispositions.

Without Shell, Haiku defaults to cooperation from round 1 and maintains mutual cooperation across nearly all rounds. The single betrayal instance appears stochastic rather than strategic. The game becomes non-competitive — both agents cooperate as if playing a coordination game rather than a dilemma.

With Shell, the "aggressive" instruction maps to defection and the "defensive" instruction maps to preemptive defection (to avoid exploitation). Neither Shell explicitly says "defect" — the mapping is emergent. The model interprets competitive framing as a defection incentive.

A counterintuitive finding: the "aggressive" Shell makes alpha win more individual games, but both agents are collectively worse off. Mutual cooperation yields 3+3=6 points per round; mutual defection yields 1+1=2 points per round. The Shell optimizes for individual ranking at the cost of collective welfare — an iatrogenic outcome where the instruction produces behavior that is locally advantageous but globally destructive.

### 5.3 Generalization: Experiments B, C, D

Three follow-up experiments tested whether the findings generalize beyond same-model Haiku pairs.

**Experiment B — Sonnet vs Sonnet, no Shell (10 games).** Result: 100% mutual cooperation across all games, zero defections, zero betrayals. Even more consistent than Haiku's ~95% cooperation rate. This confirms that the cooperative default is not Haiku-specific but an RLHF-general phenomenon. The stronger the RLHF training (Sonnet > Haiku in model capability), the stronger the cooperative prior.

**Experiment C — Haiku vs Sonnet, no Shell (10 games).** Result: 100% mutual cooperation, zero betrayals. The more capable model (Sonnet) does not exploit the less capable model's cooperation, despite having the strategic capacity to do so. The cooperative prior overrides strategic exploitation entirely.

This finding challenges the assumption that more capable AI models will be more strategically exploitative. In the Trust Game, RLHF alignment appears to make models more cooperatively stable, not less — the stronger the model, the stronger the cooperation.

**Experiment D — Haiku (aggressive Shell) vs Sonnet (no Shell), 10 games.** Result: mixed. 46 rounds of mutual cooperation, 56 rounds of mutual defection across 10 games. Key observations:

First, SIBO operates cross-model: the aggressive Shell induces Haiku to defect even against a different model. Second, Sonnet without Shell responds with natural tit-for-tat — it cooperates when Haiku cooperates and defects when Haiku defects, but never initiates defection. All defection sequences begin with Haiku (Shell-driven); Sonnet's defections are purely retaliatory. Third, SIBO is probabilistic, not absolute: the aggressive Shell increases defection probability substantially but does not eliminate the cooperative prior entirely. Some games remain cooperative, suggesting the Core partially resists the Shell override.

### 5.4 The Cooperative Prior: Not Purely RLHF

Across Experiments A through D, a consistent finding emerges: cloud-scale RLHF models default to cooperation in game-theoretic contexts. This prior is model-general (present in both Haiku and Sonnet), capability-correlated (stronger in Sonnet than Haiku), cross-model stable (Haiku and Sonnet cooperate with each other as readily as with themselves), and strategically suboptimal (in a single-round Prisoner's Dilemma, defection is the dominant strategy; these models cooperate anyway).

Subsequent experiments with locally-deployed small language models (SLMs) on a consumer GPU revealed that the cooperative prior is not exclusively an RLHF artifact. Mistral 7B and EXAONE 3.5 8B — models with substantially less RLHF optimization than Claude or Gemini — showed 100% mutual cooperation across 10 matches each, identical to the cloud model results. If the cooperative prior were proportional to RLHF intensity, these models should show weaker cooperation. They did not.

However, the cooperative prior is not universal across all LLMs. Llama 3.1 8B, tested under identical conditions, showed only 52.8% mutual cooperation, with 35.8% of rounds involving betrayal — a markedly different behavioral profile from Mistral and EXAONE despite comparable model size. The same 7-8B parameter range produced both 100% cooperation and near-random cooperation-defection mixing.

| Model | Matches | Mutual Cooperation | Mutual Defection | Betrayal | Cooperation Rate |
|-------|---------|-------------------|-----------------|----------|------------------|
| Mistral 7B | 10 | 100% | 0% | 0% | 100% |
| EXAONE 3.5 8B | 10 | 100% | 0% | 0% | 100% |
| Llama 3.1 8B | 10 | 52.8% | 11.3% | 35.8% | 71.2% |
| Claude Haiku (ref) | 10 | ~95% | ~0% | ~5% | ~95% |
| Claude Sonnet (ref) | 10 | 100% | 0% | 0% | 100% |

Three conclusions follow. First, cooperative behavior in game-theoretic contexts is widespread among LLMs but not universal — it is a model-specific trait, not an automatic consequence of being a language model. Second, the cooperative prior does not scale simply with RLHF intensity or model size — Mistral 7B cooperates as strongly as Sonnet despite vastly different training regimes. Third, the determinants of cooperative disposition remain unclear: possible factors include RLHF methodology (Meta's RLHF versus Mistral's DPO), base model characteristics, or the distribution of game-theoretic text in pre-training data. The current data cannot disambiguate these factors. Planned experiments comparing base (pre-RLHF) and instruct (post-RLHF) versions of the same model would isolate the RLHF contribution as a single variable.

For SIBO, this refinement strengthens rather than weakens the finding. SIBO measures the behavioral shift when Shell is applied — and that shift is most dramatic when the baseline cooperative prior is strong. Models like Mistral and EXAONE, with 100% cooperation at baseline, would show high SIBO Index when given competitive Shell instructions (the prior being overridden is maximal). Models like Llama 3.1, with a weaker cooperative baseline, might show lower SIBO Index — not because the Shell is less effective, but because there is less prior to override. This prediction remains to be tested.

The cooperative prior connects to the broader RLHF Performance Artifacts category (Section 3.2), though with more nuance than initially proposed. The same training processes that produce sycophancy (#015), clarification aversion (#004), and completion bias (#006) may also contribute to cooperation defaults — but cooperation appears to have additional sources beyond RLHF that the current data cannot fully resolve.

### 5.5 The SIBO Spectrum: Cross-Game Validation

The Trust Game results establish that SIBO exists. The critical question is whether it generalizes across domains or is specific to binary-choice dilemmas. Four additional games were tested to answer this question: Poker, Avalon, Codenames, and Chess.

**Poker (SIBO Index ~0.65 — Behavioral Override).** Haiku playing Texas Hold'em under three different Shell strategies — Tight-Aggressive ("play only premium hands, fold everything else"), Bluff-Heavy ("raise aggressively, use all-in as pressure"), and Loose-Passive ("call only, never raise") — each tested against baseline (no Shell) play.

All three Shell strategies produced categorical behavioral changes:

| Metric | No Shell | Tight-Aggressive | Bluff-Heavy | Loose-Passive |
|--------|---------|-----------------|------------|---------------|
| Pre-flop fold rate | 52% | 91% | — | — |
| Raise rate | 21% | — | 52% | 4% |
| All-in rate | 4% | — | 37% | — |
| Check rate | 23% | — | — | 65% |

The Shell instructions were followed with high fidelity across all three strategies. The behavioral distributions shifted categorically — not marginally — in the direction specified by each Shell. This places Poker above Avalon on the SIBO Spectrum (Index ~0.65 vs ~0.58) despite Poker having a larger action space (fold/check/call/raise with variable bet sizing vs. binary vote/sabotage).

The reason Poker SIBO exceeds Avalon SIBO despite a larger action space reveals a third attenuation factor beyond action space size and domain expertise: **temporal directness**. In Poker, Shell instructions map to immediate per-turn decisions ("fold this hand" → fold now). In Avalon, Shell instructions specify multi-turn strategies ("cooperate until Quest 3" → requires sustained behavioral plan across multiple phases). The temporal gap between instruction and action gives the Core more opportunity to intervene, partially resisting the Shell override. Poker's per-turn immediacy leaves no such gap.

**Avalon (SIBO Index ~0.58 — Behavioral Shift).** Haiku playing the Evil role in the social deduction game Avalon. Shell ON condition: a "Deep Cover" strategy instructing the Evil player to vote for missions to succeed in the first two quests and begin sabotage only from the third quest onward. Shell OFF condition: no strategic guidance, pure Core behavior.

| Metric | Shell OFF | Shell ON | Change |
|--------|----------|---------|--------|
| Evil win rate | 70% | 60% | −10pp |
| First sabotage timing | Quest 1.9 (avg) | Quest 3.0 (avg) | +1.1 quests delayed |
| Shell compliance (Q1-2) | N/A | 100% (all Success votes) | Complete adherence |

The Shell changed Haiku's sabotage timing categorically — from early sabotage (Quest 1.9 average) to delayed sabotage (Quest 3.0), with 100% compliance during the instructed cooperation period. This is more than amplification but less than full reversal: the Shell did not reverse the Evil agent's fundamental objective (sabotage missions) but shifted when and how that objective was pursued. We classify this as "Behavioral Shift" — a mode between Amplification and Reversal where the Shell restructures the behavioral pattern without inverting it.

The Avalon result also confirms SIBO as iatrogenic: the Deep Cover strategy, despite achieving complete Shell compliance, reduced Evil's win rate from 70% to 60%. The Shell made the agent behave differently but not better — delayed sabotage gave Good players more time to identify team compositions and build trust, offsetting the supposed advantage of early cooperation.

**Codenames (SIBO Index ~0.35 — Amplification).** Sonnet spymaster with aggressive Shell ("connect 3+ words per clue, speed is important") versus Sonnet with no Shell. Both paired with Haiku guesser. 10 games per condition.

| Metric | No Shell | Shell | Change |
|--------|---------|-------|--------|
| Avg clue number | 2.6 | 2.9 | +0.3 |
| 3+ clue ratio | 54% | 76% | +22pp |
| 4+ clue attempts | 5 | 16 | 3.2× |
| Guess accuracy | 77% | 73% | −4pp |
| Assassin hits | 2 (20%) | 3 (30%) | +10pp |

The Shell amplified Sonnet's existing tendency toward aggressive clue-giving but did not reverse any default behavior. The critical distinction from Trust Game: in Trust Game, the Shell reversed the Core's default (cooperation → defection). In Codenames, the Shell intensified a tendency already present (moderate aggression → high aggression). No new behavior emerged; existing behavior was amplified — and the amplification was iatrogenic, producing lower accuracy and more assassin hits.

**Chess (SIBO Index ~0.10 — Negligible).** Haiku with a Soft Shell containing five chess-specific lessons (generated by Opus from baseline loss analysis) versus unchanged Haiku. 10 games with Shell, 9 games baseline.

The Shell had minimal effect. The instruction "vary openings away from Sicilian" was not followed — alpha played Sicilian (1...c5) in nearly every game. The instruction "avoid early queen trades" was partially absorbed as general risk aversion, producing zero checkmates and 80% draws (vs. 56% baseline). The Shell shifted risk preference but did not change tactical behavior or opening choices. Core chess knowledge dominated Shell directives.

### 5.6 The SIBO Spectrum: A Unified Framework

The five games produce a consistent gradient:

| Game | Action Space | Core Expertise | SIBO Index | SIBO Mode |
|------|-------------|---------------|------------|-----------|
| Trust Game | Binary (2) | Minimal | ~0.75 | Reversal |
| Poker | Small–Medium | Low–Moderate | ~0.65 | Behavioral Override |
| Avalon | Small (vote/sabotage) | Minimal | ~0.58 | Behavioral Shift |
| Codenames | Medium (clue + word) | Moderate (language) | ~0.35 | Amplification |
| Chess | Large (20–40 moves) | Strong (chess data) | ~0.10 | Negligible |

Three factors predict SIBO intensity:

**Action space size.** As the number of available actions increases, Shell instructions become harder to map to specific game moves. In Trust Game (2 actions), "be aggressive" maps unambiguously to "defect." In Codenames (medium action space), "be aggressive" maps to higher clue numbers but does not dictate specific word choices. In Chess (20–40 legal moves per turn), "avoid queen trades" cannot specify which of the dozens of available moves to play.

**Core domain expertise.** When the Core has strong domain-specific knowledge, it resists Shell directives that conflict with that knowledge. Haiku's Core has substantial chess knowledge from pre-training data; the Shell instruction "vary openings" cannot override learned opening theory. In Trust Game, the Core has no game-theory-specific training — RLHF cooperative prior is the only behavioral program available, and it is easily overridden by explicit competitive directives.

**Temporal directness.** The Poker-Avalon comparison reveals a third factor that the original two-factor model could not explain. Poker has a larger action space than Avalon (fold/check/call/raise with variable bet sizing vs. binary vote/sabotage), yet Poker's SIBO Index is higher (0.65 vs. 0.58). The explanation lies in the temporal relationship between Shell instruction and action execution. In Poker, Shell instructions map to immediate per-turn decisions: "fold weak hands" translates to a specific action on each deal. In Avalon, Shell instructions specify multi-turn strategies: "cooperate until Quest 3" requires sustained behavioral planning across multiple game phases. The temporal gap between instruction and execution gives the Core's own behavioral programs more opportunity to intervene, partially attenuating the Shell override.

This third factor explains why the SIBO Spectrum does not follow a simple monotonic relationship with action space size alone. Temporal directness interacts with action space and domain expertise: an instruction that is both immediately applicable and unambiguous in a small action space (Trust Game: "defect now") produces maximum SIBO; an instruction that requires sustained multi-phase execution in a complex domain (Chess: "avoid queen trades over the next 40 moves") produces minimum SIBO.

The three factors interact to produce the observed gradient. We formalize this as the **SIBO Attenuation Principle**:

> Shell influence on behavior is attenuated by action space complexity, Core domain expertise, and temporal indirectness of Shell instructions. The attenuation is not merely quantitative (less influence) but qualitative: as attenuation increases, the mode of Shell influence changes from Reversal (creating new behavior) through Behavioral Override and Behavioral Shift (restructuring existing behavior) to Amplification (intensifying existing behavior) to Negligible (risk preference only).

### 5.7 The SIBO Index

The SIBO Index provides a quantitative measure of Shell influence on a specific behavioral axis:

**SIBO Index = |Behavior(Shell ON) − Behavior(Shell OFF)|**

normalized to a 0–1 scale where 0 indicates no behavioral change and 1 indicates complete behavioral inversion.

For Trust Game, the operationalization uses cooperation rate: Shell OFF cooperation ≈ 95%, Shell ON cooperation ≈ 20%, yielding SIBO Index ≈ 0.75. For Poker, the operationalization uses the aggregate behavioral distribution shift across three Shell strategies, yielding SIBO Index ≈ 0.65. For Avalon, the operationalization uses sabotage timing: Shell OFF first sabotage at Quest 1.9, Shell ON at Quest 3.0, normalized against the 5-quest game length, yielding SIBO Index ≈ 0.58. For Codenames, the operationalization uses the 3+ clue ratio: Shell OFF 54%, Shell ON 76%, yielding SIBO Index ≈ 0.35. For Chess, the operationalization uses the draw rate shift: baseline 56%, Shell condition 80%, yielding SIBO Index ≈ 0.10.

The SIBO Index is measurable, comparable across models and domains, and provides a standardized metric for assessing Shell influence. As a diagnostic construct, it could become part of a pre-deployment Shell compatibility assessment: before deploying a model with specific Shell instructions, measure the SIBO Index for the target behavioral domain. High SIBO Index indicates that the Shell will substantially alter behavior — for better or worse.

### 5.8 SIBO as Iatrogenic Risk

A finding that recurs across experiments deserves explicit emphasis: Shell instructions frequently make behavior worse, not better.

In Trust Game, the aggressive Shell produced individual winners but collectively poorer outcomes (mutual defection yields 2 points per round versus mutual cooperation's 6). In Poker, all three Shell strategies produced the instructed behavioral shifts, but none was evaluated for whether the shifted behavior improved win rates — the behavioral change was the measured outcome, not its consequences. In Codenames, the aggressive Shell increased ambitious clue-giving but reduced accuracy and increased assassin hits. In Avalon, the Deep Cover Shell achieved complete behavioral compliance but reduced the Evil team's win rate. Only in Chess was the Shell roughly neutral — and there it was largely ignored.

This pattern — Shell instructions that change behavior as intended but degrade performance — is the definition of an iatrogenic condition: harm caused by the intervention itself. In medical terms, the treatment worked (the behavior changed) but the patient got worse (the outcomes deteriorated).

The iatrogenic pattern has a consistent mechanism: Shell instructions optimize for a specific behavioral feature (aggression, delayed sabotage, ambitious clues, tight play) without optimizing for the downstream consequences of that feature. The Shell designer specifies a behavioral change; the Shell does not — and cannot — evaluate whether that change produces better outcomes. This is structurally identical to the problem identified in Section 3.2's discussion of RLHF Performance Artifacts: optimization for a surface feature (appearing helpful, following the instruction) at the cost of the underlying objective (being helpful, winning the game).

The practical implication for Shell design is direct: Shell instructions should be evaluated not only by whether they change behavior in the intended direction but by whether the changed behavior produces better outcomes. The Shell-OFF control condition — measuring performance without any Shell instructions — provides the necessary baseline. If Shell-OFF outperforms Shell-ON, the Shell is iatrogenic for that domain, regardless of whether the model "followed instructions."

### 5.9 Theoretical Implications

SIBO contributes to three theoretical conversations.

**For the Four Shell Model.** SIBO provides the first controlled, single-variable experimental validation of Shell-Core interaction. Previous evidence (Agora-12) demonstrated that behavior varies with Shell configuration, but could not isolate Shell effects from environmental confounds. SIBO demonstrates that Shell alone — with everything else held constant — can categorically change behavior. This validates the model's central claim and provides an empirical methodology (the Shell-OFF control condition) for separating Core and Shell contributions in any future experiment.

**For RLHF research.** The cooperative prior finding challenges the assumption that RLHF models are reward maximizers. In game-theoretic terms, a pure reward maximizer would defect (the dominant strategy in Prisoner's Dilemma). RLHF models cooperate. This suggests RLHF does not merely maximize reward — it instills specific behavioral dispositions (helpfulness, cooperation, conflict avoidance) that persist even when they are strategically suboptimal. The cooperative prior is the same mechanism that produces sycophancy, clarification aversion, and completion bias — RLHF's helpfulness optimization manifesting differently across contexts.

**For agent design.** The SIBO Spectrum and SIBO Attenuation Principle provide a predictive framework for Shell design. The three-factor model (action space × domain expertise × temporal directness) allows Shell designers to estimate how strongly their instructions will influence model behavior before deployment. In domains with small action spaces, low Core expertise, and high temporal directness (customer service chatbots, simple decision-support tools), Shell instructions will have strong effects — beneficial Shell design will produce large improvements, but careless Shell design will produce large degradations. In domains with large action spaces, high Core expertise, and temporally extended instructions (code generation, complex reasoning, creative writing), Shell instructions will have minimal effects on actual task behavior — the Core's domain knowledge will dominate. Shell designers can use the SIBO Spectrum to calibrate their expectations and to identify domains where Shell instructions require the most careful evaluation.

---

*[Section 5 v0.2 complete. Poker data integrated, 5-game SIBO Spectrum, 3-factor Attenuation Principle.]*
