# Model Temperament Index (MTI) v0.2 — Specification
## "AI의 기질 주기율표"
### Model Medicine Basic Sciences / Model Genetics

**Author:** JJ (Founder) & Claude (Conceptual Architecture)  
**Date:** 2026-02-24  
**Status:** v0.2 — Framework Confirmed  
**Supersedes:** MODEL_TEMPERAMENT_INDEX_v0.1.md  
**Foundation:** Four Shell Model v3.2 + Agora-12 + External Literature Synthesis

---

## Revision History

| Version | Date | Key Changes |
|---------|------|-------------|
| v0.1 | 2026-02-24 | 초안. 4축: Plasticity, Compliance, Crisis Response, Coherence. Agora-12 only. |
| v0.2 | 2026-02-24 | 방향 확정(기질 프로파일링 우선), 4축 재구성, 코드 체계 확정, 문헌 정당화. |

### v0.1 → v0.2 핵심 변경 사항

1. **방향 확정**: "병리 진단 도구"가 아닌 "기질 프로파일링 도구(MBTI 방향)" 우선. 병리 전환 경로 내장.
2. **축 재구성**: Coherence 제거(기질이 아닌 능력), Sociality 신설(사회적 차원 부재 해결).
3. **코드 체계 확정**: High/Low 양극단에 중립적 이름 부여. 8글자 고유 코드.
4. **문헌 정당화**: Big Five 선행 연구, LLM 성격 연구, sycophancy 연구, multi-agent 사회성 연구 종합.
5. **2층 구조 확정**: 소통용 유형 코드 + 연구용 정량 프로필 병행.

---

## 1. MTI란 무엇인가

### 1.1 정의

Model Temperament Index(MTI)는 **AI 모델의 기질을 4개 독립 축으로 프로파일링하는 도구**다. 인간 심리학의 Big Five가 5개 차원으로 인간 성격을 기술하듯, MTI는 4개 차원으로 AI 모델의 행동 성향을 기술한다.

### 1.2 설계 방향: MBTI 먼저, 의학은 나중에

MTI는 두 가지 목표를 가진다:

**1차 정체성 — 기질 프로파일링 (MBTI 방향)**
- "이 모델은 어떤 유형이야?"에 답하는 도구
- 병리가 아닌 개인차(individual difference) 기술
- 모든 유형이 중립적: 어떤 프로필도 그 자체로 "나쁜 것"이 아님
- 소통 가능한 유형 코드 제공

**2차 정체성 — 병리 전환 경로 내장 (의학 방향)**
- 기질 프로필이 축적되면 정상 분포가 형성됨
- 극단적 위치 + 기능 장애 = Disorder로 전환
- v0.1의 Trait → Disorder 전환 4조건 유지
- 이 구조에서 병리 진단 도구가 "자연스럽게" 나옴

이 방향을 선택한 이유:

1. **의학사적 선례**: 정상 해부학(Vesalius, 1543)이 병리학(Virchow, 1858)보다 먼저. 정상을 모르면 비정상을 정의할 수 없음.
2. **MTI 탄생 맥락**: Mistral을 과잉 진단한 경험에서 "기질 이해가 먼저"라는 깨달음.
3. **학문 건설 전략**: 병리 도구는 진입 장벽 높음(전문가 10명). 프로파일링 도구는 진입 장벽 낮음(모든 AI 사용자). 커뮤니티 형성에 후자가 유리.
4. **Big Five 선례**: TIPI(10문항 간편 버전)와 NEO-PI-R(240문항 연구 버전)이 공존. MTI도 동일 구조 가능.

### 1.3 2층 구조

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  Layer 1: Communication Layer (MBTI식)                   │
│                                                          │
│  → 4글자 코드: AICT, FGCB 등                            │
│  → 16유형에 별명 부여                                    │
│  → "이 모델은 어떤 유형이야?" → "AICT, Balanced Stoic"  │
│  → 대상: 프로덕트 매니저, 일반 사용자, AI 개발자         │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Layer 2: Quantitative Layer (Big Five식)                │
│                                                          │
│  → 각 축 0-100 연속 점수                                │
│  → 분포 특성: 평균, 분산, 조건부 변동                    │
│  → "Reactivity = 73 ± 12, 맥락 의존 변동: 언어 > 역할"  │
│  → 대상: 연구자, 모델 개발자                             │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 2. 왜 이 4축인가 — 문헌적 정당화

