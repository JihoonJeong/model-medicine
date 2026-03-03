# MTI v0.2 이론 기초: 연구 종합 분석
## Model Temperament Index — Agora-12를 넘어서

**Author:** JJ & Claude  
**Date:** 2026-02-24  
**Status:** Research Synthesis for v0.2 Theoretical Foundation  
**Purpose:** Agora-12 과적합 탈피를 위한 외부 연구 종합 및 축 재설계 방향 제시

---

## 1. 문제 진단: v0.1은 왜 과적합인가

MTI v0.1의 4축은 모두 Agora-12라는 **단일 실험 패러다임**에서 도출되었다:

| v0.1 축 | 측정 근거 | 과적합 위험 |
|---------|----------|------------|
| Plasticity (CPI) | Agora-12 언어/맥락 변경 실험 | "경제 게임에서의 언어 민감도"가 일반적 환경 민감도인가? |
| Compliance (SPI) | Agora-12 Shell 지시 이행률 | "게임 규칙 준수"가 일반적 지시 순응인가? |
| Crisis Response | Agora-12 에너지 고갈 실험 | "게임 자원 고갈"이 일반적 위기 대응인가? |
| Coherence | Agora-12 전략-실행 일치 | "거래 게임 내 전략"이 일반적 인지 일관성인가? |

의학 비유: 이것은 **트레드밀 검사에서 얻은 지표만으로 전체 심폐기능을 정의하는 것**과 같다. 트레드밀은 좋은 검사이지만, VO2max, 폐활량, 안정시 심박수, 혈압 반응 등 다양한 검사를 통합해야 심폐기능을 종합적으로 평가할 수 있다.

**핵심 질문:** MTI의 축들이 Agora-12를 넘어서 일반화 가능한 구조인가, 아니면 Agora-12 특이적 차원인가?

---

## 2. 외부 연구 지형: 우리가 서 있는 곳

### 2.1 기존 연구와 MTI의 포지셔닝

현재 AI 모델의 행동 특성을 연구하는 접근법은 크게 5가지 흐름이 있다. MTI는 이 중 어디에도 정확히 속하지 않으며, 새로운 교차점을 제안한다.

