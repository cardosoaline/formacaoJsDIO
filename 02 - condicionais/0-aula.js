//Estruturas condicionais:

// booleanos 0 e 1

const camisetaRenanAzul = true;
const camisetaAlineAzul = false;

//condicional

console.log(10 > 5 ) //true

console.log(10 < 5 ) //false

console.log( 10 >= 10) // true

//resto da divisão:

const numero = 0;

const eNumeroPar = (numero % 2 === 0); // se for 0 número par

// console.log(eNumeroPar)


// == Dois iguais ignora o tipo da variavél,conversão inplicita.

if(eNumeroPar){
    console.log(eNumeroPar,"Número par!")
}

//Negação!
if(!eNumeroPar){
    console.log(eNumeroPar,"Número impar!,negação")
}

//if else
if(eNumeroPar){
    console.log(eNumeroPar,"Número par!")
} else if(!eNumeroPar){
    console.log(eNumeroPar,"Número impar!")
} else {
    console.log(eNumeroPar,"Número impar!")
}
