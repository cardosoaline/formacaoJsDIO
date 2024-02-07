
//Função que verifica se é maior de idade 

function verificaMaiorIdade(anoAtual,anoDeNascimento){
const idade = anoAtual-anoDeNascimento;
    if(idade >= 21){
        console.log('você atingiu a maior idade!');
    }else{
        console.log("Você ainda não atingiu a maior idade, possui ",idade," anos")
    }
}

(function main(){
    const anoAtual = 2024;
    const anoDeNascimento = 2021;
    verificaMaiorIdade(anoAtual,anoDeNascimento)
})()
