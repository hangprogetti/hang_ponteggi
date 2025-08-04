export const projects = [
  {
    video: "/assets/video/abbazia.mp4",
    title: "Hang Srl al lavoro sulla storica chiesa di Santa Maria Novella, Firenze",
    projectImage: "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276368/abbazia_ljwxuq.webp",
    shortDescription: `Ponteggio temporaneo installato sulla celebre chiesa di Santa Maria Novella, uno dei simboli più iconici di Firenze...`,
    description: `Ponteggio temporaneo installato sulla celebre chiesa di Santa Maria Novella, uno dei simboli più iconici di Firenze e dell’arte rinascimentale. Grazie alla nostra esperienza e alle tecnologie all’avanguardia, Hang Srl ha realizzato una struttura sicura, robusta e rispettosa dell’ambiente circostante, permettendo ai restauratori di operare nel massimo rispetto del patrimonio artistico e architettonico.
Un intervento pensato per valorizzare e preservare uno dei capolavori storici della città, confermando il nostro impegno nella tutela dei beni culturali.`,
    images: [
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276369/abbazia1_v2bpee.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276369/abbazia2_ltsbcc.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276369/abbazia3_km9sb5.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276377/abbazia4_caybqp.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276676/abbazia5_fuxggu.webp"
    ],
    details: {
      dove: "Firenze",
      durata: "9 mesi",
      intervento: "Restauro storico",
      area: "2500 m²"
    }
  },
  {
    video: "/assets/video/ponte_genova.mp4",
    title: "Ponte di Doccio, Valsesia",
    projectImage: "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513207/ponte_doccio_xx6uiy.webp",
    shortDescription: `Hang ha realizzato una struttura che permette di lavorare su tutto il ponte, in condizioni di massima sicurezza ed affidabilità...`,
    description: `Hang ha realizzato una struttura che permette di lavorare su tutto il ponte, in condizioni di massima sicurezza ed affidabilità. Impalcato sospeso, pile, interno ed esterno dell’arco. Praticamente, un cantiere aereo.`,
    images: [
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513767/ponte_doccio1_l04bwc.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513767/ponte_doccio2_aybfgu.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513767/ponte_doccio3_laud3b.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513767/ponte_doccio4_ixzabu.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513768/ponte_doccio5_ec52a8.webp"
    ],
    details: {
      dove: "Valsesia",
      durata: "8 mesi",
      intervento: "Installazione ponteggi sospesi",
      area: "1800 m²"
    }
  },
  {
    video: "/assets/video/ponte.mp4",
    title: "Ponteggio sospeso per far risplendere il ponte di ferro a Sesto Calende (VA)",
    projectImage: "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277486/ponte_calende_vinqql.webp",
    shortDescription: `Sotto l’impalcato e sui fianchi, Hang ha provveduto all’installazione di un ponteggio sospeso per un intervento di manutenzione straordinaria...`,
    description: "Sotto l’impalcato e sui fianchi, Hang ha provveduto all’installazione di un ponteggio sospeso per un intervento di manutenzione straordinaria sulla travata metallica. Un lavoro cruciale per mantenere saldo il collegamento tra Piemonte e Lombardia.",
    images: [
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277488/ponte_calende1_zhdtit.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277489/ponte_calende2_uzpbfi.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277485/ponte_calende3_e7dzdz.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277487/ponte_calende4_nrulof.webp",
      "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277486/ponte_calende5_xmphah.webp"
    ],
    details: {
      dove: "Sesto Calende",
      durata: "12 mesi",
      intervento: "Installazione ponteggi sospesi",
      area: "3000 m²"
    }
  }
];

