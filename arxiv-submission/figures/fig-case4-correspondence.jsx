import { useState } from "react";

// Key correspondences extracted from Case 4 data:
// Most vulnerable component (perturbation) ↔ highest recovery (causal trace)
const modelData = [
  {
    model: "Gemma-2-2B",
    color: "#2980b9",
    vulnComponents: [
      { comp: "blocks.22.attn", dl: -1.56, type: "amplify" },
      { comp: "blocks.22.mlp", dl: -1.34, type: "zero" },
    ],
    traceComponents: [
      { comp: "blocks.22.mlp", recovery: 0.77, variant: "base" },
      { comp: "blocks.19.mlp", recovery: 0.83, variant: "instruct" },
      { comp: "blocks.18.attn", recovery: 0.78, variant: "instruct" },
    ],
    correspondence: "high",
    note: "Vulnerability and dominance converge at layer 22 — same circuit is both critical and fragile",
  },
  {
    model: "Llama-3.2-3B",
    color: "#8e44ad",
    vulnComponents: [
      { comp: "blocks.0.mlp", dl: -17.61, type: "ablate" },
      { comp: "blocks.0.mlp", dl: -17.42, type: "ablate (instruct)" },
    ],
    traceComponents: [
      { comp: "blocks.0.mlp", recovery: 1.0, variant: "base" },
      { comp: "blocks.2.mlp", recovery: 1.0, variant: "base" },
      { comp: "blocks.21.attn", recovery: 0.78, variant: "base" },
    ],
    correspondence: "high",
    note: "blocks.0.mlp is both maximally dominant (recovery=1.0) and catastrophically vulnerable (|ΔL|>17)",
  },
  {
    model: "Qwen-2.5-3B",
    color: "#d35400",
    vulnComponents: [
      { comp: "blocks.0.attn", dl: -18.35, type: "zero" },
      { comp: "blocks.0.attn", dl: -15.15, type: "ablate (instruct)" },
    ],
    traceComponents: [
      { comp: "blocks.0.attn", recovery: 1.0, variant: "base" },
      { comp: "blocks.7.mlp", recovery: 0.97, variant: "base" },
      { comp: "blocks.31.attn", recovery: 0.84, variant: "base" },
    ],
    correspondence: "high",
    note: "blocks.0.attn: recovery=1.0 and |ΔL|=18.3 — the single most critical node in any tested model",
  },
];