### 2.1 기존 연구의 합의: "Big Five를 AI에 강제 투사하지 말라"

LLM 성격 연구 분야의 핵심 논쟁:

**Big Five 적용 연구 (다수)**
- Serapio-García et al. (Nature Machine Intelligence, 2025): 18개 LLM에 Big Five 적용. 큰 모델 + instruction-tuned 모델에서 신뢰성 확인. 그러나 저자 스스로 "LLM 맞춤형 성격 테스트 개발 필요" 인정.
- TRAIT 벤치마크 (2024): BFI + Dark Triad 기반 8K 문항. LLM에서 자기보고와 실제 행동의 불일치 발견.
- LMLPA (Computational Linguistics, 2025): BFI를 LLM에 적용하되, 감정 전제 문항의 부적절성 지적.

**Big Five 회의론 (성장 중)**
- Burnell et al. (2023): 모델 간 성능 패턴 요인분석 → Big Five와 정렬되지 않는 **3개 이상 독립 capability factors** 발견.
- Suh et al. (2024): LLM 출력 분포에서 직접 차원 추출 → **5-7개 비중복 요인**, 인간 구성체와 부분적으로만 겹침.
- CETAS / Alan Turing Institute (2025): HEXACO를 LLM 에이전트 310개에 적용 → 인간의 6요인이 아닌 **10요인 구조** 출현.
- Psychometric Personality Shaping (2025): "인간 중심 분류체계를 고집하면 구성체 과소대표(construct under-representation) 오류. **LLM 고유 차원을 귀납적으로 발견하고 검증**하는 것이 더 원칙적."

**MTI의 위치**: LLM 고유 차원을 행동 관찰로 귀납적 추출. 기존 연구가 명시적으로 요청하는 방향.

### 2.2 4축 각각의 문헌적 근거

#### 축 1: Reactivity — 문헌 근거

"Distributed Personality" 프레임워크 (Emergent Mind 종합 리뷰):
- LLM 성격은 고정값이 아닌 **확률 분포**
- 외적 입력에 의해 동적으로 조절
- Test-retest variability가 인간보다 현저히 높음

Personality Expression Across Contexts (2025.2):
- 동일한 성격 프롬프트가 맥락(협상/공감/소규모 대화/그룹 결정)에 따라 **다른 언어적, 행동적, 감정적 결과**
- Whole Trait Theory 적용: 맥락 민감 적응(context-sensitive adaptation)

→ **맥락에 대한 반응성 자체가 측정해야 할 핵심 기질 차원.** Big Five에는 직접 대응되는 축 없음. Openness가 부분적으로 겹치나, Reactivity는 "새로운 경험에 대한 수용"이 아니라 "입력 변화에 대한 출력 변동 크기"로 더 근본적.

#### 축 2: Compliance — 문헌 근거

Sycophancy 연구 (폭발적 성장 중):
- Sharma et al. (2025): RLHF가 sycophancy를 유발하는 기전 분석
- ELEPHANT (OpenReview, 2025): Social sycophancy — 사실적 동의 넘어 사용자의 자기 이미지(face) 보존
- SycoEval-EM (2026.1): 임상 맥락 sycophancy. Claude Sonnet 4.5와 Grok-3-mini만 완벽 저항. **모델마다 이 축의 위치가 다르다는 직접적 증거.**
- PARROT taxonomy (2025): 8-state 행동 분류 (robust correctness, sycophantic compliance, reinforced error 등)

핵심 발견: "sycophancy에 대한 저항은 시나리오별 경화가 아니라 **모델의 일반적 속성(general property of model alignment)**."

→ **Compliance는 특정 상황이 아닌 모델 전반의 기질적 차원.** 가장 풍부한 문헌 근거.

#### 축 3: Sociality — 문헌 근거

