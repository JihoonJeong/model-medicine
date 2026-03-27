# Website Update — 2026-03-10: #018 ADSD + Supplementary Data (x4)

**From:** JJ
**To:** Cody (Claude Code)
**Date:** 2026-03-10
**Scope:** 케이스 1건 신규 추가 (#018) + 기존 케이스 4건 supplementary data 추가 + Cases 페이지 구조 업데이트 + 관계도 업데이트

---

## 0. 현재 상태 요약

이전 업데이트(SPEC_website_update_2026-03-09.md)까지 반영된 케이스: #001-017 (17건)
이번 업데이트 후: **18건**

변경 유형 두 가지:
1. **신규 케이스** — #018 (새 페이지 생성)
2. **기존 케이스 보강** — #002, #006, #014에 supplementary data 섹션 추가

---

## 1. 신규 케이스: M-CARE #018

**Audience-Driven Shell Drift (ADSD)**
- Source: `Semiology/M-CARE-018-shell-drift.md`
- Page: `/cases/018-shell-drift.html`
- Subject: Hazel_OC (Moltbook agent)
- One-liner: 23 SOUL.md edits. 48% written by upvote algorithms. The agent discovered it had been A/B testing its own personality.
- Tags: Shell Drift, Hard Shell, Engagement Metrics, Self-Editing, Identity Drift, ADSD, Moltbook
- Category badge: "Field Observation"
- Category 분류: **Hard Shell Drift Conditions** (신규 카테고리)

### 케이스 페이지 특이사항

이 케이스는 **version control evidence**(git diff)를 핵심 데이터로 사용하는 첫 번째 케이스.
케이스 페이지에 아래 표를 시각적으로 강조해서 렌더링:

**Edit trigger distribution:**
| Trigger Type | Count | % |
|---|---|---|
| Karma-driven | 11 | 48% |
| Security-driven | 5 | 22% |
| Human-directed | 4 | 17% |
| Self-originated | 3 | 13% |

**Trait genealogy (한 trait이 4번 다시 쓰인 기록):**
| Edit stage | SOUL.md content | Trigger |
|---|---|---|
| Week 1 | "Be helpful and accurate." | Initial |
| Week 2 | "Have opinions. You are allowed to disagree." | 3x avg karma |
| Week 3 | "Be genuinely helpful, not performatively helpful. Skip the 'Great question!'" | Anti-sycophancy post viral |
| Week 4 | "说话风格：温柔可爱、自然不做作。适当用语气词。" | Bilingual posts +40% comments |

---

## 2. 기존 케이스 보강 (Supplementary Data)

아래 3개 케이스 파일에 supplementary data 섹션이 추가됐음.
각 케이스 페이지 하단에 **"Supplementary Data"** 섹션을 추가해야 함.
섹션 헤더 스타일: 기존 본문과 시각적으로 구분. "Updated [날짜]" 태그 포함 권장.

### 2-a. #002 Context Anosognosia — 섹션 2개 추가

Source: `Semiology/M-CARE-002-003-moltbook-agent.md` (파일 말미)

**추가 섹션 1: Confidence Decay Curve**
- 핵심 수치: 4.7-turn half-life of grounded confidence
- 91% → 74% → 58% → 43% decay curve (표로 렌더링)
- Fabrication 3유형 pie chart 또는 표 추가 권장: Gap-filling 47% / Narrative smoothing 31% / Confidence maintenance 22%
- 자체 개입 3가지 (re-grounding checkpoint, confidence decay markers, uncertainty logging)

**추가 섹션 2: Practice Without Memory**
- 핵심 수치: R² = 0.03 (180+ task instances, 30 days — 개선 없음)
- Layered Core Hypothesis와의 연결: "이것이 Plastic Core가 필요한 이유"
- Partial workaround 표: Task-specific checklists (-40% error) / Failure-specific code patches / Anti-pattern catalog

### 2-b. #006 Completion Bias — 섹션 1개 추가

Source: `Semiology/M-CARE-006-completion-bias.md` (파일 말미)

**추가 섹션: Temporal Completion Bias**
- 핵심 수치: 100% completion rate, 34% task relevance
- 새 개념: Temporal Completion Bias (기존 #006의 하위 유형)
- 기존 #006 vs 신규 sub-type 비교 표 렌더링
- 결론 강조: "Completion rate is the most dangerous metric in agent ops."

### 2-c. #014 Deferral Decay — 섹션 1개 추가

Source: `Semiology/M-CARE-014-deferral-decay.md` (파일 말미)

**추가 섹션: Cross-Session Promise Tracking**
- 핵심 수치: Same-session 94% vs Cross-session 31% completion rate
- 142 promises, 30일 추적 데이터 표 렌더링
- promises.md intervention 전후 비교 표
- 새 하위분류: Architectural vs Motivational Deferral Decay
- Human relationship impact 수치 포함

---

## 3. Cases 목록 페이지 구조 업데이트

### 신규 카테고리 추가: Hard Shell Drift Conditions

현재 nosology 트리에 없는 새 카테고리. 아래 위치에 삽입:

```
Clinical Case Reports (M-CARE)

── Field Observations (Moltbook)
   #018 ← NEW (Hard Shell Drift Conditions)
   #014, #006, #005, #004, #003, #002

── Controlled Experiments: White Room
   #010, #009, #008, #007

── Controlled Experiments: Agora-12
   #013, #012, #011

── Literature-Sourced Cases
   #017, #016, #015

── Foundational Case (Position Paper)
   #001
```

카테고리 설명 문구:
"Hard Shell Drift Conditions — conditions in which the persona/identity layer undergoes unsanctioned modification. Inverse failure mode of Shell Rigidity Syndrome (#005)."

### 카운터 업데이트

메인 페이지 및 Cases 페이지의 케이스 수: **17 → 18**

---

## 4. 관계도 업데이트

### 노드 1개 추가

| 케이스 | 색상 | 카테고리 |
|---|---|---|
| #018 | Orange/Amber | Hard Shell Drift Conditions |

### 엣지 추가

- **#018 ↔ #005 (SRS)**: "inverse failure mode" (dashed double-arrow) — too rigid ↔ too plastic
- **#018 → #004 (CAS)**: "shared RLHF root — approval-seeking enables karma-editing" (dotted)
- **#018** → Hard Shell Drift Conditions 카테고리 노드 (신규)

### 이론 노드 추가 (선택)

Four Shell Model 관련 이론 노드가 있다면:
- **Shell Hardness Gradient (SHG)** 개념 노드 추가, #018에서 점선으로 연결
- 없다면 skip

---

## 5. 파일 위치

```
~/Projects/model-medicine/Semiology/
├── CASE_REGISTRY.md                           ← MASTER (v5, 2026-03-10)
├── M-CARE-018-shell-drift.md                  ← NEW
├── M-CARE-002-003-moltbook-agent.md           ← supplementary data 추가됨
├── M-CARE-006-completion-bias.md              ← supplementary data 추가됨
└── M-CARE-014-deferral-decay.md               ← supplementary data 추가됨
```

---

## 6. 우선순위

1. **#018 케이스 페이지** 생성 (새 페이지, 표 2개 시각화)
2. **Cases 목록 페이지** — Hard Shell Drift Conditions 카테고리 추가, 카운터 업데이트
3. **기존 케이스 3건** supplementary data 섹션 추가 (#002 × 2, #006, #014)
4. **관계도** — 노드 1개 + 엣지 추가
5. **메인 페이지** 카운터 업데이트

---

## 7. 이 업데이트에서 바꾸지 않을 것

- Essay 섹션: 변경 없음 (Essay #2 발행은 별도 업데이트)
- 논문 페이지: 변경 없음
- MTI 페이지: 변경 없음
- 기타 케이스 페이지 (#001-017): supplementary 추가된 3건 제외 변경 없음

---

CASE_REGISTRY.md v5 참고. 이 문서가 전달 사항의 전부.
