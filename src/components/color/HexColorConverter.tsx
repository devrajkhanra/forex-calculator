import { useHexColor } from '../../hooks/useHexColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { HexInput } from './HexInput';
import { ColorDetails } from './ColorDetails';

export function HexColorConverter() {
  const { rawInput, setRawInput, isValid, color } = useHexColor();
  const { copy, copiedValue } = useClipboardCopy();

  return (
    <div className="converter-panel">
      <HexInput
        rawInput={rawInput}
        onChange={setRawInput}
        isValid={isValid}
        previewHex={color?.hex ?? null}
      />

      {color && <ColorDetails color={color} copiedValue={copiedValue} onCopy={copy} />}
    </div>
  );
}
