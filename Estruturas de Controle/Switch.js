const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('Lendário')
            break;
        case 9:
            console.log('Mitológico')
            break;
        case 8: case 7:
            console.log('Normal')
            break;
        
        case 6: case 5: case 4:
            console.log('continua')
            break;
        case 3:
        case 2:
        case 1:
        case 0: 
        console.log('Reprovado')
        break;
        default:
            console.log('Nota Inválida')
            break;


        
    }
}

imprimirResultado(8)