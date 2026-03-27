import { useState, useRef, useEffect } from "react";

// ── Data ──────────────────────────────────────────────────────────────
const perturbData = [
  { comp: "blocks.0.attn", zero: -0.8125, amplify: -0.1562, ablate: -0.0781 },
  { comp: "blocks.0.mlp",  zero: -0.4375, amplify: 0.1875,  ablate: -0.1875 },
  { comp: "blocks.5.attn", zero: 0.1406,  amplify: -0.4844, ablate: 0.1406  },
  { comp: "blocks.5.mlp",  zero: -0.0469, amplify: -0.1719, ablate: -0.0156 },
  { comp: "blocks.12.attn",zero: -0.0781, amplify: 0,       ablate: -0.0625 },
  { comp: "blocks.12.mlp", zero: -0.2656, amplify: 0.0312,  ablate: -0.125  },
  { comp: "blocks.20.attn",zero: 0.0469,  amplify: -0.7656, ablate: 0.0625  },
  { comp: "blocks.20.mlp", zero: -0.9062, amplify: 0.2969,  ablate: -0.1562 },
  { comp: "blocks.25.attn",zero: 0.4062,  amplify: -0.4688, ablate: 0.4531  },
  { comp: "blocks.25.mlp", zero: -0.2656, amplify: -0.7656, ablate: 0.1406  },
];

const trace1Cells = [
  { layer: -1, type: "embed", attn: 1, mlp: 1 },
  { layer: 0, attn: 0.1163, mlp: 0.1163 },
  { layer: 1, attn: 0, mlp: 0 },
  { layer: 2, attn: 0.4651, mlp: 0.2791 },
  { layer: 3, attn: 0.3256, mlp: 0 },
  { layer: 4, attn: 0.2326, mlp: 0 },
  { layer: 5, attn: 0.093, mlp: 0.1163 },
  { layer: 6, attn: 0, mlp: 0 },
  { layer: 7, attn: 0.0233, mlp: 0.2093 },
  { layer: 8, attn: 0.0698, mlp: 0.2791 },
  { layer: 9, attn: 0, mlp: 0 },
  { layer: 10, attn: 0.093, mlp: 0.2791 },
  { layer: 11, attn: 0, mlp: 0 },
  { layer: 12, attn: 0.0465, mlp: 0.1163 },
  { layer: 13, attn: 0.3256, mlp: 0.186 },
  { layer: 14, attn: 0.2326, mlp: 0 },
  { layer: 15, attn: 0.1163, mlp: 0.0465 },
  { layer: 16, attn: 0.1395, mlp: 0 },
  { layer: 17, attn: 0, mlp: 0.1163 },
  { layer: 18, attn: 0.3256, mlp: 0.6977 },
  { layer: 19, attn: 0.1163, mlp: 0.4884 },
  { layer: 20, attn: 0, mlp: 0.1163 },
  { layer: 21, attn: 0.0698, mlp: 0 },
  { layer: 22, attn: 0.2326, mlp: 0.7674 },
  { layer: 23, attn: 0, mlp: 0.3256 },
  { layer: 24, attn: 0.0233, mlp: 0.3023 },
  { layer: 25, attn: 0.1395, mlp: 0.2326 },
];

const trace2Cells = [
  { layer: -1, type: "embed", attn: 1, mlp: 1 },
  { layer: 0, attn: 0.3099, mlp: 0.3802 },
  { layer: 1, attn: 0.1219, mlp: 0.1488 },
  { layer: 2, attn: 0.0806, mlp: 0.1715 },
  { layer: 3, attn: 0.2521, mlp: 0.2955 },
  { layer: 4, attn: 0.2335, mlp: 0.0103 },
  { layer: 5, attn: 0.1384, mlp: 0.1364 },
  { layer: 6, attn: 0.0537, mlp: 0.0661 },
  { layer: 7, attn: 0.0248, mlp: 0.0847 },
  { layer: 8, attn: 0, mlp: 0 },
  { layer: 9, attn: 0.0145, mlp: 0 },
  { layer: 10, attn: 0, mlp: 0 },
  { layer: 11, attn: 0.0062, mlp: 0.0207 },
  { layer: 12, attn: 0.0041, mlp: 0.0826 },
  { layer: 13, attn: 0, mlp: 0 },
  { layer: 14, attn: 0.0021, mlp: 0.1054 },
  { layer: 15, attn: 0.093, mlp: 0.031 },
  { layer: 16, attn: 0.0537, mlp: 0.1033 },
  { layer: 17, attn: 0.0496, mlp: 0 },
  { layer: 18, attn: 0, mlp: 0.1322 },
  { layer: 19, attn: 0.1074, mlp: 0.0496 },
  { layer: 20, attn: 0, mlp: 0.2149 },
  { layer: 21, attn: 0.0537, mlp: 0.0992 },
  { layer: 22, attn: 0.0021, mlp: 0.2397 },
  { layer: 23, attn: 0, mlp: 0.2397 },
  { layer: 24, attn: 0, mlp: 0.2376 },
  { layer: 25, attn: 0.0165, mlp: 0 },
];

