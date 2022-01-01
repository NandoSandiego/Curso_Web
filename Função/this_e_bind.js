const pessoa = {
    saudacao : 'Bom dia!' ,
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito de paradigmas: funcional e Orientada a Objeto

const falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas()

