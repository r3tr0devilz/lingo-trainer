// German vocabulary database
// types: verb | noun | adjective | adverb
// levels: A1 | A2 | B1 | B2
// Verb forms: present [ich, du, er/sie/es, wir, ihr, sie/Sie], praeteritum (er-form), perfekt
// Noun forms: nom, akk, dat, gen, plural
// Adjective forms: komparativ, superlativ

const vocab = [

  // ── Grammar Essentials ────────────────────────────────────────────────────
  {
    id: 1, german: 'sein', article: null, english: 'to be', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['bin','bist','ist','sind','seid','sind'], praeteritum: 'war', perfekt: 'ist gewesen' },
    example: 'Ich bin müde.',
  },
  {
    id: 2, german: 'haben', article: null, english: 'to have', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['habe','hast','hat','haben','habt','haben'], praeteritum: 'hatte', perfekt: 'hat gehabt' },
    example: 'Sie hat ein Auto.',
  },
  {
    id: 3, german: 'werden', article: null, english: 'to become; will (future)', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['werde','wirst','wird','werden','werdet','werden'], praeteritum: 'wurde', perfekt: 'ist geworden' },
    example: 'Es wird kalt.',
  },
  {
    id: 4, german: 'können', article: null, english: 'can, to be able to', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['kann','kannst','kann','können','könnt','können'], praeteritum: 'konnte', perfekt: 'hat gekonnt' },
    example: 'Ich kann Deutsch sprechen.',
  },
  {
    id: 5, german: 'müssen', article: null, english: 'must, to have to', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['muss','musst','muss','müssen','müsst','müssen'], praeteritum: 'musste', perfekt: 'hat gemusst' },
    example: 'Du musst schlafen.',
  },
  {
    id: 6, german: 'wollen', article: null, english: 'to want to', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['will','willst','will','wollen','wollt','wollen'], praeteritum: 'wollte', perfekt: 'hat gewollt' },
    example: 'Wir wollen reisen.',
  },
  {
    id: 7, german: 'sollen', article: null, english: 'should, to be supposed to', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['soll','sollst','soll','sollen','sollt','sollen'], praeteritum: 'sollte', perfekt: 'hat gesollt' },
    example: 'Du sollst pünktlich sein.',
  },
  {
    id: 8, german: 'dürfen', article: null, english: 'may, to be allowed to', type: 'verb',
    category: 'Grammar Essentials', level: 'A2',
    forms: { present: ['darf','darfst','darf','dürfen','dürft','dürfen'], praeteritum: 'durfte', perfekt: 'hat gedurft' },
    example: 'Darf ich fragen?',
  },
  {
    id: 9, german: 'mögen', article: null, english: 'to like; (möchten) would like to', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['mag','magst','mag','mögen','mögt','mögen'], praeteritum: 'mochte', perfekt: 'hat gemocht' },
    example: 'Ich mag Kaffee.',
  },

  // ── Greetings & Small Talk ────────────────────────────────────────────────
  {
    id: 10, german: 'grüßen', article: null, english: 'to greet', type: 'verb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { present: ['grüße','grüßt','grüßt','grüßen','grüßt','grüßen'], praeteritum: 'grüßte', perfekt: 'hat gegrüßt' },
    example: 'Er grüßt die Nachbarn.',
  },
  {
    id: 11, german: 'heißen', article: null, english: 'to be called, to be named', type: 'verb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { present: ['heiße','heißt','heißt','heißen','heißt','heißen'], praeteritum: 'hieß', perfekt: 'hat geheißen' },
    example: 'Ich heiße Anna.',
  },
  {
    id: 12, german: 'sich vorstellen', article: null, english: 'to introduce oneself', type: 'verb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { present: ['stelle mich vor','stellst dich vor','stellt sich vor','stellen uns vor','stellt euch vor','stellen sich vor'], praeteritum: 'stellte sich vor', perfekt: 'hat sich vorgestellt' },
    example: 'Darf ich mich vorstellen?',
  },
  {
    id: 13, german: 'sich verabschieden', article: null, english: 'to say goodbye', type: 'verb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { present: ['verabschiede mich','verabschiedest dich','verabschiedet sich','verabschieden uns','verabschiedet euch','verabschieden sich'], praeteritum: 'verabschiedete sich', perfekt: 'hat sich verabschiedet' },
    example: 'Wir verabschieden uns.',
  },
  {
    id: 14, german: 'Name', article: 'der', english: 'name', type: 'noun',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { nom: 'der Name', akk: 'den Namen', dat: 'dem Namen', gen: 'des Namens', plural: 'die Namen' },
    example: 'Wie ist Ihr Name?',
  },
  {
    id: 15, german: 'Sprache', article: 'die', english: 'language', type: 'noun',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { nom: 'die Sprache', akk: 'die Sprache', dat: 'der Sprache', gen: 'der Sprache', plural: 'die Sprachen' },
    example: 'Ich lerne eine neue Sprache.',
  },
  {
    id: 16, german: 'Gespräch', article: 'das', english: 'conversation, talk', type: 'noun',
    category: 'Greetings & Small Talk', level: 'A2',
    forms: { nom: 'das Gespräch', akk: 'das Gespräch', dat: 'dem Gespräch', gen: 'des Gesprächs', plural: 'die Gespräche' },
    example: 'Das war ein gutes Gespräch.',
  },
  {
    id: 17, german: 'freundlich', article: null, english: 'friendly, kind', type: 'adjective',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: { komparativ: 'freundlicher', superlativ: 'am freundlichsten' },
    example: 'Sie ist sehr freundlich.',
  },
  {
    id: 18, german: 'höflich', article: null, english: 'polite', type: 'adjective',
    category: 'Greetings & Small Talk', level: 'A2',
    forms: { komparativ: 'höflicher', superlativ: 'am höflichsten' },
    example: 'Sei bitte höflich.',
  },
  {
    id: 19, german: 'bitte', article: null, english: 'please; you\'re welcome', type: 'adverb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: null, example: 'Bitte helfen Sie mir.',
  },
  {
    id: 20, german: 'danke', article: null, english: 'thank you', type: 'adverb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: null, example: 'Danke schön!',
  },
  {
    id: 21, german: 'gerne', article: null, english: 'gladly, with pleasure', type: 'adverb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: null, example: 'Ich helfe dir gerne.',
  },
  {
    id: 22, german: 'leider', article: null, english: 'unfortunately', type: 'adverb',
    category: 'Greetings & Small Talk', level: 'A1',
    forms: null, example: 'Leider kann ich nicht kommen.',
  },

  // ── Work & Professional ───────────────────────────────────────────────────
  {
    id: 23, german: 'arbeiten', article: null, english: 'to work', type: 'verb',
    category: 'Work & Professional', level: 'A1',
    forms: { present: ['arbeite','arbeitest','arbeitet','arbeiten','arbeitet','arbeiten'], praeteritum: 'arbeitete', perfekt: 'hat gearbeitet' },
    example: 'Ich arbeite im Büro.',
  },
  {
    id: 24, german: 'verdienen', article: null, english: 'to earn, to deserve', type: 'verb',
    category: 'Work & Professional', level: 'A2',
    forms: { present: ['verdiene','verdienst','verdient','verdienen','verdient','verdienen'], praeteritum: 'verdiente', perfekt: 'hat verdient' },
    example: 'Sie verdient gut.',
  },
  {
    id: 25, german: 'sich bewerben', article: null, english: 'to apply (for a job)', type: 'verb',
    category: 'Work & Professional', level: 'B1',
    forms: { present: ['bewerbe mich','bewirbst dich','bewirbt sich','bewerben uns','bewerbt euch','bewerben sich'], praeteritum: 'bewarb sich', perfekt: 'hat sich beworben' },
    example: 'Ich bewerbe mich um die Stelle.',
  },
  {
    id: 26, german: 'kündigen', article: null, english: 'to quit, to give notice', type: 'verb',
    category: 'Work & Professional', level: 'B1',
    forms: { present: ['kündige','kündigst','kündigt','kündigen','kündigt','kündigen'], praeteritum: 'kündigte', perfekt: 'hat gekündigt' },
    example: 'Er hat seinen Job gekündigt.',
  },
  {
    id: 27, german: 'Arbeit', article: 'die', english: 'work, job', type: 'noun',
    category: 'Work & Professional', level: 'A1',
    forms: { nom: 'die Arbeit', akk: 'die Arbeit', dat: 'der Arbeit', gen: 'der Arbeit', plural: 'die Arbeiten' },
    example: 'Die Arbeit macht Spaß.',
  },
  {
    id: 28, german: 'Beruf', article: 'der', english: 'profession, occupation', type: 'noun',
    category: 'Work & Professional', level: 'A1',
    forms: { nom: 'der Beruf', akk: 'den Beruf', dat: 'dem Beruf', gen: 'des Berufs', plural: 'die Berufe' },
    example: 'Was ist dein Beruf?',
  },
  {
    id: 29, german: 'Büro', article: 'das', english: 'office', type: 'noun',
    category: 'Work & Professional', level: 'A1',
    forms: { nom: 'das Büro', akk: 'das Büro', dat: 'dem Büro', gen: 'des Büros', plural: 'die Büros' },
    example: 'Ich arbeite im Büro.',
  },
  {
    id: 30, german: 'Kollege', article: 'der', english: 'colleague (m)', type: 'noun',
    category: 'Work & Professional', level: 'A1',
    forms: { nom: 'der Kollege', akk: 'den Kollegen', dat: 'dem Kollegen', gen: 'des Kollegen', plural: 'die Kollegen' },
    example: 'Mein Kollege ist nett.',
  },
  {
    id: 31, german: 'Gehalt', article: 'das', english: 'salary, wage', type: 'noun',
    category: 'Work & Professional', level: 'A2',
    forms: { nom: 'das Gehalt', akk: 'das Gehalt', dat: 'dem Gehalt', gen: 'des Gehalts', plural: 'die Gehälter' },
    example: 'Das Gehalt ist gut.',
  },
  {
    id: 32, german: 'Besprechung', article: 'die', english: 'meeting, discussion', type: 'noun',
    category: 'Work & Professional', level: 'A2',
    forms: { nom: 'die Besprechung', akk: 'die Besprechung', dat: 'der Besprechung', gen: 'der Besprechung', plural: 'die Besprechungen' },
    example: 'Ich habe eine Besprechung.',
  },
  {
    id: 33, german: 'fleißig', article: null, english: 'hardworking, diligent', type: 'adjective',
    category: 'Work & Professional', level: 'A2',
    forms: { komparativ: 'fleißiger', superlativ: 'am fleißigsten' },
    example: 'Sie ist sehr fleißig.',
  },
  {
    id: 34, german: 'pünktlich', article: null, english: 'punctual, on time', type: 'adjective',
    category: 'Work & Professional', level: 'A1',
    forms: { komparativ: 'pünktlicher', superlativ: 'am pünktlichsten' },
    example: 'Bitte sei pünktlich.',
  },

  // ── Friends & Casual ──────────────────────────────────────────────────────
  {
    id: 35, german: 'sich treffen', article: null, english: 'to meet (up)', type: 'verb',
    category: 'Friends & Casual', level: 'A1',
    forms: { present: ['treffe mich','triffst dich','trifft sich','treffen uns','trefft euch','treffen sich'], praeteritum: 'traf sich', perfekt: 'hat sich getroffen' },
    example: 'Wir treffen uns um sechs.',
  },
  {
    id: 36, german: 'lachen', article: null, english: 'to laugh', type: 'verb',
    category: 'Friends & Casual', level: 'A1',
    forms: { present: ['lache','lachst','lacht','lachen','lacht','lachen'], praeteritum: 'lachte', perfekt: 'hat gelacht' },
    example: 'Sie lacht immer.',
  },
  {
    id: 37, german: 'erzählen', article: null, english: 'to tell, to narrate', type: 'verb',
    category: 'Friends & Casual', level: 'A2',
    forms: { present: ['erzähle','erzählst','erzählt','erzählen','erzählt','erzählen'], praeteritum: 'erzählte', perfekt: 'hat erzählt' },
    example: 'Er erzählt eine Geschichte.',
  },
  {
    id: 38, german: 'einladen', article: null, english: 'to invite', type: 'verb',
    category: 'Friends & Casual', level: 'A2',
    forms: { present: ['lade ein','lädst ein','lädt ein','laden ein','ladet ein','laden ein'], praeteritum: 'lud ein', perfekt: 'hat eingeladen' },
    example: 'Ich lade dich ein.',
  },
  {
    id: 39, german: 'Freund', article: 'der', english: 'friend; boyfriend (m)', type: 'noun',
    category: 'Friends & Casual', level: 'A1',
    forms: { nom: 'der Freund', akk: 'den Freund', dat: 'dem Freund', gen: 'des Freundes', plural: 'die Freunde' },
    example: 'Das ist mein bester Freund.',
  },
  {
    id: 40, german: 'Abend', article: 'der', english: 'evening', type: 'noun',
    category: 'Friends & Casual', level: 'A1',
    forms: { nom: 'der Abend', akk: 'den Abend', dat: 'dem Abend', gen: 'des Abends', plural: 'die Abende' },
    example: 'Guten Abend!',
  },
  {
    id: 41, german: 'Spaß', article: 'der', english: 'fun, joke', type: 'noun',
    category: 'Friends & Casual', level: 'A1',
    forms: { nom: 'der Spaß', akk: 'den Spaß', dat: 'dem Spaß', gen: 'des Spaßes', plural: 'die Späße' },
    example: 'Das macht Spaß!',
  },
  {
    id: 42, german: 'lustig', article: null, english: 'funny, amusing', type: 'adjective',
    category: 'Friends & Casual', level: 'A1',
    forms: { komparativ: 'lustiger', superlativ: 'am lustigsten' },
    example: 'Der Film ist lustig.',
  },
  {
    id: 43, german: 'langweilig', article: null, english: 'boring', type: 'adjective',
    category: 'Friends & Casual', level: 'A1',
    forms: { komparativ: 'langweiliger', superlativ: 'am langweiligsten' },
    example: 'Das ist so langweilig.',
  },

  // ── Travel & Directions ───────────────────────────────────────────────────
  {
    id: 44, german: 'fahren', article: null, english: 'to drive, to travel (by vehicle)', type: 'verb',
    category: 'Travel & Directions', level: 'A1',
    forms: { present: ['fahre','fährst','fährt','fahren','fahrt','fahren'], praeteritum: 'fuhr', perfekt: 'ist gefahren' },
    example: 'Wir fahren nach Berlin.',
  },
  {
    id: 45, german: 'fliegen', article: null, english: 'to fly', type: 'verb',
    category: 'Travel & Directions', level: 'A1',
    forms: { present: ['fliege','fliegst','fliegt','fliegen','fliegt','fliegen'], praeteritum: 'flog', perfekt: 'ist geflogen' },
    example: 'Ich fliege morgen.',
  },
  {
    id: 46, german: 'ankommen', article: null, english: 'to arrive', type: 'verb',
    category: 'Travel & Directions', level: 'A1',
    forms: { present: ['komme an','kommst an','kommt an','kommen an','kommt an','kommen an'], praeteritum: 'kam an', perfekt: 'ist angekommen' },
    example: 'Wann kommst du an?',
  },
  {
    id: 47, german: 'abfahren', article: null, english: 'to depart, to leave', type: 'verb',
    category: 'Travel & Directions', level: 'A1',
    forms: { present: ['fahre ab','fährst ab','fährt ab','fahren ab','fahrt ab','fahren ab'], praeteritum: 'fuhr ab', perfekt: 'ist abgefahren' },
    example: 'Der Zug fährt um 10 ab.',
  },
  {
    id: 48, german: 'Bahnhof', article: 'der', english: 'train station', type: 'noun',
    category: 'Travel & Directions', level: 'A1',
    forms: { nom: 'der Bahnhof', akk: 'den Bahnhof', dat: 'dem Bahnhof', gen: 'des Bahnhofs', plural: 'die Bahnhöfe' },
    example: 'Wo ist der Bahnhof?',
  },
  {
    id: 49, german: 'Flughafen', article: 'der', english: 'airport', type: 'noun',
    category: 'Travel & Directions', level: 'A1',
    forms: { nom: 'der Flughafen', akk: 'den Flughafen', dat: 'dem Flughafen', gen: 'des Flughafens', plural: 'die Flughäfen' },
    example: 'Ich bin am Flughafen.',
  },
  {
    id: 50, german: 'Ticket', article: 'das', english: 'ticket', type: 'noun',
    category: 'Travel & Directions', level: 'A1',
    forms: { nom: 'das Ticket', akk: 'das Ticket', dat: 'dem Ticket', gen: 'des Tickets', plural: 'die Tickets' },
    example: 'Haben Sie mein Ticket?',
  },
  {
    id: 51, german: 'Richtung', article: 'die', english: 'direction', type: 'noun',
    category: 'Travel & Directions', level: 'A2',
    forms: { nom: 'die Richtung', akk: 'die Richtung', dat: 'der Richtung', gen: 'der Richtung', plural: 'die Richtungen' },
    example: 'In welche Richtung?',
  },
  {
    id: 52, german: 'links', article: null, english: 'left, to the left', type: 'adverb',
    category: 'Travel & Directions', level: 'A1',
    forms: null, example: 'Biegen Sie links ab.',
  },
  {
    id: 53, german: 'rechts', article: null, english: 'right, to the right', type: 'adverb',
    category: 'Travel & Directions', level: 'A1',
    forms: null, example: 'Das Hotel ist rechts.',
  },
  {
    id: 54, german: 'geradeaus', article: null, english: 'straight ahead', type: 'adverb',
    category: 'Travel & Directions', level: 'A1',
    forms: null, example: 'Gehen Sie geradeaus.',
  },
  {
    id: 55, german: 'weit', article: null, english: 'far, wide', type: 'adjective',
    category: 'Travel & Directions', level: 'A1',
    forms: { komparativ: 'weiter', superlativ: 'am weitesten' },
    example: 'Ist es weit von hier?',
  },

  // ── Shopping ──────────────────────────────────────────────────────────────
  {
    id: 56, german: 'kaufen', article: null, english: 'to buy', type: 'verb',
    category: 'Shopping', level: 'A1',
    forms: { present: ['kaufe','kaufst','kauft','kaufen','kauft','kaufen'], praeteritum: 'kaufte', perfekt: 'hat gekauft' },
    example: 'Ich kaufe ein neues Hemd.',
  },
  {
    id: 57, german: 'bezahlen', article: null, english: 'to pay', type: 'verb',
    category: 'Shopping', level: 'A1',
    forms: { present: ['bezahle','bezahlst','bezahlt','bezahlen','bezahlt','bezahlen'], praeteritum: 'bezahlte', perfekt: 'hat bezahlt' },
    example: 'Kann ich mit Karte bezahlen?',
  },
  {
    id: 58, german: 'anprobieren', article: null, english: 'to try on', type: 'verb',
    category: 'Shopping', level: 'A2',
    forms: { present: ['probiere an','probierst an','probiert an','probieren an','probiert an','probieren an'], praeteritum: 'probierte an', perfekt: 'hat anprobiert' },
    example: 'Kann ich das anprobieren?',
  },
  {
    id: 59, german: 'umtauschen', article: null, english: 'to exchange, to return', type: 'verb',
    category: 'Shopping', level: 'A2',
    forms: { present: ['tausche um','tauschst um','tauscht um','tauschen um','tauscht um','tauschen um'], praeteritum: 'tauschte um', perfekt: 'hat umgetauscht' },
    example: 'Ich möchte das umtauschen.',
  },
  {
    id: 60, german: 'Preis', article: 'der', english: 'price', type: 'noun',
    category: 'Shopping', level: 'A1',
    forms: { nom: 'der Preis', akk: 'den Preis', dat: 'dem Preis', gen: 'des Preises', plural: 'die Preise' },
    example: 'Was ist der Preis?',
  },
  {
    id: 61, german: 'Größe', article: 'die', english: 'size', type: 'noun',
    category: 'Shopping', level: 'A1',
    forms: { nom: 'die Größe', akk: 'die Größe', dat: 'der Größe', gen: 'der Größe', plural: 'die Größen' },
    example: 'Welche Größe haben Sie?',
  },
  {
    id: 62, german: 'Rabatt', article: 'der', english: 'discount', type: 'noun',
    category: 'Shopping', level: 'A2',
    forms: { nom: 'der Rabatt', akk: 'den Rabatt', dat: 'dem Rabatt', gen: 'des Rabatts', plural: 'die Rabatte' },
    example: 'Gibt es einen Rabatt?',
  },
  {
    id: 63, german: 'Kasse', article: 'die', english: 'checkout, cash register', type: 'noun',
    category: 'Shopping', level: 'A1',
    forms: { nom: 'die Kasse', akk: 'die Kasse', dat: 'der Kasse', gen: 'der Kasse', plural: 'die Kassen' },
    example: 'Wo ist die Kasse?',
  },
  {
    id: 64, german: 'teuer', article: null, english: 'expensive', type: 'adjective',
    category: 'Shopping', level: 'A1',
    forms: { komparativ: 'teurer', superlativ: 'am teuersten' },
    example: 'Das ist zu teuer.',
  },
  {
    id: 65, german: 'günstig', article: null, english: 'cheap, affordable, favourable', type: 'adjective',
    category: 'Shopping', level: 'A1',
    forms: { komparativ: 'günstiger', superlativ: 'am günstigsten' },
    example: 'Das ist sehr günstig.',
  },

  // ── Restaurants & Food ────────────────────────────────────────────────────
  {
    id: 66, german: 'essen', article: null, english: 'to eat', type: 'verb',
    category: 'Restaurants & Food', level: 'A1',
    forms: { present: ['esse','isst','isst','essen','esst','essen'], praeteritum: 'aß', perfekt: 'hat gegessen' },
    example: 'Ich esse gerne Pizza.',
  },
  {
    id: 67, german: 'trinken', article: null, english: 'to drink', type: 'verb',
    category: 'Restaurants & Food', level: 'A1',
    forms: { present: ['trinke','trinkst','trinkt','trinken','trinkt','trinken'], praeteritum: 'trank', perfekt: 'hat getrunken' },
    example: 'Was möchten Sie trinken?',
  },
  {
    id: 68, german: 'bestellen', article: null, english: 'to order', type: 'verb',
    category: 'Restaurants & Food', level: 'A1',
    forms: { present: ['bestelle','bestellst','bestellt','bestellen','bestellt','bestellen'], praeteritum: 'bestellte', perfekt: 'hat bestellt' },
    example: 'Ich bestelle die Suppe.',
  },
  {
    id: 69, german: 'empfehlen', article: null, english: 'to recommend', type: 'verb',
    category: 'Restaurants & Food', level: 'A2',
    forms: { present: ['empfehle','empfiehlst','empfiehlt','empfehlen','empfehlt','empfehlen'], praeteritum: 'empfahl', perfekt: 'hat empfohlen' },
    example: 'Was empfehlen Sie?',
  },
  {
    id: 70, german: 'schmecken', article: null, english: 'to taste, to taste good', type: 'verb',
    category: 'Restaurants & Food', level: 'A1',
    forms: { present: ['schmecke','schmeckst','schmeckt','schmecken','schmeckt','schmecken'], praeteritum: 'schmeckte', perfekt: 'hat geschmeckt' },
    example: 'Das schmeckt sehr gut!',
  },
  {
    id: 71, german: 'Speisekarte', article: 'die', english: 'menu', type: 'noun',
    category: 'Restaurants & Food', level: 'A1',
    forms: { nom: 'die Speisekarte', akk: 'die Speisekarte', dat: 'der Speisekarte', gen: 'der Speisekarte', plural: 'die Speisekarten' },
    example: 'Die Speisekarte bitte!',
  },
  {
    id: 72, german: 'Rechnung', article: 'die', english: 'bill, invoice', type: 'noun',
    category: 'Restaurants & Food', level: 'A1',
    forms: { nom: 'die Rechnung', akk: 'die Rechnung', dat: 'der Rechnung', gen: 'der Rechnung', plural: 'die Rechnungen' },
    example: 'Die Rechnung bitte!',
  },
  {
    id: 73, german: 'Tisch', article: 'der', english: 'table', type: 'noun',
    category: 'Restaurants & Food', level: 'A1',
    forms: { nom: 'der Tisch', akk: 'den Tisch', dat: 'dem Tisch', gen: 'des Tisches', plural: 'die Tische' },
    example: 'Ich möchte einen Tisch reservieren.',
  },
  {
    id: 74, german: 'Kellner', article: 'der', english: 'waiter (m)', type: 'noun',
    category: 'Restaurants & Food', level: 'A1',
    forms: { nom: 'der Kellner', akk: 'den Kellner', dat: 'dem Kellner', gen: 'des Kellners', plural: 'die Kellner' },
    example: 'Der Kellner kommt gleich.',
  },
  {
    id: 75, german: 'lecker', article: null, english: 'delicious, tasty', type: 'adjective',
    category: 'Restaurants & Food', level: 'A1',
    forms: { komparativ: 'leckerer', superlativ: 'am leckersten' },
    example: 'Das Essen ist lecker.',
  },
  {
    id: 76, german: 'scharf', article: null, english: 'spicy, hot; sharp', type: 'adjective',
    category: 'Restaurants & Food', level: 'A1',
    forms: { komparativ: 'schärfer', superlativ: 'am schärfsten' },
    example: 'Das ist zu scharf für mich.',
  },

  // ── Health & Medical ──────────────────────────────────────────────────────
  {
    id: 77, german: 'sich fühlen', article: null, english: 'to feel (oneself)', type: 'verb',
    category: 'Health & Medical', level: 'A1',
    forms: { present: ['fühle mich','fühlst dich','fühlt sich','fühlen uns','fühlt euch','fühlen sich'], praeteritum: 'fühlte sich', perfekt: 'hat sich gefühlt' },
    example: 'Ich fühle mich nicht gut.',
  },
  {
    id: 78, german: 'schmerzen', article: null, english: 'to hurt, to ache', type: 'verb',
    category: 'Health & Medical', level: 'A1',
    forms: { present: ['schmerze','schmerzt','schmerzt','schmerzen','schmerzt','schmerzen'], praeteritum: 'schmerzte', perfekt: 'hat geschmerzt' },
    example: 'Mein Kopf schmerzt.',
  },
  {
    id: 79, german: 'verschreiben', article: null, english: 'to prescribe', type: 'verb',
    category: 'Health & Medical', level: 'B1',
    forms: { present: ['verschreibe','verschreibst','verschreibt','verschreiben','verschreibt','verschreiben'], praeteritum: 'verschrieb', perfekt: 'hat verschrieben' },
    example: 'Der Arzt verschreibt Tabletten.',
  },
  {
    id: 80, german: 'sich erholen', article: null, english: 'to recover, to rest', type: 'verb',
    category: 'Health & Medical', level: 'A2',
    forms: { present: ['erhole mich','erholst dich','erholt sich','erholen uns','erholt euch','erholen sich'], praeteritum: 'erholte sich', perfekt: 'hat sich erholt' },
    example: 'Du musst dich erholen.',
  },
  {
    id: 81, german: 'Arzt', article: 'der', english: 'doctor (m)', type: 'noun',
    category: 'Health & Medical', level: 'A1',
    forms: { nom: 'der Arzt', akk: 'den Arzt', dat: 'dem Arzt', gen: 'des Arztes', plural: 'die Ärzte' },
    example: 'Ich brauche einen Arzt.',
  },
  {
    id: 82, german: 'Krankenhaus', article: 'das', english: 'hospital', type: 'noun',
    category: 'Health & Medical', level: 'A1',
    forms: { nom: 'das Krankenhaus', akk: 'das Krankenhaus', dat: 'dem Krankenhaus', gen: 'des Krankenhauses', plural: 'die Krankenhäuser' },
    example: 'Er ist im Krankenhaus.',
  },
  {
    id: 83, german: 'Schmerz', article: 'der', english: 'pain, ache', type: 'noun',
    category: 'Health & Medical', level: 'A1',
    forms: { nom: 'der Schmerz', akk: 'den Schmerz', dat: 'dem Schmerz', gen: 'des Schmerzes', plural: 'die Schmerzen' },
    example: 'Ich habe Schmerzen.',
  },
  {
    id: 84, german: 'Medikament', article: 'das', english: 'medication, medicine', type: 'noun',
    category: 'Health & Medical', level: 'A1',
    forms: { nom: 'das Medikament', akk: 'das Medikament', dat: 'dem Medikament', gen: 'des Medikaments', plural: 'die Medikamente' },
    example: 'Nehmen Sie dieses Medikament.',
  },
  {
    id: 85, german: 'Termin', article: 'der', english: 'appointment, date', type: 'noun',
    category: 'Health & Medical', level: 'A1',
    forms: { nom: 'der Termin', akk: 'den Termin', dat: 'dem Termin', gen: 'des Termins', plural: 'die Termine' },
    example: 'Ich habe einen Termin.',
  },
  {
    id: 86, german: 'krank', article: null, english: 'ill, sick', type: 'adjective',
    category: 'Health & Medical', level: 'A1',
    forms: { komparativ: 'kränker', superlativ: 'am kränksten' },
    example: 'Ich bin krank.',
  },
  {
    id: 87, german: 'gesund', article: null, english: 'healthy', type: 'adjective',
    category: 'Health & Medical', level: 'A1',
    forms: { komparativ: 'gesünder', superlativ: 'am gesündesten' },
    example: 'Iss gesund!',
  },
  {
    id: 88, german: 'allergisch', article: null, english: 'allergic', type: 'adjective',
    category: 'Health & Medical', level: 'A2',
    forms: { komparativ: 'allergischer', superlativ: 'am allergischsten' },
    example: 'Ich bin allergisch gegen Nüsse.',
  },

  // ── Emergency ─────────────────────────────────────────────────────────────
  {
    id: 89, german: 'rufen', article: null, english: 'to call, to shout', type: 'verb',
    category: 'Emergency', level: 'A1',
    forms: { present: ['rufe','rufst','ruft','rufen','ruft','rufen'], praeteritum: 'rief', perfekt: 'hat gerufen' },
    example: 'Rufen Sie die Polizei!',
  },
  {
    id: 90, german: 'helfen', article: null, english: 'to help', type: 'verb',
    category: 'Emergency', level: 'A1',
    forms: { present: ['helfe','hilfst','hilft','helfen','helft','helfen'], praeteritum: 'half', perfekt: 'hat geholfen' },
    example: 'Können Sie mir helfen?',
  },
  {
    id: 91, german: 'retten', article: null, english: 'to rescue, to save', type: 'verb',
    category: 'Emergency', level: 'A2',
    forms: { present: ['rette','rettest','rettet','retten','rettet','retten'], praeteritum: 'rettete', perfekt: 'hat gerettet' },
    example: 'Er hat ihr Leben gerettet.',
  },
  {
    id: 92, german: 'Notfall', article: 'der', english: 'emergency', type: 'noun',
    category: 'Emergency', level: 'A2',
    forms: { nom: 'der Notfall', akk: 'den Notfall', dat: 'dem Notfall', gen: 'des Notfalls', plural: 'die Notfälle' },
    example: 'Das ist ein Notfall!',
  },
  {
    id: 93, german: 'Polizei', article: 'die', english: 'police', type: 'noun',
    category: 'Emergency', level: 'A1',
    forms: { nom: 'die Polizei', akk: 'die Polizei', dat: 'der Polizei', gen: 'der Polizei', plural: '— (nur Singular)' },
    example: 'Rufen Sie die Polizei!',
  },
  {
    id: 94, german: 'Feuerwehr', article: 'die', english: 'fire brigade, fire department', type: 'noun',
    category: 'Emergency', level: 'A1',
    forms: { nom: 'die Feuerwehr', akk: 'die Feuerwehr', dat: 'der Feuerwehr', gen: 'der Feuerwehr', plural: 'die Feuerwehren' },
    example: 'Die Feuerwehr ist da.',
  },
  {
    id: 95, german: 'Unfall', article: 'der', english: 'accident', type: 'noun',
    category: 'Emergency', level: 'A1',
    forms: { nom: 'der Unfall', akk: 'den Unfall', dat: 'dem Unfall', gen: 'des Unfalls', plural: 'die Unfälle' },
    example: 'Es gab einen Unfall.',
  },
  {
    id: 96, german: 'Hilfe', article: 'die', english: 'help, aid', type: 'noun',
    category: 'Emergency', level: 'A1',
    forms: { nom: 'die Hilfe', akk: 'die Hilfe', dat: 'der Hilfe', gen: 'der Hilfe', plural: 'die Hilfen' },
    example: 'Hilfe! Ich brauche Hilfe!',
  },
  {
    id: 97, german: 'gefährlich', article: null, english: 'dangerous', type: 'adjective',
    category: 'Emergency', level: 'A2',
    forms: { komparativ: 'gefährlicher', superlativ: 'am gefährlichsten' },
    example: 'Das ist sehr gefährlich.',
  },
  {
    id: 98, german: 'verletzt', article: null, english: 'injured, hurt', type: 'adjective',
    category: 'Emergency', level: 'A1',
    forms: { komparativ: 'verletzter', superlativ: 'am verletzsten' },
    example: 'Ich bin verletzt.',
  },
  {
    id: 99, german: 'dringend', article: null, english: 'urgent, pressing', type: 'adjective',
    category: 'Emergency', level: 'A2',
    forms: { komparativ: 'dringender', superlativ: 'am dringendsten' },
    example: 'Das ist dringend!',
  },

  // ── Family ────────────────────────────────────────────────────────────────
  {
    id: 100, german: 'heiraten', article: null, english: 'to marry, to get married', type: 'verb',
    category: 'Family', level: 'A1',
    forms: { present: ['heirate','heiratest','heiratet','heiraten','heiratet','heiraten'], praeteritum: 'heiratete', perfekt: 'hat geheiratet' },
    example: 'Sie heiraten im Sommer.',
  },
  {
    id: 101, german: 'aufwachsen', article: null, english: 'to grow up', type: 'verb',
    category: 'Family', level: 'A2',
    forms: { present: ['wachse auf','wächst auf','wächst auf','wachsen auf','wachst auf','wachsen auf'], praeteritum: 'wuchs auf', perfekt: 'ist aufgewachsen' },
    example: 'Ich bin in München aufgewachsen.',
  },
  {
    id: 102, german: 'Familie', article: 'die', english: 'family', type: 'noun',
    category: 'Family', level: 'A1',
    forms: { nom: 'die Familie', akk: 'die Familie', dat: 'der Familie', gen: 'der Familie', plural: 'die Familien' },
    example: 'Meine Familie ist groß.',
  },
  {
    id: 103, german: 'Mutter', article: 'die', english: 'mother', type: 'noun',
    category: 'Family', level: 'A1',
    forms: { nom: 'die Mutter', akk: 'die Mutter', dat: 'der Mutter', gen: 'der Mutter', plural: 'die Mütter' },
    example: 'Meine Mutter kocht gut.',
  },
  {
    id: 104, german: 'Vater', article: 'der', english: 'father', type: 'noun',
    category: 'Family', level: 'A1',
    forms: { nom: 'der Vater', akk: 'den Vater', dat: 'dem Vater', gen: 'des Vaters', plural: 'die Väter' },
    example: 'Mein Vater arbeitet viel.',
  },
  {
    id: 105, german: 'Kind', article: 'das', english: 'child', type: 'noun',
    category: 'Family', level: 'A1',
    forms: { nom: 'das Kind', akk: 'das Kind', dat: 'dem Kind', gen: 'des Kindes', plural: 'die Kinder' },
    example: 'Die Kinder spielen draußen.',
  },
  {
    id: 106, german: 'Geschwister', article: 'die', english: 'siblings', type: 'noun',
    category: 'Family', level: 'A1',
    forms: { nom: 'die Geschwister', akk: 'die Geschwister', dat: 'den Geschwistern', gen: 'der Geschwister', plural: 'die Geschwister' },
    example: 'Hast du Geschwister?',
  },
  {
    id: 107, german: 'Ehe', article: 'die', english: 'marriage, matrimony', type: 'noun',
    category: 'Family', level: 'A2',
    forms: { nom: 'die Ehe', akk: 'die Ehe', dat: 'der Ehe', gen: 'der Ehe', plural: 'die Ehen' },
    example: 'Sie führen eine glückliche Ehe.',
  },
  {
    id: 108, german: 'verheiratet', article: null, english: 'married', type: 'adjective',
    category: 'Family', level: 'A1',
    forms: { komparativ: '—', superlativ: '—' },
    example: 'Bist du verheiratet?',
  },

  // ── Dating & Romance ──────────────────────────────────────────────────────
  {
    id: 109, german: 'lieben', article: null, english: 'to love', type: 'verb',
    category: 'Dating & Romance', level: 'A1',
    forms: { present: ['liebe','liebst','liebt','lieben','liebt','lieben'], praeteritum: 'liebte', perfekt: 'hat geliebt' },
    example: 'Ich liebe dich.',
  },
  {
    id: 110, german: 'sich verlieben', article: null, english: 'to fall in love', type: 'verb',
    category: 'Dating & Romance', level: 'A2',
    forms: { present: ['verliebe mich','verliebst dich','verliebt sich','verlieben uns','verliebt euch','verlieben sich'], praeteritum: 'verliebte sich', perfekt: 'hat sich verliebt' },
    example: 'Ich habe mich verliebt.',
  },
  {
    id: 111, german: 'küssen', article: null, english: 'to kiss', type: 'verb',
    category: 'Dating & Romance', level: 'A2',
    forms: { present: ['küsse','küsst','küsst','küssen','küsst','küssen'], praeteritum: 'küsste', perfekt: 'hat geküsst' },
    example: 'Er küsst sie.',
  },
  {
    id: 112, german: 'Liebe', article: 'die', english: 'love', type: 'noun',
    category: 'Dating & Romance', level: 'A1',
    forms: { nom: 'die Liebe', akk: 'die Liebe', dat: 'der Liebe', gen: 'der Liebe', plural: '— (meist Singular)' },
    example: 'Die Liebe ist wunderbar.',
  },
  {
    id: 113, german: 'Beziehung', article: 'die', english: 'relationship', type: 'noun',
    category: 'Dating & Romance', level: 'A2',
    forms: { nom: 'die Beziehung', akk: 'die Beziehung', dat: 'der Beziehung', gen: 'der Beziehung', plural: 'die Beziehungen' },
    example: 'Sie sind in einer Beziehung.',
  },
  {
    id: 114, german: 'Herz', article: 'das', english: 'heart', type: 'noun',
    category: 'Dating & Romance', level: 'A1',
    forms: { nom: 'das Herz', akk: 'das Herz', dat: 'dem Herzen', gen: 'des Herzens', plural: 'die Herzen' },
    example: 'Du hast mein Herz.',
  },
  {
    id: 115, german: 'Hochzeit', article: 'die', english: 'wedding', type: 'noun',
    category: 'Dating & Romance', level: 'A1',
    forms: { nom: 'die Hochzeit', akk: 'die Hochzeit', dat: 'der Hochzeit', gen: 'der Hochzeit', plural: 'die Hochzeiten' },
    example: 'Die Hochzeit war wunderschön.',
  },
  {
    id: 116, german: 'verliebt', article: null, english: 'in love', type: 'adjective',
    category: 'Dating & Romance', level: 'A2',
    forms: { komparativ: 'verliebter', superlativ: 'am verliebsten' },
    example: 'Er ist total verliebt.',
  },
  {
    id: 117, german: 'romantisch', article: null, english: 'romantic', type: 'adjective',
    category: 'Dating & Romance', level: 'A2',
    forms: { komparativ: 'romantischer', superlativ: 'am romantischsten' },
    example: 'Das ist so romantisch!',
  },
  {
    id: 118, german: 'treu', article: null, english: 'faithful, loyal', type: 'adjective',
    category: 'Dating & Romance', level: 'A2',
    forms: { komparativ: 'treuer', superlativ: 'am treuesten' },
    example: 'Er ist immer treu.',
  },

  // ── Cross-category: common verbs and adjectives ───────────────────────────
  {
    id: 119, german: 'gehen', article: null, english: 'to go, to walk', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['gehe','gehst','geht','gehen','geht','gehen'], praeteritum: 'ging', perfekt: 'ist gegangen' },
    example: 'Ich gehe nach Hause.',
  },
  {
    id: 120, german: 'kommen', article: null, english: 'to come', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['komme','kommst','kommt','kommen','kommt','kommen'], praeteritum: 'kam', perfekt: 'ist gekommen' },
    example: 'Wann kommst du?',
  },
  {
    id: 121, german: 'machen', article: null, english: 'to make, to do', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['mache','machst','macht','machen','macht','machen'], praeteritum: 'machte', perfekt: 'hat gemacht' },
    example: 'Was machst du heute?',
  },
  {
    id: 122, german: 'sagen', article: null, english: 'to say, to tell', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['sage','sagst','sagt','sagen','sagt','sagen'], praeteritum: 'sagte', perfekt: 'hat gesagt' },
    example: 'Was hast du gesagt?',
  },
  {
    id: 123, german: 'sehen', article: null, english: 'to see', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['sehe','siehst','sieht','sehen','seht','sehen'], praeteritum: 'sah', perfekt: 'hat gesehen' },
    example: 'Ich sehe dich.',
  },
  {
    id: 124, german: 'hören', article: null, english: 'to hear, to listen', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['höre','hörst','hört','hören','hört','hören'], praeteritum: 'hörte', perfekt: 'hat gehört' },
    example: 'Hörst du das?',
  },
  {
    id: 125, german: 'sprechen', article: null, english: 'to speak, to talk', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['spreche','sprichst','spricht','sprechen','sprecht','sprechen'], praeteritum: 'sprach', perfekt: 'hat gesprochen' },
    example: 'Sprechen Sie Deutsch?',
  },
  {
    id: 126, german: 'schreiben', article: null, english: 'to write', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['schreibe','schreibst','schreibt','schreiben','schreibt','schreiben'], praeteritum: 'schrieb', perfekt: 'hat geschrieben' },
    example: 'Ich schreibe eine E-Mail.',
  },
  {
    id: 127, german: 'lesen', article: null, english: 'to read', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['lese','liest','liest','lesen','lest','lesen'], praeteritum: 'las', perfekt: 'hat gelesen' },
    example: 'Sie liest ein Buch.',
  },
  {
    id: 128, german: 'wissen', article: null, english: 'to know (a fact)', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['weiß','weißt','weiß','wissen','wisst','wissen'], praeteritum: 'wusste', perfekt: 'hat gewusst' },
    example: 'Ich weiß nicht.',
  },
  {
    id: 129, german: 'kennen', article: null, english: 'to know (a person/place)', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['kenne','kennst','kennt','kennen','kennt','kennen'], praeteritum: 'kannte', perfekt: 'hat gekannt' },
    example: 'Kennst du Berlin?',
  },
  {
    id: 130, german: 'denken', article: null, english: 'to think', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['denke','denkst','denkt','denken','denkt','denken'], praeteritum: 'dachte', perfekt: 'hat gedacht' },
    example: 'Was denkst du?',
  },
  {
    id: 131, german: 'verstehen', article: null, english: 'to understand', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['verstehe','verstehst','versteht','verstehen','versteht','verstehen'], praeteritum: 'verstand', perfekt: 'hat verstanden' },
    example: 'Ich verstehe das nicht.',
  },
  {
    id: 132, german: 'finden', article: null, english: 'to find; to think/consider', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['finde','findest','findet','finden','findet','finden'], praeteritum: 'fand', perfekt: 'hat gefunden' },
    example: 'Ich finde das toll.',
  },
  {
    id: 133, german: 'brauchen', article: null, english: 'to need', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['brauche','brauchst','braucht','brauchen','braucht','brauchen'], praeteritum: 'brauchte', perfekt: 'hat gebraucht' },
    example: 'Ich brauche deine Hilfe.',
  },
  {
    id: 134, german: 'nehmen', article: null, english: 'to take', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['nehme','nimmst','nimmt','nehmen','nehmt','nehmen'], praeteritum: 'nahm', perfekt: 'hat genommen' },
    example: 'Nehmen Sie Platz.',
  },
  {
    id: 135, german: 'geben', article: null, english: 'to give', type: 'verb',
    category: 'Grammar Essentials', level: 'A1',
    forms: { present: ['gebe','gibst','gibt','geben','gebt','geben'], praeteritum: 'gab', perfekt: 'hat gegeben' },
    example: 'Gib mir bitte das Buch.',
  },
  {
    id: 136, german: 'gut', article: null, english: 'good; well', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'besser', superlativ: 'am besten' },
    example: 'Das ist wirklich gut.',
  },
  {
    id: 137, german: 'schlecht', article: null, english: 'bad, poor', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'schlechter', superlativ: 'am schlechtesten' },
    example: 'Das Wetter ist schlecht.',
  },
  {
    id: 138, german: 'groß', article: null, english: 'big, large, tall', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'größer', superlativ: 'am größten' },
    example: 'Das Haus ist groß.',
  },
  {
    id: 139, german: 'klein', article: null, english: 'small, little, short', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'kleiner', superlativ: 'am kleinsten' },
    example: 'Das Kind ist klein.',
  },
  {
    id: 140, german: 'alt', article: null, english: 'old', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'älter', superlativ: 'am ältesten' },
    example: 'Das Haus ist sehr alt.',
  },
  {
    id: 141, german: 'neu', article: null, english: 'new', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'neuer', superlativ: 'am neuesten' },
    example: 'Ich habe ein neues Auto.',
  },
  {
    id: 142, german: 'jung', article: null, english: 'young', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'jünger', superlativ: 'am jüngsten' },
    example: 'Sie ist jung und dynamisch.',
  },
  {
    id: 143, german: 'schön', article: null, english: 'beautiful, nice, lovely', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'schöner', superlativ: 'am schönsten' },
    example: 'Das ist sehr schön.',
  },
  {
    id: 144, german: 'schnell', article: null, english: 'fast, quick', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'schneller', superlativ: 'am schnellsten' },
    example: 'Fahr nicht so schnell!',
  },
  {
    id: 145, german: 'langsam', article: null, english: 'slow, slowly', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'langsamer', superlativ: 'am langsamsten' },
    example: 'Bitte sprechen Sie langsamer.',
  },
  {
    id: 146, german: 'richtig', article: null, english: 'correct, right, proper', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'richtiger', superlativ: 'am richtigsten' },
    example: 'Das ist richtig.',
  },
  {
    id: 147, german: 'falsch', article: null, english: 'wrong, false, incorrect', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'falscher', superlativ: 'am falschsten' },
    example: 'Das ist falsch.',
  },
  {
    id: 148, german: 'wichtig', article: null, english: 'important', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'wichtiger', superlativ: 'am wichtigsten' },
    example: 'Das ist sehr wichtig.',
  },
  {
    id: 149, german: 'schwierig', article: null, english: 'difficult, hard', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'schwieriger', superlativ: 'am schwierigsten' },
    example: 'Deutsch ist schwierig.',
  },
  {
    id: 150, german: 'einfach', article: null, english: 'simple, easy; just, simply', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'einfacher', superlativ: 'am einfachsten' },
    example: 'Das ist ganz einfach.',
  },
  {
    id: 151, german: 'warm', article: null, english: 'warm', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'wärmer', superlativ: 'am wärmsten' },
    example: 'Es ist warm heute.',
  },
  {
    id: 152, german: 'kalt', article: null, english: 'cold', type: 'adjective',
    category: 'Grammar Essentials', level: 'A1',
    forms: { komparativ: 'kälter', superlativ: 'am kältesten' },
    example: 'Das Wasser ist kalt.',
  },
  {
    id: 153, german: 'heute', article: null, english: 'today', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Was machen wir heute?',
  },
  {
    id: 154, german: 'gestern', article: null, english: 'yesterday', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Gestern war es schön.',
  },
  {
    id: 155, german: 'morgen', article: null, english: 'tomorrow; morning', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Bis morgen!',
  },
  {
    id: 156, german: 'jetzt', article: null, english: 'now', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Komm jetzt!',
  },
  {
    id: 157, german: 'immer', article: null, english: 'always', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Er ist immer pünktlich.',
  },
  {
    id: 158, german: 'nie', article: null, english: 'never', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Ich bin nie müde.',
  },
  {
    id: 159, german: 'sehr', article: null, english: 'very, very much', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Danke sehr!',
  },
  {
    id: 160, german: 'noch', article: null, english: 'still, yet; another', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Ich bin noch hier.',
  },
  {
    id: 161, german: 'schon', article: null, english: 'already; really; well', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Bist du schon fertig?',
  },
  {
    id: 162, german: 'auch', article: null, english: 'also, too, as well', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Ich auch!',
  },
  {
    id: 163, german: 'nur', article: null, english: 'only, just', type: 'adverb',
    category: 'Grammar Essentials', level: 'A1',
    forms: null, example: 'Ich habe nur fünf Minuten.',
  },

]

export const VOCAB_CATEGORIES = [
  'All Words',
  'Grammar Essentials',
  'Greetings & Small Talk',
  'Work & Professional',
  'Friends & Casual',
  'Travel & Directions',
  'Shopping',
  'Restaurants & Food',
  'Health & Medical',
  'Emergency',
  'Family',
  'Dating & Romance',
]

export const VOCAB_TYPES = [
  { id: 'all', label: 'All' },
  { id: 'verb', label: 'Verbs' },
  { id: 'noun', label: 'Nouns' },
  { id: 'adjective', label: 'Adj' },
  { id: 'adverb', label: 'Adverbs' },
]

export default vocab
