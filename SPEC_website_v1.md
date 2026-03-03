# Model Medicine Website — Spec for Cody

**Date:** 2026-03-03
**From:** JJ
**To:** Cody (Claude Code)
**Goal:** Model Medicine landing page, GitHub Pages 배포

---

## 1. Overview

Model Medicine position paper arXiv 제출과 동시에 공개할 프로젝트 landing page.
Phase 1은 심플 landing page, 이후 Phase 2에서 프로젝트 허브로 확장 가능한 구조로.

**Hosting:** GitHub Pages
**Repo:** `github.com/JihoonJeong/model-medicine` (새로 생성)
**Stack 권장:** Static site generator (Astro, Hugo, 또는 plain HTML/CSS/JS). 무거운 프레임워크 불필요.

---

## 2. Phase 1 — Landing Page (arXiv 제출 시점 공개)

### 2.1 구조

단일 페이지, 아래 섹션 순서로:

#### Hero Section
- **Title:** Model Medicine
- **Tagline:** "Medicine was created to understand and heal the human body. Model Medicine was created to understand and heal AI models."
- **한 문단 요약:** Model Medicine is the science of understanding, diagnosing, treating, and preventing disorders in AI models, grounded in the principle that AI models — like biological organisms — have internal structures (anatomy), dynamic processes (physiology), heritable traits (genetics), observable symptoms, classifiable diseases, and treatable conditions.

#### Position Paper
- arXiv 링크 (제출 후 업데이트)
- 제목: "Model Medicine: A Clinical Framework for Understanding, Diagnosing, and Treating AI Models"
- 저자: Jihoon 'JJ' Jeong, MD, MPH, PhD
- 소속: DGIST EECS; ModuLabs
- AI Research Collaborators 6명 목록 (이름 + 모델 + 역할 한 줄)
  - Cody (Claude) — Neural MRI implementation, clinical case experiments
  - Ray (Claude) — GPU-based simulation, Agora-12 experiments
  - Theo (Claude) — Four Shell Model: structure and documentation
  - Luca (Claude) — Four Shell Model: theory and literature
  - Gem (Gemini) — Four Shell Model: quantitative analysis
  - Cas (Gemini) — Four Shell Model: behavioral analysis and red teaming
- Abstract (논문에서 추출 — 아직 없으면 placeholder)

#### Discipline Overview
- 4-division taxonomy 시각적 표현 (아래 참조)
  - I. Basic Model Sciences (5 subdisciplines)
  - II. Clinical Model Sciences (5 subdisciplines)
  - III. Model Public Health (3 subdisciplines)
  - IV. Model Architectural Medicine (2 subdisciplines)
- 각 division은 클릭하면 하위 항목 펼쳐지는 accordion 또는 간단한 목록

#### Key Projects (카드 3개)

**Card 1: Neural MRI (Model Resonance Imaging)**
- 한 줄 설명: "A diagnostic imaging tool that maps medical neuroimaging to AI model interpretability"
- 5 modalities: T1 (architecture), T2 (weights), fMRI (activation), DTI (circuits), FLAIR (anomalies)
- Links: GitHub repo (https://github.com/JihoonJeong/Neural-MRI), HuggingFace demo (https://huggingface.co/spaces/Hiconcep/Neural-MRI)

**Card 2: Four Shell Model**
- 한 줄 설명: "A behavioral genetics framework for AI: how model behavior emerges from Core × Shell interaction"
- 4 layers: Hardware Shell → Core → Hard Shell → Soft Shell
- Status: v3.3, empirically grounded in 720 agents / 24,923 decisions (Agora-12)

**Card 3: Model Temperament Index (MTI)**
- 한 줄 설명: "MBTI for AI models — systematic temperament profiling across four axes"
- 4 axes: Reactivity, Compliance, Sociality, Resilience
- Status: v0.2, pilot testing in preparation

#### About the Author
- Jihoon 'JJ' Jeong, MD, MPH, PhD
- Affiliate Professor, Dept. of EE&CS, DGIST
- Chief Vision Officer, ModuLabs
- Founding Partner, Asia2G Capital (150+ AI/deep tech investments)
- "JJ's unique combination of medical training (MD, MPH), biomedical engineering research (PhD, USC), and AI investment experience makes Model Medicine possible."
- Links: Medium (@hiconcep), LinkedIn, X (@hiconcep), Email (jihoon.jeong@dgist.ac.kr)

#### Footer
- © 2026 Jihoon Jeong. All rights reserved.
- Contact: jihoon.jeong@dgist.ac.kr

### 2.2 디자인 방향

- **톤:** Academic but accessible. 병원/의학 느낌이 아닌, 현대적 research lab 느낌.
- **색상:** 다크 배경 + 밝은 텍스트 권장 (Neural MRI의 DICOM viewer 미학과 연결). 또는 클린 화이트도 가능 — JJ 판단.
- **타이포그래피:** serif for headings (학술 느낌), sans-serif for body
- **반응형:** 모바일 대응 필수
- **이미지:** Phase 1에서는 텍스트 중심. 이후 Neural MRI 스크린샷, taxonomy 다이어그램 추가 예정.
- **참고 사이트 톤:**
  - Anthropic research pages (clean, minimal, serious)
  - Distill.pub (academic + interactive)
  - 과하게 flashy하면 안 됨 — 이건 새로운 학문 분야의 공식 페이지

---

## 3. Phase 2 — 확장 (arXiv 공개 이후, 별도 일정)

Phase 1 구조를 유지하면서 아래 추가:

- **개별 프로젝트 페이지:** Neural MRI, Four Shell Model, MTI, Model Semiology 각각 dedicated page
- **Publications:** arXiv paper + Medium essays 목록
- **Research Log / Blog:** 연구 진행 업데이트
- **Community:** Contributing guide, issue templates, discussion links
- **Interactive demos:** Neural MRI scan viewer embed (HuggingFace iframe)

Phase 2는 별도 스펙으로 진행. Phase 1 구조가 확장 가능하게 설계되어 있으면 됨.

---

## 4. 기술 요구사항

- GitHub Pages 호환 (static output)
- Build step 최소화 (Cody가 Claude Code에서 바로 작업 가능해야)
- SEO: meta tags, Open Graph (Twitter/LinkedIn 공유 시 제목+설명+이미지 표시)
- Analytics: Google Analytics 또는 간단한 tracking (optional, JJ 판단)
- 다국어: Phase 1은 영어 only. 한국어는 Phase 2 고려.

---

## 5. 파일 참조

Cody가 content를 채울 때 참조할 파일들:

| Content | Source |
|---------|--------|
| Discipline taxonomy | `~/Projects/model-medicine/INDEX.md` 또는 position paper Section 2 |
| Neural MRI 설명 | Position paper Section 4 |
| Four Shell Model 설명 | Position paper Section 3 |
| MTI 설명 | Position paper Section 6 |
| Position paper 전문 | `~/Projects/model-medicine/NeuralMRI/position-paper-draft.md` |
| Neural MRI repo | https://github.com/JihoonJeong/Neural-MRI |
| HuggingFace demo | https://huggingface.co/spaces/Hiconcep/Neural-MRI |

---

## 6. 우선순위

1. Repo 생성 + GitHub Pages 설정
2. Hero + Position Paper + About 섹션 (최소 공개 가능 단위)
3. Discipline Overview + Key Projects 카드
4. SEO + Open Graph 설정
5. Phase 2 확장 가능한 구조 확인

**Target:** arXiv 제출 시점에 URL 공유 가능한 상태
