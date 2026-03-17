/* 
getAttribute:
O método getAttribute é usado para obter o valor de um atributo específico de um elemento HTML.
 Ele recebe um argumento, que é o nome do atributo que desejamos recuperar o valor. Por exemplo: */

// HTML: <div id="meuElemento" data-info="Exemplo de atributo">

const elemento = document.getElementById("meuElemento");
const valorDoAtributo = elemento.getAttribute("data-info");
console.log(valorDoAtributo); // Saída: "Exemplo de atributo"

//Neste exemplo,o método getAttribute foi usado para obter o valor do atributo data-info do elemento
//com o ID "meuElemento".

//setAttribute:
//O método setAttribute é usado para definir ou modificar o valor de um atributo em um elemento HTML.
//Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar,
//e o segundo é o valor que queremos atribuir a esse atributo. Se o atributo já existir,
//o método setAttribute irá sobrescrevê-lo; caso contrário, ele criará um novo atributo.
//Por exemplo:

// HTML: <p id="meuParagrafo">Texto inicial</p>

const paragrafo = document.getElementById("meuParagrafo");
paragrafo.setAttribute("id", "paragrafoModificado");
paragrafo.setAttribute("data-novo-atributo", "Novo valor");

//Após a execução deste código, o parágrafo terá seu ID alterado para "paragrafoModificado"
//e será adicionado um novo atributo data-novo-atributo com o valor "Novo valor".

/* hasAttribute:
O método hasAttribute é usado para verificar se um elemento possui um atributo específico. Ele recebe um argumento, que é o nome do atributo que queremos verificar. O método retornará true se o atributo existir e false se o atributo não estiver presente. Vejamos um exemplo:
 */
// HTML: <a href="https://www.exemplo.com" id="meuLink">Link de exemplo</a>

const link = document.getElementById("meuLink");
const temHref = link.hasAttribute("href");
console.log(temHref); // Saída: true
const temTarget = link.hasAttribute("target");
console.log(temTarget); // Saída: false

/* Neste exemplo, o método hasAttribute foi usado para verificar se o elemento com o ID "meuLink" possui o atributo "href" (que é verdadeiro) e se possui o atributo "target" (que é falso).
 */
/* removeAttribute:

O método removeAttribute é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover. Por exemplo:
 */
// HTML: <img src="imagem.jpg" alt="Imagem de exemplo" id="minhaImagem">

const imagem = document.getElementById("minhaImagem");
imagem.removeAttribute("alt");

/* Após a execução desse código, o atributo alt da imagem será removido, tornando-a menos acessível para pessoas com deficiência visual e fazendo com que o navegador não exiba um texto alternativo quando a imagem não puder ser carregada.
 */
/* Em resumo, os métodos getAttribute, setAttribute, hasAttribute e removeAttribute são ferramentas poderosas no JavaScript para interagir com atributos de elementos HTML. Eles permitem que os desenvolvedores obtenham, definam, verifiquem e removam atributos conforme necessário, tornando a manipulação do DOM mais eficiente e flexível. Ao utilizar esses métodos de forma adequada, é possível criar experiências web mais dinâmicas e interativas para os usuários. */

/* O JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas da web. Uma das funcionalidades mais interessantes que ele oferece é a capacidade de manipular áudio, permitindo que os desenvolvedores adicionem e controlem elementos de áudio em seus sites de forma dinâmica. Uma das formas mais comuns de fazer isso é usando o objeto ‘Audio’.

O objeto ‘Audio’ é uma parte do HTML5 e fornece uma interface fácil e poderosa para reproduzir e controlar arquivos de áudio em tempo real. Que tal explorar o uso, entendendo como criar, controlar, reproduzir e estilizar áudio em uma página da web?

Criando um Objeto ‘Audio’
Para criar um novo objeto ‘Audio’, podemos simplesmente usar a seguinte sintaxe:
 */
const audioElement = new Audio("caminho/do/arquivo-de-audio.mp3");

/* Substitua 'caminho/do/arquivo-de-audio.mp3' pelo caminho real do arquivo de áudio que você deseja reproduzir.

Controles básicos de áudio
Após criar um objeto ‘Audio’, podemos controlar sua reprodução e outras propriedades usando métodos e propriedades disponíveis.
 */
/* play(): inicia a reprodução do áudio;
pause(): pausa a reprodução do áudio;
currentTime: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
volume: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.
Exemplo de utilização dos métodos do objeto Audio:
const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');
 */
audioElement.play(); // Inicia a reprodução
audioElement.pause(); // Pausa a reprodução
audioElement.currentTime = 10; // Move para 10 segundos no áudio
audioElement.volume = 0.5; // Define o volume para metade (50%)

//Lembre-se de que a reprodução de áudio em páginas da web pode ser intrusiva para alguns usuários,
//portanto, use-o com moderação e sempre forneça controles de volume e opções de pausa aos visitantes do seu site.

/* No projeto Fokus, estamos utilizando algumas das propriedades mais conhecidas para acessar elementos no DOM, como o classList e o innerHTML, porém, existem outros igualmente importantes.
 */
/* Vamos conhecê-los? */

/* Propriedade parentNode
A propriedade parentNode é utilizada para acessar o nó pai de um elemento no DOM. Por meio dela, podemos navegar pela árvore do DOM em direção ao nó pai do elemento atual.
 */
/* Exemplo de uso: */
/* 
Suponha que temos o seguinte código HTML: */

<div id="container">
  <p>Este é um parágrafo</p>
</div>;

/* Agora, podemos usar o ‘parentNode’ para acessar o elemento pai do parágrafo:
 */
const paragraph = document.querySelector("p");
const parentElement = paragraph.parentNode;

console.log(parentElement.id); // Saída: "container"

/* Propriedade childNodes
A propriedade childNodes é utilizada para acessar todos os nós filhos de um elemento no DOM. Ela retorna uma lista de nós, incluindo nós de texto e elementos HTML.

Exemplo de uso:

Considerando o mesmo HTML do exemplo anterior, podemos usar o childNodes para obter todos os nós filhos do elemento com o ID "container": */

const container = document.getElementById("container");
const childNodes = container.childNodes;

console.log(childNodes.length); // Saída: 1 (o nó de texto "\n  " é considerado um nó filho)
console.log(childNodes[0].nodeName); // Saída: "#text"
console.log(childNodes[1].nodeName); // Saída: "P"

/* Propriedade nextElementSibling
A propriedade nextElementSibling permite acessar o próximo irmão (nó adjacente) de um elemento no DOM.

Exemplo de uso:

Vamos considerar o seguinte HTML:
 */
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>;

/* Agora, podemos usar o nextElementSibling para acessar o próximo irmão de um elemento <li>:
 */
const item1 = document.querySelector("li:first-child");
const item2 = item1.nextElementSibling;

console.log(item2.textContent); // Saída: "Item 2"

/* Propriedade previousElementSibling
A propriedade previousElementSibling é semelhante ao nextElementSibling, mas permite acessar o irmão anterior (nó adjacente) de um elemento no DOM.
 */
/* Exemplo de uso:

Continuando o exemplo anterior, vamos usar o previousElementSibling para acessar o irmão anterior do elemento <li> que selecionamos:
 */
const item3 = document.querySelector("li:last-child");
const item2 = item3.previousElementSibling;

console.log(item2.textContent); // Saída: "Item 2"

/* Com essas propriedades, é possível navegar, acessar e modificar elementos HTML em uma página da web, tornando a manipulação do DOM uma tarefa poderosa para pessoas desenvolvedoras web.

É importante continuar praticando e explorando o DOM para aprofundar seu conhecimento e */
