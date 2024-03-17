//Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

while (valor2 <= 0) {
    valor2 = parseFloat(prompt("O segundo valor não pode ser zero ou negativo. Digite um novo valor: "));
}

let resultado = valor1 / valor2;
console.log("Resultado da divisão: " + resultado);

//Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

for (let i = 30; i >= 0; i--) {
    if (i === 0) {
        document.write("EXPLOSÃO");
    } else {
        document.write(i + "<br>");
    }
}

//Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

let soma = 0;
let quantidade = 0;

for (let i = 15; i <= 100; i++) {
    soma += i;
    quantidade++;
}

let media = soma / quantidade;

console.log("A média aritmética dos números de 15 a 100 é: " + media);


//Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

let primeiroNumero = parseInt(prompt("Digite o primeiro número inteiro:"));
let segundoNumero = parseInt(prompt("Digite o segundo número inteiro:"));
let soma1;
let media1;

if (segundoNumero <= primeiroNumero) {
    alert("O segundo número deve ser maior que o primeiro.");
} else {
    let soma1 = primeiroNumero + segundoNumero;
    let quantidade = segundoNumero - primeiroNumero + 1; 

    for (let i = primeiroNumero + 1; i < segundoNumero; i++) {
        soma1 += i;
    }
    let media1 = soma / quantidade;

    console.log("A média aritmética dos números entre " + primeiroNumero + " e " + segundoNumero + " é: " + media1);
}


//Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

let alunosAprovados = 0;
let media2;
do {
    let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

    let media2 = (nota1 + nota2) / 2;

    if (media2 >= 9.5) {
        alunosAprovados++;
    }

    let continuar = prompt("Calcular a média de outro aluno? (Sim/Não)").toLowerCase();
    if (continuar !== 's') {
        break;
    }
} while (true);

console.log("Quantidade de alunos aprovados: " + alunosAprovados);

/* Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. */


const quantidadeNotas = 6;
let soma2 = 0;

for (let i = 1; i <= quantidadeNotas; i++) {
    let nota;
    do {
        nota = parseFloat(prompt("Digite a nota " + i + " (0 a 10):"));
    } while (nota < 0 || nota > 10); 

    soma2 += nota;
}

let media3 = soma2 / quantidadeNotas;
console.log("A média das notas é: " + media); 

//Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.

let N = parseInt(prompt("Digite um valor para N:"));

if (N > 0) {
    console.log("Valores inteiros entre 1 e " + N + ":");
  
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
} else {
    console.log("O valor de N deve ser maior que zero.");
}


//Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
console.log("Os 10 primeiros números inteiros maiores que 100 são:");

for (let i = 101; i <= 110; i++) {
    console.log(i);
  
//Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

  let N = parseInt(prompt("Digite um valor para N:"));

  if (N > 0) {
      for (let i = 1; i <= N; i++) {
          console.log("Tabuada do " + i + ":");
          for (let j = 1; j <= 10; j++) {
              console.log(i + " x " + j + " = " + (i * j));
          }
          console.log("");
      }
  } else {
      console.log("O valor de N deve ser maior que zero.");
  }

//Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

  let dentroIntervalo = 0;
  let foraIntervalo = 0;

  for (let i = 0; i < 10; i++) {
      let valor = parseFloat(prompt("Digite um valor:"));

      if (valor >= 24 && valor <= 42) {
          dentroIntervalo++;
      } else {
          foraIntervalo++;
      }
  }

  console.log("Quantidade de valores dentro do intervalo [24, 42]: " + dentroIntervalo);
  console.log("Quantidade de valores fora do intervalo [24, 42]: " + foraIntervalo);

}