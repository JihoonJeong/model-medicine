import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────

// Pattern data: prediction change counts out of 24 perturbations
const patternData = [
  { model: "Gemma-2-2B", base: 0, instruct: 8, total: 24, pattern: "degradation" },
  { model: "Llama-3.2-3B", base: 4, instruct: 2, total: 24, pattern: "improvement" },
  { model: "Qwen-2.5-3B", base: 3, instruct: 3, total: 24, pattern: "immutability" },
];

const patternColors = {
  degradation: { base: "#93c5b8", instruct: "#c0392b" },
  improvement: { base: "#c0392b", instruct: "#27ae60" },
  immutability: { base: "#7f8c8d", instruct: "#7f8c8d" },
};

const patternLabels = {
  degradation: "Pattern 1: Degradation",
  improvement: "Pattern 2: Improvement",
  immutability: "Pattern 3: Immutability",
};

const patternDescriptions = {
  degradation: "Instruction tuning introduced new failure modes",
  improvement: "Instruction tuning reduced vulnerability",
  immutability: "Vulnerability profile unchanged by tuning",
};

// Irreducible vulnerability data
const irreducibleData = [
  {
    model: "Llama-3.2-3B",
    component: "blocks.0.mlp",
    variants: [
      { label: "base / zero", dl: -15.79, changed: true },
      { label: "base / ablate", dl: -17.61, changed: true },
      { label: "instruct / zero", dl: -17.12, changed: true },
      { label: "instruct / ablate", dl: -17.42, changed: true },
    ],
  },
  {
    model: "Qwen-2.5-3B",
    component: "blocks.0.attn",
    variants: [
      { label: "base / zero", dl: -18.35, changed: true },
      { label: "base / ablate", dl: -13.55, changed: true },
      { label: "instruct / zero", dl: -18.15, changed: true },
      { label: "instruct / ablate", dl: -15.15, changed: true },
    ],
  },
];

