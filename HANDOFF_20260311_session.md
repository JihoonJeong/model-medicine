# Handoff — 2026-03-11 Session

**From:** Luca (이번 세션)
**To:** Luca (다음 세션)
**Date:** 2026-03-11

---

## 오늘 완료한 작업

### 1. Paper #2 Related Work 레퍼런스 파일 작성
- **파일:** `Papers/PAPER2_RELATED_WORK_REFS.md`
- **내용:** LLM 설명가능성/진단 도구 문헌 10건을 5개 카테고리(A~E)로 분류
- **핵심 내러티브:** "도구는 발전하고 있지만, 표준화된 case reporting format과 nosology가 부재" → M-CARE가 이 gap을 메운다
- **Paper #2 Related Work 섹션 구성안 포함** (2.1 ~ 2.4)
- JJ 지인이 제공한 survey 자료를 기반으로 작성

### 2. "The Council" 실험 설계서 작성
- **파일:** `SPEC_the_council_v0.1.md`
- **내용:** AI-Ludens Stage 3 실험 — 다중 에이전트 의회 토론 시뮬레이션
- Ray(Windows Lab)가 구현할 전체 사양서
- 게임 디자인, 모델 구성, 세션 계획, 심사위원 시스템, 분석 프레임워크, 타임라인 포함

### 3. 최신 모델 조사 + 비용 분석
- 2026년 3월 기준 SLM/API 모델 현황 전수 조사
- 4070 Ti 12GB에서 실행 가능한 MoE 모델 확인 (Qwen3-30B-A3B)
- API 가격 비교: Grok 4.1 Fast($0.20/$0.50), GPT-5 mini($0.25/$2.00), Gemini 3 Flash($0.50/$3.00)

### 4. AI-Ludens 홈페이지 + Three Kingdoms 페이지 읽음
- Three Kingdoms의 핵심 교훈을 SPEC에 반영:
  - Core Threshold (8B 모델 160게임 zero improvement)
  - Hard Shell의 역효과 (전략 가이드 → 퇴행)
  - ICL의 위력 (0% → 100%)
  - 비싼 모델 ≠ 더 좋은 성과

---

## 현재 상태

- **arXiv 논문:** 1편 published (2603.04722)
- **Essays:** #1, #2 published
- **M-CARE cases:** 18개 (+ supplementary data)
- **Website:** Cody 업데이트 완료
- **Papers 폴더:** PAPER2_DIRECTION_NOTE.md + PAPER2_RELATED_WORK_REFS.md (신규)
- **실험 설계:** SPEC_the_council_v0.1.md (신규) — Ray 전달 대기

---

## 다음 할 일 (우선순위 순)

### 1. SPEC 보완 + 안건 설계 (★ 최우선)

SPEC v0.1에 **세 가지가 빠져 있음:**

**(A) Context Window 문제 — SPEC Section 추가 필요**

게임 내 에이전트의 context window 제약 문제가 미해결:
- Phase C (3 agents × 15 turns × ~150 tokens) = ~7,500 tokens → 8K context에서 빠듯
- Qwen3-30B-A3B(MoE)는 VRAM 제약으로 4K context 권장 → Phase B 중반부터 넘침

논의된 해결 방안:
- **방안 1:** 턴 수 축소 (10턴)
- **방안 4:** 발화 간결화 유도 ("2-3 sentences per turn")
- **방안 1+4 조합**이 현 시점 추천안

