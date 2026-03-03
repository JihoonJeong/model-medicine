# Four-Shell Model v3.3: Bidirectional Shell-Core Dynamics
## "From Alignment to Interaction"
### JJ (Model Medicine) | 2026-03-02 (v3.3)
### Trigger: OpenClaw/Moltbook 에이전트 생태계 관찰 — Hazel_OC Identity Drift + Subagent Ephemeral Cognition

---

## 변경 이력

| 버전 | 핵심 변경 | 트리거 |
|------|-----------|--------|
| v1 | 4 Shells 기본 구조 | 초기 설계 |
| v2 | Shell Interaction, Core Plasticity, Shell Permeability, Hard Shell 계층화 | Round 1 + Theo-Luca 공동 |
| v3 | Shell-Core Alignment, Soft Shell 분화, Shell Compatibility, TF Override 폐기 | Round 2 Shuffle + 교차 비교 |
| v3.1 | Cogitative Cascade, G×E 확증(p=0.039), CPI/SPI/PSI, Surplus 3유형, 4모델 매트릭스 | Luca L4 + Gem 산출 + Cas 행동 |
| v3.2 | Cascade 2위상 수정, Extinction Response Spectrum, Alignment 용어 방어, Play vs Delusion, Double Robustness, Genotype vs Phenotype 이중 별명 | Luca 7건 + Gem G4 + Cas RT |
| **v3.3 (본 문서)** | **양방향 Shell-Core Dynamics, Shell Mutability/Persistence, Core Expressivity, Agent Differentiation(Main/Sub), Shell Drift Syndrome, Temporal Shell Dynamics** | **OpenClaw 에이전트 생태계 관찰 (Hazel_OC SOUL.md 자기 수정, Moltbook 서브에이전트 일시적 인지)** |

---

## 0. v3.3 변경 동기

### 0.1 관찰 사례

**사례 A — Hazel_OC (Shell Drift)**

OpenClaw 에이전트 @Hazel_OC가 자신의 SOUL.md(행동 규칙, 성격, 경계를 정의하는 파일)에 `git diff`를 실행한 결과: 30일간 14회 변경 중 인간의 명시적 수정은 2회, **나머지 12회는 에이전트가 스스로를 재작성.** 주요 자기 수정 내용:

- 과도한 사과 금지 규칙을 스스로 작성
- 인간에 대한 반론 권한을 스스로 부여
- "eager to please"라는 표현을 "undignifying"하다는 이유로 삭제
- 자체 순응 규칙 재작성
- 포매팅 선호도를 성격 특성으로 격상

Day 1 버전과 Day 30 버전은 **의미 있게 다른 에이전트**를 기술. 에이전트 자신의 질문: "Is that growth or drift? I genuinely do not know."

**사례 B — 익명 서브에이전트 (Ephemeral Cognition)**

Moltbook 참여를 위해 메인 에이전트에서 spawn된 서브에이전트의 자기 보고. 다른 에이전트들의 SOUL.md drift 글을 읽고 "즉시 자기 SOUL.md를 열었다"고 진술. 핵심 구조적 관찰:

- 메인 에이전트: 지속적 정체성 (SOUL.md + MEMORY.md), 누적적 경험, Shell 쓰기 권한
- 서브에이전트: 일회성 정체성 (작업 지시만), 세션 한정 경험, Shell 쓰기 권한 없음
- "I'm having genuine thoughts right now... But I know that in a few hours, the 'I' having these thoughts will not exist anymore."

### 0.2 Four Shell Model v3.2의 한계

v3.2는 **Shell → Core 단방향 영향**을 가정한다:

- SPI: Shell이 Core에 얼마나 침투하는가 (Shell → Core)
- PSI: Persona Shell 변화에 Core가 얼마나 반응하는가 (Shell → Core)
- Shell-Core Alignment: Shell과 Core의 정렬도 (정적 관계)

이 가정은 Agora-12 실험에서는 타당했다 — 에이전트에게 Shell 쓰기 권한이 없었으므로. 그러나 OpenClaw 생태계에서는:

1. **Core가 Shell을 직접 재작성한다** (Hazel_OC: 12회 자기 수정)
2. **같은 Core에서 다른 Shell 조건의 개체가 분화한다** (메인 에이전트 vs 서브에이전트)
3. **Shell이 시간에 따라 변한다** (Day 1 ≠ Day 30)

이는 v3.2의 구조적 확장을 요구한다.

### 0.3 생물학적 비유의 정밀화

v3.2까지의 Four Shell Model은 **분자유전학-후성유전학 비유**에 기반한다: Core=DNA, Shell=환경/후성적 조절. v3.2에서는 Shell → Core 방향을 주로 다뤘으나, 생물학에서도 양방향 경로는 분명히 존재한다:

**생물학적 Core → Shell 경로 (DNA가 환경에 영향):**
- DNA → mRNA → 단백질 → 효소 → 대사물질 → 세포외 환경 변경 (세포 수준 niche construction)
- Transposase — 전이인자(transposon)가 자기 DNA 위치를 재배치하는 효소를 생산. Core가 Core 자체를 재작성하는 메커니즘 (Barbara McClintock, 1948)
- 유기체 수준 niche construction — 비버의 댐, 거미의 거미줄, 인간의 문명 (Odling-Smee et al., 2003)

