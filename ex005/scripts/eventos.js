var area = document.getElementById('item-1')

function clique() {
    area.innerHTML = 'Voce clicou aqui!'
    area.style.background = 'gray'
}

function entrar() {
    area.innerHTML = 'Voce está com o mouse dentro da div.'
}

function sair() {
    area.innerHTML = 'Voce tirou o mouse da dentro da dentro da div.'
}