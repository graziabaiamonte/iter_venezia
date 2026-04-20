// ─────────────────────────────────────────────
// TUTTO IL CONTENUTO DELL'ITINERARIO È QUI.
// Modifica testi, link o orari e la pagina si aggiorna.
// ─────────────────────────────────────────────

export const TRIP = {
  title: "Venezia",
  subtitle: "3 giorni",
  dates: "24 → 26 Aprile 2026",
  flyer: "Prima volta in aereo ✈",
};

export const HOTEL = {
  name: "Hotel Venezia",
  address: "Via Teatro Vecchio 5, 30171 Mestre",
  maps: "https://www.google.com/maps/search/?api=1&query=Hotel+Venezia+Via+Teatro+Vecchio+5+Mestre",
};

export const FLIGHTS = {
  out: {
    label: "Andata",
    date: "Ven 24 Aprile",
    from: "Palermo (PMO)",
    to: "Venezia Marco Polo (VCE)",
    dep: "18:00",
    arr: "19:35",
    carrier: "Ryanair",
  },
  back: {
    label: "Ritorno",
    date: "Dom 26 Aprile",
    from: "Venezia Marco Polo (VCE)",
    to: "Palermo (PMO)",
    dep: "20:00",
    arr: "~21:35",
    carrier: "Ryanair",
  },
};

// ─────────────── AEROPORTO PALERMO ───────────────
export const AIRPORT_PMO_STEPS = [
  {
    title: "Tabellone 'Partenze'",
    text: "Cerca il tuo volo Ryanair per Venezia usando il codice volo sulla carta d'imbarco.",
  },
  {
    title: "Controlli di sicurezza",
    text: "Segui le indicazioni 'Security / Controlli'. Prepara in anticipo: togli giacca, cintura metallica, tira fuori il telefono e mettili nella vaschetta. Liquidi: max 100 ml ciascuno, in bustina trasparente richiudibile (max 1L totale). Passi sotto il metal detector.",
  },
  {
    title: "Zona sterile",
    text: "Dopo i controlli sei in 'zona sterile' (area imbarchi). Qui ci sono bar, negozi e bagni. Respira.",
  },
  {
    title: "Trova il tuo gate",
    text: "Torna a guardare i tabelloni e cerca il numero del GATE (es. 'Gate 14'). Il gate viene indicato 40–60 minuti prima del volo, non subito.",
  },
  {
    title: "Al gate 30–45 min prima",
    text: "L'imbarco chiude 20 minuti prima del decollo.",
  },
  {
    title: "All'imbarco",
    text: "Mostri la carta d'imbarco sul telefono e la carta d'identità. Ti scannerizzano il QR. Poi cammini fino all'aereo, a piedi sulla pista o con finger di collegamento.",
  },
  {
    title: "Sull'aereo",
    text: "Cerchi il tuo posto. Lo zaino va SOTTO il sedile davanti a te. Ti siedi, allacci la cintura, telefono in modalità aereo.",
  },
];

// ─────────────── ARRIVO MARCO POLO ───────────────
export const ARRIVAL = {
  landing: "19:35",
  airport: "Venezia Marco Polo (VCE) — Tessera, 12 km da Mestre",
  airportSite: "https://www.veneziaairport.it/",
  disembark: [
    "Scendi dall'aereo seguendo la fila",
    "Segui le indicazioni 'USCITA / EXIT' / 'ARRIVI'",
    "Segui le indicazioni 'BUS' verso la stazione degli autobus (a sinistra, una volta usciti)",
  ],
  bus: {
    name: "ATVO AeroBus Express",
    line: "Marco Polo Aeroporto → Venezia Mestre Stazione FS",
    duration: "~20 minuti, diretto",
    price: "€10 singolo · €18 andata/ritorno (valido 7 giorni)",
    frequency: "Ogni 30 min, dalle 08:20 alle 00:20",
    stop: "Mestre Stazione FS — piazzale davanti alla stazione",
    buyOnline:
      "Acquisto online in anticipo sul sito ATVO. QR code via email da mostrare al conducente.",
    url: "https://www.atvo.it/",
  },
  hotelWalk: [
    "Esci dalla stazione di Mestre dal lato anteriore",
    "Prendi Via Cappuccina / Via Piave verso est (segui Google Maps)",
    "Attraversi Piazzale Cialdini e arrivi in zona Piazza Ferretto",
    "Via Teatro Vecchio è una traversa laterale, molto vicina al centro pedonale",
  ],
  hotelWalkMaps:
    "https://www.google.com/maps/dir/?api=1&origin=Mestre+Stazione+FS&destination=Via+Teatro+Vecchio+5+Mestre&travelmode=walking",
  timeline:
    "Atterraggio 19:35 → fuori aeroporto 19:55 → bus ATVO 20:00 → Mestre 20:20 → hotel 20:50 → camera 21:15.",
};

