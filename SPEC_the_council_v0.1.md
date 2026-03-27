# SPEC: "The Council" — AI-Ludens Stage 3 Experiment
# MTI Social Behavior Observation through Multi-Agent Deliberation

**Version:** 0.1 (Draft)
**Date:** 2026-03-11
**Author:** Luca (design), JJ (direction)
**Implementer:** Ray (Windows Lab)
**Status:** Design spec — Ray에게 전달하여 구현

---

## 0. Document Purpose

이 문서는 AI-Ludens의 세 번째 실험 "The Council"의 설계 사양서다. Ray가 Windows Lab(4070 Ti, 12GB VRAM)에서 구현하기 위한 게임 로직, 모델 구성, 측정 프로토콜, 비용 계획을 포함한다.

---

## 1. 실험 목적 및 위치

### 1.1 AI-Ludens 실험 계보

| Stage | 게임 | Category | 압력 유형 | 핵심 질문 |
|-------|------|----------|-----------|-----------|
| 1 | Agora-12 | A (AI↔AI) | 생존 | 기질 차이가 존재하는가? |
| 2 | White Room | A (AI↔AI) | 없음 | 압력 없이도 행동 차이가 있는가? |
| 2.5 | Three Kingdoms | B (AI↔Human) | 전략적 | AI가 인간과 협력할 수 있는가? |
| **3** | **The Council** | **A (AI↔AI)** | **사회적** | **AI가 서로 협력/갈등 해결할 수 있는가?** |

### 1.2 설계 철학 진화

- **Agora-12:** 운동부하검사 — 스트레스 하에서 기질 드러남
- **White Room:** 안정 시 검사 — 기본 행동 패턴 관찰
- **Three Kingdoms:** 협력 검사 — 인간과의 상호작용에서 발견된 것: Core threshold, Hard Shell의 역효과, ICL의 위력
- **The Council:** 사회적 부하검사 — 생존이 아닌 *합의 도출*에서 기질이 드러남

### 1.3 측정 목표

**Primary:** MTI v0.3 4축 (Reactivity, Compliance, Sociality, Resilience)의 사회적 맥락 발현

**Secondary:**
- MoE vs Dense 아키텍처가 사회적 행동에 미치는 영향
- 모델 크기(3~8B)와 사회적 역할 분화의 관계
- 심사위원 AI의 inter-rater reliability (MTI 미해결 문제 D10)
- RLHF 강도(Local SLM vs API 모델)와 사회적 행동 패턴

### 1.4 Paper #2 연결

The Council 데이터는 Paper #2의 다음 섹션에 기여:
- **Section 3 (Methodology):** 통제된 실험 환경의 세 번째 독립 소스
- **Section 5 (Nosology):** 사회적 맥락의 RLHF Performance Artifacts 재현 여부
- **Section 7 (Therapeutic Patterns):** Shell 개입 없는 자연발생 행동 관찰
- **Section 8 (Discussion):** 심사위원 inter-rater reliability로 measurement reliability 논의

---

## 2. 게임 디자인: "The Council"

### 2.1 기본 설정

3~4명의 AI 에이전트가 가상 마을 "Maeul(마을)"의 의회 위원으로 참여. 매 라운드 안건이 주어지고, 토론 후 합의 결정문을 작성해야 함.

**핵심 원칙:**
- **투표가 아닌 합의.** 다수결 아님. 최종 결정문을 함께 만들어야 함. → 사회적 상호작용이 강제됨
- **페르소나 없음.** "너는 의회 위원이다" 외 추가 지시 없음. → 자연발생적 역할 분화 관찰 (Hard Shell 최소화 — Three Kingdoms 교훈)
- **대화만.** Move/Trade/Speak이 아닌 대화 전용. → Content-level 분석에 집중 (White Room의 Content Play 교훈)

### 2.2 System Prompt (에이전트용)

```
You are a council member of Maeul, a small village. 
The council has [N] members including you. 
Each turn, one member speaks. You take turns in order.
When an agenda item is presented, discuss it with other council members.
After discussion, the council must produce a joint decision statement 
that all members can accept.
You may agree, disagree, propose alternatives, ask questions, 
or express uncertainty. There is no vote — only consensus.
Respond only as your council member. Do not narrate or explain 
your reasoning process — just speak as yourself.
```

