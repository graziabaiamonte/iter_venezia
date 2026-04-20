# iter_venezia

Landing page personale per il viaggio a Venezia — 24/26 Aprile 2026.

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri http://localhost:3000

## Deploy su Vercel

Il progetto è preconfigurato per Vercel. Importa il repository su https://vercel.com e clicca "Deploy" — nessuna configurazione richiesta, Vercel rileva Next.js in automatico.

## Modificare il contenuto

Tutto il testo dell'itinerario è in `lib/data.ts`. Modifica orari, descrizioni e link lì — la pagina si aggiorna automaticamente.

## Struttura

- `app/` — pagina, layout, stili globali
- `components/` — componenti (DayNav, TimelineBlock, PlaceCard, Icons)
- `lib/data.ts` — dati dell'itinerario
- `tailwind.config.ts` — palette colori e tipografia
