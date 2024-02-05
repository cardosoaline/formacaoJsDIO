// 1) Crie um programa que dado o número imprima a sua tabuada:

// const numero = 7;

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for (let i= 0; i < numeros.length; i++) {
//     const resultado = numero * numeros[i] ;
//     console.log(numero,"x",numeros[i] ,"=",resultado)   
// }

// 2) Crie um programa que seja capaz de percorrer uma lista de números que imprima cada número par encontrado:

const numero = 2;
const numeros = [2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    const  numerosPares = numeros[i];
    if(numerosPares % numero === 0){
        console.log("número par",numerosPares)
    }else {
        console.log("número impar",numerosPares)
    }
}