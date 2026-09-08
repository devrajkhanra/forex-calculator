import { useHexColor } from '../../hooks/useHexColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { HexInput } from './HexInput';
import { ValueRow } from './ValueRow';
import { SwatchRow } from './SwatchRow';
import { Swatch } from './Swatch';

export function HexColorConverter() {
  const { rawInput, setRawInput, isValid, color } = useHexColor();
  const { copy, copiedValue } = useClipboardCopy();

  return (
    <div className="converter-panel">
      <HexInput
        rawInput={rawInput}
        onChange={setRawInput}
        isValid={isValid}
        previewHex={color?.hex ?? null}
      />

      {color && (
        <>
          <div className="color-value-list">
            <ValueRow label="HEX" value={color.hex} copied={copiedValue === color.hex} onCopy={copy} />
            <ValueRow label="RGB" value={color.rgbString} copied={copiedValue === color.rgbString} onCopy={copy} />
            <ValueRow label="HSL" value={color.hslString} copied={copiedValue === color.hslString} onCopy={copy} />
          </div>

          <SwatchRow
            title="Tints"
            description="Your color blended toward white — for lighter variants and hover states."
            swatches={color.tints}
            copiedValue={copiedValue}
            onCopy={copy}
          />

          <SwatchRow
            title="Shades"
            description="Your color blended toward black — for darker variants and pressed states."
            swatches={color.shades}
            copiedValue={copiedValue}
            onCopy={copy}
          />

          <SwatchRow
            title="Tones"
            description="Your color blended toward gray — muted, desaturated variants."
            swatches={color.tones}
            copiedValue={copiedValue}
            onCopy={copy}
          />

          <section className="color-swatch-row" aria-label="Complementary color">
            <h3 className="color-swatch-row-title">Complementary</h3>
            <p className="color-swatch-row-description">The color directly opposite yours on the color wheel — a natural accent pairing.</p>
            <div className="color-swatch-grid">
              <Swatch
                hex={color.complementary}
                label="180°"
                copied={copiedValue === color.complementary}
                onCopy={copy}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
}
