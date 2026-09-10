export function ColorHubSeoContent() {
  return (
    <section className="fx-seo-content" aria-labelledby="hub-about-heading">
      <h2 id="hub-about-heading">One Tool for Every Color Conversion</h2>
      <p>
        This is a single, all-in-one color converter covering HEX, RGB,
        HSV, and CMYK, plus a visual saturation-brightness picker for
        choosing a color tone by eye. Enter a color in any format — or
        just pick one visually — and every other format updates
        automatically, alongside a full set of tints, shades, tones, and
        the complementary color.
      </p>

      <h2>How It Works</h2>
      <p>
        Use the tabs to switch between the Picker, Hex, RGB, HSV, and
        CMYK input modes. Whichever color you set stays in sync as you
        switch tabs, so you can start with a visual pick and immediately
        read off the exact hex code, or start with a hex code and see the
        RGB, HSV, and CMYK equivalents. Click any value or swatch to copy
        it, or hit Random for a quick starting point.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Do I need to convert between formats manually?</h3>
      <p>
        No. Every input mode feeds the same underlying color, so setting
        a value in one tab automatically carries over to every other tab
        and to the HEX, RGB, HSL, HSV, and CMYK values shown below.
      </p>

      <h3>What's the Picker tab for?</h3>
      <p>
        It's a visual way to choose a color tone by eye, using a
        saturation-brightness square and a hue slider — no need to know
        any numeric values ahead of time.
      </p>

      <h3>Is this color converter free to use?</h3>
      <p>
        Yes, it's completely free with no sign-up, and every conversion
        happens instantly in your browser.
      </p>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Do I need to convert between formats manually?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Every input mode feeds the same underlying color, so setting a value in one tab automatically carries over to every other tab and to the HEX, RGB, HSL, HSV, and CMYK values shown below.',
              },
            },
            {
              '@type': 'Question',
              name: "What's the Picker tab for?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: "It's a visual way to choose a color tone by eye, using a saturation-brightness square and a hue slider — no need to know any numeric values ahead of time.",
              },
            },
            {
              '@type': 'Question',
              name: 'Is this color converter free to use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes, it's completely free with no sign-up, and every conversion happens instantly in your browser.",
              },
            },
          ],
        })}
      </script>
    </section>
  );
}
