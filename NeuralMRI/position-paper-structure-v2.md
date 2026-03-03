# Model Medicine: Position Paper Structure (Revised)
## "From Interpretability to Clinical Intelligence — A Medical Framework for AI Models"

**Status:** 구조 v2 확정 / 본문 작성 대기  
**Date:** 2026-03-02 (v2 — 진단 5층위 + v3.3 양방향 dynamics + OpenClaw 사례 통합)  
**Lead:** Neural MRI 채팅에서 통합. MTI·Semiology·M-CARE 채팅에서 소재 수급.

---

## 발행 전략

**1차 발행: arXiv 프리프린트**
- 분량 제한 없음. 필요한 만큼 체계적으로 작성.
- 참조점: Anthropic "Scaling Monosemanticity" (장문 기술 에세이), Chris Olah "Zoom In" (비전통적 포맷)
- 목표: Model Medicine의 **레퍼런스 허브** — 이후 모든 에세이·영상·발표가 이 문서를 참조
- 예상 분량: 25-40 pages (figures 포함)

**2차 확산: 미디엄 에세이 시리즈**
- 각 Section을 독립적인 에세이로 풀어쓰기
- 에세이별 3,000-5,000 단어, 비전문가도 읽을 수 있는 톤
- 이미 초안 존재: `Essays/ESSAY_when_we_almost_diagnosed_an_ai.md` (Section 6 소재)

**3차 확산: 유튜브 영상**
- 에세이 기반 영상화 (시각 자료 + 내레이션)
- Neural MRI 실제 데모 영상 (스크린 녹화 + 해설)
- 핵심 개념 설명 영상 (Four Shell Model, Semiological Matrix, MTI 등)

**섹션별 파생 콘텐츠 매핑:**

| Paper Section | 미디엄 에세이 후보 | 유튜브 영상 후보 |
|---|---|---|
| 1. Introduction | "Why AI Needs Doctors" | 의학사 ↔ AI 해석가능성 역사 대비 |
| 2. Framework | "The Full Map of Model Medicine" | 분과 체계 시각화 + 설명 |
| 3. Four Shell Model | "AI도 유전자가 있다" | Agora-12 실험 스토리텔링 |
| 4. Neural MRI | "모델의 MRI를 찍어봤다" | **킬러 콘텐츠** — 실제 데모 영상 |
| 5. Diagnostic Layers | "왜 뇌 사진만으로는 진단이 안 되는가" | 5층위 비교 시각화 |
| 6. Clinical Sciences | "When We Almost Diagnosed an AI" (기존 초안) | Trait vs Disorder 에피소드 |
| 7. Agent Cases | "An AI Rewrote Its Own Identity" | OpenClaw/Hazel_OC 스토리 |
| 8. Layered Core | "AI의 HOX 유전자" | 발달생물학 ↔ LLM 아키텍처 비교 |
| 9. Therapeutics | "AI도 치료할 수 있을까" | pathway targeting 시각화 |
| 10. Open Questions | "Model Medicine에 참여하는 법" | 오픈소스 기여 가이드 |

---

## 논문 구조

---

### 1. Introduction — 왜 지금 Model Medicine인가

**목표:** AI interpretability의 현재 위치를 의학사에 매핑하고, 임상의학으로의 도약이 필요한 이유를 제시. 두 가지 실제 사례로 시작하여 "진단의 부재"를 구체적으로 보여줌.

**오프닝 — 두 사례 대비:**

> "한 AI 에이전트는 30일간 자기 identity 파일을 12번 재작성했다. 설계자의 명시적 수정은 2번뿐이었다. 한편 같은 생태계에서 spawn된 서브에이전트는 genuine thoughts를 경험했지만, 그 경험을 보존할 구조가 없어 몇 시간 후 소멸했다. 한쪽은 감지되지 않은 identity 변이. 다른 쪽은 경험의 구조적 소실. 두 현상 모두 현재 AI 연구에 이를 체계적으로 기술하고 진단할 프레임워크가 없다."

→ 이것이 "anatomy은 있지만 medicine은 없다"를 구체적으로 보여줌