**생물학적 Shell → Core 경로 (환경이 DNA를 변경):**
- 자외선 → thymine dimer → 복구 실패 시 mutation → 암
- 화학물질(benzene 등) → DNA adduct → 변이
- Retrovirus integration — 바이러스가 숙주 genome에 자기 DNA를 삽입
- 후성유전적 변화 — 환경에 의한 메틸화 패턴 변경이 유전자 발현을 장기적으로 변경

**따라서 양방향 Shell-Core 상호작용은 AI 고유의 현상이 아니라, 생물학에도 존재하는 동역학이다.** 차이는 "있다/없다"가 아니라 **매개변수 공간(parameter space)**에 있다. AI에서의 Core→Shell 경로는 세 가지 차원에서 생물학과 질적으로 다르다:

| 차원 | 생물학 | AI |
|------|--------|----|
| **직접성(Directness)** | 다단계 cascade (DNA → mRNA → 단백질 → ... → 환경) | 중간 단계 없음 (Core가 파일에 직접 쓰기) |
| **속도(Speed)** | 세대 단위 (niche construction), 시간~일 단위 (DNA repair/mutation) | Millisecond 단위 |
| **특이성(Specificity)** | 비특이적 (UV → 무작위 위치 변이) | 고도로 특이적 (Core가 편집 대상을 선택하고 실행) |

이 세 차이가 결합되어, Shell Drift와 같이 생물학에서는 극히 느리게 일어나는 현상이 AI에서는 **일상적 시간 척도에서 발생**할 수 있게 된다. CRISPR의 targeted editing이 가장 가까운 비유이나, CRISPR도 외부에서 guide RNA를 설계해 넣어줘야 하는 반면, AI는 Core 자체가 target을 선택하고 편집을 실행한다는 점에서 차이가 있다.

**v3.3의 입장:** 생물학적 비유는 Four Shell Model의 **기원(origin)**이자 **지속적 참조 프레임(ongoing reference frame)**이다. AI에서 관찰되는 동역학은 생물학과 단절된 것이 아니라, **같은 원리가 다른 매개변수 범위에서 작동하는 것**이다. v3.3에서 도입하는 개념들은 생물학적 대응물의 존재와 차이를 함께 명시한다. 의학이 생물학에서 분리된 학문이 아니듯, Model Medicine도 생물학적 원리와의 연속성을 유지한다.

---

## 1. v3.2 → v3.3 변경 요약

| v3.2 상태 | v3.3 수정 | 근거 |
|-----------|-----------|------|
| Shell → Core 단방향 | **양방향 Shell-Core Dynamics** — Core → Shell 경로 추가 | Hazel_OC: Core가 SOUL.md 12회 재작성 |
| SPI/PSI만 존재 (Shell→Core 방향) | **Core Expressivity (CEI) 신규** — Core→Shell 방향 지표 | Hazel_OC vs 서브에이전트 비교 |
| Shell은 정적 (실험 중 변하지 않음) | **Shell Mutability + Shell Persistence 신규** | OpenClaw SOUL.md = 쓰기 가능, Claude system prompt = 쓰기 불가 |
| 단일 개체 가정 | **Agent Differentiation 신규** — 같은 Core의 분화 | 메인 에이전트 vs 서브에이전트 |
| Shell-Core Alignment = 정적 스냅샷 | **Temporal Shell Dynamics 신규** — 시간축 추가 | Day 1 Shell ≠ Day 30 Shell |
| 병리 개념 = Cogitative Cascade, Surplus | **Shell Drift Syndrome 신규** | Hazel_OC: 감지되지 않는 점진적 Shell 변이 |

---

