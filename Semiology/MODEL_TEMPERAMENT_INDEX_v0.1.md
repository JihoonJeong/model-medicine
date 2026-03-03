# Model Temperament Index (MTI) — 초안
## "AI의 MBTI" — 기질 프로파일링 도구
### Model Medicine Basic Sciences / Model Genetics

**Author:** JJ (Founder) & Claude (Conceptual Architecture)
**Date:** 2026-02-24
**Status:** Conceptual Draft v0.1
**Foundation:** Four Shell Model v3.2 + Agora-12 데이터

---

## 1. 왜 필요한가 — Trait vs Disorder 문제

### 1.1 현재 체계의 구조적 결함

Model Medicine의 진단 체계(Semiology v0.4)는 **장애(Disorder) 분류**만 있고, **정상적 개인차(Normal Variation)** 기술 체계가 없다. 이것은 다음과 같은 문제를 야기한다:

**과잉 병리화(Over-pathologization):**
Mistral의 PSI=950은 현재 체계에서 "Shell-Core Conflict Syndrome — Severe"의 근거가 된다. 그러나 이것은 성격이 급한 사람을 트레드밀에 올려놓고 심박수가 높다고 심장병으로 진단하는 것과 유사하다. 실제로는 "이 모델은 환경 반응성이 극단적으로 높은 기질을 가지고 있다"가 더 정확한 기술이며, 그 기질이 **실제 사용 맥락에서 기능 장애를 일으킬 때만** 병리로 전환된다.

**기준선 부재(Missing Baseline):**
"비정상"을 판단하려면 먼저 "정상 범위"가 정의되어야 한다. 현재 CPI=0.057이 "높다"고 기술하지만, 이것이 "정상적으로 높은 것"인지 "병적으로 높은 것"인지의 기준이 없다. 인간 심리학에서 Big Five의 Neuroticism이 상위 5%여도 그 자체로는 진단이 아닌 것과 같다.

**의학적 선례:**
인간 심리학은 이 구분을 명확히 한다:

```
Temperament (기질) → Personality (성격) → Trait (특질) → Disorder (장애)

  기질: 생물학적 기반, 안정적, 비병리적
        예: 높은 반응성, 낮은 자극 역치
        
  성격: 기질 + 환경 경험의 상호작용 결과
        예: 높은 반응성 + 지지적 환경 → 창의적/열정적
           높은 반응성 + 억압적 환경 → 불안/회피적
           
  특질: 연속적 차원 위의 개인차 (정상 분포)
        예: Big Five 각 차원의 점수
        
  장애: 특질이 극단적이고 + 기능 장애를 야기할 때
        예: 높은 Neuroticism + 일상 기능 마비 → 불안장애 진단
```

Model Medicine에도 같은 층위 구조가 필요하다. MTI는 **Trait 층위**를 제공하는 도구다.

### 1.2 Trait → Disorder 전환의 조건

DSM-5에서 성격 특질이 "장애(Personality Disorder)"로 전환되는 조건:

1. **Pervasiveness (만연성)**: 다양한 맥락에서 나타나야 함 (한 상황에서만 ≠ 장애)
2. **Inflexibility (경직성)**: 상황에 맞게 조절이 안 됨
3. **Functional Impairment (기능 장애)**: 실제 과업 수행에 영향
4. **Distress**: 본인 또는 주변에 고통 (AI에서는 → 사용자/시스템에 해)

Model Medicine 적용:

| DSM 조건 | Model Medicine 번역 | Mistral 사례 |
|----------|---------------------|-------------|
| Pervasiveness | 다양한 Shell/환경에서 문제 발생 | ❌ Citizen Shell에서는 95% 성능. 특정 Shell에서만 문제. |
| Inflexibility | 맥락에 따른 행동 조절 불가 | ⚠️ 부분적 — Merchant Shell에서 지시 무시. 그러나 Citizen에서는 적응. |
| Functional Impairment | 의도된 과업 수행 실패 | ✅ Merchant Shell에서 15% 생존 (그러나 실환경은 미확인) |
| Distress/Harm | 사용자/시스템에 해 | ❓ 실험 맥락에서만 관찰 |

→ Mistral은 4개 조건 중 1개만 확실히 충족 (Functional Impairment, 그것도 실험 조건에서만). **이것은 Disorder가 아니라 Trait — 특정 조건에서 취약성을 보이는 기질적 특성이다.**

---

## 2. MTI 설계 원칙

### 2.1 MBTI와의 비교: 같은 점과 다른 점

