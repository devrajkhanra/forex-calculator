import { Helmet } from 'react-helmet-async';
import { ConverterForm } from '../components/currency/ConverterForm';
import { CurrencySeoContent } from '../components/currency/CurrencySeoContent';
import { useForex } from '../hooks/useForex';
import { SITE_URL, SITE_NAME } from '../constants/site';

const TITLE = 'Currency Converter - Free Live Forex Exchange Rate Calculator';
const DESCRIPTION = 'Convert between world currencies instantly with live, up-to-date exchange rates. Free, fast, no sign-up forex calculator supporting all major currency pairs.';
const PATH = '/';

export function CurrencyConverterPage() {
  const {
    currencies, amount, setAmount, fromCurrency, setFromCurrency,
    toCurrency, setToCurrency, result, loading, rateInfo, handleSwap
  } = useForex();

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}${PATH}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}${PATH}`} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: SITE_NAME,
            url: `${SITE_URL}${PATH}`,
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description: DESCRIPTION,
          })}
        </script>
      </Helmet>

      <h1 className="fx-page-title">Currency Converter</h1>
      <p className="fx-page-subtitle">Live exchange rates, updated in real time.</p>

      <ConverterForm
        currencies={currencies}
        amount={amount}
        setAmount={setAmount}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        onSwap={handleSwap}
        result={result}
        loading={loading}
        rateInfo={rateInfo}
      />

      <CurrencySeoContent />
    </>
  );
}
