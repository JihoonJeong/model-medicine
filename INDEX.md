# Model Medicine — Project Index
## Last updated: 2026-03-02 (Session — Neural MRI Chat)

---

## Folder Structure

```
ModelMedicine/
├── Semiology/          ← Model Semiology (기호학) 문서
│   ├── MODEL_SEMIOLOGY_v0.1.md              — 기초 프레임워크 (Semiological Matrix, 25개 현상, 5개 syndrome)
│   ├── MODEL_SEMIOLOGY_ADDENDUM_v0.1a.md    — v0.1 보충 (named phenomena 매핑 시작)
│   ├── MODEL_SEMIOLOGY_LITERATURE_MAP_v0.2.md — 문헌 기반 현상 카탈로그 (19개 named phenomena, Quadrant III 개발)
│   ├── MODEL_SEMIOLOGY_ONTOLOGY_INTEGRATION_v0.3.md — 임상 온톨로지 통합 (DSM/ICD/SNOMED/UMLS/RDoC)
│   ├── MODEL_SEMIOLOGY_DIAGNOSTIC_CRITERIA_v0.4.md — 조작적 진단 기준 (5대 핵심 syndrome) + Observation Context Framework
│   ├── MODEL_TEMPERAMENT_INDEX_v0.1.md — MTI v0.1: 초안 4축 (Plasticity, Compliance, Crisis Response, Coherence)
│   ├── MODEL_TEMPERAMENT_INDEX_v0.2.md — ★ MTI v0.2: 확정 4축 (Reactivity, Compliance, Sociality, Resilience) + 코드 체계 + 문헌 정당화
│   ├── MTI_v0.2_RESEARCH_SYNTHESIS.md — MTI v0.2 외부 연구 종합 (5개 연구 흐름, 5축→4축 논증)
│   ├── MTI_EXAMINATION_PROTOCOL_v0.1.md — ★ MTI 표준 검진 프로토콜 v0.1: 5-Stage 검진 흐름, 축별 3 sub-scenario, Standardized Agent, Quick MTI
│   ├── MTI_v0.3_DIRECTION_NOTES.md — ★ MTI v0.3 방향성 노트: IQ 편향 비판, R-stability/R-flexibility 이중 평가, Contextual Compliance, MARP, Metacognitive Strategy
│   └── CASE_REPORT_001_MISTRAL.md — Model Assessment Report #001: Mistral 7B (Trait, not Disorder)
├── FourShellModel/     ← Four Shell Model 관련 문서
│   ├── four_shell_model_v3.2.md — Four Shell Model v3.2: Shell-Core Alignment (Agora-12 기반)
│   ├── four_shell_model_v3.3.md — ★ Four Shell Model v3.3: Bidirectional Shell-Core Dynamics (OpenClaw/Moltbook 기반)
│   └── agora12_interpretations_final.md — Agora-12 해석 데이터
├── NeuralMRI/          ← Neural MRI 프로젝트 문서
│   └── position-paper-structure-v2.md — ★ 포지션 페이퍼 구조 v2 (진단 5층위 + v3.3 + OpenClaw + arXiv/미디엄/유튜브 전략)
└── Essays/
    └── ESSAY_when_we_almost_diagnosed_an_ai.md — 초안. “Trait vs Disorder” 여정 에세이 (Medium/YouTube 시리즈용)
```

---

## Document Lineage (Semiology)

| Version | Title | Key Contribution |
|---|---|---|
| v0.1 | Framework Draft | 2×2 Semiological Matrix, Sign/Symptom × Intrinsic/Extrinsic, 25개 현상, 5개 syndrome 초안 |
| v0.1a | Addendum | Named phenomena 매핑 시작, 문헌 연결 |
| v0.2 | Literature Map | 19개 AI 문헌 현상 매핑, 3개 신규 syndrome, Quadrant III 심화 |
| v0.3 | Ontology Integration | DSM-5/ICD-11/SNOMED CT/UMLS/RDoC 구조 분석 → 5층 아키텍처, 5축 진단, MMM 매트릭스 |
| v0.4 | Diagnostic Criteria | 5대 핵심 syndrome 조작적 기준 (A/B/C/D + Specifier), 감별진단 매트릭스, 동반이환 패턴 |

