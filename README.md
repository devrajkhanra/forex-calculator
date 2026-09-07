# Currency Converter — Live Forex Exchange Rate Calculator

A free, fast, no-sign-up currency converter built with React, TypeScript, and Vite. Convert between major world currencies using live exchange rates.

**Live demo:** https://forex-calculator-blush.vercel.app/

![Currency Converter screenshot](./src/assets/hero.png)

## Features

- Live, regularly updated exchange rates
- Instant conversion between all major currency pairs (USD, EUR, GBP, JPY, INR, AUD, CAD, and more)
- One-click swap between "from" and "to" currencies
- Light/dark theme toggle
- Fully responsive — works on desktop, tablet, and mobile
- No account, sign-up, or API key required to use

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- Exchange rate data powered by the [Frankfurter API](https://www.frankfurter.app/)

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/devrajkhanra/forex-calculator.git
cd forex-calculator
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
  components/   UI components (Header, ConverterForm, CurrencySelect, ResultDisplay, SeoContent)
  hooks/        useForex (conversion logic), useTheme (light/dark mode)
  services/     fxApi.ts — exchange rate API client
  types/        Shared TypeScript types
```

## Contributing

Issues and pull requests are welcome. If you spot a bug or have a feature request, please open an issue.

## License

MIT — see [LICENSE](./LICENSE) for details.
