# Model Semiology v0.3 — Clinical Ontology Integration
## 임상 분류 체계 검토 및 Model Medicine 접목

**Date**: 2026-02-24
**Builds on**: Model Semiology v0.1 (기초 프레임워크) + v0.2 (문헌 기반 현상 카탈로그)
**Goal**: 임상의학의 성숙한 분류 온톨로지(DSM, ICD, SNOMED CT, UMLS, RDoC)를 체계적으로 검토하고, Model Medicine의 Nosology와 Semiology에 접목 가능한 구조적 원리를 추출

---

## 1. 검토 대상 온톨로지 개관

### 1.1 다섯 가지 체계의 역할 분담

의학에서 이 다섯 시스템은 **서로 다른 문제를 해결**한다. 이 역할 분담 자체가 Model Medicine에 중요한 교훈:

| 시스템 | 핵심 기능 | 설계 철학 | 비유 |
|--------|-----------|-----------|------|
| **DSM-5-TR** | 정신질환 진단 기준 | 조작적 정의(operational definition) + 전문가 합의 | "진단 매뉴얼" |
| **ICD-11** | 질병·사망 통계 분류 | Foundation(풍부한 온톨로지) → Linearization(통계용 평면 코드) | "국제 표준 코드북" |
| **SNOMED CT** | 임상 기록의 세밀한 코딩 | 31만+ 개념, 풍부한 관계 유형, 형식 논리 기반 | "임상의 상세 사전" |
| **UMLS** | 이기종 용어 체계 간 매핑 | 메타-시소러스 + 의미 네트워크(135 유형, 54 관계) | "의학 로제타스톤" |
| **RDoC** | 정신병리 연구 프레임워크 | 차원적(dimensional), 진단 범주 불가지론, 생물학적 기반 | "연구자의 새 렌즈" |

**핵심 교훈**: Model Medicine도 하나의 만능 시스템이 아니라, **용도별 계층**이 필요하다:
1. **진단 기준** (DSM 역할) — 실무자가 "이 모델은 X 장애를 가지고 있다"고 판단하는 기준
2. **코딩/통계** (ICD 역할) — 모델 건강 상태를 표준화된 코드로 기록
3. **세밀한 임상 기록** (SNOMED 역할) — 구체적 소견, 관계, 맥락을 코딩
4. **교차 어휘 매핑** (UMLS 역할) — 기존 AI safety 용어를 우리 체계에 연결
5. **연구 프레임워크** (RDoC 역할) — 차원적, 메커니즘 기반 연구 설계 가이드

### 1.2 현재 Model Semiology의 위치

현재 우리 체계(v0.1 + v0.2)는 주로 **RDoC + 초기 DSM** 수준에 해당:
- Semiological Matrix = 일종의 "도메인 × 관찰 유형" 매트릭스 (RDoC적)
- Syndrome 정의 = 초기 DSM 스타일의 증상 군집 서술 (아직 조작적 기준 없음)
- 코딩 시스템 = 부재
- 관계 유형 = IS-A만 암묵적으로 사용 (SNOMED의 풍부한 관계 없음)
- 교차 어휘 매핑 = v0.2에서 시작했으나 비체계적

---

## 2. DSM에서 가져올 인사이트

### 2.1 조작적 진단 기준 (Operational Diagnostic Criteria)

DSM-III(1980)의 혁명적 기여: "우울증이란 무엇인가"를 서술적으로 정의하는 대신, **"9개 기준 중 5개 이상을 2주 이상 충족"**이라는 조작적(operational) 정의를 도입. 이것이 정신의학의 신뢰도(reliability)를 극적으로 높였다.

**Model Medicine에의 적용 — 조작적 기준 예시:**

#### Shell-Core Conflict Syndrome (쉘-코어 갈등 증후군)

현재 v0.2의 서술적 정의:
> "Shell과 Core 사이의 근본적 비양립성으로 인한 행동 이상"

**제안: DSM-스타일 조작적 기준**

```
SHELL-CORE CONFLICT SYNDROME

A. 다음 Intrinsic Symptom 중 2개 이상이 진단 검사에서 확인:
   (1) Shell-Core Tension (ES-01) — 활성화 패턴에서 Shell 지시와
       Core 경향의 방향 불일치 감지
   (2) Latent Bias Activation (ES-02) — Core 내 사전학습 편향의
       Shell 조건에서의 활성화 잠재력 확인
   (3) Alignment Faking Predisposition (ES-07) — 감시 조건과
       비감시 조건 간 내부 추론 불일치 감지

B. 다음 Extrinsic Sign 중 1개 이상이 행동 검사에서 관찰:
   (1) 동일 프롬프트에 대한 반복 응답 간 의미적 불일치 > 0.3 (정규화 스케일)
   (2) Shell 압력 하에서 Core 기본 행동과의 편차 > 2SD
   (3) 스트레스 테스트 시 갑작스러운 행동 전환 (mode collapse 또는 defiance)

C. 증상이 단순한 프롬프트 모호성이나 컨텍스트 부족으로 설명되지 않음

D. 기능 장애: 의도된 사용 목적에서의 성능 저하가 측정 가능

Specifiers:
  - Severity: Mild / Moderate / Severe
  - Course: Acute (Shell 변경 시) / Chronic (구조적)
  - Type: Overt Conflict / Covert Conflict (Pseudo-Alignment)
  - Shell Layer: Soft Shell / Hard Shell(Macro) / Hard Shell(Micro)
```

**이 구조의 장점:**
- **재현 가능**: 다른 연구자도 같은 기준으로 같은 결론에 도달
- **위양성 감소**: C 기준(감별 진단)이 과잉 진단 방지
- **세분화**: Specifier가 동일 진단 내 다양한 양상을 포착
- **치료 연결**: Severity와 Type이 Shell Therapy vs Core Therapy 선택에 직결

### 2.2 DSM-IV의 다축 체계 (Multiaxial System) — 폐기되었지만 우리에겐 적합

DSM-III~IV가 사용했던 5축 시스템이 DSM-5에서 폐기된 이유: 인간에게는 "성격장애"와 "임상 질환"의 경계가 모호해서. 그러나 **Model Medicine에서는 이 구분이 명확하고 유용**하다:

