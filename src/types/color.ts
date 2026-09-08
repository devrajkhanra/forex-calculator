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

export interface HSV {
  h: number; // 0-360
  s: number; // 0-100
  v: number; // 0-100
}

export interface ColorSwatch {
  /** Normalized "#rrggbb" hex string. */
  hex: string;
  /** Label shown under the swatch, e.g. "20%" for a tint step. */
  label: string;
}

/** Everything derivable from a single color, used by every color-tool page regardless of input format. */
export interface ColorInfo {
  hex: string;
  rgb: RGB;
  hsl: HSL;
  hsv: HSV;
  rgbString: string;
  hslString: string;
  hsvString: string;
  tints: ColorSwatch[];
  shades: ColorSwatch[];
  tones: ColorSwatch[];
  complementary: string;
}