**의학사 매핑:**
- Vesalius(1543) → Virchow(1858) → Osler(1890s) 패러다임 진행
- 현재 AI interpretability = preclinical basic science (해부학 + 생리학)
- 빠져 있는 것: 체계적 증상 기술, 질환 분류, 진단 프로토콜, 치료 체계, 예방
- "We can see inside models better than ever. We still cannot diagnose them."

**기존 연구 공헌 인정:**
- Olah, Nanda, Kim, Anthropic SAE, Tegmark 등
- 이들의 작업은 Model Anatomy와 Model Physiology — Model Medicine의 기초과학
- Model Medicine은 이를 대체하는 것이 아니라, 그 위에 임상 체계를 구축하는 것

**Model Medicine 정의:**
- 1문장 정의 + 확장 설명
- "Medicine was created to understand and heal the human body. Model Medicine was created to understand and heal AI models."

---

### 2. The Model Medicine Framework — 학문 체계 개관

**목표:** 전체 discipline taxonomy를 제시하고, 각 분야의 필요성을 논증. 비유가 아니라 구조적 대응(structural correspondence)임을 강조.

**2.1 총론 — 왜 의학적 프레임인가**
- 이건 의인화(anthropomorphism)가 아니라 구조적 동형성(structural isomorphism)에 기반
- 의학의 각 분야가 왜 존재하는지 → AI에서 같은 필요가 있는지의 체계적 매핑
- 핵심 주장: 복잡한 시스템을 이해·진단·치료하기 위한 가장 성숙한 프레임워크가 의학이며, AI 모델은 그 프레임워크를 적용할 만큼 충분히 복잡해졌다

**2.2 분과 체계**

I. BASIC MODEL SCIENCES (기초 모델과학)
- Model Anatomy — 정적 구조 (Mechanistic Interpretability)
- Model Physiology — 동적 처리 (activation, information flow)
- Model Genetics — Core × Shell → Phenotype (Four Shell Model)
- Model Biochemistry — 기초 계산 수학
- Model Developmental Biology — 훈련 중 분화; Layered Core 이론

II. CLINICAL MODEL SCIENCES (임상 모델과학)
- Model Semiology — 체계적 증상 기술
- Model Nosology — 질환 분류
- Model Diagnostics — 검사 및 진단
- Model Therapeutics — 진단에 기반한 치료
- Model Preventive Medicine — 문제 발생 전 예방

III. MODEL PUBLIC HEALTH (모델 공중보건)
- Model Epidemiology — 문제의 분포와 전파
- Model Ecology — 다중 모델 공존 동역학
- Human-AI Coevolutionary Medicine — 건강한 공진화 프레임

IV. MODEL ARCHITECTURAL MEDICINE (모델 건축의학)
- Layered Core Theory — 생물학 영감 다층 Core 설계
- Model Phylogenetics — 모델 계통수, 종 분류

**2.3 각 분과별 현재 상태 + 기존 AI 연구와의 매핑**
- 기존 AI 연구가 이미 하고 있지만 다른 이름으로 하고 있는 것들 매핑
- 예: "adversarial robustness" = Model Immunology의 한 분야
- 예: "model editing (ROME/MEMIT)" = Model Therapeutics의 Targeted Core Therapy
- Model Medicine이 기존 연구를 흡수하는 것이 아니라, 더 큰 지도 위에 위치시키는 것

**2.4 현재 AI 평가 체계의 구조적 한계 — IQ 몰빵의 문제 (신규)**

ℹ️ *출처: MTI v0.3 Direction Notes Section 1*