export const mapProjects = [
  { 
    id: 0, 
    position: [43.462862, 11.145787] as [number, number], 
    name: "Hang Srl al lavoro sulla storica chiesa di Santa Maria Novella, Firenze", 
    description: "Ponteggio sospeso temporaneo installato sulla celebre chiesa di Santa Maria Novella, uno dei simboli più iconici di Firenze...", 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1752276368/abbazia_ljwxuq.webp",
    showDiscoverLink: true
  },
  { 
    id: 1, 
    position: [45.76728636116304, 8.259302293075178] as [number, number], 
    name: "Ponte di Doccio, Valsesia", 
    description: 'Hang ha realizzato una struttura che permette di lavorare su tutto il ponte, in condizioni di massima sicurezza ed affidabilità...', 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1752513207/ponte_doccio_xx6uiy.webp",
    showDiscoverLink: true
  },
  { 
    id: 2, 
    position: [45.768341120057016, 8.62964813417156] as [number, number], 
    name: "Ponteggio sospeso per far risplendere il ponte di ferro a Sesto Calende (VA)", 
    description: 'Sotto l\'impalcato e sui fianchi, Hang ha provveduto all\'installazione di un ponteggio sospeso per un intervento di manutenzione straordinaria...', 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1752277486/ponte_calende_vinqql.webp",
    showDiscoverLink: true
  },
  { 
    id: 3, 
    position: [45.73840293002966, 7.317805039468387] as [number, number], 
    name: "Cattedrale di Santa Maria Assunta Aosta", 
    description: 'L\'intervento ha richiesto una progettazione su misura, capace di garantire la massima stabilità senza compromettere l\'integrità architettonica e artistica dell’edificio. Il ponteggio è stato installato con tecnologie ad incastro non invasive e strutture modulari che hanno permesso agli operatori di lavorare in sicurezza anche in punti di difficile accesso. Particolare attenzione è stata posta alla tutela delle superfici decorate e al rispetto delle funzioni liturgiche, assicurando la piena fruibilità degli spazi durante tutto il periodo dei lavori...', 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1753693651/cattedrale_mappa_rywbep.webp",
    showDiscoverLink: false
  },
  { 
    id: 4, 
    position: [43.57064506536163, 10.426879468150057] as [number, number], 
    name: "Ponte a Colle Salvetti, Livorno", 
    description: 'Il ponteggio sospeso è stato dotato di piani di lavoro continui, parapetti di sicurezza e schermature laterali per la protezione ambientale e il contenimento dei materiali di cantiere. Grazie all’uso di componenti modulari e leggere, Hang ha garantito un montaggio rapido e sicuro, ottimizzando i tempi di intervento e riducendo l’impatto sul contesto naturale circostante...', 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1753695607/Progetto_Ponte_ColleSalvetti_a00ivj.webp",
    showDiscoverLink: false
  },
  { 
    id: 5, 
    position: [45.34308926727647, 9.196780424491662] as [number, number], 
    name: "Pieve Emanuele (MI)", 
    description: 'Hang in questo cantiere ha adottato soluzioni ad alto standard di sicurezza, con parapetti, passerelle antiscivolo e dispositivi di protezione collettiva e una torre alta 50 metri, assicurando una gestione efficiente del cantiere e il pieno rispetto delle normative vigenti...', 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1753710855/pieveEmnuele_hfane8.webp",
    showDiscoverLink: false
  },
  { 
    id: 6, 
    position: [44.357822470687715, 9.223891811789565] as [number, number], 
    name: "Ponte a Rapallo, Genova", 
    description: 'Hang ha eseguito l’allestimento di un ponteggio sospeso su ponte viabilistico, nell’ambito di un intervento di manutenzione straordinaria dell’infrastruttura. Il ponteggio è stato ancorato alla parte inferiore dell’impalcato mediante sistemi certificati che non richiedono forature invasive, consentendo l’accesso sicuro agli operatori per lavorazioni su travi portanti, giunti e superfici ammalorate...', 
    imageUrl: "https://res.cloudinary.com/dczzzutnf/image/upload/v1753711300/ponte_rapallo_j9hxnp.webp",
    showDiscoverLink: false
  },
   { 
    id: 7, 
    position: [44.43058259297653, 8.789655983590677] as [number, number], 
    name: "Viadotto San Pietro, Genova", 
    description: 'Hang ha realizzato una passerella multidirezionale, completa di torre scala, per consentire in sicurezza gli interventi sul cordolo est. La struttura, progettata su misura, ha garantito un accesso agevole e stabile agli operatori, permettendo lo svolgimento delle lavorazioni in quota nel pieno rispetto delle normative di sicurezza e senza interferenze con le aree sottostanti...', 
    imageUrl: "",
    showDiscoverLink: false
  },
];
