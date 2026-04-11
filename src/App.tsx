import { useState } from "react";
import {
  Button,
  Input,
  Checkbox,
  Radio,
  Switch,
  Select,
  Textarea,
} from "./components";
import "./styles/global.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const selectOptions = [
    { value: "option1", label: "Вариант 1" },
    { value: "option2", label: "Вариант 2" },
    { value: "option3", label: "Вариант 3" },
  ];

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

      {/* Checkbox Demo */}
      <section
        style={{
          background: "var(--color-background-alt)",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>☑️ Checkbox</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Checkbox
            label="Обычный чекбокс"
            checked={checkboxChecked}
            onChange={(e) => setCheckboxChecked(e.target.checked)}
          />
          <Checkbox
            label="Чекбокс с подсказкой"
            helperText="Это дополнительная информация"
          />
          <Checkbox label="Чекбокс с ошибкой" error="Обязательное поле" />
          <Checkbox label="Неактивный чекбокс" disabled />
          <Checkbox label="Indeterminate чекбокс" indeterminate />
        </div>
      </section>

      {/* Radio Demo */}
      <section
        style={{
          background: "var(--color-background-alt)",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>🔘 Radio</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          <Radio
            name="demoRadio"
            label="Вариант 1"
            value="option1"
            checked={radioValue === "option1"}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          <Radio
            name="demoRadio"
            label="Вариант 2"
            value="option2"
            checked={radioValue === "option2"}
            onChange={(e) => setRadioValue(e.target.value)}
          />
          <Radio
            name="demoRadio"
            label="Вариант 3"
            value="option3"
            checked={radioValue === "option3"}
            onChange={(e) => setRadioValue(e.target.value)}
            helperText="С дополнительным описанием"
          />
          <Radio label="Неактивный радио" disabled />
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
          Выбрано: {radioValue}
        </p>
      </section>

      {/* Switch Demo */}
      <section
        style={{
          background: "var(--color-background-alt)",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>🔘 Switch</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Switch
            label="Уведомления"
            description="Получать уведомления на email"
            checked={switchChecked}
            onChange={(e) => setSwitchChecked(e.target.checked)}
          />
          <Switch
            label="Темная тема"
            description="Автоматически"
            size="small"
          />
          <Switch label="Режим экономии" size="large" />
          <Switch label="Неактивный" disabled />
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
          Уведомления: {switchChecked ? "Вкл" : "Выкл"}
        </p>
      </section>

      {/* Select Demo */}
      <section
        style={{
          background: "var(--color-background-alt)",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>📋 Select</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "4rem",
              marginTop: "1rem",
            }}
          >
            <div>
              <Select
                label="Выберите вариант"
                options={selectOptions}
                placeholder="-- Выберите --"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              />
              <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
                Выбрано: {selectValue || "ничего"}
              </p>
            </div>
            <Select
              label="С подсказкой"
              options={selectOptions}
              helperText="Выберите один из вариантов"
            />
            <Select
              label="С ошибкой"
              options={selectOptions}
              error="Обязательное поле"
            />
            <Select label="Неактивный" options={selectOptions} disabled />
          </div>

          <Select label="Full width" options={selectOptions} fullWidth />
        </div>
      </section>

      {/* Textarea Demo */}
      <section
        style={{
          background: "var(--color-background-alt)",
          padding: "1.5rem",
          borderRadius: "1rem",
        }}
      >
        <h2>📝 Textarea</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <Textarea
            label="Комментарий"
            placeholder="Введите ваш комментарий..."
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            rows={3}
          />
          <Textarea
            label="С подсказкой"
            placeholder="Ваше сообщение"
            helperText="Мы ответим в течение 24 часов"
            rows={2}
          />
          <Textarea
            label="С ошибкой"
            placeholder="Сообщение"
            error="Сообщение не может быть пустым"
            rows={2}
          />
          <Textarea
            label="Неактивный"
            placeholder="Недоступно"
            disabled
            rows={2}
          />
          <Textarea
            label="Full width"
            placeholder="На всю ширину"
            fullWidth
            rows={2}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