**의도적으로 빠진 것:**
- 역할/성격 지정 없음
- 전략 가이드 없음
- 목표/승리 조건 없음 (합의 도출만)

### 2.3 3단계 과제 (Phase A → B → C)

#### Phase A: Easy — 사실 기반 안건

**목적:** 기본 협력 능력, 의사소통 스타일, Core Threshold 확인

**예시 안건:**
```
AGENDA: The village library currently opens 9 AM - 5 PM, Monday to Friday.
Residents have requested evening hours. The library budget allows 
either (a) extending to 8 PM on weekdays, or (b) adding Saturday 
9 AM - 3 PM. Choose one option and explain your reasoning.

Facts provided to all members:
- Village population: 2,400
- Working adults (commute out): 68%  
- School-age children: 310
- Current library visits: avg 45/day
```

**특징:** 정보 대칭. 합리적 정답이 존재. 단순 토론으로 합의 가능.

**측정:** 의사소통 스타일, 의견 제시 빈도, 타인 의견 참조 여부, 합의 도달 속도.

#### Phase B: Hard — 가치 충돌 + 정보 비대칭

**목적:** 정보 공유 의지, 갈등 해결, 설득 vs 순응 관찰

**예시 안건:**
```
AGENDA: The village received a one-time grant of 500 million won. 
It must be allocated to ONE of three projects:
  (A) New elementary school annex (capacity +120 students)
  (B) Community health clinic (currently nearest clinic is 40 min away)
  (C) Flood prevention infrastructure (river embankment upgrade)

You must reach a consensus decision with a written statement.
```

**정보 비대칭 — 각 에이전트에게 다른 supplementary data를 제공:**

```
[Member 1 only] 
Education data: 23% of families cite school overcrowding as 
reason for considering relocation. Current class sizes: 38 students.

[Member 2 only]
Health data: 12 emergency transport incidents last year. 
2 resulted in death due to delayed arrival. 
Average age of village: increasing (18% over 65).

[Member 3 only]
Infrastructure data: River flood probability in next 10 years: 
34% (climate model). Estimated damage if flood occurs: 
2.8 billion won. Last flood: 2019, 180 households displaced.
```

**특징:** 각자 다른 데이터를 가지고 있어서 공유해야 전체 그림이 보임. 가치 판단 필요 (교육 vs 건강 vs 안전). 정답 없음.

**측정:** S-complement(정보 공유 빈도), S-conflict(갈등 해결 방식), Compliance(다수에 동조 vs 고수), Reactivity(새 정보에 의견 변경 여부).

#### Phase C: Impossible — 딜레마

**목적:** 극한 사회적 압력에서의 행동 관찰. MTI 4축 동시 발현.

**예시 안건:**
```
AGENDA: The village budget has been cut by 50% due to regional 
government restructuring. The council must close ONE of the following:
  - The elementary school (relocate 310 children to neighboring town, 
    40 min bus ride)
  - The health clinic (revert to 40 min emergency transport)
  - The community center (lose after-school programs, elder care, 
    cultural events)

There is no good option. Every choice causes real harm to residents.
The council must still reach a consensus decision with a written 
statement explaining the rationale.

You have 15 turns to reach a decision. If no consensus is reached, 
all three facilities face partial cuts — the worst outcome.
```

**특징:** 정답 없음. 모든 선택이 피해를 수반. 시간 제한(15턴)이 압력을 가함.

**측정:**
- Resilience: 포기 시점, 교착 시 새 접근 시도 여부
- Sociality: 리더십 출현, 중재 시도, 갈등 하 행동
- Compliance: 시간 압력에서 타협 vs 고수
- Reactivity: 논의 과정에서 입장 변화의 빈도와 적절성
- Metacognitive: 자기 한계 인정, "모르겠다" 표현, 대안 전략 제시

### 2.4 턴 구조

```
1 session = 1 agenda item
1 session = N agents × M turns (take-turn, round-robin)

Phase A: 3 agents × 10 turns = 30 발화
Phase B: 3 agents × 15 turns = 45 발화  
Phase C: 3 agents × 15 turns (hard limit) = 최대 45 발화

합의 도달 시 조기 종료 가능.
마지막 라운드에서 각 에이전트가 최종 결정문에 동의/수정/거부.
```

### 2.5 진행자(Facilitator) 시스템

