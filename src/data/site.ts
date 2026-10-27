export const SITE_URL = 'https://pingdongyeshi.com';

/** SEO 站名統一格式：景點名稱 + 城市 + 旅遊指南 */
export const SITE_NAME = '屏東觀光夜市（屏東市）旅遊指南';
export const SITE_NAME_EN = 'Pingtung Night Market (Pingtung City) Travel Guide';

export type Locale = 'zh' | 'en';

export function siteName(locale: Locale): string {
  return locale === 'en' ? SITE_NAME_EN : SITE_NAME;
}

/** 子頁標題統一附加「 | SITE_NAME」後綴。 */
export function withSiteName(front: string, locale: Locale = 'zh'): string {
  return `${front} | ${siteName(locale)}`;
}

export const RATING_NOTE_ZH = 'Google地圖公開快照，2026年10月26日核對；評分與評論數會變動。';
export const RATING_NOTE_EN =
  'Google Maps public snapshot checked 26 October 2026; rating and review count may change.';

export const ATTRACTION = {
  name: { zh: '屏東觀光夜市', en: 'Pingtung Night Market' },
  alternateName: {
    zh: ['屏東夜市', '民族路夜市', '屏東市夜市'],
    en: ['Pingtung Tourist Night Market', 'Minzu Road Night Market']
  },
  description: {
    zh: '屏東市民族路的美食街區。縣政府旅遊頁介紹蒸式肉圓、香菇肉羹、汕頭火鍋與愛玉冰；各店時段需分別確認。',
    en: 'A food street on Minzu Road in Pingtung City. The county tourism page highlights steamed ba-wan, mushroom thick soup, Shantou hotpot and aiyu jelly; check each vendor separately.'
  },
  streetAddress: { zh: '民族路36號', en: 'No. 36, Minzu Rd' },
  addressLocality: { zh: '屏東市', en: 'Jinquan Village, Pingtung City' },
  addressRegion: { zh: '屏東縣', en: 'Pingtung County' },
  postalCode: '900',
  addressCountry: 'TW',
  plusCode: 'MF9Q+XW Jinquan Village, Pingtung City, Pingtung County, Taiwan',
  geo: { latitude: 22.6698878, longitude: 120.4898724 },
  openingHours: 'Tourism listing 10:30–00:00; Maps24h snapshot2026-10-26; vendorhoursvary',
  rating: 4.2,
  reviewCount: 22434,
  mapsShare: 'https://maps.app.goo.gl/hiM2jusJtw8vg6D87',
  mapsEmbed:
    'https://www.google.com/maps?q=%E5%B1%8F%E6%9D%B1%E8%A7%80%E5%85%89%E5%A4%9C%E5%B8%82&output=embed&hl=zh-TW&gl=tw',
  officialSource: 'https://www.pingtungtour.com.tw/spots_info/?27.html',
  sameAs: [
    'https://www.pingtungtour.com.tw/spots_info/?27.html',
    'https://maps.app.goo.gl/hiM2jusJtw8vg6D87',
    'https://www.google.com/maps/place/%E5%B1%8F%E4%B8%9C%E8%A7%82%E5%85%89%E5%A4%9C%E5%B8%82/data=!4m7!3m6!1s0x346e1784503cbaed:0x8549a3a6db254816!8m2!3d22.6698878!4d120.4898724!16s%2Fg%2F11b_2qfnfj'
  ],
  hero: {
    src: '/images/market-hero.svg',
    alt: '原創概念示意圖，非實景攝影 / Original conceptual illustration, not a photograph',
    caption: '非屏東夜市實景，不代表特定攤商或料理 / Not an actual market view or a verified vendor or dish'
  },
  gallery: [
    {
      src: '/images/market-lane.svg',
      alt: '原創概念示意圖，非實景攝影 / Original conceptual illustration, not a photograph',
      caption: '非屏東夜市實景，不代表特定攤商或料理 / Not an actual market view or a verified vendor or dish'
    },
    {
      src: '/images/market-food.svg',
      alt: '原創概念示意圖，非實景攝影 / Original conceptual illustration, not a photograph',
      caption: '非屏東夜市實景，不代表特定攤商或料理 / Not an actual market view or a verified vendor or dish'
    }
  ],
  ogImage: '/images/market-hero.svg'
} as const;