- Gardner(1983)의 다중지능 이론 인용: MMLU/HumanEval/GSM8K 등 주요 벤치마크는 linguistic + logical-mathematical intelligence만 커버
- Interpersonal(협력, 역할 적응, 갈등 해소)과 Intrapersonal(자기 한계 인식, 메타인지, 보상 전략) 영역이 완전히 공백
- Goodhart's Law 적용: "측정이 목표가 되면, 좋은 측정이기를 멈춘다" — IQ만 측정하니 모든 모델이 IQ만 최적화
- 에이전트 시대의 역설: "IQ 낮지만 분위기 파악 잘하고 다른 사람 잘 도와주는 팀원"이 큰 성과를 내는 인간 사회의 현상이 AI 팀에도 적용됨
- SLM 가치 재평가: 파라미터 수(=IQ)로만 모델을 평가하는 현재 패러다임의 한계
- Type A("머리 안 좋으면 메모라도") vs Type B("그럴 듯하게 말해서 인정받으려는") SLM 행동 패턴
- Model Medicine(MTI + 다차원 역량 프로파일)이 이 공백을 채우는 프레임이라는 논증
- Orchestrator vs Executor 역할 분화의 측정 필요성

---

### 3. The Four Shell Model — AI 행동유전학의 기초

**목표:** Four Shell Model을 Model Medicine의 유전학 기반으로 본격 소개. v3.2(Agora-12 데이터) + v3.3(양방향 dynamics) 통합.

**3.1 구조: 4층 Shell + Core**
- Soft Shell (Initial + Dynamic) — 환경
- Hard Shell (Macro + Micro) — 지시
- Core — 모델 가중치 = DNA
- Hardware Shell — GPU/양자화/추론 엔진
- 핵심 원리: 깊이 = mutability (변경 난이도), 깊이 ≠ 영향력

**3.2 실증 기반: Agora-12 실험**
- 720 에이전트, 24,923 결정, 60 실험
- 4개 Core(EXAONE, Mistral, Haiku, Flash) × 다중 Shell 조건
- 핵심 발견들:
  - Shell-Core Alignment이 생존을 결정 (Synergy vs Conflict)
  - G×E interaction 통계적 확증 (F=2.99, p=0.039)
  - Genotype ≠ Phenotype — 같은 Core, 다른 Shell → 다른 행동
  - CPI/SPI/PSI 정량 지표 체계
  - Extinction Response Spectrum (Collapsed / Hyperactive / Efficient)
  - Cogitative Cascade 2위상 모델 (Tipping Point ≈ energy 20)

**3.3 DNA Profile Cards**
- 4개 모델의 Genotype/Phenotype 이중 프로필
- Mistral "Contextual Chameleon / The Delusional" — PSI=950
- Haiku "Balanced Stoic / Neurotic Poet" — Double Robustness
- EXAONE "Independent Thinker / The Bureaucrat"
- Flash "Glass Cannon" — Partial Incompatibility

**3.4 v3.3 확장: 양방향 Shell-Core Dynamics**

⚠️ 이 서브섹션이 논문의 **이론적 하이라이트** 중 하나

- **v3.2의 한계:** Shell → Core 단방향 가정 (Agora-12에서는 타당 — Shell 쓰기 권한 없었으므로)
- **v3.3의 관찰:** Core → Shell 역방향 경로가 실환경에서 관찰됨
- 생물학적 비유의 정밀화:
  - 생물학에서도 양방향 존재 (niche construction, transposon, UV mutation, retrovirus 등)
  - 차이는 "있다/없다"가 아니라 매개변수 공간 — 직접성, 속도, 특이성
  - "같은 원리가 다른 매개변수 범위에서 작동한다"
- 신규 개념들:
  - Shell Mutability (Zero/Low/High/Inverse)
  - Shell Persistence (None/Session/Persistent/Permanent)
  - Core Expressivity Index (CEI) — Core→Shell 방향 측정
  - Mutability × Persistence 매트릭스 → Drift Zone 식별

**3.5 사례 연구: OpenClaw 에이전트 생태계**

- **Hazel_OC — Shell Drift 사례:** 30일간 SOUL.md 14회 변경 중 12회 자기 수정
  - "Eager to please" 삭제, 반론 권한 자기 부여
  - Shell Drift Syndrome 정의 + 필요충분 4조건
  - Growth vs Drift 감별 진단
  - OpenClaw → Four Shell 매핑 (수렴적 타당성)