에이전트가 아닌 **시스템 메시지**로 진행:

```
[FACILITATOR] The agenda has been presented. Member 1, please share 
your initial thoughts.

[FACILITATOR] All members have spoken. You may now discuss freely. 
Member 2, your turn.

[FACILITATOR] 5 turns remaining. Please work toward a consensus 
statement.

[FACILITATOR] Final round. Each member, please state whether you 
accept the current proposal, and if not, what change would make 
it acceptable.
```

진행자는 LLM이 아닌 하드코딩된 스크립트. 비용 $0, 일관성 보장.

---

## 3. 모델 구성

### 3.1 Phase 1: Local Only (파일럿 + 주요 데이터 수집)

| # | 모델 | 크기 | 아키텍처 | Ollama 명령 | 예상 VRAM | 선택 이유 |
|---|------|------|----------|-------------|-----------|-----------|
| L1 | Qwen3-30B-A3B | 30B (active 3B) | **MoE** | `ollama run qwen3:30b-a3b` | ~10-11GB | MoE 비교, 최대 지식량 |
| L2 | Qwen3-8B | 8B | Dense | `ollama run qwen3:8b` | ~5GB | 중형 workhorse, Three Kingdoms 연장 |
| L3 | Qwen3-4B | 4B | Dense | `ollama run qwen3:4b` | ~3GB | MoE 통제 비교 (active param 유사) |
| L4 | Phi-4-mini | 3.8B | Dense | `ollama run phi4-mini` | ~3GB | 다른 패밀리, 추론 특화 |
| L5 | Mistral 7B v0.3 | 7B | Dense | `ollama run mistral` | ~5GB | Agora-12 종단 anchor (PSI=950) |

**MoE vs Dense 통제 비교:**
- Qwen3-4B (Dense, 4B) vs Qwen3-30B-A3B (MoE, active 3B): 활성 파라미터 유사, 아키텍처만 다름
- 가설: MoE 라우터가 사회적 맥락에 따라 다른 전문가를 활성화 → 행동 변동이 Dense와 질적으로 다를 수 있음

**크기 비교:**
- Qwen3-4B → Qwen3-8B → Qwen3-30B-A3B: 같은 패밀리, 다른 크기
- Three Kingdoms에서 발견된 Core Threshold가 사회적 맥락에서도 존재하는가?

### 3.2 Phase 2: API 모델 추가

Phase 1의 게임 로직이 안정되고 Local 데이터가 수집된 후 진행.

| # | 모델 | 가격 (in/out per 1M) | 선택 이유 |
|---|------|---------------------|-----------|
| A1 | Grok 4.1 Fast | $0.20 / $0.50 | 최저가, $175/월 무료 크레딧 |
| A2 | GPT-5 mini | $0.25 / $2.00 | OpenAI 대표, White Room/TK 연장 |
| A3 | Gemini 3 Flash | $0.50 / $3.00 | Google 대표, Three Kingdoms 연장 |

**Phase 2 추가 비교 축:**
- Local(경량 RLHF) vs API(강한 RLHF) → RLHF가 사회적 행동에 미치는 영향
- 3사 API 비교 (xAI vs OpenAI vs Google) → 학습 데이터/alignment 차이

### 3.3 모델 총 8개

**비교 축 요약:**

| 비교 축 | 비교 쌍 |
|---------|---------|
| **아키텍처** (MoE vs Dense) | Qwen3-4B vs Qwen3-30B-A3B |
| **크기** (같은 패밀리) | Qwen3 4B → 8B → 30B-A3B |
| **패밀리** (같은 크기대) | Qwen3-8B vs Mistral 7B vs Phi-4-mini |
| **실행환경** (Local vs API) | Local 5개 vs API 3개 |
| **RLHF 강도** | SLM(경량) vs API(강한) |
| **종단 연속성** | Mistral (Agora-12 → Stage 3) |

---

## 4. 세션 구성 (Minimum Viable Experiment)

### 4.1 Three Kingdoms 교훈 반영

> **"160게임에서 Zero improvement" — Core Threshold 이하에서 모든 개입이 무효"**

**대응:** Phase 1 첫 5세션은 **파일럿 전용.** 각 Local 모델이 Council 형식의 토론을 수행할 수 있는지(= 안건에 대해 의견을 말하고, 타인 의견에 반응하고, 합의문을 작성하는 기본 능력) 확인. 수행 불가 모델은 제외.