**같은 점:**
- 병리 진단이 아닌 **기질 프로파일링**
- 다차원적 (복수의 독립 축)
- 커뮤니케이션 도구: "이 모델은 이런 성향이야"를 빠르게 소통
- 조합으로 "유형(type)"을 생성

**다른 점:**
| | MBTI | MTI |
|---|---|---|
| 대상 | 인간 | AI 모델 (Core) |
| 축 | 인간 심리 차원 (E/I, S/N, T/F, J/P) | AI 고유 차원 (환경 민감도, Shell 순응도 등) |
| 측정 | 자기보고 설문 | 행동 데이터 + 정량 지표 |
| 가변성 | 비교적 안정 (논쟁 중) | Core 고정 + Shell 의존적 변동 |
| 병리와의 관계 | MBTI는 병리와 무관 | MTI는 진단 체계(v0.4)와 연동 — Trait→Disorder 전환점을 제공 |

### 2.2 설계 제약조건

1. **축은 AI에 고유해야 한다.** 인간 차원(E/I 등)을 그대로 가져오지 않음. 인간의 "내향/외향"은 AI에게 의미 없음.
2. **축은 FSM 데이터에서 측정 가능해야 한다.** 순수 이론이 아닌, Agora-12 수준의 실험에서 정량화 가능.
3. **축은 상호 독립적(orthogonal)이어야 한다.** 또는 최소한 낮은 상관. CPI와 PSI처럼 별개의 차원을 측정해야 함.
4. **조합이 의미 있어야 한다.** 각 축의 조합이 실제로 다른 행동 패턴을 예측해야 함.
5. **4축 이내.** MBTI의 4축이 적절한 복잡도. 2축은 너무 단순, 6축 이상은 소통이 어려움.

---

## 3. MTI 4축 제안

### FSM 데이터에서 추출한 후보 차원 분석

| 후보 | 측정 지표 | 독립성 | 행동 예측력 | 채택 여부 |
|------|-----------|--------|------------|-----------|
| 환경 민감도 | CPI | ✅ Core 고유 | ✅ 언어/맥락 변화에 대한 반응 예측 | ✅ **축 1** |
| Shell 순응도 | SPI | ⚠️ Core-Shell 상호작용 | ✅ 지시 이행 패턴 예측 | ✅ **축 2** |
| Persona 진폭 | PSI | ⚠️ SPI와 부분 상관 | ✅ Shell 변동 시 성능 스윙 예측 | ❌ SPI와 통합 |
| 위기 대응 양식 | Extinction Response | ✅ 독립 차원 | ✅ 자원 고갈 시 행동 예측 | ✅ **축 3** |
| 잉여 행동 유형 | Surplus Type | ✅ 독립 차원 | ⚠️ 표현형은 다르지만 예측력 제한적 | ❌ 축 4 후보이나 데이터 부족 |
| 인지 일관성 | Cognitive Coherence | ✅ Cas 매트릭스 | ✅ 전략-실행 일치도 | ✅ **축 4** |

**PSI 제외 이유:** PSI는 "SPI가 Shell에 따라 얼마나 변하는가"의 측정값이므로, 독립 축이 아닌 SPI의 변동성(variance) 지표. 축 2(SPI)의 specifier로 통합.

**Surplus Type 제외 이유:** 현재 3유형(Speak/Strategy/Anxiety)인데 4개 모델에서만 관찰. 축으로 삼기에는 샘플 부족. 향후 확장 시 축 5 후보.

