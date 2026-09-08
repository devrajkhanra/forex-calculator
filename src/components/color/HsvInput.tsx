import type { RGB } from '../../types/color';
import { hexToRgb } from '../../utils/color';
import { ChannelField } from './ChannelField';

interface HsvInputProps {
  hInput: string;
  sInput: string;
  vInput: string;
  onHChange: (value: string) => void;
  onSChange: (value: string) => void;
  onVChange: (value: string) => void;
  onPickColor: (rgb: RGB) => void;
  isValid: boolean;
  previewHex: string | null;
}

export function HsvInput({
  hInput, sInput, vInput, onHChange, onSChange, onVChange, onPickColor, isValid, previewHex,
}: HsvInputProps) {
  return (
    <div className="color-input-field">
      <div className={`input-group color-channel-group ${isValid ? '' : 'input-group-invalid'}`}>
        <ChannelField idPrefix="hsv" label="H" value={hInput} onChange={onHChange} min={0} max={360} />
        <ChannelField idPrefix="hsv" label="S" value={sInput} onChange={onSChange} min={0} max={100} />
        <ChannelField idPrefix="hsv" label="V" value={vInput} onChange={onVChange} min={0} max={100} />

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
          H must be 0–360, S and V must be 0–100
        </p>
      )}
    </div>
  );
}
