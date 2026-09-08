export function ColorSeoContent() {
  return (
    <section className="fx-seo-content" aria-labelledby="color-about-heading">
      <h2 id="color-about-heading">About This Hex to Color Tone Converter</h2>
      <p>
        This free tool converts any HEX color code into its RGB and HSL
        equivalents, then generates a full set of tints, shades, and tones
        so you can quickly build a coordinated color palette for design or
        development work.
      </p>

      <h2>How It Works</h2>
      <p>
        Enter a hex code (with or without the leading #) or pick a color
        with the native color picker. The tool instantly shows the matching
        RGB and HSL values, plus five tints (blended toward white), five
        shades (blended toward black), five tones (blended toward gray),
        and the complementary color on the opposite side of the color
        wheel. Click any value or swatch to copy it to your clipboard.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What's the difference between a tint, shade, and tone?</h3>
      <p>
        A tint is a color mixed with white to make it lighter, a shade is a
        color mixed with black to make it darker, and a tone is a color
        mixed with gray to desaturate it without changing its lightness as
        drastically.
      </p>

      <h3>Does this tool support 3-digit hex codes?</h3>
      <p>
        Yes. Shorthand hex codes like #fff are automatically expanded to
        their full 6-digit form before conversion.
      </p>

      <h3>Is this color converter free to use?</h3>
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
              name: "What's the difference between a tint, shade, and tone?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A tint is a color mixed with white to make it lighter, a shade is a color mixed with black to make it darker, and a tone is a color mixed with gray to desaturate it without changing its lightness as drastically.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does this tool support 3-digit hex codes?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Shorthand hex codes like #fff are automatically expanded to their full 6-digit form before conversion.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is this color converter free to use?',
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