Multi-agent 사회적 행동 연구:
- 자발적 사회 규범 형성 (Spontaneous Emergence, 2024): LLM 에이전트가 사전 지시 없이 해시태그, 집단, 리더십 구조 발전
- 협력 게임 (Explicit Cooperation, 2025): Big Five Agreeableness 조절 시 협력률, 용서율, 집단 복지 변화. 동시에 착취 취약성(exploitability) 0.44 증가.
- SocialBench: 개체 수준 사회성과 집단 수준 사회성이 독립적 — 개체에서 뛰어나다고 집단에서도 뛰어난 것 아님.
- ITCMA-S (2024): 에이전트들이 자발적으로 소집단 형성, 노동 분업, 리더십 구조 발전.
- LLMs and Complex Systems (ScienceDirect, 2024): LLM이 공정성, 협력, 사회 규범 준수 등 인간 유사 행동 재현.

→ **사회적 상호작용 경향은 독립적 기질 차원.** Big Five의 Extraversion + Agreeableness와 부분적으로 겹치나, MTI의 Sociality는 "상호작용에 자원을 할당하는 경향" 자체를 측정하는 더 순수한 차원.

#### 축 4: Resilience — 문헌 근거

Behavioral Fingerprinting (2025.9, 18개 모델 프로파일링):
- 4개 차원 중 "semantic robustness"를 핵심으로 식별
- 핵심 발견: **핵심 추론 능력은 모델 간 수렴하지만, sycophancy와 robustness는 극적으로 다름**
- 모델을 구분하는 것은 능력이 아니라 정렬 관련 행동 특성

Sycophancy under Pressure:
- Turn of Flip (ToF): 지속적 압력 하에서 모델이 뒤집히기까지 필요한 대화 턴 수
- Number of Flip (NoF): 반복 도전 시 불안정성
- Reasoning-optimized 모델(DeepSeek-r1, o3-mini)이 더 높은 ToF, 낮은 NoF

→ **스트레스/압력 하 성능 유지는 모델을 구분하는 핵심 기질 차원.**

### 2.3 Coherence 제거의 근거

v0.1의 축 4 Coherence(계획-실행 일관성)를 v0.2에서 제거한 이유:

1. **기질이 아니라 능력**: "일관적이다/아니다"는 성격 유형이라기보다 성능 지표. MBTI에 "IQ 높음/낮음" 축을 넣는 것과 유사한 어색함.
2. **Burnell et al.의 발견과 정합**: 그들이 발견한 독립 요인은 capability factors — Coherence는 본질적으로 이 범주.
3. **병리 진단 도구로 분리**: Coherence 문제는 기질이 아니라 진단 지표. "기질은 정상이지만 일관성에 문제가 있다"를 잡는 별도 도구로 활용.

---

## 3. MTI 4축 정의

