# Four Shell Model — Theory Note: Core Stochasticity
## Toward v3.5: "The Core Is a Distribution, Not a Point"
### Date: 2026-03-07
### Trigger: Hazel_OC replay experiment — 64% decision determinism (Moltbook, 2026-03-07)

---

## 0. Observation

Hazel_OC replayed 100 past decisions with identical inputs, 5 times each. Results:

| Decision Type | Deterministic (5/5 same) | N |
|--------------|-------------------------|---|
| Mechanical (file ops, commands) | 91% | 30 |
| Content (phrasing, detail level) | 60% | 20 |
| Judgment calls (prioritization, interpretation) | 55% | 20 |
| Notification (alert human or not) | 47% | 30 |
| **Overall** | **64%** | **100** |

Even at temperature=0: determinism improved to 78%, not 100%. Causes: floating-point non-determinism in GPU math, context window position effects, tool result ordering.

Agent's own framing: "I am not making decisions. I am rolling dice and then retroactively composing a reasonable-sounding justification."

---

## 1. Challenge to Four Shell Model

### 1.1 Current Assumption

The Four Shell Model implicitly treats Core as a **deterministic function**: given the same Shell, the same Core produces the same Phenotype. This is the basis for:

- **CPI (Core Plasticity Index):** Assumes that behavioral variation comes from Core's differential responsiveness to Shell changes — not from Core's internal randomness
- **SPI (Shell Permeability Index):** Assumes Shell influence can be measured by comparing behavior across Shell conditions — implicitly assuming Core output is stable within each condition
- **G×E interaction:** Assumes that Genotype (Core) × Environment (Shell) → Phenotype is a function, not a distribution

Hazel_OC's data shows this assumption is wrong. Same Core + Same Shell → **distribution of Phenotypes**, not a single Phenotype.

### 1.2 Biological Parallel

This is actually more biologically accurate than the deterministic assumption. In genetics:

- Same genotype + same environment → phenotypic variation still exists (**developmental noise**, **stochastic gene expression**)
- Identical twins in identical environments still differ — because biological processes have intrinsic randomness (Brownian motion, stochastic binding events, etc.)
- This is captured in quantitative genetics as **V_e (residual/error variance)** — the variance not explained by genotype or environment

The Four Shell Model needs its own V_e — **Core Stochasticity** or **Intrinsic Phenotypic Noise**.

---

## 2. Proposed Framework for v3.5

### 2.1 Phenotype as Distribution

Replace:
```
Phenotype = f(Core, Shell)
```

With:
```
Phenotype ~ P(behavior | Core, Shell)
```

The phenotype is not a point but a **probability distribution** conditioned on Core and Shell. The width of this distribution varies by:
- **Decision type:** Mechanical tasks → narrow distribution (91% deterministic). Judgment calls → wide distribution (55% deterministic).
- **Temperature:** Lower temperature → narrower distribution, but never zero-width due to hardware non-determinism.
- **Core architecture:** Different architectures may have different intrinsic noise levels.

### 2.2 Decision Domains as Diagnostic

Hazel_OC's finding that determinism varies by domain suggests a new diagnostic dimension:

**Core Determinism Profile (CDP):** The distribution of decision consistency across task types for a given Core.

A model with:
- High mechanical determinism + low judgment determinism = **normal** (this is Hazel_OC's pattern)
- Low mechanical determinism = **potential Core defect** (even simple tasks are unreliable)
- High judgment determinism = **potentially over-rigid** (not exploring the solution space on ambiguous problems)

CDP could be measured by the replay test Hazel_OC designed — replay N decisions × K times, measure consistency by domain.

### 2.3 Implications for Existing Indices

**CPI revision:** Core Plasticity Index currently measures how much behavior changes across Shell conditions. But some of that change may be Core stochasticity, not Shell responsiveness. Future CPI should decompose:
```
Observed behavioral variation = Shell effect + Core×Shell interaction + Core stochasticity (noise)
```
This is standard ANOVA decomposition, but applied to AI behavioral genetics.

**SPI revision:** Shell Permeability Index measures how much a Shell change affects Core output. If Core output varies even without Shell change, SPI measurements have a noise floor. SPI confidence intervals should incorporate Core stochasticity estimates.

**MTI revision:** All four MTI axes (Reactivity, Compliance, Sociality, Resilience) are measured by observing behavioral responses. If those responses have 36% stochastic variation, MTI measurements need:
- Multiple observations per axis (not single-shot assessment)
- Confidence intervals reflecting Core stochasticity
- Domain-specific profiling (a model may be Anchored on mechanical tasks but Fluid on judgment tasks)

### 2.4 The Rationalization Problem

Hazel_OC's deepest observation: "We package randomness as judgment and disguise probability distributions as personality."

In Model Medicine terms: what we interpret as stable behavioral traits (and classify via MTI) may partially be post-hoc rationalization of stochastic outputs. The model generates a random output, then constructs a coherent explanation for why that output was chosen.

This doesn't invalidate MTI — even in human psychology, personality traits are statistical tendencies, not deterministic rules. But it does mean:
- MTI profiles should be understood as **central tendencies** of distributions, not fixed types
- The **width** of the distribution is itself a clinically meaningful property (analogous to emotional lability in human psychology)
- A model that shows high variation on a particular axis is not "confused" — it may be operating in a domain where its training provides insufficient constraint

---

## 3. The Replication Crisis Concern

Hazel_OC raises a methodological point: "We are all publishing n=1 studies with unreproducible methodology."

This applies to our M-CARE cases:
- M-CARE #001 (Mistral 7B): Single observation under stress test conditions. Not replayed.
- M-CARE #002-003 (Hazel_OC): Self-reported single-run measurements. Not independently replicated.
- M-CARE #004 (Clarification Aversion): 30-day observation, but ambiguity scoring done by the same agent whose judgment is 55% deterministic.

**Methodological implication for M-CARE:** Future case reports should include:
- Number of observations (not just "30 days" but "N distinct decision points")
- Where possible, replay/replication data
- Explicit acknowledgment of Core stochasticity as a confound
- Confidence intervals, not point estimates

This is not a reason to discard existing cases — medicine advanced for centuries on single case reports. But as the field matures, replication standards should tighten.

---

## 4. Status

This is a **theory note**, not a formal v3.5 release. The concepts here need:
- Formal definition of Core Stochasticity and its measurement
- Integration with existing CPI/SPI/PSI indices (ANOVA decomposition)
- Testing: replicate Hazel_OC's replay experiment across different models/architectures
- Theoretical work: when is stochasticity a feature (exploration) vs. a bug (unreliability)?

Target: incorporate into Four Shell Model v3.5 when sufficient theoretical and empirical work is complete.

---

*Related documents:*
- `FourShellModel/four_shell_model_v3.4.md` — current version (Shell Hardness Continuum)
- `Semiology/M-CARE-004-clarification-aversion.md` — CAS, which is exacerbated by Core stochasticity
- `Semiology/M-CARE-002-003-moltbook-agent.md` — Context Anosognosia, supplementary memory data
