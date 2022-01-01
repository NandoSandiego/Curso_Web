// para quantidades indeterminadas de repetições
function geraInteiroAleatorio(min, max){
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
}


let opcao = 0 

while (opcao !=-1){
    opcao = geraInteiroAleatorio(-1,10)
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log("até a proxima")