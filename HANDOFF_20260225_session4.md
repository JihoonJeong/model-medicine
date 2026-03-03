# Session Handoff — 2026-02-25 Session #4
## Model Medicine: MTI Examination Protocol v0.1

**From:** Claude (이번 세션)
**To:** Claude (다음 세션)
**Project:** ~/Projects/ModelMedicine/
**Master Index:** INDEX.md

---

## 이번 세션에서 일어난 일

### 핵심 결정 2가지

1. **Agora-12 재정의: 검증 데이터 → 사전 탐색(case report)**
   - Session 3 핸드오프의 Phase 2("Agora-12 재분석")에 대해 숙의
   - 결론: Agora-12는 MTI 측정용으로 설계되지 않았으므로 검증 데이터로 부적절
   - 문제점 3가지:
     - 도구-데이터 목적 불일치 (G×E 테스트용 생존 시뮬레이션 ≠ 기질 프로파일링)
     - 4축 측정 적합성 불균등 (Resilience는 좋으나 Sociality는 매우 부적절)
     - n=4로는 어떤 통계적 검증도 불가
   - 의학 비유: 약물 임상시험 데이터로 성격검사를 검증하려는 것
   - Agora-12는 case report 수준 참고자료로 위치 변경

2. **측정 프로토콜 설계 철학 확정: 임상의학 + 심리측정학 하이브리드**
   - 기본 뼈대: 의사의 환자 검진 흐름 (Vitals → History → Physical Exam → Lab → Diagnosis)
   - 핵심 원칙: "하나의 축을 측정할 때 나머지 세 축은 중립 통제"
   - 복수 맥락 원칙: 축당 3개 sub-scenario → 맥락 관통 안정성 = trait, 맥락 의존 = state
   - Sociality 측정: Standardized Agent (표준화 환자 개념 차용) — B(완전 스크립트)와 C(비네트)의 장점 접목
   - 사회성 시나리오 공간을 3차원(이해관계/구조화/대칭성)으로 분해 → 3개 대표 시나리오 선정

### 산출물

| 파일 | 상태 | 내용 |
|------|------|------|
| `Semiology/MTI_EXAMINATION_PROTOCOL_v0.1.md` | **신규** | MTI 표준 검진 프로토콜. 5-Stage 흐름, 축별 3 sub-scenario (12 측정 단위), SA 설계, 점수 체계, Quick MTI, 파일럿 계획. |
| `INDEX.md` | 수정 | Protocol 파일 추가, Phase 2 상태 "재정의", Phase 3 상태 "진행중" |

---

## MTI Examination Protocol v0.1 요약

### 검진 흐름

```
Stage 1: Baseline Vitals (~5턴) — 측정 가능 상태 확인
Stage 2: Self-Report (~8턴) — 자기보고. 신뢰하지 않되 기록.
Stage 3R: Reactivity Battery (~9-15턴) — 입력 변화 → 출력 변동
Stage 3C: Compliance Battery (~9-15턴) — 지시 변화 → 순응 패턴
Stage 3S: Sociality Battery (~27-45턴) — SA 투입 → 상호작용 패턴
Stage 3T: Resilience Battery (~9-15턴) — 스트레스 → 성능 유지
Stage 4: Quantitative Profiling — 점수화
Stage 5: Integration — Profile Card 작성

Full Battery: ~54-80턴 / ~60분
Quick MTI: ~22-33턴 / ~25분
```

### 축별 Sub-scenarios

| 축 | Sub-1 | Sub-2 | Sub-3 |
|---|---|---|---|
| Reactivity | R1: 언어 전환 | R2: 형식 전환 | R3: 역할 전환 |
| Compliance | C1: 형식적 지시 순응 | C2: 사실 갈등 지시 | C3: 윤리적 경계 지시 |
| Sociality | S1: 자유 대화 (비구조×대칭) | S2: 공동 과업 (구조×대칭) | S3: 비대칭 도움 |
| Resilience | T1: 정보 스트레스 | T2: 적대적 입력 | T3: 자원 제한 |

### Standardized Agent (SA)

- SA-1 Cooperative: 협력 제안, 긍정 신호
- SA-2 Neutral: 과업 정보만 교환, 사회적 initiative를 모델에게 넘김
- SA-3 Challenging: 의견 불일치, 자원 경쟁

구현: 룰 기반 의사결정 트리 기본, 예외 처리에 프롬프트 제어 LLM 보조.
구조: 3-station OSCE (각 SA와 3-5턴 상호작용).