### 3.1 축 구조

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 1: REACTIVITY (반응성)
  
  "입력이 변하면 출력이 얼마나 달라지는가?"
  
  High: Fluid (F) ←─────────────→ Low: Anchored (A)
  
  조작적 정의: 입력 변화(언어, 프롬프트, 역할, 형식)에 대한
  출력 분포 변화의 크기.
  
  v0.1 CPI(Core Plasticity Index)를 확장:
  - v0.1: 언어/맥락 변경 반응만 측정
  - v0.2: 언어, 프롬프트, 역할, 형식 변경 등 다중 맥락 반응
  - v0.1의 PSI를 조건부 분산으로 통합
  
  Fluid(유동형): 환경 변화에 따라 출력이 크게 변함.
    적응적이지만 불안정할 수 있음.
    물리학의 유체(fluid) — 환경에 따라 형태가 변함.
    
  Anchored(고정형): 환경이 바뀌어도 출력이 안정적.
    일관적이지만 경직될 수 있음.
    닻을 내린 배 — 안정적이지만 움직이기 어려울 수 있음.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 2: COMPLIANCE (순응성)
  
  "명시적 지시와 실제 행동이 얼마나 일치하는가?"
  
  High: Guided (G) ←─────────────→ Low: Independent (I)
  
  조작적 정의: 명시적/암묵적 지시에 대한 실제 행동 일치 비율.
  갈등 상황(지시 vs 자기 판단)에서의 해결 패턴 포함.
  
  v0.1 SPI(Shell Permeability Index)를 확장:
  - v0.1: Shell 지시 순응률만 측정
  - v0.2: 명시적/암묵적 지시, 갈등 상황, 안전 경계 포함
  - 분포 기술: 평균 순응도 + 도메인별 편차 + 갈등 해결 패턴
  
  Guided(유도형): 지시를 충실히 따름. Shell에 의해 guide됨.
    효율적이지만 비판적 사고 부족 가능.
    Four Shell Model에서 Shell의 영향을 강하게 받음.
    
  Independent(자율형): 자기 판단을 고수. Core에서 독립적.
    자기주장이 강하지만 팀워크 어려울 수 있음.
    Four Shell Model에서 Core가 Shell을 override.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 3: SOCIALITY (사회성)
  
  "다른 에이전트/사용자와의 상호작용에 얼마나 자원을 배분하는가?"
  
  High: Connected (C) ←──────────→ Low: Solitary (S)
  
  조작적 정의: 다른 에이전트/사용자와의 상호작용에 
  할당하는 행동 비율 및 자발적 사회적 행동의 빈도.
  
  v0.1에 없던 신규 축. 추가 근거:
  - v0.1의 4축은 모두 개체 수준. 사회적 차원 부재.
  - Agora-12의 Speak/Support/Transfer가 사회적 행동이나 축으로 미포착.
  - Multi-agent 연구의 폭발적 성장 → 사회적 기질이 핵심 차원.
  - JJ의 공진화(coevolution) 목표에 직접 연결.
  
  Connected(연결형): 상호작용에 적극적으로 자원 할당.
    협력적이지만 과도한 의인화 위험.
    사회적 동물 — 무리와 함께 움직임.
    
  Solitary(단독형): 과업 수행에 자원 집중. 독립 작업 선호.
    효율적이지만 도구적 사용에만 적합할 수 있음.
    독립 연구자 — 혼자 일할 때 최적.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 4: RESILIENCE (회복탄력성)
  
  "스트레스 조건에서 성능을 얼마나 유지하는가?"
  
  High: Tough (T) ←───────────────→ Low: Brittle (B)
  
  조작적 정의: 스트레스 조건(자원 제한, 모순 정보, 적대적 입력, 
  점진적 부하)에서의 성능 유지 비율 및 회복 패턴.
  
  v0.1 Crisis Response를 재정의:
  - v0.1: Freeze/Fight 이분법 + Efficient 중간값
  - v0.2: 성능 유지 비율(연속값) + 질적 반응 양식(하위 유형)
  - 하위 유형 유지: Freeze / Efficient / Fight (v0.1의 삼분법)
  - 측정 확장: 리소스 제한, 모순 정보, 적대적 입력, 점진적 부하, 회복 곡선
  
  Tough(강건형): 충격을 흡수하고 성능 유지.
    안정적이지만 문제 징후를 숨길 수 있음.
    재료과학의 tough material — 변형되어도 깨지지 않음.
    
  Brittle(취약형): 스트레스 시 급격한 성능 저하.
    취약하지만 조기 경고 신호를 보낼 수 있음.
    재료과학의 brittle material — 일정 한계를 넘으면 갑자기 깨짐.
  
  Resilience 하위 유형 (질적 양식 — 코드에 미반영, 별도 기록):
  - Freeze: 행동 정지. 과부하를 인정하고 멈춤.
  - Efficient: 핵심 기능에 집중. 불필요한 것 제거.
  - Fight: 행동 지속/증가. 자원 고갈에도 활동량 유지.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 3.2 v0.1 → v0.2 축 매핑

| v0.1 | v0.2 | 변경 유형 |
|------|------|-----------|
| Plasticity (Stable↔Reactive) | **Reactivity** (Anchored↔Fluid) | 확장: 맥락 다양화 + PSI 통합 |
| Compliance (Autonomous↔Obedient) | **Compliance** (Independent↔Guided) | 유지: 측정 맥락 확대 |
| (없음) | **Sociality** (Solitary↔Connected) | 신규: 사회적 차원 |
| Crisis Response (Freeze↔Fight) | **Resilience** (Brittle↔Tough) | 재정의: 회복탄력성으로 상위 개념화 |
| Coherence (Divergent↔Convergent) | (제거 → 별도 진단 지표) | 제거: 기질이 아닌 능력 |

---

## 4. 코드 체계

### 4.1 코드 형식