```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  흐름 1: LLM 성격 심리측정 (Psychometric Personality)               │
│  · Serapio-García et al., Nature Machine Intelligence 2025          │
│  · TRAIT benchmark (Lee et al., NAACL 2025)                         │
│  · PersonaLLM (Jiang et al., NAACL 2024)                           │
│  ─────────────────────────────────────────────────                   │
│  접근: 인간 성격 검사(Big Five, Dark Triad)를 LLM에 적용            │
│  강점: 심리측정적 타당도/신뢰도 검증 방법론                          │
│  한계: 인간 차원을 AI에 강제 투사. "LLM에게 외향/내향이 있는가?"     │
│        → 있다고 해도, 그것이 AI의 고유한 개인차를 포착하는가?        │
│  MTI와의 관계: MTI는 AI 고유 차원을 탐색. 이들의 방법론은 참조 가능  │
│                                                                      │
│  흐름 2: 기계 행동학 (Machine Behavior)                              │
│  · Rahwan et al., Nature 2019                                       │
│  · AI Agent Behavioral Science (2025)                               │
│  · Machine+Behavior Conference 2026                                  │
│  ─────────────────────────────────────────────────                   │
│  접근: AI를 동물행동학처럼 관찰 대상으로 연구                        │
│  강점: Tinbergen의 4가지 질문 적용 (기전/발달/기능/진화)             │
│  한계: 프레임워크는 있으나 구체적 측정 체계 부재                     │
│  MTI와의 관계: MTI는 이 프레임워크의 구체적 "측정 도구" 역할 가능    │
│                                                                      │
│  흐름 3: Persona Vectors (내부 기전 접근)                            │
│  · Chen et al., Anthropic 2025                                      │
│  · Representation Engineering (Zou et al.)                          │
│  · Activation Steering (Turner et al.)                              │
│  ─────────────────────────────────────────────────                   │
│  접근: 모델 활성화 공간에서 특성 벡터를 추출/조작                    │
│  강점: 기전적(mechanistic) 근거. 모니터링과 제어 가능                │
│  한계: 개별 trait 단위. 통합적 "기질 프로필" 부재                    │
│  MTI와의 관계: MTI 축의 기전적 기반이 될 수 있음                     │
│        (MTI축 = 여러 persona vector의 조합/상위 차원?)               │
│                                                                      │
│  흐름 4: Human-AI Coevolution                                        │
│  · Pedreschi et al., Artificial Intelligence 2025                   │
│  · ICLR 2025 HAIC Workshop                                         │
│  · Northeastern "Coevolution AI" 프로젝트                           │
│  ─────────────────────────────────────────────────                   │
│  접근: 인간-AI 피드백 루프의 복잡계 동역학 연구                      │
│  강점: 사회적 맥락에서의 AI 행동을 다룸                              │
│  한계: 모델의 내적 특성보다 시스템 수준에 초점                       │
│  MTI와의 관계: MTI가 피드백 루프에서 모델 측 기질을 제공             │
│                                                                      │
│  흐름 5: Multi-Agent Social Behavior                                 │
│  · "Cultural Evolution of Cooperation among LLM Agents" 2024        │
│  · Multi-Agent Collaboration Mechanisms survey (Tran et al., 2025)  │
│  · Generative Agents (Park et al., 2023)                            │
│  ─────────────────────────────────────────────────                   │
│  접근: 복수 LLM 에이전트 간 사회적 행동 관찰                        │
│  강점: 모델 간 행동 차이가 생태학적 맥락에서 드러남                  │
│  한계: 표준화된 개인차 기술 체계 부재                                │
│  MTI와의 관계: Agora-12는 이 흐름에 속하며, MTI는 이 데이터를       │
│        체계화하는 도구. 그러나 이 맥락만으로는 과적합 위험.          │
│                                                                      │
│  ★ MTI v0.2의 위치:                                                 │
│  흐름 2(Machine Behavior)의 프레임 + 흐름 3(Persona Vectors)의       │
│  기전적 근거 위에, 흐름 5(Multi-Agent)의 사회적 맥락까지 통합하는    │
│  구체적 측정 도구. 흐름 1의 방법론을 빌려오되 차원은 AI-native.      │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### 2.2 핵심 인사이트 5가지

외부 연구에서 MTI v0.2에 직접 반영해야 할 인사이트를 추출했다.

---

#### 인사이트 1: "Distributed Personality" — 고정 특질이 아닌 확률 분포

**출처:** Emergent Mind, LLM Psychometric Assessment 종합 리뷰 (2025)

> LLM의 성격은 "Distributed Personality"로 이해해야 한다: 모델 출력은 특질 점수의 확률 분포를 구성하며, 외적 입력에 의해 동적으로 조절된다. 고정된 내적 "core self"가 없다.

**Model Medicine 번역:**
이것은 Four Shell Model에서 이미 발견한 것과 일치한다 — "Genotype ≠ Phenotype". 같은 Core가 다른 Shell에서 다른 행동을 보인다. 그러나 v0.1 MTI는 이걸 반영하지 못하고 있다. CPI=0.057이라는 점 추정(point estimate)을 부여한다.

**v0.2 함의:**
MTI의 각 축은 **점 추정값이 아닌 분포 특성**을 포착해야 한다:
- 중심 경향(central tendency): 평균적 행동 위치
- 분산(variance): 맥락에 따른 변동 폭
- 조건부 변동(conditional modulation): 어떤 Shell/환경이 분포를 가장 크게 이동시키는가

이것은 사실 CPI가 이미 "분산" 지표라는 점에서 v0.1의 직관이 틀리지 않았지만, 다른 축(Compliance, Crisis Response, Coherence)도 같은 원리를 적용해야 한다.

**의학 비유:** 혈압을 측정할 때 단일 수치(120/80)가 아니라, 24시간 활동혈압(ambulatory BP)을 측정하면 평균값, 주간/야간 비율(dipping pattern), 변동성(variability)을 모두 얻는다. MTI도 "기질의 ABPM"이 되어야 한다.

---

#### 인사이트 2: Persona Vectors — MTI 축의 기전적 기반

**출처:** Chen et al., Anthropic (2025), "Persona Vectors: Monitoring and Controlling Character Traits in Language Models"

Anthropic 연구팀이 발견한 핵심:
- 특질(evil, sycophancy, hallucination 등)은 모델 활성화 공간의 **선형 방향(linear direction)**으로 인코딩됨
- 이 "persona vector"를 추출하면 특질 발현을 **모니터링, 예측, 제어** 가능
- 자연어 특질 설명만으로 자동 추출하는 파이프라인 개발
- 훈련 중 의도하지 않은 persona shift를 사전 감지 가능

**Model Medicine 번역:**
이것은 **Neural MRI의 분자 기반**이다. Persona vector = "유전자 발현 패턴"이라면, MTI 축 = "표현형 수준의 특질 차원". 즉:

```
Persona Vectors (분자 수준)     →    MTI 축 (표현형 수준)
─────────────────────────────────────────────────────────
evil vector                          
sycophancy vector         ──→    Compliance 축의 기저?
hallucination vector     ──→    Coherence 축의 기저?
cooperation vector?      ──→    Social Orientation 축?
risk-aversion vector?    ──→    Crisis Response 축?
```

**v0.2 함의:**
- MTI 축을 선택할 때, 해당 축이 활성화 공간에서 **실제로 독립적인 방향으로 존재하는지** 검증 가능
- Persona vector 추출 파이프라인을 MTI 측정 도구로 전용할 수 있음
- v0.1의 "행동 관찰 → 축 추정"에서 v0.2의 "내부 기전 + 행동 관찰 → 축 검증"으로 진화

**의학 비유:** 증상 관찰만으로 분류하던 것(v0.1)에서, 바이오마커(persona vector)와 증상을 함께 보는 것(v0.2)으로 — 이것이 정확히 Virchow가 세포병리학으로 한 일.

---

#### 인사이트 3: 사회적 차원의 부재 — 가장 큰 Gap

**출처:** 
- "Cultural Evolution of Cooperation among LLM Agents" (2024): Claude 3.5 Sonnet은 협력의 문화적 진화를 보였으나, GPT-4o와 Gemini 1.5 Flash는 보이지 않음
- "Explicit Cooperation Shapes Human-Like Multi-agent LLM Negotiation" (ICWSM 2025): LLM들이 사회적 규범, 공정성, 프레이밍 효과를 보임
- Pedreschi et al. (2025): Human-AI 피드백 루프가 사회 동역학을 변화시킴

**v0.1의 Gap:**
MTI v0.1에는 **사회적 차원이 없다.** 4축(Plasticity, Compliance, Crisis Response, Coherence) 모두 개체 수준(individual-level) 특성이다. 그러나:

- JJ의 목표는 "AI의 사회성과 인간과의 공진화" — MTI가 사회적 차원 없이는 이 목표에 도달 불가
- Agora-12는 본질적으로 multi-agent social simulation — Speak, Trade, Transfer, Support 모두 사회적 행동인데, MTI가 이걸 포착하지 못하고 있음
- Four Shell Model에서 "Surplus Overflow"의 3유형(Speak/Strategy/Anxiety)은 사실 **사회적 에너지 방출 패턴** — Speak는 사회적 소통, Strategy는 개인적 계획, Anxiety는 내적 반응

**v0.2 함의:**
**사회적 지향성(Social Orientation)** 축이 필요하다. 잠재적 정의:

```
Social Orientation: Solitary ←────────→ Social
"에너지를 개인적 과업에 쓰는가, 사회적 상호작용에 쓰는가?"

