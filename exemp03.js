// Quantificadores
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