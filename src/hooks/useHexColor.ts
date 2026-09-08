import { useMemo, useState } from 'react';
import {
  isValidHex,
  normalizeHex,
  hexToRgb,
  rgbToHsl,
  formatRgb,
  formatHsl,
  generateTints,
  generateShades,
  generateTones,
  getComplementaryHex,
} from '../utils/color';

const DEFAULT_HEX = '#38bdf8';

export function useHexColor() {
  const [rawInput, setRawInput] = useState(DEFAULT_HEX);

  const isValid = isValidHex(rawInput);
  const normalized = useMemo(() => normalizeHex(rawInput), [rawInput]);

  const derived = useMemo(() => {
    if (!normalized) return null;

    const rgb = hexToRgb(normalized);
    const hsl = rgbToHsl(rgb);

    return {
      hex: normalized,
      rgb,
      hsl,
      rgbString: formatRgb(rgb),
      hslString: formatHsl(hsl),
      tints: generateTints(normalized),
      shades: generateShades(normalized),
      tones: generateTones(normalized),
      complementary: getComplementaryHex(normalized),
    };
  }, [normalized]);

  return {
    rawInput,
    setRawInput,
    isValid,
    color: derived,
  };
}
