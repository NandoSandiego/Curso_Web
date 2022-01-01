//Extrair notas menores que 7
const notas = [7.7, 6.5, 8.9, 5.4, 9.8, 3.2 ]

//Sem callback
let notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
        
    }
}
console.log(notasBaixas1)

//Com Callback

notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)