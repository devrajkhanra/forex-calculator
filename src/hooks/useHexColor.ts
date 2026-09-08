import { useMemo, useState } from 'react';
import { isValidHex, normalizeHex, hexToRgb, getColorInfo } from '../utils/color';

const DEFAULT_HEX = '#38bdf8';

export function useHexColor() {
  const [rawInput, setRawInput] = useState(DEFAULT_HEX);

  const isValid = isValidHex(rawInput);
  const normalized = useMemo(() => normalizeHex(rawInput), [rawInput]);

  const color = useMemo(() => {
    if (!normalized) return null;
    return getColorInfo(hexToRgb(normalized));
  }, [normalized]);

  return {
    rawInput,
    setRawInput,
    isValid,
    color,
  };
}
