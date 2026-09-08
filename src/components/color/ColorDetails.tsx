import type { ColorInfo } from '../../types/color';
import { ValueRow } from './ValueRow';
import { SwatchRow } from './SwatchRow';
import { Swatch } from './Swatch';

interface ColorDetailsProps {
  color: ColorInfo;
  copiedValue: string | null;
  onCopy: (value: string) => void;
}

export function ColorDetails({ color, copiedValue, onCopy }: ColorDetailsProps) {
  return (
    <>
      <div className="color-value-list">
        <ValueRow label="HEX" value={color.hex} copied={copiedValue === color.hex} onCopy={onCopy} />
        <ValueRow label="RGB" value={color.rgbString} copied={copiedValue === color.rgbString} onCopy={onCopy} />
        <ValueRow label="HSL" value={color.hslString} copied={copiedValue === color.hslString} onCopy={onCopy} />
        <ValueRow label="HSV" value={color.hsvString} copied={copiedValue === color.hsvString} onCopy={onCopy} />
        <ValueRow label="CMYK" value={color.cmykString} copied={copiedValue === color.cmykString} onCopy={onCopy} />
      </div>

      <SwatchRow
        title="Tints"
        description="Your color blended toward white — for lighter variants and hover states."
        swatches={color.tints}
        copiedValue={copiedValue}
        onCopy={onCopy}
      />

      <SwatchRow
        title="Shades"
        description="Your color blended toward black — for darker variants and pressed states."
        swatches={color.shades}
        copiedValue={copiedValue}
        onCopy={onCopy}
      />

      <SwatchRow
        title="Tones"
        description="Your color blended toward gray — muted, desaturated variants."
        swatches={color.tones}
        copiedValue={copiedValue}
        onCopy={onCopy}
      />

      <section className="color-swatch-row" aria-label="Complementary color">
        <h3 className="color-swatch-row-title">Complementary</h3>
        <p className="color-swatch-row-description">The color directly opposite yours on the color wheel — a natural accent pairing.</p>
        <div className="color-swatch-grid">
          <Swatch
            hex={color.complementary}
            label="180°"
            copied={copiedValue === color.complementary}
            onCopy={onCopy}
          />
        </div>
      </section>
    </>
  );
}