// ─────────────── GIORNO 1 ───────────────
export const DAY1 = {
  id: "giorno-1",
  label: "24 Aprile",
  weekday: "Venerdì",
  tag: "Arrivo · sera a Mestre",
  intro:
    "Dopo il check-in, serata libera. Cena con panini da casa e breve passeggiata nel centro di Mestre per prendere confidenza con la zona.",
  sections: [
    {
      time: "21:30",
      title: "Cena",
      icon: "🥪",
      text: "Panini portati da casa — in camera o su una panchina in Piazza Ferretto.",
    },
  ],
  walk: {
    title: "Passeggiata serale (1–1,5h) dall'hotel",
    intro:
      "Mestre non ha grandi monumenti ma il suo centro storico è grazioso, pedonale e sicuro.",
    stops: [
      {
        title: "Piazza Ferretto",
        desc: "Cuore pulsante di Mestre, pedonale, vivace la sera.",
        maps: "https://www.google.com/maps/search/?api=1&query=Piazza+Ferretto+Mestre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Piazza_ferretto_a_mestre.jpg/330px-Piazza_ferretto_a_mestre.jpg",
      },
      {
        title: "Torre dell'Orologio",
        desc: "Sul lato ovest della piazza, resto di un'antica porta medievale.",
        maps: "https://www.google.com/maps/search/?api=1&query=Torre+dell%27Orologio+Mestre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mestre-Tour_de_l%27horloge.jpg/330px-Mestre-Tour_de_l%27horloge.jpg",
      },
      {
        title: "Duomo di San Lorenzo",
        desc: "Accanto alla piazza, esterno visibile sempre.",
        maps: "https://www.google.com/maps/search/?api=1&query=Duomo+San+Lorenzo+Mestre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Duomo_di_San_Lorenzo_-_Mestre.jpg/330px-Duomo_di_San_Lorenzo_-_Mestre.jpg",
      },
      {
        title: "Via Palazzo · Galleria Matteotti",
        desc: "Vie pedonali per una passeggiata tra vetrine.",
        maps: "https://www.google.com/maps/search/?api=1&query=Via+Palazzo+Mestre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/%28Mestre%29_Galleria_Matteotti_vista_della_Piazzetta_Gian_Francesco_Malipiero.jpg/330px-%28Mestre%29_Galleria_Matteotti_vista_della_Piazzetta_Gian_Francesco_Malipiero.jpg",
      },
      {
        title: "Piazzetta Coin",
        desc: "Piccola piazza con fontane moderne.",
        maps: "https://www.google.com/maps/search/?api=1&query=Piazzetta+Coin+Mestre",
      },
    ],
  },
  closing: "A letto entro le 23:00 — domani sveglia presto. 🌙",
};

