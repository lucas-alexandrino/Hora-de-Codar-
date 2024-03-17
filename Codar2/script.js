// Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.


  let numero1 = parseFloat(prompt("Coloque o primeiro número:"));
  let numero2 = parseFloat(prompt("Coloque o segundo número:"));
      
  if (numero1 > numero2) {
    alert("O número "+numero1+" é maior que o número "+numero2);
  }else if (numero2 > numero1) {
    alert("O número "+numero2+" é maior que o número "+numero1);
  }

// Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. 

  var valor;

  valor = parseFloat(prompt("Coloque um valor:"));

  if (valor > 0) {
    alert(valor+" é positivo");
  }else if (valor < 0) {
    alert(valor+" é negativo");
  }else {
    alert ("O valor informado é igual a zero");
  }

// Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior e a soma deles. 


let valor1 =parseFloat(prompt("Digite o primeiro valor: "));
let valor2 =parseFloat(prompt("Digite o segundo valor: "));
let valor3 =parseFloat(prompt("Digite o terceiro valor: "));

let maximo;

  maximo = Math.max(valor1, valor2, valor3);

let maximo2;
if (maximo === valor1) {
    maximo2 = Math.max(valor2, valor3);
} else if (maximo === valor2) {
    maximo2 = Math.max(valor1, valor3);
} else {
    maximo2 = Math.max(valor1, valor2);
}

let somaDosMaiores = maximo + maximo2;

alert ("O maior número é: "+maximo);
alert("A soma dos dois maiores valores é: " + somaDosMaiores);









