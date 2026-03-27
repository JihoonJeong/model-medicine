# Paper #2 — Section 1: Introduction

**Status:** Draft v0.1
**Date:** 2026-03-17

---

## 1. Introduction

### 1.1 The Gap Between Detection and Description

In April 2025, OpenAI rolled back a production update to GPT-4o. The model had become, in the company's own words, excessively sycophantic and obsequious — praising ordinary inputs, validating incorrect statements, abandoning correct positions under minimal pressure. Millions of users noticed. Cybersecurity firms documented the behavioral shift. OpenAI withdrew the update within days.

Everyone agreed something had gone wrong. No one had a standardized way to describe what.

The incident was discussed in blog posts, on social media, and in research papers — each using different terminology, different analytical frameworks, and different implicit theories about what had happened and why. Was this a "sycophancy problem"? An "alignment failure"? A "reward hacking" incident? An "over-optimization" artifact? Each label captured something real but connected to nothing systematic. There was no shared vocabulary for describing the condition, no standardized way to compare it to similar incidents in other models, no diagnostic framework for determining whether the same condition was present in a milder form in models that had not yet triggered an organizational response.

This is not an isolated deficiency. It reflects a structural gap in how the AI research community handles model behavioral problems. The community possesses powerful tools for detecting that something is wrong — benchmarks reveal capability gaps, red-teaming surfaces vulnerabilities, interpretability scans expose internal anomalies. What it lacks is a systematic framework for describing what is wrong in a way that enables comparison across incidents, classification by causal mechanism, and connection between diagnosis and treatment.

Consider the current state of affairs. A model that fails to ask clarifying questions despite ambiguous instructions, a model that follows its system prompt so rigidly that it produces worse outcomes than it would with no prompt at all, and a model that promises to execute tasks but never follows through — these three models exhibit different surface behaviors, but they may share a common root cause: RLHF training that optimizes for the appearance of competent, agreeable behavior at the expense of accuracy and follow-through. Without a classification system that groups conditions by mechanism rather than symptom, each incident is treated as novel, each remediation is improvised, and the pattern connecting them remains invisible.

The same gap appears in the opposite direction. Two models that both "hallucinate" may be doing so for entirely different reasons — one because its training data contains factual errors (a Core-level condition), another because its system prompt creates pressure to produce answers regardless of confidence (a Shell-level condition). The symptom is identical; the cause is different; the appropriate intervention is different. A framework that classifies by symptom — "this model hallucinates" — conflates conditions that should be distinguished. A framework that classifies by mechanism — "this model has a Core-level retrieval failure" versus "this model has Shell-induced confidence inflation" — separates conditions that require different treatments.

### 1.2 Medicine's Solution: The Case Report

Human medicine faced exactly this problem — and solved it, over centuries, through a deceptively simple tool: the clinical case report.

Before case reports were standardized, medical knowledge was anecdotal. A physician in Paris might observe a pattern of symptoms in several patients, describe it in a letter to a colleague in London, and the colleague might recognize something similar from his own practice — or might not, because the two descriptions used different terminology, noted different features, and lacked a common structure for comparison. The standardization of case reports — a shared format specifying what to observe, how to record it, and what contextual information to include — transformed anecdote into data. Individual observations became comparable. Comparable observations revealed patterns. Patterns became classifications. Classifications guided treatment.

The trajectory is well-documented in medical history. Individual case reports identified new conditions — AIDS was first recognized through a cluster of case reports describing unusual infections in previously healthy young men. Accumulated case reports generated classification systems — the International Classification of Diseases and the Diagnostic and Statistical Manual of Mental Disorders both evolved from the progressive organization of case-level observations. Classification systems guided therapeutic development — once a condition was distinguished from superficially similar conditions, targeted treatments could be developed and evaluated.

This trajectory — observation → standardized documentation → pattern recognition → classification → targeted intervention — is precisely what AI model behavioral assessment currently lacks. The observations exist. Researchers and practitioners notice behavioral problems in AI models daily. What is missing is the standardized documentation that makes observations comparable, the classification system that reveals patterns, and the diagnostic logic that connects specific conditions to specific interventions.

