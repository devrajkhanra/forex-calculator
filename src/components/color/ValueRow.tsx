import { Check, Copy } from 'lucide-react';

interface ValueRowProps {
  label: string;
  value: string;
  copied: boolean;
  onCopy: (value: string) => void;
}

export function ValueRow({ label, value, copied, onCopy }: ValueRowProps) {
  return (
    <button
      type="button"
      className="color-value-row"
      onClick={() => onCopy(value)}
      aria-label={`Copy ${label} value ${value}`}
    >
      <span className="color-value-label">{label}</span>
      <span className="color-value-text">
        {value}
        {copied ? <Check className="dropdown-icon" aria-hidden="true" /> : <Copy className="dropdown-icon" aria-hidden="true" />}
      </span>
    </button>
  );
}
