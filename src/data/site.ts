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

export const RATING_NOTE_ZH = '評分同步自 Google 地圖（2026 年 9 月），屬指示性參考，請以 Google 地圖最新顯示為準。';
export const RATING_NOTE_EN =
  'Ratings are synced from Google Maps (September 2026) as indicative snapshots; check the live listing before you go.';

export const ATTRACTION = {
  name: { zh: '屏東觀光夜市', en: 'Pingtung Night Market' },
  alternateName: {
    zh: ['屏東夜市', '民族路夜市', '屏東市夜市'],
    en: ['Pingtung Tourist Night Market', 'Minzu Road Night Market']
  },
  description: {
    zh: '位於屏東市民族路、鄰近屏東車站的老字號美食街區，以蒸式肉圓、雞肉飯、羹湯、汕頭火鍋與冰品聞名，從白天一路吃到深夜。',
    en: 'A long-running food street along Minzu Road in Pingtung City, minutes from Pingtung railway station, known for steamed ba-wan, chicken rice, savoury thick soups, Shantou hotpot and icy desserts.'
  },
  streetAddress: { zh: '民族路36號', en: 'No. 36, Minzu Rd' },
  addressLocality: { zh: '屏東市', en: 'Jinquan Village, Pingtung City' },
  addressRegion: { zh: '屏東縣', en: 'Pingtung County' },
  postalCode: '900',
  addressCountry: 'TW',
  plusCode: 'MF9Q+XW Jinquan Village, Pingtung City, Pingtung County, Taiwan',
  geo: { latitude: 22.6698878, longitude: 120.4898724 },
  openingHours: 'Mo-Su 10:30-00:00',
  rating: 4.2,
  reviewCount: 22371,
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
    src: '/images/pingtung-night-market-hero.png',
    alt: '屏東觀光夜市民族路傍晚街景，招牌亮起、人潮沿街移動',
    caption: '民族路入夜後，招牌、蒸氣與人聲一起把街道點亮。'
  },
  gallery: [
    {
      src: '/images/pingtung-night-market-street.png',
      alt: '屏東觀光夜市巷內老店面與夜市街屋',
      caption: '夜市不只是攤販，也藏著許多經營多年的固定店面。'
    },
    {
      src: '/images/pingtung-night-market-food.jpg',
      alt: '屏東觀光夜市店家現做的碗裝小吃',
      caption: '屏東夜市的魅力，來自每天重複備料、開火、端菜的日常。'
    }
  ],
  ogImage: '/images/og-cover.jpg'
} as const;
