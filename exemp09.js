// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g;

// Não números
const naoNumerosRegEx = /\D/g;

// Valida IP
const validaIpRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
const cpfRegEx = /(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida telefones
const validaTelefone = /^(\(\d{2}\)\s*)?(\d{4})-(\d{4})$/g;

// Valida senhas fortas
const senhaForteRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g;