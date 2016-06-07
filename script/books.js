var books = [
        {title: "Egri csillagok", year: 1901, authors: ["Gardonyi Geza"], genres:["Drama", "Romance"]},
        {title: "Három sors", year: 1967, authors: ["David Lytton", "E.R. Braithwaite", "Langston Hughes"], genres:[]},
        {title: "Negy sors", year: 1965, authors: ["David Lytton", "E.R. Braithwaite", "Langston Hughes"], genres:["novel"]},
        {title: "Emberi sors", year: 1956, authors: ["Mihail Alekszandrovics Solohov"], genres:["novel", "Drama"]},
        {title: "Modern munkakörnyezet építése", year: 2012, authors: ["Borbély Balázs", "Filkor Csaba", "Szentgyörgyi Tibor"], genres:["educational", "computer science"]},
        {title: "Otthoni és irodai hálózatok zsebkönyve", year: 1901, authors: ["Borbély Balázs", "Filkor Csaba"], genres:["educational"]},
        {title: "Láthatatlan ember", year: 1902, authors: ["Gardonyi Geza"], genres:[]},
        {title: "Isten rabjai", year: 1908, authors: ["Gardonyi Geza"], genres:["Drama"]},
    ];


/*    Adott az alabbi struktura (ertelemszeruen ennel tobb elemmel):
    [
      {
        title: "Egri csillagok",
        year: 1901,
        authors: ["Gardonyi Geza"],
        genres:
          [
            "Drama",
            "Romance"
          ]
      },
      ….
    ]

    Feladatok:
    a, listazd ki a szerzoket, es mellejuk a konyveik szamat, csokkeno sorrendben
    b, listazd ki a szerzoparosokat, es mellejuk, hogy hany kozos konyvuk volt
    c, listazd ki a mufajokat, mellejuk, hogy hany konyv keszult ilyen mufajban, csokkeno sorrendben
    d, listazd ki a szerzoket, es mindegyik melle a legkorabbi konyve evszamat
    d,bonusz: evszam szerint novekvo sorrendben)
    e, listazd ki azokat a szerzoparosokat, akiknek kulon-kulon vett elso konyveik evszama kozott tobb, mint 10 ev telt el, a kulonbseget is kiirva, a kulonbseg szerint csokkeno sorrendben
*/
