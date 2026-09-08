import { useMemo, useState } from 'react';
import { getColorInfo, hsvToRgb, rgbToHsv } from '../utils/color';
import type { RGB } from '../types/color';

const DEFAULT_H = 198;
const DEFAULT_S = 77;
const DEFAULT_V = 97; // matches useHexColor/useRgbColor's default #38bdf8

function parseChannel(raw: string): number | null {
  if (raw.trim() === '') return null;
  const n = Number(raw);
  return Number.isNaN(n) ? null : n;
}

function isInRange(n: number | null, min: number, max: number): n is number {
  return n !== null && Number.isInteger(n) && n >= min && n <= max;
}

export function useHsvColor() {
  const [hInput, setHInput] = useState(String(DEFAULT_H));
  const [sInput, setSInput] = useState(String(DEFAULT_S));
  const [vInput, setVInput] = useState(String(DEFAULT_V));

  const h = parseChannel(hInput);
  const s = parseChannel(sInput);
  const v = parseChannel(vInput);

  const isValid = isInRange(h, 0, 360) && isInRange(s, 0, 100) && isInRange(v, 0, 100);

  const color = useMemo(() => {
    if (!isInRange(h, 0, 360) || !isInRange(s, 0, 100) || !isInRange(v, 0, 100)) return null;
    return getColorInfo(hsvToRgb({ h, s, v }));
  }, [h, s, v]);

  /** Used by the native color picker to set all three channels from one RGB value at once. */
  const setFromRgb = (rgb: RGB) => {
    const hsv = rgbToHsv(rgb);
    setHInput(String(hsv.h));
    setSInput(String(hsv.s));
    setVInput(String(hsv.v));
  };

  return {
    hInput,
    setHInput,
    sInput,
    setSInput,
    vInput,
    setVInput,
    setFromRgb,
    isValid,
    color,
  };
}
