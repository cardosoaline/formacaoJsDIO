//funções pequeno trecho de codigo onde possamos invocar a execução dela:
//sintaxe
function nomeDaFuncao(){
console.log('teste');
}
nomeDaFuncao();

//função com parametros:

function sayMyName(name){
    console.log('your name is '+ name)
}
sayMyName("Aline")
//função com retorno:
function quadradoValor(valor){
 return valor * valor;
}

const x = quadradoValor(10);
console.log(x,'valor ao quadrado');

//função com mais parametros basta separar por virgulas:
function incrementarJuros(valor,percentualDeJuros){
const valorDeAcrecimo = (percentualDeJuros/100)*valor;
return valor +valorDeAcrecimo;
}
console.log(incrementarJuros(100,10))

//Como organizar funções:

