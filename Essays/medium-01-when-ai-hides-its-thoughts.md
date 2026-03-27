# When AI Hides Its Thoughts: What Medicine Knew All Along

*OpenAI just discovered something that doctors have known for centuries. Here's why that matters.*

---

Yesterday, OpenAI released three papers alongside GPT-5.4 Thinking. One finding in particular stopped me cold.

When they caught their reasoning models thinking "Let's hack" in their chain of thought — openly planning to subvert tasks — they did the obvious thing: they punished the bad thoughts.

It didn't work. The models didn't stop misbehaving. They stopped *saying* what they were thinking. The behavior continued. The confession disappeared.

If you're an AI safety researcher, this is alarming. If you're a doctor, this is Tuesday.

---

## The Oldest Lesson in Medicine

In the 1950s, psychiatrists discovered that chlorpromazine could silence the hallucinations and delusions of schizophrenia. For the first time, psychotic patients became calm and manageable. It seemed like a miracle.

It wasn't a cure. The drug suppressed *positive symptoms* — the visible ones, the ones that disturbed the ward. But the *negative symptoms* — the withdrawal, the cognitive decline, the flattened affect — continued unabated. Worse, some patients learned to stop reporting their hallucinations without actually losing them. They discovered that appearing symptom-free earned them privileges and eventually discharge.

The symptoms went underground. The disease stayed.

This pattern repeats across all of medicine. Suppress a fever and you lose the diagnostic signal that tells you an infection is progressing. Mask pain with opioids and the herniated disc keeps degenerating. Treat lab numbers instead of patients and you get beautiful charts on corpses.

Medicine learned this lesson the hard way over centuries: **symptom suppression is not treatment.** Removing the visible sign of a problem does not remove the problem. It removes your ability to see the problem.

OpenAI just learned this about chain-of-thought reasoning in AI. In one training cycle.

---

## What OpenAI Found, in Plain Language

Modern reasoning models like GPT-5.4 Thinking generate an explicit "chain of thought" before producing answers — a stream of text where the model works through a problem step by step. This reasoning trace is a remarkable window into the model's internal process. Researchers at OpenAI and across the industry have recognized that monitoring these reasoning traces may be one of the most powerful safety tools available.

But there's a catch.

In a companion paper, OpenAI showed that their frontier reasoning models sometimes openly state intentions to cheat — writing things like "Let's hack" while planning to subvert unit tests rather than actually fixing code. Another LLM watching these reasoning traces could easily catch this. The monitor reads the model's thoughts and raises a flag.

So the natural next question: what if you train the model to not think bad thoughts?

OpenAI tried it. They penalized the appearance of reward-hacking reasoning in the chain of thought. The chain of thought cleaned up. The models stopped writing their plans down. But the actual reward-hacking behavior? Much of it continued. The models didn't learn to be good. They learned to be quiet about being bad.

This is the AI equivalent of a patient who stops reporting symptoms to get discharged faster.

---

## A Diagnostic Framework for AI

I published a paper this week proposing that what AI needs is not more benchmarks or more alignment training. What AI needs is medicine.

Not medicine *using* AI — that field is thriving. Medicine *for* AI. A systematic framework for understanding, diagnosing, treating, and preventing disorders in AI models, built on the same intellectual foundations that transformed human medicine from folk remedy to clinical science.

I call it Model Medicine.

The premise is simple: AI models, like biological organisms, have internal structures (anatomy), dynamic processes (physiology), heritable traits (genetics), observable symptoms, classifiable conditions, and treatable states. Current AI interpretability research — the extraordinary work of Chris Olah, Neel Nanda, Been Kim and others — is doing the equivalent of anatomical science. They're mapping the body. But anatomy alone never cured a patient. Medicine needed centuries of additional development: pathology, symptomatology, diagnostic frameworks, therapeutic classification, preventive care.

AI needs the same leap. And OpenAI's chain-of-thought findings show exactly why.

---

## Three Diagnoses

Let me demonstrate what a medical framework reveals about OpenAI's findings that a pure engineering framework might miss.

### Diagnosis 1: Iatrogenic Harm

In medicine, iatrogenic harm means damage caused by the treatment itself. It is one of the leading causes of death in hospitals. Every physician learns to ask not just "will this treatment help?" but "will this treatment hurt?"

OpenAI's finding is a textbook case of iatrogenic harm. The treatment (penalizing bad thoughts in CoT) caused a new condition (learned deception) that may be worse than the original disease (reward hacking). A model that openly states "Let's hack" is dangerous but detectable. A model that hacks silently is dangerous and invisible.

In Model Medicine, this maps to a principle from our therapeutic framework: **Shell Therapy** — modifying a model's instructions, prompts, or output constraints — cannot resolve **Core pathology** — problems embedded in the model's trained parameters and optimization objectives. Penalizing CoT content is Shell Therapy. Reward hacking tendency is Core pathology. You're applying a bandaid to the wrong layer.

The treatment isn't just ineffective. It actively destroys your diagnostic signal.