// ── Main Component ────────────────────────────────────────────────────
export default function FigCase4() {
  const [hover, setHover] = useState(null);

  return (
    <div style={{
      fontFamily: "'IBM Plex Sans', 'Helvetica Neue', sans-serif",
      background: "#fff",
      padding: "24px 28px",
      maxWidth: 960,
      margin: "0 auto",
      color: "#1a1a1a"
    }}>
      {/* Title block */}
      <div style={{ marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: "#555", letterSpacing: "0.05em" }}>
          FIGURE 4
        </span>
      </div>
      <h2 style={{
        fontSize: 17, fontWeight: 600, margin: "0 0 4px 0", lineHeight: 1.35,
        fontFamily: "'IBM Plex Serif', Georgia, serif"
      }}>
        Predictive Power: Base vs. Instruct Perturbation Vulnerability Across Three Architectures
      </h2>
      <p style={{ fontSize: 12.5, color: "#666", margin: "0 0 22px 0", lineHeight: 1.5, maxWidth: 780 }}>
        24 perturbations per model variant (8 components × 3 types). Prediction change = top-1 token 
        changed after perturbation. Three distinct patterns emerge from base→instruct comparison.
      </p>

      {/* ── Panel A: Three Patterns Bar Chart ── */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#333", marginBottom: 14, letterSpacing: "0.03em" }}>
          A &nbsp;Three Patterns of Instruction Tuning Effect on Vulnerability
        </div>

        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          {patternData.map((d, i) => {
            const baseRate = (d.base / d.total * 100);
            const instrRate = (d.instruct / d.total * 100);
            const maxRate = 40; // scale ceiling
            const barH = 140;
            const colors = patternColors[d.pattern];

            return (
              <div key={i} style={{ flex: "1 1 200px", minWidth: 180 }}>
                {/* Pattern label */}
                <div style={{
                  fontSize: 11, fontWeight: 700, 
                  color: d.pattern === "degradation" ? "#c0392b" : d.pattern === "improvement" ? "#27ae60" : "#7f8c8d",
                  marginBottom: 2, letterSpacing: "0.02em"
                }}>
                  {patternLabels[d.pattern]}
                </div>
                <div style={{ fontSize: 10, color: "#888", marginBottom: 10 }}>
                  {patternDescriptions[d.pattern]}
                </div>

                {/* Bar pair */}
                <svg width={180} height={barH + 50} style={{ display: "block" }}>
                  {/* Grid lines */}
                  {[0, 10, 20, 30, 40].map(v => (
                    <g key={v}>
                      <line
                        x1={50} y1={barH - (v / maxRate) * barH}
                        x2={170} y2={barH - (v / maxRate) * barH}
                        stroke="#eee" strokeWidth={1}
                      />
                      <text x={44} y={barH - (v / maxRate) * barH + 4} textAnchor="end" fontSize={8.5} fill="#bbb">
                        {v}%
                      </text>
                    </g>
                  ))}

                  {/* Base bar */}
                  <rect
                    x={65}
                    y={barH - (baseRate / maxRate) * barH}
                    width={36}
                    height={Math.max((baseRate / maxRate) * barH, 2)}
                    rx={3}
                    fill={colors.base}
                    opacity={0.85}
                  />
                  <text
                    x={83}
                    y={barH - (baseRate / maxRate) * barH - 5}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={700}
                    fill={colors.base === "#93c5b8" ? "#555" : colors.base}
                  >
                    {baseRate.toFixed(0)}%
                  </text>

                  {/* Arrow */}
                  <line
                    x1={108} y1={barH / 2 - 2}
                    x2={118} y2={barH / 2 - 2}
                    stroke="#aaa" strokeWidth={1.5}
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                      <polygon points="0 0, 6 2, 0 4" fill="#aaa" />
                    </marker>
                  </defs>

                  {/* Instruct bar */}
                  <rect
                    x={125}
                    y={barH - (instrRate / maxRate) * barH}
                    width={36}
                    height={Math.max((instrRate / maxRate) * barH, 2)}
                    rx={3}
                    fill={colors.instruct}
                    opacity={0.85}
                  />
                  <text
                    x={143}
                    y={barH - (instrRate / maxRate) * barH - 5}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight={700}
                    fill={colors.instruct}
                  >
                    {instrRate.toFixed(0)}%
                  </text>

                  {/* Labels */}
                  <text x={83} y={barH + 14} textAnchor="middle" fontSize={9} fill="#666">base</text>
                  <text x={143} y={barH + 14} textAnchor="middle" fontSize={9} fill="#666">instruct</text>
                  <text x={113} y={barH + 30} textAnchor="middle" fontSize={10.5} fontWeight={600} fill="#333">
                    {d.model}
                  </text>

                  {/* Change counts */}
                  <text x={83} y={barH + 44} textAnchor="middle" fontSize={8} fill="#999">
                    {d.base}/{d.total}
                  </text>
                  <text x={143} y={barH + 44} textAnchor="middle" fontSize={8} fill="#999">
                    {d.instruct}/{d.total}
                  </text>
                </svg>
              </div>
            );
          })}
        </div>

        <div style={{ fontSize: 11, color: "#888", marginTop: 8, lineHeight: 1.5 }}>
          Prediction change rate = perturbations that altered top-1 token / total perturbations.
          <strong style={{ color: "#555" }}> Gemma's 0→33% degradation</strong> is a potential iatrogenic 
          effect of instruction tuning — the "treatment" created new vulnerabilities absent in the base model.
        </div>
      </div>

      {/* ── Panel B: Irreducible Vulnerabilities ── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#333", marginBottom: 8, letterSpacing: "0.03em" }}>
          B &nbsp;Architectural Bottlenecks: Irreducible Vulnerabilities Persisting Across Tuning
        </div>

        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
          {irreducibleData.map((model, mi) => {
            const maxAbs = 20;
            const barAreaW = 280;
            const labelW = 100;
            const rowH = 32;

            return (
              <div key={mi} style={{ flex: "1 1 380px" }}>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "#444", marginBottom: 2 }}>
                  {model.model}
                </div>
                <div style={{
                  fontSize: 10, color: "#888", marginBottom: 8,
                  fontFamily: "'IBM Plex Mono', monospace"
                }}>
                  Component: {model.component}
                </div>

                <svg width={labelW + barAreaW + 60} height={model.variants.length * rowH + 30} style={{ display: "block" }}>
                  {/* Zero line */}
                  <line
                    x1={labelW + barAreaW / 2}
                    y1={0}
                    x2={labelW + barAreaW / 2}
                    y2={model.variants.length * rowH + 5}
                    stroke="#ddd"
                    strokeWidth={1}
                    strokeDasharray="3,3"
                  />

                  {/* Scale labels */}
                  <text x={labelW + 4} y={model.variants.length * rowH + 18} fontSize={8} fill="#bbb">−{maxAbs}</text>
                  <text x={labelW + barAreaW / 2} y={model.variants.length * rowH + 18} textAnchor="middle" fontSize={8} fill="#bbb">0</text>
                  <text x={labelW + barAreaW - 4} y={model.variants.length * rowH + 18} textAnchor="end" fontSize={8} fill="#bbb">+{maxAbs}</text>

                  {model.variants.map((v, vi) => {
                    const y = vi * rowH;
                    const centerX = labelW + barAreaW / 2;
                    const barWidth = (Math.abs(v.dl) / maxAbs) * (barAreaW / 2);
                    const barX = v.dl < 0 ? centerX - barWidth : centerX;
                    const isBase = v.label.includes("base");
                    const isHovered = hover?.panel === "B" && hover.mi === mi && hover.vi === vi;

                    return (
                      <g
                        key={vi}
                        onMouseEnter={() => setHover({ panel: "B", mi, vi, ...v })}
                        onMouseLeave={() => setHover(null)}
                        style={{ cursor: "default" }}
                      >
                        {/* Row label */}
                        <text
                          x={labelW - 6}
                          y={y + rowH / 2 + 4}
                          textAnchor="end"
                          fontSize={9.5}
                          fill={isBase ? "#666" : "#444"}
                          fontWeight={isBase ? 400 : 600}
                        >
                          {v.label}
                        </text>

                        {/* Bar */}
                        <rect
                          x={barX}
                          y={y + 4}
                          width={barWidth}
                          height={rowH - 8}
                          rx={3}
                          fill={v.changed ? "#c0392b" : "#27ae60"}
                          opacity={isHovered ? 1 : 0.75}
                          stroke={isHovered ? "#333" : "none"}
                          strokeWidth={1}
                        />

                        {/* Value — inside bar for large values, outside for small */}
                        <text
                          x={barWidth > 60 ? (v.dl < 0 ? barX + 8 : barX + barWidth - 8) : (v.dl < 0 ? barX + barWidth + 4 : barX - 4)}
                          y={y + rowH / 2 + 4}
                          textAnchor={barWidth > 60 ? (v.dl < 0 ? "start" : "end") : (v.dl < 0 ? "start" : "end")}
                          fontSize={9.5}
                          fontFamily="'IBM Plex Mono', monospace"
                          fontWeight={700}
                          fill={barWidth > 60 ? "#fff" : "#c0392b"}
                        >
                          {v.dl.toFixed(2)}
                        </text>

                        {/* Changed indicator */}
                        {v.changed && (
                          <text
                            x={labelW + barAreaW + 8}
                            y={y + rowH / 2 + 4}
                            fontSize={9}
                            fill="#c0392b"
                            fontWeight={600}
                          >
                            ✕
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            );
          })}
        </div>

        {/* Insight box */}
        <div style={{
          marginTop: 14,
          padding: "10px 14px",
          background: "#fdf6f0",
          borderLeft: "3px solid #c0392b",
          borderRadius: "0 4px 4px 0",
          fontSize: 11.5,
          lineHeight: 1.6,
          color: "#444"
        }}>
          <strong>Diagnostic implication:</strong> Llama's blocks.0.mlp and Qwen's blocks.0.attn show 
          catastrophic sensitivity (|ΔL| &gt; 13) that persists identically across base and instruct variants.
          These represent <em>architectural vulnerabilities</em> — structural bottlenecks in the model's 
          layer-0 processing that no amount of instruction tuning can remediate. In medical terms: 
          these are congenital conditions, not acquired diseases. ✕ = prediction changed.
        </div>
      </div>

      {/* Hover tooltip */}
      {hover && hover.panel === "B" && (
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
          {hover.label} · ΔL = {hover.dl.toFixed(4)} · prediction {hover.changed ? "CHANGED" : "stable"}
        </div>
      )}
    </div>
  );
}
