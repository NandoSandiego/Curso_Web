
/** É um VETOR
 * Uma estrutura unidirecional
 * Consegue agrupar multiplos valores
 * Heterogêneo (por ser fracamente tipada)
 * flexivel (pode aumentar ou diminuir)
 */

const valores = [4, 5.6, 'Ola Mundo', false ]
console.log(valores[3], valores[0])
console.log(valores[5]) // o indice 5 está INDEFINIDO
valores[7] = 521
console.log(valores)
console.log(valores.length) // mostra quantos elementos tem no array
valores.push({id:3},true, null, "teste") // pode misturar coisas, mas nao é uma boa prática
console.log(valores)
console.log(valores.pop()) // retira o ultimo valor do array 
delete valores[3] // retira o valor de determinado elemento
console.log(typeof valores) // Array é um tipo object