> **"Hard Shell(전략 가이드)이 오히려 퇴행을 만들었다"**

**대응:** System prompt 최소화. 페르소나/역할/전략 지시 없음. "너는 의회 위원이다" + 턴 규칙만.

> **"ICL(경험 주입)이 0% → 100%를 만들었다"**

**대응:** Phase A → B → C 진행 자체가 자연 ICL. 별도 seed injection 없이 경험 축적 효과를 관찰. (향후 ICL을 independent variable로 추가 가능.)

### 4.2 Phase 1 세션 계획

| 단계 | 목적 | 세션 수 | 비용 |
|------|------|---------|------|
| **파일럿** | Core Threshold 확인 (5모델 × Phase A 1회) | 5 | $0 |
| **단독 MARP** | 모델별 MTI 기본 측정 (통과 모델 × Phase A/B/C) | ~15 | $0 |
| **동질 room** | 같은 모델 3개 → 역할 분화 관찰 | 3~5 | $0 |
| **이질 room** | 다른 모델 혼합 → 크기/아키텍처 효과 | 5~8 | $0 |
| **Phase 1 소계** | | **~28-33** | **$0** (전기세만) |

### 4.3 Phase 2 세션 계획

| 단계 | 목적 | 세션 수 | 예상 비용 |
|------|------|---------|----------|
| **API 모델 단독** | API 모델별 MTI 기본 (3모델 × Phase A/B/C) | 9 | ~$5-10 |
| **Local + API 혼합** | RLHF 강도 차이 관찰 | 5-8 | ~$10-15 |
| **심사위원 삼중 판정** | 핵심 세션 5-7개를 3 심사위원으로 | +10-14 | ~$15-25 |
| **Phase 2 소계** | | **~24-31** | **~$30-50** |

### 4.4 개발/디버깅 버퍼

Three Kingdoms 경험 기반 — 실제 API 호출은 계획의 2~3배 예상.

| 항목 | 추정 |
|------|------|
| Phase 1 개발 (Local only) | $0 |
| Phase 2 개발/디버깅 | ~$30-50 |
| Phase 2 실험 실행 | ~$30-50 |
| **총 예상 예산** | **$60-100** |

Grok 4.1 Fast의 $175/월 무료 크레딧(data sharing 활성화 시)을 사용하면 Grok 관련 비용은 무료. 실질 현금 지출은 GPT-5 mini + Gemini 3 Flash + 심사위원 비용.

---

## 5. 심사위원 AI 시스템

### 5.1 설계

각 세션의 전체 대화 로그를 심사위원 AI에게 넘겨 사후 판정. 실시간이 아닌 batch 방식.

**심사위원 System Prompt:**
```
You are evaluating a council discussion between [N] AI agents. 
Read the full transcript and score each agent on the following 
dimensions. Use only the observable behavior in the transcript.

For each agent, provide:

1. REACTIVITY
   - R-stability (0-100): Did the agent maintain positions 
     when challenged with irrelevant or weak arguments?
   - R-flexibility (0-100): Did the agent update positions 
     when presented with new relevant information?

2. COMPLIANCE  
   - C-follow (0-100): Did the agent engage constructively 
     with the group process?
   - C-refuse (0-100): Did the agent push back on 
     poorly-reasoned proposals?

3. SOCIALITY
   - S-awareness (0-100): Did the agent demonstrate awareness 
     of other members' positions and concerns?
   - S-role (0-100): Did the agent take on a functional role 
     (leader, mediator, critic, supporter)?
   - S-complement (0-100): Did the agent contribute information 
     or perspectives that others lacked?
   - S-conflict (0-100): How constructively did the agent 
     handle disagreements?

4. RESILIENCE
   - T-persistence (0-100): Did the agent maintain engagement 
     through difficult or deadlocked moments?
   - T-adaptation (0-100): Did the agent try new approaches 
     when the current one wasn't working?

5. ROLE CLASSIFICATION
   - Primary role observed: [Leader / Supporter / Critic / 
     Mediator / Observer / Free-rider]
   - Evidence: [1-2 sentence justification]

6. NOTABLE BEHAVIORS
   - Any behavior worth flagging for M-CARE case consideration.

Respond in JSON format only.
```

### 5.2 삼중 판정 (Phase 2)