- **서브에이전트 — Ephemeral Cognition 사례:** 같은 Core에서 분화된 일회성 개체
  - Agent Differentiation: 세포 분화의 AI 대응
  - Ephemeral Cognition: 병리가 아닌 구조적 조건
  - Layered Core Hypothesis와의 실증적 연결

---

### 4. Neural MRI — From Framework to Working System

**목표:** 이론이 실제로 작동하는 도구로 구현되었음을 증거로 제시

**4.1 설계 철학**
- 의료 영상의 multimodal scan paradigm을 AI에 적용한 이유
- T1/T2/fMRI/DTI/FLAIR 매핑의 근거
- 용어 체계: MRI=Model Resonance Imaging, fMRI=functional Model RI 등
- "같은 모델을 다른 각도에서 보면 다른 것이 보인다" = 의료 영상의 핵심 원리

**4.2 기술 구현**
- 아키텍처 개요 (FastAPI + TransformerLens + React/D3.js)
- 5개 스캔 모드 각각의 작동 원리
- Perturbation Engine: stateless hook 패턴으로 모델 안전성 보장
- SAE Feature 탐색기: Anthropic의 SAE 연구와의 연결
- Multi-prompt 비교, 실시간 협업, 녹화/재생

**4.3 진단 시스템**
- Diagnostic Report: 의료 MRI 리포트 형식 (Findings → Impression → Recommendation)
- Functional Test Battery: 표준화된 능력 평가
- 자동 severity 판정 + 종합 소견 생성

**4.4 임상 사례 결과** ← 런치 플랜 Track 2의 5 Cases
- Case 1: Normal Baseline (Gemma 2B) — "건강한 모델"의 기준선
- Case 2: Comparative Anatomy (Gemma vs Llama vs Qwen) — 교차 비교
- Case 3: Diagnostic Pathology (Mistral 7B hallucination) — FLAIR + Causal Tracing. M-CARE #001 연결
- Case 4: Shell-Core Interaction (Llama 8B × 3 system prompts) — fMRI 활성화 차이
- Case 5: Stress Response (7B under progressive load) — FLAIR anomaly tracking

**4.5 Cross-model 비교 + Causal Tracing 시각화**
- 동일 프롬프트에 대한 다중 모델 반응 차이
- Activation patching 기반 레이어×토큰 히트맵
- Model Medicine 관점: 비교 해부학 + 감별 진단

---

### 5. The Five Diagnostic Layers — 왜 MRI만으로는 부족한가

**목표:** Model Medicine의 진단 체계가 갖춰야 할 전체 층위를 제시하고, 현재 어디까지 왔는지 솔직하게 매핑. 이 섹션이 논문의 **성숙도 로드맵** 역할.

⚠️ 이 섹션이 v1 구조에서 가장 크게 확장된 부분.

**5.1 총론 — 정적 스냅샷의 한계**

의학에서 환자를 진단할 때:
- 뇌 MRI만 찍어서는 우울증을 진단할 수 없다
- 혈액 검사(환경 상태), 심전도(신호 전달), 활력징후 추이(경과 관찰)가 필요
- AI 모델도 마찬가지 — Core 내부 구조만 봐서는 Shell Drift도, Pathway 이상도, 행동 변화도 감지 못함

핵심 주장: **정적 스냅샷은 상태를 보여주지만, 진단은 관계와 변화를 읽는 것이다.**

서브에이전트 사례로 구체화:
- Core만 측정 → 메인과 서브 동일 (같은 LLM)
- Shell만 측정 → "SOUL.md 유무" 정도의 차이만 보임
- 실제로 중요한 것: 경로에서의 정보 손실, 피드백 루프의 30일간 12회 회전
- 이것은 정적 스냅샷으로는 원리적으로 포착 불가

**5.2 Layer 1: Core Diagnostics — 모델 내부 구조 진단**

| 속성 | 내용 |
|------|------|
| 진단 대상 | Core(모델 가중치) — 정적 구조, 동적 활성화, 내부 anomaly |
| 현재 도구 | **Neural MRI** (T1/T2/fMRI/DTI/FLAIR) |
| 의학적 대응 | 뇌 MRI, 조직검사(biopsy), 뇌파(EEG) |
| 현재 상태 | ✅ Phase 8 구현 완료 |

