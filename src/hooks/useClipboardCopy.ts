import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Copies text to the clipboard and exposes which value (if any) was most
 * recently copied, resetting automatically after `resetAfterMs`.
 * A single instance can back many swatches/rows — callers compare
 * `copiedValue` against their own value to decide whether to show feedback.
 */
export function useClipboardCopy(resetAfterMs = 1500) {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const copy = useCallback((value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedValue(value);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopiedValue(null), resetAfterMs);
    }).catch((err) => {
      console.error('Clipboard write failed', err);
    });
  }, [resetAfterMs]);

  return { copy, copiedValue };
}
