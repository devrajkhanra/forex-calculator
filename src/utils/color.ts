import type { RGB, HSL, ColorSwatch, ColorInfo } from '../types/color';

const HEX_3_OR_6 = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

/** Accepts "abc", "#abc", "aabbcc", or "#aabbcc" and returns a normalized "#rrggbb", or null if invalid. */
export function normalizeHex(input: string): string | null {
  const trimmed = input.trim();
  if (!HEX_3_OR_6.test(trimmed)) return null;

  const hex = trimmed.replace('#', '');
  const expanded = hex.length === 3
    ? hex.split('').map((c) => c + c).join('')
    : hex;

  return `#${expanded.toLowerCase()}`;
}

export function isValidHex(input: string): boolean {
  return normalizeHex(input) !== null;
}

export function hexToRgb(hex: string): RGB {
  const normalized = normalizeHex(hex);
  if (!normalized) throw new Error(`Invalid hex color: "${hex}"`);

  const int = parseInt(normalized.slice(1), 16);
  return {
    r: (int >> 16) & 255,
    g: (int >> 8) & 255,
    b: int & 255,
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function rgbToHex({ r, g, b }: RGB): string {
  const toHexPart = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, '0');
  return `#${toHexPart(r)}${toHexPart(g)}${toHexPart(b)}`;
}

export function rgbToHsl({ r, g, b }: RGB): HSL {
  const rN = r / 255;
  const gN = g / 255;
  const bN = b / 255;

  const max = Math.max(rN, gN, bN);
  const min = Math.min(rN, gN, bN);
  const delta = max - min;

  let h = 0;
  if (delta !== 0) {
    if (max === rN) h = ((gN - bN) / delta) % 6;
    else if (max === gN) h = (bN - rN) / delta + 2;
    else h = (rN - gN) / delta + 4;
    h *= 60;
    if (h < 0) h += 360;
  }

  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  const sN = s / 100;
  const lN = l / 100;

  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;

  let r1 = 0, g1 = 0, b1 = 0;
  if (h < 60) [r1, g1, b1] = [c, x, 0];
  else if (h < 120) [r1, g1, b1] = [x, c, 0];
  else if (h < 180) [r1, g1, b1] = [0, c, x];
  else if (h < 240) [r1, g1, b1] = [0, x, c];
  else if (h < 300) [r1, g1, b1] = [x, 0, c];
  else [r1, g1, b1] = [c, 0, x];

  return {
    r: (r1 + m) * 255,
    g: (g1 + m) * 255,
    b: (b1 + m) * 255,
  };
}

export function formatRgb(rgb: RGB): string {
  return `rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`;
}

export function formatHsl(hsl: HSL): string {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}

/** Linearly interpolates each RGB channel toward `target` by `amount` (0 = no change, 1 = fully `target`). */
function mixRgb(base: RGB, target: RGB, amount: number): RGB {
  return {
    r: base.r + (target.r - base.r) * amount,
    g: base.g + (target.g - base.g) * amount,
    b: base.b + (target.b - base.b) * amount,
  };
}

const WHITE: RGB = { r: 255, g: 255, b: 255 };
const BLACK: RGB = { r: 0, g: 0, b: 0 };
const GRAY: RGB = { r: 128, g: 128, b: 128 };

const DEFAULT_STEPS = [0.2, 0.4, 0.6, 0.8, 1];

/** Tints: the base color mixed toward white — used for lighter variants / hover states. */
export function generateTints(hex: string, steps: number[] = DEFAULT_STEPS): ColorSwatch[] {
  const base = hexToRgb(hex);
  return steps.map((amount) => ({
    hex: rgbToHex(mixRgb(base, WHITE, amount)),
    label: `+${Math.round(amount * 100)}%`,
  }));
}

/** Shades: the base color mixed toward black — used for darker variants / pressed states. */
export function generateShades(hex: string, steps: number[] = DEFAULT_STEPS): ColorSwatch[] {
  const base = hexToRgb(hex);
  return steps.map((amount) => ({
    hex: rgbToHex(mixRgb(base, BLACK, amount)),
    label: `-${Math.round(amount * 100)}%`,
  }));
}

/** Tones: the base color mixed toward mid-gray — desaturated variants for muted UI. */
export function generateTones(hex: string, steps: number[] = DEFAULT_STEPS): ColorSwatch[] {
  const base = hexToRgb(hex);
  return steps.map((amount) => ({
    hex: rgbToHex(mixRgb(base, GRAY, amount)),
    label: `${Math.round(amount * 100)}%`,
  }));
}

/** The color directly opposite on the hue wheel. */
export function getComplementaryHex(hex: string): string {
  const hsl = rgbToHsl(hexToRgb(hex));
  const complementary: HSL = { ...hsl, h: (hsl.h + 180) % 360 };
  return rgbToHex(hslToRgb(complementary));
}

/** Perceived brightness (0-255, ITU-R BT.601) — used to pick readable text color on a swatch. */
export function getPerceivedBrightness(rgb: RGB): number {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
}

/** Returns black or white, whichever reads better on top of the given background color. */
export function getReadableTextColor(hex: string): '#000000' | '#ffffff' {
  return getPerceivedBrightness(hexToRgb(hex)) > 150 ? '#000000' : '#ffffff';
}

/**
 * Single source of truth for turning a color into everything a converter
 * page displays. Every input format (hex, RGB, and any added later)
 * normalizes to an RGB value first, then calls this — so tint/shade/tone
 * generation and formatting logic never has to be duplicated per format.
 */
export function getColorInfo(rgb: RGB): ColorInfo {
  const hex = rgbToHex(rgb);
  const hsl = rgbToHsl(rgb);

  return {
    hex,
    rgb,
    hsl,
    rgbString: formatRgb(rgb),
    hslString: formatHsl(hsl),
    tints: generateTints(hex),
    shades: generateShades(hex),
    tones: generateTones(hex),
    complementary: getComplementaryHex(hex),
  };
}
