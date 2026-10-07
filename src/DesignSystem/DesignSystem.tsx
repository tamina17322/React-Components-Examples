import { useState } from "react";
import "./DesignSystem.css";

const colors = {
  neutrals: [
    { name: "Neutral 000", hex: "#FFFFFF" },
    { name: "Neutral 050", hex: "#F8FAFC" },
    { name: "Neutral 100", hex: "#F1F5F9" },
    { name: "Neutral 200", hex: "#E2E8F0" },
    { name: "Neutral 300", hex: "#CBD5E1" },
    { name: "Neutral 400", hex: "#94A3B8" },
    { name: "Neutral 500", hex: "#64748B" },
    { name: "Neutral 600", hex: "#475569" },
    { name: "Neutral 700", hex: "#334155" },
    { name: "Neutral 800", hex: "#1E293B" },
    { name: "Neutral 900", hex: "#0F172A" },
    { name: "Neutral 950", hex: "#0B132B" },
  ],

  primary: [
    { name: "Primary 600", hex: "#6C5CE7" },
    { name: "Primary 500", hex: "#8C7AE6" },
    { name: "Primary 400", hex: "#A29BFE" },
    { name: "Primary 200", hex: "#D6A2E8" },
    { name: "Primary 050", hex: "#F3E5F5" },
  ],

  accents: [
    { name: "Cyan Accent", hex: "#00F5D4" },
    { name: "Cyan Mid", hex: "#00BBF9" },
    { name: "Neon Pink", hex: "#FF007F" },
    { name: "Solar Amber", hex: "#FFB703" },
    { name: "Deep Violet", hex: "#7209B7" },
  ],

  semantic: {
    success: [
      { name: "Success Base", hex: "#10B981" },
      { name: "Success Light", hex: "#34D399" },
      { name: "Success Soft", hex: "#D1FAE5" },
      { name: "Success Dark", hex: "#065F46" },
    ],

    warning: [
      { name: "Warning Base", hex: "#F59E0B" },
      { name: "Warning Light", hex: "#FBBF24" },
      { name: "Warning Soft", hex: "#FEF3C7" },
      { name: "Warning Dark", hex: "#92400E" },
    ],

    error: [
      { name: "Error Base", hex: "#EF4444" },
      { name: "Error Light", hex: "#F87171" },
      { name: "Error Soft", hex: "#FEE2E2" },
      { name: "Error Dark", hex: "#991B1B" },
    ],
  },
};

const themes = {
  light: [
    {
      name: "Base Background",
      usage: "Canvas / Main Page",
      hex: "#FFFFFF",
    },
    {
      name: "Surface",
      usage: "Modals, Panels, Cards",
      hex: "#F8FAFC",
    },
    {
      name: "Primary Text",
      usage: "Headings & Body Text",
      hex: "#0F172A",
    },
    {
      name: "Secondary Text",
      usage: "Subtitles & Captions",
      hex: "#64748B",
    },
    {
      name: "Primary Action",
      usage: "Buttons, CTA, Active Tabs",
      hex: "#6C5CE7",
    },
    {
      name: "Secondary Accent",
      usage: "Highlights & Badges",
      hex: "#00BBF9",
    },
    {
      name: "Borders & Dividers",
      usage: "Subtle Component Outlines",
      hex: "#E2E8F0",
    },
    {
      name: "Success UI",
      usage: "Badges, Success Alerts",
      hex: "#10B981",
    },
    {
      name: "Warning UI",
      usage: "Alerts, Pending States",
      hex: "#F59E0B",
    },
    {
      name: "Error UI",
      usage: "Validation & Destructive Action",
      hex: "#EF4444",
    },
    {
      name: "Info UI",
      usage: "Informational Callouts",
      hex: "#3B82F6",
    },
  ],

  dark: [
    {
      name: "Base Background",
      usage: "Canvas / Main Page",
      hex: "#0B132B",
    },
    {
      name: "Surface",
      usage: "Modals, Panels, Cards",
      hex: "#1C2541",
    },
    {
      name: "Primary Text",
      usage: "Headings & Body Text",
      hex: "#F8FAFC",
    },
    {
      name: "Secondary Text",
      usage: "Subtitles & Captions",
      hex: "#94A3B8",
    },
    {
      name: "Primary Action",
      usage: "Buttons, CTA, Active Tabs",
      hex: "#A29BFE",
    },
    {
      name: "Secondary Accent",
      usage: "Highlights & Badges",
      hex: "#00F5D4",
    },
    {
      name: "Borders & Dividers",
      usage: "Subtle Component Outlines",
      hex: "#334155",
    },
    {
      name: "Success UI",
      usage: "Badges, Success Alerts",
      hex: "#34D399",
    },
    {
      name: "Warning UI",
      usage: "Alerts, Pending States",
      hex: "#FBBF24",
    },
    {
      name: "Error UI",
      usage: "Validation & Destructive Action",
      hex: "#F87171",
    },
    {
      name: "Info UI",
      usage: "Informational Callouts",
      hex: "#60A5FA",
    },
  ],
};

