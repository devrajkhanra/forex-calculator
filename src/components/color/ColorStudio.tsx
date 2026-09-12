import { Shuffle, Check, Copy } from 'lucide-react';
import { useHsvColor } from '../../hooks/useHsvColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { getReadableTextColor } from '../../utils/color';
import { ColorTonePicker } from './ColorTonePicker';
import { ColorDetails } from './ColorDetails';

export function ColorStudio() {
  const { setHInput, setSInput, setVInput, setFromRgb, color } = useHsvColor();
  const { copy, copiedValue } = useClipboardCopy();

  const handleRandom = () => {
    setFromRgb({
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    });
  };

  const heroTextColor = color ? getReadableTextColor(color.hex) : undefined;

  return (
    <div className="converter-panel color-studio">
      <div
        className="color-studio-hero"
        style={{ backgroundColor: color?.hex, color: heroTextColor }}
      >
        {color ? (
          <button
            type="button"
            className="color-studio-hero-hex"
            onClick={() => copy(color.hex)}
            aria-label={`Copy ${color.hex}`}
          >
            {color.hex}
            {copiedValue === color.hex ? <Check className="color-swatch-icon" aria-hidden="true" /> : <Copy className="color-swatch-icon" aria-hidden="true" />}
          </button>
        ) : (
          <span className="color-studio-hero-hex">Pick a color below</span>
        )}
      </div>

      <div className="color-input-field">
        <ColorTonePicker
          h={color?.hsv.h ?? 0}
          s={color?.hsv.s ?? 0}
          v={color?.hsv.v ?? 100}
          onChange={({ h, s, v }) => {
            setHInput(String(h));
            setSInput(String(s));
            setVInput(String(v));
          }}
        />

        <button type="button" className="color-random-btn" onClick={handleRandom}>
          <Shuffle className="color-btn-icon" aria-hidden="true" />
          Random color
        </button>
      </div>

      {color && <ColorDetails color={color} copiedValue={copiedValue} onCopy={copy} />}
    </div>
  );
}
