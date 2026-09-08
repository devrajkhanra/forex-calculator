export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number; // 0-360
  s: number; // 0-100
  l: number; // 0-100
}

export interface ColorSwatch {
  /** Normalized "#rrggbb" hex string. */
  hex: string;
  /** Label shown under the swatch, e.g. "20%" for a tint step. */
  label: string;
}