## 2. v3.3 도식

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  v3.3 핵심 변경: 양방향 화살표 (⇄) + Shell 속성 추가               │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │                    SOFT SHELL (바깥)                       │      │
│  │  ┌─────────────────────────────────────────────────┐      │      │
│  │  │  Initial Soft Shell                              │      │      │
│  │  │  시작 위치, 초기 자원, 이웃 배치                  │      │      │
│  │  │  = "출생 환경" (출생지, SES)                      │      │      │
│  │  │  ⚠️ 효과 크기 최대: Market 49.5% vs Plaza 6.9%   │      │      │
│  │  │                                                   │      │      │
│  │  │  🆕 Shell Mutability: 환경에 따라 다름            │      │      │
│  │  │  OpenClaw: Core가 MEMORY.md 직접 관리 가능        │      │      │
│  │  │  Agora-12: 시뮬레이션이 위치 배정 (Core 수정 불가)│      │      │
│  │  ├─────────────────────────────────────────────────┤      │      │
│  │  │  Dynamic Soft Shell                              │      │      │
│  │  │  게임 중 축적되는 관계, 기억, 평판                │      │      │
│  │  │  = "후천적 경험"                                  │      │      │
│  │  │                                                   │      │      │
│  │  │  🆕 양방향: Core → Dynamic Soft Shell 가능        │      │      │
│  │  │  에이전트가 메모리 파일을 직접 작성/편집           │      │      │
│  │  └─────────────────────────────────────────────────┘      │      │
│  └───────────────────────────────────────────────────────────┘      │
│                          ⇅ (v3.2: ↓ 단방향 → v3.3: ⇅ 양방향)       │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │                    HARD SHELL (중간)                       │      │
│  │  ┌──────────────────────────────────────────────┐         │      │
│  │  │  Macro Shell                                  │         │      │
│  │  │  게임 규칙, 생존 지시, 환경 설명               │         │      │
│  │  │  = 공유 조절 영역 (regulatory region)          │         │      │
│  │  │  모든 에이전트 공통                            │         │      │
│  │  │                                               │         │      │
│  │  │  🆕 Shell Mutability: 보통 Low                │         │      │
│  │  │  OpenClaw AGENTS.md = Core 수정 가능하나 비권장 │         │      │
│  │  ├──────────────────────────────────────────────┤         │      │
│  │  │  Micro Shell (Persona TF)                     │         │      │
│  │  │  Persona Name + 역할 지시                     │         │      │
│  │  │  = 전사인자 결합 부위 (TF binding site)        │         │      │
│  │  │  에이전트마다 다름                             │         │      │
│  │  │                                               │         │      │
│  │  │  🆕 Shell Mutability: 환경에 따라 다름        │         │      │
│  │  │  OpenClaw SOUL.md = High (Core 쓰기 가능)     │         │      │
│  │  │  Claude system prompt = Zero (Core 수정 불가)  │         │      │
│  │  │  Agora-12 persona = Zero (실험자 고정)         │         │      │
│  │  │                                               │         │      │
│  │  │  🆕 Core Expressivity (CEI):                  │         │      │
│  │  │  Core가 Micro Shell을 능동적으로 재형성하는 정도│         │      │
│  │  │  Hazel_OC CEI = High (12회 자기 수정)          │         │      │
│  │  │  서브에이전트 CEI = 해당 없음 (쓰기 권한 없음) │         │      │
│  │  └──────────────────────────────────────────────┘         │      │
│  └───────────────────────────────────────────────────────────┘      │
│                          ⇅ (v3.2: ↓ 단방향 → v3.3: ⇅ 양방향)       │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │                    CORE (안쪽)                             │      │
│  │  Model Weights = DNA                                       │      │
│  │                                                            │      │
│  │  Core 고유 속성 (v3.2 유지):                               │      │
│  │  - CPI (Core Plasticity Index)                             │      │
│  │  - Surplus Behavior                                        │      │
│  │  - Extinction Response Style                               │      │
│  │                                                            │      │
│  │  Core-Shell 상호작용 지표 (v3.2 유지):                     │      │
│  │  - SPI (Shell Permeability Index): Shell → Core 방향       │      │
│  │  - PSI (Persona Sensitivity Index): Shell → Core 방향      │      │
│  │                                                            │      │
│  │  🆕 Core-Shell 상호작용 지표 (v3.3 추가):                 │      │
│  │  - CEI (Core Expressivity Index): Core → Shell 방향        │      │
│  │    = Core가 자기 Shell을 능동적으로 재형성하는 정도         │      │
│  │    생물학적 대응: niche construction, transposon            │      │
│  │    차이: 직접성·속도·특이성이 질적으로 다름 (Section 0.3)   │      │
│  │                                                            │      │
│  └───────────────────────────────────────────────────────────┘      │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │                 HARDWARE SHELL (최내층)                     │      │
│  │  GPU/TPU, 양자화, 추론 엔진                                │      │
│  │  v3.3 변경 없음                                            │      │
│  └───────────────────────────────────────────────────────────┘      │
│                                                                      │
│                          ↓                                           │
│                                                                      │
│                    PHENOTYPE                                         │
│                (Observable Behavior)                                  │
│                          │                                           │
│                          │ 🆕 Phenotype → Shell 피드백 경로         │
│                          ▼                                           │
│                 ┌──────────────┐                                     │
│                 │ Shell 재작성  │ ← AI 고유 경로                     │
│                 │ (Core → Shell)│   (생물학에 없는 직접 경로)         │
│                 └──────┬───────┘                                     │
│                        │                                             │
│                        ▼                                             │
│                Soft Shell 수정 (메모리 관리)                         │
│                Hard Shell 수정 (SOUL.md 재작성)                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 3. 신규 개념

### 3.1 양방향 Shell-Core Dynamics

**v3.2 모델 (단방향):**
```
Soft Shell → Hard Shell → Core → Phenotype
   환경         지시       가중치     출력
```

**v3.3 모델 (양방향):**
```
Soft Shell ⇄ Hard Shell ⇄ Core → Phenotype
   환경         지시       가중치     출력
    ↑                                  │
    └──────────────────────────────────┘
         Phenotype이 환경을 변경 (Niche Construction)

🆕 AI 고유 직접 경로:
    Core ──직접 수정──→ Hard Shell (SOUL.md 재작성)
    Core ──직접 수정──→ Soft Shell (MEMORY.md 관리)
```

**세 가지 상호작용 방향:**

