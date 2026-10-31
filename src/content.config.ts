import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { okazje, osoby, budzety } from './data/katalog';

const slugi = (opcje: { slug: string }[]) => z.enum(opcje.map((o) => o.slug) as [string, ...string[]]);

// One Markdown file = one list page /okazja/osoba/; the body is the intro.
const listy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/listy' }),
  schema: z.object({
    okazja: slugi(okazje),
    osoba: slugi(osoby),
    tytul: z.string(), // <title>
    opis: z.string(), // meta description
    h1: z.string(),
    autor: z.string(),
    aktualizacja: z.string(),
    // Draft pages build (for the Vercel preview) but carry noindex.
    szkic: z.boolean().default(false),
    // Budget sub-lists /okazja/osoba/<budzet>/ built for this list (pilot: do-100-zl).
    podstronyBudzetu: z.array(slugi(budzety)).default([]),
    // shortcut: products inline per list, move to a shared product collection in PRE-17.
    produkty: z
      .array(
        z.object({
          nazwa: z.string(),
          sklep: z.string(),
          cena: z.number().positive(), // zł, drives the price slider and budget sub-lists
          sprawdzono: z.string(),
          pasuje: z.string(),
          goSlug: z.string(),
          zdjecie: z.object({ src: z.url(), alt: z.string() }).optional(),
        }),
      )
      .min(1)
      .max(12),
    faq: z.array(z.object({ pytanie: z.string(), odpowiedz: z.string() })).default([]),
  }),
});

export const collections = { listy };
