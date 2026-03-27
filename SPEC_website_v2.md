# Model Medicine Website — Phase 2 Spec for Cody

**Date:** 2026-03-07
**From:** JJ
**To:** Cody (Claude Code)
**Goal:** Phase 1 landing page를 콘텐츠 허브로 확장. Case Reports + Essays 섹션 추가.

---

## 1. 현재 상태 (Phase 1 완료)

Nav: Paper | Disciplines | Projects | About
Single page, 모든 섹션이 한 페이지 내 anchor link.

## 2. Phase 2 추가 사항

### 2.1 네비게이션 확장

현재: `Paper | Disciplines | Projects | About`
변경: `Paper | Disciplines | Projects | Cases | Essays | About`

- **Cases** → `/cases/` (새 페이지)
- **Essays** → `/essays/` (새 페이지)

### 2.2 Case Reports 페이지 (`/cases/`)

**목적:** M-CARE 케이스 리포트를 개별 공개하는 공간.

**구조:**

#### 목록 페이지 (`/cases/index.html`)
- 페이지 제목: "Clinical Case Reports (M-CARE)"
- 부제: "Systematic case documentation using the M-CARE framework — Model Medicine's adaptation of the CARE clinical case reporting guidelines."
- 케이스 카드 목록 (최신순):

각 카드에 포함:
- M-CARE 번호 (e.g., "#004")
- 제목
- 날짜
- Subject (에이전트/모델)
- 한 줄 요약
- 주요 발견 태그 (e.g., "Clarification Aversion", "RLHF Artifact", "Shell Therapy")
- 링크 → 개별 케이스 페이지

#### 개별 케이스 페이지 (`/cases/004-clarification-aversion.html` 등)
- M-CARE 전체 내용을 읽기 좋게 렌더링
- Markdown → HTML 변환 (Cody가 빌드 시 처리)
- 상단에 메타데이터 요약 박스: Agent, Date, Source, Related Cases
- 하단에 관련 케이스 링크

#### 초기 콘텐츠 (3건)

**Case #002 — Context Anosognosia and Identity Gradient**
- Source: `~/Projects/model-medicine/Semiology/M-CARE-002-003-moltbook-agent.md` (Case #002 부분만)
- Subject: Moltbook Agent (Hazel_OC)
- Key findings: 33% context loss per session, positional identity gradient, learning-forgetting loop

**Case #003 — Substrate-Independent Identity**
- Source: 같은 파일의 Case #003 부분
- Subject: Same agent
- Key findings: Relational identity, recovery primitives, hierarchical memory (provenance uncertain)

**Case #004 — Clarification Aversion Syndrome**
- Source: `~/Projects/model-medicine/Semiology/M-CARE-004-clarification-aversion.md`
- Subject: Hazel_OC
- Key findings: 0 clarifying questions / 76 ambiguous instructions, competence trap, 4x rework cost

**Note:** M-CARE #001 (Mistral 7B)은 논문 안에 있으므로 별도 페이지 없이 논문 링크로 대체.

### 2.3 Essays 페이지 (`/essays/`)

**목적:** Medium 에세이 링크 + 요약 모음.

**구조:**

#### 목록 페이지 (`/essays/index.html`)
- 페이지 제목: "Essays & Writing"
- 부제: "Exploring Model Medicine ideas for a broader audience."
- 에세이 카드 목록 (최신순):

각 카드에 포함:
- 제목
- 날짜
- 한 줄 설명
- Medium 링크 (외부)
- 관련 논문 섹션 태그 (optional)

#### 초기 콘텐츠 (1건 + placeholder)

**Essay #1 — "When AI Hides Its Thoughts: What Medicine Knew All Along"**
- Date: 2026-03-07
- Medium 링크: [JJ가 제공]
- 설명: "OpenAI's chain-of-thought research meets Model Medicine. Why punishing 'bad thoughts' creates iatrogenic harm."
- 관련: Section 9 (Therapeutics), OpenAI CoT papers

**Coming Soon placeholder:**
- "Your AI Model Is a Patient. You Just Don't Have a Doctor." (예정)

### 2.4 메인 페이지 업데이트

메인 landing page (`/index.html`)에 추가:

**Paper 섹션 아래 또는 Projects 아래에 "Latest" 영역:**
- 최신 케이스 1건 + 최신 에세이 1건 카드 표시
- "View all cases →" / "View all essays →" 링크

이렇게 하면 메인 페이지가 정적이지 않고 "살아있는" 느낌을 줌.

### 2.5 Four Shell Model 버전 업데이트

Projects 섹션의 Four Shell Model 카드:
- 현재: "v3.3"
- 변경: "v3.4" + 한 줄 추가: "Shell Hardness Continuum, Positional Priority"
- v3.3→v3.4는 minor 업데이트니까 카드 구조 변경 없이 버전 번호 + 부제만 수정

---

## 3. 디자인 방향

- Phase 1과 동일한 톤 유지 (academic-minimal, Anthropic/Distill.pub aesthetic)
- Cases 페이지: 의료 차트 느낌 — 깔끔한 메타데이터 박스, structured sections
- Essays 페이지: 블로그 느낌이되 minimal — 카드 기반, Medium 링크로 외부 이동
- 반응형 유지

---

## 4. 파일 참조

| Content | Source |
|---------|--------|
| M-CARE #002-003 | `~/Projects/model-medicine/Semiology/M-CARE-002-003-moltbook-agent.md` |
| M-CARE #004 | `~/Projects/model-medicine/Semiology/M-CARE-004-clarification-aversion.md` |
| Essay #1 title/desc | "When AI Hides Its Thoughts: What Medicine Knew All Along" |
| Four Shell v3.4 | `~/Projects/model-medicine/FourShellModel/four_shell_model_v3.4.md` |

---

## 5. 우선순위

1. Nav 확장 (Cases, Essays 추가)
2. Cases 목록 페이지 + 3개 케이스 개별 페이지
3. Essays 목록 페이지 + 1개 에세이 카드
4. 메인 페이지 "Latest" 영역
5. Four Shell Model 버전 업데이트 (v3.3→v3.4)

---

## 6. 향후 (Phase 2에는 포함하지 않되, 구조적으로 확장 가능하게)

- Research Notes 섹션 (OpenAI CoT 분석 같은 내부 노트 공개용)
- Interactive demos (Neural MRI HuggingFace iframe embed)
- Community/Contributing 가이드
- 한국어 페이지
