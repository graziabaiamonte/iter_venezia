import {
  TRIP, HOTEL, FLIGHTS,
  AIRPORT_PMO_STEPS, ARRIVAL,
  DAY1, DAY2, DAY3,
  RESTAURANTS,
} from "@/lib/data";
import DayNav from "@/components/DayNav";
import TimelineBlock from "@/components/TimelineBlock";
import PlaceCard from "@/components/PlaceCard";
import { MapPinIcon, LinkIcon, PlaneIcon, CompassIcon } from "@/components/Icons";

export default function Page() {
  return (
    <main className="relative z-[2]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* decorative background */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-terracotta/15 blur-3xl" />
          <div className="absolute top-32 -left-32 w-[480px] h-[480px] rounded-full bg-teal/12 blur-3xl" />
          <svg
            viewBox="0 0 600 600"
            aria-hidden
            className="absolute right-[-120px] bottom-[-80px] w-[380px] sm:w-[520px] opacity-[0.11] text-ink"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              {Array.from({ length: 20 }).map((_, i) => (
                <circle key={i} cx="300" cy="300" r={30 + i * 14} />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-14 sm:pb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink/60 rise">
            <span className="w-10 rule" />
            Itinerario personale
            <span className="w-10 rule" />
          </div>

          <h1 className="display text-[22vw] sm:text-[180px] leading-[0.85] mt-6 text-ink rise" style={{ animationDelay: "0.08s" }}>
            Ve<span className="display-italic text-terracotta">n</span>ezia
          </h1>

          <p className="mt-4 display-italic text-2xl sm:text-4xl text-ink/80 rise" style={{ animationDelay: "0.18s" }}>
            {TRIP.subtitle}, {TRIP.dates.toLowerCase()}
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 rise" style={{ animationDelay: "0.3s" }}>
            {/* Flight out */}
            <FlightCard flight={FLIGHTS.out} />
            {/* Flight back */}
            <FlightCard flight={FLIGHTS.back} />
            {/* Hotel */}
            <div className="p-5 bg-teal/5 border border-teal/20 rounded-sm">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-teal">
                <MapPinIcon className="w-3.5 h-3.5" /> Alloggio
              </div>
              <div className="display text-2xl mt-2 text-ink">{HOTEL.name}</div>
              <div className="text-sm text-ink/70 mt-1">{HOTEL.address}</div>
              <a
                href={HOTEL.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow"
              >
                <MapPinIcon className="w-4 h-4" /> Apri in Maps
              </a>
            </div>
          </div>

          <p className="mt-10 text-ink/70 italic max-w-xl">
            {TRIP.flyer} — tutto scritto passo dopo passo, dal gate di Palermo al rientro. Respira.
          </p>
        </div>
      </section>

      <DayNav />

      {/* TRANSFER (pre-giorno-1): Aeroporto Palermo + arrivo */}
      <SectionShell id="partenza" eyebrow="Prima tappa" title="Aeroporto di Palermo" italicized="guida passo-passo">
        <p className="text-ink/80 leading-relaxed max-w-2xl mb-8">
          Otto passi dentro l&apos;aeroporto di Palermo, dal tabellone partenze al decollo. È la prima volta — sono tutti gesti semplici, ma elencati uno per uno così non dimentichi niente.
        </p>

        <ol className="grid sm:grid-cols-2 gap-4">
          {AIRPORT_PMO_STEPS.map((s, i) => (
            <li key={i} className="relative bg-parchment/60 border border-ink/10 rounded-sm p-5">
              <span className="absolute -top-3 left-5 font-mono text-[11px] tracking-widest px-2 py-0.5 bg-cream text-terracotta border border-ink/10">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="display text-xl sm:text-2xl mt-2 text-ink">{s.title}</h3>
              <p className="mt-2 text-ink/75 leading-relaxed text-[15px]">{s.text}</p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell
        id="arrivo-marcopolo"
        eyebrow={`Atterraggio · ${ARRIVAL.landing}`}
        title="Marco Polo"
        italicized="come si esce"
      >
        <div className="grid lg:grid-cols-[1fr_auto_1.1fr] gap-10 items-start">
          <div>
            <p className="text-ink/80 leading-relaxed">{ARRIVAL.airport}</p>
            <a
              href={ARRIVAL.airportSite}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow"
            >
              <LinkIcon className="w-4 h-4" /> Sito aeroporto
            </a>
            <h3 className="display text-2xl mt-8 text-ink">Dall&apos;aereo al bus</h3>
            <ol className="mt-4 space-y-3">
              {ARRIVAL.disembark.map((d, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/80 leading-relaxed">{d}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="hidden lg:block w-px bg-ink/10 self-stretch" />

          <div className="bg-cream border border-ink/10 rounded-sm p-6 shadow-card">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta">
              <CompassIcon className="w-3.5 h-3.5" /> Trasferimento
            </div>
            <h3 className="display text-3xl mt-2 text-ink">{ARRIVAL.bus.name}</h3>
            <p className="text-sm text-ink/70 mt-1">{ARRIVAL.bus.line}</p>
            <dl className="mt-5 space-y-3 text-[15px]">
              <Row k="Durata" v={ARRIVAL.bus.duration} />
              <Row k="Frequenza" v={ARRIVAL.bus.frequency} />
              <Row k="Fermata" v={ARRIVAL.bus.stop} />
            </dl>
            <p className="mt-5 border-l-2 border-terracotta pl-4 text-ink/80 italic text-[15px]">
              {ARRIVAL.bus.buyOnline}
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-[1fr_auto] gap-6 items-end border-t border-ink/10 pt-8">
          <div>
            <h3 className="display text-2xl text-ink">Dalla stazione di Mestre all&apos;hotel</h3>
            <p className="text-ink/75 mt-1">Circa 800 metri, 10 minuti a piedi.</p>
            <ol className="mt-5 space-y-2">
              {ARRIVAL.hotelWalk.map((d, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs text-terracotta mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/80">{d}</span>
                </li>
              ))}
            </ol>
          </div>
          <a
            href={ARRIVAL.hotelWalkMaps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-cream rounded-full font-medium hover:bg-terracotta transition-colors self-start"
          >
            <MapPinIcon className="w-4 h-4" /> Apri percorso
          </a>
        </div>

        <p className="mt-10 border-l-2 border-gold pl-4 italic text-ink/70 max-w-2xl">
          ⏰ {ARRIVAL.timeline}
        </p>
      </SectionShell>

      {/* GIORNO 1 */}
      <DayCover
        id={DAY1.id}
        num="24"
        weekday={DAY1.weekday}
        tag={DAY1.tag}
        label={DAY1.label}
      />

      <SectionShell>

        {DAY1.sections.map((s, i) => (
          <TimelineBlock
            key={i}
            dotted={i < DAY1.sections.length - 1}
            block={{ time: s.time, title: s.title, icon: s.icon, body: s.text }}
          />
        ))}

        <div className="mt-4 bg-parchment/70 border border-ink/10 rounded-sm p-6 sm:p-8">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-terracotta">
            {DAY1.walk.title}
          </div>
          <h3 className="display text-3xl sm:text-4xl mt-2 text-ink">Il centro di Mestre, a piedi</h3>
          <p className="text-ink/75 mt-2">{DAY1.walk.intro}</p>
          <div className="mt-8">
            {DAY1.walk.stops.map((s, i) => (
              <PlaceCard key={i} stop={s} index={i} />
            ))}
          </div>
        </div>

        <p className="mt-12 display-italic text-2xl text-ink/70 text-center">{DAY1.closing}</p>
      </SectionShell>

      {/* GIORNO 2 */}
      <DayCover
        id={DAY2.id}
        num="25"
        weekday={DAY2.weekday}
        tag={DAY2.tag}
        label={DAY2.label}
        accent="teal"
      />

      <SectionShell>
    
        <div>
          {DAY2.blocks.map((b, i) => (
            <TimelineBlock key={i} block={b} dotted={i < DAY2.blocks.length - 1} />
          ))}
        </div>
      </SectionShell>

      {/* GIORNO 3 */}
      <DayCover
        id={DAY3.id}
        num="26"
        weekday={DAY3.weekday}
        tag={DAY3.tag}
        label={DAY3.label}
      />

      <SectionShell>
        <div>
          {DAY3.blocks.map((b, i) => (
            <TimelineBlock key={i} block={b} dotted={i < DAY3.blocks.length - 1} />
          ))}
        </div>
      </SectionShell>

      {/* RISTORANTI */}
      <SectionShell
        id="ristoranti"
        eyebrow="Dove mangiare"
        title="Ristoranti"
        italicized="economici ma buoni"
      >
        <h3 className="display text-2xl text-ink">A Venezia — cena del 25 Aprile</h3>
        <p className="text-ink/70 mt-1 mb-8">Trattorie e pizzerie sedute, €18–25 a persona.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {RESTAURANTS.venice.map((r, i) => (
            <div key={i} className="bg-cream border border-ink/10 rounded-sm p-5 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h4 className="display text-xl sm:text-2xl text-ink">{r.name}</h4>
                <span className="font-mono text-[11px] text-terracotta shrink-0 mt-1">{r.price}</span>
              </div>
              <p className="text-sm text-muted mt-1">{r.zone}</p>
              <p className="text-ink/80 mt-2 text-[15px] leading-relaxed flex-1">{r.note}</p>
              <div className="mt-4 flex flex-wrap gap-4 pt-3 border-t border-ink/10">
                {r.menu && (
                  <a href={r.menu} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow">
                    <LinkIcon className="w-4 h-4" /> Menu / sito
                  </a>
                )}
                {r.maps && (
                  <a href={r.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow">
                    <MapPinIcon className="w-4 h-4" /> Maps
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>


        <div className="mt-14">
          <h3 className="display text-2xl text-ink">A Mestre — di riserva</h3>
          <p className="text-ink/70 mt-1 mb-6">Non previsti nel piano, ma se cambi idea.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {RESTAURANTS.mestre.map((r, i) => (
              <div key={i} className="border border-ink/10 p-4 rounded-sm">
                <div className="flex justify-between items-baseline">
                  <h4 className="display text-lg text-ink">{r.name}</h4>
                  <span className="font-mono text-[11px] text-terracotta">{r.price}</span>
                </div>
                <p className="text-sm text-muted">{r.zone} · {r.note}</p>
                {r.maps && (
                  <a href={r.maps} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow">
                    <MapPinIcon className="w-4 h-4" /> Maps
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-ink/10 bg-parchment/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PlaneIcon className="w-5 h-5 text-terracotta" />
            <span className="display-italic text-xl text-ink">Buon viaggio</span>
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/50">
            24 — 26 Aprile 2026 · Palermo ↔ Venezia
          </div>
        </div>
      </footer>
    </main>
  );
}

// ────────────────────── HELPERS ──────────────────────

function SectionShell({
  id,
  eyebrow,
  title,
  italicized,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  italicized?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {(title || eyebrow) && (
        <header className="mb-12 sm:mb-16">
          {eyebrow && (
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-terracotta">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="display text-5xl sm:text-7xl mt-3 text-ink leading-none">
              {title}{" "}
              {italicized && <span className="display-italic text-teal">{italicized}</span>}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

function DayCover({
  id,
  num,
  weekday,
  tag,
  label,
  accent = "terracotta",
}: {
  id: string;
  num: string;
  weekday: string;
  tag: string;
  label: string;
  accent?: "terracotta" | "teal";
}) {
  const isTeal = accent === "teal";
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-y border-ink/10 ${
        isTeal ? "bg-teal text-cream" : "bg-ink text-cream"
      }`}
    >
      <div aria-hidden className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 600 200" className="w-full h-full">
          <g fill="none" stroke="currentColor" strokeWidth="0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <line key={i} x1={i * 30} y1="0" x2={i * 30 + 60} y2="200" />
            ))}
          </g>
        </svg>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-12">
        <div className="display text-[30vw] sm:text-[220px] leading-[0.82] text-cream">
          {num}
        </div>
        <div className="sm:pb-8">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase opacity-60">
            Giorno {label.split(" ")[0]} · {weekday}
          </div>
          <div
            id={`${id}-heading`}
            data-day-heading={id}
            className={`display-italic text-3xl sm:text-5xl mt-2 ${isTeal ? "text-gold" : "text-terracotta"}`}
          >
            {tag}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlightCard({ flight }: { flight: typeof FLIGHTS.out }) {
  return (
    <div className="p-5 bg-cream border border-ink/10 rounded-sm">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-terracotta">
        <span className="flex items-center gap-1.5"><PlaneIcon className="w-3.5 h-3.5" /> {flight.label}</span>
        <span>{flight.carrier}</span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div>
          <div className="display text-3xl leading-none">{flight.dep}</div>
          <div className="text-xs text-ink/60 mt-1">{flight.from}</div>
        </div>
        <div className="flex-1 rule" />
        <div className="text-right">
          <div className="display text-3xl leading-none">{flight.arr}</div>
          <div className="text-xs text-ink/60 mt-1">{flight.to}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-ink/70">{flight.date}</div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-4">
      <dt className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/50 pt-1 w-20 shrink-0">{k}</dt>
      <dd className="text-ink/85 flex-1">{v}</dd>
    </div>
  );
}
