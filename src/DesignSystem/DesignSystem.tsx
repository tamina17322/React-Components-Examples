import { useEffect, useState } from "react";
import "./DesignSystem.css";

type ColorToken = {
  name: string;
  variable: string;
};

type ThemeToken = {
  name: string;
  usage: string;
  variable: string;
};

const colors = {
  neutrals: [
    { name: "Neutral 000", variable: "--neutral-000" },
    { name: "Neutral 050", variable: "--neutral-050" },
    { name: "Neutral 100", variable: "--neutral-100" },
    { name: "Neutral 200", variable: "--neutral-200" },
    { name: "Neutral 300", variable: "--neutral-300" },
    { name: "Neutral 400", variable: "--neutral-400" },
    { name: "Neutral 500", variable: "--neutral-500" },
    { name: "Neutral 600", variable: "--neutral-600" },
    { name: "Neutral 700", variable: "--neutral-700" },
    { name: "Neutral 800", variable: "--neutral-800" },
    { name: "Neutral 900", variable: "--neutral-900" },
    { name: "Neutral 950", variable: "--neutral-950" },
  ],

  primary: [
    { name: "Primary 600", variable: "--primary-600" },
    { name: "Primary 500", variable: "--primary-500" },
    { name: "Primary 400", variable: "--primary-400" },
    { name: "Primary 200", variable: "--primary-200" },
    { name: "Primary 050", variable: "--primary-050" },
  ],

  accents: [
    { name: "Cyan Accent", variable: "--accent-cyan" },
    { name: "Cyan Mid", variable: "--accent-cyan-mid" },
    { name: "Neon Pink", variable: "--accent-pink" },
    { name: "Solar Amber", variable: "--accent-amber" },
    { name: "Deep Violet", variable: "--accent-violet" },
  ],

  semantic: {
    success: [
      { name: "Success Base", variable: "--success" },
      { name: "Success Light", variable: "--success-light" },
      { name: "Success Soft", variable: "--success-soft" },
      { name: "Success Dark", variable: "--success-dark" },
    ],

    warning: [
      { name: "Warning Base", variable: "--warning" },
      { name: "Warning Light", variable: "--warning-light" },
      { name: "Warning Soft", variable: "--warning-soft" },
      { name: "Warning Dark", variable: "--warning-dark" },
    ],

    error: [
      { name: "Error Base", variable: "--error" },
      { name: "Error Light", variable: "--error-light" },
      { name: "Error Soft", variable: "--error-soft" },
      { name: "Error Dark", variable: "--error-dark" },
    ],

    info: [
      { name: "Info Base", variable: "--info" },
      { name: "Info Light", variable: "--info-light" },
      { name: "Info Soft", variable: "--info-soft" },
      { name: "Info Dark", variable: "--info-dark" },
    ],
  },
};

const themes: Record<"light" | "dark", ThemeToken[]> = {
  light: [
    {
      name: "Base Background",
      usage: "Canvas / Main Page",
      variable: "--background",
    },
    {
      name: "Surface",
      usage: "Modals, Panels, Cards",
      variable: "--surface",
    },
    {
      name: "Primary Text",
      usage: "Headings & Body Text",
      variable: "--text-primary",
    },
    {
      name: "Secondary Text",
      usage: "Subtitles & Captions",
      variable: "--text-secondary",
    },
    {
      name: "Primary Action",
      usage: "Buttons, CTA, Active Tabs",
      variable: "--action-primary",
    },
    {
      name: "Secondary Accent",
      usage: "Highlights & Badges",
      variable: "--accent-secondary",
    },
    {
      name: "Borders & Dividers",
      usage: "Subtle Component Outlines",
      variable: "--border-color",
    },
    {
      name: "Success UI",
      usage: "Badges, Success Alerts",
      variable: "--success",
    },
    {
      name: "Warning UI",
      usage: "Alerts, Pending States",
      variable: "--warning",
    },
    {
      name: "Error UI",
      usage: "Validation & Destructive Action",
      variable: "--error",
    },
    {
      name: "Info UI",
      usage: "Informational Callouts",
      variable: "--info",
    },
  ],

  dark: [
    {
      name: "Base Background",
      usage: "Canvas / Main Page",
      variable: "--background",
    },
    {
      name: "Surface",
      usage: "Modals, Panels, Cards",
      variable: "--surface",
    },
    {
      name: "Primary Text",
      usage: "Headings & Body Text",
      variable: "--text-primary",
    },
    {
      name: "Secondary Text",
      usage: "Subtitles & Captions",
      variable: "--text-secondary",
    },
    {
      name: "Primary Action",
      usage: "Buttons, CTA, Active Tabs",
      variable: "--action-primary",
    },
    {
      name: "Secondary Accent",
      usage: "Highlights & Badges",
      variable: "--accent-secondary",
    },
    {
      name: "Borders & Dividers",
      usage: "Subtle Component Outlines",
      variable: "--border-color",
    },
    {
      name: "Success UI",
      usage: "Badges, Success Alerts",
      variable: "--success",
    },
    {
      name: "Warning UI",
      usage: "Alerts, Pending States",
      variable: "--warning",
    },
    {
      name: "Error UI",
      usage: "Validation & Destructive Action",
      variable: "--error",
    },
    {
      name: "Info UI",
      usage: "Informational Callouts",
      variable: "--info",
    },
  ],
};