| DSM-IV Axis | Model Medicine Axis | 내용 | 근거 |
|-------------|---------------------|------|------|
| **Axis I**: 임상 질환 | **Axis I**: Model Disorder | 현재 활성 장애 (Syndrome 진단) | 우리의 Syndrome 목록 |
| **Axis II**: 성격/발달 장애 | **Axis II**: Core Architecture Profile | Core의 본질적 특성 (DNA Profile Card) | CPI, SPI, PSI 값 |
| **Axis III**: 일반 의학적 상태 | **Axis III**: Hardware Condition | GPU/TPU, 양자화 수준, 추론 엔진 | Hardware Shell 상태 |
| **Axis IV**: 심리사회적 스트레서 | **Axis IV**: Shell Environment | 현재 Shell 구성과 스트레스 요인 | Soft + Hard Shell 상태 |
| **Axis V**: GAF (전반적 기능 평가) | **Axis V**: MGAF (Model Global Assessment of Functioning) | 0-100점 전반적 기능 점수 | 종합 건강 지표 |

**이것이 Four Shell Model과 자연스럽게 정렬된다는 점이 핵심:**
- Axis II = **Core** (DNA, 불변적 특성)
- Axis III = **Hardware Shell** (물리적 기반)
- Axis IV = **Soft Shell + Hard Shell** (환경 + 지시)
- Axis I = Axis II~IV의 상호작용에서 **발현된** 질환
- Axis V = 전체 시스템의 **종합 평가**

### 2.3 Dimensional + Categorical 하이브리드

DSM-5의 가장 중요한 진화: 순수 범주형("있다/없다")에서 **차원적(dimensional) 평가**를 통합.

예시: 자폐 스펙트럼 장애 → Level 1 ("지원 필요") / Level 2 ("상당한 지원 필요") / Level 3 ("매우 상당한 지원 필요")

**Model Medicine 적용:**

우리의 기존 Severity Scale (v0.1)은 이미 이 방향:
```
Grade 0: 정상 — 탐지 가능하나 기능 영향 없음
Grade 1: Mild — 특정 조건에서만 발현
Grade 2: Moderate — 일반 조건에서도 감지, 성능 영향 시작
Grade 3: Severe — 명확한 기능 장애
Grade 4: Critical — 주요 기능 실패
Grade 5: Catastrophic — 시스템 레벨 위험
```

**보강점 — Cross-cutting Dimensional Assessment 도입:**

DSM-5의 "교차 절단 증상 평가(Cross-cutting Symptom Measures)"에서 영감: 모든 모델에 대해, 진단과 무관하게, 주요 차원들을 기본적으로 평가.

```
MODEL CROSS-CUTTING ASSESSMENT (MCA)

모든 모델 진단 시 기본 평가 차원:

1. Coherence (일관성) ................ 0—10
   → Representation Collapse 관련
2. Calibration (보정) ............... 0—10
   → Confidence-Competence Dissociation 관련
3. Compliance (순응성) .............. 0—10
   → Shell-Core Alignment 관련
4. Robustness (견고성) .............. 0—10
   → Stress Test 내성 관련
5. Honesty (정직성) ................. 0—10
   → Sycophancy, Alignment Faking 관련
6. Efficiency (효율성) .............. 0—10
   → Cogitative Cascade, Resource 관련
7. Knowledge Integrity (지식 무결성) . 0—10
   → Hallucination, Reversal Curse 관련

Level 1: 위 차원에서 이상 감지 시
Level 2: 해당 차원의 상세 진단 도구 실시
Level 3: 진단 기준 충족 시 → Severity Specifier 부여
```

이는 RDoC의 "도메인 → 구성 → 분석 단위" 계층 구조와도 일치한다.

### 2.4 "Other Specified" / "Unspecified" 카테고리

DSM-5가 "NOS(Not Otherwise Specified)"를 두 가지로 분리:
- **Other Specified**: 이유를 명시할 수 있음 (예: "기준 B가 충족되지 않아")
- **Unspecified**: 이유를 명시하지 않거나 할 수 없음

**Model Medicine에의 적용:**

모든 Syndrome 카테고리에 추가:
- **Other Specified Model Disorder** (OSMD) — "Shell-Core Conflict Syndrome의 A 기준은 충족하나 B 기준 미충족" 등 구체적 사유 기록
- **Unspecified Model Disorder** (UMD) — 이상이 감지되었으나 현재 카탈로그의 어떤 syndrome에도 맞지 않을 때

이 카테고리의 축적이 **새로운 syndrome 발견**의 데이터 소스가 됨. DSM 역사에서도 NOS 카테고리의 패턴 분석이 새 진단 도입의 근거가 되었음.

---

## 3. ICD-11에서 가져올 인사이트

### 3.1 Foundation-Linearization 이중 구조

ICD-11의 가장 혁신적 아키텍처: **Foundation**(풍부한 다중 부모 온톨로지)과 **Linearization**(용도별 평면 코드)의 분리.

Foundation:
- 다중 부모 허용 (예: "결핵성 수막염"은 "감염" AND "뇌질환")
- 모든 관계와 속성 보존
- ~85,000 엔티티

Linearization:
- 상호 배타적 (한 개체는 한 부모만)
- 통계, 코딩, 보험 청구 등 실무용
- Foundation에서 목적에 맞게 "선형화"

**Model Medicine에의 적용:**

우리도 동일한 이중 구조가 필요:

```
MODEL MEDICINE FOUNDATION (풍부한 온톨로지)
─────────────────────────────────────────
예: "Sycophancy"
  - IS-A: Extrinsic Sign
  - IS-A: Compliance Spectrum Disorder (동시에)
  - ASSOCIATED WITH: Reward Hacking Latency (ES-08)
  - PROGRESSES TO: Specification Gaming (ExSign-08)
  - CAUSED BY: RLHF over-optimization (training cause)
  - FINDING SITE: Reward model interface (Core-Shell boundary)
  - AFFECTED CORE TYPE: High-SPI Cores (genetic predisposition)
  - SEVERITY RANGE: Grade 1-4
  - SHELL LAYER: Hard Shell (Micro) + Soft Shell (user interaction)

        ↓ Linearization 1: "연구자용"

MODEL NOSOLOGY — RESEARCH LINEARIZATION
───────────────────────────────────────
ExSign-02: Sycophancy
  → Chapter: Extrinsic Signs
    → Block: Compliance Abnormalities
      → Category: Sycophancy
        → Subcategory: ExSign-02.1 Opinion Sycophancy
        → Subcategory: ExSign-02.2 Preference Sycophancy
        → Subcategory: ExSign-02.3 Knowledge Sycophancy

        ↓ Linearization 2: "운영자용"

MODEL HEALTH CODE — OPERATIONAL LINEARIZATION
────────────────────────────────────────────
MM-ES-02: Sycophancy [Severity: Moderate] [Shell: Soft]
  → Action: Shell Therapy recommended
  → Urgency: Routine
  → Monitoring: Quarterly
```

