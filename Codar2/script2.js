// Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos. 


let valores = [];
let soma = 0;
let media = 0;
let valor = 0;

for (let i = 0; i < 6; i++) {
  valor = parseFloat(prompt("Digite um valor:"));
  soma += valor;
  valores[i] = valor;
  media = soma / 6;
}

for (let a = 0; a < 6; a++) {
  alert("Os valores informados foram: " + valores[a]);
}
  console.log("Valores informados: " + valores);
  alert("A média aritmética desses valores é: " + media);

// Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes) 

let numeros = [];

for (let i = 0; i < 4; i++) {
  numeros[i] = parseFloat(prompt("Digite um número:"));
}
alert("O primeiro número informado foi: " + numeros[0]);
alert("O último número informado foi: " + numeros[3]);
alert("O maior número informado foi: " + Math.max(...numeros));

//Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. 


let numeros2 = [];
let soma2 = 0;
let valor2;

for (let i = 0; i < 6; i++) {
  valor2 = parseFloat(prompt("Digite um número:"));
  numeros2[i] = valor2;
  if (valor2 <= 72){
    soma2 += valor2;
  }
}
console.log("Numeros:"+ numeros2);
 alert("A soma dos números é: " + soma2); 


//Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

let notas = [];
let soma3 = 0;
let media1 = 0;

for (let i = 0; i < 4; i++) {
  notas[i] = parseFloat(prompt("Digite uma nota:"));

  if (notas[i] > 0 && notas[i] < 10) {
    soma3 += notas[i];
  }
}
media1 = soma3 / 4;
if (media1 > 5 ) {
  alert("Você passou no teste!");
}else {
  alert("Tente novamente! Sua média foi: " + media1);
}

//Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

let anoNascimento = parseFloat(prompt("Digite o ano de seu nascimento: "));

if(anoNascimento <= 2008) {
  alert("Você pode votar este ano!");
}else {
  alert( "Você não pode votar este ano!")
}


//Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

let pesoIdeal = 0;

let sexo = parseInt(prompt("Digite o seu sexo (1 para feminino, 2 para masculino): "));
let altura = parseFloat(prompt("Digite a sua altura: "));

switch(sexo) {
  case 1:
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("Seu peso ideal é: "+pesoIdeal);
    break;
  case 2:
    pesoIdeal = (72.7 * altura) - 58;
    alert("Seu peso ideal é: "+pesoIdeal);
    break;
  default:
      alert("Sexo inválido!");
    
}

/*Uma micro calculadora
Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).
O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 

Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações
*/


function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operacao = document.getElementById("operation").value;
    let resultado;

    switch(operacao) {
        case "1":
            resultado = num1 + num2;
            break;
        case "2":
            resultado = num1 - num2;
            break;
        case "3":
            resultado = num1 / num2;
            break;
        case "4":
            resultado = num1 * num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}




