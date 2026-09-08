interface HexInputProps {
  rawInput: string;
  onChange: (value: string) => void;
  isValid: boolean;
  previewHex: string | null;
}

export function HexInput({ rawInput, onChange, isValid, previewHex }: HexInputProps) {
  return (
    <div className="color-input-panel">
      <div
        className="color-preview-swatch"
        style={{ backgroundColor: previewHex ?? 'transparent' }}
        aria-hidden="true"
      />

      <div className="color-input-field">
        <label htmlFor="hex-input" className="color-input-label">Hex color</label>
        <div className="color-input-row">
          <input
            id="hex-input"
            type="text"
            className={`color-hex-text-input ${isValid ? '' : 'color-hex-text-input-invalid'}`}
            value={rawInput}
            onChange={(e) => onChange(e.target.value)}
            placeholder="#38bdf8"
            spellCheck={false}
            autoComplete="off"
            aria-invalid={!isValid}
          />
          <input
            type="color"
            className="color-native-picker"
            value={previewHex ?? '#000000'}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Pick a color"
          />
        </div>
        {!isValid && (
          <p className="color-input-error" role="alert">
            Enter a valid hex color, e.g. #38bdf8 or #fff
          </p>
        )}
      </div>
    </div>
  );
}
