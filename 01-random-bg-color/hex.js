//aray com as numerações e letras que formam o hexadecimal
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//selecionar o botão do clique
const btn = document.getElementById('btn');

//selecionar a classe da cor atual
const color = document.querySelector(".color");

//adiciona um evento no click
btn.addEventListener('click', function() {
    //define o # que tem em todo ínicio de cor hexadecimal
    let hexColor =  '#';

    //faz um loop com < 6 que é a quantiade de caracteres de uma cor hexadecimal
    for(let i = 0; i<6; i++) {
        //concatena a variavel hexcolor que tem o valor # com o código da cor aletoriamente
        hexColor += hex[getRandomNumber()];
    }

    //muda as cores com os hexadecimais aleatórios
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

//função para pegar um numero aleatório, math.floor para arredondar
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}