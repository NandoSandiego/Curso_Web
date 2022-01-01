const a = {name: 'teste'} // A variavel 'a' contém é o endereço no qual o objeto está localizado
console.log(a)
const b = a /*
            aqui se iguala os endereços 'a' e 'b'(apontam para o mesmo local de memória)
                atribuição por referência (trabalha com objetos)
            */ 

let c = 3 
let d = c
d++
/*
 *quando se trabalha com tipos primitivos
 *se faz uma cópia por valor
 * (Os valores são independentes)
 */
console.log('valor de c:'+ c +' // Valor de d:'+d)