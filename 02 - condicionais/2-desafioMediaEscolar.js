const notaUm = 8;
const notaDois = 7;
const notaTres =7;

const media = (notaUm+notaDois+notaTres) / 3;

//classificaçao:
console.log(media)

if(media < 5){
    console.log("Reprovado estude mais!");  
}else if(media >= 5 && media <= 7){
    console.log("recuperação estude mais!");
} else{
    console.log("Parabéns aprovado!");
}