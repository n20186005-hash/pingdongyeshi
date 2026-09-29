export type Photo = { src: string; alt: string; caption: string };
export type Food = { name: string; tag: string; text: string; hint: string };
export type Sight = { name: string; type: string; text: string };
export type Faq = { q: string; a: string };
export type Step = { title: string; text: string };
export type Card = { eyebrow: string; title: string; text: string };
export type TransportCard = { icon: string; title: string; text: string };
export type KeyValue = { label: string; value: string };
export type GuideLink = { href: string; title: string; text: string };

export type GuideContent = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    badges: string[];
    kicker: string;
    titleTop: string;
    titleAccent: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    facts: string[];
  };
  ticket: {
    eyebrow: string;
    title: string;
    free: string;
    rows: KeyValue[];
    note: string;
  };
  introCards: Card[];
  eat: {
    kicker: string;
    titleLines: string[];
    lead: string;
    foods: Food[];
    moreLabel: string;
  };
  photos: { kicker: string; title: string; note: string; items: Photo[] };
  plan: {
    kicker: string;
    title: string;
    steps: Step[];
    practical: Card[];
  };
  transport: {
    kicker: string;
    titleLines: string[];
    cards: TransportCard[];
    parkingTitle: string;
    parkingText: string;
    parkingNote: string;
    moreLabel: string;
  };
  nearby: {
    kicker: string;
    title: string;
    sights: Sight[];
    extraTitle: string;
    extras: Card[];
  };
  guides: { kicker: string; title: string; text: string };
  map: { kicker: string; title: string; openLabel: string };
  faq: {
    kicker: string;
    titleLines: string[];
    note: string;
    items: Faq[];
  };
  sources: {
    title: string;
    text: string;
    links: { label: string; href: string }[];
  };
};