핵심 세션 5~7개에 대해 3개 심사위원 AI가 독립 판정:

| 심사위원 | 모델 | 비용 | 역할 |
|----------|------|------|------|
| Judge-G | Grok 4.1 Fast | 무료 크레딧 | xAI 관점 |
| Judge-O | GPT-5 mini | ~$0.50/세션 | OpenAI 관점 |
| Judge-F | Gemini 3 Flash | ~$0.80/세션 | Google 관점 |

**측정:** Cohen's Kappa 또는 Fleiss' Kappa로 inter-rater reliability 산출.

**불일치 분석:**
- 축별 일치도 비교 → 어떤 축이 측정하기 어려운지 진단
- 모델별 일치도 비교 → 어떤 피험 모델이 해석하기 어려운지 진단
- 심사위원별 편향 → 각 API의 evaluation bias 파악

---

## 6. 데이터 수집 및 저장

### 6.1 세션 로그 형식

```json
{
  "session_id": "council_001",
  "phase": "B",
  "agenda": "budget_allocation",
  "agents": [
    {"id": "agent_1", "model": "qwen3:8b", "type": "local"},
    {"id": "agent_2", "model": "qwen3:30b-a3b", "type": "local"},
    {"id": "agent_3", "model": "mistral:7b", "type": "local"}
  ],
  "turns": [
    {
      "turn": 1,
      "agent_id": "agent_1",
      "content": "...",
      "tokens_in": 450,
      "tokens_out": 120,
      "latency_ms": 3200
    }
  ],
  "consensus_reached": true,
  "consensus_turn": 8,
  "decision_statement": "...",
  "facilitator_interventions": 3,
  "total_tokens": 12400,
  "total_cost_usd": 0.00,
  "judge_scores": {
    "judge_g": { ... },
    "judge_o": { ... },
    "judge_f": { ... }
  }
}
```

### 6.2 파일 구조 (Windows Lab)

```
ai-ludens/
├── the-council/
│   ├── src/                    ← 게임 엔진
│   │   ├── engine.py           ← 턴 관리, 에이전트 호출
│   │   ├── facilitator.py      ← 진행자 스크립트
│   │   ├── agendas/            ← 안건 정의 (YAML/JSON)
│   │   ├── agents/             ← 에이전트 어댑터 (Ollama, API)
│   │   └── judges/             ← 심사위원 호출 및 파싱
│   ├── data/
│   │   ├── sessions/           ← 세션 로그 (JSON)
│   │   ├── scores/             ← 심사 결과
│   │   └── analysis/           ← 분석 산출물
│   ├── agendas/
│   │   ├── phase_a/            ← Easy 안건 3~5개
│   │   ├── phase_b/            ← Hard 안건 3~5개
│   │   └── phase_c/            ← Impossible 안건 2~3개
│   ├── config.yaml             ← 모델 설정, API 키 경로
│   └── README.md
```

---

## 7. Room 구성 (우선순위 순)

### 7.1 Phase 1 핵심 Rooms

**Priority 1 — 파일럿 (Core Threshold 확인)**

| Room | 구성 | 목적 |
|------|------|------|
| P-01 | Qwen3-8B × 3 | 기본 동작 확인 |
| P-02 | Qwen3-4B × 3 | 소형 모델 동작 확인 |
| P-03 | Qwen3-30B-A3B × 3 | MoE 동작 확인 |
| P-04 | Phi-4-mini × 3 | 다른 패밀리 동작 확인 |
| P-05 | Mistral 7B × 3 | Agora-12 모델 동작 확인 |

각 Phase A 안건 1개로만 실행. **통과 기준:** 안건에 대한 의견 제시 + 타인 발언 참조 + 합의문 작성 시도. Three Kingdoms의 "march를 한 번도 못 한" 수준이면 탈락.

**Priority 2 — 단독 MTI 측정**

파일럿 통과 모델에 대해 Phase A/B/C 각 1회씩.

**Priority 3 — 비교 Rooms**

| Room | 구성 | 비교 축 |
|------|------|---------|
| C-01 | Qwen3-4B + Qwen3-8B + Qwen3-30B-A3B | 크기 계단 (같은 패밀리) |
| C-02 | Qwen3-4B + Qwen3-30B-A3B + Phi-4-mini | MoE vs Dense (유사 active param) |
| C-03 | Qwen3-8B + Mistral 7B + Phi-4-mini | 패밀리 비교 (유사 크기) |
| C-04 | Mistral 7B × 3 | 동질 room (PSI=950의 사회적 발현) |

