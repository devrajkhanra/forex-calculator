import type { RGB } from '../../types/color';
import { hexToRgb } from '../../utils/color';
import { ChannelField } from './ChannelField';

interface CmykInputProps {
  cInput: string;
  mInput: string;
  yInput: string;
  kInput: string;
  onCChange: (value: string) => void;
  onMChange: (value: string) => void;
  onYChange: (value: string) => void;
  onKChange: (value: string) => void;
  onPickColor: (rgb: RGB) => void;
  isValid: boolean;
  previewHex: string | null;
}

export function CmykInput({
  cInput, mInput, yInput, kInput, onCChange, onMChange, onYChange, onKChange, onPickColor, isValid, previewHex,
}: CmykInputProps) {
  return (
    <div className="color-input-field">
      <div className={`input-group color-channel-group color-channel-group-compact ${isValid ? '' : 'input-group-invalid'}`}>
        <ChannelField idPrefix="cmyk" label="C" value={cInput} onChange={onCChange} min={0} max={100} />
        <ChannelField idPrefix="cmyk" label="M" value={mInput} onChange={onMChange} min={0} max={100} />
        <ChannelField idPrefix="cmyk" label="Y" value={yInput} onChange={onYChange} min={0} max={100} />
        <ChannelField idPrefix="cmyk" label="K" value={kInput} onChange={onKChange} min={0} max={100} />

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
          Each of C, M, Y, K must be a whole number from 0 to 100
        </p>
      )}
    </div>
  );
}
