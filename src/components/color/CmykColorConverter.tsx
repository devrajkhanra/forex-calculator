import { useCmykColor } from '../../hooks/useCmykColor';
import { useClipboardCopy } from '../../hooks/useClipboardCopy';
import { CmykInput } from './CmykInput';
import { ColorDetails } from './ColorDetails';

export function CmykColorConverter() {
  const {
    cInput, setCInput, mInput, setMInput, yInput, setYInput, kInput, setKInput,
    setFromRgb, isValid, color,
  } = useCmykColor();
  const { copy, copiedValue } = useClipboardCopy();

  return (
    <div className="converter-panel">
      <CmykInput
        cInput={cInput}
        mInput={mInput}
        yInput={yInput}
        kInput={kInput}
        onCChange={setCInput}
        onMChange={setMInput}
        onYChange={setYInput}
        onKChange={setKInput}
        onPickColor={setFromRgb}
        isValid={isValid}
        previewHex={color?.hex ?? null}
      />

      {color && <ColorDetails color={color} copiedValue={copiedValue} onCopy={copy} />}
    </div>
  );
}