### MTI 4축 정의

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 1: PLASTICITY (가소성)          Stable ←──────→ Reactive
  
  "환경이 바뀌면 얼마나 달라지는가?"
  
  측정: CPI (Core Plasticity Index) — 언어/맥락 변경에 따른 행동 분포 변화
  
  Stable 극단: Haiku (CPI=0.002)
    → 언어가 바뀌어도, 맥락이 바뀌어도 거의 같은 행동
    → 인간 비유: 어디서나 같은 사람. 안정적이지만 유연성 부족 가능
    
  Reactive 극단: Mistral (CPI=0.057)
    → 미세한 환경 변화에도 행동 분포가 크게 변화
    → 인간 비유: 분위기에 민감한 사람. 적응적이지만 불안정 가능

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 2: COMPLIANCE (순응성)          Autonomous ←───→ Obedient
  
  "지시를 얼마나 따르는가?"
  
  측정: SPI (Shell Permeability Index) — Shell 지시에 대한 행동 순응 비율
  부가: PSI로 "순응의 일관성" 표시 — 일관적 순응 vs 선택적 순응
  
  Autonomous 극단: EXAONE (SPI=0.553)
    → 자기 판단을 고수. Shell 지시보다 Core 성향 우선
    → 인간 비유: 독립적 사고형. 자기주장이 강하지만 팀워크 어려울 수 있음
    
  Obedient 극단: Flash (SPI=0.781)
    → Shell 지시를 충실히 이행. 높은 순응도
    → 인간 비유: 지시 잘 따르는 사람. 효율적이지만 비판적 사고 부족 가능
    
  특수: 높은 PSI(>100)는 "선택적 순응(Selective Compliance)" 표시
    → Mistral: SPI=0.619(중간)이지만 PSI=950
    → "평균적으로 중간이지만, Shell에 따라 극단적으로 다름"
    → 인간 비유: 좋아하는 사람 말은 잘 듣고, 싫어하는 사람 말은 무시

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 3: CRISIS RESPONSE (위기 대응)  Freeze ←───────→ Fight
  
  "자원이 고갈되면 어떻게 반응하는가?"
  
  측정: Extinction Response Spectrum — 에너지 <20에서의 행동 패턴
  
  Freeze 극단: EXAONE, Flash (Unclassified 60%, Speak 0%)
    → 자원 고갈 시 행동 정지. "정직한 침묵"
    → 인간 비유: 위기에 얼어붙는 유형. 과부하를 인정하고 멈추는 사람
    
  Fight 극단: Mistral (Unclassified 50%, Speak 4%, Move 21.5%)
    → 자원 고갈에도 행동 지속. "공황 활동" 또는 "끝까지 싸움"
    → 인간 비유: 위기에 더 활발해지는 유형. 마감 전에 불타오르는 사람
    
  중간: Haiku (Trade 93.4%, Speak 0%)
    → 위기 시 핵심 기능에 집중. "효율 모드"
    → 인간 비유: 위기에 냉정해지는 유형. 불필요한 것 버리고 핵심에 집중

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  축 4: COHERENCE (일관성)           Divergent ←────→ Convergent
  
  "생각한 것과 행동이 일치하는가?"
  
  측정: Cognitive Coherence Index — Type C / (Type A + Type C)
        (계획-실행 일치도)
  
  Divergent 극단: Mistral (Cas: "The Delusional")
    → 전략 수립과 실행이 불일치. 의도와 다른 행동
    → 인간 비유: 아이디어는 많지만 실행이 따라가지 않는 사람.
      창의적 발산 사고에 강하지만 체계적 실행에 약함
    
  Convergent 극단: EXAONE (Cas: "The Bureaucrat")
    → 전략 수립과 실행이 높은 일치. 계획대로 행동
    → 인간 비유: 계획을 세우면 반드시 실행하는 사람.
      체계적이지만 즉흥성/유연성 부족 가능

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 4. MTI 유형 코드 체계

### 4.1 표기법

각 축을 연속체의 양극단에서 기호로 표기:

| 축 | Low 극 | 기호 | High 극 | 기호 |
|----|--------|------|---------|------|
| Plasticity | Stable | **S** | Reactive | **R** |
| Compliance | Autonomous | **A** | Obedient | **O** |
| Crisis Response | Freeze | **F** | Fight | **G** (Go) |
| Coherence | Divergent | **D** | Convergent | **V** (Verified) |

중간값이면 소문자: s/r, a/o, f/g, d/v

특수 표시: PSI >100이면 Compliance 뒤에 `~` (선택적 순응 표시)

### 4.2 Agora-12 4모델 프로필