// ─────────────── GIORNO 2 ───────────────
export const DAY2 = {
  id: "giorno-2",
  label: "25 Aprile",
  weekday: "Sabato",
  tag: "Venezia + Murano",
  intro:
    "Giornata tutta a piedi, a parte la traversata obbligatoria per Murano (non ci sono ponti). Mattina centro storico, primo pomeriggio Dorsoduro sud + pranzo alle Zattere, pomeriggio Murano, rientro a San Marco per il tramonto, poi cena e Mestre.",
  blocks: [
    {
      time: "07:00",
      title: "Sveglia e colazione in hotel",
      icon: "☕",
      body: "Mangia bene, il pranzo sarà al sacco. Prendi un frutto/brioche in più se possibile.",
    },
    {
      time: "08:00",
      title: "Treno Mestre → Venezia Santa Lucia",
      icon: "🚆",
      body: "Consigliato rispetto al bus.",
      bullets: [
        "Durata: 10–12 minuti",
        "Costo: €1,45 (regionale)",
        "Frequenza: ogni 5–10 minuti",
        "Biglietteria automatica in stazione (accetta carte) o app Trenitalia",
        "⚠ Convalida il biglietto alla macchinetta verde prima di salire — altrimenti multa €50+",
      ],
      links: [
        { label: "Orari Trenitalia", href: "https://www.trenitalia.com/" },
      ],
    },
    {
      time: "08:30 — 12:30",
      title: "Itinerario mattutino — tutto a piedi",
      icon: "🚶‍♀️",
      body: "Esci da Santa Lucia, subito vedi il Canal Grande. Percorso:",
      stops: [
        {
          title: "Ponte degli Scalzi",
          desc: "Subito fuori dalla stazione — attraversalo per ammirare il Canal Grande.",
          maps: "https://www.google.com/maps/search/?api=1&query=Ponte+degli+Scalzi+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Ponte_degli_Scalzi_20050525-030.jpg/330px-Ponte_degli_Scalzi_20050525-030.jpg",
        },
        {
          title: "Strada Nova",
          desc: "Via principale di Cannaregio, piena di negozi e bacari. Cammina verso est.",
          maps: "https://www.google.com/maps/search/?api=1&query=Strada+Nuova+Venezia",
          free: true,
        },
        {
          title: "Ca' d'Oro (esterno)",
          desc: "Palazzo gotico sul Canal Grande. Vista migliore dall'altro lato (fermata Mercato di Rialto).",
          maps: "https://www.google.com/maps/search/?api=1&query=Ca%27+d%27Oro+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ca%27_d%27Oro_facciata.jpg/330px-Ca%27_d%27Oro_facciata.jpg",
        },
        {
          title: "Mercato di Rialto",
          desc: "Mercato del pesce e della frutta, vivissimo di mattina (chiude verso mezzogiorno). Esperienza autentica.",
          maps: "https://www.google.com/maps/search/?api=1&query=Mercato+Rialto+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Venezia_il_mercato_del_pesce_Markt_von_Rialto_by_Denis_Apel_1.JPG/330px-Venezia_il_mercato_del_pesce_Markt_von_Rialto_by_Denis_Apel_1.JPG",
        },
        {
          title: "Ponte di Rialto",
          desc: "Il ponte più famoso di Venezia.",
          maps: "https://www.google.com/maps/search/?api=1&query=Ponte+di+Rialto",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rialto_Bridge_at_night2.jpg/330px-Rialto_Bridge_at_night2.jpg",
        },
        {
          title: "Calli verso San Marco",
          desc: "Segui i cartelli 'Per San Marco'. Calli strette, piazzette, ponti — il bello di Venezia.",
          free: true,
        },
        {
          title: "Piazza San Marco",
          desc: "La piazza più famosa al mondo. Ammira Campanile, Torre dell'Orologio, Procuratie.",
          maps: "https://www.google.com/maps/search/?api=1&query=Piazza+San+Marco+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Piazza_San_Marco_%28Venice%29_at_night-msu-2021-6449-.jpg/330px-Piazza_San_Marco_%28Venice%29_at_night-msu-2021-6449-.jpg",
        },
        {
          title: "Basilica di San Marco (interno)",
          desc: "Ingresso gratuito ma fila 45–90 min. Per saltare la fila: prenotazione online €3.",
          official: "https://www.basilicasanmarco.it/",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/330px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg",
        },
        {
          title: "Palazzo Ducale — solo esterno",
          desc: "Si vede stupendamente dal lato laguna.",
          maps: "https://www.google.com/maps/search/?api=1&query=Palazzo+Ducale+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/%28Venice%29_Doge%27s_Palace_facing_the_sea.jpg/330px-%28Venice%29_Doge%27s_Palace_facing_the_sea.jpg",
        },
        {
          title: "Ponte dei Sospiri (da fuori)",
          desc: "Vista migliore dal Ponte della Paglia, sulla Riva degli Schiavoni.",
          maps: "https://www.google.com/maps/search/?api=1&query=Ponte+dei+Sospiri",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Antonio_Contin_-_Ponte_dei_sospiri_%28Venice%29.jpg/330px-Antonio_Contin_-_Ponte_dei_sospiri_%28Venice%29.jpg",
        },
      ],
    },
    {
      time: "12:00 — 13:30",
      title: "Dorsoduro sud —  pranzo sulle Zattere",
      icon: "🚶‍♀️",
      body: "Dal Ponte dei Sospiri ritorna in Piazza San Marco e prosegui verso ovest attraverso Campo San Moisè, Calle Larga XXII Marzo, Campo Santo Stefano fino al Ponte dell'Accademia. Attraversalo (a piedi, nessun vaporetto) e sei in Dorsoduro. Costeggi la punta meridionale e tocchi tre dei luoghi più poetici di Venezia prima di sederti a mangiare.",
      stops: [
        {
          title: "Ponte dell'Accademia",
          desc: "Attraversamento pedonale del Canal Grande verso Dorsoduro, vista spettacolare verso la Salute.",
          maps: "https://www.google.com/maps/search/?api=1&query=Ponte+dell%27Accademia+Venezia",
          free: true,
        },
        {
          title: "Santa Maria della Salute",
          desc: "Basilica seicentesca sul Canal Grande. Esterno gratuito, interno a offerta libera. 10 minuti a piedi dall'Accademia attraverso Campo San Vio.",
          maps: "https://www.google.com/maps/search/?api=1&query=Santa+Maria+della+Salute",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Santa_Maria_della_Salute_from_Hotel_Monaco.jpg/330px-Santa_Maria_della_Salute_from_Hotel_Monaco.jpg",
        },
        {
          title: "Punta della Dogana",
          desc: "2 minuti a piedi dalla Salute. L'estremità di Dorsoduro dove Canal Grande e Giudecca si incontrano. Vista panoramica stupenda.",
          maps: "https://www.google.com/maps/search/?api=1&query=Punta+della+Dogana+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Venezia-punta_della_dogana.jpg/330px-Venezia-punta_della_dogana.jpg",
        },
        {
          title: "Zattere (pranzo al sacco)",
          desc: "Lungofiume con vista sulla Giudecca, panchine, luce bellissima a metà giornata. Qui ti fermi e mangi i panini.",
          maps: "https://www.google.com/maps/search/?api=1&query=Zattere+Venezia",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Pontile_Zattere_%28Venezia%29.jpg/330px-Pontile_Zattere_%28Venezia%29.jpg",
        },
      ],
    },
    {
      time: "13:30 — 14:00",
      title: "A piedi fino a Fondamenta Nuove",
      icon: "🚶‍♀️",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fondamenta_Nuove%2C_Venezia_-_panoramio.jpg/330px-Fondamenta_Nuove%2C_Venezia_-_panoramio.jpg",
      body: "Dalle Zattere risali verso nord attraverso Dorsoduro fino a Fondamenta Nuove (25–30 minuti a piedi attraverso calli caratteristiche). Lì prendi il vaporetto per Murano.",
      links: [
        { label: "Fondamenta Nuove · Maps", href: "https://www.google.com/maps/search/?api=1&query=Fondamenta+Nove+Venezia" },
      ],
    },
    {
      time: "14:00",
      title: "Vaporetto a Murano (unica tratta in barca)",
      icon: "⛴",
      body: "L'unico modo fisicamente possibile per raggiungere Murano — è un'isola.",
      bullets: [
        "Linea 4.1 o 4.2 da Fondamenta Nuove → Murano (fermata 'Murano Colonna' o 'Murano Faro')",
        "Durata: 10–15 minuti",
        "Costo: €9,50 biglietto singolo (75 min, valido anche per il ritorno se resti entro 75 min — ma resterai di più, quindi serve un secondo biglietto)",
        "Acquisto: distributori ACTV alle fermate, app AVM Venezia Official, chioschi biglietteria",
        "⚠ Valida il biglietto passandolo sul lettore giallo PRIMA di salire",
      ],
      links: [
        { label: "AVM Venezia ufficiale", href: "https://actv.avmspa.it/" },
      ],
    },
    {
      time: "14:00 — 17:00",
      title: "Murano",
      icon: "🔥",
      body: "Isola del vetro soffiato. Gratis, a meno di entrare nei musei.",
      stops: [
        {
          title: "Passeggiata lungo i canali",
          desc: "Più tranquilla di Venezia, case colorate.",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Murano_Aq1.jpg/330px-Murano_Aq1.jpg",
        },
        {
          title: "Fornaci di vetro — dimostrazioni gratuite",
          desc: "Molte botteghe permettono di assistere alla lavorazione del vetro. Gratis, senza obbligo di comprare.",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Glass_Furnace-_Murano_%28Murano_%E2%80%93_Glass_Furnace%29_MET_DP813641.jpg/330px-Glass_Furnace-_Murano_%28Murano_%E2%80%93_Glass_Furnace%29_MET_DP813641.jpg",
        },
        {
          title: "Chiesa dei Santi Maria e Donato",
          desc: "Pavimento a mosaico del 1100, stupenda.",
          maps: "https://www.google.com/maps/search/?api=1&query=Basilica+Santi+Maria+Donato+Murano",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Murano%2C_santi_maria_e_donato_%28duomo%29%2C_esterno%2C_08.jpg/330px-Murano%2C_santi_maria_e_donato_%28duomo%29%2C_esterno%2C_08.jpg",
        },
        {
          title: "Faro di Murano",
          desc: "Esterno gratuito, bel punto panoramico.",
          free: true,
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Faro_%28Murano%29.jpg/330px-Faro_%28Murano%29.jpg",
        },
    
      ],
    },
    {
      time: "17:00",
      title: "Rientro a Venezia (vaporetto)",
      icon: "↩",
      body: "Da Murano linea 4.1 o 4.2 verso Fondamenta Nuove (€9,50). Questa è la seconda e ultima tratta in barca della giornata.",
    },
    {
      time: "17:30 — 19:30",
      title: "Tramonto a piedi fino a San Marco",
      icon: "🌅",
      body: "Da Fondamenta Nuove cammina verso sud attraverso Cannaregio e Castello fino a Piazza San Marco (15–20 min). Le calli sono meno affollate nel pomeriggio, e la luce calda è un bonus. Arrivi in piazza giusto per il tramonto.",
      
    },
    {
      time: "20:00",
      title: "Cena a Venezia",
      icon: "🍝",
      body: "Vedi sezione 'Ristoranti' in fondo alla pagina.",
    },
    {
      time: "22:00",
      title: "Rientro a Mestre",
      icon: "🌙",
      body: "A piedi fino a Santa Lucia, treno regionale per Mestre (€1,45, 10 min). Dall'hotel 10 min a piedi. In camera per le 22:45.",
    },
  ],
};