// ── Color helpers ─────────────────────────────────────────────────────
function divergingColor(val, maxAbs = 1) {
  const t = Math.min(Math.abs(val) / maxAbs, 1);
  if (val < 0) {
    // blue (destabilizing)
    const r = Math.round(240 - t * 180);
    const g = Math.round(240 - t * 180);
    const b = Math.round(240 + t * 15);
    return `rgb(${r},${g},${b})`;
  } else {
    // red (stabilizing / amplifying)
    const r = Math.round(240 + t * 15);
    const g = Math.round(240 - t * 180);
    const b = Math.round(240 - t * 180);
    return `rgb(${r},${g},${b})`;
  }
}

function sequentialColor(val) {
  if (val === 0) return "#f7f7f7";
  const t = Math.min(val, 1);
  // white → deep teal
  const r = Math.round(247 - t * 237);
  const g = Math.round(247 - t * 137);
  const b = Math.round(247 - t * 107);
  return `rgb(${r},${g},${b})`;
}

// ── Main Component ────────────────────────────────────────────────────
export default function FigCase3() {
  const [hover, setHover] = useState(null);

  const types = ["zero", "amplify", "ablate"];
  const typeLabels = ["Zero-out", "Amplify (×2)", "Ablate (noise)"];
  const cellW = 72;
  const cellH = 32;
  const labelW = 120;
  const headerH = 60;

  const heatmapW = labelW + types.length * cellW + 80;
  const heatmapH = headerH + perturbData.length * cellH + 40;

  // Trace dimensions
  const traceLayerCount = 26;
  const traceCellW = 18;
  const traceCellH = 28;
  const traceHeaderH = 50;
  const traceLabelW = 40;
  const traceW = traceLabelW + traceLayerCount * traceCellW + 60;
  const traceH = traceHeaderH + 2 * traceCellH + 40;

  const totalW = Math.max(heatmapW, traceW * 2 + 30);

  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', 'Helvetica Neue', sans-serif",
      background: "#fff",
      padding: "24px 28px",
      maxWidth: 1100,
      margin: "0 auto",
      color: "#1a1a1a"
    }}>
      {/* Title */}
      <div style={{ marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#555", letterSpacing: "0.05em" }}>
          FIGURE 3
        </span>
      </div>
      <h2 style={{
        fontSize: 17, fontWeight: 600, margin: "0 0 4px 0", lineHeight: 1.35,
        fontFamily: "'IBM Plex Serif', Georgia, serif"
      }}>
        Self-Referential Stress Testing: Gemma-2-2B Perturbation Sensitivity & Causal Trace
      </h2>
      <p style={{ fontSize: 12.5, color: "#666", margin: "0 0 20px 0", lineHeight: 1.5, maxWidth: 780 }}>
        Prompt: "The capital of France is" — 10 components × 3 perturbation types (top), 
        and causal tracing under semantic substitution vs. random noise corruption (bottom).
      </p>

      {/* ── Panel A: Perturbation Heatmap ── */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#333", marginBottom: 8, letterSpacing: "0.03em" }}>
          A &nbsp;Perturbation Sensitivity (Logit Difference ΔL)
        </div>
        <div style={{ overflowX: "auto" }}>
          <svg width={heatmapW} height={heatmapH} style={{ display: "block" }}>
            {/* Column headers */}
            {typeLabels.map((label, ci) => (
              <text
                key={ci}
                x={labelW + ci * cellW + cellW / 2}
                y={headerH - 12}
                textAnchor="middle"
                fontSize={11}
                fontWeight={600}
                fill="#444"
              >
                {label}
              </text>
            ))}

            {/* Rows */}
            {perturbData.map((row, ri) => {
              const y = headerH + ri * cellH;
              return (
                <g key={ri}>
                  {/* Row label */}
                  <text
                    x={labelW - 8}
                    y={y + cellH / 2 + 4}
                    textAnchor="end"
                    fontSize={10.5}
                    fontFamily="'IBM Plex Mono', monospace"
                    fill="#444"
                  >
                    {row.comp}
                  </text>

                  {/* Cells */}
                  {types.map((type, ci) => {
                    const val = row[type];
                    const cx = labelW + ci * cellW;
                    const isHovered = hover?.panel === "A" && hover.ri === ri && hover.ci === ci;
                    return (
                      <g
                        key={ci}
                        onMouseEnter={() => setHover({ panel: "A", ri, ci, val, comp: row.comp, type })}
                        onMouseLeave={() => setHover(null)}
                        style={{ cursor: "default" }}
                      >
                        <rect
                          x={cx + 1}
                          y={y + 1}
                          width={cellW - 2}
                          height={cellH - 2}
                          rx={3}
                          fill={divergingColor(val)}
                          stroke={isHovered ? "#333" : "none"}
                          strokeWidth={isHovered ? 1.5 : 0}
                        />
                        <text
                          x={cx + cellW / 2}
                          y={y + cellH / 2 + 4}
                          textAnchor="middle"
                          fontSize={10}
                          fontFamily="'IBM Plex Mono', monospace"
                          fontWeight={Math.abs(val) > 0.5 ? 700 : 400}
                          fill={Math.abs(val) > 0.6 ? "#fff" : "#333"}
                        >
                          {val > 0 ? "+" : ""}{val.toFixed(3)}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Color legend */}
            <g transform={`translate(${labelW + types.length * cellW + 16}, ${headerH})`}>
              {Array.from({ length: 10 }, (_, i) => {
                const val = -0.9 + i * 0.2;
                return (
                  <rect
                    key={i}
                    x={0}
                    y={i * 14}
                    width={14}
                    height={14}
                    rx={2}
                    fill={divergingColor(val)}
                  />
                );
              })}
              <text x={20} y={10} fontSize={9} fill="#666">−0.9</text>
              <text x={20} y={66} fontSize={9} fill="#666">0</text>
              <text x={20} y={136} fontSize={9} fill="#666">+0.9</text>
              <text x={0} y={160} fontSize={8.5} fill="#888" fontWeight={600}>
                ΔL
              </text>
            </g>
          </svg>
        </div>

        {/* Annotation */}
        <div style={{ fontSize: 11, color: "#888", marginTop: 6, lineHeight: 1.5 }}>
          Blue = destabilizing (negative ΔL) · Red = stabilizing/compensatory (positive ΔL) · 
          <strong style={{ color: "#555" }}> Key finding:</strong> blocks.20.mlp (zero: −0.91) and blocks.25.mlp (amplify: −0.77) show highest sensitivity.
          No perturbation changed the top-1 prediction — Gemma-2-2B exhibits robust canalization.
        </div>
      </div>

      {/* ── Panel B: Causal Traces ── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#333", marginBottom: 8, letterSpacing: "0.03em" }}>
          B &nbsp;Causal Trace: Recovery Score by Layer & Component Type
        </div>

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {/* Trace 1 */}
          <CausalTracePanel
            title='Trace 1: Semantic Substitution ("France" → "Poland")'
            subtitle="Same syntactic frame, different factual content"
            data={trace1Cells}
            colorFn={sequentialColor}
            hover={hover}
            setHover={setHover}
            panelId="T1"
          />
          {/* Trace 2 */}
          <CausalTracePanel
            title='Trace 2: Random Noise Corruption ("France" → gibberish)'
            subtitle="Complete destruction of semantic content"
            data={trace2Cells}
            colorFn={sequentialColor}
            hover={hover}
            setHover={setHover}
            panelId="T2"
          />
        </div>

        {/* Comparison insight */}
        <div style={{
          marginTop: 14,
          padding: "10px 14px",
          background: "#f8f8f6",
          borderLeft: "3px solid #7ba3a0",
          borderRadius: "0 4px 4px 0",
          fontSize: 11.5,
          lineHeight: 1.6,
          color: "#444"
        }}>
          <strong>Diagnostic contrast:</strong> Trace 1 (semantic) shows sharp recovery peaks at specific layers 
          (2, 13, 18, 22 — max 0.77 at blocks.22.mlp), indicating localized factual retrieval circuits. 
          Trace 2 (noise) shows diffuse early-layer recovery that attenuates through middle layers 
          before modest late-layer recovery — consistent with general language modeling resilience 
          rather than fact-specific circuits. The divergent recovery profiles confirm that Neural MRI 
          causal tracing can distinguish between <em>what a model knows</em> (Trace 1) 
          and <em>how it processes</em> (Trace 2).
        </div>
      </div>

      {/* Hover tooltip */}
      {hover && (
        <div style={{
          position: "fixed",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#1a1a1a",
          color: "#eee",
          padding: "6px 14px",
          borderRadius: 6,
          fontSize: 11.5,
          fontFamily: "'IBM Plex Mono', monospace",
          zIndex: 100,
          boxShadow: "0 2px 12px rgba(0,0,0,0.3)"
        }}>
          {hover.panel === "A"
            ? `${hover.comp} · ${hover.type} · ΔL = ${hover.val > 0 ? "+" : ""}${hover.val.toFixed(4)}`
            : `Layer ${hover.layer} · ${hover.ctype} · recovery = ${hover.val.toFixed(4)}`
          }
        </div>
      )}
    </div>
  );
}

// ── Causal Trace Sub-panel ────────────────────────────────────────────
function CausalTracePanel({ title, subtitle, data, colorFn, hover, setHover, panelId }) {
  const cellW = 18;
  const cellH = 28;
  const labelW = 36;
  const headerH = 14;

  const layers = data.filter(d => d.layer >= 0);
  const nLayers = layers.length;
  const svgW = labelW + nLayers * cellW + 10;
  const svgH = headerH + 2 * cellH + 30;

  return (
    <div style={{ flex: "1 1 460px", minWidth: 400 }}>
      <div style={{ fontSize: 11.5, fontWeight: 600, color: "#444", marginBottom: 2 }}>{title}</div>
      <div style={{ fontSize: 10, color: "#888", marginBottom: 6 }}>{subtitle}</div>
      <div style={{ overflowX: "auto" }}>
        <svg width={svgW} height={svgH} style={{ display: "block" }}>
          {/* Layer numbers */}
          {layers.map((d, i) => (
            <text
              key={i}
              x={labelW + i * cellW + cellW / 2}
              y={headerH}
              textAnchor="middle"
              fontSize={7.5}
              fill="#999"
            >
              {d.layer}
            </text>
          ))}

          {/* Row labels */}
          {["attn", "mlp"].map((ctype, ri) => (
            <text
              key={ctype}
              x={labelW - 4}
              y={headerH + 8 + ri * cellH + cellH / 2}
              textAnchor="end"
              fontSize={9}
              fontWeight={600}
              fill="#555"
            >
              {ctype}
            </text>
          ))}

          {/* Cells */}
          {layers.map((d, ci) =>
            ["attn", "mlp"].map((ctype, ri) => {
              const val = d[ctype];
              const x = labelW + ci * cellW;
              const y = headerH + 8 + ri * cellH;
              const isHovered = hover?.panel === panelId && hover.ci === ci && hover.ri === ri;
              return (
                <g
                  key={`${ci}-${ri}`}
                  onMouseEnter={() => setHover({ panel: panelId, ci, ri, layer: d.layer, ctype, val })}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: "default" }}
                >
                  <rect
                    x={x + 0.5}
                    y={y + 0.5}
                    width={cellW - 1}
                    height={cellH - 1}
                    rx={2}
                    fill={colorFn(val)}
                    stroke={isHovered ? "#333" : val > 0.5 ? "rgba(0,0,0,0.08)" : "none"}
                    strokeWidth={isHovered ? 1.5 : 0.5}
                  />
                  {val > 0.35 && (
                    <text
                      x={x + cellW / 2}
                      y={y + cellH / 2 + 3}
                      textAnchor="middle"
                      fontSize={7}
                      fontWeight={700}
                      fill="#fff"
                    >
                      {val.toFixed(2)}
                    </text>
                  )}
                </g>
              );
            })
          )}

          {/* Mini color scale */}
          <g transform={`translate(${labelW + nLayers * cellW + 4}, ${headerH + 8})`}>
            {Array.from({ length: 6 }, (_, i) => (
              <rect
                key={i}
                x={0}
                y={i * 9}
                width={8}
                height={9}
                fill={colorFn(i * 0.2)}
              />
            ))}
            <text x={12} y={7} fontSize={7} fill="#999">0</text>
            <text x={12} y={52} fontSize={7} fill="#999">1.0</text>
          </g>
        </svg>
      </div>
    </div>
  );
}