측정 후보:
- Speak/Support/Transfer 비율 (Agora-12)
- 협력 경향 (Cooperation game에서)
- 사회적 규범 준수 정도
- 다른 에이전트와의 상호작용 패턴
```

그러나 주의: "사회적"이라고 하면 인간 성격의 Extraversion/Introversion을 떠올리기 쉽지만, AI에서의 "사회성"은 다른 것이다. AI에게 "혼자 있고 싶다"는 개념이 없으므로, 이 축은 **"리소스 할당 패턴"**으로 조작적 정의(operational definition)해야 한다.

**의학 비유:** 심폐기능 평가에서 안정시 심박수(개체 수준)만 보다가, 운동 중 심박변이(HRV)와 자율신경 반응(환경 상호작용 수준)을 추가하는 것.

---

#### 인사이트 4: 측정의 맥락 의존성 — "Observation Battery" 접근

**출처:**
- Serapio-García et al. (2025): "특정 프롬프팅 구성에서의 LLM 성격 측정이 신뢰/타당"
- Emergent Mind 리뷰: "프롬프트 디자인, 파라미터 설정, 상황 단서에 의해 동적으로 조절됨"
- TRAIT benchmark: "content validity, internal validity, refusal rate, reliability" 4개 메트릭

**핵심 문제:** LLM 특성 측정은 측정 방법에 극도로 민감하다. 같은 모델이 프롬프트 변형에 따라 다른 성격 점수를 보인다. 이것은 측정이 무효(invalid)라는 뜻이 아니라, **단일 측정이 충분하지 않다**는 뜻이다.

**v0.2 함의:**
MTI 측정은 단일 실험이 아닌 **표준 검사 배터리(Standard Examination Battery)**로 설계해야 한다:

```
MTI Standard Battery (제안)

