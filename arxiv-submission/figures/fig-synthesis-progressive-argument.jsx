import { useState } from "react";

const stages = [
  {
    num: "1",
    case: "Case 1",
    title: "Establish Normal",
    subtitle: "Baseline Imaging",
    model: "Gemma-2-2B",
    method: "5-modality scan",
    finding: "Healthy reference atlas — no anomalies across T1, T2, fMRI, DTI, FLAIR",
    analogy: "Routine physical exam",
    color: "#2980b9",
    icon: "🫁",
  },
  {
    num: "2",
    case: "Case 2",
    title: "Compare Anatomy",
    subtitle: "Cross-Model Imaging",
    model: "Gemma / Llama / Qwen",
    method: "fMRI + DTI × 3 tasks",
    finding: "Each architecture processes information through distinct structural patterns",
    analogy: "Comparative anatomy across species",
    color: "#27ae60",
    icon: "🔬",
  },
  {
    num: "3",
    case: "Case 3",
    title: "Intervene & Trace",
    subtitle: "Stress Testing",
    model: "Gemma-2-2B",
    method: "Perturbation + causal tracing",
    finding: "Factual circuits localized (layer 22); semantic vs noise corruption distinguished",
    analogy: "Cardiac stress test + angiography",
    color: "#8e44ad",
    icon: "💉",
  },
  {
    num: "4",
    case: "Case 4",
    title: "Predict Outcomes",
    subtitle: "Comparative Diagnostics",
    model: "3 models × base/instruct",
    method: "Cross-variant perturbation",
    finding: "Three patterns emerge; architectural vulnerabilities are irreducible and predictable",
    analogy: "Predictive genetic screening",
    color: "#c0392b",
    icon: "🧬",
  },
];

const arrows = [
  { from: "Observation", to: "Comparison" },
  { from: "Comparison", to: "Intervention" },
  { from: "Intervention", to: "Prediction" },
];

