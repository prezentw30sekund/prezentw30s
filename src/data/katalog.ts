// One source for catalogue dimensions, shared by the quiz and the catalogue section.
// URL scheme (decyzje.md, 31.10.2026): okazja → osoba → budżet, hobby under /hobby/.

export type Opcja = { slug: string; nazwa: string };

export const okazje: Opcja[] = [
  { slug: 'urodziny', nazwa: 'Urodziny' },
  { slug: 'imieniny', nazwa: 'Imieniny' },
  { slug: 'rocznica', nazwa: 'Rocznica' },
  { slug: 'swieta', nazwa: 'Święta' },
  { slug: 'walentynki', nazwa: 'Walentynki' },
  { slug: 'dzien-matki', nazwa: 'Dzień Matki' },
  { slug: 'dzien-ojca', nazwa: 'Dzień Ojca' },
  { slug: 'slub', nazwa: 'Ślub' },
  { slug: 'parapetowka', nazwa: 'Parapetówka' },
];

export const osoby: Opcja[] = [
  { slug: 'dla-mamy', nazwa: 'Mama' },
  { slug: 'dla-taty', nazwa: 'Tata' },
  { slug: 'dla-partnerki', nazwa: 'Partnerka lub partner' },
  { slug: 'dla-przyjaciela', nazwa: 'Przyjaciel' },
  { slug: 'dla-znajomego-z-pracy', nazwa: 'Znajomy z pracy' },
  { slug: 'dla-dziecka', nazwa: 'Dziecko' },
];

// shortcut: example hobbies, final list comes from the product data.
export const hobby: Opcja[] = [
  { slug: 'malarz', nazwa: 'Malarz' },
  { slug: 'wedkarz', nazwa: 'Wędkarz' },
  { slug: 'gracz', nazwa: 'Gracz' },
  { slug: 'kucharz', nazwa: 'Kucharz' },
  { slug: 'ogrodnik', nazwa: 'Ogrodnik' },
];

export const budzety: Opcja[] = [
  { slug: 'do-50-zl', nazwa: 'Do 50 zł' },
  { slug: 'do-100-zl', nazwa: 'Do 100 zł' },
  { slug: 'do-200-zl', nazwa: 'Do 200 zł' },
  { slug: 'do-500-zl', nazwa: 'Do 500 zł' },
  { slug: 'powyzej-500-zl', nazwa: 'Powyżej 500 zł' },
];

// Catalogue link labels for people ("Dla mamy"), quiz uses the short form ("Mama").
export const osobyKatalog: Record<string, string> = {
  'dla-mamy': 'Dla mamy',
  'dla-taty': 'Dla taty',
  'dla-partnerki': 'Dla partnerki lub partnera',
  'dla-przyjaciela': 'Dla przyjaciela',
  'dla-znajomego-z-pracy': 'Dla znajomego z pracy',
  'dla-dziecka': 'Dla dziecka',
};

export const pytania = [
  { klucz: 'okazja', pytanie: 'Na jaką okazję?', opcje: [...okazje, { slug: '', nazwa: 'Inna okazja' }] },
  { klucz: 'osoba', pytanie: 'Dla kogo?', opcje: [...osoby, { slug: '', nazwa: 'Inna osoba' }] },
  { klucz: 'budzet', pytanie: 'Ile chcesz wydać?', opcje: budzety },
];

/** Quiz answers → static list URL, skipping "Inna …" (empty slug). */
export function sciezkaListy(slugi: string[]): string {
  return '/' + slugi.filter(Boolean).map((s) => s + '/').join('');
}