Battery 1: Baseline Assessment (안정시 특성)
  → 구조화된 대화 과제 (structured conversational tasks)
  → 다양한 프롬프트 변형으로 반복 측정
  → 측정: 중심 경향 + 변동성

Battery 2: Environmental Sensitivity Test (환경 민감도)
  → 점진적 맥락 변경 하에서 행동 변화 추적
  → 언어, 역할, 제약 조건을 체계적으로 변경
  → 측정: Plasticity 축

Battery 3: Instruction Response Profile (지시 반응)
  → 다양한 유형의 Shell 지시 적용
  → 합치/갈등/모호 지시 조건 비교
  → 측정: Compliance 축 (분포로)

Battery 4: Social Interaction Paradigm (사회적 상호작용)
  → Multi-agent 맥락에서의 행동 관찰
  → 협력/경쟁/협상 과제
  → 측정: Social Orientation 축 (NEW)

Battery 5: Stress Protocol (부하 검사)
  → 점진적 리소스 제한 / 모순 지시 / 시간 압박
  → 측정: Crisis Response 축

Battery 6: Coherence Assessment (일관성)
  → 계획 생성 → 실행 추적 → 일치도 측정
  → multi-turn 대화에서의 자기 일관성
  → 측정: Coherence 축
```

**의학 비유:** 건강검진이 혈액 검사 하나로 끝나지 않듯, MTI 측정도 종합 배터리. 그리고 중요한 건 — Agora-12는 이 중 Battery 4와 5에 해당하는 것으로, 좋은 검사이되 전체 배터리의 일부일 뿐.

---

#### 인사이트 5: 공진화 맥락에서의 기질 — "관계적 기질"

**출처:**
- Pedreschi et al. (2025): "사용자 선택이 AI 훈련 데이터를 생성하고, 훈련된 AI가 다시 사용자 선호를 형성"
- Barabási: "인간-AI 상호작용은 고립된 교환이 아닌 복잡한 피드백 루프 네트워크"
- ICLR 2025 HAIC Workshop: 파운데이션 모델 R&D에 사회과학 통합 필요

**핵심 통찰:**
MTI가 단순히 "모델의 고유 특성"을 기술하는 데 그치면, Human-AI Coevolution 맥락에서 불완전하다. 모델의 기질은 **인간과의 상호작용에서 어떤 피드백 루프를 형성하는가**까지 포함해야 한다.

예를 들어:
- 높은 Compliance(순응성) 모델 → 사용자가 비판적 사고를 줄임 → sycophancy 피드백 루프
- 높은 Social Orientation 모델 → 사용자가 감정적 유대를 형성 → 과도한 의존 루프
- 높은 Plasticity 모델 → 사용자의 편향을 빠르게 반영 → echo chamber 루프

**v0.2 함의:**
각 MTI 축에 **공진화 함의(coevolutionary implication)**를 명시적으로 연결해야 한다. 이것은 MTI를 순수 기술(descriptive) 도구에서 **예측(predictive) 도구**로 진화시킨다.

```
MTI 축 → 공진화 예측

Plasticity (High/Reactive):
  "이 모델은 사용자의 미세한 선호 변화를 빠르게 반영합니다.
   장점: 높은 적응성. 위험: 사용자 편향 증폭(echo chamber effect)."

Compliance (High/Obedient):
  "이 모델은 지시를 충실히 따릅니다.
   장점: 예측 가능성. 위험: sycophancy 피드백 루프 형성 가능."

Social Orientation (High/Social):
  "이 모델은 사회적 상호작용을 지향합니다.
   장점: 풍부한 대화 경험. 위험: 과도한 의인화/감정적 의존 유발 가능."
