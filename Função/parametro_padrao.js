//Estratégias para gerar valor padrão
//Estratégia 01
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}


console.log(soma1())
console.log(soma1(3))
console.log(soma1(4,5,6))
console.log(soma1(0,0,0)) 

//Estratégia 02, 03, 04
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c 
} 
console.log(soma2())

// Valor padrao ES 2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(0, 0, 0))