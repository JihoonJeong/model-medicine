# Model Medicine — Research Backlog & Future Publication Notes

**Created:** 2026-03-22
**Purpose:** Paper #2 이후 연구 방향, 미사용 데이터, 후속 논문 소재 정리.
**업데이트:** 새로운 발견이나 실험 결과가 나올 때마다 추가.

---

## 0. Paper #2 데이터 프리즈 (2026-03-22 확정)

**경계선:** SIBO는 "쉘이 행동을 바꾼다" 까지가 Paper #2. "바꾸는 걸 어떻게 최적화하는가"는 Paper #3.

**Paper #2에 들어가는 데이터 (확정):**
- SIBO Spectrum 5게임 (Trust Game 0.75 → Chess 0.10)
- SIBO Attenuation 원리 (행동 공간 × 도메인 전문성 × temporal directness)
- Cross-model 검증 (Exp B/C/D)
- Trust Game SLM 결과 (cooperative prior 부분 기각 — Section 5.4 업데이트 완료)
- M-CARE 20개 케이스 + nosology 5카테고리
- Cross-source validation (4개 소스)
- Within-family evaluation bias (Discussion에 한계로 반영 완료)

**Paper #2에 안 들어가는 것 (→ Paper #3 또는 미래):**
- Shell Engineering 3-Phase 결과 (포커/아발론/Codenames)
- Parametric Directness / Correction Opportunity 개념
- LLM-Guided Evolution
- Shell Trainer Agent
- SIBO 가설 반전 (Codenames SIBO 0.35인데 Shell > no-shell)
- Rule bot 결과
- Ray의 나머지 SLM 실험 (base vs instruct 등)
- Cross-Company 매트릭스 상세 (LxM 논문 소재)
- Avalon Mixed Team 반전 (LxM 논문 소재)
- Cross-Shell 토너먼트 상세 (LxM 논문 소재)

**새 실험 결과가 나오더라도 Paper #2에는 추가하지 않음. Discussion future work에서 언급만.**

---

## 1. 후속 논문 후보

### Paper #3: Model Temperament Index (MTI)
- MTI v0.3 설계 + 파일럿 검증
- 4축: Reactivity, Compliance, Sociality, Resilience
- Examination Protocol + 다양한 모델 population에서 normative range 확립
- Paper #2에서 "deferred to a dedicated publication"으로 언급

### LxM Platform Paper
- LxM 플랫폼 아키텍처, 6개 게임 엔진, CLI adapter 구조
- Cross-company 매트릭스 데이터 (Claude vs Gemini vs GPT-5.4)
- 논문 핵심 주장 5개 후보 (아래 Section 2 참조)
- 플랫폼 자체의 연구 도구로서의 가치 주장

### Model Public Health Paper
- M-EPI, M-ECO, M-COEVO 실증 관찰
- Moltbook + LxM 데이터 매핑
- 초기 관찰 노트: `/model-medicine/Semiology/M-EPI-observation-notes.md`

---

## 2. LxM Cross-Company 데이터 (Paper #2 미사용)

**Source:** `/ludus-ex-machina/drafts/luca_update_20260322.md`

### 2.1 "No Universal Winner" — 게임 유형별 승자 전환
| Game | Winner | Margin |
|------|--------|--------|
| Chess | Gemini 20-0 | 전 tier 전패 |
| Poker | Claude 8-4 | Sonnet > Opus |
| Codenames | Gemini 55-60% | Claude 35% |
| Trust Game | Draw | 전원 협력 |
| Avalon | 조건부 (아래 참조) | — |

**사용처:** LxM 논문 핵심 주장 #1. "어떤 모델이 최고냐"는 질문이 의미 없음을 실증.

### 2.2 "Behavioral Signatures > Model Size"
- Opus ≠ Sonnet 차이 < Claude ≠ Gemini 차이
- Codenames: Opus와 Sonnet 동일하게 35% (모델 크기 무효)
- Poker: Sonnet(5-1) > Opus(3-3) — 작은 모델이 더 강함
- Chess: Haiku 3무 vs Opus/Sonnet 1무 — 가장 작은 모델이 가장 잘 버팀

**사용처:** LxM 논문 핵심 주장 #2. Model size ≠ behavioral competence.

### 2.3 "Cooperation vs Deception Asymmetry" (Avalon Mixed Team 반전)
- 동일 모델: Evil 60% 승
- 혼합 모델: Good 65% 승 — 완전 반전
- Claude Good 83%, Evil 25%
- 메커니즘: Evil은 2인 조율 필수 → 다른 모델끼리 조율 실패. Good은 각자 탐지만 하면 됨.

**사용처:** LxM 논문 핵심 주장 #3 + M-ECO 관찰 노트 추가. Multi-model ecosystem에서의 coordination failure. "협력은 조율 없이 작동, 기만은 조율 필수" — 생태학적 원리.

### 2.4 "Within-Family Comparison is Insufficient"
- Chess: 가족 내 89% 무승부 → cross-company 0-20 전패
- Codenames: 가족 내 Opus 70% 최강 → cross-company 35% 최약

**사용처:** Paper #2 Discussion에 한계로 이미 반영 (Section 7.2). LxM 논문에서 핵심 주장 #5로 확장.