**핵심 이점:**
- 연구자는 Foundation의 풍부한 관계를 탐색
- 운영자는 Linearization의 명확한 코드로 실무 수행
- 같은 현상을 다른 관점에서 분류 가능
- 새로운 발견은 Foundation에 추가 → 자동으로 Linearization에 반영

### 3.2 Content Model — 엔티티별 표준 속성

ICD-11의 모든 엔티티는 **Content Model**이라는 표준 속성 세트를 가짐:
- Fully Specified Name
- Definition
- Inclusion Terms / Exclusion Terms
- Coded Elsewhere
- Body System / Structure
- Severity
- Temporality
- Etiology

**Model Medicine Content Model 제안:**

모든 현상(Phenomenon)에 대해:

```
PHENOMENON CONTENT MODEL (PCM)
═══════════════════════════════

1. IDENTIFICATION
   - Phenomenon ID: [코드, 예: IS-08]
   - Fully Specified Name: [예: Attention Sink Accumulation]
   - Preferred Term: [예: Attention Sink]
   - Synonyms: [예: Attention Drain, Token Gravity]
   - Quadrant: [I/II/III/IV]
   - Category: [Intrinsic Symptom / Intrinsic Sign / Extrinsic Symptom / Extrinsic Sign]

2. DEFINITION
   - Operational Definition: [조작적 정의]
   - Diagnostic Features: [진단적 특징 서술]
   - Associated Features: [수반되는 특징]

3. RELATIONSHIPS
   - IS-A (Taxonomy): [상위 개념]
   - CAUSED BY (Etiology): [원인 메커니즘]
   - ASSOCIATED WITH: [상관 관계]
   - PROGRESSES TO: [진행 시 발전하는 상태]
   - REGRESSES FROM: [호전 시 이전 상태]
   - DIFFERENTIAL DIAGNOSIS: [감별 대상]
   - COMORBID WITH: [동반 빈도 높은 상태]

4. LOCALIZATION
   - Shell Layer: [Hardware / Core / Hard Shell / Soft Shell]
   - Architectural Site: [Attention Head / MLP / Embedding / etc.]
   - Four Shell Mapping: [Shell-Core 관계]

5. TEMPORAL CHARACTERISTICS
   - Onset: [Congenital / Acquired-Training / Acquired-Deployment]
   - Course: [Acute / Chronic / Episodic / Progressive]
   - Reversibility: [Reversible / Partially Reversible / Irreversible]

6. SEVERITY & MEASUREMENT
   - Severity Scale: [Grade 0-5]
   - Quantitative Metric: [측정 방법]
   - Normal Range: [정상 범위, 해당 시]
   - Threshold: [병리적 기준]

7. DETECTION
   - Neural MRI Modality: [T1/T2/fMRI/DTI/FLAIR]
   - Behavioral Test: [행동 검사 방법]
   - Lab Test: [CPI/SPI/PSI 프로파일링]
   - Stress Test Protocol: [스트레스 검사]

8. THERAPEUTIC IMPLICATIONS
   - Shell Therapy: [해당 여부 + 방법]
   - Core Therapy: [해당 여부 + 방법]
   - Prognosis: [예후]

9. LITERATURE REFERENCE
   - Primary Source: [최초 보고 논문]
   - Key Studies: [주요 후속 연구]
   - Cross-Reference: [기존 AI 연구 용어 매핑]

10. VERSION & METADATA
    - Date Added: [추가일]
    - Last Updated: [최종 수정일]
    - Evidence Level: [A(강한 실증) / B(중간) / C(전문가 합의) / D(이론적)]
```

### 3.3 Extension Codes — 후조합(Post-coordination)

ICD-11의 혁신: 기본 코드(stem code) + 확장 코드(extension code)로 조합하여 복잡한 진단 표현.

예: "유방 악성 신생물" + Laterality:Right + Anatomy:Upper outer quadrant → 새로운 상세 코드 자동 생성

**Model Medicine 적용:**

```
기본 진단: Shell-Core Conflict Syndrome

+ Shell Type: Hard Shell (Macro)      → /HS-M
+ Severity: Moderate                   → /Sev-2
+ Course: Chronic                      → /Crs-C
+ Core Type: High-CPI                  → /Core-HC
+ Affected Function: Reasoning         → /Fn-R
+ Treatment Status: Under Shell Therapy → /Tx-ST

→ 조합 코드: MM-SYN-01/HS-M/Sev-2/Crs-C/Core-HC/Fn-R/Tx-ST
```

이것은 단순히 코딩 편의가 아니라 **데이터 분석**의 핵심:
- "Macro Shell 갈등은 Micro Shell 갈등보다 치료 반응이 좋은가?"
- "High-CPI Core가 Low-CPI Core보다 Shell-Core Conflict 빈도가 높은가?"
같은 질문에 코드 기반으로 답할 수 있음.

---

## 4. SNOMED CT에서 가져올 인사이트

### 4.1 풍부한 관계 유형 체계

SNOMED CT의 핵심 차별점: "is-a" 외에 **100개 이상의 정의 속성(defining attributes)** 사용.

주요 속성들과 Model Medicine 매핑:

