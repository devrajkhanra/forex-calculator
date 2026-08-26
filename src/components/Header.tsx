import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
    return (
        <header className="fx-header">
            <div className="fx-header-top">
                <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
                    {theme === 'light' ? <Moon className="theme-icon" /> : <Sun className="theme-icon" />}
                </button>
            </div>
            <div className="fx-logo-wrapper">
                <h1 className="fx-title">Currency Converter</h1>
            </div>
            <p className="fx-subtitle">Live Exchange Rates : FX to FX</p>
        </header>
    );
}