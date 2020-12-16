// Conjuntos e ranges

const { alfabeto } = require('./base');

// [abc] -> representa um conjunto
// ^ -> representa negação
// Range [0-9] range de 0 a 9

console.log('Exemplo 01: ');
console.log(alfabeto.match(/[0-9]+/g)); // Saída: [ '0123456789' ]

console.log('\nExemplo 02: '); 
console.log(alfabeto.match(/[a-k]+/gi)); // Saída: [ 'ABCDEFGHIJK', 'abcdefghijk' ]

console.log('\nExemplo 03: ');
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); // Saída: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789']

console.log('Alternativa:');
console.log(alfabeto.match(/\w+/g)); // Saída: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789']

console.log('\nExemplo 04: ');
console.log(alfabeto.match(/[^a-zA-Z0-9_]+/g)); // Negação | Saída: [ ' ', ' ™ ƒ ', ' ƒ' ]

console.log('Alternativa:');
// Alternativa para a negação
console.log(alfabeto.match(/\W+/g)); // Saída: [ ' ', ' ™ ƒ ', ' ƒ' ]