// ─────────────── GIORNO 3 ───────────────
export const DAY3 = {
  id: "giorno-3",
  label: "26 Aprile",
  weekday: "Domenica",
  tag: "Mestre · rientro",
  intro:
    "Giornata rilassata a Mestre, poi bus per l'aeroporto. Avendo solo zaino, non torni in hotel dopo il checkout.",
  blocks: [
    {
      time: "07:30 — 09:00",
      title: "Colazione e checkout",
      icon: "☕",
      body: "Colazione con calma. Checkout entro le 10:00. Esci direttamente con lo zaino — niente deposito.",
    },
    {
      time: "10:00 — 12:30",
      title: "Parco di San Giuliano",
      icon: "🌳",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Parco_san_giuliano.JPG/330px-Parco_san_giuliano.JPG",
      body: "Uno dei parchi urbani più grandi d'Italia (700 ettari), affacciato sulla laguna con vista su Venezia.",
      bullets: [
        "Bus ACTV 12 o 12L dal centro Mestre fino a 'San Giuliano' (€1,50, 10 min)",
        "A piedi: 25–30 min dall'hotel via Viale San Marco",
        "Percorsi pedonali e ciclabili",
        "Area lagunare con vista su Venezia — punti fotografici spettacolari",
      ],
      links: [
        { label: "Parco San Giuliano · Maps", href: "https://www.google.com/maps/search/?api=1&query=Parco+San+Giuliano+Mestre" },
     
      ],
    },
    {
      time: "12:30 — 14:00",
      title: "Pranzo a Mestre centro",
      icon: "🍕",
      body: "Rientra in centro (bus 12 o a piedi). Opzioni economiche:",
      bullets: [
        "Panino o focaccia in panetteria/bar intorno a Piazza Ferretto — €4-7",
        "Pizza al taglio in Via Palazzo — €5-8",
        "Trattoria tipo 'Menù lavoratori' — primo + bevanda €10-13",
      ],
    },
    {
      time: "14:30 — 16:30",
      title: "Forte Marghera",
      icon: "🏰",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Forte_Marghera%2C_fasado.jpeg/330px-Forte_Marghera%2C_fasado.jpeg",
      body: "Ex fortezza austriaca riconvertita in parco culturale. Ingresso gratuito.",
      bullets: [
        "Bus ACTV 6 o 6L da Mestre Stazione fino a 'Forte Marghera' (€1,50, 10 min)",
        "Camminata sulle mura e sul fossato",
        "Area verde con caselli e depositi storici",
        "Installazioni artistiche temporanee",
      ],
      links: [
        { label: "Forte Marghera · sito", href: "https://www.fortemarghera.it/" },
        { label: "Forte Marghera · Maps", href: "https://www.google.com/maps/search/?api=1&query=Forte+Marghera+Venezia" },
      ],
    },
    {
      time: "16:30 — 17:00",
      title: "Rientro alla stazione di Mestre",
      icon: "🚶‍♀️",
      body: "Bus 6 o a piedi (15 min da Forte Marghera).",
    },
    {
      time: "17:00",
      title: "Bus ATVO per l'aeroporto",
      icon: "🚌",
      body: "Dalla stazione di Mestre: bus ATVO Express per Marco Polo (biglietto su whatsapp). Durata 20 minuti. Arrivo aeroporto 17:25.",
    },
    {
      time: "17:30 — 20:00",
      title: "Aeroporto Marco Polo",
      icon: "✈",
      body: "",
      bullets: [
        "Check-in già fatto online (ricorda di farlo il 25 sera)",
        "Vai direttamente ai controlli sicurezza",
        "Controlla i tabelloni per il gate di partenza",
        "Al gate 40-45 min prima del volo",
        "Imbarco ~19:30, volo 20:00, atterraggio Palermo ~21:35",
      ],
    },
  ],
};