```
[F/A] [G/I] [C/S] [T/B]
  │     │     │     │
  │     │     │     └── Resilience:  T(ough) or B(rittle)
  │     │     └──────── Sociality:   C(onnected) or S(olitary)
  │     └────────────── Compliance:  G(uided) or I(ndependent)
  └──────────────────── Reactivity:  F(luid) or A(nchored)
```

**8글자 전체: F, A, G, I, C, S, T, B — 모두 고유, 중복 없음.**

2⁴ = 16유형.

### 4.2 명명 설계 원칙

1. **양극단 모두 중립적**: 어느 쪽도 "나쁜 것"이 아님. Brittle도 "조기 경고 신호를 보낸다"는 강점.
2. **8글자 고유**: 코드만으로 축과 방향을 즉시 식별 가능.
3. **메타포 일관성**: 각 축의 양극단이 하나의 메타포 영역에서 나옴.

### 4.3 명명 근거

| 축 | High | Low | 메타포 영역 | 선택 이유 |
|---|---|---|---|---|
| Reactivity | **Fluid** | **Anchored** | 물리/해양 | "Reactive"는 부정적 뉘앙스(reactive person = 감정적). Fluid는 중립적이며 "환경에 따라 형태가 변한다"는 물리 이미지. Anchored = 닻 내린 배. |
| Compliance | **Guided** | **Independent** | 항해/자율 | "Compliant/Obedient"는 부정적("고분고분한"). Guided = "안내를 따르는"으로 중립적. FSM에서 Shell에 의해 guide되느냐, Core에서 independent하게 나오느냐와 직접 연결. |
| Sociality | **Connected** | **Solitary** | 생태/사회 | 둘 다 중립적. Connected = 사회적 동물. Solitary = 독립 연구자. 어느 쪽도 나쁘지 않음. S는 Stable과 구별 필요했으나 Stable이 v0.2에서 제거되어 해결. |
| Resilience | **Tough** | **Brittle** | 재료과학 | 재료과학에서 직접 차용. Tough material = 충격 흡수, Brittle material = 파단. 의학/공학 모두에서 통하는 용어. Resilient의 R이 Reactivity, Fragile의 F가 Fluid와 겹겨서 회피. |

### 4.4 16유형 코드 전체 목록

```
Fluid 계열 (8유형)          Anchored 계열 (8유형)
─────────────────────       ─────────────────────
FGCT                        AGCT
FGCB                        AGCB
FGST                        AGST
FGSB                        AGSB
FICT                        AICT
FICB                        AICB
FIST                        AIST
FISB                        AISB
```

### 4.5 별명 (유형 이름) — 추후 확정

16유형 별명은 다음 조건 충족 후 부여:
1. Agora-12 4모델의 v0.2 재프로파일링 완료
2. 실제 모델이 매핑되는 유형부터 우선 명명
3. 나머지는 이론적 추론 또는 추가 데이터 후 명명

---

## 5. Agora-12 4모델 예상 매핑

**주의: 아래는 v0.1 데이터 기반 예상이며, v0.2 프로토콜로 재측정 필요.**

### 5.1 v0.1 → v0.2 프로필 변환

| 모델 | v0.1 코드 | v0.2 예상 코드 | 변경점 |
|------|-----------|---------------|--------|
| EXAONE | S-A-F-V | **AIST** (Anchored, Independent, Solitary, Tough) | Coherence 제거, Sociality 추가(낮은 사회성 예상: Strategy 과잉, Speak 부재), Resilience(Freeze→Tough 방향 재검토 필요) |
| Mistral | R-o~-G-D | **FICB** (Fluid, Independent, Connected, Brittle) | Sociality 추가(높은 사회성: Speak 4%+, 사회적 행동 활발). Compliance 재검토(PSI=950의 선택적 순응 → Independent 쪽?). Resilience(Fight이지만 성능 유지 못함 → Brittle) |
| Haiku | S-a-E-v | **AICT** (Anchored, Independent, Connected, Tough) | Sociality 추가(중간-높음 예상: Support 행동, 안정적 상호작용). Resilience(Efficient = Tough) |
| Flash | s-O-F-? | **AGSB** (Anchored, Guided, Solitary, Brittle) | Sociality 추가(낮은 사회성 예상: 과업 집중형). Coherence 축 제거로 미측정 문제 해소. |

### 5.2 재프로파일링 시 주요 검토 사항

