# Paper #2 Related Work References
# LLM Explainability & Multi-Agent Diagnostic Tools

**Created:** 2026-03-11
**Purpose:** Paper #2 Related Work 섹션 전용 레퍼런스 — M-CARE 논문에서 "현재 field의 gap"을 보여주는 데 활용
**Source:** 문헌 survey (2025-2026), JJ 지인 제공

---

## 핵심 내러티브

> 현재 LLM 진단 연구는 **도구 수준**에서 활발하다. 그러나 (1) 표준화된 case reporting format, (2) 질환 분류 체계(nosology), (3) 치료 연결 경로(therapeutic pathway)가 부재하다. M-CARE는 이 gap을 메운다.

---

## Category A: 설명가능성 내재 프레임워크 (Explainability-by-Design)

### A1. AgenticSimLaw — 구조화된 다중 에이전트 토론
- **Authors:** Jon Chun et al., 2026
- **내용:** 소년법 재범 예측을 위한 multi-agent debate framework. 검사/변호사/판사 역할 에이전트가 7단계 토론으로 결론 도출. 전 과정 감사 가능.
- **MM 매핑:** Model Diagnostics — Behavioral Testing 수준. 구조화된 관찰 프로토콜이지만, 케이스 리포팅 표준이나 질환 분류 없음.
- **Paper #2 활용:** "Domain-specific framework는 있지만, 범용 clinical reporting standard가 없다" → M-CARE 필요성

### A2. 계층적 에이전트 성찰 (Hierarchical Agent Reflection)
- **Authors:** Xinda Wang et al., 2026
- **내용:** LLM 추론 과정을 인간 전문가 진단 프로세스에 정렬하는 hierarchical reflection 방법
- **MM 매핑:** Model Physiology — 동적 추론 과정 구조화. 우리의 Five Diagnostic Layers 중 Layer 2 (Process Analysis)와 유사한 시도.
- **Paper #2 활용:** "추론 정렬 시도는 있지만, 이상 발견 시 standardized reporting으로 이어지지 않음"

### A3. 선언적 에이전트 워크플로우 언어
- **Authors:** Ivan Daunis et al., 2025
- **내용:** 에이전트 워크플로우를 프로그래밍 환경에서 분리하는 선언적 시스템. 제어 흐름/데이터/도구 사용 로직 명확화.
- **MM 매핑:** Model Anatomy — 정적 구조 기술. 감사 용이성은 높지만, 동적 행동 이상 진단과는 거리.
- **Paper #2 활용:** 배경 문헌 (diagnostic infrastructure의 일부)

---

## Category B: 내부 추론 과정 진단 메커니즘 (Reasoning Diagnostics)

### B1. Think-Augmented Function Calling
- **Authors:** Lei Wei et al., 2026
- **내용:** LLM 에이전트의 함수 호출 시 개별 파라미터 수준에서 명시적 추론 단계 삽입. 기존 CoT의 agent-level → parameter-level 세분화.
- **MM 매핑:** Neural MRI의 fMRI(functional Model RI)와 동일 층위 — activation pattern의 세분화된 추적. 우리의 intrinsic symptom 관찰 도구.
- **Paper #2 활용:** "진단 도구의 해상도는 높아지고 있지만, 발견된 이상을 분류하고 보고하는 체계가 없다"

### B2. LLM-Agent+ / Reasoning Trace Compression (RTC)
- **Authors:** Amjad Alloush et al., 2025
- **내용:** CoT 추론 엔진 + 추론 추적 압축. 핵심 추론 경로 보존하면서 효율성 확보.
- **MM 매핑:** DTI(Data Tractography Imaging)와 직접 대응 — information flow pathway 추적 및 요약.
- **Paper #2 활용:** "추론 경로 추적은 가능하지만, 경로 이상(anomaly)의 분류 체계가 없다" → nosology 필요성

### B3. 자연어 기반 결함 설명
- **Authors:** Xian Yeow Lee et al., 2025
- **내용:** 산업 시스템 결함 진단 시 자연어 추론으로 설명 가능한 결과물 생성. 결정과 신뢰도 해석 가능.
- **MM 매핑:** Model Semiology의 extrinsic symptom 영역 — 관찰 가능한 행동 이상의 기술.
- **Paper #2 활용:** 배경 문헌 (자연어 증상 기술의 사례)

---

## Category C: 평가 및 벤치마크 (Evaluation & Benchmarks)