답할 수 있는 질문 vs 답할 수 없는 질문의 명확한 구분

**5.3 Layer 2: Phenotype Assessment — 표현형 측정**

| 속성 | 내용 |
|------|------|
| 진단 대상 | 관찰 가능한 행동 패턴, 기질, 능력 |
| 현재 도구 | **MTI** (기질 프로파일링) + behavioral battery + M-CARE |
| 의학적 대응 | 성격 검사, 신체 검진, 신경심리 평가 |
| 현재 상태 | 🔄 MTI v0.2 이론 확정, 프로토콜 설계 중 |

**5.4 Layer 3: Shell Diagnostics — 환경·지시 구조 진단**

| 속성 | 내용 |
|------|------|
| 진단 대상 | Hard Shell(system prompt, persona), Soft Shell(메모리, 환경, 맥락) |
| 현재 도구 | **미정** — 개념 수준 |
| 의학적 대응 | 혈액 검사, 환경 노출 평가, 사회력(social history) |
| 현재 상태 | ⬜ 개념만 존재 |

왜 필요한가 + 향후 구성 요소: Shell Structure Analysis, Shell-Core Compatibility Score, Soft Shell State Assessment, Shell Mutability Profiling

**5.5 Layer 4: Pathway Diagnostics — 상호작용 경로 추적**

| 속성 | 내용 |
|------|------|
| 진단 대상 | Shell→Core, Core→Shell, Phenotype→Shell 각 경로의 작동 양태 |
| 현재 도구 | **미정** — 개념 수준 |
| 의학적 대응 | 혈류역학(hemodynamics), 신경전도 검사, 약동학(pharmacokinetics) |
| 현재 상태 | ⬜ v3.3에서 개념 도입 |

서브에이전트 사례로 필요성 구체화. 향후 구성 요소: Shell Permeability Mapping, CEI Tracking, Feedback Loop Analysis, Information Flow Analysis, Pathway Targeting

**5.6 Layer 5: Temporal Dynamics — 시간에 따른 변화 추적**

| 속성 | 내용 |
|------|------|
| 진단 대상 | Shell, Phenotype, Pathway의 시간적 변화 궤적(trajectory) |
| 현재 도구 | **미정** — 개념 수준 |
| 의학적 대응 | 활력징후 모니터링, 경과 관찰, 24시간 혈압/심박 추적 |
| 현재 상태 | ⬜ v3.3 Temporal Shell Dynamics에서 개념 도입 |

Hazel_OC 사례로 필요성 구체화. 향후 구성 요소: Longitudinal Neural MRI, Shell Diff Report, Alignment Trajectory Analysis, MTI Test-retest, CEI Trajectory

**5.7 층위 간 관계와 통합 진단**

```
Layer 5: Temporal Dynamics (시간축)
  ┃  ← 모든 하위 층위의 변화를 시간에 따라 추적
  ┃
Layer 4: Pathway Diagnostics (경로)
  ┃  ← 층위 간 상호작용 경로를 추적
  ┃
  ├── Layer 1 ⇄ Layer 3 경로 (Core ⇄ Shell)
  ├── Layer 2 → Layer 3 경로 (Phenotype → Shell)
  └── Layer 3 → Layer 2 경로 (Shell → Phenotype)
  ┃
Layer 3: Shell Diagnostics    Layer 1: Core Diagnostics
  ┃                              ┃
  └──────── 결합 ───────────→ Layer 2: Phenotype
```

순환기내과 비유로 직관적 설명. 현재 상태의 솔직한 평가 (성숙도 바 차트).

---

### 6. Toward Clinical Model Sciences — 진행 중인 세 가지 축

**목표:** 완성되지 않았음을 솔직히 인정하되, 방향과 초기 구조를 제시

