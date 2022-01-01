//For in -> dar o indice de cada um dos elementos

const notas = [3.5,5.3,6.3,3.3,9.7] 

for(let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 21,
    peso:56
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

