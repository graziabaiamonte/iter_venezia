import { MapPinIcon, LinkIcon } from "./Icons";

type Stop = {
  title: string;
  desc?: string;
  maps?: string;
  official?: string;
  free?: boolean;
  paid?: boolean;
  image?: string;
};

export default function PlaceCard({ stop, index }: { stop: Stop; index?: number }) {
  return (
    <div className="group relative flex gap-4 border-l border-ink/15 pl-5 pb-6">
      {typeof index === "number" && (
        <span
          aria-hidden
          className="absolute -left-[11px] top-1 block h-5 w-5 rounded-full bg-cream ring-1 ring-ink/25 font-mono text-[10px] leading-5 text-ink/60 text-center"
        >
          {index + 1}
        </span>
      )}
      <div className="flex-1 flex gap-4 items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
            <h4 className="display text-xl sm:text-2xl text-ink">{stop.title}</h4>
            {stop.free && (
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-teal px-2 py-0.5 ring-1 ring-teal/40 rounded-full">
                Gratis
              </span>
            )}
            {stop.paid && (
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-terracotta px-2 py-0.5 ring-1 ring-terracotta/40 rounded-full">
                A pagamento
              </span>
            )}
          </div>
          {stop.desc && <p className="mt-1.5 text-ink/75 leading-relaxed">{stop.desc}</p>}
          {(stop.maps || stop.official) && (
            <div className="mt-3 flex flex-wrap gap-3">
              {stop.maps && (
                <a
                  href={stop.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow"
                >
                  <MapPinIcon className="w-4 h-4" />
                  Apri in Maps
                </a>
              )}
              {stop.official && (
                <a
                  href={stop.official}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-teal font-medium link-grow"
                >
                  <LinkIcon className="w-4 h-4" />
                  Sito ufficiale
                </a>
              )}
            </div>
          )}
        </div>
        {stop.image && (
          <a
            href={stop.maps || stop.official || "#"}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 block w-24 h-24 sm:w-28 sm:h-28 bg-parchment overflow-hidden rounded-sm ring-1 ring-ink/10 hover:ring-terracotta transition"
            aria-label={`Foto di ${stop.title}`}
          >
            <img
              src={stop.image}
              alt={stop.title}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </a>
        )}
      </div>
    </div>
  );
}
