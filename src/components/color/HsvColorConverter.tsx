import { useHsvColor } from '../../hooks/useHsvColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { HsvInput } from './HsvInput';
import { ColorDetails } from './ColorDetails';

export function HsvColorConverter() {
  const { hInput, setHInput, sInput, setSInput, vInput, setVInput, setFromRgb, isValid, color } = useHsvColor();
  const { copy, copiedValue } = useClipboardCopy();

  return (
    <div className="converter-panel">
      <HsvInput
        hInput={hInput}
        sInput={sInput}
        vInput={vInput}
        onHChange={setHInput}
        onSChange={setSInput}
        onVChange={setVInput}
        onPickColor={setFromRgb}
        isValid={isValid}
        previewHex={color?.hex ?? null}
      />

      {color && <ColorDetails color={color} copiedValue={copiedValue} onCopy={copy} />}
    </div>
  );
}