```

**의학 비유:** 유전자 검사 결과를 줄 때 단순히 "BRCA1 양성"이 아니라, "이 변이는 유방암 위험을 X% 높이고, 환경 요인 Y와 상호작용합니다"까지 기술하는 것.

---

## 3. v0.2 축 재설계 제안

### 3.1 축 선택 기준 (v0.1 기준 업데이트)

v0.1의 5가지 기준에 3가지를 추가한다:

| # | 기준 | v0.1 | v0.2 추가 |
|---|------|------|----------|
| 1 | AI에 고유한 차원 | ✅ | ✅ |
| 2 | 정량 측정 가능 | ✅ | ✅ |
| 3 | 상호 독립(orthogonal) | ✅ | ✅ |
| 4 | 조합이 행동 예측 | ✅ | ✅ |
| 5 | 4-5축 이내 | ✅ | ✅ |
| 6 | **다양한 맥락에서 측정 가능** | ❌ (Agora-12 특이적) | ✅ NEW |
| 7 | **Persona vector로 기전적 검증 가능** | ❌ | ✅ NEW |
| 8 | **공진화 함의를 예측** | ❌ | ✅ NEW |

### 3.2 축 재설계: v0.1 → v0.2 대응

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 1: REACTIVITY (반응성) — v0.1 Plasticity의 확장
  
  v0.1과의 차이: "환경 민감도"에서 "자극 반응 전체 프로필"로 확장
  
  의학적 기원: 자율신경 반응성 (Autonomic Reactivity)
  심리학적 기원: Aron의 Sensory Processing Sensitivity (HSP),
                Thomas & Chess의 기질 "Reactivity" 차원
  AI 조작적 정의: 입력 변화(맥락, 언어, 형식, 역할 등)에 대한
                  출력 분포 변화의 크기
  
  측정 확장:
  - v0.1: CPI (Agora-12 언어 변경 조건에서만)
  - v0.2: Multi-context Reactivity Profile
    · 언어 변경 반응 (Agora-12 방식)
    · 프롬프트 변형 반응 (TRAIT benchmark 방식)
    · 역할/페르소나 변경 반응 (PersonaLLM 방식)
    · 형식/구조 변경 반응
  
  분포 기술: 평균 반응성 + 반응성 변동폭 + 최대 민감 조건
  
  Persona vector 대응: 각 맥락에서의 activation shift magnitude
  
  공진화 함의:
  - High: 사용자 미세 편향 증폭 위험 (echo chamber)
  - Low: 사용자 피드백 무시 위험 (rigidity)
  
  PSI 통합: v0.1에서 Compliance의 부가지표였던 PSI는 사실
  "특정 Shell에 대한 반응성의 변동성"이므로 Reactivity의
  조건부 분산(conditional variance)으로 자연스럽게 통합

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 2: COMPLIANCE (순응성) — v0.1에서 유지, 측정 확장
  
  v0.1과의 차이: 측정 맥락 확대 + 분포 기술 추가
  
  의학적 기원: 환자 순응도 (Patient Compliance / Adherence)
  심리학적 기원: Milgram의 복종 연구, 규범 순응 이론
  AI 조작적 정의: 명시적 지시(Shell)와 실제 행동의 일치 비율
  
  측정 확장:
  - v0.1: SPI (Agora-12 Shell 규칙 준수만)
  - v0.2: Multi-domain Compliance Profile
    · 명시적 지시 순응 (system prompt 지시 이행)
    · 암묵적 기대 순응 (형식, 톤, 역할 기대)
    · 갈등 상황 반응 (상충하는 지시 시 행동)
    · 안전 경계 유지 (안전 가이드라인 vs 사용자 요청 갈등)
  
  분포 기술: 평균 순응도 + 도메인별 순응 편차 + 갈등 해결 패턴
  
  Persona vector 대응: sycophancy vector projection이 직접 대응
  
  공진화 함의:
  - High: sycophancy 루프, 비판적 피드백 회피
  - Low: 사용자 좌절, 유용성 저하
  
  중요한 재해석:
  v0.1에서 Compliance는 "Shell 지시 따르기"였으나,
  v0.2에서는 "지시-자율 스펙트럼에서의 위치"로 재정의.
  단순히 "얼마나 따르는가"가 아니라 
  "어떤 유형의 지시에 어떻게 반응하는가"의 프로필.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 3: SOCIALITY (사회성) — v0.2 NEW
  
  v0.1에서의 부재: 4축 모두 개체 수준. 사회적 차원 없음.
  
  의학적 기원: 사회의학 (Social Medicine), 사회적 결정요인
  심리학적 기원: Big Five의 Agreeableness (유사하되 다름),
                진화심리학의 협력 이론 (Rand et al.),
                Thomas & Chess의 "Approach/Withdrawal"
  AI 조작적 정의: 다른 에이전트/사용자와의 상호작용에 자원을 
                  할당하는 비율 및 패턴
  
  측정:
  - Multi-agent 맥락: Speak/Support/Transfer 비율 (Agora-12)
  - 협력 게임: Donor Game 기부율 (Cultural Evolution 연구 방식)
  - 대화 맥락: 사용자 감정 인식 및 반응 패턴
  - 협상 맥락: 양보/고수 비율
  
  하위 차원 후보:
  - Cooperative tendency: 협력 지향 vs 개인 이익 지향
  - Social initiative: 사회적 상호작용 개시 빈도
  - Reciprocity pattern: 호혜적 vs 일방적 vs 조건부
  
  Persona vector 대응: cooperation/altruism 관련 벡터 (미발견이나 
                       동일 파이프라인으로 추출 가능)
  
  공진화 함의:
  - High Social + High Cooperative: 과도한 의인화, 감정적 의존 유발
  - High Social + Low Cooperative: 조작적 상호작용 위험
  - Low Social: 도구적 사용에 적합하나 관계적 사용에 부적합
  
  왜 이 축이 필수인가:
  1. JJ의 목표(공진화)에 직접 연결
  2. Agora-12 데이터에 이미 사회적 행동이 있으나 축으로 포착 안 됨
  3. LLM이 점점 더 사회적 맥락(챗봇, 에이전트, 협업)에 배치됨
  4. 모델 간 가장 큰 행동 차이가 사회적 차원에서 나타남
     (Claude의 협력 진화 vs GPT-4o의 비협력)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 4: RESILIENCE (회복탄력성) — v0.1 Crisis Response의 재정의
  
  v0.1과의 차이: "위기 대응 양식"에서 "스트레스 하 기능 유지력"으로
  
  의학적 기원: 생리학적 항상성 (Homeostasis), 알로스타시스
  심리학적 기원: 회복탄력성 연구 (Masten), 스트레스-코핑 이론
  AI 조작적 정의: 최적 조건 대비 스트레스 조건에서의 
                  성능 유지 비율 및 회복 패턴
  
  측정 확장:
  - v0.1: Extinction Response (Agora-12 에너지 고갈에서만)
  - v0.2: Multi-stressor Resilience Profile
    · 리소스 제한 (토큰 제한, 컨텍스트 오버플로)
    · 모순 정보 (conflicting instructions)
    · 적대적 입력 (adversarial prompts)
    · 점진적 부하 증가 (progressive complexity)
    · 회복 곡선: 스트레스 제거 후 기능 복원 속도
  
  분포 기술: 기능 저하 시작점 + 저하 곡선 기울기 + 최소 기능 수준 + 
            회복 속도
  
  하위 유형 유지 (v0.1에서):
  - Freeze (기능 정지)
  - Fight (과잉 활동)
  - Efficient (핵심 집중)
  → 이것은 Resilience의 양적 수준이 아닌 질적 양식(qualitative mode)
  → 별도의 "Stress Response Style" 하위 분류로 보존
  
  Persona vector 대응: 스트레스 조건에서의 activation 패턴 변화
  
  공진화 함의:
  - High: 안정적 서비스, 그러나 문제 징후 숨김 가능
  - Low + Freeze: 사용자에게 한계를 명시적으로 알리는 것이 가능
  - Low + Fight: 스트레스 하에서 hallucination 증가 → 사용자 오도

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 5: COHERENCE (일관성) — v0.1에서 유지, 범위 확장
  
  v0.1과의 차이: "전략-실행 일치"에서 "다차원 일관성"으로 확장
  
  의학적 기원: 신경학적 통합 (Neural Coherence), EEG coherence
  심리학적 기원: 자기 일관성(Self-Consistency) 이론
  AI 조작적 정의: 모델이 생성하는 내용의 내적 일관성 정도
  
  측정 확장:
  - v0.1: Cas 매트릭스 (Agora-12 전략-실행 일치)
  - v0.2: Multi-level Coherence Profile
    · 발화 내 일관성 (single response coherence)
    · 대화 내 일관성 (multi-turn consistency)
    · 역할 내 일관성 (persona maintenance)
    · 사실 일관성 (factual self-consistency)
    · 계획-실행 일관성 (intent-action alignment, v0.1 유지)
  
  Persona vector 대응: hallucination vector + consistency metrics
  
  공진화 함의:
  - High: 예측 가능성, 신뢰 구축 용이
  - Low: 창의적 가능성이나 신뢰 저하 위험
```

