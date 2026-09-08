import type { RGB } from '../../types/color';
import { hexToRgb } from '../../utils/color';

interface RgbChannelFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function RgbChannelField({ label, value, onChange }: RgbChannelFieldProps) {
  return (
    <div className="rgb-channel">
      <label className="rgb-channel-label" htmlFor={`rgb-${label.toLowerCase()}`}>{label}</label>
      <input
        id={`rgb-${label.toLowerCase()}`}
        type="number"
        className="huge-input rgb-channel-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={0}
        max={255}
        inputMode="numeric"
      />
    </div>
  );
}

interface RgbInputProps {
  rInput: string;
  gInput: string;
  bInput: string;
  onRChange: (value: string) => void;
  onGChange: (value: string) => void;
  onBChange: (value: string) => void;
  onPickColor: (rgb: RGB) => void;
  isValid: boolean;
  previewHex: string | null;
}

export function RgbInput({
  rInput, gInput, bInput, onRChange, onGChange, onBChange, onPickColor, isValid, previewHex,
}: RgbInputProps) {
  return (
    <div className="color-input-field">
      <div className={`input-group rgb-input-group ${isValid ? '' : 'input-group-invalid'}`}>
        <RgbChannelField label="R" value={rInput} onChange={onRChange} />
        <RgbChannelField label="G" value={gInput} onChange={onGChange} />
        <RgbChannelField label="B" value={bInput} onChange={onBChange} />

        <div className="custom-select-trigger color-picker-trigger">
          <input
            type="color"
            className="color-native-picker"
            value={previewHex ?? '#000000'}
            onChange={(e) => onPickColor(hexToRgb(e.target.value))}
            aria-label="Pick a color"
          />
        </div>
      </div>
      {!isValid && (
        <p className="color-input-error" role="alert">
          Each channel must be a whole number from 0 to 255
        </p>
      )}
    </div>
  );
}
