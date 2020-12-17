// Lookahead e lookbehind

const { lookahead } = require('./base');

// Positive lookahead (frases que tem active)
const positiveLookAhead = /.+(?=[^in]active)/gim; 
console.log(lookahead.match(positiveLookAhead)); // Saída: ['OFFLINE  192.168.0.2 ABCDEF', 'ONLINE  192.168.0.3 ABCDEF', 'ONLINE  192.168.0.4 ABCDEF', 'OFFLINE  192.168.0.5 ABCDEF']

// Negative lookahead (frases que NÃO tem active)
const negativeLookAhead = /^(?!.+[^in]active).+$/gim;
console.log(lookahead.match(negativeLookAhead)); // Saída: ['ONLINE  192.168.0.1 ABCDEF inactive', 'OFFLINE  192.168.0.6 ABCDEF inactive']

// Positive lookbehind (Frases que começam com ONLINE)
const positiveLookBehind = /(?<=ONLINE\s+)\S.*/gim;
console.log(lookahead.match(positiveLookBehind)); // Saída: ['192.168.0.1 ABCDEF inactive', '192.168.0.3 ABCDEF active', '192.168.0.4 ABCDEF active']

// Negative lookbehind (Frases que NÃO começam com ONLINE)
const negativeLookBehind = /^.+(?<!ONLINE.+)$/gim;
console.log(lookahead.match(negativeLookBehind)); // Saída: ['OFFLINE  192.168.0.2 ABCDEF active', 'OFFLINE  192.168.0.5 ABCDEF active', 'OFFLINE  192.168.0.6 ABCDEF inactive']