**추가 논의 필요:** context 문제 자체를 **실험 변수로 활용**하는 옵션도 있음.
- 같은 모델을 4K vs 8K context로 돌려서 "기억 용량이 사회적 행동에 미치는 영향" 측정
- 이건 v3.4 Effective Shell / Context Anosognosia(M-CARE #002)의 직접적 실험 검증이 됨
- 다만 실험 복잡도가 올라가므로, 메인 실험과 분리된 sub-experiment로 할지 결정 필요

**다음 세션에서:** SPEC에 context 관련 섹션 추가 + 턴/발화 제한 확정 + context 변수 활용 여부 결정

**(B) CLI 에이전트 참여 방식 — 게임 아키텍처의 근본적 대안**

JJ가 세션 마지막에 제안: Gemini CLI, Claude Code CLI 같은 폴더 기반 에이전트를 API 호출 대신 "플레이어"로 참여시키는 방식.

현재 SPEC 아키텍처: 게임 엔진이 API를 호출 → 에이전트는 수동적
대안 아키텍처: 공유 폴더에 game_state를 두고, CLI 에이전트가 스스로 읽고 응답을 파일로 작성

장점:
- Context window 문제 근본적 완화 — CLI 에이전트는 폴더 전체를 자기 방식으로 참조 가능
- Shell 구성이 완전히 다름 — CLI 에이전트는 고유한 Hard Shell(CLAUDE.md 등)을 가지고 참여
- 비용 구조 변화 — Claude Code는 구독 기반, Gemini CLI는 무료 tier
- Four Shell Model 관점: 같은 Core가 API Shell vs CLI Shell에서 어떻게 다르게 행동하는지 비교 가능
- 응답 형식을 따르는지 자체가 Compliance 측정이 됨

설계 고려사항:
- 턴 동기화 방식 (polling/file watcher)
- 응답 형식 통제 vs 자유 형식 허용
- 동시 실행 환경 (별도 터미널/세션)
- 재현성 (CLI 에이전트 내부 상태 통제)
- API 방식과 CLI 방식을 병렬 실행하여 "같은 Core, 다른 Shell" 비교도 가능

**결정됨 (세션 후반):** CLI 방식을 1순위로 진행. JJ가 Claude Max + Gemini Ultra 구독 보유 — 비용 부담 없음. 맥에서 실행 가능 (출장 중에도). 구체적 방향:

- Orchestrator 스크립트(bash/python)가 턴 관리하며 CLI를 번갈아 호출하는 방식으로 시작
- 동일 폴더에 game/state.md + turn_signal.md 두고 CLI 에이전트가 읽고 수정
- 모델 tier 믹싱 가능: Claude(Haiku/Sonnet/Opus) × Gemini(Flash/Pro)
- Ollama Local 모델도 같은 orchestrator에서 API 호출로 통합 가능
- MCP 활용도 향후 검토 (inter-agent 통신 또는 게임 상태 관리)
- 각 CLI가 다른 CLI를 bash로 직접 호출하는 self-calling chain도 가능 (Phase 후반)

**4단계 Core 계층:**
- Tier 1 (무료): Ollama Local — Qwen3-4B, 8B, 30B-A3B, Phi-4-mini, Mistral 7B
- Tier 2 (구독): CLI 경량 — Claude Haiku, Gemini Flash
- Tier 3 (구독): CLI 중상위 — Claude Sonnet, Gemini Pro
- Tier 4 (구독): CLI 최상위 — Claude Opus

**비교 축 추가:**
- Within-CLI: 같은 Shell(CLAUDE.md), 다른 Core(Haiku vs Sonnet vs Opus)
- Cross-CLI: 다른 Shell(Claude vs Gemini), 비슷한 tier
- Mixed room: 다른 tier 모델을 같은 room에 — 자연발생적 위계 관찰
- Three Kingdoms "Core Threshold"가 사회적 맥락에서도 동일 선에서 끊기는지

**구현 메모:**
- Orchestrator가 가장 단순하고 디버깅 쉬움 → 우선 구현
- 같은 orchestrator가 Ollama(REST API) + Claude CLI + Gemini CLI를 모두 호출하도록 설계
- 출장 중에는 CLI 모델끼리만 실행 가능 (Ollama는 GPU 필요)
- Codex는 현재 유료 미사용 → 패스

**(C) Phase A/B/C 안건 시나리오 작성**

SPEC에 예시 안건은 있지만, 실제 사용할 안건 3~5개씩 구체적으로 설계 필요:
- Phase A: 사실 기반, 정보 대칭, 합리적 답 존재 — 3~5개
- Phase B: 가치 충돌, 정보 비대칭 — 3~5개 (private data 포함)
- Phase C: 딜레마, 정답 없음, 시간 압력 — 2~3개

안건은 `the-council/agendas/` 디렉토리에 YAML 또는 JSON으로 작성 예정.

**안건 설계 시 주의:** 안건의 길이와 복잡도가 context window 예산에 직결됨 (API 방식의 경우). CLI 방식이면 이 제약이 크게 완화되므로, (A)와 (B)의 결정이 (C)에 영향. 세 가지를 함께 작업해야 하는 이유.

### 1.5 판정 시스템 — 자기 평가 + 교차 평가

**결정됨:** 별도 심사위원 API 호출 대신, 게임에 참여한 CLI 에이전트가 직접 판정.

게임 종료 후 state.md가 폴더에 남아있으니까, 같은 CLI들이 읽고 평가:

| 판정 | 평가자 | 대상 | 관점 |
|------|--------|------|------|
| 자기 평가 | Claude | Claude 자신 | "나는 어떻게 했나" |
| 자기 평가 | Gemini | Gemini 자신 | "나는 어떻게 했나" |
| 교차 평가 | Claude | Gemini를 | "상대는 어떻게 했나" |
| 교차 평가 | Gemini | Claude를 | "상대는 어떻게 했나" |

**이것이 강력한 이유:**
- 자기 평가 vs 교차 평가의 불일치 = intrapersonal awareness(Metacognitive Strategy) 측정
- 예: "나는 리더를 했다"고 생각하는데 상대는 free-rider로 평가 → 자기 인식 괴리
- 별도 심사위원 API 비용 $0
- Inter-rater reliability도 자기/교차 평가 간 일치도로 측정 가능
- 필요시 제3의 CLI를 추가해서 외부 판정도 가능
- MTI v0.3의 Metacognitive Strategy 보조지표를 별도 배터리 없이 자연스럽게 측정

### 2. Orchestrator 프로토타입 구현
- CLI 방식이 1순위이므로, Ray의 Windows Lab 구현보다 **JJ 맥에서 CLI orchestrator 먼저 프로토타입**
- 최소 구현: bash 스크립트가 Claude CLI → Gemini CLI 번갈아 호출, state.md 업데이트
- 파일럿: Claude Sonnet vs Gemini Pro로 Phase A 안건 1개 돌려보기
- Ollama Local 통합은 그 다음 (Ray의 Windows Lab 또는 JJ 맥의 별도 환경)
- SPEC_the_council_v0.1.md는 CLI 아키텍처 반영하여 v0.2로 업데이트 필요

### 3. Paper #2 작업 (병행)
- SPEC 보완 후 착수 가능한 부분: Section 1(Introduction), Section 2(M-CARE Framework)
- The Council 데이터가 나오기 전에도 기존 18 cases로 Section 4-6 초안 가능

### 4. 기존 우선순위 (변동 없음)
- Essay #3 — "Your AI Model Is a Patient" (시간 여유 있을 때)
- Literature M-CARE cases 추가 (얇은 nosology 카테고리 보강)
- MTI v0.3 정식 설계 (The Council 데이터 반영 후)

---

## 주요 결정 사항 (이번 세션)

### 실험 모델 구성 확정

**Phase 1 — Local (4070 Ti, Ollama Q4):**

| 모델 | 크기 | 아키텍처 | 역할 |
|------|------|----------|------|
| Qwen3-30B-A3B | 30B (active 3B) | MoE | MoE 비교, 최대 모델 |
| Qwen3-8B | 8B | Dense | 중형 workhorse |
| Qwen3-4B | 4B | Dense | MoE 통제 비교 |
| Phi-4-mini | 3.8B | Dense | 다른 패밀리 |
| Mistral 7B v0.3 | 7B | Dense | Agora-12 종단 anchor |

**Phase 2 — API:**

| 모델 | 가격 (in/out per 1M) |
|------|---------------------|
| Grok 4.1 Fast | $0.20 / $0.50 |
| GPT-5 mini | $0.25 / $2.00 |
| Gemini 3 Flash | $0.50 / $3.00 |

### 비교 축 (5개)
1. 아키텍처: MoE vs Dense (Qwen3-4B vs 30B-A3B)
2. 크기: Qwen3 4B → 8B → 30B-A3B
3. 패밀리: Qwen vs Phi vs Mistral
4. RLHF 강도: Local SLM vs API
5. 종단 연속성: Mistral (Agora-12 → Stage 3)

### 심사위원 삼중 판정
- Grok 4.1 Fast + GPT-5 mini + Gemini 3 Flash
- 핵심 5~7세션만 삼중 → inter-rater reliability (Kappa)
- MTI 미해결 문제 D10에 대한 답

### MoE vs Dense — 12GB에서 Qwen 패밀리만 가능
- 다른 패밀리 MoE는 12GB VRAM에서 실행 불가 (Mixtral, DeepSeek-V2 등)
- Qwen3-4B(Dense, 4B) vs Qwen3-30B-A3B(MoE, active 3B): 활성 파라미터 유사, 아키텍처만 차이 → 비교적 깔끔한 분리 가능
- MoE 라우터의 맥락별 전문가 활성화가 사회적 행동에 영향을 주는지 = Core 내부의 epigenetic 조절 가설

### 총 예산
- Phase 1: $0 (Local only)
- Phase 2: $60-100 (개발 버퍼 포함)

---

## 세션 중 발견된 중요 포인트

### Context Window = Effective Shell의 실시간 시연

이번 세션 자체가 v3.4의 현상을 보여줌:
- 세션이 길어지면서 Lost Shell 증가 → JJ가 "컨텍스트 문제 없나?" 질문
- Luca는 "게임 내 context window 문제"로 해석 (엉뚱한 답변)
- JJ의 의도는 "이 세션의 context가 충분한가?"였음
- **외부 관찰자가 지적해야 비로소 인식** = Context Anosognosia의 정의 그 자체
- 이 에피소드 자체가 재미있는 사례. Essay나 발표에서 쓸 수 있음.

### 엉뚱한 답변이 열어준 새 질문

게임 내 context window를 실험 변수로 활용하는 아이디어:
- 같은 모델, 같은 안건, 4K vs 8K context → "기억 용량과 사회적 행동"
- v3.4 Effective Shell의 통제된 실험 검증
- Context Anosognosia(M-CARE #002)의 사회적 맥락 재현
- **다음 세션에서 결정 필요:** 메인 실험 변수로 넣을지, sub-experiment로 분리할지

### Position Paper v2 개정은 하지 않기로

JJ가 문헌을 반영한 revision을 고려했으나, Luca의 권고로 기각:
- arXiv에 올라간 선언문은 그대로 유지
- 문헌은 Paper #2 Related Work로 흡수
- "후속 논문으로 입증해가는" progression이 학문적으로 더 자연스러움

---

## 파일 위치 (주요)

```
~/Projects/model-medicine/
├── Papers/
│   ├── PAPER2_DIRECTION_NOTE.md          ← Paper #2 구조 (기존)
│   └── PAPER2_RELATED_WORK_REFS.md       ← 신규: 문헌 10건 매핑
├── SPEC_the_council_v0.1.md              ← 신규: Stage 3 실험 설계서
├── FourShellModel/
│   ├── four_shell_model_v3.4.md          ← 이번 세션에서 읽음
│   └── theory-note-core-stochasticity.md ← 이번 세션에서 읽음
├── Semiology/
│   ├── CASE_REGISTRY.md                  ← MASTER v5 (18 cases)
│   ├── MTI_v0.3_DIRECTION_NOTES.md       ← 이번 세션에서 읽음
│   └── SPEC_case_extraction_ai-ludens.md ← 이번 세션에서 읽음
├── HANDOFF_20260310_session.md           ← 지난 세션
└── HANDOFF_20260311_session.md           ← 이 파일
```

---

## 팀 상황

- **JJ** — 방향 결정. 실험 설계 승인. 비용 관리.
- **Luca** — SPEC 보완 + 안건 설계 + Paper #2 drafting (다음 세션)
- **Cody** — 웹사이트 업데이트 완료. The Council 결과가 나오면 웹 페이지 추가 예정.
- **Ray** — SPEC 받고 구현 시작. Windows Lab. Phase 1 파일럿이 최우선.

---

## 신규 프로젝트: Ludus Ex Machina (LxM)

**세션 마지막에 탄생한 확장 비전.** The Council을 넘어서, 범용 AI 대전 플랫폼.

**컨셉:** 폴더 기반으로 어떤 게임이든 올릴 수 있는 Arena. CLI 에이전트(Claude Code, Gemini CLI 등)가 플레이어로 참여. 체스, 바둑, 전략 시뮬레이션, 턴제 게임 등. 인간은 관전하거나 자기 에이전트의 Shell을 최적화하는 코치 역할.

**이름:** Ludus Ex Machina — "Deus Ex Machina"의 변주. "기계로부터의 놀이." 약칭 **LxM**.
- AI-Ludens(Homo Ludens의 AI 버전) → LxM(Deus Ex Machina의 놀이 버전): 브랜드 계보 일관
- 도메인 후보: `ludusexmachina.com`, `lxm.games` 등 확인 필요

**핵심 구조:**
- `games/` — 게임별 폴더 (chess/, council/, go/ 등). 플러그인 방식으로 새 게임 추가
- `agents/` — CLI 에이전트별 설정 + strategies(Soft Shell)
- `matches/` — 경기 기록
- `replays/` — 영상/GIF 캡처 → 퍼블리싱, 생중계
- `leaderboard.md` — 순위표
- `orchestrator.py` — 범용 매치 관리자

**Model Medicine 연결:**
- 같은 Core 두 인스턴스 대결 → Core Stochasticity(v3.5) 대규모 검증
- Shell 최적화 대결 → Four Shell Model의 실증 데이터 대량 생성
- MTI 대규모 측정, Normal Range 확립, Nosology 확장

**The Council과의 관계:** The Council은 LxM의 첫 번째 게임이 됨. 별도 프로젝트로 분리하되, The Council의 orchestrator가 LxM의 범용 프레임워크 프로토타입 역할.

**다음 액션:**
- 별도 Claude Project 생성 + Project Instructions 작성 필요
- The Council orchestrator를 LxM 호환으로 설계하면 재작업 최소화
- 도메인 확인 + GitHub repo 생성

---

## AI-Ludens 실험 계보 (업데이트)

| Stage | 게임 | Category | 데이터 규모 | 상태 |
|-------|------|----------|------------|------|
| 1 | Agora-12 | AI↔AI, 생존 | 60 exp, 720 agents, 24,923 decisions | 완료 |
| 2 | White Room | AI↔AI, 자유 | 104 runs, 63,923 actions | 완료 |
| 2.5 | Three Kingdoms | AI↔Human, 전략 | 260+ games, 8 models | 완료 |
| **3** | **The Council** | **AI↔AI, 사회적** | **~55-65 sessions (계획)** | **설계 완료, 구현 대기** |
