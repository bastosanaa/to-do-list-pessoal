const adicionarTarefaBtn = document.querySelector('.lista-de-tarefas-add-button');
const formAddTarefa = document.querySelector('.form-adicionar-tarefa');
const cancelarAddTarefa = document.querySelector('.form-footer__button--cancelar');
const salvarAddTarefa = document.querySelector('.form-footer__button--cancelar')
const formTextArea = document.querySelector('.form-textarea')
const listaDeTarefas = document.querySelector('.lista-de-tarefas')

let tarefas = JSON.parse

adicionarTarefaBtn.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden')
})

cancelarAddTarefa.addEventListener('click', fecharForm)

function fecharForm(){
    formTextArea.value = ''
    formAddTarefa.classList.add('hidden')
}

salvarAddTarefa.addEventListener('click', addTarefa)

function addTarefa() {
    let nomeTarefa = formAddTarefa.value
    listaDeTarefas
    console.log(nomeTarefa)
}
