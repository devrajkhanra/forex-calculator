import { useState } from 'react';
import { Palette, Hash, SlidersHorizontal, Droplet, Printer, Shuffle, Check, Copy } from 'lucide-react';
import { useHexColor } from '../../hooks/useHexColor';
import { useRgbColor } from '../../hooks/useRgbColor';
import { useHsvColor } from '../../hooks/useHsvColor';
import { useCmykColor } from '../../hooks/useCmykColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { getReadableTextColor } from '../../utils/color';
import { ColorTonePicker } from './ColorTonePicker';
import { HexInput } from './HexInput';
import { RgbInput } from './RgbInput';
import { HsvInput } from './HsvInput';
import { CmykInput } from './CmykInput';
import { ColorDetails } from './ColorDetails';
import type { ColorInfo } from '../../types/color';

export type ColorTab = 'picker' | 'hex' | 'rgb' | 'hsv' | 'cmyk';

const TABS: { id: ColorTab; label: string; icon: typeof Palette }[] = [
  { id: 'picker', label: 'Picker', icon: Palette },
  { id: 'hex', label: 'Hex', icon: Hash },
  { id: 'rgb', label: 'RGB', icon: SlidersHorizontal },
  { id: 'hsv', label: 'HSV', icon: Droplet },
  { id: 'cmyk', label: 'CMYK', icon: Printer },
];

interface ColorStudioProps {
  initialTab: ColorTab;
}

export function ColorStudio({ initialTab }: ColorStudioProps) {
  const hex = useHexColor();
  const rgb = useRgbColor();
  const hsv = useHsvColor();
  const cmyk = useCmykColor();
  const { copy, copiedValue } = useClipboardCopy();

  const [activeTab, setActiveTab] = useState<ColorTab>(initialTab);

  const colorForTab = (tab: ColorTab): ColorInfo | null => {
    switch (tab) {
      case 'hex': return hex.color;
      case 'rgb': return rgb.color;
      case 'hsv': case 'picker': return hsv.color;
      case 'cmyk': return cmyk.color;
    }
  };

  const applyToTab = (tab: ColorTab, source: ColorInfo) => {
    switch (tab) {
      case 'hex': hex.setFromRgb(source.rgb); break;
      case 'rgb': rgb.setFromRgb(source.rgb); break;
      case 'hsv': case 'picker': hsv.setFromRgb(source.rgb); break;
      case 'cmyk': cmyk.setFromRgb(source.rgb); break;
    }
  };

  const handleTabChange = (nextTab: ColorTab) => {
    if (nextTab === activeTab) return;
    const current = colorForTab(activeTab);
    if (current) applyToTab(nextTab, current);
    setActiveTab(nextTab);
  };

  const handleRandom = () => {
    const randomRgb = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
    hex.setFromRgb(randomRgb);
    rgb.setFromRgb(randomRgb);
    hsv.setFromRgb(randomRgb);
    cmyk.setFromRgb(randomRgb);
  };

  const activeColor = colorForTab(activeTab);
  const heroTextColor = activeColor ? getReadableTextColor(activeColor.hex) : undefined;

  return (
    <div className="converter-panel color-studio">
      <div
        className="color-studio-hero"
        style={{ backgroundColor: activeColor?.hex, color: heroTextColor }}
      >
        {activeColor ? (
          <button
            type="button"
            className="color-studio-hero-hex"
            onClick={() => copy(activeColor.hex)}
            aria-label={`Copy ${activeColor.hex}`}
          >
            {activeColor.hex}
            {copiedValue === activeColor.hex ? <Check className="color-swatch-icon" aria-hidden="true" /> : <Copy className="color-swatch-icon" aria-hidden="true" />}
          </button>
        ) : (
          <span className="color-studio-hero-hex">Enter a color below</span>
        )}
      </div>

      <div className="color-tab-bar" role="tablist" aria-label="Color input format">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeTab === id}
            className={`color-tab${activeTab === id ? ' color-tab-active' : ''}`}
            onClick={() => handleTabChange(id)}
          >
            <Icon className="color-tab-icon" aria-hidden="true" />
            {label}
          </button>
        ))}

        <button type="button" className="color-tab color-tab-random" onClick={handleRandom}>
          <Shuffle className="color-tab-icon" aria-hidden="true" />
          Random
        </button>
      </div>

      {activeTab === 'picker' && (
        <div className="color-input-field">
          <ColorTonePicker
            h={hsv.color?.hsv.h ?? 0}
            s={hsv.color?.hsv.s ?? 0}
            v={hsv.color?.hsv.v ?? 100}
            onChange={({ h, s, v }) => {
              hsv.setHInput(String(h));
              hsv.setSInput(String(s));
              hsv.setVInput(String(v));
            }}
          />
        </div>
      )}

      {activeTab === 'hex' && (
        <HexInput rawInput={hex.rawInput} onChange={hex.setRawInput} isValid={hex.isValid} previewHex={hex.color?.hex ?? null} />
      )}

      {activeTab === 'rgb' && (
        <RgbInput
          rInput={rgb.rInput} gInput={rgb.gInput} bInput={rgb.bInput}
          onRChange={rgb.setRInput} onGChange={rgb.setGInput} onBChange={rgb.setBInput}
          onPickColor={rgb.setFromRgb} isValid={rgb.isValid} previewHex={rgb.color?.hex ?? null}
        />
      )}

      {activeTab === 'hsv' && (
        <HsvInput
          hInput={hsv.hInput} sInput={hsv.sInput} vInput={hsv.vInput}
          onHChange={hsv.setHInput} onSChange={hsv.setSInput} onVChange={hsv.setVInput}
          onPickColor={hsv.setFromRgb} isValid={hsv.isValid} previewHex={hsv.color?.hex ?? null}
        />
      )}

      {activeTab === 'cmyk' && (
        <CmykInput
          cInput={cmyk.cInput} mInput={cmyk.mInput} yInput={cmyk.yInput} kInput={cmyk.kInput}
          onCChange={cmyk.setCInput} onMChange={cmyk.setMInput} onYChange={cmyk.setYInput} onKChange={cmyk.setKInput}
          onPickColor={cmyk.setFromRgb} isValid={cmyk.isValid} previewHex={cmyk.color?.hex ?? null}
        />
      )}

      {activeColor && <ColorDetails color={activeColor} copiedValue={copiedValue} onCopy={copy} />}
    </div>
  );
}