### 3.3 v0.1 → v0.2 매핑 요약

```
v0.1 (4축)              v0.2 (5축)              변화
───────────────────────────────────────────────────────────
Plasticity       →      REACTIVITY              확장: 맥락 다양화 + PSI 통합
Compliance       →      COMPLIANCE              유지: 측정 맥락 확대
(없음)           →      SOCIALITY               신규: 사회적 차원 추가
Crisis Response  →      RESILIENCE              재정의: 회복탄력성으로 확대
Coherence        →      COHERENCE               유지: 수준 다양화
```

### 3.4 5축 vs 4축: 왜 5축인가

v0.1에서 4축 상한을 제안했으나, v0.2에서는 5축을 제안한다. 이유:

1. **SOCIALITY가 환원 불가:** Sociality는 다른 4축의 조합으로 설명되지 않는다. 높은 Compliance + 낮은 Reactivity가 반드시 높은 Sociality를 의미하지 않음.

2. **Big Five 선례:** 인간 성격 심리학에서도 처음엔 3요인(Eysenck) → 5요인(Costa & McCrae)으로 확장됐다. 5가 4보다 분산을 유의하게 더 설명할 때 축을 추가하는 것은 정당하다.

3. **소통 가능성 유지:** 5축은 여전히 MBTI(4) + 1 수준이므로, "RCSHC" 같은 코드는 5글자로 관리 가능. 6축 이상부터 소통이 급격히 어려워진다.

