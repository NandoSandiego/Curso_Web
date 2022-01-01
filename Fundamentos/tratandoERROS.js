throw{
    nome : erro.name,
    msg : erro.message,
    Date : new Date


}



function imprimirNomeGritando(obj){
    try{// bloco que potencialmente pode gerar um erro
    
        console.log(obj.name.toUpperCase()+'!!!') //Aqui se colocou 'name'

    }catch (erro){ // pode ser qualquer outro nome
        //Tratar e relançar o erro,

        tratarErroeLançar(erro)

    }finally{
        //Sempre será executado
        console.log('final')
    }
}

const obj = {nome:'Nando'} //'Aqui se colocou nome'
imprimirNomeGritando(obj)