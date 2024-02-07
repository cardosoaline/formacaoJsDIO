
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

main();