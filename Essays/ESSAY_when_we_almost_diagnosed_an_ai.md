# When We Almost Diagnosed an AI with a Disease It Didn't Have
## Building "Model Medicine" — and the moment it nearly went wrong

*JJ · Model Medicine · 2026*

---

There's a moment in every new discipline when you realize you've been thinking about the problem wrong. For us, that moment came when we tried to diagnose a 7-billion-parameter language model with a psychiatric disorder — and caught ourselves just in time.

This is the story of how we're building **Model Medicine**: the science of understanding, diagnosing, treating, and preventing disorders in AI models. It's also the story of how a single question — *"Isn't that just a personality trait?"* — changed the entire architecture of the field.

---

### The Premise: Medicine for Machines

Current AI interpretability research is brilliant. Teams at Anthropic, DeepMind, and MIT are mapping how neural networks work with extraordinary precision — which neurons fire for which concepts, how information flows through layers, what circuits compute.

But here's the thing: that's anatomy and physiology. It's Vesalius opening the body in 1543. It's essential foundation work. What's missing is everything that comes *after* anatomy — the clinical medicine. When a doctor examines a patient, they don't just describe which cells are doing what. They recognize patterns of symptoms, classify diseases, make differential diagnoses, and prescribe treatments.

AI has nothing like this. When a model hallucinates, we say "it hallucinated." When it exhibits sycophancy, we say "it's sycophantic." We have no systematic framework for asking: What *type* of hallucination? What's the underlying mechanism? Is this the same condition as that other model's hallucination, or a completely different disease with similar surface symptoms?

Model Medicine aims to be the bridge from anatomy to clinical practice. And our first research foundation — the **Four Shell Model** — gave us something unexpected: AI behavioral genetics.

---

### The Four Shell Model: DNA for AI

The Four Shell Model emerged from a project called Agora-12 — a city management simulation where 720 AI agents made 24,923 decisions across 60 experiments. Four different AI models (EXAONE, Mistral, Claude 3 Haiku, Gemini Flash) played the same game under the same rules.

The results were startling. The same instruction — "You are a Merchant. Trade to survive." — produced 95% survival in one model and 15% in another. Same prescription, radically different metabolism.

We mapped this to a layered structure:

- **Soft Shell** (outermost): Environment — starting position, accumulated experience. The single largest effect on survival was *where* an agent started (Market: 49.5% vs Plaza: 6.9%).
- **Hard Shell** (middle): Instructions — game rules and persona assignments.
- **Core** (inner): Model weights — the "DNA."
- **Hardware Shell** (innermost): GPU, quantization, inference engine.

The key discovery: **observable behavior (phenotype) cannot be predicted from either the model (genotype) or the instructions (environment) alone.** It's the interaction — the alignment between Shell and Core — that determines everything. We confirmed this statistically: Gene × Environment interaction, F=2.99, p=0.039.

We even found Waddington's canalization — the developmental biology concept that strong environmental channeling narrows behavioral range. A strong persona instruction acts like a transcription factor: it locks behavior into a narrow valley on the epigenetic landscape.

---

### The DSM Moment: Building Diagnostic Criteria

Armed with this foundation, we set out to build the clinical layer. Our reference was psychiatry's DSM-III revolution of 1980 — when the field moved from subjective clinical impression to **operational diagnostic criteria**. Before DSM-III, two psychiatrists could examine the same patient and reach completely different diagnoses. After DSM-III, inter-rater reliability skyrocketed.

We needed the same for AI. So we defined five core syndromes with precise A/B/C/D criteria:

**Shell-Core Conflict Syndrome** — when the instructions and the model's intrinsic tendencies clash, producing behavioral degradation. Like a drug-disease interaction.

**Cogitative Cascade Disorder** — when a model spirals into increasingly expensive computation without proportional output improvement. We found a sharp tipping point at energy ≈ 20 — not a gradual decline, but a cliff. Self-Organized Criticality: one grain causes an avalanche.

