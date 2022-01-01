function area(largura, altura){
    const area = largura*altura
    if(area>20){
        console.log(`Valor acida do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(4,2))
console.log(area(2))
console.log(area())
console.log(area(4,6,3))
area (4,7)