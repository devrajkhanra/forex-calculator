import { Helmet } from 'react-helmet-async';
import { ColorStudio } from '../components/color/ColorStudio';
import { ColorSeoContent } from '../components/color/ColorSeoContent';
import { SITE_URL, SITE_NAME } from '../constants/site';

const TITLE = 'Hex to Color Tone Converter - Tints, Shades & Tones Generator';
const DESCRIPTION = 'Convert any HEX color to RGB and HSL, then generate matching tints, shades, tones, and the complementary color instantly. Free, no sign-up.';
const PATH = '/hex-to-color-converter';

export function HexColorConverterPage() {
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
            name: `${SITE_NAME} - Hex to Color Tone Converter`,
            url: `${SITE_URL}${PATH}`,
            applicationCategory: 'DesignApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description: DESCRIPTION,
          })}
        </script>
      </Helmet>

      <h1 className="fx-page-title">Hex to Color Tone Converter</h1>
      <p className="fx-page-subtitle">Generate tints, shades, tones, and the complementary color from any hex code.</p>

      <ColorStudio />
      <ColorSeoContent />
    </>
  );
}