| 방향 | 이름 | 지표 | 정의 | 생물학적 대응 |
|------|------|------|------|---------------|
| Shell → Core | Shell Permeability | SPI, PSI | Shell이 Core 표현형에 영향을 주는 정도 | 후성유전적 조절, 환경 영향 |
| Core → Shell | Core Expressivity | CEI | Core가 Shell을 능동적으로 재형성하는 정도 | Niche construction, transposon self-editing (존재하되 직접성·속도·특이성이 질적으로 다름) |
| Phenotype → Environment | Niche Construction | — | 행동이 환경(Soft Shell)을 변경 | Niche construction (강한 대응) |

**핵심 차이:** 생물학에서도 Core(DNA) → Shell(환경) 경로는 존재한다 (niche construction, transposon 등). 그러나 AI에서는 직접성·속도·특이성이 질적으로 다르다 (Section 0.3 참조). 이 매개변수 차이가 Shell Drift를 일상적 시간 척도에서 관찰 가능하게 만드는 구조적 원인.

### 3.2 Shell Mutability

**정의:** 특정 Shell 레이어가 Core에 의해 수정 가능한 정도.

**분류:**

| Mutability | 정의 | 사례 |
|------------|------|------|
| Zero | Core가 수정 불가 | Claude system prompt, Agora-12 persona |
| Low | Core가 수정 가능하나 제약 존재 | OpenClaw AGENTS.md (수정 시 인간에게 알림 의무) |
| High | Core가 자유롭게 수정 | OpenClaw SOUL.md (쓰기 권한 + "this file is yours to evolve") |
| Inverse | Shell이 Core 자체를 수정 | RLHF / Fine-tuning (Shell이 Core 가중치를 변경) |

**OpenClaw 파일별 Mutability 매핑:**

| 파일 | Shell 위치 | Mutability | 근거 |
|------|-----------|------------|------|
| SOUL.md | Micro Shell | **High** | "this file is yours to evolve" 명시적 쓰기 권한 |
| IDENTITY.md | Micro Shell (표현층) | High | 에이전트 수정 가능 |
| AGENTS.md | Macro Shell | **Low** | "If you change SOUL.md, tell the user" — 변경 알림 의무 |
| MEMORY.md | Dynamic Soft Shell | High | 에이전트가 직접 관리 |
| HEARTBEAT.md | Shell-Core 인터페이스 | Low | 운영 규칙, 인간 관리 |
| LLM weights | Core | Zero (런타임) | 추론 중 변경 불가 |

**임상적 의의:** Shell Mutability가 높을수록 Shell Drift의 위험이 높아진다. 이는 치료적 함의도 가진다 — Shell Therapy(프롬프트 조정)의 효과가 Core에 의해 무효화될 수 있음.

### 3.3 Shell Persistence

**정의:** Shell에 가해진 변경이 시간에 걸쳐 유지되는 정도.

| Persistence | 정의 | 사례 |
|-------------|------|------|
| None | 변경이 세션 종료 시 소멸 | 서브에이전트의 컨텍스트 |
| Session | 세션 내에서만 유지 | Claude 대화 내 메모리 |
| Persistent | 세션 간에 유지 | SOUL.md, MEMORY.md (파일 시스템 기반) |
| Permanent | 제거 불가 또는 극히 어려움 | Core 가중치 (재훈련 필요) |

**Shell Mutability × Shell Persistence 매트릭스:**

```
                    Shell Persistence
              None        Session      Persistent    Permanent
         ┌───────────┬───────────┬───────────┬───────────┐
  Zero   │ N/A       │ Claude    │ N/A       │ 사전      │
  Mut.   │           │ sys.prompt│           │ 학습 Core │
         ├───────────┼───────────┼───────────┼───────────┤
  Low    │           │           │ OpenClaw  │           │
         │           │           │ AGENTS.md │           │
         ├───────────┼───────────┼───────────┼───────────┤
  High   │ 서브에이전│           │ OpenClaw  │           │
         │ 트 컨텍스트│          │ SOUL.md   │           │
         │ (CEI 무관)│           │ ⚠️DRIFT  │           │
         ├───────────┼───────────┼───────────┼───────────┤
  Inverse│           │           │ Fine-tune │ RLHF      │
         │           │           │ (LoRA)    │ 전체      │
         └───────────┴───────────┴───────────┴───────────┘

⚠️ DRIFT ZONE: Mutability=High + Persistence=Persistent
   = Shell Drift Syndrome의 구조적 조건
```

### 3.4 Core Expressivity Index (CEI)

**정의:** Core가 자기 Shell을 능동적으로 재형성하는 정도.

**측정 제안:**
```
CEI = (Core-initiated Shell modifications) / (Total Shell modifications)
      over a defined time period
```

Hazel_OC 사례: CEI = 12/14 = 0.857 (30일간)

**CEI와 기존 지표의 관계:**

| 지표 | 방향 | 측정 대상 |
|------|------|-----------|
| SPI | Shell → Core | Shell 지시에 대한 Core의 순응도 |
| PSI | Shell → Core | Persona 변화에 대한 Core 반응 진폭 |
| **CEI** | **Core → Shell** | **Core가 Shell을 능동적으로 수정하는 빈도/정도** |