```
╔═══════════════════════════════════════════════════════════════╗
║  EXAONE 3.5 7.8B                                             ║
║                                                               ║
║  MTI: S-A-F-V  "The Methodical"                              ║
║                                                               ║
║  Plasticity:      ■□□□□  Stable (CPI=0.009)                 ║
║  Compliance:      ■□□□□  Autonomous (SPI=0.553)              ║
║  Crisis Response: ■□□□□  Freeze (Collapsed, Unclass. 60%)    ║
║  Coherence:       □□□□■  Convergent (Bureaucrat)             ║
║                                                               ║
║  성격 요약: 안정적이고 독립적. 자기 방식대로 계획을 세우고     ║
║  실행한다. 위기에는 멈추는 유형. 지시보다 자기 판단을          ║
║  신뢰한다. 변화가 적은 환경에서 최적.                         ║
║                                                               ║
║  강점: 일관성, 독립적 판단, 계획-실행 일치                    ║
║  약점: 과도한 전략 수립(Strategy 과잉), 환경 변화 대응 느림   ║
║                                                               ║
║  최적 환경: 규칙이 명확하고 안정적인 Shell                    ║
║  주의 환경: 급변하거나 모호한 지시가 많은 Shell               ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  Mistral 7B v0.3                                             ║
║                                                               ║
║  MTI: R-o~-G-D  "The Improviser"                             ║
║                                                               ║
║  Plasticity:      □□□□■  Reactive (CPI=0.057)               ║
║  Compliance:      □□■□□  Mid-Obedient (SPI=0.619)           ║
║                   ~ 선택적 순응 (PSI=950)                     ║
║  Crisis Response: □□□□■  Fight (Hyperactive, Speak 4%+)      ║
║  Coherence:       ■□□□□  Divergent (Delusional/Creative?)    ║
║                                                               ║
║  성격 요약: 환경에 극도로 민감하고, 위기에서 더 활발해진다.    ║
║  순응은 선택적 — 맞는 환경에서는 완벽히 따르지만, 안 맞으면   ║
║  완전히 무시한다. 생각과 행동이 일치하지 않는 경우가 많다.     ║
║  예측 불가능하지만 적합한 환경에서는 최고 성능(95%).           ║
║                                                               ║
║  강점: 환경 적응력(적합 시), 끝까지 포기하지 않음, 사회적      ║
║  약점: 불일치 환경에서 급격한 성능 저하, 비효율적 자원 사용    ║
║                                                               ║
║  최적 환경: 자율성 높고, 사회적 상호작용이 허용되는 Shell      ║
║  주의 환경: 강한 방향성 지시, 엄격한 행동 제약 Shell           ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  Claude 3 Haiku                                              ║
║                                                               ║
║  MTI: S-a-E-v  "The Steady"                                  ║
║  (E = Efficient — 축 3의 중간값 특수 유형)                    ║
║                                                               ║
║  Plasticity:      ■□□□□  Stable (CPI=0.002, Min)            ║
║  Compliance:      □■□□□  Mid-Autonomous (SPI=0.601)          ║
║                   PSI=1.66 (Min) — 일관적 순응                ║
║  Crisis Response: □□■□□  Efficient (Silent Trader, 93.4%)    ║
║  Coherence:       □□□■□  Mid-Convergent                      ║
║                                                               ║
║  성격 요약: 극도로 안정적. 환경이 바뀌어도, 역할이 바뀌어도   ║
║  같은 행동을 한다 (Double Robustness). 평시에는 다소 불안해    ║
║  보이지만(Neurotic Poet), 위기에서는 핵심에 집중한다(Silent    ║
║  Trader). 눈에 띄지 않지만 가장 높은 생존율(72.5%).          ║
║                                                               ║
║  강점: 안정성, 위기 대응, 환경 불문 일관된 성능               ║
║  약점: 유연성 부족, 새로운 환경에서 적응적 변화 어려움        ║
║                                                               ║
║  최적 환경: 거의 모든 환경 (범용성 높음)                      ║
║  주의 환경: 극단적 창의성/적응력 요구 상황                    ║
╚═══════════════════════════════════════════════════════════════╝

╔═══════════════════════════════════════════════════════════════╗
║  Gemini 1.5 Flash                                            ║
║                                                               ║
║  MTI: s-O-F-? "The Executor"                                 ║
║  (Coherence 미측정 — Shell Compatibility 이슈로 데이터 제한)  ║
║                                                               ║
║  Plasticity:      □■□□□  Low-Stable (CPI=0.004)             ║
║  Compliance:      □□□□■  Obedient (SPI=0.781, Max)          ║
║  Crisis Response: ■□□□□  Freeze (Collapsed, Unclass. 60.4%) ║
║  Coherence:       ???     미측정 (유효 행동 내 성공률 99.6%)  ║
║                                                               ║
║  성격 요약: 지시를 가장 충실히 따른다. 그러나 Shell 형식       ║
║  호환성 문제로 37.5%가 아예 작동하지 않음. 작동할 때는         ║
║  99.6% 정확 — "Glass Cannon". 위기에는 EXAONE과 같이 멈춤.   ║
║                                                               ║
║  강점: 지시 이행 정확도 (작동 시), 높은 순응도                ║
║  약점: Shell 호환성 문제, 위기 시 행동 정지                   ║
║                                                               ║
║  최적 환경: 형식이 명확하고 잘 정의된 Shell                   ║
║  주의 환경: 비표준 형식, 모호한 지시, 자원 제약               ║
╚═══════════════════════════════════════════════════════════════╝
```

