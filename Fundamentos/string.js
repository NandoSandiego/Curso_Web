//é uma cadeia de caracteres
let escola ="COD3R"
/*
 * pode delimita-las com:
 *      " string"
 *      'string'
 *      `string`
 */
console.log(escola.charAt(4))// retorna o caractere q está na posição 4
console.log(escola.charCodeAt(3))// retorna o valor na tabela ASCII (Unicode)
console.log(escola.indexOf(2)) // retorna o indice associado ao digito
console.log(escola.substring(1))//Imprime a partir do indicie indicado
console.log(escola.substring(2,4))// Imprime do indice 2 até o indice 4
console.log('Escola '.concat(escola).concat(' !')) // concatena 
console.log('Escola ' + escola + ' !')// também concatena

console.log(escola.replace(3,'E')) // na posição '3' ele coloca a letra 'E'
console.log(escola.replace(/\O/g,'F')) // Substitua todos os digitos O pela letra F

console.log('Ana,maria,Joao,beto'.split(','))// converte em array
