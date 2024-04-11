export const MOVIES = [
  {
    id: 1,
    title: 'The Imitation Game',
    summary:
      'In 1951, two policemen, Nock and Staehl, investigate the mathematician Alan Turing after an apparent break-in at his home. During his interrogation by Nock, Turing tells of his time working at Bletchley Park during the Second World War. ',
    image: 'The_Imitation_Game_(2014).png',
  },
  {
    id: 2,
    title: 'Edge of Tomorrow',
    summary:
      'In 2015, an alien race known as "Mimics" lands in Germany and swiftly conquers much of continental Europe, killing millions. By 2020, humanity has formed a global military alliance, the United Defense Force (UDF), to combat the Mimics. However, victory remained elusive until the recent Battle of Verdun, which was secured by the celebrated war hero Sergeant Rita Vrataski. ',
    image: 'Edge_of_Tomorrow_Poster.jpg',
  },
  {
    id: 3,
    title: 'The Martian',
    summary:
      'In 2035, the crew of the Ares III mission to Mars is exploring Acidalia Planitia on Martian solar day (sol) 18 of their 31-sol expedition. A severe dust storm threatens to topple their Mars Ascent Vehicle (MAV). In the ensuing evacuation, astronaut Mark Watney is struck by debris and presumed dead. With the MAV on the verge of toppling, the remaining crew takes off for their orbiting vessel, the Hermes, leaving Watney behind. ',
    image: 'The_Martian_film_poster.jpg',
  },
  {
    id: 4,
    title: 'The Current War',
    summary:
      'In 1880, Thomas Edison has unveiled his electric lightbulb. He plans to distribute power to American neighborhoods using Direct Current (DC), which is cheaper and cleaner than gaslight, but is limited in range and needs an expensive wiring infrastructure. George Westinghouse, a successful business man and inventor himself, wishes to learn more, and invites Edison to dinner. ',
    image: 'The_Current_War.png',
  },
  {
    id: 5,
    title: 'Oppenheimer',
    summary:
      "In 1926, the 22-year-old doctoral student J. Robert Oppenheimer grapples with anxiety and homesickness while studying experimental quantum physics under Patrick Blackett at the Cavendish Laboratory in the University of Cambridge. Upset with Blackett's attitude, Oppenheimer leaves him an apple poisoned with cyanide but later retrieves it. The visiting scientist Niels Bohr advises Oppenheimer to study theoretical physics at the University of Göttingen instead. ",
    image: 'Oppenheimer_(film).jpg',
  },
  {
    id: 6,
    title: 'Moonfall',
    summary:
      'In 2011, astronauts Brian Harper, Jocinda "Jo" Fowler, and newcomer Alan Marcus are on a Space Shuttle mission to repair a satellite. A mysterious swarm of alien technology attacks the orbiter, killing Alan and knocking Jo unconscious before tunneling into the surface of the Moon. Brian, the only witness to the swarm, returns the crippled shuttle to Earth, but his story is dismissed and he is fired from NASA. ',
    image: 'Moonfall_film_poster.jpg',
  },
  {
    id: 7,
    title: 'Area 51',
    summary:
      'Three close friends, Reid, Darrin, and Ben, attend a party together, during which Reid vanishes. Unable to locate him, Ben and Darrin leave. Driving home on a dark, secluded road, the two nearly run over Reid, who is inexplicably standing in the roadway in a daze. ',
    image: 'Area_51_Film_Poster.jpg',
  },
  {
    id: 8,
    title: 'Last Seen Alive',
    summary:
      'The movie opens with a brief scene of Detective Paterson accusing a man called Knuckles of kidnapping, and threatens him with life in prison. As the detective squeezes his throat, Knuckles finally gasps, "she\'s dead." ',
    image: 'Last_Seen_Alive_Poster.jpg',
  },
  {
    id: 9,
    title: 'Ip Man',
    summary:
      "In 1935, Foshan is a hub of Southern Chinese martial arts, where the various schools' students compete against each other. Ip Man, the most skilled martial artist in town, maintains a low profile while building a reputation for skill through friendly, closed-door competitions with other masters. One day, a local troublemaker named Yuan loses his kite, which lands in a tree in the Ip family's backyard. While retrieving it, Yuan witnesses Ip defeating fellow kung fu master Liu in a sparring match. ",
    image: 'Ipmanposter02.jpg',
  },
  {
    id: 10,
    title: 'Bridge to Terabithia',
    summary:
      'Jesse Aarons es un chico de doce años aficionado a dibujar que vive con su humilde familia en el pueblo de Lark Creek. Va a la escuela en autobús junto a su hermana pequeña May Belle (Bailee Madison), donde todos los días trata de evitar a la abusona Janice Avery. En la escuela es constantemente objeto de burlas por parte de algunos de sus compañeros, debido a que por las dificultades económicas de su familia, su madre le hace tener que llevar las viejas zapatillas deportivas de sus hermanas mayores.',
    image: 'p163182_p_v8_al.jpg',
  },
];

export const FOOD = [
  {
    id: 1,
    title: 'Burguer',
    image: 'burguer.jpg',
    price: 9
  },
  {
    id: 2,
    title: 'Popcorn',
    image: 'cinema-background-with-popcorn_752237-20385.avif',
    price: 12
  },
  {
    id: 3,
    title: 'Combo',
    image: 'taza-con-palomitas-refrescos-y-entradas-de-cine-sobre-fondo-blanco-tw8gtf.jpg',
    price: 15
  },
  {
    id: 4,
    title: 'Hotdog',
    image: 'l-intro-1672875625.jpg',
    price: 6
  },
];

export type MoviesType = typeof MOVIES;
export type FOODType = typeof FOOD;