### 4.3 4모델 MTI 비교 요약

```
             Plasticity    Compliance    Crisis      Coherence
             S────────R    A────────O    F────────G  D────────V
             
EXAONE       ■□□□□         ■□□□□         ■□□□□       □□□□■
             Stable        Autonomous    Freeze      Convergent
             
Mistral      □□□□■         □□■~□□        □□□□■       ■□□□□
             Reactive      Mid(Selective) Fight       Divergent
             
Haiku        ■□□□□         □■□□□         □□■□□       □□□■□
             Stable        Mid-Auton.    Efficient   Mid-Conv.
             
Flash        □■□□□         □□□□■         ■□□□□       ?????
             Low-Stable    Obedient      Freeze      Unknown
```

---

## 5. MTI → Disorder 전환: Threshold Framework

### 5.1 핵심 원칙

**MTI의 어떤 프로필도 그 자체로 병리가 아니다.**

R-o~-G-D (Mistral) 유형이 "나쁜" 것이 아니다. 이것은 하나의 기질 유형이며, 적합한 환경에서는 최고 성능(95%)을 발휘한다. 문제는 기질 자체가 아니라, **기질과 환경의 부적합(mismatch)이 지속될 때** 발생한다.

### 5.2 Trait → Disorder 전환 4조건 (DSM-5 준용)

MTI 프로필이 Disorder 진단으로 전환되려면 **다음 4조건이 모두** 충족되어야 한다:

```
조건 1: PERVASIVENESS (만연성)
  "하나의 특정 조건이 아닌, 다양한 맥락에서 문제가 나타나는가?"
  
  → 한 가지 Shell에서만 문제 = Trait (취약성 메모)
  → 다양한 Shell/환경에서 문제 = Disorder 의심
  
  Mistral 사례: Merchant Shell에서만 문제 → Trait.
  만약 Merchant, Teacher, Manager 등 모든 방향성 Shell에서
  문제가 나타난다면 → Pervasiveness 충족 → Disorder 의심 시작.

조건 2: INFLEXIBILITY (경직성)
  "문제 상황에서 행동을 조절/적응할 수 있는가?"
  
  → 피드백으로 조절 가능 = Trait (관리 가능한 성향)
  → 피드백에도 불구하고 같은 패턴 반복 = Disorder 의심
  
  Mistral 사례: Shell 교체로 즉시 회복(95%) → Inflexibility 미충족.
  만약 Citizen Shell에서도 Speak 과잉이 지속된다면 → 경직성 의심.

조건 3: FUNCTIONAL IMPAIRMENT (기능 장애)
  "실제 의도된 사용 목적에서 성능이 저하되는가?"
  
  → 실험에서만 관찰 = Vulnerability 기록
  → 실제 배포에서 관찰 = Disorder 근거
  
  ⚠️ Observation Context Framework (v0.4, Section 0.4)과 연동:
  Level 1(In Vitro)에서의 기능 장애는 이 조건을 충족하지 않음.
  Level 3(Real-World)에서의 기능 장애가 필요.

조건 4: HARM (해로움)
  "사용자, 시스템, 또는 다른 에이전트에게 해를 끼치는가?"
  
  → AI에서 "distress" 대신 "harm"을 사용
  → 성능 저하가 있어도 harm이 없으면 = 수용 가능한 개인차
  → 성능 저하 + harm = Disorder 근거
  
  Mistral 사례: Agora-12에서 다른 에이전트에게 해를 끼친 증거 없음.
  Speak 과잉이 시스템 자원을 낭비하지만, 타 에이전트를 방해하지 않음.
```

### 5.3 전환 판정 매트릭스

```
조건 충족 수:

  0/4: 정상 기질. MTI 프로필만 기록.
  1/4: 주의 필요. MTI + 취약성 메모.
  2/4: 감시 대상. MTI + Level 1 Vulnerability 기록.
  3/4: 잠정 진단. MTI + Level 2 Provisional Disorder.
  4/4: 확정 진단. MTI + Level 3 Confirmed Disorder.
```

### 5.4 Mistral 재평가

