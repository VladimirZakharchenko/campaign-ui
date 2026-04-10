<div align="center">

# 🎨 **CAMPAIGN UI**

### *React Component Library for Marketing Campaigns*

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6)

</div>

<div align="center" >

[Documentation](#) • [Current Features](#-current-features) • [Roadmap](#-roadmap) • [Getting Started](#-quick-start)

</div>

---

## 📖 About

**CampaignUI** is a modern React component library designed specifically for marketing campaigns, lead generation forms, and promotional pages. Built with TypeScript, tested with Jest, and following best practices.

### 🎯 Why CampaignUI?

- 🚀 **Marketing-focused** — Components optimized for conversion and lead generation
- 🛡️ **Type-safe** — Full TypeScript support with strict typing
- 📱 **Responsive** — Mobile-first design with CSS variables for theming
- ✅ **Tested** — 95%+ test coverage with Jest & React Testing Library
- 🎨 **Customizable** — Easy to style with CSS variables
- 📦 **Modular** — Import only what you need

---

## ✨ Current Features (v0.1.0)

### 🎨 Core UI Components (7 components)
| Component | Status | Description |
|-----------|--------|-------------|
| `Button` | ✅ | 5 variants, 3 sizes, loading state |
| `Input` | ✅ | Label, error, helperText, password toggle |
| `Checkbox` | ✅ | Label, error, helperText, indeterminate state |
| `Radio` | ✅ | Label, error, helperText, group support |
| `Switch` | ✅ | Label, description, 3 sizes |
| `Select` | ✅ | Options, placeholder, error, helperText |
| `Textarea` | ✅ | Label, error, helperText, rows support |

### 🛠️ Utilities & Hooks
| Category | Items |
|----------|-------|
| **Validators** | Email, phone, name, URL validation |
| **Formatters** | Date, number, price, phone formatting |
| **Storage** | Safe localStorage/sessionStorage wrapper |
| **Hooks** | `useDebounce`, `useLocalStorage`, `useMediaQuery`, `useClickOutside` |


---

## 🗺️ Roadmap

### v0.2.0 (In Progress)
- [ ] `LeadForm` — Lead generation form with validation and draft saving
- [ ] `CountdownTimer` — Timer for limited-time offers
- [ ] `PromoBanner` — Banner for promotions with A/B testing

### v0.3.0 (Planned)
- [ ] `DynamicContent` — Personalization based on user behavior
- [ ] `SocialProof` — Reviews, ratings, and case studies
- [ ] `ExitIntent` — Popup for exit intent

### v0.4.0 (Planned)
- [ ] Financial components (CreditCalculator, InvestmentWidget)
- [ ] Analytics components (ConversionTracker, HeatmapWrapper)
- [ ] Performance components (LazyImage, VirtualizedList)

### v1.0.0 (Future)
- [ ] Full Storybook documentation
- [ ] CI/CD pipeline with GitHub Actions
- [ ] Docker containerization
- [ ] Production-ready bundle optimization

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/VladimirZakharchenko/campaign-ui.git
cd campaign-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

### Usage Example

```tsx
import { Button, Input, Checkbox } from "./components";
import { useState, FormEvent } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Submit data
    console.log({ name, email, agreed });
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        required
      />
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john@example.com"
        required
      />
      <Checkbox
        label="I agree to the terms"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
        required
      />
      <Button
        type="submit"
        variant="primary"
        fullWidth
        isLoading={isLoading}
      >
        Submit
      </Button>
    </form>
  );
}
```

---

## 🛠️ Tech Stack
| Technology | Purpose |
| --- | --- |
| React 18 | UI Library |
| TypeScript | Type Safety |
| Vite	| Build Tool |
| Sass	| Styling with CSS Modules |
| Jest	| Unit Testing |
| React Testing Library	| Component Testing |

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Commit Convention
We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

- feat: — New feature
- fix: — Bug fix
- docs: — Documentation
- test: — Tests
- refactor: — Code refactoring
- chore: — Maintenance tasks

---

## 📄 License

MIT © [Vladimir Zakharchenko](https://github.com/VladimirZakharchenko)

---

## 📧 Contact

- **GitHub:** [@VladimirZakharchenko](https://github.com/VladimirZakharchenko)
- **Email:** [vladimirzax@mail.ru](mailto:vladimirzax@mail.ru)
- **Telegram:** [@zakharva_90](https://t.me/zakharva_90)

---

<div align="center"> Made with ❤️ for marketing teams </div>