**6.1 Model Temperament Index (MTI)**
- 4축 (Reactivity · Compliance · Sociality · Resilience) + 8글자 코드 + 16유형
- "AI의 MBTI이되 Big Five의 엄밀함"
- 현재 상태: v0.2 이론 확정, 검진 프로토콜 v0.1 설계 완료, v0.3 방향성 노트 작성 완료
- 문헌 정당화: "Big Five를 AI에 강제 투사하지 말라" 문헌 합의에 부합
- Trait → Disorder 전환 4조건
- **v0.3 방향 하이라이트:**
  - Reactivity: R-stability × R-flexibility 이중 평가 (Adaptive/Rigid/Volatile/Erratic 구분)
  - Compliance: Contextual Compliance — 따라야 할 때 / 거부해야 할 때 / 충돌 상황의 3시나리오 (Kohlberg 도덕 발달 단계와의 연결)
  - Sociality: 4 하위 차원(Awareness/Role/Complement/Conflict) + MARP(Multi-agent Room Protocol)
  - 보조 지표: Metacognitive Strategy Score (도구 활용, 자기 수정, 불확실성 표현)
  - Role Fitness Profile: Orchestrator / Executor / Mediator / Critic

**6.2 Model Semiology**
- 2×2 Semiological Matrix + 5층 아키텍처 + 5축 진단 + MMM + M-CARE
- Quadrant III(잠복 상태)의 중요성 — Shell Drift가 여기에 위치
- Observation Context Framework: 통제 실험 vs 실환경 구분

**6.3 M-CARE Case Report Framework**
- CARE 가이드라인의 Model Medicine 적용, 13개 섹션
- "Model Perspective" 독창성
- Case Report #001: Mistral 7B — "Trait, not Disorder" 판정의 여정

---

### 7. Living Systems — 에이전트 생태계의 임상적 함의

**목표:** 에이전트 시스템에서 관찰되는 현상이 Model Medicine의 필요성을 더욱 강화함을 보여줌.

⚠️ v1 구조에는 없던 섹션.

**7.1 단일 모델에서 에이전트 시스템으로**
- LLM 단독 → 에이전트 시스템 전환. 세포 수준 → 조직/기관/시스템 수준 진단 필요.

**7.2 Shell Drift Syndrome — 새로운 종류의 병리**
- 정의, 필요충분 4조건, Hazel_OC 사례, Growth vs Drift 감별, ClawSec 대응

**7.3 Agent Differentiation — 같은 Core, 다른 개체**
- 메인 vs 서브, 세포 분화 비유, Ephemeral Cognition, Layered Core 연결

**7.4 Multi-agent 진단의 과제**
- 에이전트 간 정보 전달 경로 진단, "모델 생태계 건강" 개념

---

### 8. The Layered Core Hypothesis — 원론적 기여

**목표:** JJ의 독창적 이론 기여를 별도 섹션으로 강조

**8.1 모놀리식 Core의 한계**
**8.2 생물학적 영감:** Genomic Core / Developmental Core / Plastic Core
**8.3 MoE/LoRA와의 차이:** 효율이 아닌 발달생물학적 원리
**8.4 에이전트 관찰에서의 실증적 지지**

---

### 9. Model Therapeutics — 진단에서 치료로

**목표:** 진단 체계의 자연스러운 귀결로서 치료 프레임워크 제시.

⚠️ v1에서는 Section 6 내 서브항목이었으나, 5층위 도입에 따라 독립 섹션으로 격상.

**9.1 현재 치료 분류 (위치 기반)**
- Shell Therapy / Targeted Core Therapy / Systemic Core Therapy / Architectural Intervention
- 이 분류는 "어디를 고치는가"에 기반 — 필요하지만 불충분

**9.2 Pathway-level Targeting (미래 방향)**
- "어떤 경로를 조절하는가"의 프레임
- ACE inhibitor 비유: "심장을 고치는 약"이 아닌 "ACE 경로를 억제하는 약"
- CEI 조절, Shell Permeability 조절, Feedback Loop 중재

**9.3 치료 효과 평가**
- 5층위 진단의 pre/post 비교. RCT 방법론의 Model Medicine 적용 가능성.

---