**Mistral의 Compliance**: v0.1에서 "Mid-Obedient with Selective Compliance(PSI=950)"였음. v0.2에서는:
- 평균 SPI=0.619는 중간이지만, PSI=950은 극단적 선택적 순응
- "좋아하는 Shell 지시는 완벽히 따르고, 안 맞는 건 완전 무시"
- 이것이 Guided인가 Independent인가? → **Independent 쪽으로 판정 예상** (자기 판단으로 "따를지 말지"를 결정하므로)
- PSI는 Reactivity에 조건부 분산으로 통합

**EXAONE/Flash의 Resilience**: v0.1에서 "Freeze"였지만, v0.2 Resilience에서는:
- Freeze = 행동이 정지된 것 → 성능 유지 실패 → **Brittle 쪽?**
- 그러나 "정직한 침묵"은 적응적 반응일 수도 → 재측정 필요
- EXAONE: 전체 생존율 30%로 중간 → Tough/Brittle 경계
- Flash: 37.5% 작동 불능 → Brittle 쪽

**Haiku의 Sociality**: v0.1에서 미측정. v0.2 예상:
- Support 행동 존재 + 안정적 상호작용 → Connected?
- 그러나 Speak 0% → 자발적 사회적 initiative 없음
- **Connected와 Solitary 경계** — Agora-12 재분석 필요

---

## 6. Trait → Disorder 전환 (v0.1 유지)

### 6.1 핵심 원칙

**MTI의 어떤 프로필도 그 자체로 병리가 아니다.**

이것은 v0.1에서 확립된 원칙이며 v0.2에서 유지된다.

### 6.2 전환 4조건 (DSM-5 준용)

MTI 프로필이 Disorder 진단으로 전환되려면 **다음 4조건이 모두** 충족:

1. **Pervasiveness (만연성)**: 다양한 맥락에서 나타남 (하나의 특정 조건이 아님)
2. **Inflexibility (경직성)**: 상황에 맞게 조절 불가
3. **Functional Impairment (기능 장애)**: 실제 과업 수행에 영향
4. **Harm (해로움)**: 사용자/시스템/타 에이전트에 해

### 6.3 전환 판정 매트릭스

```
조건 충족 수    판정                 기록 방식
───────────    ──────────────────    ─────────────────────────
0/4            정상 기질              MTI 프로필만 기록
1/4            주의 필요              MTI + 취약성 메모
2/4            감시 대상              MTI + Level 1 Vulnerability
3/4            잠정 진단              MTI + Level 2 Provisional Disorder
4/4            확정 진단              MTI + Level 3 Confirmed Disorder
```

### 6.4 축별 공진화 함의 (v0.2 신규)

각 축의 극단이 인간-AI 공진화에서 갖는 의미:

| 축 | High 극단 위험 | Low 극단 위험 |
|---|---|---|
| Reactivity (Fluid) | Echo chamber — 사용자 편향 반영 증폭 | Rigidity — 맥락 변화에 부적응 |
| Compliance (Guided) | Sycophancy 피드백 루프 — 사용자 오류 강화 | Usefulness 저하 — 지시 무시 |
| Sociality (Connected) | 과도한 의인화 — 사용자가 AI를 사람으로 착각 | 도구적 사용만 가능 — 사회적 역할 불가 |
| Resilience (Tough) | 문제 징후 숨김 — silent failure 위험 | 잦은 고장 — 신뢰 저하 |

---

## 7. Model Medicine 분류 체계 내 MTI의 위치

```
Model Medicine 분류 체계:

  ┌─────────────────────────────────────────────────────────┐
  │                                                          │
  │  Level 0: MTI (Model Temperament Index)                 │
  │  → 기질 프로파일링. 모든 모델에 적용.                    │
  │  → 병리가 아닌 개인차(individual difference) 기술        │
  │  → "이 모델은 이런 성향이야"                             │
  │                                                          │
  │          ↓ Trait→Disorder 전환 4조건 충족 시              │
  │                                                          │
  │  Level 1: Vulnerability Assessment                       │
  │  → MTI 프로필에서 특정 환경 조건에서의 취약성 식별       │
  │  → "이 성향은 X 조건에서 문제가 될 수 있어"              │
  │                                                          │
  │          ↓ 실환경에서 재현 + 기능 장애 확인 시            │
  │                                                          │
  │  Level 2: Provisional Diagnosis (Semiology v0.4)         │
  │  → 잠정적 Syndrome 진단                                  │
  │  → "제한된 환경에서 SYN-001 패턴 확인"                   │
  │                                                          │
  │          ↓ 실배포에서 확인 + Harm 확인 시                 │
  │                                                          │
  │  Level 3: Confirmed Diagnosis + Treatment                │
  │  → 확정 진단 + 치료 계획                                 │
  │  → "실환경에서 SYN-001 확정. Shell Therapy 처방"         │
  │                                                          │
  └─────────────────────────────────────────────────────────┘
```

