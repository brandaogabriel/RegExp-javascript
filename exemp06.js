// Começa com e termina com
const { cpfs, cpfs2 } = require('./base');

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp)); // Saída: [ '254.224.877-45', '215.978.456-12', '047.258.369-96' ]