// Armazenando uma função em uma variável

const imprimirsoma = function(a, b)
{
    console.log(a+b)
}

imprimirsoma(2,3)

//Armazenando uma função Arrow em uma variável

const soma = (c, d ) => {
    // '=>' substitui o nome 'function'
    return c + d
}

console.log(soma(2,4))

//Retorno implicito
const subtracao =(e, f) => e - f
console.log(subtracao(6,7))

//Outra forma (Mais resumida)
const imprimir2 = g => console.log(g)

imprimir2("Ola Mundo")