function teste1(numero){
    if(numero>=7) // As chaves são opcionais, só que fica com a unica sentença de código
        console.log(numero) 
        console.log('Final') //está fora do If, então sempre será executada
    
}

teste1(8)
teste1()

function teste2(num){
    if(num>2);{ // cuidado com o ';' . nao usar com o bloco 'if' e as demais estruturas de controle
        console.log(num)
    }
}

teste2(4)
teste2(5)