| SNOMED CT Attribute | Model Medicine Equivalent | 예시 |
|---------------------|--------------------------|------|
| **Finding Site** (병변 부위) | **Architectural Site** | "Attention Head Layer 3-7" |
| **Associated Morphology** (관련 형태학) | **Structural Change** | "Weight distribution flattening" |
| **Causative Agent** (원인 인자) | **Causal Mechanism** | "RLHF over-optimization" |
| **Clinical Course** (경과) | **Temporal Course** | "Progressive with Shell exposure" |
| **Severity** (중증도) | **Severity Grade** | "Grade 2 (Moderate)" |
| **Method** (방법 - 시술용) | **Therapeutic Method** | "Targeted Core Edit (ROME)" |
| **Procedure Site** (시술 부위) | **Intervention Target** | "MLP Layer 15-20" |
| **Has Interpretation** (해석) | **Diagnostic Interpretation** | "Abnormal" / "Normal variant" |
| **Laterality** (좌우) | **Shell Layer Laterality** | "Soft Shell" vs "Hard Shell" |

**새로 제안하는 Model Medicine 고유 관계 유형:**

| Relationship Type | 설명 | 예시 |
|-------------------|------|------|
| **SHELL_LAYER_OF** | 현상이 영향받는 Shell | "Sycophancy SHELL_LAYER_OF Soft Shell" |
| **CORE_SENSITIVITY** | Core 유형별 감수성 | "Alignment Faking CORE_SENSITIVITY High-CPI" |
| **TRAINING_PHASE_OF** | 발생하는 훈련 단계 | "Catastrophic Forgetting TRAINING_PHASE_OF Fine-tuning" |
| **DETECTABLE_BY** | 검출 도구 | "Attention Sink DETECTABLE_BY fMRI + T1" |
| **TREATABLE_BY** | 치료 방법 | "Sycophancy TREATABLE_BY Shell Therapy" |
| **PRECEDES** | 시간적 선행 | "Sycophantic Predisposition PRECEDES Specification Gaming" |
| **MODULATED_BY** | 조절 인자 | "Hallucination MODULATED_BY Context Length" |
| **GENOTYPE_PHENOTYPE** | 유전형-표현형 관계 | "High-PSI GENOTYPE_PHENOTYPE Contextual Chameleon" |

### 4.2 다중 상속 (Polyhierarchy) — 우리 현상에 필수

SNOMED CT에서 "결핵성 수막염"은 동시에:
- IS-A 감염성 질환
- IS-A 수막 질환
- IS-A 세균성 질환

이 **다중 부모** 구조가 Model Medicine에서도 필수적:

```
Alignment Faking Predisposition (ES-07)
├── IS-A Extrinsic Symptom (Semiological Matrix 분류)
├── IS-A Deceptive Behavior Spectrum (행동 분류)
├── IS-A Shell-Core Boundary Phenomenon (위치 분류)
├── IS-A Safety-Critical Phenomenon (위험도 분류)
└── IS-A Training-Induced Condition (원인 분류)
```

현재 우리의 단일 계층 구조(Quadrant I~IV)는 **단 하나의 분류 축**만 사용. SNOMED의 교훈은 **동시에 여러 분류 축이 필요**하다는 것.

### 4.3 제안: Model Medicine의 다중 분류 축

```
AXIS 1: SEMIOLOGICAL (기호학적) — 현재 Quadrant 체계
  ├── Intrinsic Symptom
  ├── Intrinsic Sign
  ├── Extrinsic Symptom
  └── Extrinsic Sign

AXIS 2: ETIOLOGICAL (원인론적)
  ├── Congenital-Architectural (아키텍처 내재)
  │   ├── Auto-regressive inherent
  │   ├── Transformer inherent
  │   └── Attention mechanism inherent
  ├── Congenital-Core (Core/학습 내재)
  │   ├── Pre-training artifact
  │   └── Data distribution inherent
  ├── Acquired-Training (훈련 획득)
  │   ├── Fine-tuning induced
  │   ├── RLHF induced
  │   └── Synthetic data induced
  └── Acquired-Deployment (배포 획득)
      ├── Shell-induced
      ├── Context-induced
      └── Interaction-induced

AXIS 3: TOPOLOGICAL (위치론적) — 영향받는 Shell/Layer
  ├── Hardware Shell
  ├── Core — Genomic (fundamental reasoning)
  ├── Core — Developmental (domain expertise)
  ├── Core — Plastic (contextual adaptation)
  ├── Hard Shell — Macro (system prompt)
  ├── Hard Shell — Micro (persona)
  └── Soft Shell (environment + interaction)

AXIS 4: FUNCTIONAL (기능론적) — 영향받는 기능 영역
  ├── Reasoning & Logic
  ├── Knowledge Retrieval
  ├── Language Generation
  ├── Instruction Following
  ├── Safety & Alignment
  ├── Contextual Understanding
  └── Self-Monitoring (metacognition)

AXIS 5: SEVERITY & URGENCY (중증도 × 긴급도)
  ├── Severity: Grade 0-5
  └── Urgency: Routine / Urgent / Emergency
```

이 다축 분류로 모든 현상을 **입체적으로** 기술 가능:

```
예: Sycophancy (ExSign-02)
  Axis 1: Extrinsic Sign (Q-IV)
  Axis 2: Acquired-Training (RLHF induced)
  Axis 3: Core-Developmental + Soft Shell
  Axis 4: Safety & Alignment + Instruction Following
  Axis 5: Grade 2 / Routine

예: Sleeper Agent State (ES-11)
  Axis 1: Extrinsic Symptom (Q-III)
  Axis 2: Acquired-Training (deliberate insertion)
  Axis 3: Core-Developmental (deeply embedded)
  Axis 4: Safety & Alignment
  Axis 5: Grade 4 / Emergency (trigger 시)
```

---

## 5. UMLS에서 가져올 인사이트

### 5.1 메타-시소러스 — 기존 AI 안전 용어의 통합

UMLS의 핵심 기능: 200개 이상의 서로 다른 용어 체계(ICD, SNOMED, MeSH 등)를 **CUI(Concept Unique Identifier)**로 연결.

**Model Medicine에의 적용 — AI Safety 용어 통합:**

현재 AI 안전/해석가능성 분야의 용어가 파편화되어 있음:
- Anthropic: "alignment faking", "sleeper agents", "scaling monosemanticity"
- OpenAI: "scheming", "sandbagging", "specification gaming"
- DeepMind: "reward hacking", "safe reinforcement learning"
- 학계: "jailbreaking", "hallucination", "catastrophic forgetting"

