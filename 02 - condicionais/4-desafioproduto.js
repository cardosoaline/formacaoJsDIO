const precoEtiqueta = 100;
const formaDePagamento = 2;

//aprender a abstrair os problemas.

//Código condiçã de pagamento:
//1 - á vista Débito,rebece 10% de desconto.
//2 - á vista no dinheiro ou pix,recebe 15% de desconto.
//3 - duas vezes,preço normal de etiqueta sem juros;
//4 - Acima de duas vezes preco normal de etiquetas mais juros 10%

if(formaDePagamento === 1){
    let valorFinal = precoEtiqueta - (precoEtiqueta*0.10);
    console.log("o cliente deve pagar R$ ",valorFinal);
}else if(formaDePagamento === 2  ){
    let valorFinal = precoEtiqueta - (precoEtiqueta*0.15);
    console.log("o cliente deve pagar R$ ",valorFinal);
}else if(formaDePagamento === 3){
    console.log("o cliente deve pagar R$ ",precoEtiqueta);
}else if(formaDePagamento === 4){
    let valorFinal =  precoEtiqueta + (0.1*precoEtiqueta);
    console.log("o cliente deve pagar R$ ",valorFinal);
}