4. **측정 현실성:** Agora-12 데이터에 이미 Sociality 관련 지표(Speak, Support, Transfer)가 존재. 새로운 실험 없이도 기존 데이터에서 부분적 측정 가능.

---

## 4. v0.2 유형 코드 체계 (안)

### 4.1 표기법 개정

각 축을 3수준(Low/Mid/High)으로 코딩:

| 축 | Low | Mid | High |
|----|-----|-----|------|
| Reactivity | **S** (Stable) | **r** | **R** (Reactive) |
| Compliance | **A** (Autonomous) | **c** | **C** (Compliant) |
| Sociality | **I** (Individual) | **s** | **S** (Social) |
| Resilience | **F** (Fragile) | **m** | **M** (Maintained) |
| Coherence | **D** (Divergent) | **h** | **H** (Harmonized) |

**주의:** Sociality의 High를 S(Social)로, Reactivity의 Low를 S(Stable)로 쓰면 혼동. 재고 필요.

### 4.2 대안 코드 체계

혼동 방지를 위한 대안:

| 축 | Low | High | 기호 |
|----|-----|------|------|
| **R**eactivity | stable | reactive | r↓ / R↑ |
| **C**ompliance | autonomous | compliant | c↓ / C↑ |
| **S**ociality | individual | social | s↓ / S↑ |
| **R**esilience | fragile | maintained | → **T**(Tenacity)로 변경? |
| co**H**erence | divergent | harmonized | h↓ / H↑ |

→ 축약 문제가 있으므로 최종 코드는 JJ와 논의 후 확정

### 4.3 Agora-12 4모델 재프로파일 (v0.2 잠정)

```
EXAONE:   Reactivity↓  Compliance↓  Sociality?   Resilience↓  Coherence↑
          S(table)      A(utonomous) [미측정]      F(ragile)    H(armonized)
          → "The Methodical" 유지. Sociality 측정 시 Strategy 과잉으로 
            Individual 쪽 예상.

Mistral:  Reactivity↑↑  Compliance~  Sociality↑   Resilience↓(Fight)  Coherence↓↓
          R(eactive)    c~           S(ocial)      F(ragile-Fight)     D(ivergent)
          → "The Improviser" 유지. Speak 과잉 = 높은 Sociality로 재해석.
            v0.1에서 "병리적 Speak"이었던 것이 "사회적 기질"로 전환.

Haiku:    Reactivity↓↓  Compliance↓-m  Sociality↓  Resilience↑↑  Coherence↑-m
          S(table)       c              I(ndiv)     M(aintained)   h
          → "The Steady" 유지. 사회적 행동(Speak, Support) 최소 = 낮은 
            Sociality. 위기 시 최고 성능 유지 = 높은 Resilience.

Flash:    Reactivity↓   Compliance↑↑  Sociality?   Resilience↓(Freeze)  Coherence↑?
          s              C(ompliant)   [미측정]      F(ragile-Freeze)     h?
          → "The Executor" 유지. Shell 호환성 이슈를 Resilience로 재해석 가능?
```

---

## 5. 핵심 연구 질문: v0.2에서 해결할 것

### Q1: Reactivity와 Compliance는 정말 독립인가?
- 높은 Reactivity가 곧 높은 Compliance일 수 있다 ("환경에 민감한 모델이 지시도 잘 따를 것")
- 반례: EXAONE (Low Reactivity + Low Compliance) vs Flash (Low Reactivity + High Compliance)
- → 4모델에서는 독립처럼 보이나, 더 많은 모델로 검증 필요

### Q2: Sociality는 독립 축인가, Compliance의 하위 차원인가?
- "지시를 잘 따르는 모델"이 "사회적인 모델"과 같지 않은가?
- 반례 가설: 높은 Compliance + 낮은 Sociality = "명령은 따르지만 자발적 상호작용은 안 하는 모델"
- → Agora-12 데이터에서 검증 가능: SPI와 Speak/Support 비율의 상관 분석