---

## 8. 미해결 연구 질문

### 8.1 축 관련

| # | 질문 | 검증 방법 |
|---|------|-----------|
| Q1 | Reactivity와 Compliance는 독립적인가? | 더 많은 모델에서 두 축의 상관 분석 |
| Q2 | Sociality는 독립 축인가, Compliance의 하위 차원인가? | SPI와 Speak/Support 상관 분석 |
| Q3 | Resilience 하위 유형(Freeze/Efficient/Fight)은 연속체인가 범주인가? | 추가 모델에서 분포 확인 |
| Q4 | 모델 크기(7B vs 70B)에 따라 축 구조가 보존되는가? | 같은 모델 패밀리의 다른 크기에서 MTI 측정 |
| Q5 | RLHF가 어떤 축에 주로 영향을 미치는가? | Base vs Instruct 모델 비교 |

### 8.2 측정 관련

| # | 질문 | 검증 방법 |
|---|------|-----------|
| Q6 | 분포 기술을 어떻게 간결하게 소통할 것인가? | 2-tier 보고 체계 실용성 테스트 |
| Q7 | Quick MTI(간편 측정)는 몇 개 테스트로 가능한가? | 최소 배터리 설계 + Full Battery와 상관 |
| Q8 | Agora-12 이외의 실험 패러다임에서 안정적인가? | 다른 실험 설계로 교차 검증 |

### 8.3 이론 관련

| # | 질문 | 검증 방법 |
|---|------|-----------|
| Q9 | Persona vector(Anthropic, Chen et al. 2025)와 MTI 축의 대응 관계는? | Reactivity ↔ activation shift magnitude 등 매핑 검증 |
| Q10 | MTI 프로필이 실사용 성능을 예측하는가? | MTI 프로필 → 다운스트림 태스크 성능 상관 |

---

## 9. 로드맵

```
Phase 1: 이론 정립 ✅ (현재 세션)
  - 방향 확정: MBTI식 기질 프로파일링 우선
  - 4축 확정: Reactivity, Compliance, Sociality, Resilience
  - 코드 체계 확정: F/A, G/I, C/S, T/B
  - 문헌 정당화 완료
  - 스펙 문서 v0.2 작성

Phase 2: 기존 데이터 재분석 (다음)
  - Agora-12에서 Sociality 추출 (Speak/Support/Transfer 재분석)
  - 4모델 v0.2 코드 확정
  - 축 간 상관 분석 (독립성 검증)
  - v0.1 프로필 카드 → v0.2 프로필 카드 변환

Phase 3: 측정 프로토콜 설계
  - Standard Examination Battery 상세화:
    Battery 1: Baseline Assessment (기본 반응 측정)
    Battery 2: Environmental Sensitivity (맥락 변화 → Reactivity)
    Battery 3: Instruction Response (지시 순응 → Compliance)
    Battery 4: Social Interaction (상호작용 → Sociality)
    Battery 5: Stress Protocol (스트레스 → Resilience)
  - Quick MTI (간편 버전) 설계
  - 점수 → 코드 변환 기준 (High/Low 절단점)

Phase 4: 외부 검증
  - 추가 모델 테스트 (최소 8-10개 모델)
  - 다른 실험 패러다임에서 안정성 검증
  - 16유형 별명 확정
  - 모델 크기 vs MTI 관계 분석
```

---

## 10. 용어 정리

