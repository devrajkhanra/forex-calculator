import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CurrencyConverterPage } from './pages/CurrencyConverterPage';
import { ColorConverterHubPage } from './pages/ColorConverterHubPage';
import { HexColorConverterPage } from './pages/HexColorConverterPage';
import { RgbColorConverterPage } from './pages/RgbColorConverterPage';
import { HsvColorConverterPage } from './pages/HsvColorConverterPage';
import { CmykColorConverterPage } from './pages/CmykColorConverterPage';
import './App.css';

export default function App() {
  return (
    <div className="fx-page">
      <Header />

      <div className="fx-container">
        <main className="fx-main-content">
          <Routes>
            <Route path="/" element={<CurrencyConverterPage />} />
            <Route path="/color-converter" element={<ColorConverterHubPage />} />
            <Route path="/hex-to-color-converter" element={<HexColorConverterPage />} />
            <Route path="/rgb-to-color-converter" element={<RgbColorConverterPage />} />
            <Route path="/hsv-to-color-converter" element={<HsvColorConverterPage />} />
            <Route path="/cmyk-to-color-converter" element={<CmykColorConverterPage />} />
          </Routes>
        </main>

        <footer className="fx-app-footer">
          Daily Codify — free, fast tools for everyday conversions.
        </footer>
      </div>
    </div>
  );
}
