import { Helmet } from 'react-helmet-async';
import { ColorStudio } from '../components/color/ColorStudio';
import { ColorHubSeoContent } from '../components/color/ColorHubSeoContent';
import { SITE_URL, SITE_NAME } from '../constants/site';

const TITLE = 'Color Converter - Hex, RGB, HSV, CMYK & Visual Picker, All in One';
const DESCRIPTION = 'Convert between HEX, RGB, HSV, and CMYK, or pick a color visually. Every format stays in sync, plus tints, shades, tones, and the complementary color. Free, no sign-up.';
const PATH = '/color-converter';

export function ColorConverterHubPage() {
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
            name: `${SITE_NAME} - Color Converter`,
            url: `${SITE_URL}${PATH}`,
            applicationCategory: 'DesignApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description: DESCRIPTION,
          })}
        </script>
      </Helmet>

      <h1 className="fx-page-title">Color Converter</h1>
      <p className="fx-page-subtitle">Hex, RGB, HSV, CMYK, and a visual picker — all in one place, always in sync.</p>

      <ColorStudio />
      <ColorHubSeoContent />
    </>
  );
}