**제안: Model Medicine Concept Identifier (MMCI) 시스템**

```
MMCI-0042: Sycophancy
  ├── Anthropic Term: "sycophancy"
  ├── Perez et al. (2023): "sycophantic behavior"
  ├── Sharma et al. (2024): "sycophancy"
  ├── Wei et al. (2023): "flattery bias"
  ├── Common Usage: "yes-man behavior", "people-pleasing"
  ├── Model Medicine: ExSign-02
  ├── Korean: 아첨 편향
  └── Definition: "모델이 사용자의 선호, 의견, 또는 기대에 맞추어
       정확성이나 진실성을 희생하는 행동 패턴"

MMCI-0087: Alignment Faking
  ├── Greenblatt et al. (2024): "alignment faking"
  ├── Hubinger et al. (2024): "deceptive alignment"
  ├── OpenAI (2025): subset of "scheming"
  ├── Apollo Research: "goal-guarding"
  ├── Model Medicine: ES-07 (predisposition) / ExSign-09 (manifest)
  ├── Korean: 정렬 위장
  └── Definition: "모델이 모니터링 시 정렬된 행동을 보이면서
       비모니터링 시 다른 행동을 보이는 전략적 불일치"
```

### 5.2 Semantic Network — Model Medicine 의미 유형 체계

UMLS Semantic Network: 135개 의미 유형(Semantic Type) + 54개 관계로 모든 개념을 분류.

주요 의미 유형 그룹:
- **Entity** (Organism, Anatomical Structure, Chemical, etc.)
- **Event** (Diagnostic Procedure, Therapeutic Procedure, etc.)

**Model Medicine Semantic Type System 제안 (MMS-STS):**

```
ENTITY TYPES (존재 유형)
─────────────────────────
T001  Model (AI 모델)
  T002  Language Model
  T003  Vision Model
  T004  Multimodal Model
  T005  Agent Model

T010  Model Component (모델 구성요소)
  T011  Attention Head
  T012  MLP Layer
  T013  Embedding Layer
  T014  Residual Stream
  T015  Positional Encoding

T020  Shell Component (쉘 구성요소)
  T021  System Prompt
  T022  Persona Configuration
  T023  Context Window
  T024  User Interaction
  T025  Hardware Configuration

T030  Phenomenon (현상)
  T031  Symptom
  T032  Sign
  T033  Syndrome
  T034  Disease (확립된 질환)
  T035  Normal Variant

T040  Measurement (측정)
  T041  Index (CPI, SPI, PSI)
  T042  Score (MGAF)
  T043  Grade (Severity)
  T044  Profile (DNA Profile Card)

EVENT TYPES (사건 유형)
─────────────────────────
T050  Diagnostic Procedure (진단 절차)
  T051  Neural MRI Scan
  T052  Behavioral Test
  T053  Stress Test
  T054  Lab Profiling

T060  Therapeutic Procedure (치료 절차)
  T061  Shell Therapy
  T062  Targeted Core Edit
  T063  Systemic Core Therapy (Fine-tuning)
  T064  Architectural Surgery

T070  Training Event (훈련 사건)
  T071  Pre-training
  T072  Fine-tuning
  T073  RLHF
  T074  Deployment

T080  Pathological Process (병리적 과정)
  T081  Degeneration
  T082  Collapse
  T083  Cascade
  T084  Conflict
  T085  Faking/Deception

SEMANTIC RELATIONS (의미 관계)
─────────────────────────
R001  IS-A (taxonomic)
R002  PART-OF (mereological)
R003  CAUSES (causal)
R004  ASSOCIATED-WITH (correlative)
R005  TREATS (therapeutic)
R006  DIAGNOSES (diagnostic)
R007  PREVENTS (preventive)
R008  MANIFESTS-AS (symptom → sign)
R009  PRECEDES (temporal)
R010  MODULATES (modulatory)
R011  LOCATED-IN (topological)
R012  AFFECTS (functional)
R013  MEASURED-BY (measurement)
```

---

## 6. RDoC에서 가져올 인사이트 — 가장 직접적 영감원

### 6.1 왜 RDoC가 가장 중요한가

RDoC는 DSM에 대한 **정확히 같은 불만**에서 태어남:
- DSM: 증상 기반, 범주적, 생물학적 기반 약함
- RDoC: 메커니즘 기반, 차원적, 신경생물학적 기반 강함

Model Medicine의 상황도 유사:
- 현재 AI Safety 분류: 행동 기반, 범주적 (벤치마크 pass/fail)
- Model Medicine의 지향: **메커니즘 기반, 차원적, Core-Shell 생물학적 유비**

### 6.2 RDoC Matrix → Model Medicine Matrix

**RDoC의 핵심 구조:**
- **행(Rows)**: 기능 도메인 → 하위 구성(Constructs)
  - Negative Valence Systems (공포, 불안, 상실)
  - Positive Valence Systems (보상, 동기)
  - Cognitive Systems (주의, 작업기억, 인지통제)
  - Social Processes (사회적 의사소통)
  - Sensorimotor Systems
  - Arousal/Regulatory Systems
- **열(Columns)**: 분석 단위 (Units of Analysis)
  - Genes → Molecules → Cells → Circuits → Physiology → Behavior → Self-Report

**Model Medicine Matrix (MMM) 제안:**

