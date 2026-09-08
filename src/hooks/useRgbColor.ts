import { useMemo, useState } from 'react';
import { getColorInfo } from '../utils/color';
import type { RGB } from '../types/color';

const DEFAULT_RGB: RGB = { r: 56, g: 189, b: 248 }; // matches useHexColor's default #38bdf8

function parseChannel(raw: string): number | null {
  if (raw.trim() === '') return null;
  const n = Number(raw);
  return Number.isNaN(n) ? null : n;
}

function isValidChannel(n: number | null): n is number {
  return n !== null && Number.isInteger(n) && n >= 0 && n <= 255;
}

export function useRgbColor() {
  const [rInput, setRInput] = useState(String(DEFAULT_RGB.r));
  const [gInput, setGInput] = useState(String(DEFAULT_RGB.g));
  const [bInput, setBInput] = useState(String(DEFAULT_RGB.b));

  const r = parseChannel(rInput);
  const g = parseChannel(gInput);
  const b = parseChannel(bInput);

  const isValid = isValidChannel(r) && isValidChannel(g) && isValidChannel(b);

  const color = useMemo(() => {
    if (!isValidChannel(r) || !isValidChannel(g) || !isValidChannel(b)) return null;
    return getColorInfo({ r, g, b });
  }, [r, g, b]);

  /** Used by the native color picker to set all three channels from one RGB value at once. */
  const setFromRgb = (rgb: RGB) => {
    setRInput(String(rgb.r));
    setGInput(String(rgb.g));
    setBInput(String(rgb.b));
  };

  return {
    rInput,
    setRInput,
    gInput,
    setGInput,
    bInput,
    setBInput,
    setFromRgb,
    isValid,
    color,
  };
}