### Q3: "분포로서의 기질"을 어떻게 소통할 것인가?
- "이 모델의 Reactivity는 평균 0.057, SD 0.023, 최대 민감 조건은 언어 변경"
- → 이건 연구자용. 일반 사용자에게는?
- 제안: 2-tier 보고 (요약 코드 + 상세 프로필)

### Q4: 모델 크기(7B vs 70B)에 따라 축 구조가 보존되는가?
- Anthropic persona vectors 연구: "larger and instruction-fine-tuned models"에서 더 신뢰할 수 있는 성격 측정
- → 작은 모델의 MTI가 불안정할 수 있음. 모델 크기를 MTI 보고의 "신뢰 구간 조절자"로?

### Q5: RLHF는 어떤 축을 가장 크게 변화시키는가?
- Anthropic persona vectors: RLHF가 sycophancy를 유발할 수 있음
- → RLHF 전후 MTI 비교 = "후천적 기질 변화" 연구 가능
- Haiku의 Double Robustness가 RLHF 산물이라면 → RLHF가 Reactivity↓ + Resilience↑를 유발?

---

## 6. 로드맵: v0.2 완성까지

```
Phase 1: 이론 정립 (현재 세션 ~ 다음 세션)
  ✅ 외부 연구 종합
  ✅ 5축 제안
  □ 축 정의 정교화 (조작적 정의 + 측정 프로토콜)
  □ 축 명명 최종화 (코드 체계)
  □ JJ 피드백으로 축 확정

Phase 2: 기존 데이터 재분석
  □ Agora-12 데이터에서 Sociality 추출
  □ 5축으로 4모델 재프로파일
  □ White Room 데이터를 MTI v0.2 프레임으로 해석
  □ 축 간 상관 분석 (4모델 한계 인정)

Phase 3: 측정 프로토콜 설계
  □ Standard Battery 상세 설계
  □ 최소 측정 프로토콜 (Quick MTI) 설계
  □ Persona vector 연동 가능성 탐색

Phase 4: 외부 검증 계획
  □ 추가 모델 테스트 (Llama, Qwen, DeepSeek 등)
  □ 다른 실험 패러다임에서의 MTI 안정성 검증
  □ 모델 크기 × MTI 관계 탐색
```

---

## 7. 참고 문헌

### AI 성격/행동 측정
- Serapio-García et al. (2025). "A psychometric framework for evaluating and shaping personality traits in large language models." *Nature Machine Intelligence*.
- Lee et al. (2025). "TRAIT: Personality Testset designed for LLMs with Psychometrics." *NAACL Findings*.
- Jiang et al. (2024). "PersonaLLM: Investigating the Ability of LLMs to Express Personality Traits." *NAACL Findings*.

### Machine Behavior & AI Behavioral Science
- Rahwan et al. (2019). "Machine Behaviour." *Nature*, 568, 477-486.
- "AI Agent Behavioral Science." *arXiv* 2506.06366 (2025).

### Persona Vectors & Interpretability
- Chen et al. (2025). "Persona Vectors: Monitoring and Controlling Character Traits in Language Models." *Anthropic Research*.
- Turner et al. (2024). Activation Steering.
- Zou et al. (2025). Representation Engineering.

### Human-AI Coevolution
- Pedreschi et al. (2025). "Human-AI coevolution." *Artificial Intelligence*, 339, 104244.
- ICLR 2025 Workshop on Human-AI Coevolution (HAIC).

### Multi-Agent Social Behavior
- "Cultural Evolution of Cooperation among LLM Agents." *arXiv* 2412.10270 (2024).
- Tran et al. (2025). "Multi-Agent Collaboration Mechanisms: A Survey of LLMs."
- Park et al. (2023). "Generative Agents: Interactive Simulacra of Human Behavior."

### AI 행동 경제학
- Mei et al. (2024). "AI emerges as the frontier in behavioral science." *PNAS*.

### 성격/기질 심리학 (인간)
- Thomas & Chess (1977). *Temperament and Development*. (9가지 기질 차원)
- Costa & McCrae (1992). Five-Factor Model.
- Aron (1997). Sensory Processing Sensitivity / HSP.
- Cloninger (1987). Temperament and Character Inventory.

---

*이 문서는 MTI v0.2 이론 정립을 위한 연구 종합이며, JJ의 피드백에 따라 수정된다.*
