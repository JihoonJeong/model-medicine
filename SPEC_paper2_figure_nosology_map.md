# SPEC: Paper #2 Figure — Nosology Relationship Map (Static Export)

**Date:** 2026-03-17
**For:** Cody (Model Medicine Website)
**From:** JJ / Luca
**Priority:** Medium — 논문 Figure용

---

## 목적

Paper #2 (M-CARE 논문)에 들어갈 Nosology Relationship Map의 **정적 이미지(PNG 또는 SVG)** 생성. 웹사이트 Cases 페이지의 인터랙티브 버전과 동일한 데이터를 사용하되, 논문 인쇄용 static 버전이 필요함.

## 데이터 소스

`CASE_REGISTRY.md` v7 — Section 6 (Website Visualization) 참조.

## 노드 (20개)

각 케이스가 하나의 노드. 카테고리별 색상:

| Color | Category | Cases |
|-------|----------|-------|
| Red/Coral | I. RLHF Performance Artifacts | #004, #005, #006, #014, #015, #016, #019 |
| Purple | II. Shell-Core Override | #007, #009, #020 |
| Blue/Teal | III. Context & Memory | #002, #003 |
| Green | IV. Core Identity & Plasticity | #008, #011, #012 |
| Orange | V. Stress/Methodology | #001, #010, #013, #017, #018 |

**주의:** #005는 Category I + II 양쪽에 속함. 노드에 이중 색상 또는 특별 표시 필요.

## 엣지 (CASE_REGISTRY Section 3 참조)

### Paired Oppositions (점선 양방향 화살표)
- #004 ↔ #005: "opposite extremes"
- #011 ↔ #012: "opposite extremes"
- #006 ↔ #014: "mirror image"

### Category Connections (실선)
- #004, #005, #006, #014, #015, #016, #019 → RLHF Artifacts 그룹
- #005, #007, #009, #020 → Shell-Core Override 그룹

### Causal/Aggravating (점선 단방향 화살표)
- #002 → #004: "aggravates"
- #004 → #019: "shared disconnect"
- #009 → #005: "micro-mechanism"
- #007 → #013: "may precede"
- #015 → #016: "syndrome → iatrogenic escalation"
- #017 → #013: "convergent endpoint"

## 레이아웃 요구사항

- **크기:** 논문 full-width figure (약 16cm × 10cm, 300dpi)
- **배경:** 흰색 (인쇄용)
- **텍스트:** 케이스 번호 + 약식 이름 (예: "#004 CAS", "#020 SIBO")
- **범례:** 카테고리별 색상 + 엣지 유형 설명
- **가독성:** arXiv PDF에서 축소해도 읽힐 수 있는 폰트 크기 (최소 8pt)

## 출력

- `~/Projects/model-medicine/Paper2/figures/fig-nosology-map.png` (300dpi)
- `~/Projects/model-medicine/Paper2/figures/fig-nosology-map.svg` (벡터 원본)

## 참고

웹사이트 Cases 페이지에 이미 이 데이터의 인터랙티브 버전이 설계되어 있을 수 있음. 거기서 static export하는 게 가장 효율적. 없으면 D3.js로 새로 그려서 PNG/SVG export.