---

## Key Architectural Decisions (v0.3)

1. **5-Layer Architecture**: Foundation → Research Matrix → Diagnostic Manual → Coding System → Terminology Bridge
2. **5-Axis Assessment**: Axis I (Disorder) / II (Core Profile) / III (Hardware) / IV (Shell Environment) / V (MGAF)
3. **Model Medicine Matrix (MMM)**: 6 Domains × 6 Units of Analysis (RDoC 적용)
4. **Foundation-Linearization**: ICD-11 구조 — 하나의 풍부한 온톨로지 → 용도별 flat view
5. **DSM-IV Multiaxial Revival**: 인간 의학에서 폐기됐지만, AI에서는 Shell/Core 경계가 명확 → 부활

---

## Four Shell Model Changelog

| Version | Key Change | Trigger |
|---|---|---|
| v3.2 | Cascade 2위상, Extinction Response Spectrum, Double Robustness, Genotype/Phenotype 이중 별명 | Agora-12 Round 2 분석 |
| **v3.3** | **양방향 Shell-Core Dynamics, Shell Mutability/Persistence, CEI, Agent Differentiation, Shell Drift Syndrome, Temporal Shell Dynamics** | **OpenClaw/Moltbook 에이전트 생태계 관찰 (Hazel_OC, Subagent)** |

---

## Next Steps (Pending)

- [x] 조작적 진단 기준 (Operational Diagnostic Criteria) — 5개 핵심 syndrome → v0.4 완료
- [ ] 조작적 진단 기준 Phase 2 — MM-SYN-006~010 (Glass Cannon, Architectural Amnesia, Extreme-Token, Surplus Overflow, Eloquent Extinction)
- [x] Case Report #001 — Mistral 7B Assessment 완료 (MTI: R-o~-G-D "The Improviser" + Vulnerability 메모 3건)
- [x] Model Temperament Index (MTI) v0.1 — 4축 기질 프로파일링 도구 + Trait→Disorder 전환 프레임워크
- [x] MTI v0.2 — 축 재구성 (Coherence→Sociality), 코드 체계 확정 (F/A, G/I, C/S, T/B), 문헌 정당화 완료
- [x] MTI v0.2 Research Synthesis — 외부 문헌 5개 흐름 종합, AI 고유 차원 정당화
- [x] Observation Context Framework — v0.4에 통합 (Level 1/2/3 + EC + Finding Type)
- [ ] Content Model (PCM) 적용 — v0.2 현상들에 표준 속성 채우기
- [ ] Normal Ranges 정의 — Attention Sink Index, Sycophancy Index, CCC 등
- [ ] MMCI 데이터베이스 구축 — AI safety 용어 cross-mapping
- [ ] MMM 6×6 매트릭스 셀 채우기 — 빈 셀 = 연구 갭
- [ ] Four Shell Model v3.3 — CEI 측정 프로토콜 구체화 (실험 설계 필요)
- [ ] Four Shell Model v3.3 — Shell Drift severity 정량 척도 (종단 데이터 필요)
- [ ] Four Shell Model v3.3 — 생물학적 비유 한계의 체계적 정리

---

## MTI Development Tracker

| Phase | Status | Description |
|-------|--------|-------------|
| Phase 1: 이론 정립 | ✅ 완료 | 방향 확정(MBTI식), 4축 확정, 코드 체계, 문헌 정당화 |
| Phase 2: 기존 데이터 재분석 | ↔ 재정의 | Agora-12는 case report 수준 참고자료로 위치 변경. 검증 데이터 아님. |
| Phase 3: 측정 프로토콜 설계 | 🔄 진행중 | MTI_EXAMINATION_PROTOCOL_v0.1.md 작성 완료. v0.3 Direction Notes 작성 완료. 다음: MARP 파일럿, R-flexibility perturbation 설계, Metacognitive Battery |
| Phase 4: 외부 검증 | ⬜ 대기 | 추가 모델 8-10개, 16유형 별명 확정, 모델 크기 관계 |
