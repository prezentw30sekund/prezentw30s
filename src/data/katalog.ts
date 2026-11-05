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

// Statements each partner programme requires once per page in a visible place (Allegro regulamin § 11, Amazon umowa pkt 5);
// shown in the footer, while product blocks carry only the short affiliate note (UOKiK).
export const oswiadczenia: Record<string, string> = {
  Allegro: 'Uczestniczymy w Programie Allegro Affiliate Business organizowanym przez Allegro sp. z o.o. i otrzymujemy lub możemy otrzymać wynagrodzenie za zakupy, których dokonasz na allegro.pl za naszym pośrednictwem.',
  Amazon: 'Jako Partner Amazon zarabiamy na kwalifikujących się zakupach.',
};

export const zl = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 });

/** A product fits a budget by its verified price, or by the band the editor picked while the price is not filled in yet. */
export function wBudzecie(p: { cena?: number; przedzial: string }, b: { od: number; do: number }) {
  const cena = p.cena ?? budzety.find((x) => x.slug === p.przedzial)!.do;
  return cena > b.od && cena <= b.do;
}

// Amazon Associates does not allow static prices that were not fetched from its API, so Amazon cards show none (PRE-22).
export const cenaNaKarcie = (p: { cena?: number; sklep: string }) => (p.cena && p.sklep !== 'Amazon' ? zl.format(p.cena) : undefined);

// Catalogue link labels for people; the quiz uses `osoby[].nazwa`.
export const osobyKatalog: Record<string, string> = {
  'dla-niej': 'Dla niej',
  'dla-niego': 'Dla niego',
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