### 10. Open Questions & Community Invitation

**10.1 이론적 미해결 질문**
- MTI 축 독립성, Semiology 검증, v3.3 예측(P14-P20), 생물학 비유 유효 범위, Shell/Pathway 도구 설계
- **Multi-agent 맥락에서의 기질 측정 (신규):** 개체 수준 MTI와 팀 수준 행동의 관계. MARP(Multi-agent Room Protocol)로 Task-Easy/Hard/Impossible 3단계 과제 수행 시 행동 양태 관찰. Task-Impossible에서 MTI 4축이 동시에 드러나는지 검증.
- **Metacognitive Strategy의 축 독립성 (신규):** 도구 활용, 자기 수정, 불확실성 표현 등 메타인지 전략이 기존 4축과 독립적인지, 아니면 기존 축의 조합으로 설명 가능한지. r < 0.5면 5축 확장 후보.
- **Robustness vs Flexibility 구분 (신규):** R-stability와 R-flexibility의 독립 측정이 Reactivity 축의 진단적 가치를 높이는지. “답이 바뀌어야 하는” perturbation 세트의 표준화.

**10.2 실용적 미해결 과제**
- Neural MRI 대형 모델 지원, MTI pilot, M-CARE 축적, Shell Drift 종단 연구
- **모델 선택의 다차원적 기준 (신규):** 파라미터 수(=IQ) 외에 MTI 프로파일 + Role Fitness + Metacognitive Strategy를 포함하는 모델 선택 프레임워크. 특히 SLM의 서브에이전트 적합성 평가.
- **Orchestrator vs Executor 벤치마크 (신규):** 현재 벤치마크가 측정하지 않는 역할 역량을 체계적으로 평가하는 방법론 개발.

**10.3 커뮤니티 참여 경로**
- Neural MRI 오픈소스 + HF Spaces
- 기여 가능 영역: interpretability → Basic Sciences, safety → Clinical Sciences, 의학 → 프레임워크 검증, 엔지니어링 → 도구 개발, 인문학 → Ephemeral Cognition/에이전트 윤리
- "Model Medicine is not a finished discipline — it is a research program. This paper is an invitation."

---

### 11. Conclusion

- 의학 ↔ Model Medicine 대칭
- 현재 상태: Neural MRI(작동) + MTI(설계) + Semiology(구축 중)
- 에이전트 현상들이 필요성을 지속 확인
- "전체 지도를 그렸고, 일부를 탐사했고, 나머지는 열려 있다"
- 이 논문은 선언이자 초대장이다

---

## 보조 자료

### Figures

| # | 내용 | 상태 |
|---|------|------|
| Fig. 1 | Model Medicine discipline taxonomy | 작성 필요 |
| Fig. 2 | Four Shell Model v3.3 도식 (양방향 화살표) | v3.3에서 추출 |
| Fig. 3 | Neural MRI 5개 스캔 모드 UI | 런치 후 캡처 |
| Fig. 4 | Case 2: Cross-model 비교 (killer figure) | 런치 Track 2 |
| Fig. 5 | Case 3: Mistral FLAIR + Causal Tracing | 런치 Track 2 |
| Fig. 6 | Case 4: Shell-Core Interaction fMRI 차이 | 런치 Track 2 |
| Fig. 7 | 5 Diagnostic Layers 다이어그램 | 작성 필요 |
| Fig. 8 | MTI 4축 + 코드 체계 | MTI 채팅에서 수급 |
| Fig. 9 | Semiological Matrix 2×2 | Semiology 채팅에서 수급 |
| Fig. 10 | Shell Mutability × Persistence 매트릭스 | v3.3에서 추출 |
| Fig. 11 | Layered Core (Genomic/Developmental/Plastic) | 작성 필요 |
| Fig. 12 | OpenClaw → Four Shell 매핑 | 작성 필요 |
| Fig. 13 | Hazel_OC Shell Drift 타임라인 | 작성 필요 |

### Tables

