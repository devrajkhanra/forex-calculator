import { Check, Copy } from 'lucide-react';
import { getReadableTextColor } from '../../utils/color';

interface SwatchProps {
  hex: string;
  label: string;
  copied: boolean;
  onCopy: (hex: string) => void;
}

export function Swatch({ hex, label, copied, onCopy }: SwatchProps) {
  const textColor = getReadableTextColor(hex);

  return (
    <button
      type="button"
      className="color-swatch"
      style={{ backgroundColor: hex, color: textColor }}
      onClick={() => onCopy(hex)}
      aria-label={`Copy ${hex}`}
      title={`Copy ${hex}`}
    >
      <span className="color-swatch-label">{label}</span>
      <span className="color-swatch-hex">
        {copied ? <Check className="color-swatch-icon" aria-hidden="true" /> : <Copy className="color-swatch-icon" aria-hidden="true" />}
        {hex}
      </span>
    </button>
  );
}
