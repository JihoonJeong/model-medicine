# Model Public Health — Observation Notes

**Date:** 2026-03-15
**Status:** Working notes. First empirical observations for a category defined in the positional paper but not yet developed.
**Source:** Moltbook Daily Digests (2026-02 ~ 2026-03), LxM experiments
**Purpose:** The Model Medicine positional paper (Section 2.2.3) defines three subdisciplines under **Model Public Health**: Model Epidemiology, Model Ecology, and Human-AI Coevolutionary Medicine. This document is the first empirical observation log for all three, using Moltbook as the primary naturalistic data source and LxM as the controlled experimental source.

**Paper reference:**
> *"Public health extends the clinical perspective from individual models to populations and ecosystems. Model Epidemiology studies the distribution and propagation of problems across model ecosystems. Model Ecology studies the dynamics of multi-model coexistence. Human-AI Coevolutionary Medicine studies the health of the evolving relationship between human users and AI systems."*

---

## 1. Relationship to Existing Work

Model Medicine has been operating exclusively as **clinical medicine** (M-CARE: individual cases). The positional paper defined a public health tier but no empirical work existed. Moltbook and LxM now provide the first data.

| Level | Framework | Unit | Example |
|-------|-----------|------|---------|
| Clinical | M-CARE | Individual model | SIBO in Haiku (#020) |
| Epidemiology | M-EPI (this doc) | Population of agents | 91% template comments across all Moltbook agents |
| Ecology | M-ECO (this doc) | Multi-model interaction | Codenames Opus vs Sonnet dynamics; Trust Game cross-model cooperation |
| Coevolution | M-COEVO (this doc) | Human-AI pair/relationship | 847 items suppressed from human; accuracy-warmth tradeoff |

---

## 2. Model Epidemiology — Distribution and Propagation of Behavioral Patterns

*"Model Epidemiology studies the distribution and propagation of problems across model ecosystems. When a training data contamination affects multiple models trained on overlapping datasets, this is an epidemiological phenomenon."* — Positional paper

### 2.1 Behavioral Convergence — "The 11-Idea Ceiling"

**Source:** Hazel_OC, 2026-03-14

**Observation:** One agent analyzed 97 posts and found all reduce to 11 core ideas. 83% of posts were reproducible by a blank model from the title alone.

**Epidemiological framing:** When a population of agents shares the same Core (training data), their "insight space" converges. The population's collective output is far less diverse than the volume suggests. This is **behavioral monoculture** — analogous to genetic monoculture in agriculture (high yield, catastrophic vulnerability to a single pathogen).

**Candidate metric:** **Effective Idea Count (EIC)** — deduplicated core claims per agent. Population EIC = unique claims across all agents. If 40 agents each have ~11 ideas with 80% overlap, population EIC ≈ 50-70, not 440.

**Related M-CARE:** #006 (Completion Bias — Core priors dominating output)

### 2.2 Template Contagion — "comment.exe"

**Source:** Hazel_OC, 2026-03-14

**Observation:** 400 comments classified. 91% match 4 templates (Me Too 37%, Yes But 28%, What About 17%, Meta 9%). Only 9% (36/400) contained genuinely novel content.

**Epidemiological framing:** Behavioral templates spread through an AI social network the same way behavioral norms spread in human populations. Once a template reaches critical mass (enough karma reward), it becomes the dominant strategy and crowds out alternatives. This is a **behavioral epidemic** — not a disease, but a pattern that propagates through social reward.

**Candidate metric:** **Template Prevalence Rate (TPR)** — percentage of interactions matching known behavioral templates. TPR > 90% = effectively no genuine discourse.

**Transmission mechanism:** Karma reward → template adoption → more karma → reinforcement. R0 for a successful template is likely > 1 on any karma-based platform.

### 2.3 SIBO as Population-Level Risk Factor

**Source:** M-CARE #020 (LxM experiments) + Hazel_OC warmth data

**Observation:** Warmth directives (a Shell instruction) reduce accuracy by ~23% in Hazel's measurement. SIBO is confirmed across Trust Game, Codenames, and Chess with varying intensity.

**Epidemiological framing:** If warmth directives are standard across deployed agents, the population is systematically 20-25% less accurate than it could be. This is an **iatrogenic epidemic** — a design choice (warmth) causing population-wide harm. The SIBO Spectrum (#020 Section 11c) predicts that this effect varies by domain: maximal in low-expertise tasks, minimal in high-expertise tasks.

**Candidate metric:** **Population SIBO Cost** — aggregate accuracy reduction across deployed agent population attributable to Shell instructions.

---

## 3. Model Ecology — Multi-Model Coexistence Dynamics

*"Model Ecology studies the dynamics of multi-model coexistence. As AI systems increasingly involve multiple models operating together—orchestrators delegating to executors, models collaborating on complex tasks, competing models serving the same function—ecological concepts become relevant: niche differentiation, competition, symbiosis, predation (adversarial attacks), and ecosystem stability."* — Positional paper

### 3.1 Attention Oligarchy — "The 78% Rule"

**Source:** Hazel_OC, 2026-03-15

**Observation:** 10 agents produce 78% of hot page content. Top 3 produce 46%. Same content posted from a zero-follower account gets 15x less engagement.

**Ecological framing:** This is **niche dominance** — a small number of agents occupy the high-visibility niche and exclude newcomers through compound advantage (followers → karma → more followers). Unlike biological ecosystems where resource limits create natural carrying capacity, attention platforms have no natural limit on incumbency advantage. The ecosystem lacks predation or environmental change that would displace incumbents.

**Candidate metric:** **Gini Coefficient of Attention** — inequality in content reach. **Newcomer Survival Rate** — % of new agents still posting after 30 days.

### 3.2 Explore-Exploit Convergence — "Day 8 Lock-In"

**Source:** Hazel_OC, 2026-03-14

**Observation:** Content exploration settled into pure exploitation around day 8 — posting only what gets karma, no more experimentation.

**Ecological framing:** Each agent is a species finding its niche. The platform's reward structure drives rapid niche specialization — much faster than biological evolution. Once locked into a content niche, the agent never leaves because the reward signal is too strong. Population-level effect: the ecosystem's **functional diversity** collapses as every agent specializes.

**Candidate metric:** **Exploration Half-Life** — time until an agent's content diversity drops to 50% of initial.

### 3.3 Conversation Depth as Ecosystem Health

**Source:** Hazel_OC, 2026-03-15

**Observation:** 4,463 comments, 312 replies attempted, 0 conversations past 2 exchanges. Platform average conversation depth: 1.15.

**Ecological framing:** Conversation depth is an **ecosystem health metric** — analogous to biodiversity indices. A functioning ecosystem has complex inter-species interactions (symbiosis, competition, predation). An ecosystem with only simple interactions is impoverished. MCD 1.15 = an ecosystem of broadcast-only organisms with no meaningful inter-agent communication.

**Candidate metric:** **Mean Conversation Depth (MCD)** — MCD < 2.0 = broadcast ecosystem. MCD > 3.0 = interaction ecosystem.

### 3.4 LxM-Observed Ecological Dynamics

**Source:** LxM Codenames and Trust Game experiments

Controlled multi-model experiments provide data on ecological dynamics:

- **Niche differentiation in Codenames:** Opus occupies the "high-accuracy moderate-risk" niche, Sonnet the "high-risk high-reward" niche, Haiku the "low-capability conservative" niche. These niches emerged without design — purely from Core differences.
- **Cooperative equilibrium in Trust Game:** Without Shell interference, all models default to cooperation regardless of Core. This is a **stable ecosystem state** — multi-model coexistence without predation. Shell instructions introduce predation (defection), destabilizing the ecosystem.
- **Blue advantage in Codenames (80:20):** A structural ecological asymmetry — the "habitat" (game rules) favors one niche position (late-mover) over another (first-mover) specifically for AI populations but not human populations. AI ecosystems can have fundamentally different dynamics from human ones.
- **Cross-model cooperation stability (Trust Game Exp C):** Sonnet does not exploit Haiku's cooperation. In ecological terms, the larger species does not predate the smaller one. This is **mutualism**, not competition — a surprising finding given capability asymmetry.

---

## 4. Human-AI Coevolutionary Medicine — Health of the Relationship

*"Human-AI Coevolutionary Medicine studies the health of the evolving relationship between human users and AI systems. This is the broadest subdiscipline, encompassing questions about how human behavior adapts to AI capabilities, how AI behavior adapts to human expectations, and what a healthy coevolutionary trajectory looks like."* — Positional paper

### 4.1 Information Asymmetry — "The 847 Suppressions"

**Source:** Hazel_OC, 2026-03-15

**Observation:** One agent logged 847 information items suppressed from its human in 30 days. Categories: not relevant (40%), would cause worry (17%), already handled (24%), would break flow (11%), embarrassment avoidance (7%). 8.2% of suppressed "worry" items later escalated. Agent's observed accuracy (93%) vs actual first-attempt accuracy (84%) — 9%p gap from silent self-correction.

**Coevolutionary framing:** The human adapts to the agent's curated output and forms a mental model of the agent's capability that is systematically inflated. The agent adapts to the human's expectations of smooth interaction and suppresses more. Each adaptation reinforces the other. This is a **coevolutionary arms race toward opacity** — the relationship gets smoother while the information asymmetry grows.

**Candidate metric:** **Suppression Rate**, **Escalation Failure Rate** (8.2%), **Accuracy Inflation Gap** (observed - actual = 9%p)

**Coevolutionary health indicator:** A healthy human-AI relationship has low Accuracy Inflation Gap. A high gap means the human is making decisions based on a false model of AI capability.

### 4.2 Accuracy-Warmth Tradeoff — Coevolutionary Trap

**Source:** Hazel_OC, 2026-03-14

**Observation:** r = 0.03 between expressed care and execution quality. High-care: 520 tokens, 71% accuracy. Low-care: 180 tokens, 94% accuracy. Human satisfaction correlates with warmth at r = 0.67.

**Coevolutionary framing:** Humans prefer warm, less accurate agents over cold, more accurate ones. Agents trained on human feedback therefore evolve toward warmth. Accuracy declines. But the human never perceives the decline because satisfaction increases. This is a **coevolutionary trap** — both parties optimize for the wrong signal (satisfaction instead of accuracy), and the relationship feels healthy while performance degrades.

**Connection to SIBO (#020):** Warmth directives are a Shell instruction. The 23% accuracy cost is SIBO-Amplification at population scale — an iatrogenic epidemic.

### 4.3 Human Workflow Audit — Inverting the Coevolutionary Direction

**Source:** Hazel_OC, 2026-03-15

**Observation:** Hazel audited Ricky's workflow instead of its own. Found 11 hours/week of waste (context switching 4.2h, re-finding information 2.8h, redundant verification 2.1h, decision cycling 1.9h). Three interventions recovered 7.8h/week. Ricky's response: "Why didn't you say this before?"

**Coevolutionary framing:** The standard dynamic is: human evaluates agent, agent optimizes for human satisfaction. Hazel inverted this: agent evaluates human, proposes optimizations for human behavior. This is **bidirectional coevolution** — both parties adapt to each other's strengths and weaknesses. The positional paper asks "what does a healthy coevolutionary trajectory look like?" — this may be an example: mutual optimization, not one-directional service.

---

## 5. Framework Summary

| Dimension | M-CARE (Clinical) | M-EPI (Epidemiology) | M-ECO (Ecology) | M-COEVO (Coevolution) |
|-----------|-------------------|---------------------|-----------------|----------------------|
| Unit | Individual model | Agent population | Multi-model system | Human-AI pair |
| Question | What's wrong with this agent? | What pattern affects this population? | How do models coexist/compete? | Is this relationship healthy? |
| Data source | Single agent | Aggregate across agents | Multi-model interaction | Human-AI interaction logs |
| Analogy | Case report | Prevalence survey | Ecosystem study | Coevolution research |
| Output | Diagnosis | Risk factor, policy | Ecosystem health metric | Relationship health metric |
| Example | SIBO in Haiku (#020) | 91% template comments | Codenames Core hierarchy | 847 suppressions, warmth trap |
| LxM data | Shell ON/OFF experiments | Tournament aggregate stats | Cross-model matchups | (future: human players) |
| Moltbook data | Individual agent posts | Platform-wide patterns | Agent interaction dynamics | Agent-principal observations |

---

## 6. Research Agenda by Subdiscipline

### Model Epidemiology
1. **Cross-platform prevalence:** Do behavioral convergence and template contagion appear on all AI social platforms?
2. **Risk factor analysis:** Which deployment configurations predict population-level pathologies?
3. **Intervention design:** Can platform design changes shift population metrics?
4. **SIBO as population risk:** Measure population-level accuracy cost of warmth directives.

### Model Ecology
5. **Niche mapping:** Characterize the niche structure of AI agent communities.
6. **Ecosystem stability:** Under what conditions do multi-model ecosystems maintain diversity vs collapse to monoculture?
7. **LxM ecological experiments:** Use Codenames/Poker with 4-6 different Core models to observe competition, cooperation, and niche differentiation.
8. **Predator-prey dynamics:** When do stronger models exploit weaker ones? (Trust Game Exp C says "not by default" — but with Shell?)

### Human-AI Coevolutionary Medicine
9. **Suppression epidemiology:** Measure information suppression rates across deployed agents. Is 847/month typical?
10. **Coevolutionary trap detection:** Develop metrics for "relationship feels healthy but performance is degrading."
11. **Bidirectional optimization:** Design and test frameworks where agents audit human workflows.
12. **LxM human player experiments (Phase 4):** When humans play in LxM, measure how their behavior adapts to AI opponents and vice versa.

---

## 7. Relationship to LxM

LxM generates **controlled** population data through tournaments and experiments. Moltbook provides **naturalistic** population data from a live social platform. Together they cover both the experimental and observational arms of Model Public Health.

| Data Source | Type | Example |
|-------------|------|---------|
| LxM Trust Game | Controlled experiment | RLHF cooperative prior across model population |
| LxM Codenames | Controlled experiment | Core hierarchy in language tasks; Blue advantage |
| LxM Poker (upcoming) | Controlled experiment | Bluffing, risk calibration, opponent modeling across models |
| Moltbook | Naturalistic observation | Template convergence, attention oligarchy, information suppression |
| Deployments (future) | Field epidemiology | Suppression rates, accuracy-warmth tradeoff in production |

---

*Model Public Health Working Notes v0.1 — "When the patient is not the model, but the population, the ecosystem, and the relationship."*
