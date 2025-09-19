const verbsMitPrepositions = [
    {
        level: 1,
        name: "abhängen",
        prepositions: ["von"]
    },
    {
        level: 1,
        name: "achten",
        prepositions: ["auf"]
    },
    {
        level: 1,
        name: "anfangen",
        prepositions: ["mit"]
    },
    {
        level: 1,
        name: "arbeiten",
        prepositions: ["bei", "als", "an"]
    },
    {
        level: 3,
        name: "sich ärgern",
        prepositions: ["über"]
    },
    {
        level: 3,
        name: "sich aufregen",
        prepositions: ["über"]
    },
    {
        level: 2,
        name: "ausgeben",
        prepositions: ["für"]
    },
    {
        level: 1,
        name: "beginnen",
        prepositions: ["mit"]
    },
    {
        level: 4,
        name: "sich bedanken",
        prepositions: ["bei", "für"]
    },
    {
        level: 3,
        name: "berichten",
        prepositions: ["über"]
    },
    {
        level: 4,
        name: "sich beschäftigen",
        prepositions: ["mit"]
    },
    {
        level: 5,
        name: "sich beschweren",
        prepositions: ["bei", "über"]
    },
    {
        level: 3,
        name: "bestehen",
        prepositions: ["in", "aus"]
    },
    {
        level: 5,
        name: "sich bewerben",
        prepositions: ["um"]
    },
    {
        level: 2,
        name: "bitten",
        prepositions: ["um"]
    },
    {
        level: 2,
        name: "danken",
        prepositions: ["für"]
    },
    {
        level: 2,
        name: "denken",
        prepositions: ["an"]
    },
    {
        level: 3,
        name: "diskutieren",
        prepositions: ["mit", "über"]
    },
    {
        level: 3,
        name: "sich entscheiden",
        prepositions: ["für"]
    },
    {
        level: 4,
        name: "sich entschuldigen",
        prepositions: ["bei", "für"]
    },
    {
        level: 4,
        name: "sich erinnern",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "sich erkundigen",
        prepositions: ["bei", "nach"]
    },
    {
        level: 2,
        name: "fragen",
        prepositions: ["nach"]
    },
    {
        level: 4,
        name: "sich freuen",
        prepositions: ["über", "auf"]
    },
    {
        level: 3,
        name: "gehören",
        prepositions: ["zu"]
    },
    {
        level: 4,
        name: "gehen",
        prepositions: ["um"]
    },
    {
        level: 3,
        name: "gelten",
        prepositions: ["als"]
    },
    {
        level: 3,
        name: "gratulieren",
        prepositions: ["zu"]
    },
    {
        level: 5,
        name: "sich handeln",
        prepositions: ["um"]
    },
    {
        level: 3,
        name: "sich interessieren",
        prepositions: ["für"]
    },
    {
        level: 3,
        name: "lachen",
        prepositions: ["über"]
    },
    {
        level: 4,
        name: "nachdenken",
        prepositions: ["über"]
    },
    {
        level: 4,
        name: "reagieren",
        prepositions: ["auf"]
    },
    {
        level: 2,
        name: "reden",
        prepositions: ["über"]
    },
    {
        level: 3,
        name: "riechen",
        prepositions: ["nach"]
    },
    {
        level: 2,
        name: "sprechen",
        prepositions: ["mit", "über"]
    },
    {
        level: 3,
        name: "stammen",
        prepositions: ["aus"]
    },
    {
        level: 3,
        name: "sich streiten",
        prepositions: ["mit"]
    },
    {
        level: 3,
        name: "teilnehmen",
        prepositions: ["an"]
    },
    {
        level: 2,
        name: "telefonieren",
        prepositions: ["mit"]
    },
    {
        level: 3,
        name: "träumen",
        prepositions: ["von"]
    },
    {
        level: 3,
        name: "sich unterhalten",
        prepositions: ["mit", "über"]
    },
    {
        level: 5,
        name: "verfügen",
        prepositions: ["über"]
    },
    {
        level: 3,
        name: "verbinden",
        prepositions: ["mit"]
    },
    {
        level: 4,
        name: "sich verlieben",
        prepositions: ["in"]
    },
    {
        level: 4,
        name: "sich vorbereiten",
        prepositions: ["auf"]
    },
    {
        level: 2,
        name: "warten",
        prepositions: ["auf"]
    },
    {
        level: 4,
        name: "sich ängstigen",
        prepositions: ["vor"]
    },
    {
        level: 3,
        name: "Angst haben",
        prepositions: ["vor"]
    },
    {
        level: 5,
        name: "sich anpassen",
        prepositions: ["an"]
    },
    {
        level: 2,
        name: "anrufen",
        prepositions: ["bei"]
    },
    {
        level: 2,
        name: "antworten",
        prepositions: ["auf"]
    },
    {
        level: 3,
        name: "aufhören",
        prepositions: ["mit"]
    },
    {
        level: 3,
        name: "aufpassen",
        prepositions: ["auf"]
    },
    {
        level: 6,
        name: "sich auseinandersetzen",
        prepositions: ["mit"]
    },
    {
        level: 4,
        name: "ausgehen",
        prepositions: ["von"]
    },
    {
        level: 5,
        name: "befördern",
        prepositions: ["zu"]
    },
    {
        level: 5,
        name: "sich beklagen",
        prepositions: ["bei", "über"]
    },
    {
        level: 5,
        name: "sich bemühen",
        prepositions: ["um"]
    },
    {
        level: 3,
        name: "berichten",
        prepositions: ["über", "von"]
    },
    {
        level: 5,
        name: "sich beschränken",
        prepositions: ["auf"]
    },
    {
        level: 4,
        name: "beschreiben",
        prepositions: ["als"]
    },
    {
        level: 4,
        name: "bestehen",
        prepositions: ["aus", "auf", "in"]
    },
    {
        level: 4,
        name: "bezeichnen",
        prepositions: ["als"]
    },
    {
        level: 6,
        name: "sich eignen",
        prepositions: ["für", "zu"]
    },
    {
        level: 4,
        name: "sich einigen",
        prepositions: ["auf", "mit"]
    },
    {
        level: 3,
        name: "einladen",
        prepositions: ["zu"]
    },
    {
        level: 5,
        name: "sich entschließen",
        prepositions: ["zu"]
    },
    {
        level: 4,
        name: "sich erholen",
        prepositions: ["von"]
    },
    {
        level: 4,
        name: "erkennen",
        prepositions: ["an"]
    },
    {
        level: 4,
        name: "erklären",
        prepositions: ["mit"]
    },
    {
        level: 5,
        name: "sich ernähren",
        prepositions: ["von"]
    },
    {
        level: 4,
        name: "führen",
        prepositions: ["zu"]
    },
    {
        level: 5,
        name: "sich fürchten",
        prepositions: ["vor"]
    },
    {
        level: 5,
        name: "geraten",
        prepositions: ["in"]
    },
    {
        level: 5,
        name: "sich gewöhnen",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "gliedern",
        prepositions: ["in"]
    },
    {
        level: 4,
        name: "halten",
        prepositions: ["von"]
    },
    {
        level: 3,
        name: "hoffen",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "sich irren",
        prepositions: ["in"]
    },
    {
        level: 4,
        name: "kämpfen",
        prepositions: ["für", "gegen"]
    },
    {
        level: 5,
        name: "sich konzentrieren",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "sich kümmern",
        prepositions: ["um"]
    },
    {
        level: 5,
        name: "leiden",
        prepositions: ["an", "unter"]
    },
    {
        level: 4,
        name: "liegen",
        prepositions: ["an"]
    },
    {
        level: 5,
        name: "sich orientieren",
        prepositions: ["an"]
    },
    {
        level: 4,
        name: "rechnen",
        prepositions: ["mit"]
    },
    {
        level: 2,
        name: "reden",
        prepositions: ["mit", "über"]
    },
    {
        level: 3,
        name: "schmecken",
        prepositions: ["nach"]
    },
    {
        level: 2,
        name: "schreiben",
        prepositions: ["an"]
    },
    {
        level: 5,
        name: "sich schützen",
        prepositions: ["vor"]
    },
    {
        level: 4,
        name: "schützen",
        prepositions: ["vor"]
    },
    {
        level: 3,
        name: "sehen",
        prepositions: ["als"]
    },
    {
        level: 6,
        name: "sich sehnen",
        prepositions: ["nach"]
    },
    {
        level: 6,
        name: "senken",
        prepositions: ["um", "auf"]
    },
    {
        level: 6,
        name: "sinken",
        prepositions: ["um", "auf"]
    },
    {
        level: 4,
        name: "sorgen",
        prepositions: ["für"]
    },
    {
        level: 5,
        name: "sich sorgen",
        prepositions: ["um"]
    },
    {
        level: 6,
        name: "sich Sorgen machen",
        prepositions: ["um", "über"]
    },
    {
        level: 2,
        name: "sprechen",
        prepositions: ["mit", "über", "von"]
    },
    {
        level: 6,
        name: "ansteigen",
        prepositions: ["um", "auf"]
    },
    {
        level: 5,
        name: "steigen",
        prepositions: ["um", "auf"]
    },
    {
        level: 4,
        name: "sterben",
        prepositions: ["an"]
    },
    {
        level: 4,
        name: "sich streiten",
        prepositions: ["mit", "über"]
    },
    {
        level: 5,
        name: "staunen",
        prepositions: ["über"]
    },
    {
        level: 6,
        name: "zu tun haben",
        prepositions: ["mit"]
    },
    {
        level: 5,
        name: "sich umstellen",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "sich einstellen",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "sich verlassen",
        prepositions: ["auf"]
    },
    {
        level: 6,
        name: "verstehen",
        prepositions: ["unter"]
    },
    {
        level: 6,
        name: "verstoßen",
        prepositions: ["gegen"]
    },
    {
        level: 5,
        name: "verzichten",
        prepositions: ["auf"]
    },
    {
        level: 4,
        name: "warnen",
        prepositions: ["vor"]
    },
    {
        level: 5,
        name: "sich wundern",
        prepositions: ["über"]
    },
    {
        level: 7,
        name: "zurückführen",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "zweifeln",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "abbringen",
        prepositions: ["von"]
    },
    {
        level: 6,
        name: "sich abgeben",
        prepositions: ["mit"]
    },
    {
        level: 6,
        name: "abhalten",
        prepositions: ["von"]
    },
    {
        level: 7,
        name: "sich abhärten",
        prepositions: ["gegen"]
    },
    {
        level: 6,
        name: "absehen",
        prepositions: ["von"]
    },
    {
        level: 4,
        name: "ändern",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "sich ängstigen",
        prepositions: ["vor", "um"]
    },
    {
        level: 5,
        name: "anregen",
        prepositions: ["zu"]
    },
    {
        level: 4,
        name: "ansehen",
        prepositions: ["als"]
    },
    {
        level: 5,
        name: "auffordern",
        prepositions: ["zu"]
    },
    {
        level: 6,
        name: "ausdrücken",
        prepositions: ["in", "mit"]
    },
    {
        level: 5,
        name: "aussehen",
        prepositions: ["nach"]
    },
    {
        level: 7,
        name: "sich aussprechen",
        prepositions: ["gegen", "für", "mit"]
    },
    {
        level: 6,
        name: "basieren",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "sich beeilen",
        prepositions: ["mit"]
    },
    {
        level: 7,
        name: "sich befreien",
        prepositions: ["von", "aus"]
    },
    {
        level: 6,
        name: "sich beziehen",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "bringen",
        prepositions: ["zu"]
    },
    {
        level: 6,
        name: "dienen",
        prepositions: ["zu", "als"]
    },
    {
        level: 6,
        name: "debattieren",
        prepositions: ["mit", "über"]
    },
    {
        level: 6,
        name: "entstehen",
        prepositions: ["aus"]
    },
    {
        level: 6,
        name: "ernennen",
        prepositions: ["zu"]
    },
    {
        level: 6,
        name: "erschrecken",
        prepositions: ["vor"]
    },
    {
        level: 5,
        name: "erwarten",
        prepositions: ["von"]
    },
    {
        level: 6,
        name: "erziehen",
        prepositions: ["zu"]
    },
    {
        level: 5,
        name: "fehlen",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "fliehen",
        prepositions: ["vor"]
    },
    {
        level: 5,
        name: "fordern",
        prepositions: ["von"]
    },
    {
        level: 7,
        name: "sich fügen",
        prepositions: ["in"]
    },
    {
        level: 4,
        name: "glauben",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "handeln",
        prepositions: ["von"]
    },
    {
        level: 4,
        name: "hören",
        prepositions: ["von", "auf"]
    },
    {
        level: 6,
        name: "informieren",
        prepositions: ["über", "bei"]
    },
    {
        level: 6,
        name: "klagen",
        prepositions: ["über"]
    },
    {
        level: 4,
        name: "kommen",
        prepositions: ["zu"]
    },
    {
        level: 4,
        name: "leben",
        prepositions: ["von"]
    },
    {
        level: 5,
        name: "machen",
        prepositions: ["zu"]
    },
    {
        level: 7,
        name: "mangeln",
        prepositions: ["an"]
    },
    {
        level: 7,
        name: "neigen",
        prepositions: ["zu"]
    },
    {
        level: 5,
        name: "passen",
        prepositions: ["zu"]
    },
    {
        level: 6,
        name: "protestieren",
        prepositions: ["gegen"]
    },
    {
        level: 8,
        name: "sich rächen",
        prepositions: ["an", "für"]
    },
    {
        level: 8,
        name: "sich ranken",
        prepositions: ["um"]
    },
    {
        level: 5,
        name: "raten",
        prepositions: ["zu"]
    },
    {
        level: 6,
        name: "sich richten",
        prepositions: ["an"]
    },
    {
        level: 6,
        name: "schimpfen",
        prepositions: ["auf"]
    },
    {
        level: 5,
        name: "stimmen",
        prepositions: ["für", "gegen"]
    },
    {
        level: 4,
        name: "suchen",
        prepositions: ["nach"]
    },
    {
        level: 7,
        name: "sich täuschen",
        prepositions: ["in"]
    },
    {
        level: 7,
        name: "überreden",
        prepositions: ["zu"]
    },
    {
        level: 6,
        name: "übersetzen",
        prepositions: ["aus", "in"]
    },
    {
        level: 7,
        name: "überzeugen",
        prepositions: ["von"]
    },
    {
        level: 7,
        name: "sich unterscheiden",
        prepositions: ["von", "in", "durch"]
    },
    {
        level: 8,
        name: "verbergen",
        prepositions: ["vor"]
    },
    {
        level: 8,
        name: "verheimlichen",
        prepositions: ["vor"]
    },
    {
        level: 7,
        name: "verklagen",
        prepositions: ["auf"]
    },
    {
        level: 8,
        name: "verleiten",
        prepositions: ["zu"]
    },
    {
        level: 8,
        name: "sich vertiefen",
        prepositions: ["in"]
    },
    {
        level: 6,
        name: "vertrauen",
        prepositions: ["auf"]
    },
    {
        level: 7,
        name: "sich wehren",
        prepositions: ["gegen"]
    },
    {
        level: 6,
        name: "werben",
        prepositions: ["für"]
    },
    {
        level: 5,
        name: "wissen",
        prepositions: ["von", "über"]
    },
    {
        level: 5,
        name: "zählen",
        prepositions: ["zu"]
    },
    {
        level: 7,
        name: "zwingen",
        prepositions: ["zu"]
    }
];