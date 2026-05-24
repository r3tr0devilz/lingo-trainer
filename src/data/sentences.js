const sentences = [
  // ─── Greetings & Small Talk ───────────────────────────────────────────────
  {
    id: 1,
    category: "Greetings & Small Talk",
    english: "Good morning! How are you?",
    german: "Guten Morgen! Wie geht es Ihnen?",
    pronunciation: "GOO-ten MOR-gen. vee gayt es EE-nen"
  },
  {
    id: 2,
    category: "Greetings & Small Talk",
    english: "Good evening! Nice to meet you.",
    german: "Guten Abend! Schön, Sie kennenzulernen.",
    pronunciation: "GOO-ten AH-bent. shurn, zee KEN-en-tsoo-lair-nen"
  },
  {
    id: 3,
    category: "Greetings & Small Talk",
    english: "Where have you been?",
    german: "Wo waren Sie?",
    pronunciation: "voh VAH-ren zee"
  },
  {
    id: 4,
    category: "Greetings & Small Talk",
    english: "I'm doing well, thank you.",
    german: "Mir geht es gut, danke.",
    pronunciation: "meer gayt es goot, DAHN-keh"
  },
  {
    id: 5,
    category: "Greetings & Small Talk",
    english: "What's your name?",
    german: "Wie heißen Sie?",
    pronunciation: "vee HY-ssen zee"
  },
  {
    id: 6,
    category: "Greetings & Small Talk",
    english: "My name is Maria.",
    german: "Ich heiße Maria.",
    pronunciation: "ikh HY-sse mah-REE-ah"
  },
  {
    id: 7,
    category: "Greetings & Small Talk",
    english: "Where are you from?",
    german: "Woher kommen Sie?",
    pronunciation: "voh-HAIR KOM-men zee"
  },
  {
    id: 8,
    category: "Greetings & Small Talk",
    english: "I'm from the United States.",
    german: "Ich komme aus den USA.",
    pronunciation: "ikh KOM-eh owss dayn oo-es-AH"
  },
  {
    id: 9,
    category: "Greetings & Small Talk",
    english: "Do you speak English?",
    german: "Sprechen Sie Englisch?",
    pronunciation: "SHPREH-khen zee ENG-lish"
  },
  {
    id: 10,
    category: "Greetings & Small Talk",
    english: "I speak a little German.",
    german: "Ich spreche ein bisschen Deutsch.",
    pronunciation: "ikh SHPREH-kheh ine BISS-khen doych"
  },
  {
    id: 11,
    category: "Greetings & Small Talk",
    english: "Please speak more slowly.",
    german: "Bitte sprechen Sie langsamer.",
    pronunciation: "BIT-eh SHPREH-khen zee LAHNG-zah-mer"
  },
  {
    id: 12,
    category: "Greetings & Small Talk",
    english: "I don't understand.",
    german: "Ich verstehe nicht.",
    pronunciation: "ikh fehr-SHTAY-eh nikht"
  },
  {
    id: 13,
    category: "Greetings & Small Talk",
    english: "Can you repeat that, please?",
    german: "Können Sie das bitte wiederholen?",
    pronunciation: "KUR-nen zee dahs BIT-eh VEE-der-hoh-len"
  },
  {
    id: 14,
    category: "Greetings & Small Talk",
    english: "What does that mean?",
    german: "Was bedeutet das?",
    pronunciation: "vahs beh-DOY-tet dahs"
  },
  {
    id: 15,
    category: "Greetings & Small Talk",
    english: "How's the weather today?",
    german: "Wie ist das Wetter heute?",
    pronunciation: "vee ist dahs VET-ter HOY-teh"
  },
  {
    id: 16,
    category: "Greetings & Small Talk",
    english: "It's a beautiful day, isn't it?",
    german: "Es ist ein schöner Tag, nicht wahr?",
    pronunciation: "es ist ine SHUR-ner tahk, nikht vahr"
  },
  {
    id: 17,
    category: "Greetings & Small Talk",
    english: "See you tomorrow!",
    german: "Bis morgen!",
    pronunciation: "biss MOR-gen"
  },
  {
    id: 18,
    category: "Greetings & Small Talk",
    english: "Take care of yourself.",
    german: "Pass auf dich auf.",
    pronunciation: "pahss owf dikh owf"
  },
  {
    id: 19,
    category: "Greetings & Small Talk",
    english: "Have a great weekend!",
    german: "Schönes Wochenende!",
    pronunciation: "SHUR-nes VOH-khen-en-deh"
  },
  {
    id: 20,
    category: "Greetings & Small Talk",
    english: "Long time no see!",
    german: "Lange nicht gesehen!",
    pronunciation: "LAHNG-eh nikht geh-ZAY-en"
  },
  {
    id: 21,
    category: "Greetings & Small Talk",
    english: "How was your trip?",
    german: "Wie war Ihre Reise?",
    pronunciation: "vee vahr EE-reh RY-zeh"
  },
  {
    id: 22,
    category: "Greetings & Small Talk",
    english: "Are you enjoying Berlin?",
    german: "Gefällt Ihnen Berlin?",
    pronunciation: "geh-FELT EE-nen behr-LEEN"
  },
  {
    id: 23,
    category: "Greetings & Small Talk",
    english: "What do you do for work?",
    german: "Was machen Sie beruflich?",
    pronunciation: "vahs MAHKH-en zee beh-ROOF-likh"
  },
  {
    id: 24,
    category: "Greetings & Small Talk",
    english: "I'm a teacher.",
    german: "Ich bin Lehrer.",
    pronunciation: "ikh bin LAY-rer"
  },
  {
    id: 25,
    category: "Greetings & Small Talk",
    english: "Do you have any siblings?",
    german: "Haben Sie Geschwister?",
    pronunciation: "HAH-ben zee geh-SHVIS-ter"
  },
  {
    id: 26,
    category: "Greetings & Small Talk",
    english: "I have two brothers.",
    german: "Ich habe zwei Brüder.",
    pronunciation: "ikh HAH-beh tsvy BROO-der"
  },
  {
    id: 27,
    category: "Greetings & Small Talk",
    english: "What are your hobbies?",
    german: "Was sind Ihre Hobbys?",
    pronunciation: "vahs zint EE-reh HOB-bees"
  },
  {
    id: 28,
    category: "Greetings & Small Talk",
    english: "I enjoy reading and hiking.",
    german: "Ich lese gerne und wandere.",
    pronunciation: "ikh LAY-zeh GEHR-neh oont VAHN-deh-reh"
  },
  {
    id: 29,
    category: "Greetings & Small Talk",
    english: "Good night! Sleep well.",
    german: "Gute Nacht! Schlaf gut.",
    pronunciation: "GOO-teh nakht. shlahf goot"
  },
  {
    id: 30,
    category: "Greetings & Small Talk",
    english: "It was nice talking to you.",
    german: "Es war schön, mit Ihnen zu sprechen.",
    pronunciation: "es vahr shurn, mit EE-nen tsoo SHPREH-khen"
  },
  {
    id: 31,
    category: "Greetings & Small Talk",
    english: "I have to go now.",
    german: "Ich muss jetzt gehen.",
    pronunciation: "ikh mooss yetst GAY-en"
  },
  {
    id: 32,
    category: "Greetings & Small Talk",
    english: "Say hello to your family.",
    german: "Grüßen Sie Ihre Familie.",
    pronunciation: "GROO-ssen zee EE-reh fah-MEE-lee-eh"
  },

  // ─── Work & Professional ──────────────────────────────────────────────────
  {
    id: 101,
    category: "Work & Professional",
    english: "I have a meeting at ten o'clock.",
    german: "Ich habe um zehn Uhr eine Besprechung.",
    pronunciation: "ikh HAH-beh oom tsayn oor EYE-neh beh-SPREH-khoong"
  },
  {
    id: 102,
    category: "Work & Professional",
    english: "Can we reschedule the appointment?",
    german: "Können wir den Termin verschieben?",
    pronunciation: "KUR-nen veer dayn tehr-MEEN fehr-SHEE-ben"
  },
  {
    id: 103,
    category: "Work & Professional",
    english: "Please send me the report by Friday.",
    german: "Bitte schicken Sie mir den Bericht bis Freitag.",
    pronunciation: "BIT-eh SHIK-en zee meer dayn beh-RIKHT biss FRY-tahk"
  },
  {
    id: 104,
    category: "Work & Professional",
    english: "I work in marketing.",
    german: "Ich arbeite im Marketing.",
    pronunciation: "ikh AR-by-teh im MARK-eh-ting"
  },
  {
    id: 105,
    category: "Work & Professional",
    english: "Who is responsible for this project?",
    german: "Wer ist für dieses Projekt verantwortlich?",
    pronunciation: "vehr ist fyur DEE-zes proh-YEKT fehr-ANT-vort-likh"
  },
  {
    id: 106,
    category: "Work & Professional",
    english: "The deadline is next Monday.",
    german: "Die Frist ist nächsten Montag.",
    pronunciation: "dee frist ist NEKS-ten MON-tahk"
  },
  {
    id: 107,
    category: "Work & Professional",
    english: "I need your signature on this document.",
    german: "Ich brauche Ihre Unterschrift auf diesem Dokument.",
    pronunciation: "ikh BROW-kheh EE-reh OON-ter-shrift owf DEE-zem doh-koo-MENT"
  },
  {
    id: 108,
    category: "Work & Professional",
    english: "Could you review this proposal?",
    german: "Könnten Sie diesen Vorschlag prüfen?",
    pronunciation: "KUR-ten zee DEE-zen FOR-shlahk PROO-fen"
  },
  {
    id: 109,
    category: "Work & Professional",
    english: "I'm out of office until Wednesday.",
    german: "Ich bin bis Mittwoch nicht im Büro.",
    pronunciation: "ikh bin biss MIT-vokh nikht im boo-ROH"
  },
  {
    id: 110,
    category: "Work & Professional",
    english: "Let's set up a conference call.",
    german: "Lassen Sie uns eine Telefonkonferenz einrichten.",
    pronunciation: "LAHS-sen zee oons EYE-neh teh-leh-FON-kon-feh-rents EIN-rikh-ten"
  },
  {
    id: 111,
    category: "Work & Professional",
    english: "I'd like to apply for this position.",
    german: "Ich möchte mich für diese Stelle bewerben.",
    pronunciation: "ikh MURK-teh mikh fyur DEE-zeh SHTEL-eh beh-VEHR-ben"
  },
  {
    id: 112,
    category: "Work & Professional",
    english: "What is the salary for this role?",
    german: "Was ist das Gehalt für diese Stelle?",
    pronunciation: "vahs ist dahs geh-HALT fyur DEE-zeh SHTEL-eh"
  },
  {
    id: 113,
    category: "Work & Professional",
    english: "The client is waiting in the lobby.",
    german: "Der Kunde wartet in der Lobby.",
    pronunciation: "dehr KOON-deh VAR-tet in dehr LOB-ee"
  },
  {
    id: 114,
    category: "Work & Professional",
    english: "We need to cut costs this quarter.",
    german: "Wir müssen dieses Quartal Kosten reduzieren.",
    pronunciation: "veer MOOS-sen DEE-zes kvar-TAHL KOS-ten reh-doo-TSEE-ren"
  },
  {
    id: 115,
    category: "Work & Professional",
    english: "The presentation went very well.",
    german: "Die Präsentation lief sehr gut.",
    pronunciation: "dee preh-zen-tah-TSYOHN leef zayr goot"
  },
  {
    id: 116,
    category: "Work & Professional",
    english: "Please copy me on that email.",
    german: "Bitte setzen Sie mich in CC für diese E-Mail.",
    pronunciation: "BIT-eh ZET-sen zee mikh in tseh-TSEH fyur DEE-zeh EE-mayl"
  },
  {
    id: 117,
    category: "Work & Professional",
    english: "I'm working from home today.",
    german: "Ich arbeite heute von zu Hause.",
    pronunciation: "ikh AR-by-teh HOY-teh fon tsoo HOW-zeh"
  },
  {
    id: 118,
    category: "Work & Professional",
    english: "Can I take a vacation next month?",
    german: "Kann ich nächsten Monat Urlaub nehmen?",
    pronunciation: "kahn ikh NEKS-ten MOH-naht OOR-lowp NAY-men"
  },
  {
    id: 119,
    category: "Work & Professional",
    english: "This task is urgent.",
    german: "Diese Aufgabe ist dringend.",
    pronunciation: "DEE-zeh OWF-gah-beh ist DRING-ent"
  },
  {
    id: 120,
    category: "Work & Professional",
    english: "I'll finish it by end of day.",
    german: "Ich werde es bis Tagesende fertig haben.",
    pronunciation: "ikh VEHR-deh es biss TAH-ges-en-deh FEHR-tikh HAH-ben"
  },
  {
    id: 121,
    category: "Work & Professional",
    english: "Let's brainstorm some ideas.",
    german: "Lassen Sie uns Ideen sammeln.",
    pronunciation: "LAHS-sen zee oons ee-DAY-en ZAH-meln"
  },
  {
    id: 122,
    category: "Work & Professional",
    english: "I disagree with that approach.",
    german: "Ich bin mit diesem Ansatz nicht einverstanden.",
    pronunciation: "ikh bin mit DEE-zem AN-zahts nikht EIN-fehr-shtan-den"
  },
  {
    id: 123,
    category: "Work & Professional",
    english: "Could you train me on this software?",
    german: "Könnten Sie mich in dieser Software einweisen?",
    pronunciation: "KUR-ten zee mikh in DEE-zer SOFT-vehr EIN-vy-zen"
  },
  {
    id: 124,
    category: "Work & Professional",
    english: "Sales numbers are up this month.",
    german: "Die Verkaufszahlen sind diesen Monat gestiegen.",
    pronunciation: "dee fehr-KOWFS-tsah-len zint DEE-zen MOH-naht geh-SHTEE-gen"
  },
  {
    id: 125,
    category: "Work & Professional",
    english: "I have a job interview tomorrow.",
    german: "Ich habe morgen ein Vorstellungsgespräch.",
    pronunciation: "ikh HAH-beh MOR-gen ine FOR-shtel-oongs-geh-shprekh"
  },
  {
    id: 126,
    category: "Work & Professional",
    english: "The office is closed on public holidays.",
    german: "Das Büro ist an Feiertagen geschlossen.",
    pronunciation: "dahs boo-ROH ist ahn FY-er-tah-gen geh-SHLOS-sen"
  },
  {
    id: 127,
    category: "Work & Professional",
    english: "I'll send you the invoice.",
    german: "Ich schicke Ihnen die Rechnung.",
    pronunciation: "ikh SHIK-eh EE-nen dee REKH-noong"
  },
  {
    id: 128,
    category: "Work & Professional",
    english: "Let's wrap up for today.",
    german: "Lassen Sie uns für heute Schluss machen.",
    pronunciation: "LAHS-sen zee oons fyur HOY-teh shloos MAHKH-en"
  },
  {
    id: 129,
    category: "Work & Professional",
    english: "I need access to the shared drive.",
    german: "Ich brauche Zugang zum gemeinsamen Laufwerk.",
    pronunciation: "ikh BROW-kheh TSOO-gahng tsom geh-MINE-zah-men LOWF-vehrk"
  },
  {
    id: 130,
    category: "Work & Professional",
    english: "Great teamwork, everyone!",
    german: "Tolle Teamarbeit, alle zusammen!",
    pronunciation: "TOL-eh TEEM-ar-bite, AL-eh tsoo-ZAH-men"
  },
  {
    id: 131,
    category: "Work & Professional",
    english: "The budget was approved.",
    german: "Das Budget wurde genehmigt.",
    pronunciation: "dahs boo-DJEH VOOR-deh geh-NAY-mikt"
  },
  {
    id: 132,
    category: "Work & Professional",
    english: "Please confirm receipt of this email.",
    german: "Bitte bestätigen Sie den Eingang dieser E-Mail.",
    pronunciation: "BIT-eh beh-SHTAY-ti-gen zee dayn EIN-gahng DEE-zer EE-mayl"
  },

  // ─── Friends & Casual ─────────────────────────────────────────────────────
  {
    id: 201,
    category: "Friends & Casual",
    english: "Hey, what's up?",
    german: "Hey, was geht ab?",
    pronunciation: "hey, vahs gayt ahp"
  },
  {
    id: 202,
    category: "Friends & Casual",
    english: "Are you free tonight?",
    german: "Hast du heute Abend Zeit?",
    pronunciation: "hahst doo HOY-teh AH-bent tsyt"
  },
  {
    id: 203,
    category: "Friends & Casual",
    english: "Let's hang out this weekend.",
    german: "Lass uns dieses Wochenende was unternehmen.",
    pronunciation: "lahs oons DEE-zes VOH-khen-en-deh vahs OON-ter-nay-men"
  },
  {
    id: 204,
    category: "Friends & Casual",
    english: "That's hilarious!",
    german: "Das ist zum Totlachen!",
    pronunciation: "dahs ist tsom TOT-lahkh-en"
  },
  {
    id: 205,
    category: "Friends & Casual",
    english: "I'm so tired today.",
    german: "Ich bin heute so müde.",
    pronunciation: "ikh bin HOY-teh zoh MOO-deh"
  },
  {
    id: 206,
    category: "Friends & Casual",
    english: "Did you see that movie?",
    german: "Hast du den Film gesehen?",
    pronunciation: "hahst doo dayn film geh-ZAY-en"
  },
  {
    id: 207,
    category: "Friends & Casual",
    english: "No way! I can't believe it.",
    german: "Kein Witz! Das glaube ich nicht.",
    pronunciation: "kine vits! dahs GLOW-beh ikh nikht"
  },
  {
    id: 208,
    category: "Friends & Casual",
    english: "You look great today!",
    german: "Du siehst heute toll aus!",
    pronunciation: "doo zeest HOY-teh tol owss"
  },
  {
    id: 209,
    category: "Friends & Casual",
    english: "Can I borrow your charger?",
    german: "Kann ich dein Ladekabel ausleihen?",
    pronunciation: "kahn ikh dyne LAH-deh-kah-bel OWS-ly-en"
  },
  {
    id: 210,
    category: "Friends & Casual",
    english: "I'm starving. Let's get food.",
    german: "Ich habe Riesenhunger. Lass uns was essen.",
    pronunciation: "ikh HAH-beh REE-zen-hoong-er. lahs oons vahs ES-sen"
  },
  {
    id: 211,
    category: "Friends & Casual",
    english: "What kind of music do you like?",
    german: "Was für Musik magst du?",
    pronunciation: "vahs fyur moo-ZEEK mahkst doo"
  },
  {
    id: 212,
    category: "Friends & Casual",
    english: "I love that band.",
    german: "Ich liebe diese Band.",
    pronunciation: "ikh LEE-beh DEE-zeh bant"
  },
  {
    id: 213,
    category: "Friends & Casual",
    english: "Do you want to play video games?",
    german: "Willst du Videospiele spielen?",
    pronunciation: "vilst doo VEE-deh-oh-shpee-leh SHPEE-len"
  },
  {
    id: 214,
    category: "Friends & Casual",
    english: "That party was so much fun.",
    german: "Die Party hat so viel Spaß gemacht.",
    pronunciation: "dee PAR-tee haht zoh feel shpahs geh-MAHKHT"
  },
  {
    id: 215,
    category: "Friends & Casual",
    english: "How did your date go?",
    german: "Wie lief dein Date?",
    pronunciation: "vee leef dyne dayt"
  },
  {
    id: 216,
    category: "Friends & Casual",
    english: "I'm not feeling well today.",
    german: "Ich fühle mich heute nicht gut.",
    pronunciation: "ikh FOO-leh mikh HOY-teh nikht goot"
  },
  {
    id: 217,
    category: "Friends & Casual",
    english: "Wanna grab a coffee?",
    german: "Willst du einen Kaffee trinken gehen?",
    pronunciation: "vilst doo EYE-nen KAH-feh TRIN-ken GAY-en"
  },
  {
    id: 218,
    category: "Friends & Casual",
    english: "You were right about that.",
    german: "Da hattest du recht.",
    pronunciation: "dah HAH-test doo rekht"
  },
  {
    id: 219,
    category: "Friends & Casual",
    english: "Let me know if you need anything.",
    german: "Sag mir Bescheid, wenn du was brauchst.",
    pronunciation: "zahk meer beh-SHIDE, ven doo vahs browkhst"
  },
  {
    id: 220,
    category: "Friends & Casual",
    english: "Stop worrying so much!",
    german: "Hör auf, dir so viele Sorgen zu machen!",
    pronunciation: "hur owf, deer zoh FEE-leh ZOR-gen tsoo MAHKH-en"
  },
  {
    id: 221,
    category: "Friends & Casual",
    english: "That's so annoying.",
    german: "Das ist so nervig.",
    pronunciation: "dahs ist zoh NEHR-vikh"
  },
  {
    id: 222,
    category: "Friends & Casual",
    english: "Are you coming to the barbecue?",
    german: "Kommst du zum Grillen?",
    pronunciation: "komst doo tsom GRIL-en"
  },
  {
    id: 223,
    category: "Friends & Casual",
    english: "I'll be there in ten minutes.",
    german: "Ich bin in zehn Minuten da.",
    pronunciation: "ikh bin in tsayn mee-NOO-ten dah"
  },
  {
    id: 224,
    category: "Friends & Casual",
    english: "My phone is almost dead.",
    german: "Mein Handy ist fast leer.",
    pronunciation: "mine HAN-dee ist fahst layr"
  },
  {
    id: 225,
    category: "Friends & Casual",
    english: "I just saw the news.",
    german: "Ich habe gerade die Nachrichten gesehen.",
    pronunciation: "ikh HAH-beh geh-RAH-deh dee NAHKH-rikh-ten geh-ZAY-en"
  },
  {
    id: 226,
    category: "Friends & Casual",
    english: "We should do this more often.",
    german: "Das sollten wir öfter machen.",
    pronunciation: "dahs ZOL-ten veer UR-fter MAHKH-en"
  },
  {
    id: 227,
    category: "Friends & Casual",
    english: "I miss you.",
    german: "Ich vermisse dich.",
    pronunciation: "ikh fehr-MIS-seh dikh"
  },
  {
    id: 228,
    category: "Friends & Casual",
    english: "Cheers! To good times.",
    german: "Prost! Auf gute Zeiten.",
    pronunciation: "prohst! owf GOO-teh TSYE-ten"
  },
  {
    id: 229,
    category: "Friends & Casual",
    english: "Want to split the bill?",
    german: "Wollen wir die Rechnung teilen?",
    pronunciation: "VOL-en veer dee REKH-noong TY-len"
  },
  {
    id: 230,
    category: "Friends & Casual",
    english: "You're such a good friend.",
    german: "Du bist so ein guter Freund.",
    pronunciation: "doo bist zoh ine GOO-ter froynt"
  },
  {
    id: 231,
    category: "Friends & Casual",
    english: "I haven't slept well lately.",
    german: "Ich habe in letzter Zeit schlecht geschlafen.",
    pronunciation: "ikh HAH-beh in LETS-ter tsyt shlekht geh-SHLAH-fen"
  },
  {
    id: 232,
    category: "Friends & Casual",
    english: "That's the best idea ever!",
    german: "Das ist die beste Idee überhaupt!",
    pronunciation: "dahs ist dee BES-teh ee-DAY-eh OO-ber-howpt"
  },

  // ─── Travel & Directions ──────────────────────────────────────────────────
  {
    id: 301,
    category: "Travel & Directions",
    english: "Where is the train station?",
    german: "Wo ist der Bahnhof?",
    pronunciation: "voh ist dehr BAHN-hohf"
  },
  {
    id: 302,
    category: "Travel & Directions",
    english: "How do I get to the city center?",
    german: "Wie komme ich in die Innenstadt?",
    pronunciation: "vee KOM-eh ikh in dee IN-en-shtat"
  },
  {
    id: 303,
    category: "Travel & Directions",
    english: "Turn left at the traffic light.",
    german: "Biegen Sie an der Ampel links ab.",
    pronunciation: "BEE-gen zee ahn dehr AHM-pel links ahp"
  },
  {
    id: 304,
    category: "Travel & Directions",
    english: "It's straight ahead.",
    german: "Es ist geradeaus.",
    pronunciation: "es ist geh-RAH-deh-owss"
  },
  {
    id: 305,
    category: "Travel & Directions",
    english: "How far is it from here?",
    german: "Wie weit ist es von hier?",
    pronunciation: "vee vyt ist es fon heer"
  },
  {
    id: 306,
    category: "Travel & Directions",
    english: "I'd like a one-way ticket to Munich.",
    german: "Ich möchte eine einfache Fahrkarte nach München.",
    pronunciation: "ikh MURK-teh EYE-neh EIN-fakh-eh FAHR-kar-teh nahkh MOON-khen"
  },
  {
    id: 307,
    category: "Travel & Directions",
    english: "When does the next bus arrive?",
    german: "Wann kommt der nächste Bus?",
    pronunciation: "vahn komt dehr NEKHS-teh boos"
  },
  {
    id: 308,
    category: "Travel & Directions",
    english: "I missed my train.",
    german: "Ich habe meinen Zug verpasst.",
    pronunciation: "ikh HAH-beh MY-nen tsook fehr-PAHST"
  },
  {
    id: 309,
    category: "Travel & Directions",
    english: "Is this seat taken?",
    german: "Ist dieser Platz besetzt?",
    pronunciation: "ist DEE-zer plahts beh-ZETST"
  },
  {
    id: 310,
    category: "Travel & Directions",
    english: "I have a reservation at this hotel.",
    german: "Ich habe eine Reservierung in diesem Hotel.",
    pronunciation: "ikh HAH-beh EYE-neh reh-zehr-VEER-oong in DEE-zem hoh-TEL"
  },
  {
    id: 311,
    category: "Travel & Directions",
    english: "Can I have a map of the city?",
    german: "Kann ich einen Stadtplan bekommen?",
    pronunciation: "kahn ikh EYE-nen SHTAT-plahn beh-KOM-en"
  },
  {
    id: 312,
    category: "Travel & Directions",
    english: "My luggage is lost.",
    german: "Mein Gepäck ist verloren gegangen.",
    pronunciation: "mine geh-PEK ist fehr-LOH-ren geh-GAHNG-en"
  },
  {
    id: 313,
    category: "Travel & Directions",
    english: "Which platform does the train leave from?",
    german: "Von welchem Gleis fährt der Zug ab?",
    pronunciation: "fon VEL-khem glise fehrt dehr tsook ahp"
  },
  {
    id: 314,
    category: "Travel & Directions",
    english: "I need a taxi to the airport.",
    german: "Ich brauche ein Taxi zum Flughafen.",
    pronunciation: "ikh BROW-kheh ine TAHK-see tsom FLOOK-hah-fen"
  },
  {
    id: 315,
    category: "Travel & Directions",
    english: "How long does the journey take?",
    german: "Wie lange dauert die Fahrt?",
    pronunciation: "vee LAHNG-eh DOW-ert dee fahrt"
  },
  {
    id: 316,
    category: "Travel & Directions",
    english: "Do you have any rooms available?",
    german: "Haben Sie noch Zimmer frei?",
    pronunciation: "HAH-ben zee nokh TSIM-er fry"
  },
  {
    id: 317,
    category: "Travel & Directions",
    english: "I'd like to check in, please.",
    german: "Ich möchte einchecken, bitte.",
    pronunciation: "ikh MURK-teh EIN-chek-en, BIT-eh"
  },
  {
    id: 318,
    category: "Travel & Directions",
    english: "What time is check-out?",
    german: "Wann ist der Check-out?",
    pronunciation: "vahn ist dehr CHEK-owt"
  },
  {
    id: 319,
    category: "Travel & Directions",
    english: "Is breakfast included?",
    german: "Ist das Frühstück inklusive?",
    pronunciation: "ist dahs FROO-shtook in-kloo-ZEE-veh"
  },
  {
    id: 320,
    category: "Travel & Directions",
    english: "Could you call me a cab?",
    german: "Könnten Sie mir ein Taxi rufen?",
    pronunciation: "KUR-ten zee meer ine TAHK-see ROO-fen"
  },
  {
    id: 321,
    category: "Travel & Directions",
    english: "I'm looking for the museum.",
    german: "Ich suche das Museum.",
    pronunciation: "ikh ZOO-kheh dahs moo-ZAY-oom"
  },
  {
    id: 322,
    category: "Travel & Directions",
    english: "Is there a pharmacy nearby?",
    german: "Gibt es eine Apotheke in der Nähe?",
    pronunciation: "gipt es EYE-neh ah-poh-TAY-keh in dehr NAY-eh"
  },
  {
    id: 323,
    category: "Travel & Directions",
    english: "I'm lost. Can you help me?",
    german: "Ich habe mich verlaufen. Können Sie mir helfen?",
    pronunciation: "ikh HAH-beh mikh fehr-LOW-fen. KUR-nen zee meer HEL-fen"
  },
  {
    id: 324,
    category: "Travel & Directions",
    english: "Cross the bridge and turn right.",
    german: "Überqueren Sie die Brücke und biegen Sie rechts ab.",
    pronunciation: "OO-ber-kveh-ren zee dee BROO-keh oont BEE-gen zee rekhts ahp"
  },
  {
    id: 325,
    category: "Travel & Directions",
    english: "My flight is delayed.",
    german: "Mein Flug hat Verspätung.",
    pronunciation: "mine flook haht fehr-SHPAY-toong"
  },
  {
    id: 326,
    category: "Travel & Directions",
    english: "Where can I rent a car?",
    german: "Wo kann ich ein Auto mieten?",
    pronunciation: "voh kahn ikh ine OW-toh MEE-ten"
  },
  {
    id: 327,
    category: "Travel & Directions",
    english: "Do I need a visa?",
    german: "Brauche ich ein Visum?",
    pronunciation: "BROW-kheh ikh ine VEE-zoom"
  },
  {
    id: 328,
    category: "Travel & Directions",
    english: "The view from here is beautiful.",
    german: "Der Ausblick von hier ist wunderschön.",
    pronunciation: "dehr OWS-blik fon heer ist VOON-der-shurn"
  },
  {
    id: 329,
    category: "Travel & Directions",
    english: "Can I use this bus pass here?",
    german: "Kann ich diesen Buspass hier benutzen?",
    pronunciation: "kahn ikh DEE-zen BOOS-pahs heer beh-NOOT-sen"
  },
  {
    id: 330,
    category: "Travel & Directions",
    english: "I'd like a window seat.",
    german: "Ich hätte gerne einen Fensterplatz.",
    pronunciation: "ikh HET-eh GEHR-neh EYE-nen FEN-ster-plahts"
  },
  {
    id: 331,
    category: "Travel & Directions",
    english: "The subway is on the next corner.",
    german: "Die U-Bahn ist an der nächsten Ecke.",
    pronunciation: "dee OO-bahn ist ahn dehr NEKHS-ten EK-eh"
  },
  {
    id: 332,
    category: "Travel & Directions",
    english: "Is it safe to walk here at night?",
    german: "Ist es sicher, hier nachts zu Fuß zu gehen?",
    pronunciation: "ist es ZIKH-er, heer nahkhts tsoo foos tsoo GAY-en"
  },

  // ─── Shopping ─────────────────────────────────────────────────────────────
  {
    id: 401,
    category: "Shopping",
    english: "How much does this cost?",
    german: "Was kostet das?",
    pronunciation: "vahs KOS-tet dahs"
  },
  {
    id: 402,
    category: "Shopping",
    english: "Do you have this in a larger size?",
    german: "Haben Sie das in einer größeren Größe?",
    pronunciation: "HAH-ben zee dahs in EYE-ner GRUR-sse-ren GRUR-sse"
  },
  {
    id: 403,
    category: "Shopping",
    english: "Can I try this on?",
    german: "Kann ich das anprobieren?",
    pronunciation: "kahn ikh dahs AHN-proh-bee-ren"
  },
  {
    id: 404,
    category: "Shopping",
    english: "Where is the fitting room?",
    german: "Wo ist die Umkleidekabine?",
    pronunciation: "voh ist dee OOM-kly-deh-kah-bee-neh"
  },
  {
    id: 405,
    category: "Shopping",
    english: "I'll take this one.",
    german: "Ich nehme dieses.",
    pronunciation: "ikh NAY-meh DEE-zes"
  },
  {
    id: 406,
    category: "Shopping",
    english: "Do you accept credit cards?",
    german: "Akzeptieren Sie Kreditkarten?",
    pronunciation: "ahk-tsep-TEER-en zee kre-DEET-kar-ten"
  },
  {
    id: 407,
    category: "Shopping",
    english: "Can I pay by card?",
    german: "Kann ich mit Karte zahlen?",
    pronunciation: "kahn ikh mit KAR-teh TSAH-len"
  },
  {
    id: 408,
    category: "Shopping",
    english: "Is there a discount?",
    german: "Gibt es einen Rabatt?",
    pronunciation: "gipt es EYE-nen rah-BAHT"
  },
  {
    id: 409,
    category: "Shopping",
    english: "I'd like to return this item.",
    german: "Ich möchte diesen Artikel zurückgeben.",
    pronunciation: "ikh MURK-teh DEE-zen ar-TEE-kel tsoo-ROOK-gay-ben"
  },
  {
    id: 410,
    category: "Shopping",
    english: "Do you have a receipt?",
    german: "Haben Sie einen Kassenbon?",
    pronunciation: "HAH-ben zee EYE-nen KAHS-sen-bon"
  },
  {
    id: 411,
    category: "Shopping",
    english: "I'm just browsing, thank you.",
    german: "Ich schaue mich nur um, danke.",
    pronunciation: "ikh SHOW-eh mikh noor oom, DAHN-keh"
  },
  {
    id: 412,
    category: "Shopping",
    english: "Could you wrap this as a gift?",
    german: "Können Sie das als Geschenk einpacken?",
    pronunciation: "KUR-nen zee dahs ahls geh-SHENK EIN-pahk-en"
  },
  {
    id: 413,
    category: "Shopping",
    english: "What time does the store close?",
    german: "Wann schließt das Geschäft?",
    pronunciation: "vahn shleest dahs geh-SHEFT"
  },
  {
    id: 414,
    category: "Shopping",
    english: "Do you deliver?",
    german: "Liefern Sie?",
    pronunciation: "LEE-fern zee"
  },
  {
    id: 415,
    category: "Shopping",
    english: "This is too expensive.",
    german: "Das ist zu teuer.",
    pronunciation: "dahs ist tsoo TOY-er"
  },
  {
    id: 416,
    category: "Shopping",
    english: "I'm looking for a birthday gift.",
    german: "Ich suche ein Geburtstagsgeschenk.",
    pronunciation: "ikh ZOO-kheh ine geh-BOORTS-tahks-geh-shenk"
  },
  {
    id: 417,
    category: "Shopping",
    english: "Where is the supermarket?",
    german: "Wo ist der Supermarkt?",
    pronunciation: "voh ist dehr ZOO-per-markt"
  },
  {
    id: 418,
    category: "Shopping",
    english: "Can I get a bag, please?",
    german: "Kann ich bitte eine Tüte haben?",
    pronunciation: "kahn ikh BIT-eh EYE-neh TOO-teh HAH-ben"
  },
  {
    id: 419,
    category: "Shopping",
    english: "This is on sale.",
    german: "Das ist im Angebot.",
    pronunciation: "dahs ist im AHN-geh-boht"
  },
  {
    id: 420,
    category: "Shopping",
    english: "Do you have a loyalty card?",
    german: "Haben Sie eine Kundenkarte?",
    pronunciation: "HAH-ben zee EYE-neh KOON-den-kar-teh"
  },
  {
    id: 421,
    category: "Shopping",
    english: "I need a medium size.",
    german: "Ich brauche Größe M.",
    pronunciation: "ikh BROW-kheh GRUR-sse em"
  },
  {
    id: 422,
    category: "Shopping",
    english: "These shoes hurt my feet.",
    german: "Diese Schuhe drücken.",
    pronunciation: "DEE-zeh SHOO-eh DROO-ken"
  },
  {
    id: 423,
    category: "Shopping",
    english: "I'll think about it.",
    german: "Ich überlege es mir.",
    pronunciation: "ikh OO-ber-lay-geh es meer"
  },
  {
    id: 424,
    category: "Shopping",
    english: "Is there a sale on right now?",
    german: "Gibt es gerade einen Ausverkauf?",
    pronunciation: "gipt es geh-RAH-deh EYE-nen OWS-fehr-kowf"
  },
  {
    id: 425,
    category: "Shopping",
    english: "Can I exchange this for a different color?",
    german: "Kann ich das gegen eine andere Farbe umtauschen?",
    pronunciation: "kahn ikh dahs GAY-gen EYE-neh AHN-deh-reh FAR-beh OOM-tow-shen"
  },
  {
    id: 426,
    category: "Shopping",
    english: "I need batteries for this.",
    german: "Ich brauche Batterien dafür.",
    pronunciation: "ikh BROW-kheh bah-teh-REE-en dah-FYUR"
  },
  {
    id: 427,
    category: "Shopping",
    english: "That color doesn't suit me.",
    german: "Diese Farbe steht mir nicht.",
    pronunciation: "DEE-zeh FAR-beh shtayt meer nikht"
  },
  {
    id: 428,
    category: "Shopping",
    english: "Here is my payment.",
    german: "Hier ist meine Zahlung.",
    pronunciation: "heer ist MY-neh TSAH-loong"
  },
  {
    id: 429,
    category: "Shopping",
    english: "Do you have anything cheaper?",
    german: "Haben Sie etwas Günstigeres?",
    pronunciation: "HAH-ben zee ET-vahs GOONS-ti-geh-res"
  },
  {
    id: 430,
    category: "Shopping",
    english: "Keep the change.",
    german: "Behalten Sie das Wechselgeld.",
    pronunciation: "beh-HAHL-ten zee dahs VEK-sel-gelt"
  },
  {
    id: 431,
    category: "Shopping",
    english: "Where are the fitting rooms?",
    german: "Wo sind die Umkleideräume?",
    pronunciation: "voh zint dee OOM-kly-deh-roy-meh"
  },
  {
    id: 432,
    category: "Shopping",
    english: "I'm a size 40 in shoes.",
    german: "Ich habe Schuhgröße vierzig.",
    pronunciation: "ikh HAH-beh SHOO-grur-sse FEER-tsikh"
  },

  // ─── Restaurants & Food ───────────────────────────────────────────────────
  {
    id: 501,
    category: "Restaurants & Food",
    english: "A table for two, please.",
    german: "Einen Tisch für zwei, bitte.",
    pronunciation: "EYE-nen tish fyur tsvy, BIT-eh"
  },
  {
    id: 502,
    category: "Restaurants & Food",
    english: "Could I see the menu, please?",
    german: "Darf ich die Speisekarte sehen?",
    pronunciation: "darf ikh dee SHPY-zeh-kar-teh ZAY-en"
  },
  {
    id: 503,
    category: "Restaurants & Food",
    english: "What do you recommend?",
    german: "Was empfehlen Sie?",
    pronunciation: "vahs em-PFAY-len zee"
  },
  {
    id: 504,
    category: "Restaurants & Food",
    english: "I'm vegetarian.",
    german: "Ich bin Vegetarier.",
    pronunciation: "ikh bin veh-geh-TAH-ree-er"
  },
  {
    id: 505,
    category: "Restaurants & Food",
    english: "I'm allergic to nuts.",
    german: "Ich bin allergisch gegen Nüsse.",
    pronunciation: "ikh bin ah-LEHR-gish GAY-gen NOO-sse"
  },
  {
    id: 506,
    category: "Restaurants & Food",
    english: "The food is delicious.",
    german: "Das Essen ist köstlich.",
    pronunciation: "dahs ES-sen ist KURST-likh"
  },
  {
    id: 507,
    category: "Restaurants & Food",
    english: "Could we get some water, please?",
    german: "Könnten wir bitte etwas Wasser bekommen?",
    pronunciation: "KUR-ten veer BIT-eh ET-vahs VAHS-ser beh-KOM-en"
  },
  {
    id: 508,
    category: "Restaurants & Food",
    english: "I'd like to order the steak.",
    german: "Ich möchte das Steak bestellen.",
    pronunciation: "ikh MURK-teh dahs stayk beh-SHTEL-en"
  },
  {
    id: 509,
    category: "Restaurants & Food",
    english: "Can I have the check, please?",
    german: "Kann ich bitte die Rechnung haben?",
    pronunciation: "kahn ikh BIT-eh dee REKH-noong HAH-ben"
  },
  {
    id: 510,
    category: "Restaurants & Food",
    english: "Does this contain gluten?",
    german: "Enthält das Gluten?",
    pronunciation: "ent-HELT dahs gloo-TEN"
  },
  {
    id: 511,
    category: "Restaurants & Food",
    english: "I'd like my steak medium-rare.",
    german: "Ich hätte mein Steak gerne medium.",
    pronunciation: "ikh HET-eh mine stayk GEHR-neh MEE-dee-oom"
  },
  {
    id: 512,
    category: "Restaurants & Food",
    english: "This is too salty.",
    german: "Das ist zu salzig.",
    pronunciation: "dahs ist tsoo ZAHL-tsikh"
  },
  {
    id: 513,
    category: "Restaurants & Food",
    english: "I'd like a glass of red wine.",
    german: "Ich möchte ein Glas Rotwein.",
    pronunciation: "ikh MURK-teh ine glahs ROHT-vine"
  },
  {
    id: 514,
    category: "Restaurants & Food",
    english: "Can we sit outside?",
    german: "Können wir draußen sitzen?",
    pronunciation: "KUR-nen veer DROW-ssen ZIT-sen"
  },
  {
    id: 515,
    category: "Restaurants & Food",
    english: "I have a reservation for six o'clock.",
    german: "Ich habe eine Reservierung für achtzehn Uhr.",
    pronunciation: "ikh HAH-beh EYE-neh reh-zehr-VEER-oong fyur AKH-tsayn oor"
  },
  {
    id: 516,
    category: "Restaurants & Food",
    english: "What's the soup of the day?",
    german: "Was ist die Tagessuppe?",
    pronunciation: "vahs ist dee TAH-ges-zoo-peh"
  },
  {
    id: 517,
    category: "Restaurants & Food",
    english: "Can I get this to go?",
    german: "Kann ich das zum Mitnehmen bekommen?",
    pronunciation: "kahn ikh dahs tsom MIT-nay-men beh-KOM-en"
  },
  {
    id: 518,
    category: "Restaurants & Food",
    english: "We're ready to order.",
    german: "Wir sind bereit zu bestellen.",
    pronunciation: "veer zint beh-RITE tsoo beh-SHTEL-en"
  },
  {
    id: 519,
    category: "Restaurants & Food",
    english: "I'd like dessert, please.",
    german: "Ich möchte bitte ein Dessert.",
    pronunciation: "ikh MURK-teh BIT-eh ine deh-SEHR"
  },
  {
    id: 520,
    category: "Restaurants & Food",
    english: "This is not what I ordered.",
    german: "Das habe ich nicht bestellt.",
    pronunciation: "dahs HAH-beh ikh nikht beh-SHTELT"
  },
  {
    id: 521,
    category: "Restaurants & Food",
    english: "Could you split the bill?",
    german: "Könnten Sie die Rechnung teilen?",
    pronunciation: "KUR-ten zee dee REKH-noong TY-len"
  },
  {
    id: 522,
    category: "Restaurants & Food",
    english: "The service was excellent.",
    german: "Der Service war ausgezeichnet.",
    pronunciation: "dehr SEHR-vis vahr OWS-geh-tsysh-net"
  },
  {
    id: 523,
    category: "Restaurants & Food",
    english: "Do you have a children's menu?",
    german: "Haben Sie eine Kinderkarte?",
    pronunciation: "HAH-ben zee EYE-neh KIN-der-kar-teh"
  },
  {
    id: 524,
    category: "Restaurants & Food",
    english: "I'd like a coffee after the meal.",
    german: "Ich möchte nach dem Essen einen Kaffee.",
    pronunciation: "ikh MURK-teh nahkh daym ES-sen EYE-nen KAH-feh"
  },
  {
    id: 525,
    category: "Restaurants & Food",
    english: "No ice in my drink, please.",
    german: "Ohne Eis in meinem Getränk, bitte.",
    pronunciation: "OH-neh ise in MY-nem geh-TRENK, BIT-eh"
  },
  {
    id: 526,
    category: "Restaurants & Food",
    english: "The portion is very generous.",
    german: "Die Portion ist sehr großzügig.",
    pronunciation: "dee por-TSYOHN ist zayr GROHS-tsoo-gikh"
  },
  {
    id: 527,
    category: "Restaurants & Food",
    english: "Do you have lactose-free milk?",
    german: "Haben Sie laktosefreie Milch?",
    pronunciation: "HAH-ben zee lahk-TOH-zeh-fry-eh milkh"
  },
  {
    id: 528,
    category: "Restaurants & Food",
    english: "I'll have the same as him.",
    german: "Ich nehme dasselbe wie er.",
    pronunciation: "ikh NAY-meh dahs-ZEL-beh vee ehr"
  },
  {
    id: 529,
    category: "Restaurants & Food",
    english: "This dish is too spicy for me.",
    german: "Dieses Gericht ist mir zu scharf.",
    pronunciation: "DEE-zes geh-RIKHT ist meer tsoo sharf"
  },
  {
    id: 530,
    category: "Restaurants & Food",
    english: "Compliments to the chef!",
    german: "Kompliment an den Koch!",
    pronunciation: "kom-plee-MENT ahn dayn kokh"
  },
  {
    id: 531,
    category: "Restaurants & Food",
    english: "Is there a vegetarian option?",
    german: "Gibt es eine vegetarische Option?",
    pronunciation: "gipt es EYE-neh veh-geh-TAH-ri-sheh op-TSYOHN"
  },
  {
    id: 532,
    category: "Restaurants & Food",
    english: "We'd like to start with the appetizers.",
    german: "Wir möchten mit den Vorspeisen beginnen.",
    pronunciation: "veer MURK-ten mit dayn FOR-shpy-zen beh-GIN-en"
  },

  // ─── Health & Medical ─────────────────────────────────────────────────────
  {
    id: 601,
    category: "Health & Medical",
    english: "I need to see a doctor.",
    german: "Ich muss zum Arzt.",
    pronunciation: "ikh mooss tsom artst"
  },
  {
    id: 602,
    category: "Health & Medical",
    english: "I have a headache.",
    german: "Ich habe Kopfschmerzen.",
    pronunciation: "ikh HAH-beh KOPF-shmehr-tsen"
  },
  {
    id: 603,
    category: "Health & Medical",
    english: "My stomach hurts.",
    german: "Mein Bauch tut weh.",
    pronunciation: "mine bowkh toot vay"
  },
  {
    id: 604,
    category: "Health & Medical",
    english: "I've had a fever for two days.",
    german: "Ich habe seit zwei Tagen Fieber.",
    pronunciation: "ikh HAH-beh zite tsvy TAH-gen FEE-ber"
  },
  {
    id: 605,
    category: "Health & Medical",
    english: "Where is the nearest pharmacy?",
    german: "Wo ist die nächste Apotheke?",
    pronunciation: "voh ist dee NEKHS-teh ah-poh-TAY-keh"
  },
  {
    id: 606,
    category: "Health & Medical",
    english: "I need a prescription for this medication.",
    german: "Ich brauche ein Rezept für dieses Medikament.",
    pronunciation: "ikh BROW-kheh ine reh-TSEPT fyur DEE-zes meh-dee-kah-MENT"
  },
  {
    id: 607,
    category: "Health & Medical",
    english: "I'm allergic to penicillin.",
    german: "Ich bin allergisch gegen Penicillin.",
    pronunciation: "ikh bin ah-LEHR-gish GAY-gen peh-ni-tsil-EEN"
  },
  {
    id: 608,
    category: "Health & Medical",
    english: "I've broken my arm.",
    german: "Ich habe mir den Arm gebrochen.",
    pronunciation: "ikh HAH-beh meer dayn arm geh-BROH-khen"
  },
  {
    id: 609,
    category: "Health & Medical",
    english: "I feel dizzy.",
    german: "Mir ist schwindelig.",
    pronunciation: "meer ist SHVIN-deh-likh"
  },
  {
    id: 610,
    category: "Health & Medical",
    english: "I haven't slept well recently.",
    german: "Ich habe in letzter Zeit schlecht geschlafen.",
    pronunciation: "ikh HAH-beh in LETS-ter tsyt shlekht geh-SHLAH-fen"
  },
  {
    id: 611,
    category: "Health & Medical",
    english: "I need to make an appointment.",
    german: "Ich muss einen Termin machen.",
    pronunciation: "ikh mooss EYE-nen tehr-MEEN MAHKH-en"
  },
  {
    id: 612,
    category: "Health & Medical",
    english: "Take this tablet twice a day.",
    german: "Nehmen Sie diese Tablette zweimal täglich.",
    pronunciation: "NAY-men zee DEE-zeh tah-BLET-eh TSVY-mahl TEG-likh"
  },
  {
    id: 613,
    category: "Health & Medical",
    english: "I have a sore throat.",
    german: "Ich habe Halsschmerzen.",
    pronunciation: "ikh HAH-beh HAHLS-shmehr-tsen"
  },
  {
    id: 614,
    category: "Health & Medical",
    english: "Do I need stitches?",
    german: "Brauche ich Nähte?",
    pronunciation: "BROW-kheh ikh NAY-teh"
  },
  {
    id: 615,
    category: "Health & Medical",
    english: "I need to check my blood pressure.",
    german: "Ich muss meinen Blutdruck messen lassen.",
    pronunciation: "ikh mooss MY-nen BLOOT-drook MES-sen LAHS-sen"
  },
  {
    id: 616,
    category: "Health & Medical",
    english: "I have a rash on my arm.",
    german: "Ich habe einen Ausschlag am Arm.",
    pronunciation: "ikh HAH-beh EYE-nen OWS-shlahk ahm arm"
  },
  {
    id: 617,
    category: "Health & Medical",
    english: "Are you vaccinated?",
    german: "Sind Sie geimpft?",
    pronunciation: "zint zee geh-IMPFT"
  },
  {
    id: 618,
    category: "Health & Medical",
    english: "I'd like a referral to a specialist.",
    german: "Ich möchte eine Überweisung zum Facharzt.",
    pronunciation: "ikh MURK-teh EYE-neh OO-ber-vy-zoong tsom FAKH-artst"
  },
  {
    id: 619,
    category: "Health & Medical",
    english: "How long will recovery take?",
    german: "Wie lange wird die Genesung dauern?",
    pronunciation: "vee LAHNG-eh virt dee geh-NAY-zoong DOW-ern"
  },
  {
    id: 620,
    category: "Health & Medical",
    english: "I have diabetes.",
    german: "Ich habe Diabetes.",
    pronunciation: "ikh HAH-beh dee-ah-BAY-tes"
  },
  {
    id: 621,
    category: "Health & Medical",
    english: "My knee is swollen.",
    german: "Mein Knie ist geschwollen.",
    pronunciation: "mine knee ist geh-SHVOL-en"
  },
  {
    id: 622,
    category: "Health & Medical",
    english: "I need a blood test.",
    german: "Ich brauche einen Bluttest.",
    pronunciation: "ikh BROW-kheh EYE-nen BLOOT-test"
  },
  {
    id: 623,
    category: "Health & Medical",
    english: "I've been feeling anxious lately.",
    german: "Ich fühle mich in letzter Zeit ängstlich.",
    pronunciation: "ikh FOO-leh mikh in LETS-ter tsyt ENGST-likh"
  },
  {
    id: 624,
    category: "Health & Medical",
    english: "Can you prescribe something for the pain?",
    german: "Können Sie mir etwas gegen die Schmerzen verschreiben?",
    pronunciation: "KUR-nen zee meer ET-vahs GAY-gen dee SHMEHR-tsen fehr-SHRY-ben"
  },
  {
    id: 625,
    category: "Health & Medical",
    english: "I feel much better now.",
    german: "Mir geht es jetzt viel besser.",
    pronunciation: "meer gayt es yetst feel BES-ser"
  },
  {
    id: 626,
    category: "Health & Medical",
    english: "Do I need to fast before the test?",
    german: "Muss ich vor dem Test nüchtern sein?",
    pronunciation: "mooss ikh for daym test NOOKH-tern zine"
  },
  {
    id: 627,
    category: "Health & Medical",
    english: "What are the side effects?",
    german: "Was sind die Nebenwirkungen?",
    pronunciation: "vahs zint dee NAY-ben-veer-koong-en"
  },
  {
    id: 628,
    category: "Health & Medical",
    english: "I need to see an eye doctor.",
    german: "Ich muss zum Augenarzt.",
    pronunciation: "ikh mooss tsom OW-gen-artst"
  },
  {
    id: 629,
    category: "Health & Medical",
    english: "My back has been hurting for a week.",
    german: "Mein Rücken schmerzt seit einer Woche.",
    pronunciation: "mine ROO-ken shmertst zite EYE-ner VOH-kheh"
  },
  {
    id: 630,
    category: "Health & Medical",
    english: "Is this contagious?",
    german: "Ist das ansteckend?",
    pronunciation: "ist dahs AHN-shtek-ent"
  },
  {
    id: 631,
    category: "Health & Medical",
    english: "Please fill out this health form.",
    german: "Bitte füllen Sie dieses Gesundheitsformular aus.",
    pronunciation: "BIT-eh FOO-len zee DEE-zes geh-ZOONT-hites-for-moo-lahr owss"
  },
  {
    id: 632,
    category: "Health & Medical",
    english: "I'm eight weeks pregnant.",
    german: "Ich bin in der achten Schwangerschaftswoche.",
    pronunciation: "ikh bin in dehr AHKH-ten SHVAHNG-er-shahfts-voh-kheh"
  },

  // ─── Emergency ────────────────────────────────────────────────────────────
  {
    id: 701,
    category: "Emergency",
    english: "Help! Call the police!",
    german: "Hilfe! Rufen Sie die Polizei!",
    pronunciation: "HIL-feh! ROO-fen zee dee poh-lee-TSYE"
  },
  {
    id: 702,
    category: "Emergency",
    english: "There's been an accident.",
    german: "Es hat einen Unfall gegeben.",
    pronunciation: "es haht EYE-nen OON-fahl geh-GAY-ben"
  },
  {
    id: 703,
    category: "Emergency",
    english: "Call an ambulance, please!",
    german: "Rufen Sie bitte einen Krankenwagen!",
    pronunciation: "ROO-fen zee BIT-eh EYE-nen KRAHN-ken-vah-gen"
  },
  {
    id: 704,
    category: "Emergency",
    english: "I need help!",
    german: "Ich brauche Hilfe!",
    pronunciation: "ikh BROW-kheh HIL-feh"
  },
  {
    id: 705,
    category: "Emergency",
    english: "Fire! Get out of the building!",
    german: "Feuer! Verlassen Sie das Gebäude!",
    pronunciation: "FOY-er! fehr-LAHS-sen zee dahs geh-BOY-deh"
  },
  {
    id: 706,
    category: "Emergency",
    english: "My wallet has been stolen.",
    german: "Meine Brieftasche wurde gestohlen.",
    pronunciation: "MY-neh BREEF-tah-sheh VOOR-deh geh-SHTOH-len"
  },
  {
    id: 707,
    category: "Emergency",
    english: "I've lost my passport.",
    german: "Ich habe meinen Reisepass verloren.",
    pronunciation: "ikh HAH-beh MY-nen RY-zeh-pahs fehr-LOH-ren"
  },
  {
    id: 708,
    category: "Emergency",
    english: "I need to call my embassy.",
    german: "Ich muss meine Botschaft anrufen.",
    pronunciation: "ikh mooss MY-neh BOT-shahft AHN-roo-fen"
  },
  {
    id: 709,
    category: "Emergency",
    english: "Someone is following me.",
    german: "Jemand folgt mir.",
    pronunciation: "YAY-mahnt folkt meer"
  },
  {
    id: 710,
    category: "Emergency",
    english: "I've been in a car accident.",
    german: "Ich war in einen Autounfall verwickelt.",
    pronunciation: "ikh vahr in EYE-nen OW-toh-oon-fahl fehr-VIK-elt"
  },
  {
    id: 711,
    category: "Emergency",
    english: "The person is unconscious.",
    german: "Die Person ist bewusstlos.",
    pronunciation: "dee pehr-ZOHN ist beh-VOOST-lohs"
  },
  {
    id: 712,
    category: "Emergency",
    english: "He's not breathing.",
    german: "Er atmet nicht.",
    pronunciation: "ehr AHT-met nikht"
  },
  {
    id: 713,
    category: "Emergency",
    english: "There's a gas leak.",
    german: "Es gibt ein Gasleck.",
    pronunciation: "es gipt ine GAHS-lek"
  },
  {
    id: 714,
    category: "Emergency",
    english: "Where is the nearest hospital?",
    german: "Wo ist das nächste Krankenhaus?",
    pronunciation: "voh ist dahs NEKHS-teh KRAHN-ken-howss"
  },
  {
    id: 715,
    category: "Emergency",
    english: "I've swallowed something dangerous.",
    german: "Ich habe etwas Gefährliches geschluckt.",
    pronunciation: "ikh HAH-beh ET-vahs geh-FEHR-li-khes geh-SHLUKT"
  },
  {
    id: 716,
    category: "Emergency",
    english: "My child is missing.",
    german: "Mein Kind wird vermisst.",
    pronunciation: "mine kint virt fehr-MIST"
  },
  {
    id: 717,
    category: "Emergency",
    english: "Stop the thief!",
    german: "Haltet den Dieb!",
    pronunciation: "HAHL-tet dayn deep"
  },
  {
    id: 718,
    category: "Emergency",
    english: "Is everyone okay?",
    german: "Ist alle okay?",
    pronunciation: "ist AL-eh oh-KAY"
  },
  {
    id: 719,
    category: "Emergency",
    english: "Can you do CPR?",
    german: "Können Sie Wiederbelebung durchführen?",
    pronunciation: "KUR-nen zee VEE-der-beh-lay-boong DOORKH-fyoo-ren"
  },
  {
    id: 720,
    category: "Emergency",
    english: "I think I'm having a heart attack.",
    german: "Ich glaube, ich habe einen Herzanfall.",
    pronunciation: "ikh GLOW-beh, ikh HAH-beh EYE-nen HERTS-ahn-fahl"
  },
  {
    id: 721,
    category: "Emergency",
    english: "We need to evacuate immediately.",
    german: "Wir müssen sofort evakuieren.",
    pronunciation: "veer MOOS-sen ZOH-fort eh-vah-koo-EE-ren"
  },
  {
    id: 722,
    category: "Emergency",
    english: "Please don't leave me alone.",
    german: "Bitte lassen Sie mich nicht allein.",
    pronunciation: "BIT-eh LAHS-sen zee mikh nikht ah-LINE"
  },
  {
    id: 723,
    category: "Emergency",
    english: "I've been robbed.",
    german: "Ich wurde ausgeraubt.",
    pronunciation: "ikh VOOR-deh OWS-geh-rowpt"
  },
  {
    id: 724,
    category: "Emergency",
    english: "The emergency number in Germany is 112.",
    german: "Die Notrufnummer in Deutschland ist eins eins zwei.",
    pronunciation: "dee NOHT-roof-noom-mer in DOYCH-lahnt ist ines ines tsvy"
  },
  {
    id: 725,
    category: "Emergency",
    english: "I need a police report for my insurance.",
    german: "Ich brauche ein Polizeiprotokoll für meine Versicherung.",
    pronunciation: "ikh BROW-kheh ine poh-lee-TSYE-proh-toh-kol fyur MY-neh fehr-ZIKH-eh-roong"
  },
  {
    id: 726,
    category: "Emergency",
    english: "She's having an allergic reaction.",
    german: "Sie hat eine allergische Reaktion.",
    pronunciation: "zee haht EYE-neh ah-LEHR-gi-sheh reh-ahk-TSYOHN"
  },
  {
    id: 727,
    category: "Emergency",
    english: "There is smoke coming from the building.",
    german: "Rauch steigt aus dem Gebäude auf.",
    pronunciation: "rowkh shtike owss daym geh-BOY-deh owf"
  },
  {
    id: 728,
    category: "Emergency",
    english: "Do you have a first aid kit?",
    german: "Haben Sie einen Erste-Hilfe-Kasten?",
    pronunciation: "HAH-ben zee EYE-nen EHR-steh-HIL-feh-kahs-ten"
  },
  {
    id: 729,
    category: "Emergency",
    english: "I can't find my children.",
    german: "Ich kann meine Kinder nicht finden.",
    pronunciation: "ikh kahn MY-neh KIN-der nikht FIN-den"
  },
  {
    id: 730,
    category: "Emergency",
    english: "Please stay calm.",
    german: "Bitte bleiben Sie ruhig.",
    pronunciation: "BIT-eh BLY-ben zee ROO-ikh"
  },
  {
    id: 731,
    category: "Emergency",
    english: "He's bleeding heavily.",
    german: "Er blutet stark.",
    pronunciation: "ehr BLOO-tet shtark"
  },
  {
    id: 732,
    category: "Emergency",
    english: "The road is blocked.",
    german: "Die Straße ist gesperrt.",
    pronunciation: "dee SHTRAH-sse ist geh-SHPEHRT"
  },

  // ─── Family ───────────────────────────────────────────────────────────────
  {
    id: 801,
    category: "Family",
    english: "This is my wife.",
    german: "Das ist meine Frau.",
    pronunciation: "dahs ist MY-neh frow"
  },
  {
    id: 802,
    category: "Family",
    english: "Do you have children?",
    german: "Haben Sie Kinder?",
    pronunciation: "HAH-ben zee KIN-der"
  },
  {
    id: 803,
    category: "Family",
    english: "My daughter is three years old.",
    german: "Meine Tochter ist drei Jahre alt.",
    pronunciation: "MY-neh TOKH-ter ist dry YAH-reh ahlt"
  },
  {
    id: 804,
    category: "Family",
    english: "My parents live in Hamburg.",
    german: "Meine Eltern wohnen in Hamburg.",
    pronunciation: "MY-neh EL-tern VOH-nen in HAHM-boork"
  },
  {
    id: 805,
    category: "Family",
    english: "We're expecting a baby.",
    german: "Wir erwarten ein Baby.",
    pronunciation: "veer ehr-VAHR-ten ine BAY-bee"
  },
  {
    id: 806,
    category: "Family",
    english: "My grandmother just turned eighty.",
    german: "Meine Großmutter ist gerade achtzig geworden.",
    pronunciation: "MY-neh GROHS-moo-ter ist geh-RAH-deh AHKH-tsikh geh-VOR-den"
  },
  {
    id: 807,
    category: "Family",
    english: "My brother and I don't get along.",
    german: "Mein Bruder und ich verstehen uns nicht.",
    pronunciation: "mine BROO-der oont ikh fehr-SHTAY-en oons nikht"
  },
  {
    id: 808,
    category: "Family",
    english: "We're going to my in-laws for Christmas.",
    german: "Wir fahren Weihnachten zu meinen Schwiegereltern.",
    pronunciation: "veer FAH-ren VY-nahkh-ten tsoo MY-nen SHVEE-ger-el-tern"
  },
  {
    id: 809,
    category: "Family",
    english: "My son is starting school this year.",
    german: "Mein Sohn kommt dieses Jahr in die Schule.",
    pronunciation: "mine zohn komt DEE-zes yahr in dee SHOO-leh"
  },
  {
    id: 810,
    category: "Family",
    english: "My sister got married last year.",
    german: "Meine Schwester hat letztes Jahr geheiratet.",
    pronunciation: "MY-neh SHVES-ter haht LETS-tes yahr geh-HY-rah-tet"
  },
  {
    id: 811,
    category: "Family",
    english: "We have a family reunion every summer.",
    german: "Wir haben jedes Jahr ein Familientreffen im Sommer.",
    pronunciation: "veer HAH-ben YAY-des yahr ine fah-MEEL-yen-tref-en im ZOM-er"
  },
  {
    id: 812,
    category: "Family",
    english: "My father is a retired engineer.",
    german: "Mein Vater ist pensionierter Ingenieur.",
    pronunciation: "mine FAH-ter ist pen-syo-NEER-ter in-jhen-YOOR"
  },
  {
    id: 813,
    category: "Family",
    english: "She takes after her mother.",
    german: "Sie kommt nach ihrer Mutter.",
    pronunciation: "zee komt nahkh EE-rer MOOT-ter"
  },
  {
    id: 814,
    category: "Family",
    english: "He's my half-brother.",
    german: "Er ist mein Halbbruder.",
    pronunciation: "ehr ist mine HAHLP-broo-der"
  },
  {
    id: 815,
    category: "Family",
    english: "Are you an only child?",
    german: "Bist du ein Einzelkind?",
    pronunciation: "bist doo ine EIN-tsel-kint"
  },
  {
    id: 816,
    category: "Family",
    english: "My nephew is studying medicine.",
    german: "Mein Neffe studiert Medizin.",
    pronunciation: "mine NEF-eh shtoo-DEERT meh-dee-TSEEN"
  },
  {
    id: 817,
    category: "Family",
    english: "We named our son after his grandfather.",
    german: "Wir haben unseren Sohn nach seinem Großvater benannt.",
    pronunciation: "veer HAH-ben OON-zeh-ren zohn nahkh ZY-nem GROHS-fah-ter beh-NAHNT"
  },
  {
    id: 818,
    category: "Family",
    english: "My aunt makes the best cake.",
    german: "Meine Tante macht den besten Kuchen.",
    pronunciation: "MY-neh TAHN-teh mahkht dayn BES-ten KOO-khen"
  },
  {
    id: 819,
    category: "Family",
    english: "My parents are divorced.",
    german: "Meine Eltern sind geschieden.",
    pronunciation: "MY-neh EL-tern zint geh-SHEE-den"
  },
  {
    id: 820,
    category: "Family",
    english: "Our family has grown a lot.",
    german: "Unsere Familie ist sehr gewachsen.",
    pronunciation: "OON-zeh-reh fah-MEE-lee-eh ist zayr geh-VAHKH-sen"
  },
  {
    id: 821,
    category: "Family",
    english: "I'm the youngest of four children.",
    german: "Ich bin das jüngste von vier Kindern.",
    pronunciation: "ikh bin dahs YOONG-steh fon feer KIN-dern"
  },
  {
    id: 822,
    category: "Family",
    english: "My cousin lives in Vienna.",
    german: "Meine Cousine lebt in Wien.",
    pronunciation: "MY-neh koo-ZEE-neh laybt in veen"
  },
  {
    id: 823,
    category: "Family",
    english: "The kids are at school.",
    german: "Die Kinder sind in der Schule.",
    pronunciation: "dee KIN-der zint in dehr SHOO-leh"
  },
  {
    id: 824,
    category: "Family",
    english: "We had a family argument.",
    german: "Wir hatten einen Familienstreit.",
    pronunciation: "veer HAH-ten EYE-nen fah-MEEL-yen-shtrite"
  },
  {
    id: 825,
    category: "Family",
    english: "My mother-in-law is visiting this week.",
    german: "Meine Schwiegermutter besucht uns diese Woche.",
    pronunciation: "MY-neh SHVEE-ger-moo-ter beh-ZOOKHT oons DEE-zeh VOH-kheh"
  },
  {
    id: 826,
    category: "Family",
    english: "I look like my dad.",
    german: "Ich sehe meinem Vater ähnlich.",
    pronunciation: "ikh ZAY-eh MY-nem FAH-ter EN-likh"
  },
  {
    id: 827,
    category: "Family",
    english: "We're a big family.",
    german: "Wir sind eine große Familie.",
    pronunciation: "veer zint EYE-neh GROH-sse fah-MEE-lee-eh"
  },
  {
    id: 828,
    category: "Family",
    english: "My grandmother raised me.",
    german: "Meine Großmutter hat mich aufgezogen.",
    pronunciation: "MY-neh GROHS-moo-ter haht mikh OWF-geh-tsoh-gen"
  },
  {
    id: 829,
    category: "Family",
    english: "The children are fast asleep.",
    german: "Die Kinder schlafen tief und fest.",
    pronunciation: "dee KIN-der SHLAH-fen teef oont fest"
  },
  {
    id: 830,
    category: "Family",
    english: "My parents want grandchildren.",
    german: "Meine Eltern möchten Enkel.",
    pronunciation: "MY-neh EL-tern MURK-ten ENK-el"
  },
  {
    id: 831,
    category: "Family",
    english: "We're celebrating my grandfather's birthday.",
    german: "Wir feiern den Geburtstag meines Großvaters.",
    pronunciation: "veer FY-ern dayn geh-BOORTS-tahk MY-nes GROHS-fah-ters"
  },
  {
    id: 832,
    category: "Family",
    english: "Family is the most important thing to me.",
    german: "Familie ist mir das Wichtigste.",
    pronunciation: "fah-MEE-lee-eh ist meer dahs VIKH-tikh-steh"
  },

  // ─── Dating & Romance ─────────────────────────────────────────────────────
  {
    id: 901,
    category: "Dating & Romance",
    english: "You have a beautiful smile.",
    german: "Sie haben ein wunderschönes Lächeln.",
    pronunciation: "zee HAH-ben ine VOON-der-shur-nes LEKH-eln"
  },
  {
    id: 902,
    category: "Dating & Romance",
    english: "Would you like to go on a date with me?",
    german: "Würdest du gerne mit mir ausgehen?",
    pronunciation: "VOOR-dest doo GEHR-neh mit meer OWS-gay-en"
  },
  {
    id: 903,
    category: "Dating & Romance",
    english: "I've been thinking about you.",
    german: "Ich habe an dich gedacht.",
    pronunciation: "ikh HAH-beh ahn dikh geh-DAHKHT"
  },
  {
    id: 904,
    category: "Dating & Romance",
    english: "You mean a lot to me.",
    german: "Du bedeutest mir viel.",
    pronunciation: "doo beh-DOY-test meer feel"
  },
  {
    id: 905,
    category: "Dating & Romance",
    english: "I love you.",
    german: "Ich liebe dich.",
    pronunciation: "ikh LEE-beh dikh"
  },
  {
    id: 906,
    category: "Dating & Romance",
    english: "Are you single?",
    german: "Bist du Single?",
    pronunciation: "bist doo SING-el"
  },
  {
    id: 907,
    category: "Dating & Romance",
    english: "I have a crush on you.",
    german: "Ich stehe auf dich.",
    pronunciation: "ikh SHTAY-eh owf dikh"
  },
  {
    id: 908,
    category: "Dating & Romance",
    english: "Can I have your phone number?",
    german: "Darf ich deine Telefonnummer haben?",
    pronunciation: "darf ikh DY-neh teh-leh-FON-noom-er HAH-ben"
  },
  {
    id: 909,
    category: "Dating & Romance",
    english: "You're really funny.",
    german: "Du bist wirklich lustig.",
    pronunciation: "doo bist VEER-klikh LOOS-tikh"
  },
  {
    id: 910,
    category: "Dating & Romance",
    english: "I'm in a relationship.",
    german: "Ich bin in einer Beziehung.",
    pronunciation: "ikh bin in EYE-ner beh-TSEE-oong"
  },
  {
    id: 911,
    category: "Dating & Romance",
    english: "Do you want to meet for coffee?",
    german: "Wollen wir uns auf einen Kaffee treffen?",
    pronunciation: "VOL-en veer oons owf EYE-nen KAH-feh TREF-en"
  },
  {
    id: 912,
    category: "Dating & Romance",
    english: "You look amazing tonight.",
    german: "Du siehst heute Abend wunderschön aus.",
    pronunciation: "doo zeest HOY-teh AH-bent VOON-der-shurn owss"
  },
  {
    id: 913,
    category: "Dating & Romance",
    english: "I really enjoy spending time with you.",
    german: "Ich verbringe wirklich gerne Zeit mit dir.",
    pronunciation: "ikh fehr-BRING-eh VEER-klikh GEHR-neh tsyt mit deer"
  },
  {
    id: 914,
    category: "Dating & Romance",
    english: "Will you be my girlfriend?",
    german: "Willst du meine Freundin sein?",
    pronunciation: "vilst doo MY-neh FROYN-din zine"
  },
  {
    id: 915,
    category: "Dating & Romance",
    english: "I'm not ready for a relationship right now.",
    german: "Ich bin gerade nicht bereit für eine Beziehung.",
    pronunciation: "ikh bin geh-RAH-deh nikht beh-RITE fyur EYE-neh beh-TSEE-oong"
  },
  {
    id: 916,
    category: "Dating & Romance",
    english: "Let's take things slow.",
    german: "Lass uns langsam machen.",
    pronunciation: "lahs oons LAHNG-zahm MAHKH-en"
  },
  {
    id: 917,
    category: "Dating & Romance",
    english: "I fell in love with you the moment I saw you.",
    german: "Ich habe mich in dem Moment verliebt, als ich dich sah.",
    pronunciation: "ikh HAH-beh mikh in daym mo-MENT fehr-LEEPT, ahls ikh dikh zah"
  },
  {
    id: 918,
    category: "Dating & Romance",
    english: "I missed you so much.",
    german: "Ich habe dich so sehr vermisst.",
    pronunciation: "ikh HAH-beh dikh zoh zayr fehr-MIST"
  },
  {
    id: 919,
    category: "Dating & Romance",
    english: "We should do this again.",
    german: "Das sollten wir wiederholen.",
    pronunciation: "dahs ZOL-ten veer VEE-der-hoh-len"
  },
  {
    id: 920,
    category: "Dating & Romance",
    english: "I think we're moving too fast.",
    german: "Ich denke, wir bewegen uns zu schnell.",
    pronunciation: "ikh DEN-keh, veer beh-VAY-gen oons tsoo shnel"
  },
  {
    id: 921,
    category: "Dating & Romance",
    english: "I'd like to introduce you to my friends.",
    german: "Ich würde dich gerne meinen Freunden vorstellen.",
    pronunciation: "ikh VOOR-deh dikh GEHR-neh MY-nen FROYN-den FOR-shtel-en"
  },
  {
    id: 922,
    category: "Dating & Romance",
    english: "Happy anniversary, my love.",
    german: "Herzlichen Glückwunsch zum Jahrestag, mein Schatz.",
    pronunciation: "HERTS-li-khen GLOOK-voonsh tsom YAH-res-tahk, mine shahts"
  },
  {
    id: 923,
    category: "Dating & Romance",
    english: "Will you marry me?",
    german: "Willst du mich heiraten?",
    pronunciation: "vilst doo mikh HY-rah-ten"
  },
  {
    id: 924,
    category: "Dating & Romance",
    english: "You make me so happy.",
    german: "Du machst mich so glücklich.",
    pronunciation: "doo mahkhst mikh zoh GLOOK-likh"
  },
  {
    id: 925,
    category: "Dating & Romance",
    english: "I can't imagine my life without you.",
    german: "Ich kann mir mein Leben ohne dich nicht vorstellen.",
    pronunciation: "ikh kahn meer mine LAY-ben OH-neh dikh nikht FOR-shtel-en"
  },
  {
    id: 926,
    category: "Dating & Romance",
    english: "We should talk about our future.",
    german: "Wir sollten über unsere Zukunft reden.",
    pronunciation: "veer ZOL-ten OO-ber OON-zeh-reh TSOO-koonft RAY-den"
  },
  {
    id: 927,
    category: "Dating & Romance",
    english: "I feel safe with you.",
    german: "Ich fühle mich bei dir sicher.",
    pronunciation: "ikh FOO-leh mikh by deer ZIKH-er"
  },
  {
    id: 928,
    category: "Dating & Romance",
    english: "You're my best friend.",
    german: "Du bist mein bester Freund.",
    pronunciation: "doo bist mine BES-ter froynt"
  },
  {
    id: 929,
    category: "Dating & Romance",
    english: "I'd like to know everything about you.",
    german: "Ich möchte alles über dich wissen.",
    pronunciation: "ikh MURK-teh AL-es OO-ber dikh VIS-en"
  },
  {
    id: 930,
    category: "Dating & Romance",
    english: "You're unlike anyone I've ever met.",
    german: "Du bist anders als alle, die ich je getroffen habe.",
    pronunciation: "doo bist AHN-ders ahls AL-eh, dee ikh yeh geh-TROF-en HAH-beh"
  },
  {
    id: 931,
    category: "Dating & Romance",
    english: "Let's spend the weekend together.",
    german: "Lass uns das Wochenende zusammen verbringen.",
    pronunciation: "lahs oons dahs VOH-khen-en-deh tsoo-ZAH-men fehr-BRING-en"
  },
  {
    id: 932,
    category: "Dating & Romance",
    english: "I'm so lucky to have you in my life.",
    german: "Ich bin so froh, dich in meinem Leben zu haben.",
    pronunciation: "ikh bin zoh froh, dikh in MY-nem LAY-ben tsoo HAH-ben"
  },
]

export default sentences
