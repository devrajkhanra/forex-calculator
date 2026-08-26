import { RefreshCw } from 'lucide-react';

interface ResultDisplayProps {
    result: number | null;
    loading: boolean;
    toCurrency: string;
    rateInfo: string;
}

export function ResultDisplay({ result, loading, toCurrency, rateInfo }: ResultDisplayProps) {
    return (
        <div className="fx-result-box">
            <div className="fx-result-title">Converted Amount</div>
            <div className="fx-result-row">
                <div className="fx-result-value">
                    {loading ? (
                        <RefreshCw className="fx-spinner" />
                    ) : (
                        result !== null ? result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) : '0.00'
                    )}
                </div>
                <div className="fx-result-currency">{toCurrency}</div>
            </div>
            <div className="fx-footer-info">
                <span>{rateInfo}</span>
                <span className="fx-live-badge">Live ECB Rates</span>
            </div>
        </div>
    );
}