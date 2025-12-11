import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

// Instrument Serif for accent/highlighted text
const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  style: ['normal', 'italic'],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://sinanyurttadur.de";

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const title = t('title');
  const description = t('description');

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: title,
      template: `%s | Sinan Yurttadur`,
    },
    description,
    keywords: [
      "Sinan Yurttadur",
      "Innovation Speaker",
      "Transformation Expert",
      "AI Speaker",
      "Keynote Speaker Deutschland",
      "Digital Transformation",
      "theneed",
      "uxcircle",
      "Entrepreneur",
      "KI Berater",
      "Stuttgart",
      "Innovation Consultant",
    ],
    authors: [{ name: "Sinan Yurttadur", url: BASE_URL }],
    creator: "Sinan Yurttadur",
    publisher: "Sinan Yurttadur",

    // Favicon & Icons
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [
        { url: '/images/sinan-hero.png', sizes: '180x180', type: 'image/png' },
      ],
    },

    // Open Graph
    openGraph: {
      type: "website",
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      alternateLocale: locale === 'de' ? 'en_US' : 'de_DE',
      url: BASE_URL,
      siteName: "Sinan Yurttadur",
      title,
      description,
      images: [
        {
          url: '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: 'Sinan Yurttadur - Innovation & Transformation',
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.svg'],
      creator: '@sinanyurttadur',
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Verification (add your codes when available)
    // verification: {
    //   google: 'your-google-verification-code',
    // },

    // Alternates for i18n
    alternates: {
      canonical: BASE_URL,
      languages: {
        'de': `${BASE_URL}/de`,
        'en': `${BASE_URL}/en`,
      },
    },

    // Category
    category: 'business',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// JSON-LD Structured Data
function JsonLd({ locale }: { locale: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sinan Yurttadur",
    url: BASE_URL,
    image: `${BASE_URL}/images/sinan-hero.png`,
    jobTitle: locale === 'de' ? "Innovation & Transformation Experte" : "Innovation & Transformation Expert",
    worksFor: {
      "@type": "Organization",
      name: "The NEED GmbH",
      url: "https://theneed.works",
    },
    sameAs: [
      "https://www.linkedin.com/in/sinan-yurttadur-2ba246269/",
      "https://www.youtube.com/@sinanyurttadur",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stuttgart",
      addressCountry: "DE",
    },
    knowsAbout: [
      "Digital Transformation",
      "Innovation Management",
      "Artificial Intelligence",
      "Keynote Speaking",
      "Business Strategy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'de' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <head>
        {/* Satoshi font from Fontshare CDN */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <JsonLd locale={locale} />
      </head>
      <body className={`${instrumentSerif.variable} font-satoshi antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
