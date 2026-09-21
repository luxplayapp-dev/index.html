# AdgeCalculator 🧮

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-blue?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-28%2F28%20Passed-emerald?logo=vitest)](https://vitest.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**AdgeCalculator** is a high-precision, mobile-responsive web calculator suite featuring **15 fast, interactive calculators and converters** built with arbitrary-precision decimal arithmetic (`decimal.js` & `mathjs`), interactive Recharts visualizations, client-side history management, A4 printable PDF report generation, and iframe embeddable widgets.

---

## 🌟 Key Capabilities & Suite Features

### 1. 📊 Financial & Investment Calculators
- **🏠 Home Loan Calculator (`/calculators/home-loan`):** Comprehensive mortgage breakdown with down payment toggle (% or Amount), annual part-payment simulator, monthly schedule, CSV export, and side-by-side offer comparison mode (`<LoanComparisonModal>`).
- **💰 EMI Calculator (`/calculators/emi`):** Reducing-balance loan EMI calculator with principal vs. interest donut chart breakdown.
- **📈 SIP Calculator (`/calculators/sip`):** Systematic Investment Plan mutual fund compounding growth area chart and SIP vs. Lump Sum wealth comparison.
- **🏛️ GST Calculator (`/calculators/gst`):** Inclusive vs. Exclusive GST tax slab calculator (0%, 5%, 12%, 18%, 28%) with CGST/SGST splits.
- **💵 Loan Calculator (`/calculators/loan`):** Extra monthly prepayment payoff accelerator.
- **🏷️ Discount Calculator (`/calculators/discount`):** Percentage & fixed discount calculator with sales tax computation.

### 2. ⚡ Daily Math & Conversions
- **🔢 Percentage Calculator (`/calculators/percentage`):** 3-in-1 percentage math engine.
- **🧮 Simple Calculator (`/calculators/simple`):** Daily basic arithmetic with memory functions.
- **🔬 Scientific Calculator (`/calculators/scientific`):** Advanced trigonometry, logarithms, powers, and degree/radian toggle.
- **⚖️ Unit Converter (`/calculators/unit-converter`):** 9 unit categories (Length, Mass, Temperature, Volume, Area, Speed, Time, Data, Energy).
- **💱 Currency Converter (`/calculators/currency-converter`):** Live exchange rate converter supporting 30+ global currencies with stale-while-revalidate background caching and offline snapshot badges.

### 3. 🗓️ Health & Utility Calculators
- **⚖️ BMI Calculator (`/calculators/bmi`):** Metric and imperial body mass index category classifier.
- **⛽ Fuel Cost Calculator (`/calculators/fuel-cost`):** Trip fuel cost and passenger expense splitter.
- **📅 Date Duration Calculator (`/calculators/date`):** Date difference duration calculator.
- **⏱️ Time Calculator (`/calculators/time`):** Time arithmetic calculator.

---

## 🚀 Advanced Power Features

- **🌐 Adaptive i18n & Multi-Currency:** Global currency selector updating symbols and adaptive thousand/lakh number formatting (`en-IN` Lakhs vs `en-US` Thousands).
- **📱 Tactile Touch UX & Mobile Quick-Bar:** Subtle haptic vibration feedback (`navigator.vibrate`) and sticky bottom mobile quick bar (`Reset`, `Copy Result`, `Share`, `History`).
- **⚡ Master Keyboard Overlay (`?` / `Shift+/`):** Global keydown listener providing keyboard shortcut access to search (`⌘K`), history (`H`), embed (`E`), and print (`P`).
- **📌 Pinned Favorites Bar:** Star any calculator to pin it into a quick-access navigation bar.
- **🖼️ Embeddable Widgets (`/embed/[calculator]`):** Generate responsive `<iframe>` code snippets with custom height/width and dark/light themes.
- **♿ WCAG 2.1 AA Accessible:** Visible focus rings (`focus-visible:ring-2`) and screen reader live announcements (`aria-live="polite"`).

---

## 💻 Tech Stack & Architecture

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Next-Themes (Dark/Light mode)
- **Precision Math:** `decimal.js` & `mathjs`
- **Charts:** `recharts`
- **Unit Testing:** `vitest`

---

## 🛠️ Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Run Automated Unit Test Suite (Vitest)
```bash
npm test
```

### Production Build
```bash
npm run build
```

### Start Production Local Preview
```bash
npm run start
```

---

## 📜 License

Distributed under the MIT License. Built with precision by the AdgeCalculator team.
