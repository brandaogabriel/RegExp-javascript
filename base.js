const texto = `
Looooooorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Suspendisse nec justo non ante gravida dignissim. 

Aenean at congue urna. Vestibulum ante ipsum primis
in faucibus orci luctus et ultrices posuere cubilia 
curae; Aliquam non elit nec est posuere auctor in at augue. 
Cras tincidunt, metus sit amet auctor rhoncus, ex metu
s 
facilisis velit, ac euismod urna arcu eu nisi. Suspendisse lorem 
nibh mi, faucibus nec turpis ut, ullamcorper faucibus ex. 
Fusce placerat odio mauris, quis condimentum risus 

condimentum ac. Ut vulputate rhoncus nibh eget vulputate. 
Suspendisse dignissim, elit et condimentum convallis, 
lectus elit placerat mi, mollis aliquam ligula leo vitae 
mauris. Cras efficitur ligula odio, dapibus Lorem vehicula dui 
pulvinar ac. Integer dignissim feli
s ipsum, at pulvinar 
augue vulputate eu. Maecenas ex tellus, imperd
iet quis 
lorem sed, accumsan semper libero. Quisque interdum enim 
a sapien malesuada feugiat. Donec suscipit sagittis erat 
non efficitur.
`;

const arquivos = [
  'Atenção.jpg',
  'FOTO.jpeg',
  'Meu gatinho.jpg',
  'Meu gatinho.JPG',
  'Meu gatinho.JPEG',
  'Meu gatinho.JPeeEeEeEeEEEEeeeeEG',
  'Mario.png',
  'lista de compras.txt',
];

const html = '<p>Olá mundo </p> <p>Olá de novo</p>';

const alfabeto = 
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ™ ƒ 0123456789 ƒ';

const cpfs = `
  Os CPFS são:
  254.224.877-45 215.978.456-12 
  047.258.369-96 963.987.321-00
`;

const ips = `
  Os IPS são:
  0.0.0.0
  198.168.0.25
  127.0.0.1
  10.10.5.12
  255.255.255.255
`;

module.exports = {
  texto,
  arquivos,
  html,
  alfabeto,
  cpfs,
  ips,
}
