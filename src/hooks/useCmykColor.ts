import { useMemo, useState } from 'react';
import { getColorInfo, cmykToRgb, rgbToCmyk } from '../utils/color';
import type { RGB } from '../types/color';

// Matches useHexColor/useRgbColor/useHsvColor's shared default (#38bdf8)
const DEFAULT_C = 77;
const DEFAULT_M = 24;
const DEFAULT_Y = 0;
const DEFAULT_K = 3;

function parseChannel(raw: string): number | null {
  if (raw.trim() === '') return null;
  const n = Number(raw);
  return Number.isNaN(n) ? null : n;
}

function isInRange(n: number | null): n is number {
  return n !== null && Number.isInteger(n) && n >= 0 && n <= 100;
}

export function useCmykColor() {
  const [cInput, setCInput] = useState(String(DEFAULT_C));
  const [mInput, setMInput] = useState(String(DEFAULT_M));
  const [yInput, setYInput] = useState(String(DEFAULT_Y));
  const [kInput, setKInput] = useState(String(DEFAULT_K));

  const c = parseChannel(cInput);
  const m = parseChannel(mInput);
  const y = parseChannel(yInput);
  const k = parseChannel(kInput);

  const isValid = isInRange(c) && isInRange(m) && isInRange(y) && isInRange(k);

  const color = useMemo(() => {
    if (!isInRange(c) || !isInRange(m) || !isInRange(y) || !isInRange(k)) return null;
    return getColorInfo(cmykToRgb({ c, m, y, k }));
  }, [c, m, y, k]);

  /** Used by the native color picker to set all four channels from one RGB value at once. */
  const setFromRgb = (rgb: RGB) => {
    const cmyk = rgbToCmyk(rgb);
    setCInput(String(cmyk.c));
    setMInput(String(cmyk.m));
    setYInput(String(cmyk.y));
    setKInput(String(cmyk.k));
  };

  return {
    cInput,
    setCInput,
    mInput,
    setMInput,
    yInput,
    setYInput,
    kInput,
    setKInput,
    setFromRgb,
    isValid,
    color,
  };
}
