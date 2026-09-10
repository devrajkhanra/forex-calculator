import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { hsvToRgb, rgbToHex } from '../../utils/color';

interface ColorTonePickerProps {
  h: number;
  s: number;
  v: number;
  onChange: (next: { h: number; s: number; v: number }) => void;
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export function ColorTonePicker({ h, s, v, onChange }: ColorTonePickerProps) {
  const squareRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const hueColor = rgbToHex(hsvToRgb({ h, s: 100, v: 100 }));

  const updateFromPoint = useCallback((clientX: number, clientY: number) => {
    const el = squareRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const y = clamp(clientY - rect.top, 0, rect.height);
    onChange({
      h,
      s: Math.round((x / rect.width) * 100),
      v: Math.round(100 - (y / rect.height) * 100),
    });
  }, [h, onChange]);

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    updateFromPoint(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromPoint(e.clientX, e.clientY);
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleKeyDown = (e: ReactKeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowRight') { e.preventDefault(); onChange({ h, s: clamp(s + step, 0, 100), v }); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); onChange({ h, s: clamp(s - step, 0, 100), v }); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); onChange({ h, s, v: clamp(v + step, 0, 100) }); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); onChange({ h, s, v: clamp(v - step, 0, 100) }); }
  };

  return (
    <div className="color-tone-picker">
      <div
        ref={squareRef}
        className="color-tone-square"
        style={{ backgroundImage: `linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, ${hueColor})` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
        role="slider"
        tabIndex={0}
        aria-label="Saturation and brightness"
        aria-valuetext={`Saturation ${s}%, brightness ${v}%`}
      >
        <div
          className="color-tone-square-thumb"
          style={{ left: `${s}%`, top: `${100 - v}%`, backgroundColor: rgbToHex(hsvToRgb({ h, s, v })) }}
        />
      </div>

      <input
        type="range"
        min={0}
        max={360}
        value={h}
        onChange={(e) => onChange({ h: Number(e.target.value), s, v })}
        className="color-tone-hue-slider"
        aria-label="Hue"
      />
    </div>
  );
}
