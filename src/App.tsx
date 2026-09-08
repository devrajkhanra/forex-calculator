import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CurrencyConverterPage } from './pages/CurrencyConverterPage';
import { HexColorConverterPage } from './pages/HexColorConverterPage';
import { RgbColorConverterPage } from './pages/RgbColorConverterPage';
import './App.css';

export default function App() {
  return (
    <div className="fx-page">
      <Header />

      <div className="fx-container">
        <main className="fx-main-content">
          <Routes>
            <Route path="/" element={<CurrencyConverterPage />} />
            <Route path="/hex-to-color-converter" element={<HexColorConverterPage />} />
            <Route path="/rgb-to-color-converter" element={<RgbColorConverterPage />} />
          </Routes>
        </main>

        <footer className="fx-app-footer">
          Daily Codify — free, fast tools for everyday conversions.
        </footer>
      </div>
    </div>
  );
}