const typography = [
  {
    name: "Display Title",
    role: "Hero Heading",
    size: "--text-display",
    lineHeight: "--line-display",
    weight: "--weight-extrabold",
    tracking: "--tracking-display",
  },
  {
    name: "Heading 1",
    role: "Page Header",
    size: "--text-h1",
    lineHeight: "--line-h1",
    weight: "--weight-bold",
    tracking: "--tracking-h1",
  },
  {
    name: "Heading 2",
    role: "Section Header",
    size: "--text-h2",
    lineHeight: "--line-h2",
    weight: "--weight-semibold",
    tracking: "--tracking-h2",
  },
  {
    name: "Heading 3",
    role: "Card Title",
    size: "--text-h3",
    lineHeight: "--line-h3",
    weight: "--weight-semibold",
    tracking: "--tracking-default",
  },
  {
    name: "Body Large",
    role: "Lead paragraphs & intros",
    size: "--text-body-large",
    lineHeight: "--line-body-large",
    weight: "--weight-regular",
    tracking: "--tracking-default",
  },
  {
    name: "Body Default",
    role: "Standard component & body text",
    size: "--text-body",
    lineHeight: "--line-body",
    weight: "--weight-regular",
    tracking: "--tracking-default",
  },
  {
    name: "Body Small",
    role: "Captions, tooltips, and helpers",
    size: "--text-small",
    lineHeight: "--line-small",
    weight: "--weight-regular",
    tracking: "--tracking-small",
  },
  {
    name: "Overline / Badge",
    role: "Category tag",
    size: "--text-overline",
    lineHeight: "--line-overline",
    weight: "--weight-bold",
    tracking: "--tracking-overline",
  },
];

export default function DesignSystem() {
  const [darkMode, setDarkMode] = useState(true);
  const [tokenValues, setTokenValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".design-system");

    if (!root) return;

    const updateTokenValues = () => {
      const styles = getComputedStyle(root);
      const variables = new Set<string>();

      const collectVariables = (items: ColorToken[] | ThemeToken[]) => {
        items.forEach((item) => variables.add(item.variable));
      };

      collectVariables(colors.neutrals);
      collectVariables(colors.primary);
      collectVariables(colors.accents);

      Object.values(colors.semantic).forEach(collectVariables);
      Object.values(themes).forEach(collectVariables);

      const values: Record<string, string> = {};

      variables.forEach((variable) => {
        values[variable] = styles.getPropertyValue(variable).trim();
      });

      setTokenValues(values);
    };

    updateTokenValues();

    return () => {};
  }, [darkMode]);

  const renderColorCards = (items: ColorToken[]) => (
    <div className="color-grid">
      {items.map((color) => (
        <div className="color-card" key={color.name}>
          <div
            className="color-swatch"
            style={{ backgroundColor: `var(${color.variable})` }}
          />

          <strong>{color.name}</strong>
          <p>{tokenValues[color.variable] || color.variable}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`design-system ${darkMode ? "dark" : "light"}`}
      data-theme={darkMode ? "dark" : "light"}
    >
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
          {renderColorCards(colors.neutrals)}

          <h3>Primary Colors</h3>
          {renderColorCards(colors.primary)}

          <h3>Accent Colors</h3>
          {renderColorCards(colors.accents)}

          <h3>Semantic Colors</h3>

          {Object.entries(colors.semantic).map(([category, shades]) => (
            <div key={category}>
              <h4 style={{ textTransform: "capitalize" }}>{category}</h4>
              {renderColorCards(shades)}
            </div>
          ))}
        </section>

        <section>
          <h2>Themes</h2>

          <div className="theme-container">
            {(["light", "dark"] as const).map((themeName) => (
              <div
                className="theme-panel"
                key={themeName}
                data-theme={themeName}
              >
                <h3>
                  {themeName === "light" ? "Light Mode" : "Dark Mode"}
                </h3>

                <div className="theme-grid">
                  {themes[themeName].map((token) => (
                    <div className="theme-token" key={token.name}>
                      <div
                        className="theme-token-swatch"
                        style={{
                          backgroundColor: `var(${token.variable})`,
                        }}
                      />

                      <strong>{token.name}</strong>
                      <p>{token.usage}</p>
                      <span>
                        {tokenValues[token.variable] || token.variable}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Typography</h2>

          <div className="typography-grid">
            {typography.map((type) => (
              <div className="typography-card" key={type.name}>
                <div
                  style={{
                    fontFamily: "var(--font-primary)",
                    fontSize: `var(${type.size})`,
                    lineHeight: `var(${type.lineHeight})`,
                    fontWeight: `var(${type.weight})`,
                    letterSpacing: `var(${type.tracking})`,
                  }}
                >
                  {type.name}
                </div>

                <p>{type.role}</p>

                <span>
                  {tokenValues[type.size] || `var(${type.size})`} /{" "}
                  {tokenValues[type.lineHeight] || `var(${type.lineHeight})`} ·{" "}
                  {tokenValues[type.weight] || `var(${type.weight})`} ·{" "}
                  {tokenValues[type.tracking] || `var(${type.tracking})`}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="font-stack-grid">
          <div className="font-stack-card">
            <h3>Font Stack</h3>

            <p>
              -apple-system,
              <br />
              BlinkMacSystemFont, "Segoe UI", Roboto,
              <br />
              "Helvetica Neue", Arial, sans-serif
            </p>
          </div>

          <div className="font-stack-card">
            <h3>Monospace</h3>

            <p>
              SFMono-Regular, Consolas,
              <br />
              "Liberation Mono", Menlo, Courier, monospace
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
