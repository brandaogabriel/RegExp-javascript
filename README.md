# RegEx javascript
De maneira geral, expressões regulares em JavaScript são utilizadas para filtrar dado(s) de uma String. 
O repositório em si contém apenas alguns dos casos mais utilizados com expressões regulares, para aprofundamento do conteúdo, leia a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp) oficial.

## Flags
Se especificado, **flags** indica os marcadores que podem ser adicionados, ou se um objeto é suficiente para o padrão, os valores de flags serão substituidos por qualquer uma das flags de objetos. O valor de flags é uma string contendo qualquer combinação dos seguintes valores:

### `g` 
 - corresponde globalmente; acha todas as correspondências em vez de parar após achar a primeira

### `i`
 - ignora maiúsc./minúsc.; Se a flag u estiver ativa, deve ser utilizado o Unicode case folding

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

## Conjunto
### `[abc]`
 - Um conjunto de caracteres. Pesquisa correspondência para qualquer um dos caracteres entre colchetes. Você pode especificar um intervalo de caracteres usando hífen. Caracteres especiais (como o ponto (.) e o asterisco(*)) não tem significado algum quando está dentro de um conjunto de caracteres. Não necessita utilizar escape neles. Mas, se utilizar escape também irá funcionar.
 - Por exemplo, [abcd] é o mesmo que [a-d]. Com a expressão será encontrado o 'b' em "beijo" e o 'c' em "chop". A expressão /[a-z.]+/ e /[\w.]+/ ambos encontraram as letras que formam "test.i.ng".


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


## Fonte
Grande parte dos conteúdos explicados aqui, foram retirados do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp).