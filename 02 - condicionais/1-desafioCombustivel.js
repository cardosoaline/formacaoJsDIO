const precoEtanol = 2;
const precoGasolina = 5.82;
const kmPorLitro = 10;
const distanciaPorKmPercorrida = 100;

const isEtanol = false;

const litrosConsumidos = distanciaPorKmPercorrida / kmPorLitro;
// poderia ser somente o else simples coloquei somente para testar o else if

if (isEtanol) {
  const litrosConsumidos = distanciaPorKmPercorrida / kmPorLitro;
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.toFixed(2), "Valor gasto com Etanol");
} else if (!isEtanol) {
  const litrosConsumidos = distanciaPorKmPercorrida / kmPorLitro;
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.toFixed(2), "Valor gasto com Gasolina");
}
