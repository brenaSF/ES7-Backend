//Lista de exercícios de JavaScript
// Brena dos Santos Freitas
// Heitor da Piedade Ferreira


//1. Declare uma variável usando "let" com o nome "nome" e atribua a ela seu nome.
let nome = "Brena Freitas";

//2. Declare uma variável "idade" com valor 25 usando "var".
var idade = 25;

//3. Tente redeclarar a variável "idade" usando "var" com outro valor.
idade = 30;

//4. Tente redeclarar uma variável "nome" com "let" no mesmo escopo. O que acontece?
// let nome = "Ana"; 
console.log("Não é possível declarar com let no mesmo escopo");
console.log("-----------------------");

//5. Escreva um código que exiba "Olá, mundo!" usando alert().
//alert("OLá,mundo!");

// 6. Crie um script que exiba seu nome no console usando console.log().
console.log(nome);
console.log("-----------------------");

//7. Escreva uma estrutura condicional que verifique se uma variável "nota" é maior ou igual a 7.
var nota = 8;

console.log(nota>=7 ?"É maior ou igual a 7": "É menor que 7"); 

console.log("-----------------------");

//8. Crie uma estrutura if/else que exiba "Par" se o número for par e "Ímpar" caso contrário.

if(nota%2){
    console.log("Numero é par");
}

else{
    console.log("Número é ímpar");
}
console.log("-----------------------");

//9. Declare duas variáveis e some seus valores, exibindo o resultado com console.log().
var var1 = 3 ;
var var2 = 5 ;

console.log(var1+var2);
console.log("-----------------------");

//10. Crie uma função que receba dois números e retorne a multiplicação deles.
function multiplica(num1,num2){
    return num1*num2;
}

resultado = multiplica(9,7);
console.log(resultado);

console.log("-----------------------");

//11. Implemente uma função que use async/await e aguarde 1 segundo antes de mostrar "Pronto".

async function esperar() {

    let testePromise = new Promise((resolve,reject) => {
        setTimeout(() => {
           console.log("Pronto");
            resolve();
        },1000);
    
    });

    await testePromise;
        
}

esperar();

//12. Declare uma variável "x" com valor 10 e incremente seu valor em 5.
var x = 10;

x+=5;

console.log(x);
console.log("-----------------------");

//13. Escreva um código que exiba "Acesso permitido" se a idade for maior ou igual a 18.
console.log(idade>=18 ? "Acesso permitido":"Acessoo Negado");
console.log("-----------------------");

//14. Utilize o operador ternário para verificar se um número é positivo ou negativo.
var num =9;

console.log(num>0? "Número é positivo":"Número é negativo");
console.log("-----------------------");

//15. Crie um array com 3 nomes e exiba o segundo nome. 
var listaNomes = ["Brena","Bruna","Maria"];

console.log(listaNomes[1]);
console.log("-----------------------");

function tempoEscgotado() {
    console.log('Tempo esgotado')
}
const tempo = setTimeout(tempoEscgotado, 3000);
