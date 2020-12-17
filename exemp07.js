// Retrovisores com match e Replace
const { html2 } = require('./base');

// $1 $2 $3 ... $n => Retrovisores => seleciona usando \numero

console.log(html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHAHA $4 HAHAH $5'));
/**
 * Saída: <p
 data-teste='teste' 
 class="teste teste"> HAHAHA 
 Olá mundo
 HAHAH </p> <p> HAHAHA Olá de novo HAHAH </p> <div> HAHAHA Sou a div HAHAH </div>
*/
