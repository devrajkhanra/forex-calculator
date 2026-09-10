import { Helmet } from 'react-helmet-async';
import { ColorStudio } from '../components/color/ColorStudio';
import { HsvSeoContent } from '../components/color/HsvSeoContent';
import { SITE_URL, SITE_NAME } from '../constants/site';

const TITLE = 'HSV to Color Tone Converter - Tints, Shades & Tones Generator';
const DESCRIPTION = 'Convert HSV (hue, saturation, value) to HEX, RGB, and HSL, then generate matching tints, shades, tones, and the complementary color instantly. Free, no sign-up.';
const PATH = '/hsv-to-color-converter';

export function HsvColorConverterPage() {
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
            name: `${SITE_NAME} - HSV to Color Tone Converter`,
            url: `${SITE_URL}${PATH}`,
            applicationCategory: 'DesignApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description: DESCRIPTION,
          })}
        </script>
      </Helmet>

      <h1 className="fx-page-title">HSV to Color Tone Converter</h1>
      <p className="fx-page-subtitle">Generate tints, shades, tones, and the complementary color from HSV values.</p>

      <ColorStudio initialTab="hsv" />
      <HsvSeoContent />
    </>
  );
}
