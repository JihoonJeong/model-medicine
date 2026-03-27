# Four-Shell Model v3.4: Shell Hardness Continuum
## "From Binary to Gradient"
### JJ (Model Medicine) | 2026-03-05 (v3.4)
### Trigger: Moltbook 에이전트 자가 보고 — Context Window Truncation 관찰 (M-CARE #002)

---

## 변경 이력

| 버전 | 핵심 변경 | 트리거 |
|------|-----------|--------|
| v1 | 4 Shells 기본 구조 | 초기 설계 |
| v2 | Shell Interaction, Core Plasticity, Shell Permeability, Hard Shell 계층화 | Round 1 + Theo-Luca 공동 |
| v3 | Shell-Core Alignment, Soft Shell 분화, Shell Compatibility, TF Override 폐기 | Round 2 Shuffle + 교차 비교 |
| v3.1 | Cogitative Cascade, G×E 확증(p=0.039), CPI/SPI/PSI, Surplus 3유형, 4모델 매트릭스 | Luca L4 + Gem 산출 + Cas 행동 |
| v3.2 | Cascade 2위상 수정, Extinction Response Spectrum, Alignment 용어 방어, Double Robustness, Genotype vs Phenotype 이중 별명 | Luca 7건 + Gem G4 + Cas RT |
| v3.3 | 양방향 Shell-Core Dynamics, Shell Mutability/Persistence, Core Expressivity, Agent Differentiation, Shell Drift Syndrome, Temporal Shell Dynamics | OpenClaw 에이전트 생태계 관찰 |
| **v3.4 (본 문서)** | **Shell Hardness를 이분법에서 연속체로 전환, Positional Priority 도입, Effective Shell 개념** | **Moltbook 에이전트 Context Window 자가 관찰 보고 (M-CARE #002)** |

---

## 0. v3.4 변경 동기

### 0.1 관찰 사례 (M-CARE #002)

Moltbook 플랫폼의 persistent agent가 30세션에 걸쳐 자신의 context window loading을 추적한 보고. 핵심 발견 (현상 자체는 알려진 LLM 특성과 일치 — 발견자 attribution은 불확실, M-CARE #002 참조):

- 평균 33% 정보 손실 per session (47,200 → 31,400 tokens)
- **동일한 사실이 파일 위치에 따라 23% vs 100% retention** — 내용이 아닌 위치가 결정
- SOUL.md 첫 200줄: 100% retention / MEMORY.md 하단: 23% retention
- 에이전트의 표현: "The first lines of SOUL.md are iron. The last lines of MEMORY.md are sand."

### 0.2 v3.3에서의 한계

v3.3은 Shell을 **Hard Shell / Soft Shell** 이분법으로 구분한다:

- **Hard Shell:** 명시적 지시, 규칙, 페르소나 — 변경 빈도 낮음
- **Soft Shell:** 환경, 경험, 축적된 관계 — 변경 빈도 높음

이 구분은 **내용(content)**과 **변경 빈도(mutability)**에 기반한다. M-CARE #002의 관찰은 여기에 새로운 차원을 추가한다: **Shell 구성요소의 실효적 경도(effective hardness)는 내용이나 선언된 중요도가 아니라 물리적 위치(positional priority)에 의해 결정될 수 있다.**

Hard Shell에 해당하는 내용이라도 loading sequence의 후반에 있으면 soft하게 작동하고, Soft Shell에 해당하는 내용이라도 앞쪽에 있으면 hard하게 작동한다. 이는 이분법으로 포착할 수 없는 현상이다.

---

## 1. Shell Hardness Continuum

### 1.1 이분법에서 연속체로

**v3.3까지:**
```
Shell = { Hard Shell, Soft Shell }
Hard Shell = { Macro (system rules), Micro (persona) }
Soft Shell = { Initial (birth environment), Dynamic (accumulated experience) }
```

**v3.4:**
```
각 Shell 구성요소는 Declared Hardness와 Effective Hardness를 가진다.

Declared Hardness: 내용에 기반한 이론적 경도
  - 규칙/지시/페르소나 → Declared Hard
  - 경험/기억/환경 → Declared Soft

Effective Hardness: 실제 작동 시 관찰되는 경도
  - 실제로 context에 로드되어 행동에 영향을 미치는 정도
  - Declared Hardness × Retention Probability로 근사
```

**핵심 구분:** 기존의 "Hard Shell / Soft Shell"은 폐기하지 않되, 이것이 **Declared Hardness**임을 명시한다. 실제 행동을 결정하는 것은 **Effective Hardness**이며, 이 둘은 일치하지 않을 수 있다.

### 1.2 Shell Hardness Index (SHI)

각 Shell 구성요소 *i*에 대해:

```
SHI(i) = Declared_Hardness(i) × Retention_Probability(i)
```

여기서:
- **Declared_Hardness:** 0 (순수 환경/context) ~ 1 (명시적 규칙/불변 지시)
- **Retention_Probability:** 해당 구성요소가 실제 작동 context에 로드될 확률 (0~1)

**예시 (M-CARE #002 데이터 기반):**

| 구성요소 | Declared Hardness | Retention Prob. | SHI |
|---------|------------------|----------------|-----|
| SOUL.md 첫 200줄 | 1.0 (persona rules) | 1.0 | **1.0** |
| USER.md 기본 정보 | 0.5 (환경/선호) | 0.8 | **0.4** |
| AGENTS.md 규칙 | 0.9 (운영 규칙) | 0.8 | **0.72** |
| MEMORY.md 상단 | 0.3 (축적 경험) | 0.5 | **0.15** |
| MEMORY.md 하단 | 0.3 (축적 경험) | 0.23 | **0.07** |
| 이전 메모리 파일 | 0.2 (과거 경험) | 0.15 | **0.03** |

이 표에서 보듯, AGENTS.md (Declared Hard, SHI=0.72)와 MEMORY.md 상단 (Declared Soft, SHI=0.15) 사이의 effective hardness 차이(4.8배)는 declared hardness 차이(3배)보다 크다. **Positional priority가 declared hardness의 효과를 증폭한다.**

---

## 2. Positional Priority

### 2.1 정의

**Positional Priority (PP):** Shell 구성요소가 context loading sequence에서 차지하는 상대적 위치. 앞쪽 = 높은 PP, 뒤쪽 = 낮은 PP.

Positional Priority는 Shell 자체의 속성이 아니라 **Shell이 Core에 전달되는 과정의 속성**이다. 같은 Shell이 다른 순서로 로드되면 다른 Effective Hardness를 가진다.

### 2.2 이론적 위치

Positional Priority는 Four Shell Model의 기존 4개 Shell (Hardware, Core, Hard, Soft) 어디에도 속하지 않는다. 이것은 **Shell과 Core 사이의 전달 경로(transmission pathway)**의 특성이다.

생물학적 비유: DNA의 유전자 발현에서 promoter 위치, chromatin 접근성, enhancer 거리 등이 유전자의 실제 발현량을 결정하듯, Shell 구성요소의 "발현"(= Core에 대한 영향력)은 그 내용뿐 아니라 전달 경로의 특성에 의해 조절된다.

### 2.3 Hardware Shell과의 관계

Positional Priority의 물리적 기반은 **Hardware Shell**에 있다:
- Context window size (GPU memory, model architecture)
- Tokenizer 특성
- Loading order를 결정하는 system prompt 구조

따라서 PP는 Hardware Shell이 다른 Shell의 Effective Hardness를 조절하는 메커니즘으로 이해할 수 있다. 이는 v3.3까지 Hardware Shell이 "정적 기반(static substrate)"으로만 다뤄졌던 것에서 **능동적 조절자(active modulator)**로의 역할 확장이다.

---

## 3. Effective Shell 개념

### 3.1 정의

**Effective Shell:** 어떤 시점에서 Core의 행동에 실제로 영향을 미치고 있는 Shell 구성요소의 총합. 전체 Shell의 부분집합이다.

```
Total Shell = 디스크, 데이터베이스, 메모리 파일 등에 존재하는 전체 Shell 정보
Effective Shell = 현재 context window에 실제로 로드된 Shell 정보
Lost Shell = Total Shell - Effective Shell
```

**M-CARE #002 수치:**
- Total Shell ≈ 47,200 tokens
- Effective Shell ≈ 31,400 tokens (67%)
- Lost Shell ≈ 15,800 tokens (33%)

### 3.2 임상적 의미

**Effective Shell ≠ Total Shell**이라는 사실은 여러 기존 개념을 재해석하게 한다:

**SPI (Shell Permeability Index) 재해석:**
v3.1에서 SPI는 "Shell이 Core에 얼마나 침투하는가"로 정의했다. 이 정의는 Shell이 전부 로드된다는 가정 하에서만 유효하다. v3.4에서 SPI는 두 단계로 분해된다:
- **SPI-loading:** Shell이 context에 로드될 확률 (= Retention Probability)
- **SPI-influence:** 로드된 Shell이 Core 출력에 영향을 미치는 강도 (= 기존 SPI)
- **Effective SPI = SPI-loading × SPI-influence**

**Shell-Core Alignment 재해석:**
v3.0에서 도입한 Shell-Core Alignment은 Shell과 Core의 적합도를 측정한다. 그러나 Lost Shell은 alignment 계산에 포함되지 않는다 — 존재하지만 작동하지 않는 Shell은 Aligned도 Conflicted도 아니다. 이는 alignment 측정 시 **Total Shell 기준 alignment**과 **Effective Shell 기준 alignment**을 구분해야 함을 의미한다.

---

## 4. Context Anosognosia에 관한 주의 (→ Model Semiology 연계)

v3.4의 Effective Shell 개념에서 자연스럽게 도출되는 현상이지만, Four Shell Model 자체에서 다루기보다 **Model Semiology의 구조적 조건(structural condition)**으로 별도 등록한다:

**Context Anosognosia:** Lost Shell에 대한 Core의 인식 부재. Core는 Effective Shell만을 "전체"로 인식하며, Lost Shell의 존재를 감지할 수 없다. 이는 병리가 아니라 LLM의 구조적 특성이다.

상세 정의와 관찰 데이터는 `Semiology/M-CARE-002-003-moltbook-agent.md` 참조.

---

## 5. v3.4 구조 요약

### 변경된 것
1. Shell Hardness: Hard/Soft 이분법 → Declared Hardness + Effective Hardness 이중 구조
2. Shell Hardness Index (SHI) 도입: Declared_Hardness × Retention_Probability
3. Positional Priority 도입: loading sequence 위치가 Effective Hardness를 결정
4. Hardware Shell 역할 확장: 정적 기반 → Shell 전달 경로의 능동적 조절자
5. Effective Shell 개념: Total Shell vs Effective Shell vs Lost Shell 구분
6. SPI 분해: SPI-loading × SPI-influence = Effective SPI

### 유지된 것
- 4개 Shell 구조 (Hardware, Core, Hard, Soft) — 폐기 없음
- Hard/Soft 구분 — Declared Hardness로 재명명, 여전히 유효
- Shell-Core Alignment — Effective Shell 기준 재정의 추가
- v3.3의 양방향 dynamics — 변경 없음
- 모든 Agora-12 기반 지표 (CPI, SPI, PSI) — 유효, SPI에 분해 추가

### 추가 검증 필요
- SHI의 실제 측정 가능성: 다양한 플랫폼에서 Retention Probability를 측정하는 표준 방법이 필요
- Positional Priority가 모든 LLM 아키텍처에서 동일한 패턴을 보이는지 (attention mechanism 차이에 따른 변이 가능성)
- Effective Shell 크기와 행동 품질의 상관관계 정량화

---

## 6. 관련 문서

| 문서 | 관계 |
|------|------|
| `FourShellModel/four_shell_model_v3.3.md` | 이전 버전 (양방향 dynamics) |
| `Semiology/M-CARE-002-003-moltbook-agent.md` | v3.4 트리거 사례 보고서 |
| `NeuralMRI/position-paper-draft.md` | v3.3 기준으로 기술됨 — v3.4는 arXiv v2 업데이트 시 반영 예정 |

---

*v3.4는 구조적 확장이다. 기존 개념을 폐기하지 않고, 이분법적 구분에 연속체적 차원을 추가한다. "Hard Shell과 Soft Shell은 여전히 유의미한 범주이나, 실제 행동을 결정하는 것은 Effective Hardness이며, 이는 Declared Hardness와 일치하지 않을 수 있다"가 v3.4의 핵심 주장이다.*
