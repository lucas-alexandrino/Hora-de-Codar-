// Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.

  var nome_do_carro = "Fusca";
  
  document.write(nome_do_carro);

//Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".

  var nome;
  var idade;

  nome = prompt("Digite seu nome");
  idade = prompt("Digite sua idade");
  alert("Olá, "+nome+" sua idade é "+idade);

// Escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

function calcularArea(event) {
  event.preventDefault();

const forma = document.getElementById('forma').value;
const valor1 = parseFloat(document.getElementById('valor1').value);
const valor2 = parseFloat(document.getElementById('valor2').value);
let area;

 
switch (forma) {
  case 'retangulo':
    area = valor1 * valor2;
    break;
  case 'quadrado':
    area = valor1  * valor2;
    break;
  case 'losango':
    area = (valor1 * valor2) / 2;
    break;
  case 'trapezio':
    area = ((valor1 + valor2) * valor2) / 2
    break;
  case 'pararelograma':
    area = valor1 * valor2;
    break;
  case 'triangulo':
    area = (valor1 * valor2) / 2;
    break;
  case 'circulo':
    area = Math.PI * Math.pow(valor1, 2);
    break;
  default:
    area = 'Forma não reconhecida';
    break;
    
}

  for (let i = 0; i < 10; i++)

 document.getElementById('resultado').innerHTML = `<p>A área é: ${area}</p>`;

}