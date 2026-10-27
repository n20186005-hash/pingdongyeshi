import { SITE_URL, type Locale } from './data/site';

export const locales = ['zh', 'en'] as const;

export const htmlLang: Record<Locale, string> = {
  zh: 'zh-Hant-TW',
  en: 'en'
};

export const ogLocale: Record<Locale, string> = {
  zh: 'zh_TW',
  en: 'en_US'
};

/** 中文站放在根目錄，其他語系放在 /<locale>/ 前綴下。 */
export function localizedPath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const base = locale === 'zh' ? '' : `/${locale}`;
  return clean ? `${base}/${clean}/` : `${base}/`;
}

export function absoluteUrl(locale: Locale, path = ''): string {
  return `${SITE_URL}${localizedPath(locale, path)}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

/** 語言切換只在有對應翻譯的頁面（目前為首頁）有意義。 */
export function switchLocaleHref(locale: Locale, path = ''): string {
  return path ? localizedPath(otherLocale(locale)) : localizedPath(otherLocale(locale));
}

export type NavItem = { href: string; label: string };
export type GuideLinkItem = { href: string; title: string; text: string };

export const ui = {
  zh: {
    brandAlt: '屏東觀光夜市',
    mapCta: '看地圖',
    langSwitch: 'English',
    langSwitchAria: '切換到英文版',
    navLabel: '主要導覽',
    navItems: [
      { href: '#eat', label: '吃什麼' },
      { href: '/food/', label: '必吃美食' },
      { href: '#plan', label: '怎麼逛' },
      { href: '#transport', label: '交通停車' },
      { href: '#nearby', label: '周邊' },
      { href: '#faq', label: 'FAQ' }
    ],
    guideTitle: '延伸閱讀',
    guides: [
      { href: '/food/', title: '屏東夜市必吃美食', text: '官方介紹的四類小吃、點餐與飲食需求確認。' },
      { href: '/transport/', title: '交通與停車指南', text: '車站起點、班次、合法停車與下客的行前核對。' },
      { href: '/hours/', title: '營業時間與最佳時段', text: '官方與地圖時段分開看，逐店確認與天候安排。' }
    ],
    disclaimer:
      '非官方旅遊資訊網站，與屏東縣政府、Google 或夜市各攤商無隸屬或代表關係；營業、價格、交通與活動資訊請以現場及官方公告為準。',
    tagline: 'Made for a hungry walk through Pingtung.',
    footerLinksTitle: '站內指南',
    home: '首頁',
    skipLabel: '直接跳到主要內容',
    breadcrumbHome: '首頁'
  },
  en: {
    brandAlt: 'Pingtung Night Market',
    mapCta: 'Map',
    langSwitch: '中文',
    langSwitchAria: 'Switch to Chinese version',
    navLabel: 'Main navigation',
    navItems: [
      { href: '#eat', label: 'What to eat' },
      { href: '#plan', label: 'Visit plan' },
      { href: '#transport', label: 'Getting there' },
      { href: '#nearby', label: 'Nearby' },
      { href: '#faq', label: 'FAQ' }
    ],
    guideTitle: 'Read next',
    guides: [
      { href: '/en/', title: 'Pingtung Night Market guide', text: 'Overview, food list, hours and practical notes.' }
    ],
    disclaimer:
      'An independent, unofficial travel guide. It is not affiliated with or endorsed by Pingtung County Government, Google, or the vendors of Pingtung Night Market. Hours, prices, transport and event details should always be confirmed on site or with official notices.',
    tagline: 'Made for a hungry walk through Pingtung.',
    footerLinksTitle: 'Guides',
    home: 'Home',
    skipLabel: 'Skip to main content',
    breadcrumbHome: 'Home'
  }
} as const;

export function navItems(locale: Locale): NavItem[] {
  return [...ui[locale].navItems];
}

export function guideLinks(locale: Locale): GuideLinkItem[] {
  return [...ui[locale].guides];
}
