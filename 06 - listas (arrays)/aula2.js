const notas = []

notas.push(5)
notas.push(7)
notas.push(8)
//notas.push(2)
notas.push(5)
notas.push(8)


let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma = soma + nota;
}
const media = soma/notas.length
//resultado :
console.log(media)

// //tamanho da lista 
// console.log(notas.length,"tamanho da lista")

// console.log(notas)

// // teste de média manual:
// // const soma = notas[0]+notas[1]+notas[2]+notas[3]+notas[4];
// // console.log(soma / 5);


// const nome = 'Mateus Lopes Amorim';

// //percorrer dinamicamente a lista:
// for (let i = 0; i <= nome.length; i++) {
// console.log(nome[i]);   
// }
