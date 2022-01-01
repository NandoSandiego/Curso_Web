const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1,peso2);
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.973
const avaliacao2 = 8.452

const total = (avaliacao1*peso1) + (avaliacao2*peso2)
const media = total /(peso1+peso2)
console.log (media)

console.log(media.toFixed(2))//arredonda o número e deixa duas casas decimais
console.log(media.toString())// retorma o valor como sendo uma string 
console.log(media.toString(2))// retorna o valor como binário
console.log(typeof media)

