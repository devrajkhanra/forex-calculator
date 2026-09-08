import { Link, NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINK_CLASS = ({ isActive }: { isActive: boolean }) =>
  `fx-nav-link${isActive ? ' fx-nav-link-active' : ''}`;

export function Header() {
  return (
    <header className="fx-header">
      <div className="fx-header-inner">
        <Link to="/" className="fx-brand-link" aria-label="Daily Codify home">
          <span className="fx-brand-title">Daily Codify</span>
        </Link>

        <nav className="fx-nav" aria-label="Primary">
          <NavLink to="/" end className={NAV_LINK_CLASS}>
            Currency Converter
          </NavLink>
          <NavLink to="/hex-to-color-converter" className={NAV_LINK_CLASS}>
            Color Converter
          </NavLink>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
