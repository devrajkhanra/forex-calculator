export function CmykSeoContent() {
  return (
    <section className="fx-seo-content" aria-labelledby="cmyk-about-heading">
      <h2 id="cmyk-about-heading">About This CMYK to Color Tone Converter</h2>
      <p>
        This free tool converts CMYK (cyan, magenta, yellow, key/black)
        input into the matching HEX, RGB, HSL, and HSV codes, then
        generates a full set of tints, shades, tones, and the
        complementary color — the same palette output as our other color
        converters, just starting from CMYK input.
      </p>

      <h2>How It Works</h2>
      <p>
        Enter a percentage from 0 to 100 for cyan, magenta, yellow, and
        key (black), or pick a color with the native color picker to fill
        all four at once. The tool instantly shows the matching HEX, RGB,
        HSL, and HSV values, plus five tints, five shades, five tones, and
        the complementary color. Click any value or swatch to copy it to
        your clipboard.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is CMYK used for?</h3>
      <p>
        CMYK is the color model used in print design, describing a color
        as percentages of cyan, magenta, yellow, and black ink rather than
        light, which is what RGB-based screen formats use.
      </p>

      <h3>What range should each CMYK value be in?</h3>
      <p>
        Each of cyan, magenta, yellow, and key (black) is a whole number
        percentage from 0 to 100.
      </p>

      <h3>Is this CMYK converter free to use?</h3>
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
              name: 'What is CMYK used for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'CMYK is the color model used in print design, describing a color as percentages of cyan, magenta, yellow, and black ink rather than light, which is what RGB-based screen formats use.',
              },
            },
            {
              '@type': 'Question',
              name: 'What range should each CMYK value be in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Each of cyan, magenta, yellow, and key (black) is a whole number percentage from 0 to 100.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is this CMYK converter free to use?',
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