const typography = [
  {
    name: "Display Title",
    role: "Hero Heading",
    size: "32px",
    lineHeight: "40px",
    weight: 800,
    tracking: "-0.02em",
  },
  {
    name: "Heading 1",
    role: "Page Header",
    size: "24px",
    lineHeight: "32px",
    weight: 700,
    tracking: "-0.01em",
  },
  {
    name: "Heading 2",
    role: "Section Header",
    size: "20px",
    lineHeight: "28px",
    weight: 600,
    tracking: "-0.005em",
  },
  {
    name: "Heading 3",
    role: "Card Title",
    size: "16px",
    lineHeight: "24px",
    weight: 600,
    tracking: "0em",
  },
  {
    name: "Body Large",
    role: "Lead paragraphs & intros",
    size: "16px",
    lineHeight: "24px",
    weight: 400,
    tracking: "0em",
  },
  {
    name: "Body Default",
    role: "Standard component & body text",
    size: "14px",
    lineHeight: "20px",
    weight: 400,
    tracking: "0em",
  },
  {
    name: "Body Small",
    role: "Captions, tooltips, and helpers",
    size: "12px",
    lineHeight: "16px",
    weight: 400,
    tracking: "0.005em",
  },
  {
    name: "Overline / Badge",
    role: "Category tag",
    size: "11px",
    lineHeight: "14px",
    weight: 700,
    tracking: "0.08em",
  },
];

export default function DesignSystem() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`design-system ${darkMode ? "dark" : "light"}`}>
      <header className="design-system-header">
        <div className="header-brand">
          <span className="header-icon">✦</span>

          <div>
            <h1>Cyberpunk Aurora</h1>
            <p>Design System</p>
          </div>
        </div>

        <div className="header-actions">
          <button
            className={!darkMode ? "active" : ""}
            onClick={() => setDarkMode(false)}
          >
            ☀ Light
          </button>

          <button
            className={darkMode ? "active" : ""}
            onClick={() => setDarkMode(true)}
          >
            🌙 Dark
          </button>
        </div>
      </header>

      <main>

        <section>
          <h2>Colors</h2>

          <h3>Neutral Scale</h3>

          <div className="color-grid">
            {colors.neutrals.map((color) => (
              <div className="color-card" key={color.name}>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: color.hex }}
                />

                <strong>{color.name}</strong>

                <p>{color.hex}</p>
              </div>
            ))}
          </div>

          <h3>Primary Colors</h3>

          <div className="color-grid">
            {colors.primary.map((color) => (
              <div className="color-card" key={color.name}>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: color.hex }}
                />

                <strong>{color.name}</strong>

                <p>{color.hex}</p>
              </div>
            ))}
          </div>

          <h3>Accent Colors</h3>

          <div className="color-grid">
            {colors.accents.map((color) => (
              <div className="color-card" key={color.name}>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: color.hex }}
                />

                <strong>{color.name}</strong>

                <p>{color.hex}</p>
              </div>
            ))}
          </div>

          <h3>Semantic Colors</h3>

          {Object.entries(colors.semantic).map(([category, shades]) => (
            <div key={category}>
              <h4 style={{ textTransform: "capitalize" }}>
                {category}
              </h4>

              <div className="color-grid">
                {shades.map((color) => (
                  <div className="color-card" key={color.name}>
                    <div
                      className="color-swatch"
                      style={{ backgroundColor: color.hex }}
                    />

                    <strong>{color.name}</strong>

                    <p>{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2>Themes</h2>

          <div className="theme-container">
            <div className="theme-panel">
              <h3>Light Mode</h3>

              <div className="theme-grid">
                {themes.light.map((token) => (
                  <div className="theme-token" key={token.name}>
                    <div
                      className="theme-token-swatch"
                      style={{ backgroundColor: token.hex }}
                    />

                    <strong>{token.name}</strong>

                    <p>{token.usage}</p>

                    <span>{token.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-panel">
              <h3>Dark Mode</h3>

              <div className="theme-grid">
                {themes.dark.map((token) => (
                  <div className="theme-token" key={token.name}>
                    <div
                      className="theme-token-swatch"
                      style={{ backgroundColor: token.hex }}
                    />

                    <strong>{token.name}</strong>

                    <p>{token.usage}</p>

                    <span>{token.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        <section>
          <h2>Typography</h2>

          <div className="typography-grid">
            {typography.map((type) => (
              <div className="typography-card" key={type.name}>
                <div
                  style={{
                    fontSize: type.size,
                    lineHeight: type.lineHeight,
                    fontWeight: type.weight,
                    letterSpacing: type.tracking,
                  }}
                >
                  {type.name}
                </div>

                <p>{type.role}</p>

                <span>
                  {type.size} / {type.lineHeight} · {type.weight} ·{" "}
                  {type.tracking}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="font-stack-grid">
          <div className="font-stack-card">
            <h3>Font Stack</h3>

            <p>
              -apple-system,<br /> BlinkMacSystemFont, "Segoe UI", Roboto,<br />
              "Helvetica Neue", Arial, sans-serif
            </p>
          </div>

          <div className="font-stack-card">
            <h3>Monospace</h3>

            <p>
              font-family: SFMono-Regular, Consolas, <br />
              "Liberation Mono", Menlo, Courier, monospace;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}