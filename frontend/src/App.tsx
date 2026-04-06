import { useState } from "react";
import { Button, Input } from "./components";
import "./styles/global.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [buttonClickCount, setButtonClickCount] = useState(0);

  return (
    <div
      className="container"
      style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1 style={{ marginBottom: "1rem" }}>CampaignUI - Component Library</h1>
      <p style={{ marginBottom: "2rem", color: "var(--color-text-secondary)" }}>
        Базовые компоненты: Button и Input
      </p>

      {/* Button Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Button Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>

        <h3 style={{ marginTop: "1.5rem" }}>Button Sizes</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: "0.5rem",
          }}
        >
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>

        <h3 style={{ marginTop: "1.5rem" }}>Full Width Button</h3>
        <div style={{ maxWidth: "400px" }}>
          <Button fullWidth>Full Width Button</Button>
        </div>
      </section>

      {/* Input Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Input Variants</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "400px",
            marginTop: "1rem",
          }}
        >
          <Input
            label="Email"
            type="email"
            placeholder="enter@example.com"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            helperText="We'll never share your email"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            helperText="Use at least 8 characters"
          />

          <Input
            label="Name"
            value=""
            onChange={() => {}}
            error="Name is required"
          />

          <Input
            label="Full Width Input"
            fullWidth
            placeholder="This input takes full width"
            value=""
            onChange={() => {}}
          />
        </div>
      </section>

      {/* Interactive Demo */}
      <section>
        <h2>Interactive Demo</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Button onClick={() => setButtonClickCount((prev) => prev + 1)}>
            Click me!
          </Button>
          <p>
            Clicked <strong>{buttonClickCount}</strong> times
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
