const botao = document.getElementById('botao');
const menu = document.getElementById('esconder')

botao.addEventListener('click',() => {
    menu.classList.toggle('hidden');
});