function Carro(velMax = 200, delta = 5){
   
    //Atributo privado
    let velAtual = 0
   
    //Método Público
    this.acelerar =function(){
        if(velAtual+delta<= velMax){
            velAtual += delta
        } else{
            velAtual = velMax
        }
    }

    //Metodo público
    this.getVelAtual = function (){
        return velAtual
    }

}

const uno = new Carro
uno.acelerar( )
console.log(uno.getVelAtual(350, 20))

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar(ferrari.getVelAtual())