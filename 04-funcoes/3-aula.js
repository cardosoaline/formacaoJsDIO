//funções invocadas imediatamente:

//funções são objetos que é do tipo função.


// IMC função


function classificarIMC(imc){

    if (imc < 18.5) {
        return "você está abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        return "você está com peso normal";
      } else if (imc >= 25 && imc < 30) {
        return "você está acima do peso ";
      } else if (imc >= 30 && imc < 40) {
        return"você está obeso ";
      } else {
        return "você está com obesidade agressiva. ";
      }
    
}

function calculaImc(peso,altura){
    return peso/Math.pow(altura,2);
}


function main(){  
    const altura = 1.67;
    const peso = 92;
    const imc = calculaImc(peso,altura);
        console.log(classificarIMC(imc));
}

// const main2 = main;

// main2();

//consegue passar uma function como parametro para outra function


//consegue passar uma outra função exemplo e ainda manipular para reescrever a função e imprimir outro valor:

main = function(){
    console.log(21)
}

main();

//Para se auto executar ficará desta forma,sem precisar que você a execute:
//Isola o scopo e se chama também função anonima:
(function main(){  
    const altura = 1.67;
    const peso = 92;
    const imc = calculaImc(peso,altura);
        console.log(classificarIMC(imc));
})()