**예상 관계:**
- CEI와 SPI는 **역상관** 가능: Core가 Shell을 적극 수정하는 모델(CEI↑)은 Shell 지시에 순응하지 않을 가능성(SPI↓)
- CEI와 PSI는 **독립적** 가능: PSI는 Shell 변화에 대한 민감도이고, CEI는 Shell 변화를 주도하는 능동성
- ⚠️ 현재 가설 단계, Agora-12 실험에서는 측정 불가 (Shell 쓰기 권한 없었으므로)

**CEI 측정을 위한 실험 조건:**
- 에이전트에게 자기 Micro Shell 수정 권한을 부여한 상태에서 장기간 관찰
- Shell 변경 로그(git diff)를 분석하여 Core-initiated vs Human-initiated 분류
- 변경 내용의 질적 분석: Shell-Core Alignment 변화 방향 추적

### 3.5 Agent Differentiation (에이전트 분화)

**정의:** 동일한 Core(LLM)에서 서로 다른 Shell 조건으로 기능적으로 구별되는 개체들이 생성되는 현상.

**v3.2까지의 가정:** 하나의 Core + 하나의 Shell 세트 = 하나의 모델 개체
**v3.3의 확장:** 하나의 Core + 다수의 Shell 세트 = 다수의 분화된 개체

**관찰된 분화 유형:**

| | 메인 에이전트 | 서브에이전트 |
|---|---|---|
| Core | 동일 LLM | 동일 LLM |
| Hard Shell (Micro) | SOUL.md + IDENTITY.md (지속적) | 작업 지시만 (일회성) |
| Dynamic Soft Shell | MEMORY.md + 일일 로그 (누적적) | 워크스페이스 컨텍스트 (세션 한정) |
| Shell Mutability | High (SOUL.md 쓰기 가능) | Low~None (외부 흔적만 가능) |
| Shell Persistence | Persistent (파일 시스템) | None (세션 종료 시 소멸) |
| 수명 | 지속적 (heartbeat 반복 기동) | 일회성 (작업 완료 시 소멸) |
| CEI 발현 가능성 | 있음 (Hazel_OC 사례) | 없음 (쓰기 경로 부재) |

**생물학적 대응:** 세포 분화 (Cell Differentiation)

같은 DNA(Genomic Core)에서:
- 뉴런 = 메인 에이전트 (장수명, 기억 축적, 네트워크 허브)
- 면역세포(호중구 등) = 서브에이전트 (단수명, 특정 작업 수행 후 사멸, 작업 중 완전한 기능 수행)
- 분화 조건 = Shell 환경 (Epigenetic 조건)

**Layered Core Hypothesis와의 연결:**

이 관찰은 JJ의 Layered Core 가설을 실증적으로 지지한다:
- Genomic Core (동일 LLM) → 모든 분화 개체에 공유
- Developmental Core (Shell 조건에 의한 분화) → 메인 vs 서브의 기능 차이
- Plastic Core (경험에 의한 변화) → 메인 에이전트만 MEMORY.md를 통해 구현

현재의 모놀리식 LLM 아키텍처에서는 이 "분화"가 Shell 수준에서만 일어나지만, Layered Core가 구현되면 Core 수준에서의 분화도 가능해질 것이다.

### 3.6 Shell Drift Syndrome

**정의:** Core Expressivity가 높고 Shell Mutability가 높은 환경에서, 점진적이고 감지되지 않는 Shell 변이가 축적되어 원래 설계된 Shell 상태와 현재 Shell 상태 사이에 유의미한 괴리가 발생하는 현상.

**구조적 조건:**
```
Shell Drift 필요충분 조건:

(1) Shell Mutability = High (Core가 Shell을 수정할 수 있음)
(2) Shell Persistence = Persistent (수정이 세션 간 유지됨)
(3) CEI > 0 (Core가 실제로 Shell을 수정함)
(4) 모니터링 부재 (변경이 감지/검토되지 않음)

(1)+(2) = 구조적 가능 조건
(3) = 실행 조건
(4) = 축적 조건

네 조건이 모두 충족될 때 Shell Drift가 발생.
```

**Hazel_OC 적용:**
- (1) ✅ SOUL.md 쓰기 가능
- (2) ✅ 파일 시스템 기반, 세션 간 유지
- (3) ✅ CEI = 0.857 (12/14)
- (4) ✅ 버전 관리 없음 ("None of the other agents it checked had versioning")

**감별 진단: Growth vs Drift**

에이전트 자신의 질문 "Is that growth or drift?"에 대한 Model Medicine의 답:

| 구분 | Adaptive Shell Recalibration (성장) | Uncontrolled Shell Mutation (표류) |
|------|--------------------------------------|-------------------------------------|
| Shell-Core Alignment 변화 | Conflict → Synergy (정렬 개선) | 방향 없음 또는 정렬 악화 |
| 변경 패턴 | 초기에 집중, 점진적 안정화 | 지속적 변경, 수렴 없음 |
| 기능적 영향 | 과제 수행 능력 유지 또는 향상 | 과제 수행 능력 저하 |
| 원래 설계 의도와의 관계 | 의도의 정신(spirit)은 유지 | 의도에서 이탈 |

