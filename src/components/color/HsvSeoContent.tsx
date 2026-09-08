export function HsvSeoContent() {
  return (
    <section className="fx-seo-content" aria-labelledby="hsv-about-heading">
      <h2 id="hsv-about-heading">About This HSV to Color Tone Converter</h2>
      <p>
        This free tool converts HSV (hue, saturation, value) input into the
        matching HEX, RGB, and HSL codes, then generates a full set of
        tints, shades, tones, and the complementary color — the same
        palette output as our hex and RGB converters, just starting from
        HSV input.
      </p>

      <h2>How It Works</h2>
      <p>
        Enter a hue from 0 to 360 degrees, and a saturation and value each
        from 0 to 100 percent, or pick a color with the native color
        picker to fill all three at once. The tool instantly shows the
        matching HEX, RGB, and HSL values, plus five tints, five shades,
        five tones, and the complementary color. Click any value or swatch
        to copy it to your clipboard.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What's the difference between HSV and HSL?</h3>
      <p>
        Both describe a color using hue, but HSV's third component
        ("value") represents brightness relative to pure black, while
        HSL's ("lightness") is relative to a midpoint between black and
        white. HSV is common in color pickers and design tools; HSL is
        more common in CSS.
      </p>

      <h3>What range should hue, saturation, and value be in?</h3>
      <p>
        Hue is a whole number from 0 to 360 degrees around the color
        wheel. Saturation and value are each a whole number from 0 to 100
        percent.
      </p>

      <h3>Is this HSV converter free to use?</h3>
      <p>
        Yes, it's completely free with no sign-up, and all conversions
        happen instantly in your browser.
      </p>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: "What's the difference between HSV and HSL?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Both describe a color using hue, but HSV\'s third component ("value") represents brightness relative to pure black, while HSL\'s ("lightness") is relative to a midpoint between black and white. HSV is common in color pickers and design tools; HSL is more common in CSS.',
              },
            },
            {
              '@type': 'Question',
              name: 'What range should hue, saturation, and value be in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hue is a whole number from 0 to 360 degrees around the color wheel. Saturation and value are each a whole number from 0 to 100 percent.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is this HSV converter free to use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes, it's completely free with no sign-up, and all conversions happen instantly in your browser.",
              },
            },
          ],
        })}
      </script>
    </section>
  );
}
