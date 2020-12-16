const { texto } = require('./base');

// () significa um grupo
// Procura globalmente por lorem ou ipsum ignorando letras maiusculas e minusculas
// Caso as duas estejam presentes, as mesmas são retornadas. 
const regExp1 = /(lorem|ipsum)/gi;

// match () - O método recupera o resultado da correspondência de uma string e retorna todas as correspondencias encontradas 
// com uma expressão regular.
console.log(texto.match(regExp1));

// Realiza um replace de /lorem|ipsum/ por LOREM IPSUM em todo o texto.
console.log(texto.replace(regExp1, function(input) {
  return input.toUpperCase();
}));