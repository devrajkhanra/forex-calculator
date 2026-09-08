interface ChannelFieldProps {
  idPrefix: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: number;
  max: number;
}

export function ChannelField({ idPrefix, label, value, onChange, min, max }: ChannelFieldProps) {
  const id = `${idPrefix}-${label.toLowerCase()}`;

  return (
    <div className="color-channel">
      <label className="color-channel-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        className="huge-input color-channel-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        inputMode="numeric"
      />
    </div>
  );
}
