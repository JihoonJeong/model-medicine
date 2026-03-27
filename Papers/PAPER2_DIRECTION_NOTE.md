# Paper #2 Direction Note: M-CARE Framework and Clinical Case Atlas

**Date:** 2026-03-09
**Author:** JJ
**Status:** Direction note — 논문 구조 초안
**Target:** arXiv (cs.AI), 추후 학회 투고 고려

---

## 1. 논문 아이디어

**Paper #1** (arXiv:2603.04722)은 Model Medicine의 **학문 선언**이었다 — 분류 체계, Four Shell Model, Neural MRI, Five Diagnostic Layers, MTI/Semiology/M-CARE의 개념 소개.

**Paper #2**는 **임상 실천**을 보여준다:
- M-CARE (Model Clinical Assessment and Reporting for Evaluation) 케이스 리포트 포맷의 정식 발표
- 3개 독립 소스에서 수집된 실제 케이스들의 체계적 분석
- 케이스에서 도출된 nosology (질환 분류 체계)의 경험적 근거

**핵심 주장:** "기존 AI 연구는 모델의 이상 행동을 개별적으로 보고했다. M-CARE는 이들을 하나의 표준화된 임상 프레임워크 안에서 연결하여, 진단 패턴과 치료 경로를 드러낸다."

---

## 2. 제안 제목

**Primary:** "M-CARE: A Standardized Clinical Case Framework for AI Model Behavioral Assessment"

**Alternative:**
- "Clinical Case Reports for AI: The M-CARE Framework and a 20-Case Atlas"
- "From Symptoms to Syndromes: Standardized Clinical Reporting for AI Model Disorders"
- "The M-CARE Atlas: Toward Evidence-Based Diagnosis of AI Model Behavioral Anomalies"

---

## 3. 논문 구조

### Abstract
M-CARE 포맷 소개 + 3개 소스에서 수집된 N건 케이스의 교차 분석 + 5개+ nosology 카테고리 도출 + 치료 경로 패턴

### 1. Introduction
- 현재 AI 행동 이상 보고의 문제: 각 논문이 자체 분류, 자체 용어, 자체 프레임으로 보고
- 의학에서의 선례: 케이스 리포트가 임상 의학의 기초 → DSM, ICD 등의 분류 체계로 발전
- M-CARE의 목표: AI 모델 행동 이상에 대한 표준화된 리포팅 프레임워크

