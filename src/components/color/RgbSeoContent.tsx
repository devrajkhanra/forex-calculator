export function RgbSeoContent() {
  return (
    <section className="fx-seo-content" aria-labelledby="rgb-about-heading">
      <h2 id="rgb-about-heading">About This RGB to Color Tone Converter</h2>
      <p>
        This free tool converts RGB channel values (0-255 each) into the
        matching HEX and HSL codes, then generates a full set of tints,
        shades, tones, and the complementary color — the same palette
        output as our hex converter, just starting from RGB input.
      </p>

      <h2>How It Works</h2>
      <p>
        Enter a value from 0 to 255 for each of the red, green, and blue
        channels, or pick a color with the native color picker to fill all
        three at once. The tool instantly shows the matching HEX and HSL
        values, plus five tints, five shades, five tones, and the
        complementary color. Click any value or swatch to copy it to your
        clipboard.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What range should each RGB channel be in?</h3>
      <p>
        Each of the red, green, and blue channels accepts a whole number
        from 0 to 255, matching the standard 8-bit-per-channel RGB color
        model used across the web.
      </p>

      <h3>How is this different from the hex converter?</h3>
      <p>
        Both tools produce the same tints, shades, tones, and
        complementary color output — this one simply starts from RGB
        channel values instead of a hex code, for when that's the format
        you already have.
      </p>

      <h3>Is this RGB converter free to use?</h3>
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
              name: 'What range should each RGB channel be in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Each of the red, green, and blue channels accepts a whole number from 0 to 255, matching the standard 8-bit-per-channel RGB color model used across the web.',
              },
            },
            {
              '@type': 'Question',
              name: 'How is this different from the hex converter?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Both tools produce the same tints, shades, tones, and complementary color output — this one simply starts from RGB channel values instead of a hex code, for when that's the format you already have.",
              },
            },
            {
              '@type': 'Question',
              name: 'Is this RGB converter free to use?',
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
