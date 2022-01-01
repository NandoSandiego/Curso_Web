let valor // nao esta inicalizada, por padrão undefined

console.log(valor)
//console.log(valor1) // O valor2 não foi declarado 

valor2 = null  
/**
 * nao está apontando pra nenhum endereço de memória
 * ausencia dede valor
 * */

console.log(valor2)
//console.log(valor2.toString())// Erro

const produto = {} // O produto está definido
console.log(produto.preco) // O que nao está definido é o preco (UNDEFINED)

produto.preco = 3.50
console.log(produto)
produto.preco = undefined // Evite atribuir undefined 
delete produto.preco //para tirar um atributo de um objeto

console.log(produto)
produto.preco = null //sem preço
console.log(!!produto)

