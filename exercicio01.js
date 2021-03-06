const { cpfs, ips } = require ('./base');


// 1. Exercício: Filtrar os cpfs do arquivo base
const cpf = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;

//Alternativa 1
const cpfAlter = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g;

// Alternativa 2
const cpfAlter2 = /(\d{3}\.){2}\d{3}\-\d{2}/g;

console.log(cpfs.match(cpf)); // Saída: ['254.224.877-45', '215.978.456-12', '047.258.369-96', '963.987.321-00']

console.log(cpfs.match(cpfAlter)); // Saída: ['254.224.877-45', '215.978.456-12', '047.258.369-96', '963.987.321-00']

console.log(cpfs.match(cpfAlter2)); // Saída: ['254.224.877-45', '215.978.456-12', '047.258.369-96', '963.987.321-00']


// 2. Exercício: Filtrar os ips corretamente do arquivo base
console.log('\nIPS:');

// 250 - 255  = 25[0-5]
// 200 - 249  = 2[0-4][0-9]
// 100 - 199  = 1\d{2}
// 10  - 99   = [1-9]\d
// 0   - 9    = \d

const ip = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g; // Saída: ['0.0.0.0', '198.168.0.25', '127.0.0.1', '10.10.5.12', '255.255.255.255']

console.log(ips.match(ip));