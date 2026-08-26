import { ArrowRightLeft, RefreshCw } from 'lucide-react';
import type { CurrenciesResponse } from '../types/fx';
import { CurrencySelect } from './CurrencySelect';

interface ConverterFormProps {
  // ... (keep your existing props interface exactly the same)
  currencies: CurrenciesResponse;
  amount: number | '';
  setAmount: (val: number | '') => void;
  fromCurrency: string;
  setFromCurrency: (val: string) => void;
  toCurrency: string;
  setToCurrency: (val: string) => void;
  onSwap: () => void;
  result: number | null;
  loading: boolean;
  rateInfo: string;
}

export function ConverterForm({
  currencies, amount, setAmount, fromCurrency, setFromCurrency,
  toCurrency, setToCurrency, onSwap, result, loading, rateInfo
}: ConverterFormProps) {
  return (
    <div className="converter-panel">
      <div className="converter-row">

        {/* Left Side: Input */}
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
            className="huge-input"
            min="0"
          />
          <CurrencySelect
            currencies={currencies}
            value={fromCurrency}
            onChange={setFromCurrency}
          />
        </div>

        {/* Center: Swap Button */}
        <div className="swap-container">
          <button onClick={onSwap} className="swap-btn" title="Swap">
            <ArrowRightLeft className="swap-icon" />
          </button>
        </div>

        {/* Right Side: Output */}
        <div className="input-group">
          <div className="huge-input readonly-output">
            {loading ? <RefreshCw className="spinner" /> : (result !== null ? result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) : '')}
          </div>
          <CurrencySelect
            currencies={currencies}
            value={toCurrency}
            onChange={setToCurrency}
          />
        </div>

      </div>

      <div className="rate-info">
        {rateInfo || 'Enter an amount to see live rates'}
      </div>
    </div>
  );
}