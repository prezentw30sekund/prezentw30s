import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { okazje, osoby, budzety } from './data/katalog';

const slugi = (opcje: { slug: string }[]) => z.enum(opcje.map((o) => o.slug) as [string, ...string[]]);

const produkt = z.object({
  nazwa: z.string(),
  sklep: z.string(),
  cena: z.number().positive(), // zł, drives the price slider and budget sub-lists
  sprawdzono: z.string(),
  pasuje: z.string(),
  goSlug: z.string(),
  zdjecie: z.object({ src: z.url(), alt: z.string() }).optional(),
});

// One Markdown file = one list page /okazja/osoba/; the body is the intro.
const listy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/listy' }),
  schema: z.object({
    okazja: slugi(okazje),
    osoba: slugi(osoby),
    tytul: z.string(), // start of <title>; the template adds the count, year and site name
    opis: z.string(), // meta description
    h1: z.string(),
    autor: z.string(),
    aktualizacja: z.coerce.date(), // RRRR-MM-DD, also gives the year in <title>
    // Draft pages build (for the Vercel preview) but carry noindex.
    szkic: z.boolean().default(false),
    // Budget sub-lists /okazja/osoba/<budzet>/ built for this list (pilot: do-100-zl).
    podstronyBudzetu: z.array(slugi(budzety)).default([]),
    // shortcut: products inline per list, move to a shared product collection in PRE-17.
    produkty: z.array(produkt).min(1).max(12),
    // Block for late shoppers: the order deadline and gifts that arrive at once (e-vouchers).
    ostatniaChwila: z.object({ termin: z.string(), produkty: z.array(produkt).default([]) }).optional(),
    faq: z.array(z.object({ pytanie: z.string(), odpowiedz: z.string() })).default([]),
  }),
});

export const collections = { listy };
