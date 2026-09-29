import { ATTRACTION } from '../data/site';
import type { GuideContent } from './types';

const badgeRating = `Google ${ATTRACTION.rating} / 5 · ${ATTRACTION.reviewCount.toLocaleString('en-US')} reviews`;

export const enContent: GuideContent = {
  metaTitle:
    'Pingtung Night Market (Pingtung City) Travel Guide: What to Eat, Hours, Parking',
  metaDescription:
    'Everything you need for Pingtung Tourist Night Market on Minzu Road: must-eat Taiwanese snacks, official hours 10:30–24:00, how to walk from Pingtung railway station, paid parking lots and nearby sights.',

  hero: {
    badges: ['Minzu Rd, Pingtung City', badgeRating],
    kicker: 'Pingtung Night Market · Southern Taiwan',
    titleTop: 'Not a market that',
    titleAccent: 'only wakes at night',
    lead: 'Pingtung Night Market runs along Minzu Road a few minutes from Pingtung railway station. Steamed ba-wan, chicken rice, glossy thick soups, Shantou hotpot and shaved ice keep one street fed from late morning to midnight.',
    primaryCta: 'What to eat first',
    secondaryCta: 'Plan the visit',
    facts: ['📍 No. 36, Minzu Rd', '🚉 10-min walk from Pingtung Station', '🎫 Free entry']
  },

  ticket: {
    eyebrow: "TONIGHT'S TICKET",
    title: 'Pingtung food pass',
    free: 'FREE',
    rows: [
      { label: 'Official hours', value: '10:30–24:00' },
      { label: 'Best atmosphere', value: 'Dusk onward' },
      { label: 'Suggested stay', value: '1.5–3 hours' },
      { label: 'Bring', value: 'Small cash notes' }
    ],
    note: 'The market is a loose cluster of independent stalls and restaurants. Opening times differ shop by shop, so check individual listings if you are chasing one specific bowl.'
  },

  introCards: [
    {
      eyebrow: '01 · Order',
      title: 'Snacks first, then a seat',
      text: 'Start with a small bowl — ba-wan, thick soup or chicken rice — before committing to a sit-down hotpot. It keeps you from filling up on the first stop.'
    },
    {
      eyebrow: '02 · Timing',
      title: 'Daytime is not wasted',
      text: 'This is not a market that only opens at night. Several classic stalls open in the late morning, and the street changes character again after dark.'
    },
    {
      eyebrow: '03 · Side lanes',
      title: 'Step off Minzu Road',
      text: 'Turn into the parallel lanes to see old shopfronts and the older grain of downtown Pingtung — the district reads very differently one block away.'
    }
  ],

  eat: {
    kicker: 'What to eat',
    titleLines: ['Eat local first,', 'then follow the queue.'],
    lead: 'The official Pingtung travel listing highlights fig-seed jelly, mushroom pork soup, Shantou hotpot and steamed ba-wan. Add the everyday staples found along the street — chicken rice, Spanish mackerel soup, rice-blood cake and shaved ice — and the street starts to make sense.',
    foods: [
      {
        name: 'Minzu Night Market Spanish mackerel soup',
        tag: 'Near Fuxing Rd',
        text: 'Crispy fried mackerel sunk into glossy, slightly sweet southern-style broth — one of the most recognisable bowls near the market entrance.',
        hint: 'Order a small portion or share it if you plan to hop between several stalls.'
      },
      {
        name: 'Zheng Lao Pai steamed ba-wan',
        tag: 'Steamed ba-wan',
        text: 'Pingtung-style steamed ba-wan: soft, sticky translucent skin, quite different from the deep-fried Changhua version most travellers know.',
        hint: 'Some ba-wan shops open early. Come before noon if this is the reason for your trip.'
      },
      {
        name: 'Xinyuan Shantou hotpot',
        tag: 'Old-school pot',
        text: 'Shantou hotpot is singled out in the official travel guide — a good choice when you have company and want to sit down properly.',
        hint: 'Popular at dinner time; waiting and closing days follow the shop’s own schedule.'
      },
      {
        name: 'Wangchao mushroom & swordfish thick soup',
        tag: 'Taiwanese soups',
        text: 'Thickened, bonito-scented soups with mushroom or swordfish are the everyday taste of this street.',
        hint: 'One shop’s hours say nothing about another’s — stalls keep their own clocks.'
      },
      {
        name: 'Chicken rice & rice-blood cake',
        tag: 'Everyday staples',
        text: 'Rice showered with savoury chicken dripping, plus a slice of rice-blood cake: the fastest full Pingtung meal you can get.',
        hint: 'Start here rather than with dessert if you still have a lot of walking ahead.'
      },
      {
        name: 'Fig-seed jelly, herbal tea & ice',
        tag: 'Cool finish',
        text: 'Southern nights stay warm, so ending a bowl of soup with fig-seed jelly, herbal tea or shaved ice is entirely logical.',
        hint: 'Ask for less sugar if you want it light.'
      }
    ],
    moreLabel: 'See the full food list →'
  },

  photos: {
    kicker: 'Street snapshots',
    title: 'A real market looks like it is open.',
    note: 'No AI-generated attraction photos — these are actual street images of the Pingtung market area.',
    items: [
      {
        src: ATTRACTION.hero.src,
        alt: 'Lanterns and shop signs lighting up Minzu Road at Pingtung Night Market after dusk',
        caption: 'After dark, signs, steam and conversation light the street up together.'
      },
      {
        src: ATTRACTION.gallery[0].src,
        alt: 'Old storefronts in a side lane of Pingtung Night Market',
        caption: 'Beyond the stalls, decades-old shop houses keep trading on the same lanes.'
      },
      {
        src: ATTRACTION.gallery[1].src,
        alt: 'A bowl of local food prepared to order at Pingtung Night Market',
        caption: 'The appeal comes from the daily routine: prep the stock, light the fire, serve.'
      }
    ]
  },

  plan: {
    kicker: 'Visit plan',
    title: 'How to walk it well',
    steps: [
      {
        title: '① Step off the train, skip the taxi',
        text: 'The market sits close to the station; the walk itself is the easiest way to drop into the city’s pace.'
      },
      {
        title: '② Sweep the street, then order',
        text: 'Minzu Road is dense. What looks best at first glance is rarely the only option — one lap first avoids filling up too early.'
      },
      {
        title: '③ Turn into the side lanes',
        text: 'Slip off the main street into the parallel lanes; the neighborhood turns from a food run into an evening walk.'
      },
      {
        title: '④ Add Pingtung Park or Victory Star Village',
        text: 'If you have energy left, extend the after-dinner walk into the city’s historic and creative districts.'
      }
    ],
    practical: [
      {
        eyebrow: 'COST',
        title: 'Tickets / budget',
        text: 'No admission fee — you only pay for food and shopping. Prices vary by stall; this site avoids listing menu prices that go stale quickly.'
      },
      {
        eyebrow: 'TIME',
        title: 'Best time',
        text: 'Come after dusk for lanterns and the fullest dinner choice; visit in the daytime for early-opening ba-wan and breakfast-style snacks.'
      },
      {
        eyebrow: 'STAY',
        title: 'How long',
        text: 'One hour to ninety minutes for a quick tasting round; two to three hours if you want a sit-down pot, photos and lane wandering.'
      },
      {
        eyebrow: 'MONEY',
        title: 'What to bring',
        text: 'Small cash notes, a reusable bag and tissues. Some stalls take e-payment, but cash remains the most reliable option.'
      }
    ]
  },

  transport: {
    kicker: 'Getting there',
    titleLines: ['Right in the centre,', 'easier than it sounds.'],
    cards: [
      {
        icon: '🚆',
        title: 'Train',
        text: 'From Pingtung Station, walk toward Minzu and Fuxing roads — roughly ten minutes to the core of the market.'
      },
      {
        icon: '🚌',
        title: 'Bus & coach',
        text: 'City buses and intercity coaches connect at and around the station; routes change, so confirm the nearest stop the same day.'
      },
      {
        icon: '🚗',
        title: 'Driving',
        text: 'Follow Provincial Highway 1 or Freeway 3 into Pingtung City, then Fuxing and Minzu roads. Lanes here are narrow — skip hunting for curbside parking.'
      },
      {
        icon: '🛵',
        title: 'Scooter & bicycle',
        text: 'Ideal for short hops across the city centre; slow down where pedestrians and scooters share the lanes and use legal parking.'
      }
    ],
    parkingTitle: 'Parking',
    parkingText:
      'Several paid car parks sit around the market, including lots listed publicly near Minzu and Fuxing roads. On weekend evenings, park first and walk in rather than circling the narrow lanes of the market core.',
    parkingNote: 'Lot names, rates and availability change; check live map information on the day.',
    moreLabel: 'See hours & planning notes →'
  },

  nearby: {
    kicker: 'Nearby sights',
    title: 'Keep going through Pingtung City.',
    sights: [
      {
        name: 'Ahou Cifong Temple',
        type: 'Temple',
        text: 'An old temple easy to fold into a station-to-market walk through the old town.'
      },
      {
        name: 'Pingtung Park',
        type: 'Park',
        text: 'A century-old city park with the surviving Chaoyang Gate and plenty of shade — a good post-meal walk.'
      },
      {
        name: 'Victory Star Village',
        type: 'Heritage',
        text: 'A restored Japanese-era military dependents’ quarter turned food, design and culture quarter that photographs well from afternoon to dusk.'
      },
      {
        name: 'Zhiren Town',
        type: 'Creative hub',
        text: 'A repurposed building cluster for local makers, easy to pair with Victory Star Village in one slow city afternoon.'
      }
    ],
    extraTitle: 'More to eat beyond the market.',
    extras: [
      {
        eyebrow: 'STAPLES',
        title: 'Chicken rice & rice-blood cake',
        text: 'Several old shops cluster around Minzu and Minquan roads; chicken dripping over rice is the classic quick Pingtung meal.'
      },
      {
        eyebrow: 'SWEET',
        title: 'Herbal tea, fig jelly & ice',
        text: 'After soup or hotpot, a cooling dessert or herbal tea is the natural southern way to close the meal.'
      },
      {
        eyebrow: 'TO SHARE',
        title: 'Sliced braised plates',
        text: 'Sausage, offal and soup plates built for sharing; this is where everyday local food culture shows up most clearly.'
      },
      {
        eyebrow: 'DINNER',
        title: 'Shantou hotpot',
        text: 'If you want the market to become a proper dinner, this local hotpot style is worth saving for the second half of the evening.'
      }
    ]
  },

  guides: {
    kicker: 'Go deeper',
    title: 'One street, a few more details.',
    text: 'Practical notes on planning, hours and transport, written for walkers rather than bus tours.'
  },

  map: {
    kicker: 'Map',
    title: 'Find Minzu Road, then follow your nose.',
    openLabel: 'Open in Google Maps ↗'
  },

  faq: {
    kicker: 'FAQ',
    titleLines: ['First time here?', 'Start with these.'],
    note: 'Hours and ratings move over time. These pages follow the Pingtung County travel guide first and use public Google Maps data for location and ratings.',
    items: [
      {
        q: 'Is there an entrance fee for Pingtung Night Market?',
        a: 'No. The market is an open street with free entry; you only pay individual vendors for food and shopping.'
      },
      {
        q: 'What are the Pingtung Night Market opening hours?',
        a: 'The Pingtung County tourism page currently lists 10:30–24:00. In practice each stall keeps its own hours, and Google Maps may show the place as open at any time, so verify individual shops if you have one specific dish in mind.'
      },
      {
        q: 'Are Pingtung Night Market and Minzu Road Night Market the same place?',
        a: 'Yes. “Pingtung Tourist Night Market” is the name used by official tourism listings; locals usually say Pingtung Night Market or Minzu Road Night Market for the same food street near the Minzu–Fuxing crossing.'
      },
      {
        q: 'How do I get there from Pingtung railway station?',
        a: 'Walk toward Minzu and Fuxing roads from the TRA station — about ten minutes to the market core. A taxi or city bike share also works if you would rather not walk.'
      },
      {
        q: 'Can I drive, and where can I park?',
        a: 'Several paid car parks operate around the market near Minzu and Fuxing roads. They fill up at dinner time and on weekends, so arrive early or come by train. Rates and availability follow the operator’s own notices.'
      },
      {
        q: 'What is the best time to visit Pingtung Night Market?',
        a: 'For atmosphere and the widest dinner choice, come from dusk onwards. For early-opening ba-wan and breakfast-style snacks, daytime is better; avoid weekend dinner peaks if you dislike crowds.'
      },
      {
        q: 'How long should I stay?',
        a: 'Sixty to ninety minutes covers two or three snacks. Allow two to three hours if you want a hotpot, photos and a walk through the side lanes.'
      },
      {
        q: 'Do stalls take cards or contactless payment?',
        a: 'Some do, but cash is still the safest bet. Carry small notes and coins for the smallest stalls.'
      },
      {
        q: 'Is Pingtung Night Market closed on any weekday?',
        a: 'The market itself has no single closing day — each business decides, commonly taking one fixed day off a week or closing irregularly. Check Google Maps for that specific shop on the day.'
      },
      {
        q: 'Is it still worth going in the rain?',
        a: 'Yes, though Minzu Road mixes arcade shopfronts with open-front stalls. Pick places with indoor seating, and during typhoon or heavy-rain warnings follow official notices and shop information.'
      },
      {
        q: 'What can I combine it with nearby?',
        a: 'Ahou Cifong Temple, Pingtung Park, Victory Star Village and Zhiren Town are all within walking or short driving distance — a practical afternoon-and-evening loop through Pingtung City.'
      },
      {
        q: 'Is it suitable for children or older travellers?',
        a: 'Yes. The area is flat and distances are short. Skip the busiest hour of weekend evenings if you prefer space, and choose shops with seating.'
      }
    ]
  },

  sources: {
    title: 'Sources and practical notes',
    text: 'Names, address, highlights and official hours follow the Pingtung County “Pingtung Travel” listing; transport and parking notes draw on public Google Maps information. Ratings and review counts change over time — use the live Google Maps listing as the final reference.',
    links: [
      { label: 'Pingtung Travel — Tourist Night Market ↗', href: 'https://www.pingtungtour.com.tw/spots_info/?27.html' },
      {
        label: 'Google Maps ↗',
        href: 'https://www.google.com/maps/place/%E5%B1%8F%E4%B8%9C%E8%A7%82%E5%85%89%E5%A4%9C%E5%B8%82/data=!4m7!3m6!1s0x346e1784503cbaed:0x8549a3a6db254816!8m2!3d22.6698878!4d120.4898724!16s%2Fg%2F11b_2qfnfj'
      }
    ]
  }
};