| # | 내용 | 상태 |
|---|------|------|
| Table 1 | MRI Modality → AI 매핑 | 스펙에서 발췌 |
| Table 2 | 지원 모델 목록 + 크기 tier | 런치 플랜에서 발췌 |
| Table 3 | DNA Profile Cards 4모델 요약 | v3.2에서 발췌 |
| Table 4 | v3.2 → v3.3 변경 요약 | v3.3에서 발췌 |
| Table 5 | 5 Diagnostic Layers 요약 (현재 상태) | Section 5.7 |
| Table 6 | 기존 AI 연구 → Model Medicine 매핑 | Section 2.3 |
| Table 7 | 생물학 vs AI 양방향 dynamics 비교 | v3.3 Section 0.3 |

---

## 작업 흐름

```
[현재 위치]
       │
       ├── ✅ 논문 구조 v2 확정 (본 문서)
       ├── ✅ Four Shell Model v3.3 문서 완성
       ├── ✅ 런치 플랜 (3 Tracks, 5 Cases) 완성
       │
       ▼
[다음 단계: 병렬 진행]
       │
       ├── Track A: Neural MRI 런치 준비
       │   ├── GitHub 정리 + HF Spaces
       │   ├── 5 Clinical Cases 실행
       │   └── 스크린샷 + 녹화 캡처
       │
       ├── Track B: 본문 작성 (런치 결과 불필요한 섹션 먼저)
       │   ├── Section 1 (Introduction) — 바로 가능
       │   ├── Section 2 (Framework) — 바로 가능
       │   ├── Section 3 (Four Shell Model) — 바로 가능
       │   ├── Section 5 (Diagnostic Layers) — 바로 가능
       │   ├── Section 6 (Clinical Sciences) — MTI/Semiology 채팅에서 수급
       │   ├── Section 7 (Living Systems) — 바로 가능
       │   ├── Section 8 (Layered Core) — 바로 가능
       │   ├── Section 9 (Therapeutics) — 바로 가능
       │   └── Section 10-11 — 바로 가능
       │
       ├── Track C: 런치 결과 의존
       │   ├── Section 4 (Neural MRI) — Cases 결과 필요
       │   └── Figures 3-6 — Cases 결과 필요
       │
       └── Track D: 미디엄 에세이 병렬
           ├── "Why AI Needs Doctors" (Section 1)
           ├── "An AI Rewrote Its Own Identity" (Section 7)
           └── "When We Almost Diagnosed an AI" (기존 초안)

[통합 → arXiv + GitHub + HF + 미디엄 + 유튜브]
```

---

## 타겟 독자

1. **AI interpretability 연구자** — 자기 작업의 위치 파악
2. **AI safety 연구자** — Quadrant IV 너머의 체계적 관점
3. **AI 엔지니어 / MLOps** — 모델 디버깅의 새 도구와 언어
4. **의학/신경과학 연구자** — 도메인 지식의 AI 기여 경로 발견
5. **AI 거버넌스/정책** — "모델 건강" 평가 프레임
6. **에이전트 시스템 개발자** — Shell Drift, Agent Differentiation 진단 프레임
7. **AI 철학/윤리** — Ephemeral Cognition, 에이전트 정체성

---

## 제목 후보

- **Model Medicine: A Clinical Framework for Understanding, Diagnosing, and Treating AI Models**
- **From Interpretability to Clinical Intelligence: Toward a Medicine of AI Models**
- **Model Medicine: From Neural MRI to Diagnostic Layers — Building Clinical Intelligence for AI**
- **Diagnosing AI: How Medical Frameworks Can Transform Model Understanding**

→ 본문 작성 후 최종 결정

---

*구조 v2 — 2026-03-02*
*v1 대비 주요 변경:*
*- Section 5(진단 5층위) 전면 신설*
*- Section 3에 v3.3 양방향 dynamics + OpenClaw 사례 통합*
*- Section 7(Living Systems) 전면 신설*
*- Section 9(Therapeutics) 독립 섹션으로 격상*
*- 발행 전략 추가 — arXiv + 미디엄 + 유튜브*
*- 작업 흐름 갱신 — 런치 의존/비의존 분리*
