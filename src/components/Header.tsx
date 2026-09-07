import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="fx-header">
      <div className="fx-header-inner">
        <div className="fx-brand">
          <h1 className="fx-title">Daily Codify</h1>
          <p className="fx-subtitle">Currency Converter | Live Exchange Rates</p>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
