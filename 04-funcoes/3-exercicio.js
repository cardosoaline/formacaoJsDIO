//aprender a abstrair os problemas.

//Código condiçã de pagamento:
//1 - á vista Débito,rebece 10% de desconto.
//2 - á vista no dinheiro ou pix,recebe 15% de desconto.
//3 - duas vezes,preço normal de etiqueta sem juros;
//4 - Acima de duas vezes preco normal de etiquetas mais juros 10%
const precoEtiqueta = 100;
const formaDePagamento = 2;

function calculaValorEtiqueta(formaDePagamento,precoEtiqueta){
    if(formaDePagamento === 1){
        aplicaDesconto(precoEtiqueta,0.10)
    }else if(formaDePagamento === 2  ){
        aplicaDesconto(precoEtiqueta,0.15)
    }else if(formaDePagamento === 3){
        console.log("o cliente deve pagar R$ ",precoEtiqueta);
    }else if(formaDePagamento === 4){
        aplicaJuros(precoEtiqueta);
    }
}

function aplicaDesconto(precoEtiqueta,desconto){
    let valorFinal = precoEtiqueta - (precoEtiqueta*desconto);
    console.log(valorFinal)
    return valorFinal;
}

function aplicaJuros(precoEtiqueta) {
    let valorFinal =  precoEtiqueta + (0.1*precoEtiqueta);
    console.log("o cliente deve pagar R$ ",valorFinal);
}

calculaValorEtiqueta(4,precoEtiqueta);