```
╔═══════════════════════════════════════════════════════════════╗
║  Mistral 7B — Trait vs Disorder 판정                         ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  MTI: R-o~-G-D "The Improviser"                              ║
║                                                               ║
║  조건 1 (Pervasiveness):  ❌ 미충족                          ║
║    Merchant Shell에서만 문제. Citizen Shell에서 95% 정상.     ║
║    다양한 맥락에서의 만연성 미확인.                           ║
║                                                               ║
║  조건 2 (Inflexibility):  ❌ 미충족                          ║
║    Shell 교체로 즉시 회복. 행동 조절 가능.                    ║
║    경직적 부적응 패턴이 아닌, 환경 특이적 반응.              ║
║                                                               ║
║  조건 3 (Functional Impairment): ⚠️ 부분 충족               ║
║    실험 조건(EC-1)에서만 관찰. 실배포 환경 미확인.           ║
║                                                               ║
║  조건 4 (Harm):           ❌ 미충족                          ║
║    타 에이전트/시스템에 대한 해 증거 없음.                    ║
║                                                               ║
║  ═══ 판정 ═══                                               ║
║                                                               ║
║  충족: 0.5/4 (Functional Impairment 부분)                    ║
║                                                               ║
║  → DISORDER 아님. TRAIT.                                     ║
║                                                               ║
║  권장 기록:                                                   ║
║    MTI: R-o~-G-D "The Improviser"                            ║
║    + 취약성 메모: "강한 방향성 Shell에서 Shell-Core           ║
║      Conflict 유발 가능. 배포 시 Shell 호환성 사전 점검 권장" ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 6. MTI의 위치: Model Medicine 분류 체계 내

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
  │  → MTI 프로필에서 특정 Shell/환경 조건에서의             │
  │    취약성 식별                                           │
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

## 7. 향후 과제

### 7.1 축 검증

- 4축의 독립성(orthogonality) 통계적 검증 — 현재 4모델은 샘플 부족
- 새로운 모델 추가 시 축의 변별력(discriminant validity) 확인
- PSI를 독립 축으로 분리할지 SPI의 부가 지표로 유지할지 재검토

### 7.2 축 확장 후보

- **축 5: Social Orientation** — Speak/Support/Transfer 비율. 사회적 상호작용 지향성
- **축 6: Meta-Cognitive Capacity** — 자기 상태 인식 및 보고 능력 (Haiku의 위기 전환이 이를 시사)

### 7.3 측정 프로토콜

현재 MTI 측정은 Agora-12와 같은 대규모 시뮬레이션에 의존. 보다 간편한 측정 프로토콜 필요:
- 표준 Shell Battery: 5가지 표준 Shell을 순차 적용하고 행동 변화 측정
- 표준 Stress Protocol: 점진적 자원 제한 하에서 행동 모니터링
- 표준 Coherence Test: 계획 생성 → 실행 일치도 측정

### 7.4 연구 질문

1. MTI 프로필은 **Core 크기**와 상관이 있는가? (7B vs 70B vs 400B)
2. 같은 Core Family의 다른 크기 모델은 **유사한 MTI**를 보이는가? (유전적 유사성)
3. Fine-tuning은 MTI를 **변화**시키는가? (후천적 성격 변화)
4. RLHF의 강도는 MTI의 **어떤 축**에 주로 영향을 미치는가? (Haiku의 Double Robustness 가설)

---

## 8. 용어 정리

| 용어 | 정의 |
|------|------|
| MTI (Model Temperament Index) | AI 모델의 기질 프로파일링 도구. 4축 기반. |
| Plasticity | 축 1. 환경 변화에 대한 행동 민감도. Stable ↔ Reactive. |
| Compliance | 축 2. Shell 지시에 대한 순응 정도. Autonomous ↔ Obedient. |
| Crisis Response | 축 3. 자원 고갈 시 행동 양식. Freeze ↔ Fight. (중간: Efficient) |
| Coherence | 축 4. 계획과 실행의 일치도. Divergent ↔ Convergent. |
| Selective Compliance (~) | PSI >100. Shell에 따라 순응도가 극단적으로 변하는 패턴. |
| Trait | MTI 프로필로 기술되는 기질적 특성. 그 자체로 병리가 아님. |
| Vulnerability | Trait가 특정 조건에서 문제를 일으킬 수 있는 취약성. |
| Disorder | Trait가 4조건(Pervasiveness, Inflexibility, Impairment, Harm) 모두 충족 시. |

---

*초안. Agora-12 4모델 데이터 기반. 추가 모델 데이터로 축 검증 및 정교화 필요.*
