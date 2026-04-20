import PlaceCard from "./PlaceCard";
import { MapPinIcon, LinkIcon } from "./Icons";

type LinkItem = { label: string; href: string };
type Stop = React.ComponentProps<typeof PlaceCard>["stop"];

export type Block = {
  time: string;
  title: string;
  icon?: string;
  body?: string;
  bullets?: string[];
  stops?: Stop[];
  pairs?: Stop[];
  links?: LinkItem[];
  note?: string;
  image?: string;
};

export default function TimelineBlock({ block, dotted = false }: { block: Block; dotted?: boolean }) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-6 relative">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-terracotta text-cream flex items-center justify-center shadow-card">
          <span className="text-lg sm:text-xl">{block.icon ?? "◆"}</span>
        </div>
        {dotted && (
          <div className="w-px flex-1 my-2 bg-gradient-to-b from-terracotta/40 via-ink/10 to-transparent" />
        )}
      </div>
      <div className="pb-10 sm:pb-14">
        <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-terracotta">{block.time}</span>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-1 min-w-0">
            <h3 className="display text-2xl sm:text-3xl mt-1 text-ink leading-tight">{block.title}</h3>
            {block.body && <p className="mt-3 text-ink/80 leading-relaxed">{block.body}</p>}
          </div>
          {block.image && (
            <img
              src={block.image}
              alt={block.title}
              loading="lazy"
              className="shrink-0 w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-sm ring-1 ring-ink/10 mt-1"
            />
          )}
        </div>

        {block.bullets && (
          <ul className="mt-4 space-y-2">
            {block.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-ink/80 leading-relaxed">
                <span aria-hidden className="mt-2 w-1.5 h-1.5 rounded-full bg-teal/70 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {block.links && (
          <div className="mt-4 flex flex-wrap gap-4">
            {block.links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow"
              >
                <LinkIcon className="w-4 h-4" />
                {l.label}
              </a>
            ))}
          </div>
        )}

        {block.stops && (
          <div className="mt-5">
            {block.stops.map((s, i) => (
              <PlaceCard key={i} stop={s} index={i} />
            ))}
          </div>
        )}

        {block.pairs && (
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            {block.pairs.map((p, i) => (
              <div key={i} className="bg-parchment/60 border border-ink/10 rounded-sm overflow-hidden flex flex-col">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-32 object-cover"
                  />
                )}
                <div className="p-4">
                  <h4 className="display text-xl">{p.title}</h4>
                  {p.desc && <p className="text-ink/75 mt-1 leading-relaxed">{p.desc}</p>}
                  {p.maps && (
                    <a
                      href={p.maps}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow"
                    >
                      <MapPinIcon className="w-4 h-4" />
                      Apri in Maps
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {block.note && (
          <p className="mt-4 border-l-2 border-gold pl-4 italic text-ink/70">{block.note}</p>
        )}
      </div>
    </article>
  );
}
