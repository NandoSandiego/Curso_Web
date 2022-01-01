let dobro = function (a){
    return 2 * a
}

dobro = (a) => {return 2 * a} 
/**
 * Sempre é uma função anonima
 * para chamar depois tem q armazenar em 
 * alguma variável ou constante
 */

// Otra forma

dobro = a => 2 * a //return está implicito
console.log(dobro(Math.PI))

//Outro exemplo

let ola = function () {
    return 'Olá'
}

ola = () => 'Ola' //ou
ola = _ => 'Ola' // Possui parâmetro

console.log(ola())