export default function FigSynthesis() {
  const [hoverIdx, setHoverIdx] = useState(null);

  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', 'Helvetica Neue', sans-serif",
      background: "#fff",
      padding: "24px 28px",
      maxWidth: 980,
      margin: "0 auto",
      color: "#1a1a1a",
    }}>
      {/* Title */}
      <div style={{ marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#555", letterSpacing: "0.05em" }}>
          FIGURE 6
        </span>
      </div>
      <h2 style={{
        fontSize: 17, fontWeight: 600, margin: "0 0 4px 0", lineHeight: 1.35,
        fontFamily: "'IBM Plex Serif', Georgia, serif",
      }}>
        Synthesis: The Progressive Argument from Observation to Prediction
      </h2>
      <p style={{ fontSize: 12.5, color: "#666", margin: "0 0 24px 0", lineHeight: 1.5, maxWidth: 780 }}>
        Four cases build a cumulative clinical argument, each extending the diagnostic 
        capability established by the previous. The progression mirrors how medical imaging 
        matured: from static anatomy → functional imaging → interventional testing → predictive diagnostics.
      </p>

      {/* Progressive flow */}
      <div style={{ position: "relative" }}>
        {/* Background progression bar */}
        <div style={{
          position: "absolute",
          top: 28,
          left: 40,
          right: 40,
          height: 4,
          background: "linear-gradient(90deg, #2980b9, #27ae60, #8e44ad, #c0392b)",
          borderRadius: 2,
          opacity: 0.3,
          zIndex: 0,
        }} />

        {/* Stage cards */}
        <div style={{
          display: "flex",
          gap: 12,
          position: "relative",
          zIndex: 1,
        }}>
          {stages.map((s, i) => {
            const isHovered = hoverIdx === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Circle node */}
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: isHovered ? s.color : "#fff",
                  border: `3px solid ${s.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  transition: "all 0.2s",
                  boxShadow: isHovered ? `0 2px 12px ${s.color}40` : "none",
                  marginBottom: 12,
                  cursor: "default",
                }}>
                  <span style={{ filter: isHovered ? "brightness(10)" : "none" }}>{s.icon}</span>
                </div>

                {/* Card */}
                <div style={{
                  width: "100%",
                  border: `1.5px solid ${isHovered ? s.color : "#e0e0e0"}`,
                  borderRadius: 8,
                  padding: "12px 10px",
                  background: isHovered ? `${s.color}06` : "#fafafa",
                  transition: "all 0.2s",
                  minHeight: 260,
                }}>
                  {/* Case label */}
                  <div style={{
                    fontSize: 10, fontWeight: 700, color: s.color,
                    letterSpacing: "0.05em", marginBottom: 4,
                  }}>
                    {s.case}
                  </div>

                  {/* Title */}
                  <div style={{
                    fontSize: 14, fontWeight: 700, color: "#1a1a1a",
                    marginBottom: 2, lineHeight: 1.3,
                  }}>
                    {s.title}
                  </div>
                  <div style={{
                    fontSize: 10.5, color: "#888", marginBottom: 10,
                    fontStyle: "italic",
                  }}>
                    {s.subtitle}
                  </div>

                  {/* Details */}
                  <div style={{ fontSize: 10, color: "#666", marginBottom: 4 }}>
                    <span style={{ fontWeight: 600, color: "#555" }}>Model: </span>
                    {s.model}
                  </div>
                  <div style={{ fontSize: 10, color: "#666", marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, color: "#555" }}>Method: </span>
                    {s.method}
                  </div>

                  {/* Finding */}
                  <div style={{
                    fontSize: 10.5, color: "#333", lineHeight: 1.5,
                    padding: "6px 8px",
                    background: `${s.color}0a`,
                    borderRadius: 4,
                    borderLeft: `2px solid ${s.color}60`,
                    marginBottom: 8,
                  }}>
                    {s.finding}
                  </div>

                  {/* Medical analogy */}
                  <div style={{
                    fontSize: 9.5, color: "#999",
                    fontStyle: "italic",
                  }}>
                    ≈ {s.analogy}
                  </div>
                </div>

                {/* Arrow to next */}
                {i < stages.length - 1 && (
                  <div style={{
                    position: "absolute",
                    top: 26,
                    left: `${(i + 1) * 25 - 1.5}%`,
                    fontSize: 16,
                    color: "#ccc",
                    fontWeight: 700,
                  }}>
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom: capability accumulation */}
      <div style={{
        marginTop: 24,
        display: "flex",
        gap: 0,
        borderRadius: 6,
        overflow: "hidden",
        border: "1px solid #e0e0e0",
      }}>
        {[
          { label: "Can image", color: "#2980b9" },
          { label: "Can compare", color: "#27ae60" },
          { label: "Can localize", color: "#8e44ad" },
          { label: "Can predict", color: "#c0392b" },
        ].map((cap, i) => (
          <div key={i} style={{
            flex: 1,
            padding: "8px 0",
            background: `${cap.color}15`,
            textAlign: "center",
            fontSize: 11,
            fontWeight: 700,
            color: cap.color,
            borderRight: i < 3 ? "1px solid #e8e8e8" : "none",
          }}>
            {cap.label}
          </div>
        ))}
      </div>
      <div style={{
        textAlign: "center",
        fontSize: 10,
        color: "#aaa",
        marginTop: 4,
        letterSpacing: "0.03em",
      }}>
        CUMULATIVE DIAGNOSTIC CAPABILITY
      </div>

      {/* Closing insight */}
      <div style={{
        marginTop: 16,
        padding: "10px 14px",
        background: "#f8f8f6",
        borderLeft: "3px solid #555",
        borderRadius: "0 4px 4px 0",
        fontSize: 11.5,
        lineHeight: 1.6,
        color: "#444",
      }}>
        <strong>The clinical implication:</strong> Neural MRI has progressed from passive observation 
        (what does a model look like?) through active intervention (how does it respond to perturbation?) 
        to predictive diagnostics (can we foresee how training interventions will affect vulnerability?). 
        This mirrors the historical arc of medical imaging itself — and demonstrates that the framework 
        of clinical medicine applies not merely by analogy, but as operational methodology.
      </div>
    </div>
  );
}
