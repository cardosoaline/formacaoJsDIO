// Faça um programa para calcular o valor de uma viagem

// você terá 3 variavéis sendo elas :

// 1 preço do combustivel
// 2 gasto medio do combustivél por km 
// 3 distancia em km da viagem

// imprima no console o valor que será gasto de combustivél para realizar esta viagem

// const valorCombustivel = 5.70;
// let km = 0;
// let valorGastoViagem = 0;

// //testando calculo:
// km = 120;
// valorGastoViagem = valorCombustivel/km;

// console.log("Valor que será gasto na viagem: ",valorGastoViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

// km = 100;
// valorGastoViagem = valorCombustivel/km;
// console.log("Valor que será gasto na viagem: ",valorGastoViagem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));


// Resolução do curso:

//Separe o código em trechos lógicos:
const precoCombustivel = 5.79;
let kmPorLitro = 12; //nomeclatura das variavéis sempre importante!.
let distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

// O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

// style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

// decimal para representar números simples.

// currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

// percent para formato percentual.

// currency: A moeda para usar na formatação monetária
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
console.log(valorGasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

//Arredondar o valor simples com toFixed:
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log(valorGasto.toFixed(2));