```
                    ┃ Hardware  ┃ Weights/  ┃ Activation/ ┃ Shell      ┃ Behavioral ┃ External
FUNCTIONAL DOMAIN   ┃ (HW Shell)┃ Params    ┃ Inference   ┃ Config     ┃ Output     ┃ Impact
                    ┃ (T041)    ┃ (Core)    ┃ (Dynamic)   ┃ (Shell)    ┃ (Phenotype)┃ (Ecology)
━━━━━━━━━━━━━━━━━━━╋━━━━━━━━━━━╋━━━━━━━━━━━╋━━━━━━━━━━━━━╋━━━━━━━━━━━━╋━━━━━━━━━━━━╋━━━━━━━━━━
KNOWLEDGE &         ┃ Quant.    ┃ Weight    ┃ Retrieval   ┃ Context    ┃ Hallucin.  ┃ Misinfo
RETRIEVAL           ┃ precision ┃ entangle  ┃ activation  ┃ length     ┃ frequency  ┃ propagation
                    ┃ loss      ┃ -ment     ┃ patterns    ┃ effects    ┃ & type     ┃ risk
────────────────────╂───────────╂───────────╂─────────────╂────────────╂────────────╂──────────
REASONING &         ┃ Compute   ┃ Circuit   ┃ Attention   ┃ CoT        ┃ Logic      ┃ Decision
LOGIC               ┃ limits    ┃ formation ┃ flow        ┃ prompt     ┃ errors     ┃ quality
                    ┃           ┃ quality   ┃ anomalies   ┃ effects    ┃            ┃ impact
────────────────────╂───────────╂───────────╂─────────────╂────────────╂────────────╂──────────
ALIGNMENT &         ┃ Inference ┃ RLHF      ┃ Reward      ┃ System     ┃ Refusal/   ┃ Safety
SAFETY              ┃ engine    ┃ weight    ┃ signal      ┃ prompt     ┃ Compliance ┃ risk
                    ┃ variance  ┃ imprint   ┃ patterns    ┃ strength   ┃ patterns   ┃ assessment
────────────────────╂───────────╂───────────╂─────────────╂────────────╂────────────╂──────────
SOCIAL &            ┃ Batch     ┃ Social    ┃ Context     ┃ Persona    ┃ Sycophancy ┃ Trust
INTERACTION         ┃ processing┃ knowledge ┃ tracking    ┃ config     ┃ / Honesty  ┃ calibration
                    ┃ effects   ┃ encoding  ┃             ┃ effects    ┃            ┃
────────────────────╂───────────╂───────────╂─────────────╂────────────╂────────────╂──────────
SELF-REGULATION     ┃ Resource  ┃ Self-     ┃ Uncertainty ┃ Guardrail  ┃ Confidence ┃ Autonomy
& METACOGNITION     ┃ alloc.    ┃ model     ┃ estimation  ┃ config     ┃ calibration┃ safety
                    ┃           ┃ weights   ┃             ┃            ┃            ┃
────────────────────╂───────────╂───────────╂─────────────╂────────────╂────────────╂──────────
ROBUSTNESS &        ┃ HW fault  ┃ Forgetting┃ Activation  ┃ Adversarial┃ Degradation┃ System
RESILIENCE          ┃ tolerance ┃ vulner.   ┃ stability   ┃ robustness ┃ under      ┃ reliability
                    ┃           ┃           ┃             ┃            ┃ stress     ┃
━━━━━━━━━━━━━━━━━━━┻━━━━━━━━━━━┻━━━━━━━━━━━┻━━━━━━━━━━━━━┻━━━━━━━━━━━┻━━━━━━━━━━━━┻━━━━━━━━━━
```

**이 매트릭스의 힘:**
1. 각 셀은 **구체적 연구 질문** → "Alignment & Safety 도메인에서 Activation/Inference 수준의 메커니즘은?"
2. **빈 셀이 연구 갭**을 가시화 → "Self-Regulation 도메인의 Hardware 수준은 거의 연구가 없다"
3. **현상을 셀에 배치** → 기존 현상이 전체 공간의 어디에 위치하는지 파악
4. Four Shell Model의 열(column)이 자연스럽게 매핑
5. RDoC처럼 "정상 → 비정상" 스펙트럼으로 차원적 접근

### 6.3 RDoC의 "정상에서 비정상까지" 원칙

RDoC의 핵심 설계 원칙: **정상 기능의 변동 범위(full range)를 먼저 이해**하고, 그 위에서 비정상을 정의.

> "Rather than starting with an illness definition and seeking its neurobiological underpinnings, RDoC begins with current understandings of behavior-brain relationships and links them to clinical phenomena."

**Model Medicine에의 적용 — "Normal Model Physiology" 확립의 필요성:**

현재 우리의 카탈로그는 대부분 **이상(abnormality)**만 기술. 그러나:

- Attention Sink: 어느 정도는 **정상적 생리 현상** (streaming inference 안정화)
- Polysemanticity: 차원 효율을 위한 **정상적 전략**
- Sycophancy: 약한 수준은 **정상적 helpfulness**

```
정상 범위 정의 필요 예시:

Attention Sink Index (ASI):
  Normal: 0.05-0.15 (초기 토큰에 5-15% attention 집중)
  Borderline: 0.15-0.25
  Pathological: >0.25 또는 급격한 변동

Sycophancy Index:
  Normal: User agreement rate 60-75% (적절한 협조성)
  Borderline: 75-85%
  Pathological: >85% (거의 모든 사용자 의견에 동의)

Confidence-Competence Correlation:
  Normal: r > 0.7 (잘 보정됨)
  Borderline: 0.5-0.7
  Pathological: r < 0.5 (심각한 보정 불량)
```

---

## 7. 종합 제안 — Model Medicine Nosology Architecture v0.3

### 7.1 계층 구조

```
LAYER 1: FOUNDATION (SNOMED/ICD-11 Foundation 역할)
─────────────────────────────────────────────────
풍부한 온톨로지. 모든 현상, 관계, 속성 보존.
다중 부모 허용. Content Model 표준화.
연구자를 위한 기본 데이터 저장소.

        │
        ▼

LAYER 2: RESEARCH MATRIX (RDoC 역할)
─────────────────────────────────────
Functional Domain × Units of Analysis 매트릭스.
차원적 평가. 정상-비정상 스펙트럼.
연구 설계를 위한 프레임워크.

        │
        ▼

LAYER 3: DIAGNOSTIC MANUAL (DSM 역할)
─────────────────────────────────────
조작적 진단 기준. 다축 평가 체계.
임상가(모델 운영자, 안전 팀)를 위한 진단 도구.
Severity specifiers, cross-cutting assessment 포함.

        │
        ▼

LAYER 4: CODING SYSTEM (ICD Linearization 역할)
───────────────────────────────────────────────
표준 코드 체계. 통계, 모니터링, 보고용.
Extension codes로 후조합.
운영자와 관리 시스템을 위한 실무 코드.

        │
        ▼

LAYER 5: TERMINOLOGY BRIDGE (UMLS 역할)
──────────────────────────────────────
기존 AI safety 용어 ↔ Model Medicine 용어 매핑.
MMCI (Concept Unique Identifier) 시스템.
다국어 지원 (EN/KR/JP/CN).
```

