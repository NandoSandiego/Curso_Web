function geraInteiroAleatorio(min,max){
    const valor = Math.random(max - min)+ min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = geraInteiroAleatorio(-1,10)
    console.log(`O valor escolhido foi ${opcao}.`)
} while(opcao !=-1)

console.log('Fim do programa \n -------------------')