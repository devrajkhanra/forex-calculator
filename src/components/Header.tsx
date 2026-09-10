import { Link, NavLink, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const NAV_LINK_CLASS = ({ isActive }: { isActive: boolean }) =>
  `fx-nav-link${isActive ? ' fx-nav-link-active' : ''}`;

// Every route the Colors nav item should read as "active" for, not just its own path.
const COLOR_ROUTES = [
  '/color-converter',
  '/hex-to-color-converter',
  '/rgb-to-color-converter',
  '/hsv-to-color-converter',
  '/cmyk-to-color-converter',
];

export function Header() {
  const location = useLocation();
  const isColorsActive = COLOR_ROUTES.includes(location.pathname);

  return (
    <header className="fx-header">
      <div className="fx-header-inner">
        <Link to="/" className="fx-brand-link" aria-label="Daily Codify home">
          <span className="fx-brand-title">Daily Codify</span>
        </Link>

        <nav className="fx-nav" aria-label="Primary">
          <NavLink to="/" end className={NAV_LINK_CLASS}>
            Currency
          </NavLink>
          <Link
            to="/color-converter"
            className={`fx-nav-link${isColorsActive ? ' fx-nav-link-active' : ''}`}
          >
            Colors
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
