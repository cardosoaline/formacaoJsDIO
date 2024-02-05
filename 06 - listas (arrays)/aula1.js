
// Array com nomes :
const alunos = ['joão','vitor','Mariana'];

//mostrando item do array
console.log(alunos[0]);

// adicionando nomes no array
alunos.push('Caio');

//adicionando manualmente :
alunos[4] = 'Aline';
console.log(alunos);

//substituindo valores 
alunos[3] = "Mateus";

//posso adicionar numeros também :
alunos.push(5);
console.log(alunos);

// campo sem estar ocupado exemplo 7 aparece underfined:
console.log(alunos[7]);

//pega ultimo campo do array
alunos.pop();
console.log(alunos);

//pega primeiro campo do array
 alunos.shift()
console.log(alunos);