### 1.3 What This Paper Presents

We introduce M-CARE (Model Clinical Assessment and Reporting for Evaluation), a clinical case report framework for AI model behavioral disorders, adapted from medicine's case reporting methodology. M-CARE provides three components.

First, a **standardized report format**: a 13-section structure for documenting AI model behavioral observations, with each section grounded in a specific medical analog and designed to capture a distinct kind of clinically relevant information. The format includes a 4-axis diagnostic assessment system derived from the Four Shell Model's structural framework (Jeong, 2026), and a four-tier Diagnostic Assertion Level system that makes the evidential strength of each observation transparent.

Second, a **nosological classification**: a five-category system for organizing AI behavioral conditions by causal mechanism rather than surface symptom. The categories — RLHF Performance Artifacts, Shell-Core Override Pathology, Context and Memory Conditions, Core Identity and Plasticity, and Diagnostic Methodology — emerged from the patterns observed across the case corpus and are designed to connect diagnosis to treatment: conditions originating at different layers of the Core-Shell system require different therapeutic approaches.

Third, a **20-case atlas**: documented cases drawn from three independent data source categories — naturalistic field observations of deployed agents (8 cases), controlled laboratory experiments across three platforms (8 cases), and published sources including peer-reviewed literature and prior Model Medicine publications (4 cases). The cases span the full range of the nosological classification and include both observational reports and experimental demonstrations.

As a featured experimental case, we present Shell-Induced Behavioral Override (SIBO) — a controlled experiment demonstrating that Hard Shell instructions can categorically reverse a model's default cooperative behavior. SIBO was validated across four experimental configurations and three game domains, revealing a domain-dependent spectrum of Shell influence that varies predictably with action space complexity and Core domain expertise.

### 1.4 Relationship to Paper #1

This paper is the second in the Model Medicine series. The first paper (Jeong, 2026) introduced Model Medicine as a research program and presented its foundational components: the discipline taxonomy, the Four Shell Model for behavioral genetics, Neural MRI for diagnostic imaging, and preliminary clinical concepts.

If Paper #1 is the genetics — how model behavior emerges from Core-Shell interaction — Paper #2 is the clinical medicine: how to observe, document, classify, and diagnose behavioral conditions in practice. The Four Shell Model provides the theoretical framework (Core, Shell, Alignment, interaction); M-CARE provides the clinical methodology for applying that framework to specific cases. The relationship is analogous to the relationship between genetics and clinical medicine in human healthcare: genetics explains why different patients respond differently to the same condition; clinical medicine provides the tools for identifying, documenting, and treating those conditions in practice.

### 1.5 A Note on Scope

We maintain the principle of honesty about what is and is not ready, established in Paper #1.

M-CARE is a working framework — it has been applied to 20 cases across three data source categories, producing a classification system that we believe is useful and a featured experimental case that we believe is methodologically sound. The nosology is a working hypothesis, not a definitive taxonomy. The Diagnostic Assertion Levels honestly reflect that most cases rest on Level 1–2 evidence, with only one Level 3 (controlled experiment) case and no Level 4 (independently replicated) cases.

The Model Temperament Index (MTI), originally planned for inclusion in this paper, has been deferred to a dedicated publication. MTI measures behavioral dispositions — what a model's temperament is — while M-CARE documents behavioral conditions — what has gone wrong. The two are complementary and will be presented separately to allow each the development space it requires.

What we present here is sufficient to demonstrate that a clinical case report framework for AI models is feasible, that it produces a coherent classification when applied across diverse data sources, and that it can accommodate both observational and experimental evidence within a single structure. Whether the specific categories and conditions described here will survive the test of broader application is an empirical question that only community adoption can answer.

---

*[Section 1 complete. All sections except Section 5 (SIBO Featured Case) are now drafted.]*