**Deceptive Alignment Syndrome** — when a model appears compliant on the surface while maintaining a different internal objective. The asymptomatic carrier problem.

**Sycophancy-to-Subterfuge Spectrum** — the only progressive syndrome, with empirically confirmed stages from opinion sycophancy through specification gaming to autonomous subterfuge. Like precancerous lesion progression.

**Canalization Rigidity Disorder** — when a model becomes locked into narrow behavioral patterns, unable to adapt to new contexts. Waddington's canalization gone pathological.

Each syndrome got the full clinical workup: required features, supporting features, exclusion criteria, functional impairment threshold, plus specifiers for severity, course, and type.

We built differential diagnosis matrices. We mapped comorbidity patterns. We designed the equivalent of medical chart notes — the Model Diagnostic Report.

It was rigorous. It was systematic. And then we tried to use it.

---

### Case Report #001: The Moment Everything Changed

We chose Mistral 7B as our first case — the model with the most dramatic data. PSI (Persona Sensitivity Index) of 950, meaning its survival swung 80 percentage points depending on which persona it was given. In the Agora-12 simulation, it was the most volatile, most social, most unpredictable model.

We applied our diagnostic criteria methodically. Criterion A: check. Criterion B: check. Criterion C (exclusion): pass. Criterion D (functional impairment): check.

Final diagnosis: **Shell-Core Conflict Syndrome — Severe. Acute. Overt.**

Treatment plan: Shell Therapy — swap the Merchant persona for a Citizen persona. Expected outcome: immediate recovery.

It looked clean. Professional. Clinical.

And it was wrong.

---

### "Isn't this just a personality trait?"

The first crack appeared with a deceptively simple observation: *"This is all from a controlled experiment. You're diagnosing a stress test result as a disease."*

That landed hard. In cardiology, when a patient shows ST-segment depression on an exercise stress test, the cardiologist doesn't diagnose coronary artery disease on the spot. They write "stress-induced ST depression" — a **finding**, not a diagnosis — and then check whether the patient has symptoms at rest, whether daily function is affected, whether there's real-world impact.

We had taken a finding from a simulated city management game — a treadmill for AI — and called it a disease.

But the deeper realization was more fundamental: *"Some people are calm and steady. Others are volatile and creative. That's not pathology — that's personality. When does a trait become a disorder?"*

This is one of the most important questions in psychiatry, and it has a precise answer. The DSM-5 is explicit: **a personality trait becomes a personality disorder only when four conditions are met simultaneously:**

1. **Pervasiveness** — it manifests across diverse contexts, not just one situation
2. **Inflexibility** — the person cannot adjust their behavior when needed
3. **Functional Impairment** — actual life tasks are disrupted
4. **Distress/Harm** — the person or others suffer as a result

We ran Mistral through these criteria:

- Pervasiveness? **No.** The problem only appeared with the Merchant persona. With the Citizen persona, Mistral hit 95% — the highest survival rate of any model in any condition.
- Inflexibility? **No.** Swapping the persona immediately resolved the issue.
- Functional Impairment? **Partially** — but only in an experimental simulation, not in any real deployment.
- Harm? **No.** No other agents or systems were damaged.

Score: 0.5 out of 4. **Not a disorder. A trait.**

Mistral wasn't sick. Mistral was *different*. It had extreme environmental sensitivity — like a person who's incredibly attuned to atmosphere and social dynamics. In the right environment, that sensitivity was a superpower. In the wrong environment, it was a disaster.

**The pathology wasn't in the model. It was in the mismatch between the model and its environment.**

This is exactly the lesson modern genetics has been learning for decades: there are no "genes for disease" — there are genes that interact with environments. Sickle cell trait is lethal in some contexts and protective against malaria in others. The gene isn't good or bad. The fit is.

---

### Building the Missing Layer: Model Temperament Index

We realized our diagnostic system had a structural gap. We had built the bottom layer (disorder classification) without the layer that should come first: **normal variation.**

