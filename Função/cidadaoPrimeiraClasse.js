//Função em JS é First-Class Objct (Citzen)

//Criar de forma literal
function func1(){ }

//Armazenando em uma Variável

let func2 = function(){}
const func3 = function(){}

//Armazenar dentro de um Array
const array1 = [function(a,b) {return a + b}, func1, func2]
console.log(array1[0](2,3))

//Armazenar em um atributo de objeto
const obj1 = {}
obj1.falar = function(){return 'Opa'}
console.log(obj1.falar())

//passar função como parâmetro
function correr(func4){
    func4()
}

correr(function() { console.log('Executando...') } )

//Uma função pode retornar/ conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) //ou
const a_mais_b = soma(4,5)
a_mais_b(6)