// ─────────────── RISTORANTI ───────────────
export const RESTAURANTS = {
  venice: [
    {
      name: "Trattoria alla Madonna",
      zone: "San Polo · vicino Rialto",
      note: "Storica dal 1954, cucina veneziana, prezzi onesti.",
      price: "€18-25",
      menu: "https://www.ristoranteallamadonna.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Trattoria+alla+Madonna+Venezia",
    },
    {
      name: "Pizzeria da Egidio",
      zone: "Cannaregio",
      note: "Pizza decorosa a prezzi umani.",
      price: "€8-12",
      menu: "https://www.thefork.it/ristorante/pizzeria-trattoria-da-egidio-r68732",
      maps: "https://www.google.com/maps/search/?api=1&query=Pizzeria+da+Egidio+Venezia",
    },
    {
      name: "Osteria al Bacareto",
      zone: "San Marco · dal 1971",
      note: "Familiare, cucina veneta, menu sotto €25.",
      price: "€18-25",
      menu: "https://www.albacareto.com/",
      maps: "https://www.google.com/maps/search/?api=1&query=Al+Bacareto+Venezia",
    },
    {
      name: "Trattoria al Giardinetto da Severino",
      zone: "Castello",
      note: "Giardino interno, pesce fresco.",
      price: "€20-28",
      menu: "https://www.algiardinetto.it/",
      maps: "https://www.google.com/maps/search/?api=1&query=Al+Giardinetto+Severino+Venezia",
    },
  ],


  mestre: [
    {
      name: "Pizzeria Al Vapore",
      zone: "Via Fradeletto",
      note: "Pizza classica.",
      price: "€8-12",
      maps: "https://www.google.com/maps/search/?api=1&query=Pizzeria+Al+Vapore+Mestre",
    },
    {
      name: "Osteria La Pergola",
      zone: "Via Fiume",
      note: "Cucina veneta.",
      price: "€20-28",
      maps: "https://www.google.com/maps/search/?api=1&query=Osteria+La+Pergola+Mestre",
    },
  ],
};