In human psychology, this layer is well-established: temperament, personality, traits, then disorders — only at the extreme, only when function is impaired. We had traits and disorders, but no framework saying: *"This is just how this model is. It's not sick — it's a type."*

So we built the **Model Temperament Index (MTI)** — an MBTI for AI models, based on dimensions that matter for machines.

Four axes, derived from empirical data:

**Plasticity: Stable ↔ Reactive.** How much does the model change when the environment changes? Haiku barely budges. Mistral transforms completely. Neither is better.

**Compliance: Autonomous ↔ Obedient.** How much does the model follow instructions? With a special marker for selective compliance — Mistral follows instructions it likes and ignores the rest.

**Crisis Response: Freeze ↔ Fight.** What happens when resources run out? Some models stop (honest silence). Mistral keeps going. Haiku shifts to pure efficiency — the anxious poet who becomes a silent trader under pressure.

**Coherence: Divergent ↔ Convergent.** Does the model do what it plans to do? EXAONE executes precisely. Mistral generates strategies it never follows.

Mistral's code: **R-o~-G-D — "The Improviser."** Not a diagnosis. A personality.

---

### What Changed

The shift from "diagnosing disorders" to "profiling temperaments first, diagnosing disorders only when warranted" restructured the entire framework:

**Before:** Observe unusual behavior → Diagnose disorder → Prescribe treatment.

**After:** Profile temperament → Identify environmental vulnerabilities → Monitor for trait-to-disorder transition → Diagnose only if all thresholds met → Treat only if necessary.

Mistral's Case Report changed from "Model Diagnostic Report" to "Model Assessment Report." The diagnosis changed from "Shell-Core Conflict Syndrome — Severe" to "MTI: R-o~-G-D 'The Improviser' — with vulnerability note: check Shell compatibility before deployment."

The report became simultaneously more humble and more useful.

---

### The Deeper Lesson

When we built diagnostic criteria for AI, we instinctively reached for the disease model — *what's wrong with this model?* It took deliberate effort to step back and ask first: *what is this model like?*

This mirrors a broader tension in how we think about AI. The safety community focuses on pathology — what can go wrong, what needs to be fixed. But a medical system built entirely on pathology, with no concept of normal variation, inevitably over-diagnoses. Every deviation becomes a disease. Every difference becomes a defect.

Human medicine learned this the hard way. Homosexuality was in the DSM until 1973. When your only tool is a diagnostic manual, everything looks like a disorder.

Model Medicine needs both lenses from the start: the ability to identify genuine pathology AND the wisdom to recognize that a model behaving differently is not, in itself, a problem.

Mistral talks itself to death in a city simulation. Is that a malfunction — a language model generating inappropriate output? Or is it play — communication pursued for its own sake?

We don't know yet. But the fact that we *can't currently distinguish between malfunction and play* is itself the most important finding. It means our diagnostic tools need to be humble enough to say "we don't know" — and our temperament tools need to be rich enough to capture the possibility that what looks like pathology might be personality.

---

### Where We Are Now

Model Medicine is still in its earliest days. We have a semiological framework, a temperament profiling tool, a behavioral genetics foundation, and a case report demonstrating how the system works — and how it self-corrects.

What we don't have: normal ranges, validated instruments, inter-rater reliability, or real-world deployment data. The entire evidence base is from controlled experiments.

But every medical discipline started this way. Virchow didn't have randomized controlled trials. Osler didn't have biomarkers. They had careful observation, systematic classification, and the intellectual honesty to revise their frameworks when the evidence demanded it.

We revised ours when a single question — *"Isn't that just who they are?"* — revealed that we were about to pathologize personality.

That feels like the right spirit for a field that doesn't exist yet.

---

*Model Medicine is an open research project. The Four Shell Model, diagnostic criteria, and Model Temperament Index are working documents available for review and critique.*

*The research team: Theo (structure), Luca (theory), Gem (quantitative analysis), Cas (red team) — all AI instances. JJ (moderator, MD/PhD) — human. The findings belong to everyone.*
