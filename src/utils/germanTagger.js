// Rule-based German grammar tagger for educational word highlighting.
// Returns tokens tagged as 'subject', 'verb', 'object', or null.
// Accuracy: ~75-80% for simple, everyday sentences. Not a full parser.

// ── Pronoun tables ────────────────────────────────────────────────────────────

// Nominative personal pronouns (subject role)
const NOM_PRONOUNS = new Set([
  'ich', 'du', 'er', 'wir', 'ihr', 'man',
  // 'sie' and 'es' are ambiguous — handled by position below
])
// 'Sie' (formal you, nominative) needs case-sensitive check

// Accusative / dative personal pronouns (object role)
const ACC_DAT_PRONOUNS = new Set([
  'mich', 'dich', 'ihn', 'uns', 'euch',   // accusative
  'mir', 'dir', 'ihm', 'ihnen',             // dative
  'sich',                                   // reflexive
])

// ── Verb tables ───────────────────────────────────────────────────────────────

const MODALS = new Set([
  'kann', 'kannst', 'können', 'könnt',
  'könnte', 'könntest', 'könnten', 'könntet',
  'will', 'willst', 'wollen', 'wollt',
  'wollte', 'wolltest', 'wollten', 'wolltet',
  'muss', 'musst', 'müssen', 'müsst',
  'musste', 'musstest', 'mussten', 'musstet',
  'soll', 'sollst', 'sollen', 'sollt',
  'sollte', 'solltest', 'sollten', 'solltet',
  'darf', 'darfst', 'dürfen', 'dürft',
  'durfte', 'durftest', 'durften', 'durftet',
  'mag', 'magst', 'mögen', 'mögt',
  'mochte', 'mochtest', 'mochten', 'mochtet',
  'möchte', 'möchtest', 'möchten', 'möchtet',
])

const AUX = new Set([
  'bin', 'bist', 'ist', 'sind', 'seid',
  'war', 'warst', 'waren', 'wart',
  'habe', 'hast', 'hat', 'haben', 'habt',
  'hatte', 'hattest', 'hatten', 'hattet',
  'werde', 'wirst', 'wird', 'werden', 'werdet',
  'wurde', 'wurdest', 'wurden', 'wurdet',
])

// ── Article-case tables ───────────────────────────────────────────────────────

// Unambiguously accusative or dative → object
const OBJ_ARTICLES = new Set([
  // Masculine accusative
  'den', 'einen', 'keinen', 'meinen', 'deinen', 'seinen', 'ihren', 'unseren', 'euren',
  // Masculine/neuter dative
  'dem', 'einem', 'keinem', 'meinem', 'deinem', 'seinem', 'ihrem', 'unserem', 'eurem',
  // Feminine dative
  'einer', 'meiner', 'deiner', 'seiner', 'ihrer', 'unserer', 'eurer',
])

// Unambiguously nominative → subject
const SUBJ_ARTICLES = new Set([
  // Masculine nominative (indefinite)
  'ein', 'kein', 'mein', 'dein', 'unser', 'euer',
  // Feminine nominative (indefinite)
  'eine', 'keine', 'meine', 'deine', 'seine', 'ihre', 'unsere', 'eure',
  // 'der', 'die', 'das' are ambiguous — handled by position heuristic below
])

// ── Tokenizer ─────────────────────────────────────────────────────────────────

function tokenize(text) {
  // Split into word tokens and whitespace, keeping punctuation attached to words
  // Returns [{text, clean, role, space}]
  const tokens = []
  const re = /([^\s]+)(\s*)/g
  let m
  while ((m = re.exec(text)) !== null) {
    const word = m[1]
    // Strip leading/trailing punctuation for matching, keep for display
    const clean = word.replace(/^[„"'"«([\-]+|[.,!?;:'")»\]]+$/g, '').toLowerCase()
    tokens.push({ text: word, clean, role: null, space: m[2] })
  }
  return tokens
}

// ── Tagger ────────────────────────────────────────────────────────────────────

export function tagGerman(text) {
  const tokens = tokenize(text)
  const n = tokens.length

  // Pass 1: tag pronouns and known verb forms
  tokens.forEach(token => {
    const { clean } = token
    const raw = token.text.replace(/[.,!?;:'"]/g, '')

    if (NOM_PRONOUNS.has(clean) || raw === 'Sie') {
      token.role = 'subject'
    } else if (ACC_DAT_PRONOUNS.has(clean)) {
      token.role = 'object'
    } else if (MODALS.has(clean) || AUX.has(clean)) {
      token.role = 'verb'
    }
  })

  // Pass 2: article-based noun phrase tagging
  // Propagate article role to the next content word (the noun)
  tokens.forEach((token, i) => {
    if (token.role !== null) return
    const { clean } = token

    let articleRole = null
    if (OBJ_ARTICLES.has(clean)) articleRole = 'object'
    else if (SUBJ_ARTICLES.has(clean)) articleRole = 'subject'
    else if (clean === 'der' || clean === 'das') articleRole = 'subject' // most common usage
    // 'die' is too ambiguous (nom/acc/pl) — skip

    if (!articleRole) return
    token.role = articleRole

    // Walk forward to tag the noun (skip adjective-like words between article and noun)
    for (let j = i + 1; j < n && j <= i + 3; j++) {
      const t = tokens[j]
      if (t.role !== null) break
      const w = t.clean
      // Skip if it's another article (e.g. compound noun phrases)
      if (OBJ_ARTICLES.has(w) || SUBJ_ARTICLES.has(w) || w === 'der' || w === 'die' || w === 'das') break
      // Skip common prepositions and conjunctions
      if (SKIP_WORDS.has(w)) break
      t.role = articleRole
      // Only tag one word after adjectives — stop at the first noun-like word
      // Heuristic: if word starts with uppercase it's a noun (in German all nouns are capitalized)
      if (t.text[0] === t.text[0].toUpperCase() && t.text[0] !== t.text[0].toLowerCase()) break
    }
  })

  // Pass 3: verb morphology for still-untagged words
  // -st ending reliably identifies 2nd-person singular verbs: gehst, machst, sprichst…
  // -t ending on longer words: geht, macht, kostet (but skip common non-verbs)
  tokens.forEach(token => {
    if (token.role !== null) return
    const { clean } = token
    if (clean.length >= 4 && clean.endsWith('st') && !NON_VERB_ST.has(clean)) {
      token.role = 'verb'
    }
  })

  // Pass 4: 'sie'/'es' — tag as subject if immediately followed by a verb
  tokens.forEach((token, i) => {
    if (token.role !== null) return
    const { clean } = token
    if (clean !== 'sie' && clean !== 'es') return
    const next = tokens[i + 1]
    if (next && next.role === 'verb') token.role = 'subject'
    else if (i === 0) token.role = 'subject' // first word, likely nominative
  })

  return tokens
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const SKIP_WORDS = new Set([
  'und', 'oder', 'aber', 'denn', 'weil', 'dass', 'wenn',
  'in', 'an', 'auf', 'bei', 'mit', 'nach', 'seit', 'von', 'vor', 'zu', 'aus',
  'für', 'über', 'unter', 'zwischen', 'durch', 'gegen', 'ohne', 'um',
  'nicht', 'kein', 'keine', 'auch', 'nur', 'schon', 'noch', 'sehr',
])

// Common words ending in -st that are NOT 2nd-person verbs
const NON_VERB_ST = new Set([
  'zuerst', 'zunächst', 'meistens', 'mindest', 'fast', 'meist',
  'selbst', 'nächst', 'nächste', 'nächsten', 'nächstes',
])