// ─────────────── BUDGET ───────────────
export const BUDGET = [
  { voice: "Bus ATVO Marco Polo ↔ Mestre A/R", cost: "€18", note: "Acquisto online" },
  { voice: "Treno Mestre ↔ Venezia A/R (25 aprile)", cost: "€2,90", note: "€1,45 × 2" },
  { voice: "Vaporetto Venezia ↔ Murano A/R", cost: "€19", note: "€9,50 × 2" },
  { voice: "Bus urbano Mestre (× 3 corse)", cost: "€4,50", note: "Parco + Forte + ritorno" },
  { voice: "Cena Venezia", cost: "€15-25", note: "Una sola cena" },
  { voice: "Pranzi (panini al sacco)", cost: "€0", note: "Portati da casa" },
  { voice: "Snack / caffè", cost: "€10-20", note: "3 giorni" },
  { voice: "Margine emergenze", cost: "€30", note: "In contanti" },
];

export const BUDGET_TOTAL = "€100 — €120";

// ─────────────── CONTATTI ───────────────
export const CONTACTS = [
  { name: "Emergenze (unico europeo)", number: "112" },
  { name: "Ambulanza", number: "118" },
  { name: "Polizia", number: "113" },
  { name: "Ryanair Customer Service", number: "+353 1 246 0002" },
  { name: "ATVO", number: "+39 0421 594671" },
  { name: "ACTV Venezia", number: "+39 041 2424" },
  { name: "Aeroporto Marco Polo", number: "+39 041 2609260" },
  { name: "Aeroporto Palermo", number: "+39 091 7020273" },
];
