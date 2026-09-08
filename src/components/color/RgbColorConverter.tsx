import { useRgbColor } from '../../hooks/useRgbColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { RgbInput } from './RgbInput';
import { ColorDetails } from './ColorDetails';

export function RgbColorConverter() {
  const { rInput, setRInput, gInput, setGInput, bInput, setBInput, setFromRgb, isValid, color } = useRgbColor();
  const { copy, copiedValue } = useClipboardCopy();

  return (
    <div className="converter-panel">
      <RgbInput
        rInput={rInput}
        gInput={gInput}
        bInput={bInput}
        onRChange={setRInput}
        onGChange={setGInput}
        onBChange={setBInput}
        onPickColor={setFromRgb}
        isValid={isValid}
        previewHex={color?.hex ?? null}
      />

      {color && <ColorDetails color={color} copiedValue={copiedValue} onCopy={copy} />}
    </div>
  );
}
