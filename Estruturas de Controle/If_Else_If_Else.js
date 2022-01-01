Number.prototype.entre = function(inicio, fim){
    return this >=inicio && this<=fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9,10)){
        console.log('Lendário!!!');

    } else if (nota.entre(7,8.99)){
        console.log('Mitológico!!');

    }else if(nota.entre(5,6.99)){
        console.log('Normal');

    } else if(nota.entre(3,4.99)){
        console.log('what !?');

    } else if(nota.entre(0,2.99)){
        console.log('recuperação');

    }else{
        console.log('Nota inválida');
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(-1)