import { Header } from './components/Header';
import { ConverterForm } from './components/ConverterForm';
import { SeoContent } from './components/SeoContent';
import { useForex } from './hooks/useForex';
import { useTheme } from './hooks/useTheme';
import './App.css';

export default function App() {
  const {
    currencies, amount, setAmount, fromCurrency, setFromCurrency,
    toCurrency, setToCurrency, result, loading, rateInfo, handleSwap
  } = useForex();

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fx-container">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="fx-main-content">
        <ConverterForm
          currencies={currencies}
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
          onSwap={handleSwap}
          result={result}
          loading={loading}
          rateInfo={rateInfo}
        />

        <SeoContent />
      </main>

      <footer className="fx-app-footer">
        Powered by Frankfurter API
      </footer>
    </div>
  );
}