// Quantificadores

// * (opcional) 0 ou n {0, }
// + (obrigatório) 1 ou n
// ? (opcional) 0 ou 1 
// \ Caractere de escape

// {n, m} minimo e máximo.
// Ex: {10, } no minimo 10
// Ex: {, 10} de 0 a 10
// Ex: {5, 10} de 5 a 10
// Ex: {1} apenas 1 vez

const { texto, arquivos } = require('./base');


console.log('RegExp1: ');
const regExp1 = /Lo+rem/gi; 
console.log(texto.match(regExp1)); // Saída: [ 'Looooooorem', 'lorem', 'Lorem', 'lorem' ]


console.log('\nRegExp2: ');
const regExp2 = /\.jpe?g/gi; 

for (const arquivo of arquivos){
  const valido = arquivo.match(regExp2);
  if(!valido) continue;
  console.log(arquivo, arquivo.match(regExp2));
}
/**
    Saída: Atenção.jpg      [ '.jpg' ]
           FOTO.jpeg        [ '.jpeg' ]
           Meu gatinho.jpg  [ '.jpg' ]
           Meu gatinho.JPG  [ '.JPG' ]
           Meu gatinho.JPEG [ '.JPEG' ]
*/


console.log('\nRegExp3: ');
const regExp3 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos){
  console.log(arquivo, arquivo.match(regExp3));
}

/**
    Saída: Atenção.jpg [ '.jpg' ]
           FOTO.jpeg [ '.jpeg' ]
           Meu gatinho.jpg [ '.jpg' ]
           Meu gatinho.JPG [ '.JPG' ]
           Meu gatinho.JPEG [ '.JPEG' ]
           Meu gatinho.JPeeEeEeEeEEEEeeeeEG null
           Mario.png null
           lista de compras.txt null
*/