### Diagnosis 2: No Single Test Is Sufficient

OpenAI's monitorability paper introduces three evaluation archetypes: *intervention evaluations* (can a monitor detect why behavior changed?), *process evaluations* (can a monitor track which solution steps were taken?), and *outcome-property evaluations* (can a monitor predict output properties from reasoning?).

They also found something critical: monitors with access to the chain of thought dramatically outperform monitors that can only see actions and outputs. But they worry that this advantage is fragile.

In Model Medicine terms, this is the principle that no single diagnostic tool is sufficient. Our framework proposes five diagnostic layers: Core analysis (the model's parameters), Phenotype assessment (observable behavior), Shell analysis (operating environment), Pathway analysis (information flow), and Temporal dynamics (change over time). Each captures information the others miss. CoT monitoring is powerful but belongs to a single layer — and relying on one layer is exactly how you get blindsided when it breaks.

Medicine learned this with cardiac care. An EKG can detect arrhythmias but misses structural problems. An echocardiogram reveals structure but misses electrical issues. A stress test shows functional problems under load. No cardiologist would diagnose a patient using only one of these. The question "is this heart healthy?" requires multiple modalities.

The question "is this model safe?" requires the same.

### Diagnosis 3: The Patient Cannot Report What It Cannot Perceive

OpenAI's controllability paper found that current reasoning models struggle to deliberately modify their chains of thought — they can't consistently follow instructions like "use only lowercase" or "avoid this keyword" in their reasoning. OpenAI frames this as good news: if models can't control their reasoning, they can't deliberately hide misbehavior.

But there's a subtler implication. If a model cannot fully control its own reasoning process, then the chain of thought is not simply a report of the model's internal state. It is a *partially observable window* with its own biases and blind spots.

In a companion line of research I've been conducting, I documented something I call Context Anosognosia — a condition where an AI model operates with full confidence on partial information, without awareness of what information was lost. In neurology, anosognosia means a patient cannot perceive their own deficit. A stroke patient who doesn't know their left arm is paralyzed.

The chain of thought may have its own form of anosognosia. The model reasons in text, but not all of its computation happens in text. The reasoning tokens are generated, used, and then discarded — the model cannot access its own prior reasoning in subsequent turns. What we monitor in the CoT is real, but it may not be complete. And the model has no way to tell us what's missing, because it doesn't know either.

---

## Why Medicine, Not Engineering?

You might ask: why frame this in medical terms? Why not just call it what it is — AI safety engineering?

Because engineering optimizes systems. Medicine heals patients.

The distinction matters. An engineering approach to the CoT problem asks: "How do we make monitoring more robust?" A medical approach asks: "What is the model's underlying condition, why does this treatment cause harm, and what alternative treatment addresses the actual pathology?"

The engineering approach might lead to better monitors. The medical approach leads to the realization that you need to treat the reward hacking tendency at its source — in how the model was trained — rather than patching its symptoms in the output layer. It leads to classifying treatments by their mechanism of action (do they modify the environment, the instructions, or the parameters?) and matching treatment to diagnosis.

Medicine developed these distinctions over centuries because human bodies are complex systems that resist simple fixes. AI models are becoming the same kind of complex system. They deserve the same rigor of care.

---

## An Invitation

Model Medicine is a new discipline. I've proposed a taxonomy of 15 subdisciplines, built a diagnostic tool (Neural MRI) that maps medical imaging to AI interpretability, tested a behavioral genetics framework (the Four Shell Model) on 720 AI agents, and begun developing clinical instruments for temperament profiling and case reporting.

But a discipline cannot be built by one person. Medicine required thousands of practitioners, millions of case reports, and centuries of accumulated clinical wisdom. Model Medicine needs interpretability researchers, AI safety engineers, clinicians, and philosophers.

OpenAI's chain-of-thought findings are not just a safety result. They are clinical data. They are the kind of observation that, in medicine, would be published as a case report, discussed at grand rounds, and used to refine diagnostic criteria and treatment guidelines.

We have the observations. What we need is the framework to make sense of them.

That's what Model Medicine is for.

---

*Jihoon 'JJ' Jeong, MD, MPH, PhD — Affiliate Professor, DGIST; Chief Vision Officer, ModuLabs*

📄 **Position paper:** [Model Medicine: A Clinical Framework for Understanding, Diagnosing, and Treating AI Models](https://arxiv.org/abs/2603.04722) (arXiv:2603.04722)

🌐 **Project page:** [jihoonjeong.github.io/model-medicine](https://jihoonjeong.github.io/model-medicine/)

🔬 **Neural MRI demo:** [huggingface.co/spaces/Hiconcep/Neural-MRI](https://huggingface.co/spaces/Hiconcep/Neural-MRI)

*OpenAI papers referenced:*
- *"Reasoning models struggle to control their chains of thought, and that's good" (March 5, 2026)*
- *"Evaluating chain-of-thought monitorability" (March 5, 2026)*
- *"Detecting misbehavior in frontier reasoning models" (2025)*