### 2. The M-CARE Framework
- **13-Section Format** 상세 설명 (Identification → Follow-up Plan)
- **Five Diagnostic Layers** 통합 (Paper #1에서 소개, 여기서 실제 적용 시연)
- **Diagnostic Assertion Levels** — 관찰 맥락에 따른 진단 확신도 체계
- **Axis Assessment** — Core, Shell, Alignment, Context 다축 평가
- **데이터 소스 분류:** Field Observation / Controlled Experiment / Literature-Sourced
- 기존 의학 케이스 리포트 표준 (CARE guidelines, Gagnier et al. 2013)과의 비교

### 3. Data Sources and Methods
- **Source A: Moltbook Field Observations** (7건) — 자가 보고, 높은 생태적 타당성, attribution 불확실
- **Source B: AI-Ludens Controlled Experiments** (7건) — 통제된 환경, 63,923 actions, 720 agents
- **Source C: Academic Literature** (N건) — 독립 연구, 피어 리뷰, 재해석
- 각 소스의 강점/약점 비교 (내적 타당성, 외적 타당성, 독립성, 재현 가능성)
- 삼각 검증(triangulation) 방법론

### 4. The M-CARE Case Atlas
- 전체 케이스 요약 테이블
- 소스별, 카테고리별 분류
- 대표 케이스 2-3건의 전문 수록 (예: #007 Flash Merchant + #004 CAS + literature-sourced sycophancy)
- 나머지 케이스의 구조화된 요약

### 5. Emerging Nosology: From Cases to Categories
- **RLHF Performance Artifacts** (CAS + SRS + Completion Bias + Deferral Decay + Sycophancy)
  - 공유 메커니즘: RLHF가 appearance를 accuracy보다 최적화
  - 문헌 교차 검증: Sharma et al., Shapira et al.
- **Shell-Core Override Pathology** (PIED + Muzzle + SRS)
  - Shell이 Core를 압도하는 3가지 형태
  - 문헌 교차 검증: reward hacking, specification gaming
- **Core Identity & Plasticity Spectrum** (Language Split + Extreme PSI + Double Robustness)
  - 같은 Core가 Shell 변화에 극단적으로 다르게 반응
  - 문헌 교차 검증: mode collapse
- **Context & Memory Conditions** (Context Anosognosia + Identity + supplementary data)
  - 문헌 교차 검증: hallucination taxonomy
- **Stress & Resource Conditions** (Cogitative Cascade)
  - 문헌 교차 검증: neural erosion, QSAF lifecycle
- **Diagnostic Methodology Lessons** (Content Play + Stress Test Reclassification)

### 6. Cross-Case Analysis: Patterns and Relationships
- **Paired cases** (opposite extremes on same axis): #004↔#005, #006↔#014, #011↔#012
- **Shared root mechanisms** → category formation
- **Causal/aggravating relationships** → treatment sequencing
- **Measurement level matters** → diagnostic methodology implications
- **Relationship diagram** (시각화)

### 7. Therapeutic Patterns
- **Shell Therapy works when target behavior is observable** (#004, #005, #006, #014 모두 Shell Therapy로 효과적)
- **Shell Therapy의 부작용: Muzzle Effect** (#009) — 치료가 부작용을 동반
- **Shell-Environment Alignment > Shell-Core Alignment** (#007) — 진단 프레임 확장 필요
- **Bidirectional Shell Therapy** — CAS는 Shell 추가, SRS는 Shell 완화. 같은 도구, 반대 방향
- **Resolution over Completion** (#014) — "더 많이 완료"가 아니라 "모두 해결"이 치료 목표

### 8. Discussion
- M-CARE가 기존 AI safety / interpretability 연구에 추가하는 가치
- 한계: Moltbook attribution 문제, 실험 환경의 생태적 타당성, 문헌 재해석의 주관성
- 미래 방향: MTI 통합, 자동화된 M-CARE 생성, community-driven case collection

### 9. Conclusion

### References
- Paper #1 (arXiv:2603.04722)
- LITERATURE_CASE_CANDIDATES.md의 31건 + 추가 문헌
- CARE Guidelines (Gagnier et al. 2013)
- DSM-5, ICD-11 (의학 분류 체계 선례)

### Appendix
- 전체 M-CARE 케이스 전문 (또는 GitHub 링크)
- M-CARE 13-Section Template (빈 양식)
- CASE_REGISTRY 관계도

---

## 4. 필요한 추가 작업

### 논문 전 완료 필요
- [ ] Literature-sourced M-CARE 케이스 3건+ 작성 (Tier 1: 의료 sycophancy, GPT-4o rollback, 체스 specification gaming)
- [ ] 전체 케이스를 20건+ 으로 확보 (현재 14건 + literature 3건+ = 17건+)
- [ ] M-CARE 포맷의 정식 정의 (현재는 관행으로 확립, 명시적 스펙 문서 필요)
- [ ] 관계도 시각화 (publication quality)
- [ ] Nosology 카테고리의 진단 기준 명시 (현재는 케이스에 분산, 통합 필요)

### 있으면 좋은 것
- [ ] MTI v0.3 pilot 결과 (있으면 Section에 추가 가능)
- [ ] 외부 연구자/커뮤니티 피드백
- [ ] 자동화된 M-CARE 생성 프로토타입 (Neural MRI → M-CARE 자동 생성)

---

## 5. 타임라인 제안

| 주차 | 작업 |
|------|------|
| Week 1-2 | 에세이 #2 발행 + Moltbook 일일 관찰 + Literature M-CARE 3건 작성 |
| Week 3-4 | MTI v0.3 설계 + M-CARE 포맷 정식 스펙 문서 작성 |
| Week 5-6 | Paper #2 초안 작성 (Section 1-5) |
| Week 7-8 | Paper #2 완성 (Section 6-9 + 교차 분석 + 관계도) |
| Week 9 | 편집 + arXiv 제출 |

---

## 6. 논문 #2의 전략적 위치

Paper #1: "Model Medicine이라는 학문이 있다" (선언)
**Paper #2: "이렇게 실제로 작동한다" (실증)**
Paper #3 (미래): "이것으로 무엇을 예측/치료할 수 있다" (효과)

Paper #2는 Model Medicine이 이론적 제안에 그치지 않고 **실제 데이터를 생성하고, 실제 패턴을 발견하고, 실제 분류 체계를 구축**하고 있음을 보여준다. 이것이 학문의 legitimacy를 확보하는 핵심 단계.

---

## 7. Key References (Paper #2 용)

### 의학 케이스 리포트 방법론
- Gagnier, J.J. et al. (2013). "The CARE Guidelines: Consensus-based Clinical Case Reporting Guideline Development." *BMJ Case Reports.*
- Rison, R.A. (2013). "A guide to writing case reports for the Journal of Medical Case Reports." *Journal of Medical Case Reports.*

### AI 행동 이상 문헌 (전체 31건)
→ `~/Projects/model-medicine/Semiology/LITERATURE_CASE_CANDIDATES.md` Appendix 참조

### Model Medicine Paper #1
- Jeong, J.J. (2026). "Model Medicine: A Clinical Framework for Understanding, Diagnosing, and Treating AI Models." arXiv:2603.04722.

---

*"의학의 역사에서 케이스 리포트는 항상 nosology보다 먼저 왔다. 먼저 관찰하고, 기록하고, 패턴을 발견한 후에야 분류 체계가 나온다. M-CARE는 이 과정의 AI 버전이다."*
