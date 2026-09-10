import { useMemo, useState } from 'react';
import { isValidHex, normalizeHex, hexToRgb, rgbToHex, getColorInfo } from '../utils/color';
import type { RGB } from '../types/color';

const DEFAULT_HEX = '#38bdf8';

export function useHexColor() {
  const [rawInput, setRawInput] = useState(DEFAULT_HEX);

  const isValid = isValidHex(rawInput);
  const normalized = useMemo(() => normalizeHex(rawInput), [rawInput]);

  const color = useMemo(() => {
    if (!normalized) return null;
    return getColorInfo(hexToRgb(normalized));
  }, [normalized]);

  /** Used by the native picker and cross-tab sync to set the input from one RGB value at once. */
  const setFromRgb = (rgb: RGB) => setRawInput(rgbToHex(rgb));

  return {
    rawInput,
    setRawInput,
    setFromRgb,
    isValid,
    color,
  };
}