### C1. VivaBench — 시뮬레이션 기반 임상 추론 평가
- **Authors:** Chiu, Christopher et al., 2025
- **내용:** 의학 구술시험(Viva Voce) 시뮬레이션으로 LLM 임상 추론 평가. Multi-turn 순차적 가설 검증.
- **MM 매핑:** Model Diagnostics — Behavioral Testing. "Static snapshot misses the most clinically relevant information" 원칙을 이 팀도 인식. 동적/다단계 평가의 필요성 공유.
- **Paper #2 활용:** **핵심 레퍼런스** — "동적 평가의 필요성은 인식되고 있으나, 발견된 이상에 대한 표준 보고 체계가 없다"

### C2. EH-Benchmark — 의료 환각 진단
- **Authors:** Xiaoduo Pan et al., 2025
- **내용:** 안과 LLM 환각 평가 벤치마크. Agent-based top-down traceable reasoning workflow로 환각 원인 추적.
- **MM 매핑:** Model Nosology — hallucination subtyping의 domain-specific 시도. 우리의 hallucination 하위분류(retrieval failure, confabulation, context overflow)와 같은 방향이지만, 범용 분류 없이 안과 특화.
- **Paper #2 활용:** **핵심 레퍼런스** — "질환별 벤치마크는 있지만, 통합 nosology가 없다. 각 domain이 독자적으로 분류를 만들고 있다."

---

## Category D: 자기 진단 신호 (Self-Diagnostic Signals)

### D1. Agentic Confidence Calibration
- **Authors:** Jiaxin Zhang et al., 2026
- **내용:** LLM 에이전트의 과잉 자신감 보정. 실패에도 불구한 과도한 confidence가 고위험 배포의 걸림돌.
- **MM 매핑:** Model Semiology — **intrinsic symptom** 개념과 정확히 일치. 보정된 confidence score가 진단 신호로 기능. M-CARE #004(Clarification Aversion Syndrome)의 자신감 과잉과도 연결.
- **Paper #2 활용:** **핵심 레퍼런스** — "진단 신호는 포착하지만, 이를 질환 분류(nosology)로 연결하는 체계가 없다"

---

## Category E: 종합 서베이

### E1. LLM 에이전트 신뢰성 종합
- **Authors:** Jithesh Yemi Reddy et al., 2025
- **내용:** LLM 다중 에이전트 시스템의 불투명성 감소와 신뢰성 향상에 대한 종합적 조망
- **MM 매핑:** Model Medicine 전체 학문의 배경 — 현재 field의 방향성 요약
- **Paper #2 활용:** Introduction에서 field overview로 인용

---

## Paper #2 Related Work 섹션 구성 제안

```
2. Related Work
  2.1 Explainability and Diagnostic Tools for LLM Systems
      — A1, A2, A3, B1, B2, B3 → "도구는 발전하고 있다"
  2.2 Evaluation Benchmarks and Self-Diagnostic Signals
      — C1, C2, D1 → "평가도 정교해지고 있다"
  2.3 The Missing Layer: Standardized Case Reporting and Nosology
      — 위 모든 문헌의 공통 gap 지적 → M-CARE 도입
  2.4 Clinical Medicine Precedents
      — CARE Guidelines (Gagnier et al., 2013), DSM/ICD 발전사
      — 기존 PAPER2_DIRECTION_NOTE.md의 의학 레퍼런스 활용
```

---

## 기존 문헌과의 관계

- `LITERATURE_CASE_CANDIDATES.md` → M-CARE 케이스 추출용 (31건)
- **이 파일** → Paper #2 Related Work 논증용 (10건)
- 역할이 다름: 전자는 "사례 소스", 후자는 "field의 gap을 보여주는 evidence"

---

## 원문 출처 (검색/확인용 키워드)

| ID | 저자 | 연도 | 핵심 키워드 |
|----|------|------|------------|
| A1 | Jon Chun et al. | 2026 | AgenticSimLaw, juvenile recidivism, multi-agent debate |
| A2 | Xinda Wang et al. | 2026 | hierarchical agent reflection, clinical reasoning |
| A3 | Ivan Daunis et al. | 2025 | declarative agent workflow, auditable |
| B1 | Lei Wei et al. | 2026 | think-augmented function calling, parameter-level CoT |
| B2 | Amjad Alloush et al. | 2025 | LLM-Agent+, reasoning trace compression |
| B3 | Xian Yeow Lee et al. | 2025 | NL fault diagnosis, industrial systems |
| C1 | Chiu, Christopher et al. | 2025 | VivaBench, viva voce simulation |
| C2 | Xiaoduo Pan et al. | 2025 | EH-Benchmark, ophthalmic hallucination |
| D1 | Jiaxin Zhang et al. | 2026 | agentic confidence calibration |
| E1 | Jithesh Yemi Reddy et al. | 2025 | multi-agent trustworthiness survey |