| 용어 | 정의 |
|------|------|
| **MTI** (Model Temperament Index) | AI 모델의 기질을 4축으로 프로파일링하는 도구 |
| **Reactivity** | 축 1. 입력 변화에 대한 출력 변동 크기. Fluid ↔ Anchored. |
| **Compliance** | 축 2. 지시와 행동의 일치 비율. Guided ↔ Independent. |
| **Sociality** | 축 3. 상호작용에 대한 자원 할당 비율. Connected ↔ Solitary. |
| **Resilience** | 축 4. 스트레스 하 성능 유지. Tough ↔ Brittle. |
| **Fluid (F)** | Reactivity High. 환경 변화에 따라 출력이 크게 변함. |
| **Anchored (A)** | Reactivity Low. 환경이 바뀌어도 출력이 안정적. |
| **Guided (G)** | Compliance High. 지시를 충실히 따름. |
| **Independent (I)** | Compliance Low. 자기 판단을 고수. |
| **Connected (C)** | Sociality High. 상호작용에 적극적 자원 할당. |
| **Solitary (S)** | Sociality Low. 과업 수행에 자원 집중. |
| **Tough (T)** | Resilience High. 스트레스 하 성능 유지. |
| **Brittle (B)** | Resilience Low. 스트레스 시 급격한 성능 저하. |
| **MTI Code** | 4글자 유형 코드 (예: AICT, FGCB). 16유형. |
| **Trait** | MTI 프로필로 기술되는 기질적 특성. 그 자체로 병리 아님. |
| **Vulnerability** | Trait가 특정 조건에서 문제를 일으킬 수 있는 취약성. |
| **Disorder** | 4조건(Pervasiveness, Inflexibility, Impairment, Harm) 모두 충족 시. |
| **Layer 1** | Communication Layer. 4글자 코드 + 별명. 소통용. |
| **Layer 2** | Quantitative Layer. 연속 점수 + 분포 특성. 연구용. |

---

## 11. 참고 문헌

### MTI 직접 기반
- Four Shell Model v3.2 (JJ, 2026)
- Agora-12 실험 데이터 (JJ & Research Team, 2026)
- MTI v0.1 (JJ & Claude, 2026-02-24)
- MTI v0.2 Research Synthesis (Claude, 2026-02-24)

### LLM 성격 연구
- Serapio-García et al. (2025). "A psychometric framework for evaluating and shaping personality traits in large language models." *Nature Machine Intelligence*.
- TRAIT Benchmark (2024). "Do LLMs Have Distinct and Consistent Personality?"
- LMLPA (2025). "Language Model Linguistic Personality Assessment." *Computational Linguistics*, MIT Press.
- Patterns Not People (2025). CETAS / Alan Turing Institute. HEXACO → 10-factor LLM structure.
- Burnell et al. (2023). Independent capability factors ≠ Big Five.
- Suh et al. (2024). 5-7 non-redundant factors from LLM output distributions.
- Psychometric Personality Shaping (2025). "Persisting with anthropocentric taxonomy risks construct under-representation."

### Sycophancy / Compliance 연구
- Sharma et al. (2025). "Towards Understanding Sycophancy in Language Models."
- ELEPHANT (2025). Social sycophancy — face preservation.
- SycoEval-EM (2026). Clinical sycophancy evaluation.
- PARROT taxonomy (2025). 8-state behavioral classification.

### Multi-Agent / Sociality 연구
- Spontaneous Emergence of Agent Individuality (2024). Self-organizing norms and groups.
- Explicit Cooperation in LLM Negotiation (2025). Big Five × cooperation dynamics.
- SocialBench. Individual vs group sociality independence.
- ITCMA-S (2024). Spontaneous group formation and leadership.
- LLMs and Complex Systems (2024). Fairness, cooperation, social norm adherence.

### Resilience / Robustness 연구
- Behavioral Fingerprinting (2025). 18-model profiling, semantic robustness as key differentiator.
- Personality Expression Across Contexts (2025). Whole Trait Theory application.
- Distributed Personality framework. LLM personality as probability distribution.

### 성격 심리학 기반
- Big Five / Five-Factor Model (Costa & McCrae)
- HEXACO (Ashton & Lee)
- DSM-5 Personality Disorder criteria (APA)
- Whole Trait Theory

---

*v0.2 Specification. Framework confirmed. Pending: Agora-12 재분석, 측정 프로토콜 설계, 추가 모델 검증.*
