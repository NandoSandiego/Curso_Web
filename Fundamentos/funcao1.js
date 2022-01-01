/** Fução é um Verbo (AÇÃO)
 * Trecho de código que pode ser reusado
 * 
 *  
 */

//Função sem retorno

function imprimirSoma(a,b)
{
    soma = a + b ; 
    console.log(soma);
}

imprimirSoma(2,4)
imprimirSoma(3) // Segundo valor é indefinido
imprimirSoma(3,4,2,4,5) // Pega os dois primeiro e ignora os restantes
imprimirSoma() 

//Função com Retorno
function Soma(c, d = 3 )
{
    return c + d
}

console.log( Soma(6) )