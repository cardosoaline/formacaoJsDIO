const altura = 1.67;
const peso = 92;

const imc = peso / (Math.pow(altura, 2));
// math.pow(altura,2) ao quadrado se for ao cubo seria 3
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
console.log(imc)

if (imc < 18.5) {
    console.log("você está abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("você está com peso normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("você está acima do peso ");
  } else if (imc >= 30 && imc < 40) {
    console.log("você está obeso ");
  } else {
    console.log("você está com obesidade agressiva. ");
  }
