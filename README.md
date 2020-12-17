# RegExp javascript
De maneira geral, expressões regulares em JavaScript são utilizadas para filtrar dado(s) de uma String. 
O repositório em si contém apenas alguns dos casos mais utilizados com expressões regulares, para aprofundamento do conteúdo, leia a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp) oficial.

## Flags
Se especificado, **flags** indica os marcadores que podem ser adicionados, ou se um objeto é suficiente para o padrão, os valores de flags serão substituidos por qualquer uma das flags de objetos. O valor de flags é uma string contendo qualquer combinação dos seguintes valores:

### `g` 
 - corresponde globalmente; acha todas as correspondências em vez de parar após achar a primeira

### `i`
 - ignora maiúsc./minúsc.; Se a flag u estiver ativa, deve ser utilizado o Unicode case folding

### `m`
  - multilinha; trata caracteres de início e fim (^ e $) ao operar sobre múltiplas linhas (ou seja, corresponder o início ou fim de cada linha (delimitado por \n ou \r), e não apenas o começo ou fim de toda a string de entrada)

## Caracteres 
### `.`
 - (O ponto) corresponde um único caracter qualquer exceto os caracteres de nova linha: \n, \r, \u2028 ou \u2029.
 - Note que a flag multilinha m não muda o comportamento do ponto. Então para corresponder um padrão por múltiplas linhas, o conjunto de caracteres [^] pode ser usado, que corresponderá qualquer caractere, incluindo novas linhas.
 - Por exemplo, /.y/ corresponde "my" e "ay", mas não "yes", em "yes make my day".

### `\d`
 - Corresponde um caractere de dígito no alfabeto basic Latin. Equivalente a [0-9].
 - Por exemplo, /\d/ ou /[0-9]/ corresponde "2" em "B2 é o número da suíte".

### `\D`
 	- Encontra correspondência com um caractere que não seja número. Equivalente a [^0-9].
  - Por exemplo,  /\D/ ou /[^0-9]/ econtra correspondente 'C' em "C3 está ativada."

### `\w`
 - Corresponde qualquer caractere alfanumérico do alfabeto basic Latin, incluindo o underline. Equivalente a [A-Za-z0-9_].
 - Por exemplo, /\w/ corresponde "a" em "apple", "5" em "$5.28", e "3" em "3D".

### `\W`
 - Corresponde qualquer caractere que não é um alfanumérico do alfabeto basic Latin. Equivalente a [^A-Za-z0-9_].
 - Por exemplo, /\W/ ou /[^A-Za-z0-9_]/ corresponde "%" em "50%".

### `\s`
 - Corresponde um único caractere de espaço em branco, incluindo espaço, tabulação (tab), quebra de página, nova linha (LF) e outros espaços Unicode. Equivalente a [ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000].
 - Por exemplo, /\s\w*/ corresponde " bar" em "foo bar".

### `\S`
 - Corresponde um único caractere que não seja um espaço em branco. Equivalente a [^ \f\n\r\t\v​\u00a0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u202f\u205f​\u3000].
 - Por exemplo, /\S\w*/ corresponde "foo" em "foo bar".

## Conjunto
### `[abc]`
 - Um conjunto de caracteres. Pesquisa correspondência para qualquer um dos caracteres entre colchetes. Você pode especificar um intervalo de caracteres usando hífen. Caracteres especiais (como o ponto (.) e o asterisco(*)) não tem significado algum quando está dentro de um conjunto de caracteres. Não necessita utilizar escape neles. Mas, se utilizar escape também irá funcionar.
 - Por exemplo, [abcd] é o mesmo que [a-d]. Com a expressão será encontrado o 'b' em "beijo" e o 'c' em "chop". A expressão /[a-z.]+/ e /[\w.]+/ ambos encontraram as letras que formam "test.i.ng".

## Limites
### `^`
 - Corresponde o início de uma entrada. Se a flag multilinha é utilizada, também corresponde imediatamente após um caractere de quebra de linha.
 - Por exemplo, /^A/ não corresponde o "A" em "an A", mas corresponde o primeiro "A" em "An A".

### `$`
 - Corresponde o fim de uma entrada. Se a flag multilinha é utilizada, também corresponde imediatamente antes de um caractere de quebra de linha.
 - Por exemplo, /o$/ não corresponde o "o" em "cantor", mas corresponde em "canto".

## Quantificadores 

### `*`
 - Corresponde a expressão que o precede repetida 0 ou mais vezes. Equivalente a {0,} 
 - Por exemplo, /bo*/ acha uma correspondência para 'boooo' em "Scoob doo" e 'b' em "A bird warbled", mas nenhuma em "A goat grunted".

### `+`
 - Corresponde a expressão que o precede repetido 1 ou mais vezes. Equivalente a {1,}.
 - Por exemplo, /a+/ acha correspondência para o 'a' em "candy" e todos os "as" em "caaaaaaandy", mas nâo encontra em "cndy".

### `?`
 - 	Corresponde a expressão que o precede repetido 0 ou 1 vez. Equivalente à {0,1}.
 - Por exemplo, /e?le?/ encontra o 'el' em "angel" e o 'le' em "angle" e também o 'l' em "oslo".
 - Se usado imediatamente após qualquer um dos quantificadores *, +, ? ou {}, faz o quantificador não guloso (combinando o número mínimo de vezes), como um oposto para o padrão que é guloso (combinar o número máximo possível). Por exemplo, aplicando /\d+/ em "123abc" encontra "123". Mas aplicando /\d+?/, apenas "1" será encontrado.
 - Também usado em declarações lookahead, descritas sob x(?=y) e x(?!y)logo abaixo na tabela.

## Greedy e non-greedy (lazy)
### `Greedy`
- Greedy quer dizer "a maior string possível".
- Por exemplo: ```h.+l``` combina com ```hell``` em ```hello```.

### `Non-Greedy (lazy)`
- Lazy quer dizer "a menor string possível".
- Por exemplo: ```h.+?l``` combina com ```hel``` em ```hello```.

### Tabela dos quantificadores
| Quantificador Greedy| Quantificador Lazy|    Descrição             |
|-------------------|-----------------|------------------------------|
| *                 | *?              | Quantificador * : 0 ou mais  |
| +                 | +?              | Quantificador + : 1 ou mais  |
| ?                 | ??              | Quantificador opcional: 0 ou 1 |
| {n}               | {n}?            | Quantificador: exatamente n  |
| {n,}              | {n,}?           | Quantificador: n ou mais     |
| {n,m}             | {n,m}?          | Quantificador: entre n e m   |


## Exercícios
### Tabela de exemplos/exercícios básicos classificados por nível de dificuldade:
|  Nome   |           Link            | Dificuldade |
| ------  |          ------           | ------- | 
| Exemp01 | [Exemplo](./exemp01.js)   | Fácil   |
| Exemp02 | [Exemplo](./exemp02.js)   | Fácil   |
| Exemp03 | [Exemplo](./exemp03.js)   | Fácil   | 
| Exemp04 | [Exemplo](./exemp04.js)   | Médio   | 
| Exemp05 | [Exemplo](./exemp05.js)   | Médio   | 
| Exercício01 | [Exercício](./exercicio01.js) | Difícil | 
| Exemp06 | [Exemplo](./exemp06.js)   | Fácil   | 
| Exemp07 | [Exemplo](./exemp07.js)   | Difícil | 
| Exemp08 | [Exemplo](./exemp08.js)   | Difícil | 


## Fonte
Grande parte dos conteúdos explicados aqui, foram retirados do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp).