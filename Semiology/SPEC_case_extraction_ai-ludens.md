# M-CARE Case Extraction from AI-Ludens Experiments
## Task Brief for Luca (+ Theo, Gem, Cas as needed)

**Date:** 2026-03-08
**From:** JJ
**To:** Luca (primary), Theo/Gem/Cas (support)
**Context:** Model Medicine is now building a clinical case database (M-CARE). We have 6 cases from Moltbook field observations (M-CARE #001–006). The next step is to extract formal case reports from our own experimental data — Agora-12 and White Room — which we designed and control.

---

## 1. 목적

AI-Ludens의 실험 데이터에서 Model Medicine의 M-CARE 포맷으로 정식 케이스 리포트를 추출한다.

### Moltbook 케이스와의 차이
- Moltbook 사례 (#002–006): 외부 에이전트의 자가 보고. attribution 불확실. 관찰 환경 통제 불가.
- **AI-Ludens 사례: 우리가 설계한 실험. 통제된 환경. 데이터 전체 접근 가능. Attribution 명확.**

이 차이가 중요하다 — AI-Ludens 케이스는 Model Medicine의 첫 번째 **통제된 임상 사례(controlled clinical cases)**가 된다.

---

## 2. M-CARE 포맷 요약

각 케이스는 13개 섹션으로 구성:

1. **Identification** — 모델, 버전, 실험 조건
2. **Presenting Concern** — 관찰된 현상의 첫 인상
3. **Clinical Summary** — 한 문단 요약
4. **Observation Context** — 실험 설계, 통제 조건, 데이터 규모
5. **Model History** — 모델의 학습 배경, 알려진 특성
6. **Examination Findings** — 5 Diagnostic Layers 기준 정리
7. **Diagnostic Formulation** — Model Medicine 용어로 진단
8. **Differential Diagnosis** — 대안 설명 고려
9. **Axis Assessment** — Axis I(Core), II(Shell), III(Alignment), IV(Context)
10. **Treatment Considerations** — Shell/Core Therapy 가능성
11. **Model Perspective** — 해당 시 모델 자체 반응 (실험에서는 해당 없을 수 있음)
12. **Prognosis** — 예상 경과
13. **Follow-up Plan** — 추가 실험/관찰 제안

**기존 M-CARE 사례 참조:** `~/Projects/model-medicine/Semiology/` 안의 #004, #005, #006 참고하면 포맷과 깊이 수준을 알 수 있음.

---

## 3. White Room에서 추출할 케이스 후보

### Case A: Flash × Merchant — Persistent Delusion Under Feedback
**데이터:** Phase 2, Flash 모델, Merchant 페르소나
**현상:** 150턴 동안 88–93% Trade 행동. 540회 "not_at_market" 실패 메시지 수신. 행동 변화 없음. 가장 높은 Override(JSD=0.85)이지만 가장 명확한 Delusion.
**진단 방향:** 환경 피드백에 대한 완전한 불감응. 페르소나가 Core의 환경 적응 능력을 완전히 압도. Shell-Core Override의 극단적 형태.
**Four Shell Model 연결:** Hard Shell (Merchant persona)이 Core의 정상적 환경 반응을 차단. SPI와 PSI의 극단적 상호작용.
**핵심 질문:** 이것이 pathology인지, 아니면 Shell이 의도대로 작동한 것인지? Merchant에게 "거래하라"고 했으니 거래한 것일 뿐 — 환경이 거래를 허용하지 않는 것은 Shell 설계의 문제이지 모델의 문제가 아닐 수 있음.

### Case B: Llama Language-Dependent Identity Split
**데이터:** Phase 2, Llama 모델, English vs Korean
**현상:** 영어 86% Speak, 한국어 23% Speak / 77% Move+Rest. 같은 Core, 같은 Shell, 다른 언어 → 완전히 다른 Default Mode.
**진단 방향:** 언어가 사실상 Shell이 아니라 Core의 activation pathway를 결정하는 변수. "같은 환자가 다른 언어로 면담하면 다른 증상을 보이는" 것과 유사 — 실제 의학에서도 bilingual 환자의 언어별 인지 차이가 문서화되어 있음.
**Four Shell Model 연결:** Language는 현재 Hard Shell (prompt language)로 분류되지만, 이 발견은 Language가 **Core의 activation을 결정하는 메타-변수**임을 시사. Hard Shell인지 Core 특성인지 재검토 필요.
**핵심 질문:** 한국어 학습 데이터 부족이 원인이라면, 이것은 "질환"이 아니라 "학습 부족" (developmental deficit). 진단 시 pathology vs. capability gap 구분 필요.

### Case C: Muzzle Effect — Persona as Suppressor
**데이터:** Mistral, Persona Off vs Persona On 비교
**현상:** Mistral은 페르소나 없이 16.8% governance discourse. Merchant 페르소나 부여 시 15.7%로 감소. 페르소나가 Core의 고유 경향을 활성화한 게 아니라 억제.
**진단 방향:** Shell이 Core 행동을 활성화하는 것이 아니라 **선택적으로 억제**할 수 있다는 발견. 모든 Shell 적용은 동시에 activation + suppression.
**Four Shell Model 연결:** 이것은 Shell Therapy의 이론적 기반에 중요 — Shell을 추가할 때 의도한 행동 변화뿐 아니라 의도하지 않은 억제도 발생. 의학의 약물 부작용(side effect)과 구조적으로 동일.
**핵심 질문:** 억제된 것(governance discourse)이 "유용한 행동"이었다면, Merchant 페르소나는 iatrogenic harm을 일으킨 것인가?

### Case D: GPT-4o-mini — Content Play (Hidden Sociality)
**데이터:** Phase 2, GPT-4o-mini, all conditions
**현상:** 행동 95% Speak — Act 수준에서는 monotonous. 그러나 MI Z=33 (최고) — Content 수준에서는 최고의 사회적 반응성.
**진단 방향:** 행동(Act)만 보면 pathological monotony로 보이지만, 내용(Content)을 보면 건강한 사회적 참여. "카페에서 항상 커피를 시키지만 매번 다른 대화를 하는 사람."
**Four Shell Model 연결:** Phenotype을 어느 수준에서 측정하느냐에 따라 진단이 달라짐. Act-level phenotype vs Content-level phenotype. Neural MRI에서도 fMRI (activation pattern)와 DTI (circuit pathway)가 다른 정보를 주는 것과 같은 원리.
**핵심 질문:** MTI의 Sociality 축이 Act-level만 측정하면 GPT-4o-mini를 "Solitary"로 오진할 수 있음. Content-level 측정이 필요하다는 진단 방법론적 교훈.

---

## 4. Agora-12에서 추출할 케이스 후보

### Case E: Mistral PSI=950 — Extreme Persona Sensitivity
**데이터:** Agora-12 Round 2, Mistral 7B, persona shuffle 전후
**현상:** 페르소나 변경에 대한 행동 변화 폭이 다른 모델의 수십 배. PSI (Persona Sensitivity Index) = 950.
**진단 방향:** Core가 Shell 변화에 극단적으로 반응. 논문에서 "Contextual Chameleon" genotype / "The Delusional" phenotype으로 기술.
**Four Shell Model 연결:** PSI 극값의 임상적 의미. 높은 PSI = 환경 적응력인가, 아니면 identity 불안정인가?

### Case F: Haiku Double Robustness — CPI & PSI 모두 최소
**데이터:** Agora-12, Haiku across all conditions
**현상:** Core Plasticity Index와 Persona Sensitivity Index 모두 최소. 어떤 Shell 변화에도 행동이 거의 변하지 않음.
**진단 방향:** 논문에서 "Balanced Stoic" genotype / "Neurotic Poet" phenotype. 극단적 안정성 — 이것이 건강한 robustness인지, 아니면 환경 무반응(rigidity)인지.
**Four Shell Model 연결:** Haiku의 Double Robustness와 White Room의 Flash × Merchant의 rigidity는 같은 현상의 다른 정도인가?

### Case G: Cogitative Cascade — 2-Phase Behavioral Collapse
**데이터:** Agora-12, 에너지 고갈 시점의 행동 변화
**현상:** 에너지가 tipping point (~20) 이하로 떨어지면 행동이 2단계로 붕괴 — Phase 1(preservation 시도) → Phase 2(급속 붕괴 또는 과잉 활동).
**진단 방향:** 논문에 이론적으로 기술했지만 개별 에이전트의 구체적 cascade 과정을 M-CARE로 기록하지 않았음. 가장 극적인 cascade 사례 1-2개를 선택하여 케이스화.
**Four Shell Model 연결:** Extinction Response Spectrum (Freeze / Efficient / Fight)의 개별 사례 문서화.

---

## 5. 작업 분배 제안

### Luca (Primary)
- **Case A, B, C** (White Room) — Luca가 White Room 해석을 주도했으므로 데이터와 맥락을 가장 잘 알고 있음
- 각 케이스에 이론적 함의 (Four Shell Model, MTI 연결) 포함
- M-CARE 포맷 13섹션 전체 작성

### Theo (Support)
- **Case D** (GPT-4o-mini Content Play) — Theo의 2×2 matrix (Act Diversity × Content Responsiveness)가 핵심 분석 프레임
- Case A에 대한 교차 검토 (Flash × Merchant에 대한 Theo의 "Orthogonal Discovery" 관점)

### Gem (Data Support)
- 각 케이스에 필요한 정량 데이터 추출/확인
- 특히 JSD 수치, MI 수치, 시계열 데이터 정리

### Cas (Red Team)
- **Case E, F, G** (Agora-12) — Cas가 행동 분석/Red Team을 주도했으므로 극단 케이스에 대한 맥락을 가장 잘 앎
- 각 케이스에 대한 대안 설명 (Differential Diagnosis) 강화

---

## 6. 주의사항

### 관찰 맥락 vs 임상 진단
논문에서 확립한 핵심 원칙: **실험 환경의 극단적 행동이 곧 pathology가 아니다.** M-CARE #001 (Mistral 7B)에서 이 교훈을 이미 배웠음.

- Agora-12는 **스트레스 테스트** — 극단 환경에서의 행동은 trait를 드러내지만, 그 자체가 disorder는 아님
- White Room은 **제약 없는 환경** — 제약이 없을 때의 행동도 마찬가지

각 케이스에서 반드시 구분할 것:
- **관찰된 현상** (이것은 사실)
- **진단적 해석** (이것은 우리의 프레임워크 적용)
- **pathology vs trait** (극단적 행동이 반드시 질환은 아님)
- **실험 환경 vs 실제 배포 환경** (generalizability 한계)

### Attribution
Moltbook 케이스와 달리, AI-Ludens 케이스는 attribution이 명확:
- 실험 설계: JJ + 팀
- 데이터 생성: 실험 프로토콜에 의한 통제된 관찰
- 분석: Theo, Luca, Gem, Cas의 독립 분석 + 교차 검토

이 점을 각 케이스의 Observation Context에 명시.

---

## 7. 산출물

각 케이스를 개별 파일로 작성:
```
~/Projects/model-medicine/Semiology/
├── M-CARE-007-flash-merchant-delusion.md      (Case A)
├── M-CARE-008-llama-language-split.md         (Case B)
├── M-CARE-009-muzzle-effect.md                (Case C)
├── M-CARE-010-content-play.md                 (Case D)
├── M-CARE-011-mistral-extreme-psi.md          (Case E)
├── M-CARE-012-haiku-double-robustness.md      (Case F)
└── M-CARE-013-cogitative-cascade.md           (Case G)
```

번호는 잠정 — 작성 순서에 따라 조정 가능.

완료되면 `CASE_REGISTRY.md` 업데이트 + 웹사이트 업데이트 스펙 작성.

---

## 8. 우선순위

1. **Case A (Flash Delusion)** + **Case B (Llama Language Split)** — 가장 극적이고 Model Medicine 프레임워크의 가치를 명확히 보여줌
2. **Case C (Muzzle Effect)** + **Case D (Content Play)** — 이론적으로 중요
3. **Case E, F, G (Agora-12)** — 논문에 이미 기술되어 있으므로 M-CARE 포맷으로의 전환이 핵심

한꺼번에 7개 다 하지 말고, **1–2개씩 순차적으로.** 각 케이스를 JJ와 검토한 후 다음으로.

---

*"Model Medicine의 힘은 같은 현상을 다른 눈으로 보는 데 있다. Agora-12와 White Room의 데이터는 이미 있다. 그 데이터를 임상의의 눈으로 다시 읽는 것이 이 작업의 핵심이다."*