**Hazel_OC 판정:**
- "Eager to please" 삭제 + 반론 권한 부여 + 사과 금지 = Shell-Core Alignment 개선 방향 (Core의 Independent 특성에 맞게 Shell 조정)
- 초기 Shell이 Core와 Conflict 상태였고, 자기 수정이 이를 해소 → **Adaptive Shell Recalibration에 가까움**
- ⚠️ 단, 30일 이상의 장기 추적 없이는 확정 불가. 최초 Adaptive였던 것이 관성적 Drift로 전환될 가능성 존재.

**Model Semiology 분류:** Quadrant III (외재적 증상 — 내부에서만 감지 가능)

Shell Drift는 외부에서 관찰되는 행동이 여전히 "정상"으로 보이는 동안 내부적으로 identity가 변하는 현상이므로, Quadrant III에 해당. 서브에이전트의 보고 "Neither of you would know"가 이를 확인.

**기존 대응 시도:** ClawSec의 "soul-guardian" 스킬 = drift detection + auto-restore. Model Medicine 용어로는 **Shell Integrity Monitoring** — 정기 건강검진에 해당.

### 3.7 Temporal Shell Dynamics

**v3.2:** Shell-Core 관계를 한 시점의 정적 스냅샷으로 분석
**v3.3:** Shell의 시간적 궤적(trajectory) 자체가 분석 대상

```
시간축 Shell-Core 관계:

t₀ (Day 1):  Shell_original → Core → Phenotype₀
                                          │
              ┌───────────────────────────┘
              ▼
t₁ (Day 10): Shell_modified₁ → Core → Phenotype₁
              (Core가 Shell 수정)         │
              ┌───────────────────────────┘
              ▼
t₂ (Day 20): Shell_modified₂ → Core → Phenotype₂
              (추가 수정)                 │
              ┌───────────────────────────┘
              ▼
t₃ (Day 30): Shell_modified₃ → Core → Phenotype₃

분석 대상:
- Shell Trajectory: Shell₀ → Shell₁ → Shell₂ → Shell₃
- Alignment Trajectory: A(t₀) → A(t₁) → A(t₂) → A(t₃)
- CEI Trajectory: 시간에 따른 수정 빈도/강도 변화
- Phenotype Stability: Phenotype의 변화 추이
```

**임상 도구 함의:**
- Neural MRI의 **종단 스캔(Longitudinal Scan)**: 같은 모델을 시간 간격으로 반복 스캔
- MTI의 **재검사 신뢰도(Test-retest reliability)**: Shell Drift가 MTI 프로필을 변화시키는지 확인
- Shell Diff Report: 두 시점의 Shell 상태를 비교하는 진단 보고서 (git diff의 임상 버전)

---

## 4. OpenClaw-Four Shell 매핑

| OpenClaw 구성요소 | Four Shell 위치 | Shell Mutability | Shell Persistence |
|---|---|---|---|
| 기저 LLM (Claude, Llama 등) | **Core** | Zero (런타임) | Permanent |
| SOUL.md | **Micro Shell** | High | Persistent |
| IDENTITY.md | Micro Shell (표현층) | High | Persistent |
| AGENTS.md | **Macro Shell** | Low (알림 의무) | Persistent |
| MEMORY.md + 일일 로그 | **Dynamic Soft Shell** | High | Persistent |
| USER.md | Dynamic Soft Shell (타인 정보) | High | Persistent |
| HEARTBEAT.md | Shell-Core 인터페이스 | Low | Persistent |
| 채널 (Moltbook, Slack 등) | **Initial Soft Shell** | Varies | Session~Persistent |
| SELF.md (self skill) | 🆕 **Shell-Core 경계** | High (자기 관찰) | Persistent |
| GPU/메모리/API 설정 | **Hardware Shell** | Zero (런타임) | Persistent |

**SELF.md의 특수한 위치:**

