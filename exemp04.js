//Greedy e non-greedy (lazy)

const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy | Saída: [ '<p>Olá mundo </p> <p>Olá de novo</p>' ]
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy | Saída: [ '<p>Olá mundo </p>', '<p>Olá de novo</p>' ]