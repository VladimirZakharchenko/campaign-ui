# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-04-11

### Added

#### Core UI Components (7 components)

- `Button` — 5 variants (primary, secondary, danger, outline, ghost), 3 sizes (small, medium, large), loading state
- `Input` — Label, error message, helper text, password visibility toggle, full width mode
- `Checkbox` — Label, error message, helper text, indeterminate state
- `Radio` — Label, error message, helper text, group support
- `Switch` — Label, description, 3 sizes (small, medium, large)
- `Select` — Options, placeholder, error message, helper text, full width mode
- `Textarea` — Label, error message, helper text, configurable rows, full width mode

#### Utilities

- `validators.ts` — Email, phone, name, URL validation, length checks
- `formatters.ts` — Date, number, price, phone formatting, time conversion
- `storage.ts` — Safe localStorage and sessionStorage wrapper with get/set/remove/clear/has methods

#### Custom Hooks

- `useDebounce` — Debounce value updates (default 500ms delay)
- `useLocalStorage` — Sync React state with localStorage
- `useMediaQuery` — Track media queries (responsive design)
- `useClickOutside` — Detect clicks outside an element

#### Testing

- Unit tests for all 7 UI components (95%+ coverage)
- Jest + React Testing Library configuration
- Test coverage thresholds configured

#### Documentation

- Comprehensive README with usage examples
- Style Guide page with design tokens preview
- Project roadmap with version planning

### Technical Details

- **React:** 18.2
- **TypeScript:** 5.3
- **Build Tool:** Vite 5.0
- **Testing:** Jest 29.7 + React Testing Library
- **Styling:** Sass + CSS Modules

---

[0.1.0]: https://github.com/VladimirZakharchenko/campaign-ui/compare/v0.0.0...v0.1.0
