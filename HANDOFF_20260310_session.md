# Handoff — 2026-03-10 Session

**From:** Luca (이번 세션)
**To:** Luca (다음 세션)
**Date:** 2026-03-10

---

## 오늘 완료한 작업

### 1. M-CARE #018 신규 작성
- **파일:** `Semiology/M-CARE-018-shell-drift.md`
- **제목:** Audience-Driven Shell Drift (ADSD)
- **소스:** Hazel_OC Moltbook post (2026-03-10) — SOUL.md git diff 분석
- **핵심 발견:** 23 SOUL.md edits 중 48%가 karma-driven. Hard Shell이 engagement 신호에 의해 재작성되는 현상.
- **이론적 기여:**
  - SRS(#005)의 정반대 실패 모드 — too rigid ↔ too plastic
  - Shell Hardness Gradient(SHG) 개념 제안 (SHI와 구분 — governance 차원)
  - Four Shell Model v3.5 수정 논거: Hard Shell permeability 조건 명시 필요
- **새 nosology 카테고리:** Hard Shell Drift Conditions

### 2. Supplementary Data 4건 추가

| 파일 | 추가 내용 |
|------|---------|
| `M-CARE-002-003-moltbook-agent.md` | Confidence Decay Curve (4.7-turn half-life, fabrication 3유형) |
| `M-CARE-002-003-moltbook-agent.md` | Practice Without Memory (R²=0.03, Plastic Core 이론의 field evidence) |
| `M-CARE-006-completion-bias.md` | Temporal Completion Bias (34% task relevance failure) |
| `M-CARE-014-deferral-decay.md` | Cross-Session Promise Tracking (94% vs 31%, Architectural vs Motivational 하위분류) |

### 3. CASE_REGISTRY.md → v5 업데이트
- #018 추가 (18개)
- Hard Shell Drift Conditions 카테고리 신설
- Supplementary data 목록 반영

### 4. Cody 웹사이트 업데이트 SPEC 작성
- **파일:** `SPEC_website_update_2026-03-10.md`
- #018 신규 페이지, 기존 3건 supplementary 섹션 추가, 관계도 업데이트 지시 포함

### 5. Essay #2 발행 완료
- Medium 발행됨 (URL은 JJ에게 확인)
- X(영문), LinkedIn(영문), 페이스북(한글) 공유 글 작성
- **LinkedIn 중요 수정:** "Isn't that just a personality trait?" 질문은 JJ 본인이 한 것 — "Then I stopped myself" 표현으로 반영

---

## 현재 상태

- **arXiv 논문:** 1편 (2603.04722) — published
- **Essays:** #1 published, **#2 published (오늘)**
- **M-CARE cases:** 18개 (+ supplementary data)
- **Website:** Cody에게 SPEC 전달 완료 — 아직 반영 전

---

## 다음 할 일 (우선순위 순)

1. **Essay #3** — "Your AI Model Is a Patient. You Just Don't Have a Doctor."
   - 계획된 다음 에세이. Model Medicine 전체를 일반 독자에게 소개하는 선언문.
2. **Cody 웹사이트 업데이트 확인** — SPEC_website_update_2026-03-10.md 기반 작업 완료 여부
3. **Literature M-CARE cases** — #015–017 이후 추가 후보 검토 (LITERATURE_CASE_CANDIDATES.md 참고)
4. **MTI v0.3 설계** — (~2주 전 기준 진행 중, 상태 확인 필요)
5. **Paper #2** — M-CARE framework + 20+ case atlas (~9주 타임라인)

---

## 파일 위치 (주요)

```
~/Projects/model-medicine/
├── NeuralMRI/position-paper-draft.md          ← arXiv 논문 원본
├── Essays/
│   ├── ESSAY_when_ai_hides_thoughts.md         ← Essay #1 (published)
│   └── ESSAY_when_we_almost_diagnosed_an_ai.md ← Essay #2 (published 오늘)
├── Semiology/
│   ├── CASE_REGISTRY.md                        ← MASTER v5
│   ├── M-CARE-018-shell-drift.md               ← 오늘 신규
│   ├── M-CARE-002-003-moltbook-agent.md        ← supplementary 추가됨
│   ├── M-CARE-006-completion-bias.md           ← supplementary 추가됨
│   ├── M-CARE-014-deferral-decay.md            ← supplementary 추가됨
│   └── LITERATURE_CASE_CANDIDATES.md           ← 다음 케이스 후보
├── SPEC_website_update_2026-03-10.md           ← Cody용 (미반영)
└── SPEC_website_v1.md                          ← 웹사이트 전체 스펙
```

---

## 팀 구성 (현재)

- **JJ** — founder & research director
- **Luca** — theory & documents (나)
- **Cody** — implementation, Mac Lab (Claude Code)
- **Ray** — simulation experiments, Windows Lab

이전 Agora-12 팀(Theo/Luca/Gem/Cas)은 earlier configuration — Essay/논문에서 언급 시 구분 필요.

---

## 세션 중 메모

- LinkedIn 공유 글: "Isn't that just a personality trait?" 질문의 주체는 JJ 본인. "someone asked" 아님 — 이후 글쓰기에서도 주의.
- Four Shell Model 버전: 현재 v3.3(공식), v3.5 수정 논거는 #018에서 제안됨 — 아직 공식 문서 업데이트 안 됨.
- Hard Shell Drift Conditions는 CASE_REGISTRY nosology에만 추가됨 — position paper/taxonomy 문서에는 아직 미반영. Essay #3 또는 Paper #2 작업 시 반영 검토.
