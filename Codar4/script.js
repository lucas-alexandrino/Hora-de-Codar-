//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

let nome;
let estudantesCadastro = [];
let contador = 0;
let continuar = " ";
let i = 0;

do {

  nome = prompt("Digite o nome do estudante: ");
  estudantesCadastro [i] = nome;
  
  contador ++;
  i ++;
  
 continuar = prompt("Digite 'PARE' para encerrar o programa OU 'SIM' para continuar.");
  
}while(continuar == "SIM");

for (let i = 0; i < estudantesCadastro.length; i++) {
  console.log("Estudante: "+estudantesCadastro[i]);
}
console.log("Quantidade de estudantes cadastrados: " + contador);

//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

let planeta = prompt("Digite o nome de um planeta: ");

if (planetas.includes(planeta)) {
  alert("O planeta " + planeta + " está na lista.");
} else {
  alert("O planeta " + planeta + " não está na lista.");
}


/*
Vamos criar uma lista de compras. 

Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".
*/

let frutas = ["Abacate", "Banana", "Caju", "Damasco", "Abacaxi"];

console.log("numero "+frutas.length);

while (frutas.length > 0) {

  let fruta = prompt("Digite o nome de uma fruta: ");

  let index = frutas.indexOf(fruta);
    if (index !== -1) {
        frutas.splice(index, 1);
        console.log(fruta + " foi retirada da lista.");
    } else {
        console.log("Fruta indisponível no nosso mercado.");
    }
  
  if (frutas.length == 0) {
  alert("Lista de compras finalizada");

  }
}
console.log(frutas.length);
