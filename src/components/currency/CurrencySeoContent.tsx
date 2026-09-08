export function CurrencySeoContent() {
  return (
    <section className="fx-seo-content" aria-labelledby="about-heading">
      <h2 id="about-heading">About This Currency Converter</h2>
      <p>
        This free currency converter lets you convert between major world
        currencies using live, regularly updated exchange rates. Enter an
        amount, pick your source and target currencies, and get an instant
        conversion &mdash; no account, sign-up, or download required.
      </p>

      <h2>How It Works</h2>
      <p>
        Type the amount you want to convert into the left field, choose the
        currency you're converting from, then choose the currency you want to
        convert to on the right. The converted amount updates automatically
        using the latest available exchange rate. Use the swap button to
        instantly reverse the conversion direction.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>How often are the exchange rates updated?</h3>
      <p>
        Exchange rates are pulled from a live foreign exchange data source and
        refresh automatically, so conversions reflect current market rates
        rather than fixed or historical values.
      </p>

      <h3>Is this currency converter free to use?</h3>
      <p>
        Yes. The tool is completely free, requires no registration, and
        places no limit on the number of conversions you can perform.
      </p>

      <h3>Which currencies are supported?</h3>
      <p>
        The converter supports all major global currency pairs, including
        USD, EUR, GBP, JPY, INR, AUD, CAD, and many more &mdash; select any
        pair from the currency dropdowns to see the current rate.
      </p>

      <h3>Can I use this on my phone?</h3>
      <p>
        Yes, the calculator is fully responsive and works on desktop,
        tablet, and mobile browsers alike.
      </p>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How often are the exchange rates updated?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Exchange rates are pulled from a live foreign exchange data source and refresh automatically, so conversions reflect current market rates rather than fixed or historical values.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is this currency converter free to use?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The tool is completely free, requires no registration, and places no limit on the number of conversions you can perform.',
              },
            },
            {
              '@type': 'Question',
              name: 'Which currencies are supported?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The converter supports all major global currency pairs, including USD, EUR, GBP, JPY, INR, AUD, CAD, and many more.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can I use this on my phone?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, the calculator is fully responsive and works on desktop, tablet, and mobile browsers alike.',
              },
            },
          ],
        })}
      </script>
    </section>
  );
}
