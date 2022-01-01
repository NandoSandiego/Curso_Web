function soma(){
    let soma = 0;
    for(i in arguments){    // com arguments tem a possibilidade de
                            // pegar todos os parametros que foram chamados em uma função
        soma +=arguments[i]
    }

    return soma;

}

console.log(soma())
console.log(soma(1))
console.log(soma(3.5, 7.2, 8.9))
