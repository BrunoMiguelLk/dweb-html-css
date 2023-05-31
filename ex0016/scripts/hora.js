function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagens')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Bom dia! <br> Agora são ${hora}:${minutos}.`
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#00FFFF'
    } else if (hora >=12 && hora < 18) {
        msg.innerHTML = `Boa Tarde! <br> Agora são ${hora}:${minutos}.`
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#ff0000'
    } else {
        msg.innerHTML = `Boa Noite! <br> Agora são ${hora}:${minutos}.`
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#ADD8E6'
    }
}