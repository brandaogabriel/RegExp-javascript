// Texto base para trabalhar filtros
const { texto } = require('./base');

// A expressão regular esta entre duas barras / 'string here' /
// Procura globalmente no texto a palavra 'Lorem' ignorando letras 
// maiusculas e minisculas 
const regExp1 = /Lorem/gi;

// O método exec() realiza uma pesquisa por uma correspondência em uma string e retorna a primeira encontrada.
// Retorna o resultado ou null. 
const found = regExp1.exec(texto);

console.log(found);