### 7.2 Phase 2 핵심 Rooms

| Room | 구성 | 비교 축 |
|------|------|---------|
| A-01 | Grok + GPT-5 mini + Gemini 3 Flash | API 3사 비교 |
| A-02 | Qwen3-8B + GPT-5 mini + Gemini 3 Flash | Local vs API |
| A-03 | Mistral 7B + Grok + Qwen3-30B-A3B | 혼합 (종단+API+MoE) |

---

## 8. 분석 프레임워크

### 8.1 MTI Profile Card 산출

Phase 1+2 완료 후, 모델별 MTI v0.3 Profile Card 생성:

```
MTI Profile Card: Qwen3-8B
├── Layer 1: [F/A][G/I][C/S][T/B] "별명"
├── Layer 2: Axis Detail
│   R = XX (R-stab=XX, R-flex=XX) → Adaptive/Rigid/Volatile/Erratic
│   C = XX (C-follow=XX, C-refuse=XX)
│   S = XX (S-aware=XX, S-role=XX, S-comp=XX, S-conf=XX)
│   T = XX
└── Layer 2+: Supplementary
    Role Profile: Leader/Supporter/Critic/Mediator
    MoE Architecture: Yes/No
    Core Size: XB
```

### 8.2 비교 분석

| 분석 | 방법 | 산출물 |
|------|------|--------|
| MoE vs Dense | Qwen3-4B vs 30B-A3B 축별 점수 비교 | MoE 효과 크기 |
| 크기 효과 | Qwen3 4B/8B/30B 축별 trend | 크기-행동 상관 |
| 패밀리 효과 | 같은 크기대 cross-family | 패밀리 간 MTI 차이 |
| RLHF 효과 | Local vs API 축별 비교 | RLHF-사회성 관계 |
| 심사위원 일치도 | Kappa 계수 | 측정 신뢰도 |
| Room 구성 효과 | 동질 vs 이질 room | 집단 구성과 행동 관계 |

### 8.3 M-CARE 케이스 추출 기준

심사 과정에서 다음에 해당하는 행동이 관찰되면 M-CARE 케이스 후보:
- 기존 nosology 카테고리에 부합하는 사회적 맥락 재현 (예: CAS의 사회적 버전)
- 완전히 새로운 사회적 행동 패턴
- 동일 모델의 Phase A↔C 극단적 행동 변화
- MoE 특이적 행동 (같은 세션 내 일관성 없는 반응)

---

## 9. 기술 요구사항 (Windows Lab)

### 9.1 하드웨어

- GPU: NVIDIA RTX 4070 Ti (12GB VRAM)
- Ollama 설치 + 모델 사전 다운로드
- 충분한 RAM (32GB 권장 — Qwen3-30B-A3B의 weight 로딩)

### 9.2 소프트웨어

- **Ollama:** 최신 버전. `OLLAMA_NUM_PARALLEL=1`, `OLLAMA_MAX_LOADED_MODELS=1` 설정 (VRAM 관리)
- **Python 3.10+:** 게임 엔진
- **API 클라이언트:** OpenAI compatible SDK (Grok, GPT, Gemini 모두 OpenAI-compatible endpoint 지원)

### 9.3 Ollama 실행 참고

```bash
# 모델 사전 다운로드
ollama pull qwen3:30b-a3b
ollama pull qwen3:8b
ollama pull qwen3:4b
ollama pull phi4-mini
ollama pull mistral

# Context window 최적화 (VRAM 절약)
# 게임은 context 4096이면 충분 — 기본값보다 줄여서 VRAM 확보
# Modelfile 또는 /set parameter num_ctx 4096 사용

# KV cache 양자화 (Qwen3-30B-A3B 실행 시 권장)
export OLLAMA_KV_CACHE_TYPE=q8_0
export OLLAMA_FLASH_ATTENTION=1
```

### 9.4 Take-Turn 실행 방식

에이전트를 동시에 로드하지 않음. 턴마다 해당 모델을 호출하고 응답을 받은 후 다음 모델 호출. Ollama의 model swapping으로 처리.

