// contagem inicial 0
let count = 0;

// selecionar os botões e o span
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// loop para selecionar todos os botões e não o nodelist
btns.forEach(function (btn) {
    // usando o objeto event para pegar o nome da classe do botão clicado
   btn.addEventListener('click', function(event){
    const styles = event.currentTarget.classList;
    // se for clicado no "decrease", fazer o decremento do contador
    if(styles.contains('decrease')) {
        count--;
    }
    else if(styles.contains('increase')) {
        count++;
    }
    else {
        count = 0;
    }
    if (count > 0) {
        value.style.color = 'green';
    }
    if (count < 0) {
        value.style.color = 'red';
    }
    if (count == 0) {
        value.style.color = 'black';
    }
    value.textContent = count;
   })
})