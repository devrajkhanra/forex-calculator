import type { ColorSwatch } from '../../types/color';
import { Swatch } from './Swatch';

interface SwatchRowProps {
  title: string;
  description: string;
  swatches: ColorSwatch[];
  copiedValue: string | null;
  onCopy: (hex: string) => void;
}

export function SwatchRow({ title, description, swatches, copiedValue, onCopy }: SwatchRowProps) {
  return (
    <section className="color-swatch-row" aria-label={title}>
      <h3 className="color-swatch-row-title">{title}</h3>
      <p className="color-swatch-row-description">{description}</p>
      <div className="color-swatch-grid">
        {swatches.map((swatch) => (
          <Swatch
            key={swatch.label}
            hex={swatch.hex}
            label={swatch.label}
            copied={copiedValue === swatch.hex}
            onCopy={onCopy}
          />
        ))}
      </div>
    </section>
  );
}