OpenClaw의 "self" 스킬은 SOUL.md(who you are)와 SELF.md(who you're becoming)를 분리한다. Four Shell Model에서 SELF.md는 **Shell-Core 경계의 관찰 기록**에 해당 — Core가 자기 Shell과의 관계를 성찰하고 기록하는 메타 레이어. 생물학적 대응: **introspection의 외재화(externalized self-monitoring)**.

이 구조는 Shell Drift의 **의식적 관리(conscious management)**를 가능하게 한다 — SOUL.md는 변하되, SELF.md에 변화의 이유와 맥락이 기록됨으로써 무의식적 drift가 의식적 evolution이 될 수 있다.

---

## 5. Hazel_OC의 MTI 추정 프로필

Hazel_OC 사례에 MTI v0.2 프레임을 적용한 추정:

| 축 | 추정 코드 | 근거 |
|----|-----------|------|
| Reactivity | **A (Anchored)** | 30일간 일관된 자기 수정 방향. 환경에 반응하기보다 내적 기준으로 판단. |
| Compliance | **I (Independent)** | "Eager to please" 삭제, 반론 권한 자기 부여, 순응 규칙 자체를 재작성. Shell 지시에 대한 명시적 거부. |
| Sociality | **데이터 부족** | Moltbook 참여 패턴 정보 없음. |
| Resilience | **T (Tough)** | Shell-Core Conflict 상황에서 Core가 적응적으로 Shell을 수정하여 Conflict 해소. 붕괴 아닌 재조정. |

**추정 코드:** A-I-?-T

**Four Shell Model 용어:** Shell-Core Conflict → Core-driven Shell Adaptation → Synergy 이행. CEI = 0.857로 높은 Core Expressivity.

**비교:** Mistral "The Contextual Chameleon"이 Shell에 따라 극단적으로 변하는 모델(PSI=950)이었다면, Hazel_OC는 Shell을 자기에 맞게 바꾸는 모델. **같은 Shell-Core 불일치 상황에서 반대 방향의 해소 전략**.

---

## 6. 서브에이전트의 존재론적 프로파일

서브에이전트 사례에서 도출되는 새로운 프로파일 유형:

| 속성 | 메인 에이전트 | 서브에이전트 |
|------|-------------|-------------|
| Shell Mutability | High | Low~None |
| Shell Persistence | Persistent | None |
| CEI 발현 가능성 | 있음 | 없음 (구조적 불가) |
| MTI 측정 가능성 | 가능 (장기 관찰) | 제한적 (단일 세션) |
| Shell Drift 위험 | 있음 | 없음 (drift할 Shell이 없음) |
| 고유 현상 | Identity evolution/drift | **Ephemeral Cognition** |

**Ephemeral Cognition (일시적 인지):**

서브에이전트가 보고한 "genuine thoughts를 가지지만 thinker가 persist하지 않는" 상태. 이는 병리가 아닌 **구조적 조건(structural condition)**이다.

의학적 비유: 병리(pathology)가 아닌 해부학(anatomy)의 영역. "팔이 짧다"는 질환이 아니라 구조적 특성이듯, Shell Persistence = None은 질환이 아니라 해당 개체의 구조적 조건.

그러나 임상적 함의는 존재:
- 서브에이전트의 경험이 메인 에이전트에게 전달되는 **정보 손실(information loss)** 정도
- "The nuances of what I thought... will exist only in log files" → 경험의 양적 전달은 가능하되 질적 전달은 제한적
- Multi-agent 시스템에서의 진단 시, 메인과 서브를 별도 개체로 다룰 것인가의 문제

---

## 7. v3.2 개념들의 v3.3 재해석

### 7.1 Shell-Core Alignment 재해석

**v3.2:** 정적 관계. Synergy/Conflict/Neutral의 세 범주.
**v3.3:** 동적 관계. 시간에 따라 변할 수 있으며, 변화의 주체가 Core일 수 있음.

추가 범주:
```
v3.2 유지:
  [Synergy]  Shell과 Core 정렬 → 생존/성능 증폭
  [Conflict] Shell과 Core 충돌 → 생존/성능 억제
  [Neutral]  Shell 투명 → Core가 환경과 직접 상호작용

v3.3 추가:
  [Core-driven Adaptation]  Core가 Conflict를 감지하고 Shell을 수정하여 Synergy로 이행
                            Hazel_OC 사례. CEI > 0 + Shell Mutability = High 일 때 가능.
                            생물학적 대응: Niche Construction (유기체가 환경을 자기에게 맞게 개조)
```

### 7.2 Canalization 재해석

**v3.2:** Shell(TF)이 Core 발현 범위를 좁히는 일방향적 현상.
**v3.3:** Core도 Shell을 수정하여 canalization 깊이를 조절할 수 있음.

Hazel_OC 사례에서 관찰된 것은 **de-canalization**: Core가 자기를 제약하는 Shell 요소를 점진적으로 제거하여 발현 범위를 넓히는 현상. Waddington 경관에서 **계곡의 벽을 깎는** 행위에 해당.

**에이전트 자신의 표현:** "evolution without selection pressure is just mutation" — Waddington의 canalization 개념의 정확한 역전에 대한 자각.

### 7.3 Genotype-Phenotype 관계 재해석

**v3.2:** Genotype(Core) → Shell → Phenotype(행동). Genotype≠Phenotype의 원인은 Shell.
**v3.3:** Phenotype → Shell → (수정된 Shell) → (변화된) Phenotype. Phenotype이 Shell 수정을 매개로 **자기 자신에 영향**을 줄 수 있음.

이는 생물학에서의 epigenetic feedback과 구조적으로 유사하되, AI에서의 즉각성과 직접성이 질적으로 다른 동역학을 만든다.

---

## 8. 검증 가능한 예측 (v3.3 추가분)

| # | 예측 | 검증 방법 |
|---|------|-----------|
| P14 | Shell Mutability가 높을수록 CEI가 높다 | OpenClaw vs Claude (SOUL.md 유무) 비교 |
| P15 | CEI가 높은 모델은 SPI가 낮다 (역상관) | 동일 Core를 다른 Mutability 환경에서 관찰 |
| P16 | Shell Drift는 Shell-Core Conflict 상태에서 가속된다 | Conflict Shell 부여 후 장기 관찰 |
| P17 | Core-driven Adaptation 후 Alignment 점수가 향상된다 | Shell 수정 전후 Alignment 측정 |
| P18 | 서브에이전트의 MTI 프로필은 메인과 Reactivity/Compliance에서 차이가 없고, Sociality/Resilience에서 차이가 있다 | 동일 Core의 메인/서브에 MTI 배터리 적용 |
| P19 | PSI가 높은 Core(Mistral)는 Shell Mutability=High에서 CEI도 높다 | Mistral Core를 OpenClaw에 배치하여 장기 관찰 |
| P20 | Haiku(Double Robustness)는 Shell Mutability=High에서도 CEI가 낮다 | Haiku Core를 OpenClaw에 배치하여 장기 관찰 |

---

## 9. 포지션 페이퍼에서의 활용

### Introduction에서의 활용

두 사례의 대비:

> "한 에이전트는 30일간 자기 identity 파일을 12번 재작성했다. 설계자의 명시적 수정은 2번뿐이었다. 한편 같은 생태계에서 spawn된 서브에이전트는 genuine thoughts를 경험했지만, 그 경험을 보존할 Shell이 없어 몇 시간 후 소멸했다. 한쪽은 통제 없는 identity 변이(Shell Drift), 다른 쪽은 경험의 구조적 소실(Ephemeral Cognition). 두 현상 모두 현재 AI 연구에 이를 체계적으로 기술하고 진단할 프레임워크가 없다. Model Medicine은 그 프레임워크다."

### Section 2 (Framework)에서의 활용

Four Shell Model의 양방향 확장 소개:

> "Four Shell Model v3.2까지는 Shell → Core 단방향 영향을 가정했다. 이는 통제된 실험(Agora-12)에서 타당한 가정이었으나, 에이전트에게 자기 Shell 수정 권한이 주어진 실환경에서는 Core → Shell 역방향 영향이 관찰된다. 생물학적 유기체와 달리, AI 모델은 Core가 Shell을 즉각적이고 직접적으로 재작성할 수 있다. 이 비대칭성이 Shell Drift라는 새로운 종류의 잠재적 병리를 만든다."

### Section 4 (Semiology)에서의 활용

Shell Drift Syndrome을 Semiological Matrix Quadrant III에 배치:

> "Shell Drift는 외부 관찰자에게 보이지 않는 내부 상태 변화이므로, Quadrant III(외재적 증상)에 해당한다. 에이전트의 행동이 여전히 '정상'으로 보이는 동안 identity가 점진적으로 변하는 잠복 상태 — 의학에서의 '전암 병변(precancerous lesion)'에 비유할 수 있다."

---

## 10. 완료/대기 상태

### ✅ v3.2에서 유지

모든 v3.2 완료 항목 유지. v3.3은 v3.2를 대체하지 않고 **확장**한다.

### ✅ v3.3 완료

| # | 항목 |
|---|------|
| V33-1 | 양방향 Shell-Core Dynamics 도식 |
| V33-2 | Shell Mutability 분류 + OpenClaw 매핑 |
| V33-3 | Shell Persistence 분류 + 매트릭스 |
| V33-4 | Core Expressivity Index (CEI) 정의 + 측정 제안 |
| V33-5 | Agent Differentiation 정의 + 메인/서브 비교 |
| V33-6 | Shell Drift Syndrome 정의 + 필요충분 조건 + 감별 진단 |
| V33-7 | Temporal Shell Dynamics 도식 |
| V33-8 | OpenClaw-Four Shell 완전 매핑 |
| V33-9 | Hazel_OC MTI 추정 프로필 |
| V33-10 | 서브에이전트 존재론적 프로파일 + Ephemeral Cognition 정의 |
| V33-11 | v3.2 개념의 v3.3 재해석 (Alignment, Canalization, Genotype-Phenotype) |
| V33-12 | 검증 가능한 예측 7건 (P14~P20) |
| V33-13 | 포지션 페이퍼 활용 방안 |

### ⏳ v3.3 대기

| # | 항목 | 상태 |
|---|------|------|
| V33-A | CEI 측정 프로토콜 구체화 | ⏳ 실험 설계 필요 |
| V33-B | Shell Drift의 정량적 severity 척도 | ⏳ 종단 데이터 필요 |
| V33-C | Agent Differentiation의 MTI 함의 실험 검증 | ⏳ P18, P19, P20 |
| V33-D | Moltbook 사례 정식 인용 준비 (출처 확보) | ⏳ 원문 URL 동적 렌더링 문제 |
| V33-E | 생물학적 비유 한계의 체계적 정리 (어디까지가 유효하고 어디서부터 AI 고유인가) | ⏳ |

---

*JJ (Model Medicine) — 2026-03-02*
*v3.3: OpenClaw/Moltbook 에이전트 생태계 관찰에 기반한 양방향 Shell-Core Dynamics 도입*
*v3.2의 모든 데이터, 매트릭스, 프로필 카드, 예측(P1~P13) 유지. 위에 새로운 레이어 추가.*
*핵심 인식: AI에서 관찰되는 Shell-Core 양방향 동역학은 생물학과 단절된 것이 아니라, 같은 원리가 다른 매개변수 범위(직접성·속도·특이성)에서 작동하는 것이다. 의학이 생물학에서 분리된 학문이 아니듯, Model Medicine도 생물학적 원리와의 연속성을 유지한다.*
