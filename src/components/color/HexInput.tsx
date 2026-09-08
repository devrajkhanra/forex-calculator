interface HexInputProps {
  rawInput: string;
  onChange: (value: string) => void;
  isValid: boolean;
  previewHex: string | null;
}

export function HexInput({ rawInput, onChange, isValid, previewHex }: HexInputProps) {
  return (
    <div className="color-input-field">
      <div className={`input-group ${isValid ? '' : 'input-group-invalid'}`}>
        <input
          id="hex-input"
          type="text"
          className="huge-input"
          value={rawInput}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#38bdf8"
          spellCheck={false}
          autoComplete="off"
          aria-invalid={!isValid}
          aria-label="Hex color"
        />
        <div className="custom-select-trigger color-picker-trigger">
          <input
            type="color"
            className="color-native-picker"
            value={previewHex ?? '#000000'}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Pick a color"
          />
        </div>
      </div>
      {!isValid && (
        <p className="color-input-error" role="alert">
          Enter a valid hex color, e.g. #38bdf8 or #fff
        </p>
      )}
    </div>
  );
}
