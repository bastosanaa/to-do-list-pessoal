const adicionarTarefaBtn = document.querySelector('.lista-de-tarefas-add-button');
const formAddTarefa = document.querySelector('.form-adicionar-tarefa');
const cancelarAddTarefa = document.querySelector('.form-footer__button--cancelar');
const salvarAddTarefa = document.querySelector('.form-footer__button--salvar')
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


//<li> <img src="styles/imagens/check-icon.png" alt="" class="tarefa-icone">a</li>
function addTarefa() {
    let nomeTarefa = formTextArea.value
    const li = document.createElement('li')
    li.classList.add('tem-tarefa')

    const checkImg = document.createElement('img')
    checkImg.setAttribute('src' , 'styles/imagens/check-icon.png')
    checkImg.classList.add('tarefa-icone')

    const descricaoTarefa = document.createElement('p')
    descricaoTarefa.classList.add('tarefa-descricao')
    descricaoTarefa.textContent += nomeTarefa

    li.append(checkImg)
    li.append(descricaoTarefa)

    listaDeTarefas.append(li)
    fecharForm()
}