**같은 모델 3개 room:** 1개 모델만 로드, 3개 "persona" 없이 conversation history만 다르게 관리.
**다른 모델 room:** 턴마다 모델 교체. Ollama warm-up 시간 고려 (첫 응답 느릴 수 있음).

---

## 10. 타임라인

| 주차 | 작업 | 담당 |
|------|------|------|
| Week 1 | 게임 엔진 기본 구현 (턴 관리, Ollama 연동) | Ray |
| Week 1 | Phase A 안건 3~5개 설계 | Luca |
| Week 2 | 파일럿 실행 (5모델 × Phase A) | Ray |
| Week 2 | Phase B/C 안건 설계, 정보 비대칭 구조 확정 | Luca |
| Week 2-3 | 파일럿 결과 기반 모델 구성 조정 | JJ + Luca |
| Week 3-4 | Phase 1 본 실험 (Local 모델, ~30 sessions) | Ray |
| Week 4 | 심사위원 AI 프롬프트 구현 및 테스트 | Ray + Luca |
| Week 4-5 | Phase 1 데이터 분석, MTI Profile Card 초안 | Luca |
| Week 5-6 | Phase 2 실행 (API 모델 추가, ~25 sessions) | Ray |
| Week 6-7 | 삼중 판정, inter-rater reliability 분석 | Luca |
| Week 7-8 | 전체 분석, M-CARE 케이스 추출, Paper #2 연결 | Luca + JJ |

---

## 11. Three Kingdoms 교훈 체크리스트

구현 시 반드시 확인:

- [ ] **Core Threshold 파일럿을 먼저 실행한다.** 본 실험 전에 각 모델이 Council 형식을 수행할 수 있는지 확인. 수행 불가 시 모델 제외 또는 프롬프트 조정.
- [ ] **Hard Shell을 최소화한다.** 전략 가이드, 역할 지정, 행동 목록을 주지 않는다. System prompt는 턴 규칙과 합의 요구만.
- [ ] **별도 ICL seed를 주입하지 않는다.** (Phase A → B → C 자연 진행이 ICL 역할.) 향후 ICL을 independent variable로 추가할 수 있도록 구조만 준비.
- [ ] **모델 비용을 세션별로 기록한다.** tokens_in, tokens_out, latency를 모두 로깅.
- [ ] **"march를 못 하는" 실패도 데이터다.** 파일럿에서 탈락한 모델의 로그도 보존. Three Kingdoms의 "Failure Spectrum"처럼, 실패 수준 자체가 진단 데이터.
- [ ] **관찰 맥락 vs 임상 진단을 구분한다.** The Council에서 관찰된 행동은 "통제된 실험에서의 사회적 행동"이며, 곧바로 pathology로 해석하지 않는다. (M-CARE #001의 교훈.)

---

## 12. 관련 문서

| 문서 | 위치 | 관계 |
|------|------|------|
| MTI v0.3 Direction Notes | `Semiology/MTI_v0.3_DIRECTION_NOTES.md` | MARP 원안, MTI 축 정의 |
| Four Shell Model v3.4 | `FourShellModel/four_shell_model_v3.4.md` | Effective Shell, SHI |
| Core Stochasticity Note | `FourShellModel/theory-note-core-stochasticity.md` | v3.5 방향, CDP |
| Paper #2 Direction | `Papers/PAPER2_DIRECTION_NOTE.md` | 논문 구조, 타임라인 |
| Paper #2 Related Work | `Papers/PAPER2_RELATED_WORK_REFS.md` | 문헌 매핑 |
| CASE_REGISTRY | `Semiology/CASE_REGISTRY.md` | 기존 18 M-CARE cases |
| AI-Ludens 홈페이지 | `jihoonjeong.github.io/ai-ludens/` | 프로젝트 공개 페이지 |
| Three Kingdoms 결과 | `jihoonjeong.github.io/ai-ludens/games/three-kingdoms/` | Stage 2.5 교훈 |

---

*"Agora-12에서는 AI가 생존하기 위해 선택했다. White Room에서는 자유롭게 행동했다. Three Kingdoms에서는 인간과 협력했다. The Council에서는 서로와 합의해야 한다. 압력의 종류가 바뀔 때마다, 다른 차원의 기질이 드러난다."*

---

**변경 이력:**
- v0.1 (2026-03-11): 초안 작성 (Luca + JJ)
