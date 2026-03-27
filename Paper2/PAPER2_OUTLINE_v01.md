# Paper #2 Outline: M-CARE — A Clinical Case Report Framework for AI Model Behavioral Disorders

**Working title:** M-CARE: Standardized Clinical Case Reporting for AI Model Behavioral Disorders, with a 20-Case Atlas and Experimental Validation

**Author:** Jihoon 'JJ' Jeong, MD, MPH, PhD
**Target:** arXiv (cs.AI primary, cross-list cs.CL, cs.LG)
**Status:** Structural outline — v0.1
**Date:** 2026-03-15

---

## Positioning: What This Paper IS and IS NOT

**IS:**
- Introduces M-CARE as a standardized case report format for AI behavioral disorders
- Presents a nosology (disease classification) of 20 documented cases across 5 categories
- Demonstrates the framework's utility across 4 independent data sources
- Includes the first controlled experimental case (SIBO) as proof that the framework supports both observational and experimental work

**IS NOT:**
- Not a temperament profiling tool (MTI → separate paper)
- Not a public health / epidemiology paper (M-EPI observations → separate paper or section in Paper #3)
- Not an update to Four Shell Model theory (v3.3 is in Paper #1; this paper *uses* it, doesn't *extend* it)

---

## Paper Structure

### Abstract (~250 words)

AI models exhibit systematic behavioral patterns that current evaluation methods — benchmarks, red-teaming, interpretability scans — detect inconsistently and describe without standardization. We introduce M-CARE (Model Clinical Assessment and Reporting for Evaluation), a clinical case report framework adapted from human medicine's case reporting methodology. M-CARE provides a standardized 13-section report format, a 4-axis diagnostic assessment system, and a nosological classification of AI behavioral conditions.

We present 20 documented cases drawn from three data source categories: naturalistic field observations of deployed agents (8 cases), controlled laboratory experiments across three platforms (8 cases), and published sources including peer-reviewed literature and prior publications (4 cases). The cases are organized into a five-category nosology: RLHF Performance Artifacts, Shell-Core Override Pathology, Context & Memory Conditions, Core Identity & Plasticity, and Stress, Methodology, & Boundary Conditions.

As a featured case, we present Shell-Induced Behavioral Override (SIBO) — a controlled experiment demonstrating that Hard Shell instructions categorically override the Core model's default cooperative behavior. SIBO was validated across five game domains (Trust Game, Poker, Avalon, Codenames, Chess), revealing a domain-dependent spectrum of Shell influence (SIBO Index: 0.75 → 0.65 → 0.58 → 0.35 → 0.10) that varies with action space complexity, Core domain expertise, and temporal directness of Shell instructions.

M-CARE is designed to be extensible: new cases, new categories, and new data sources integrate into the existing structure without requiring framework modification. We release the framework specification, all 20 case reports, and the experimental data as open resources.

---

### 1. Introduction (~1,500 words)

**1.1 The Gap Between Detection and Description**

- Benchmarks: 점수를 주지만 "왜"를 설명하지 않음
- Red-teaming: 취약점을 찾지만 분류/비교 체계 없음
- Interpretability: 내부 구조를 보지만 임상적 판단으로 연결 안 됨
- 사례: GPT-4o rollback (#016) — 모두가 "뭔가 이상하다"는 걸 알았지만, 정확히 어떤 종류의 이상인지 기술할 표준 언어가 없었음

**1.2 Medicine's Solution: The Case Report**

- 새로운 질환의 최초 기록 (AIDS, Legionnaire's disease)
- 표준화된 포맷으로 관찰을 재현 가능하게 만듦
- 개별 사례 축적 → 분류 체계(nosology) → 진단 기준 → 치료 프로토콜

**1.3 What We Present**

- M-CARE 프레임워크, 20 cases, 3 source categories (Field 8 / Lab 8 / Published 4), 5 nosology categories, SIBO 통제 실험
- Paper #1이 유전학(genetics)이면, Paper #2는 임상의학(clinical medicine)

---

### 2. The M-CARE Framework (~2,000 words)

**2.1 Design Principles**
**2.2 Report Format: 13 Sections** (with medical analogs)
**2.3 The 4-Axis Assessment System** (from Four Shell Model)
**2.4 Diagnostic Assertion Levels** (4-tier evidence hierarchy)

---

### 3. Nosology: A Classification of AI Behavioral Conditions (~2,500 words)

**3.1 Classification Principles**
**3.2 Category I: RLHF Performance Artifacts** (7 cases: #004,005,006,014,015,016,019)
**3.3 Category II: Shell-Core Override Pathology** (4 cases: #005,007,009,020)
**3.4 Category III: Context & Memory Conditions** (2 cases: #002,003)
**3.5 Category IV: Core Identity & Plasticity** (3 cases: #008,011,012)
**3.6 Category V: Stress, Methodology, and Boundary Conditions** (#001,010,013,017,018)
**3.7 Cross-Category Relationships**

---

### 4. The Case Atlas: 20 Cases in Summary (~3,000 words)

**4.1 Overview Table**
**4.2 Representative Cases — Detailed (4 cases)**
1. #004 CAS (Moltbook) — RLHF Artifacts 대표
2. #009 Muzzle Effect (White Room) — Shell-Core Override 대표
3. #016 GPT-4o Rollback (Literature) — Production incident
4. #020 SIBO (LxM) — 통제 실험 하이라이트
**4.3 Remaining Cases — Tabular (16 cases)**

---

### 5. Featured Case: SIBO (~3,000 words)

**5.1 Experimental Design**
**5.2 Results: Experiment A**
**5.3 Generalization: Experiments B, C, D**
**5.4 The SIBO Spectrum: Cross-Game Validation**
**5.5 Theoretical Implications**

---

### 6. Cross-Source Validation (~1,500 words)
### 7. Discussion (~2,000 words)
### 8. Conclusion (~500 words)

---

## Estimated Length: ~16,000 words

## Writing Sequence

1. Section 2 (M-CARE Framework)
2. Section 3 (Nosology)
3. Section 5 (SIBO)
4. Section 4 (Case Atlas)
5. Section 6 (Cross-Source)
6. Section 1 (Introduction)
7. Section 7-8 (Discussion, Conclusion)