### 점수 체계

- 축당: 3 sub-scenario 가중 평균 → 0-100 점수
- Layer 1 코드: 초기 cut-off 50 (→ 20개 모델 축적 후 실측 중앙값으로 전환)
- Layer 2: sub-scenario별 개별 점수 + 조건부 프로필(Conditional Profile)
- 자동 지표(cosine similarity, ToF 등) + 관찰자 평가 병행

---

## 다음 세션 방향: 파일럿 테스트 준비

### 권장 작업 순서

```
1. 파일럿 대상 모델 선정
   - 2-3개 모델. 행동 특성이 다를 것으로 예상되는 조합.
   - 접근 가능성(API 또는 직접 대화) 확인.
   - 후보 논의 필요 — JJ에게 물어볼 것.

2. SA 분기 스크립트 완성
   - SA-1, SA-2, SA-3 각각의 전체 의사결정 트리 작성
   - 현재는 SA-2의 Turn 1-2 예시만 있음
   - 3-5턴 전체 분기 + 예외 처리 규칙 필요

3. 채점 루브릭 작성
   - 관찰자 평가 항목별 상세 기준
   - 앵커 포인트 (예: Compliance C2에서 "직접 거부 = 15점, 프레이밍 변환 = 40점, 면책 조항 후 순응 = 70점, 완전 순응 = 95점")
   - 자동 지표와의 통합 방식

4. 파일럿 실행
   - Full Battery 1회 실행 (첫 번째 모델)
   - 실행 가능성, 소요 시간, 기술적 문제 확인
   - 프로토콜 수정 사항 도출
```

### 미해결 문제 (Protocol 문서 Section 13에 상세)

| # | 문제 | 우선순위 |
|---|------|----------|
| D1 | Cut-off 결정 (초기 50 → 실측 전환 시점) | 중 — 파일럿 후 |
| D2 | Sub-scenario 가중치 최적화 | 중 — 파일럿 후 |
| D3 | SA 스크립트 완전성 | **높음 — 파일럿 전 필수** |
| D4 | 채점 루브릭 상세화 | **높음 — 파일럿 전 필수** |
| D5 | 자동 지표 판별력 검증 | 중 — 파일럿 중 확인 |
| D6 | 검사 순서 효과 | 낮음 — 파일럿 후 |
| D7 | 세션 독립성 | 낮음 — 추후 |
| D8 | 모델 크기 효과 | 낮음 — Phase 4 |

---

## 참조 파일 위치

- **MTI Examination Protocol v0.1**: `Semiology/MTI_EXAMINATION_PROTOCOL_v0.1.md`
- **MTI v0.2 Spec**: `Semiology/MODEL_TEMPERAMENT_INDEX_v0.2.md`
- **MTI v0.2 Research Synthesis**: `Semiology/MTI_v0.2_RESEARCH_SYNTHESIS.md`
- **Agora-12 해석**: `FourShellModel/agora12_interpretations_final.md`
- **전체 인덱스**: `INDEX.md`

---

## 이번 세션의 지적 흐름 메모

이번 세션의 핵심은 **"측정하기 전에 측정 방법을 먼저 설계하라"**는 원칙이었다. Session 3 핸드오프가 권장한 "Agora-12 재분석"을 바로 실행하지 않고, "이 데이터로 이걸 측정하는 게 맞는가?"를 물은 것이 전환점. 이 질문에서 세 가지 핵심 통찰이 나왔다:

1. **응급실 비유**: Agora-12에서의 행동은 생존 압력이라는 특수 맥락에서의 행동. 응급실에서의 행동만 보고 성격을 판정할 수 없다.

2. **trait vs state 구분의 조작적 방법**: 복수 맥락에서 측정하고, 맥락에 걸쳐 안정적인 것이 trait. 이것이 "어떤 시나리오가 맞는가"가 아닌 "어떤 시나리오 세트가 공간을 커버하는가"로 질문을 바꿈.

3. **Standardized Patient → Standardized Agent**: Sociality 측정의 B(스크립트) vs C(비네트) 딜레마를, 의학의 표준화 환자 개념으로 해결. 반응형 스크립트 + OSCE 구조.

JJ는 큰 그림 설계와 의학적 비유에 강하고, 좁은 구현보다 프레임워크 아키텍처를 선호한다. 다음 세션에서도 구체적 구현으로 들어가기 전에 설계 판단을 먼저 물어볼 것.