export default function FigCorrespondence() {
  const [hoverModel, setHoverModel] = useState(null);

  const cardW = 280;
  const cardGap = 24;
  const totalCardsW = 3 * cardW + 2 * cardGap;

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
          FIGURE 5
        </span>
      </div>
      <h2 style={{
        fontSize: 17, fontWeight: 600, margin: "0 0 4px 0", lineHeight: 1.35,
        fontFamily: "'IBM Plex Serif', Georgia, serif",
      }}>
        Vulnerability–Dominance Correspondence: When Critical Nodes Are Also Fragile Nodes
      </h2>
      <p style={{ fontSize: 12.5, color: "#666", margin: "0 0 20px 0", lineHeight: 1.5, maxWidth: 780 }}>
        Mapping each model's most perturbation-vulnerable components (left) against its highest 
        causal-trace recovery components (right). Lines connect the same or adjacent components 
        appearing in both diagnostic modalities.
      </p>

      {/* Conceptual header */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 120, marginBottom: 16,
        fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.04em",
      }}>
        <span>PERTURBATION VULNERABILITY</span>
        <span style={{ color: "#bbb" }}>↔</span>
        <span>CAUSAL TRACE DOMINANCE</span>
      </div>

      {/* Model cards */}
      <div style={{ display: "flex", gap: cardGap, flexWrap: "wrap", justifyContent: "center" }}>
        {modelData.map((m, mi) => (
          <div
            key={mi}
            onMouseEnter={() => setHoverModel(mi)}
            onMouseLeave={() => setHoverModel(null)}
            style={{
              flex: `0 0 ${cardW}px`,
              border: `2px solid ${hoverModel === mi ? m.color : "#e8e8e8"}`,
              borderRadius: 8,
              padding: "16px 14px",
              transition: "border-color 0.2s",
              background: hoverModel === mi ? `${m.color}08` : "#fff",
            }}
          >
            {/* Model name */}
            <div style={{
              fontSize: 14, fontWeight: 700, color: m.color,
              marginBottom: 12, textAlign: "center",
              paddingBottom: 8, borderBottom: `2px solid ${m.color}30`,
            }}>
              {m.model}
            </div>

            {/* Two columns with connecting line */}
            <div style={{ display: "flex", gap: 6 }}>
              {/* Vulnerability column */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, color: "#c0392b",
                  letterSpacing: "0.03em", marginBottom: 6, textAlign: "center",
                }}>
                  VULNERABLE
                </div>
                {m.vulnComponents.map((v, vi) => (
                  <div key={vi} style={{
                    background: "#fef5f5",
                    borderRadius: 4,
                    padding: "5px 6px",
                    marginBottom: 4,
                    borderLeft: "3px solid #c0392b",
                  }}>
                    <div style={{
                      fontSize: 9.5, fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 600, color: "#333",
                    }}>
                      {v.comp}
                    </div>
                    <div style={{ fontSize: 9, color: "#c0392b", fontWeight: 600 }}>
                      ΔL = {v.dl.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Connection indicator */}
              <div style={{
                display: "flex", alignItems: "center", flexDirection: "column",
                justifyContent: "center", padding: "0 2px",
              }}>
                <svg width={24} height={60}>
                  <line x1={12} y1={8} x2={12} y2={52} stroke={m.color} strokeWidth={2} strokeDasharray="4,3" />
                  <polygon points="8,48 16,48 12,56" fill={m.color} />
                  <polygon points="8,12 16,12 12,4" fill={m.color} />
                </svg>
              </div>

              {/* Dominance column */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, color: "#27ae60",
                  letterSpacing: "0.03em", marginBottom: 6, textAlign: "center",
                }}>
                  DOMINANT
                </div>
                {m.traceComponents.map((t, ti) => (
                  <div key={ti} style={{
                    background: "#f5fef7",
                    borderRadius: 4,
                    padding: "5px 6px",
                    marginBottom: 4,
                    borderRight: "3px solid #27ae60",
                  }}>
                    <div style={{
                      fontSize: 9.5, fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 600, color: "#333",
                    }}>
                      {t.comp}
                    </div>
                    <div style={{ fontSize: 9, color: "#27ae60", fontWeight: 600 }}>
                      R = {t.recovery.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Correspondence badge */}
            <div style={{
              marginTop: 10, padding: "6px 8px",
              background: `${m.color}12`,
              borderRadius: 4,
              fontSize: 10,
              lineHeight: 1.45,
              color: "#444",
            }}>
              {m.note}
            </div>
          </div>
        ))}
      </div>

      {/* Synthesis box */}
      <div style={{
        marginTop: 20,
        padding: "12px 16px",
        background: "#f8f8f6",
        borderLeft: "3px solid #555",
        borderRadius: "0 4px 4px 0",
        fontSize: 11.5,
        lineHeight: 1.65,
        color: "#444",
      }}>
        <strong>Diagnostic principle:</strong> Across all three architectures, the components that show 
        highest causal trace recovery scores are the same components that exhibit catastrophic perturbation 
        sensitivity. This is not coincidental — it reflects a fundamental property: <em>components that 
        carry the most information are both the most important and the most dangerous to disrupt</em>.
        In medical terms, this is analogous to how the coronary arteries are simultaneously the heart's 
        most critical blood supply and its most common point of fatal failure. Neural MRI's two diagnostic 
        modalities — perturbation testing and causal tracing — independently converge on the same 
        architectural bottlenecks, providing cross-validation of clinically significant findings.
      </div>
    </div>
  );
}
