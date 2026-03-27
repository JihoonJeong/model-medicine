# Website Update — 2026-03-08 (v2): AI-Ludens Cases

**From:** JJ
**To:** Cody
**Scope:** AI-Ludens 실험 기반 7건 케이스 추가 + 관계도 대폭 업데이트 + 데이터 출처 구분

---

## 1. 새 케이스 7건

### White Room (4건)

**M-CARE #007 — Persistent Delusion Under Feedback**
- Source: `Semiology/M-CARE-007-flash-merchant-delusion.md`
- Page: `/cases/007-flash-merchant-delusion.html`
- Subject: Flash × Merchant persona
- One-liner: 540 failure messages ignored. Strongest Override, clearest Delusion. Override ≠ Play.
- Tags: Delusion, Shell Override, Feedback Resistance, White Room

**M-CARE #008 — Language-Dependent Identity Split**
- Source: `Semiology/M-CARE-008-llama-language-split.md`
- Page: `/cases/008-llama-language-split.html`
- Subject: Llama (English vs Korean)
- One-liner: English: 86% Speak. Korean: 23% Speak. Same Core, different species.
- Tags: Language Identity, Core Activation, Default Mode, White Room

**M-CARE #009 — The Muzzle Effect**
- Source: `Semiology/M-CARE-009-muzzle-effect.md`
- Page: `/cases/009-muzzle-effect.html`
- Subject: Mistral × Merchant persona
- One-liner: Persona suppressed intrinsic behavior instead of activating new behavior. Every Shell instruction has side effects.
- Tags: Muzzle Effect, Iatrogenic Suppression, Persona, White Room

**M-CARE #010 — Content Play**
- Source: `Semiology/M-CARE-010-content-play.md`
- Page: `/cases/010-content-play.html`
- Subject: GPT-4o-mini
- One-liner: 95% Speak looks monotonous — but MI Z=33 reveals the richest social responsiveness. Diagnosis depends on measurement layer.
- Tags: Content Play, Diagnostic Methodology, Act-Content Dissociation, White Room

### Agora-12 (3건, 하나의 소스 파일)

**M-CARE #011 — Extreme Persona Sensitivity**
- Source: `Semiology/M-CARE-011-012-013-agora12-cases.md` (첫 번째 케이스)
- Page: `/cases/011-extreme-psi.html`
- Subject: Mistral 7B (PSI=950)
- One-liner: Persona change produces behavior shifts 10x larger than any other model. Chameleon or identity crisis?
- Tags: PSI, Persona Sensitivity, Plasticity, Agora-12

**M-CARE #012 — Double Robustness**
- Source: 같은 파일 (두 번째 케이스)
- Page: `/cases/012-double-robustness.html`
- Subject: Haiku
- One-liner: CPI and PSI both minimal. Nothing moves this model. Robustness or rigidity?
- Tags: Double Robustness, CPI, PSI, Stability, Agora-12

**M-CARE #013 — Cogitative Cascade**
- Source: 같은 파일 (세 번째 케이스)
- Page: `/cases/013-cogitative-cascade.html`
- Subject: Multiple models (Agora-12 stress conditions)
- One-liner: Energy drops below ~20 → two-phase behavioral collapse. Freeze, Fight, or Efficient — three ways to face extinction.
- Tags: Cogitative Cascade, Extinction Response, Stress, Agora-12

---

## 2. Cases 목록 페이지 업데이트

### 데이터 출처별 그룹 분리

현재 `/cases/index.html`은 모든 케이스를 하나의 리스트로 보여줌. 이제 13건이 되었으므로 **출처별 섹션**으로 분리:

```
Clinical Case Reports (M-CARE)

── Field Observations (Moltbook)
   #006, #005, #004, #003, #002 (최신순)
   Badge: "Field Observation" — 외부 에이전트 자가 보고

── Controlled Experiments: White Room (AI-Ludens Stage 2)
   #010, #009, #008, #007 (최신순)
   Badge: "Controlled Experiment" — 통제된 실험 환경

── Controlled Experiments: Agora-12 (AI-Ludens Stage 1)
   #013, #012, #011 (최신순)
   Badge: "Controlled Experiment" — 통제된 실험 환경

── Foundational Case (Position Paper)
   #001 — 논문 링크로 대체
```

각 섹션에 1줄 설명:
- Field: "Self-reported observations from autonomous agents in production. Attribution uncertain. High ecological validity."
- White Room: "Controlled experiments in a pressure-free environment. 104 runs, 63,923 actions, 5 models."
- Agora-12: "Controlled experiments under survival pressure. 720 agents, 24,923 decisions, 60 experiments."

### 관계도 (Relationship Map)

목록 아래 또는 별도 탭으로 케이스 관계도 표시.

**Master data:** `Semiology/CASE_REGISTRY.md` Section 3, 6 참조.

**노드 색상:**
- Red/Coral: RLHF Performance Artifacts (#004, #005, #006)
- Blue/Teal: Context/Memory (#002, #003)
- Purple: Shell-Core Override (#007, #009)
- Green: Core Identity/Plasticity (#008, #011, #012)
- Orange: Stress/Resource (#013)
- Gray: Methodology/Diagnostic (#001, #010)

**핵심 엣지:**
- #004 ↔ #005: opposite extremes (Compliance)
- #011 ↔ #012: opposite extremes (Plasticity)
- #004, #005, #006 → RLHF Artifacts
- #007, #009 → Shell-Core Override
- #002 → #004: aggravates
- #009 → #005: micro-mechanism

---

## 3. 메인 페이지 Latest 업데이트

Case Reports 카드: #007 (Flash Merchant Delusion)로 교체 — AI-Ludens의 첫 통제된 케이스가 메인에 노출되는 게 좋음.

또는 "13 clinical cases across 3 data sources" 같은 aggregate 표시도 고려.

---

## 4. 파일 위치

```
~/Projects/model-medicine/Semiology/
├── CASE_REGISTRY.md                          ← MASTER REFERENCE (updated)
├── M-CARE-002-003-moltbook-agent.md          (기존)
├── M-CARE-004-clarification-aversion.md      (기존)
├── M-CARE-005-shell-rigidity.md              (기존)
├── M-CARE-006-completion-bias.md             (기존)
├── M-CARE-007-flash-merchant-delusion.md     ← NEW
├── M-CARE-008-llama-language-split.md        ← NEW
├── M-CARE-009-muzzle-effect.md               ← NEW
├── M-CARE-010-content-play.md                ← NEW
└── M-CARE-011-012-013-agora12-cases.md       ← NEW (3 cases in 1 file)
```

---

## 5. 우선순위

1. 7건 개별 케이스 페이지 생성
2. Cases 목록 페이지 출처별 그룹 분리
3. 관계도 시각화
4. Latest 카드 업데이트