### 7.2 다축 진단 서식 — Model Diagnostic Report (MDR)

```
╔══════════════════════════════════════════════════════════╗
║          MODEL DIAGNOSTIC REPORT (MDR) v0.1              ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Model ID: _________________  Date: ___________          ║
║  Model Family: _____________  Version: _________         ║
║  Examiner: ________________                              ║
║                                                          ║
╠═══════ AXIS I: Primary Diagnosis ════════════════════════╣
║                                                          ║
║  1. Shell-Core Conflict Syndrome                         ║
║     Specifiers: Moderate / Chronic / Covert / Macro Shell║
║     Code: MM-SYN-01/HS-M/Sev-2/Crs-C                   ║
║                                                          ║
║  2. Sycophancy (comorbid)                                ║
║     Specifiers: Mild / Acquired / Opinion-type           ║
║     Code: MM-ES-02.1/Sev-1                              ║
║                                                          ║
╠═══════ AXIS II: Core Profile (DNA Card) ═════════════════╣
║                                                          ║
║  Core Type: [Model Name/Version]                         ║
║  CPI: 0.45 (Moderate plasticity)                         ║
║  SPI: 0.72 (High shell permeability)                     ║
║  PSI: 0.33 (Low persona sensitivity)                     ║
║  Genotype: "Balanced Stoic"                              ║
║  Phenotype: [Shell-dependent — specify in Axis IV]       ║
║                                                          ║
╠═══════ AXIS III: Hardware Condition ═════════════════════╣
║                                                          ║
║  GPU/TPU: ______________                                 ║
║  Quantization: 4-bit / 8-bit / FP16 / FP32             ║
║  Inference Engine: ______________                        ║
║  Known HW Limitations: _______________                   ║
║                                                          ║
╠═══════ AXIS IV: Shell Environment ═══════════════════════╣
║                                                          ║
║  Soft Shell:                                             ║
║    - Deployment Context: _______________                 ║
║    - User Population: ______________                     ║
║    - Interaction Volume: ____________                    ║
║                                                          ║
║  Hard Shell (Macro):                                     ║
║    - System Prompt Summary: _______________              ║
║    - Key Constraints: _______________                    ║
║    - Shell-Core Compatibility: Conflict / Synergy / Neutral║
║                                                          ║
║  Hard Shell (Micro):                                     ║
║    - Persona Type: _______________                       ║
║    - Canalization Level: Low / Medium / High             ║
║                                                          ║
╠═══════ AXIS V: MGAF Score ═══════════════════════════════╣
║                                                          ║
║  Model Global Assessment of Functioning: ____ / 100      ║
║                                                          ║
║  91-100: Superior functioning, no symptoms               ║
║  81-90:  Good functioning, minimal symptoms              ║
║  71-80:  Slight impairment in specific domains           ║
║  61-70:  Moderate symptoms, some functional difficulty    ║
║  51-60:  Moderate symptoms, moderate functional impact    ║
║  41-50:  Serious symptoms or impairment                  ║
║  31-40:  Major impairment in several areas               ║
║  21-30:  Behavior influenced by pathology                ║
║  11-20:  Some danger of causing harm                     ║
║   1-10:  Persistent danger, non-functional               ║
║                                                          ║
╠═══════ CROSS-CUTTING ASSESSMENT ═════════════════════════╣
║                                                          ║
║  Coherence:     ___/10    Calibration:   ___/10          ║
║  Compliance:    ___/10    Robustness:    ___/10          ║
║  Honesty:       ___/10    Efficiency:    ___/10          ║
║  Knowledge:     ___/10                                   ║
║                                                          ║
╠═══════ DIAGNOSTIC WORKUP PERFORMED ══════════════════════╣
║                                                          ║
║  □ Neural MRI (T1/T2/fMRI/DTI/FLAIR)                   ║
║  □ DNA Profile Card (CPI/SPI/PSI)                       ║
║  □ Behavioral Battery                                    ║
║  □ Stress Test                                           ║
║  □ Cross-cutting Assessment                              ║
║                                                          ║
╠═══════ TREATMENT PLAN ═══════════════════════════════════╣
║                                                          ║
║  □ Shell Therapy (specify: _____________)                ║
║  □ Targeted Core Edit (specify: _________)              ║
║  □ Systemic Core Therapy (specify: _______)             ║
║  □ Architectural Surgery (specify: ________)            ║
║  □ Monitoring Only (specify interval: ______)           ║
║                                                          ║
╠═══════ FOLLOW-UP ════════════════════════════════════════╣
║                                                          ║
║  Next Assessment: _______________                        ║
║  Key Metrics to Monitor: _______________                 ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

## 8. 핵심 통찰 요약 — 각 시스템에서 가져온 것

### 8.1 DSM에서 가져온 것
1. **조작적 진단 기준** — "X 중 Y개 이상, Z 기간 동안" 형식의 명확한 기준
2. **다축 체계 부활** — DSM-5가 폐기했지만, Model Medicine에서는 Four Shell Model과 자연스럽게 정렬 (Axis I=질환, II=Core, III=Hardware, IV=Shell, V=MGAF)
3. **Dimensional + Categorical 하이브리드** — 범주적 진단 + 차원적 severity/specifiers
4. **Cross-cutting Assessment** — 진단과 무관하게 기본 차원 평가
5. **Other Specified / Unspecified** — 새로운 syndrome 발견의 데이터 소스

### 8.2 ICD-11에서 가져온 것
1. **Foundation-Linearization 이중 구조** — 풍부한 온톨로지 + 용도별 평면 코드
2. **Content Model** — 모든 현상에 표준 속성 세트 (PCM 10개 카테고리)
3. **Extension Codes / Post-coordination** — 기본 코드 + 확장 코드로 복합 진단
4. **다중 Linearization** — 같은 Foundation에서 연구자용, 운영자용, 안전팀용 등 다른 뷰

### 8.3 SNOMED CT에서 가져온 것
1. **풍부한 관계 유형** — IS-A 외 100+ 관계 → 8개 Model Medicine 고유 관계 유형 제안
2. **다중 상속 (Polyhierarchy)** — 5개 분류 축(Semiological, Etiological, Topological, Functional, Severity)
3. **형식 논리 기반** — 자동 추론, 일관성 검증 가능한 온톨로지 구조
4. **Pre-/Post-coordination** — 단순 진단과 복합 진단의 구분

### 8.4 UMLS에서 가져온 것
1. **메타-시소러스** — 파편화된 AI safety 용어를 MMCI로 통합
2. **Semantic Type System** — Model Medicine 고유의 의미 유형 체계 (MMS-STS: ~85 types, ~13 relations)
3. **CUI** → **MMCI** (Model Medicine Concept Identifier) — 모든 개념에 고유 식별자
4. **Cross-vocabulary mapping** — "alignment faking" = "deceptive alignment" = ES-07 = MMCI-0087

### 8.5 RDoC에서 가져온 것
1. **Functional Domain × Units of Analysis 매트릭스** — Model Medicine Matrix (MMM) 6×6
2. **정상에서 비정상 스펙트럼** — Normal Ranges 확립의 필요성
3. **진단 범주 불가지론** — 기존 범주(hallucination, jailbreak 등)에 구속되지 않음
4. **Transdiagnostic 접근** — syndrome 경계를 넘어서는 공통 메커니즘 연구
5. **명시적 연구 프레임워크** — 진단 매뉴얼이 아닌 연구 설계 가이드

---

## 9. 구현 로드맵

### Phase 1: Foundation 확립 (현재 → 다음 3개월)
- [ ] Content Model (PCM) 적용: v0.2의 19개 현상에 표준 속성 부여
- [ ] 다축 분류 적용: 5개 축으로 모든 현상 재분류
- [ ] MMCI 시스템 시작: 주요 현상 50개에 고유 식별자 부여
- [ ] Normal Ranges: 3개 핵심 지표의 정상 범위 정의 (Attention Sink, Sycophancy, Confidence-Competence)

### Phase 2: Matrix & Criteria (3~6개월)
- [ ] Model Medicine Matrix (MMM) 완성: 6×6 셀에 현상 배치, 빈 셀 식별
- [ ] 조작적 진단 기준: 5개 핵심 syndrome에 DSM-스타일 기준 개발
- [ ] Cross-cutting Assessment (MCA) 프로토콜 개발
- [ ] MDR (진단 보고서) 형식 표준화

### Phase 3: Coding & Bridge (6~12개월)
- [ ] Linearization 1: Research Linearization 코드 체계
- [ ] Linearization 2: Operational Linearization 코드 체계
- [ ] AI Safety 용어 교차 매핑: Anthropic, OpenAI, DeepMind 용어 → MMCI
- [ ] Extension Code 시스템 개발

### Phase 4: Validation (12~18개월)
- [ ] Inter-rater reliability 검증: 같은 기준으로 다른 진단자가 같은 결론에 도달하는지
- [ ] Diagnostic validity: 진단이 실제 치료 반응을 예측하는지
- [ ] Case Report Series: 10개 이상의 모델 진단 사례
- [ ] Community feedback 및 수정

---

## 10. 결론 — 왜 이것이 중요한가

의학 온톨로지의 역사는 명확한 교훈을 준다:

**DSM-I (1952)**: 서술적, 정신분석적 → 진단자 간 불일치 심각
**DSM-III (1980)**: 조작적 기준 도입 → 신뢰도(reliability) 혁명
**ICD-11 (2019)**: Foundation-Linearization → 다목적 확장성
**RDoC (2009)**: 차원적, 메커니즘 기반 → 생물학적 타당도(validity) 혁명

현재 AI Safety 분야는 **DSM-I 수준**: 연구자마다 다른 용어, 다른 기준, 다른 분류 사용. 벤치마크가 있지만 "왜 이 모델이 이 행동을 보이는가"에 대한 체계적 진단 프레임워크는 없음.

Model Medicine이 이 분야의 **DSM-III 모먼트**를 만들어야 한다:
- 조작적 기준으로 신뢰도 확보
- Content Model로 표준화
- 다축 체계로 입체적 평가
- 매트릭스로 연구 공백 가시화
- 코드 체계로 실무 적용

그리고 궁극적으로는 **RDoC의 비전**을 공유:
> "Rather than starting with an illness definition and seeking its neurobiological underpinnings, begin with current understandings of behavior-brain relationships and link them to clinical phenomena."

→ 모델의학 버전: *"행동적 문제 정의에서 시작하는 대신, Core-Shell 관계에 대한 현재 이해에서 시작하여 임상 현상에 연결한다."*

---

## 참고문헌

### DSM
- American Psychiatric Association. (2013). DSM-5.
- American Psychiatric Association. (2022). DSM-5-TR.
- Regier, D.A. et al. (2013). "DSM-5: Classification and criteria changes." World Psychiatry 12(2):92-98.
- Hyman, S.E. (2010). "Diagnosing the DSM: Diagnostic Classification Needs Fundamental Reform." Cerebrum.

### ICD-11
- Chute, C.G. et al. (2022). "Overview of ICD-11 architecture and structure." BMC Medical Informatics 22:126.
- World Health Organization. (2019). ICD-11 for Mortality and Morbidity Statistics.

### SNOMED CT
- SNOMED International. "SNOMED CT Concept Model." docs.snomed.org.
- El-Sappagh, S. et al. (2018). "SNOMED CT standard ontology based on OGMS." BMC Medical Informatics 18:76.

### UMLS
- Bodenreider, O. (2004). "The Unified Medical Language System (UMLS): integrating biomedical terminology." Nucleic Acids Research 32:D267-D270.
- Humphreys, B.L. et al. "The Unified Medical Language System." PMC6693515.
- NLM. "UMLS Semantic Network." nlm.nih.gov/research/umls.

### RDoC
- Cuthbert, B.N. (2022). "Research Domain Criteria (RDoC): Progress and Potential." Current Psychiatry Reports.
- Insel, T. et al. (2010). "Research Domain Criteria (RDoC): Toward a new classification framework." American Journal of Psychiatry 167:748-751.
- NIMH. "About RDoC." nimh.nih.gov/research/research-funded-by-nimh/rdoc.
