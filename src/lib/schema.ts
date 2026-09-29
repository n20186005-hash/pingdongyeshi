import { ATTRACTION, SITE_NAME, SITE_NAME_EN, SITE_URL, type Locale } from '../data/site';
import type { Faq } from '../content/types';

/** 同一個實體在雙語頁面共用同一個 @id，避免被視為兩筆資料。 */
export const ATTRACTION_ID = `${SITE_URL}/#attraction`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function attractionSchema(locale: Locale) {
  const addressLocality = ATTRACTION.addressLocality[locale];
  const streetAddress = ATTRACTION.streetAddress[locale];

  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    '@id': ATTRACTION_ID,
    name: ATTRACTION.name[locale],
    alternateName: ATTRACTION.alternateName[locale],
    description: ATTRACTION.description[locale],
    image: [ATTRACTION.hero.src, ...ATTRACTION.gallery.map((photo) => photo.src)].map((src) => `${SITE_URL}${src}`),
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress,
      addressLocality,
      addressRegion: ATTRACTION.addressRegion[locale],
      postalCode: ATTRACTION.postalCode,
      addressCountry: ATTRACTION.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.geo.latitude,
      longitude: ATTRACTION.geo.longitude
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Plus Code',
      value: ATTRACTION.plusCode
    },
    hasMap: ATTRACTION.mapsShare,
    sameAs: [...ATTRACTION.sameAs],
    openingHours: ATTRACTION.openingHours,
    isAccessibleForFree: true,
    publicAccess: true,
    priceRange: '$$',
    telephone: undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ATTRACTION.rating,
      reviewCount: ATTRACTION.reviewCount,
      bestRating: 5,
      worstRating: 1
    }
  };
}

export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: locale === 'en' ? SITE_NAME_EN : SITE_NAME,
    inLanguage: locale === 'en' ? 'en' : 'zh-Hant-TW',
    publisher: { '@id': ORGANIZATION_ID }
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'pingdongyeshi.com',
    url: SITE_URL,
    description: '非官方・屏東觀光夜市旅遊資訊站'
  };
}
