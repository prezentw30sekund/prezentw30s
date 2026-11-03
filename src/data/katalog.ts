// One source for catalogue dimensions, shared by the quiz and the catalogue section.
// URL scheme (decyzje.md, 31.10.2026): okazja → osoba → budżet, hobby under /hobby/.

export type Opcja = { slug: string; nazwa: string };

export const okazje: Opcja[] = [
  { slug: 'mikolajki', nazwa: 'Mikołajki' },
  { slug: 'swieta', nazwa: 'Święta' },
];

export const osoby: Opcja[] = [
  { slug: 'dla-niej', nazwa: 'Dla niej' },
  { slug: 'dla-niego', nazwa: 'Dla niego' },
  { slug: 'dla-przyjaciolki', nazwa: 'Przyjaciółka' },
  { slug: 'dla-przyjaciela', nazwa: 'Przyjaciel' },
];

// shortcut: example hobbies, final list comes from the product data.
export const hobby: Opcja[] = [
  { slug: 'malarz', nazwa: 'Malarz' },
  { slug: 'wedkarz', nazwa: 'Wędkarz' },
  { slug: 'gracz', nazwa: 'Gracz' },
  { slug: 'kucharz', nazwa: 'Kucharz' },
  { slug: 'ogrodnik', nazwa: 'Ogrodnik' },
];

// Price range in zł for budget sub-lists: od < price <= do.
export const budzety: (Opcja & { od: number; do: number })[] = [
  { slug: 'do-50-zl', nazwa: 'Do 50 zł', od: 0, do: 50 },
  { slug: 'do-100-zl', nazwa: 'Do 100 zł', od: 0, do: 100 },
  { slug: 'do-200-zl', nazwa: 'Do 200 zł', od: 0, do: 200 },
];

// Catalogue link labels for people ("Dla przyjaciółki"), quiz uses the short form ("Przyjaciółka").
export const osobyKatalog: Record<string, string> = {
  'dla-niej': 'Dla niej',
  'dla-niego': 'Dla niego',
  'dla-przyjaciolki': 'Dla przyjaciółki',
  'dla-przyjaciela': 'Dla przyjaciela',
};

export const pytania = [
  { klucz: 'okazja', pytanie: 'Na jaką okazję?', opcje: okazje },
  { klucz: 'osoba', pytanie: 'Dla kogo?', opcje: osoby },
  { klucz: 'budzet', pytanie: 'Ile chcesz wydać?', opcje: budzety },
];

/** Quiz answers → static list URL, skipping "Inna …" (empty slug). */
export function sciezkaListy(slugi: string[]): string {
  return '/' + slugi.filter(Boolean).map((s) => s + '/').join('');
}