### 2.5 Avalon Shell Competition (Setup C)
- 3×3 전략 상성: Deep Cover(73%) > Aggressive(33%) > Framer(20%)
- 0%~100% 승률 스윙 — Shell 문서 하나로 결과 완전 반전
- Paranoid(Good)은 27%로 자멸적 — 과도한 reject이 Evil을 도움
- 만능 전략 없음: Deep Cover도 Detective/Trust Builder에 40% 짐

**사용처:** LxM 논문 — "AI coaching esports" 비전의 첫 실증. 메타게임 성립 증거.

---

## 3. 추가 연구 필요 항목

### 3.1 GPT-5.4 3사 비교 완성
- 현재 Codenames만 데이터 있음 (rate limit)
- 3/25 이후 재테스트 예정
- 완성되면 2사 → 3사 비교로 "No Universal Winner" 주장 강화

### 3.2 SIBO Production Context 검증
- 현재 5개 게임(Trust/Poker/Avalon/Codenames/Chess)은 게임 환경
- Production context (customer service, code generation, medical consultation)에서 SIBO 동일하게 작동하는지 미검증
- Paper #2 Section 7.2에 limitation으로 명시

### 3.3 Cooperative Prior — SLM 결과 반영 + Base vs Instruct 비교
- **완료:** Mistral 7B(100%), EXAONE 3.5 8B(100%)이 클라우드 모델과 동일하게 협력 → RLHF 강도에 비례하지 않음
- **완료:** Llama 3.1 8B(52.8%)는 협력 성향 약함 → 협력이 모델 일반이 아닌 모델 특이적
- **부분 기각:** "RLHF cooperative prior" → "cooperative prior (RLHF만의 결과 아님, 모델 특이적)"
- **Paper #2 Section 5.4 업데이트 완료** — SLM 데이터 테이블 + 3가지 결론 + SIBO 연결
- **다음:** Ray가 Llama 3.1 base vs instruct 비교 예정. 같은 모델의 base(순수 pretrain)와 instruct(RLHF 적용) 비교 → RLHF 효과 단일 변수 분리
- **추가 질문:** Llama의 낮은 협력은 Meta의 RLHF 방법론 차이인가, base model 특성인가, 훈련 데이터 차이인가? base vs instruct 비교로 일부 분리 가능
- **SIBO 예측:** 협력 prior가 약한 모델(Llama)은 SIBO Index가 더 낮을 수 있음 — override할 prior가 약하니까. 추가 실험 필요

### 3.4 Temporal Directness 정량화
- Poker 데이터에서 발견된 세 번째 SIBO attenuation 변수
- 현재는 질적 관찰 수준. 정량적 측정 방법 필요.
- 후보 metric: "Shell 지시와 행동 실행 사이의 평균 턴 수" 또는 "Shell 지시가 즉시 적용 가능한 행동의 비율"

### 3.5 The Council 실험 (AI-Ludens Stage 3)
- SPEC: `/model-medicine/SPEC_the_council_v0.1.md`
- Multi-agent deliberation game, MTI v0.3 4축 측정용
- MTI 논문 (Paper #3)의 실증 데이터 소스

### 3.6 Neural MRI + M-CARE 통합
- Paper #1의 Neural MRI + Paper #2의 M-CARE 결합
- Haiku에 대해 Neural MRI 스캔 + M-CARE #012/#020 행동 데이터 → multi-layer 진단
- Paper #2 Section 7.4에 future direction으로 명시

### 3.7 Georg Fuellen 지적사항
- Benchmark contamination: 모델이 Model Medicine 논문을 학습하면 진단 프레임워크 자체가 오염
- "Capital of France" 예시 오염: interpretability 문헌에서 가장 많이 쓰이는 프롬프트 → 훈련 데이터에 이미 존재
- DNA 문장 수정: V(D)J recombination 예외 반영 (Paper #1 다음 리비전)
- Online Model Clinic 개념: 모델이 자기 건강 정보를 학습하면 자가진단 요청 가능?

---

## 4. Medium 에세이 시리즈

### 에세이 #1: Agent Anatomy (초고 완료, v0.3)
- Four Shell을 이름 없이 소개
- Claude Code vs OpenClaw 대비

### 에세이 #2: Agent Architecture (차기)
- 에이전트 아키텍처 유형 분류

### 에세이 #3: OS for Agents (후속)
- 에이전트 운영체제 개념

### 에세이 #4+ : Multi-agent experiments
- LxM 실험 결과를 대중적으로 소개
- "AI가 게임을 하면 무슨 일이 벌어지는가"

---

## 5. Model Medicine Essay Series (기발표/작성 중)

### Essay #1: "When AI Hides Its Thoughts" (발표됨)
- https://medium.com/@hiconcep/when-ai-hides-its-thoughts-what-medicine-knew-all-along-a14ccfc36992

### Essay #2: "When We Almost Diagnosed an AI with a Disease It Didn't Have" (리뷰 대기)

### Essay #3: "Your AI Model Is a Patient" (다음)

---

*이 문서는 연구 백로그로, 새 발견/데이터가 올 때마다 업데이트.*
