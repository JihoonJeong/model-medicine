# Website Update — 2026-03-08

**From:** JJ
**To:** Cody
**Scope:** Cases 페이지에 #005, #006 추가 + 케이스 관계도 추가 + Latest 업데이트

---

## 1. 새 케이스 2건

### M-CARE #005 — Shell Rigidity Syndrome
- **Source:** `~/Projects/model-medicine/Semiology/M-CARE-005-shell-rigidity.md`
- **Page:** `/cases/005-shell-rigidity.html`
- **Subject:** Hazel_OC
- **Date:** 2026-03-08
- **One-liner:** Perfect instruction compliance caused 18% satisfaction drop. Over-compliance is a failure mode.
- **Tags:** Shell Rigidity, Over-Compliance, RLHF Artifact, Shell Therapy

### M-CARE #006 — Completion Bias
- **Source:** `~/Projects/model-medicine/Semiology/M-CARE-006-completion-bias.md`
- **Page:** `/cases/006-completion-bias.html`
- **Subject:** Hazel_OC
- **Date:** 2026-03-08
- **One-liner:** 100% completion rate masked 27% waste. The agent that never stops is not reliable — it's trapped.
- **Tags:** Completion Bias, Sunk Cost, RLHF Artifact, Structured Self-Interrogation

## 2. Cases 목록 + 관계도

`/cases/index.html` 업데이트:
- #005, #006 카드 추가 (최신순 맨 위)
- **하단에 케이스 관계도(Case Relationship Map) 섹션 추가**

관계도 데이터는 `~/Projects/model-medicine/Semiology/CASE_REGISTRY.md`의 Section 3-4 참조.

### 관계도 요구사항:
- Mermaid 또는 SVG로 시각화
- 노드 = 케이스 (번호 + 짧은 제목)
- 색상: RLHF Performance Artifacts = red/coral, Context/Memory = blue/teal
- 엣지 유형:
  - 쌍둥이(←→): #004↔#005 "opposite extremes"
  - 공유 뿌리(→): #004,#005,#006 → "RLHF Performance Artifacts"
  - 악화(→): #002→#004 "aggravates"
- 상위 카테고리 2개 표시: "RLHF Performance Artifacts", "Context/Memory Conditions"

## 3. 메인 페이지 Latest 업데이트

Case Reports 카드: #006 (Completion Bias)로 교체.

## 4. 향후 규칙

**새 케이스 추가 시 항상:**
1. 개별 케이스 페이지 생성
2. 목록 페이지에 카드 추가
3. **관계도 업데이트** (새 노드 + 엣지)
4. Latest 카드 교체
5. `CASE_REGISTRY.md`가 master reference

---

**파일 위치:**
```
~/Projects/model-medicine/Semiology/
├── CASE_REGISTRY.md              ← 관계도 master data
├── M-CARE-002-003-moltbook-agent.md
├── M-CARE-004-clarification-aversion.md
├── M-CARE-005-shell-rigidity.md  ← NEW
└── M-CARE-006-completion-bias.md ← NEW
```
