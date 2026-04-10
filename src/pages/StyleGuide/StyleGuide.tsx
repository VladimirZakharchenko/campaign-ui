import styles from "./StyleGuide.module.scss";

export const StyleGuide = () => {
  return (
    <div className={styles.styleGuide}>
      <h1>Design System / Style Guide</h1>
      <p className={styles.lead}>
        CampaignUI — универсальная система дизайна для маркетинговых компонентов
      </p>

      {/* Colors Section */}
      <section className={styles.section}>
        <h2>Colors</h2>

        <h3>Primary Colors</h3>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Primary</strong>
              <code>var(--color-primary)</code>
              <code>#3b82f6</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-primary-dark)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Primary Dark</strong>
              <code>var(--color-primary-dark)</code>
              <code>#2563eb</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-primary-light)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Primary Light</strong>
              <code>var(--color-primary-light)</code>
              <code>#60a5fa</code>
            </div>
          </div>
        </div>

        <h3>Semantic Colors</h3>
        <div className={styles.colorGrid}>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-success)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Success</strong>
              <code>var(--color-success)</code>
              <code>#22c55e</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-warning)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Warning</strong>
              <code>var(--color-warning)</code>
              <code>#f59e0b</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-danger)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Danger</strong>
              <code>var(--color-danger)</code>
              <code>#ef4444</code>
            </div>
          </div>
          <div className={styles.colorCard}>
            <div
              className={styles.colorSwatch}
              style={{ backgroundColor: "var(--color-info)" }}
            />
            <div className={styles.colorInfo}>
              <strong>Info</strong>
              <code>var(--color-info)</code>
              <code>#06b6d4</code>
            </div>
          </div>
        </div>

        <h3>Neutral Colors (Gray Scale)</h3>
        <div className={styles.grayGrid}>
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((level) => (
            <div key={level} className={styles.grayCard}>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: `var(--gray-${level})` }}
              />
              <div className={styles.colorInfo}>
                <strong>Gray {level}</strong>
                <code>var(--gray-{level})</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className={styles.section}>
        <h2>Typography</h2>

        <div className={styles.typographyDemo}>
          <div className={styles.fontDemo}>
            <h1>Heading 1 / 36px / Bold</h1>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <h2>Heading 2 / 30px / Bold</h2>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <h3>Heading 3 / 24px / Semibold</h3>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <h4>Heading 4 / 20px / Medium</h4>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <p className={styles.bodyLarge}>Body Large / 18px / Regular</p>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <p>Body Regular / 16px / Regular</p>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <p className={styles.bodySmall}>Body Small / 14px / Regular</p>
            <p className={styles.meta}>
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className={styles.fontDemo}>
            <code>Code / Monospace / 14px</code>
            <p className={styles.meta}>
              const styles = {`{ color: 'primary' }`}
            </p>
          </div>
        </div>

        <h3>Font Weights</h3>
        <div className={styles.weightDemo}>
          <p style={{ fontWeight: 400 }}>
            Normal (400) — The quick brown fox jumps
          </p>
          <p style={{ fontWeight: 500 }}>
            Medium (500) — The quick brown fox jumps
          </p>
          <p style={{ fontWeight: 600 }}>
            Semibold (600) — The quick brown fox jumps
          </p>
          <p style={{ fontWeight: 700 }}>
            Bold (700) — The quick brown fox jumps
          </p>
        </div>
      </section>

      {/* Spacing Section */}
      <section className={styles.section}>
        <h2>Spacing (8px system)</h2>
        <div className={styles.spacingDemo}>
          {[1, 2, 3, 4, 6, 8, 12, 16, 20, 24].map((spacing) => (
            <div key={spacing} className={styles.spacingItem}>
              <div
                className={styles.spacingBox}
                style={{
                  width: `${spacing * 8}px`,
                  height: `${spacing * 8}px`,
                }}
              />
              <code>
                ${spacing * 8}px (spacing-{spacing})
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows Section */}
      <section className={styles.section}>
        <h2>Shadows</h2>
        <div className={styles.shadowGrid}>
          <div className={styles.shadowCard}>
            <div
              className={styles.shadowDemo}
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              Shadow SM
            </div>
          </div>
          <div className={styles.shadowCard}>
            <div
              className={styles.shadowDemo}
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              Shadow MD
            </div>
          </div>
          <div className={styles.shadowCard}>
            <div
              className={styles.shadowDemo}
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              Shadow LG
            </div>
          </div>
          <div className={styles.shadowCard}>
            <div
              className={styles.shadowDemo}
              style={{ boxShadow: "var(--shadow-xl)" }}
            >
              Shadow XL
            </div>
          </div>
        </div>
      </section>

      {/* Border Radius Section */}
      <section className={styles.section}>
        <h2>Border Radius</h2>
        <div className={styles.radiusGrid}>
          <div className={styles.radiusCard}>
            <div
              className={styles.radiusDemo}
              style={{ borderRadius: "var(--radius-sm)" }}
            >
              SM
            </div>
            <code>4px</code>
          </div>
          <div className={styles.radiusCard}>
            <div
              className={styles.radiusDemo}
              style={{ borderRadius: "var(--radius-md)" }}
            >
              MD
            </div>
            <code>6px</code>
          </div>
          <div className={styles.radiusCard}>
            <div
              className={styles.radiusDemo}
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              LG
            </div>
            <code>8px</code>
          </div>
          <div className={styles.radiusCard}>
            <div
              className={styles.radiusDemo}
              style={{ borderRadius: "var(--radius-xl)" }}
            >
              XL
            </div>
            <code>12px</code>
          </div>
          <div className={styles.radiusCard}>
            <div
              className={styles.radiusDemo}
              style={{ borderRadius: "var(--radius-full)" }}
            >
              Full
            </div>
            <code>9999px</code>
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle */}
      <section className={styles.section}>
        <h2>Dark Mode Support</h2>
        <p>
          Система поддерживает темную тему через{" "}
          <code>prefers-color-scheme</code>
        </p>
        <div className={styles.darkModeDemo}>
          <div className={styles.demoBlock}>
            <p>Light mode (default)</p>
            <div
              style={{
                background: "var(--color-background)",
                color: "var(--color-text-primary)",
                padding: "1rem",
                borderRadius: "8px",
                border: "1px solid var(--color-border)",
              }}
            >
              This content adapts to your system theme
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
