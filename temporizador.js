const tempoNaTela = document.getElementById('timer');
const playPauseIcon = document.querySelector('.app__button-andamento-icon');
const playPauseBtn = document.querySelector('#start-pause')

let tempoDecorridoEmSegundos = 0
let intervaloId = null


playPauseBtn.addEventListener('click', iniciarOuPausarContagem)

function atualizarTempo(){
    tempoDecorridoEmSegundos += 1
    mostrarTempo()
}

function pararContagem() {
    clearInterval(intervaloId)
    intervaloId = null
}

function iniciarOuPausarContagem() {
    if(!intervaloId){
        playPauseIcon.setAttribute('src', '/styles/imagens/pause-button.png')
        intervaloId = setInterval(atualizarTempo,1000);
    } else {
        playPauseIcon.setAttribute('src', '/styles/imagens/play-button.png')
        pararContagem()
    }

}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second:'2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}
mostrarTempo()