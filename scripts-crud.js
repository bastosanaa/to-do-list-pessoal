const adicionarTarefaBtn = document.querySelector('.lista-de-tarefas-add-button');
const formAddTarefa = document.querySelector('.form-adicionar-tarefa');
const cancelarAddTarefa = document.querySelector('.form-footer__button--cancelar');
const salvarAddTarefa = document.querySelector('.form-footer__button--salvar')
const formTextArea = document.querySelector('.form-textarea')
const listaDeTarefas = document.querySelector('.lista-de-tarefas')
const editarListaBtn = document.querySelector('.lista-de-tarefas-edit-button')
const excluirTarefaBtns = document.querySelectorAll('.tarefa-excluir')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function carregarTarefas() {
    listaDeTarefas.innerHTML = ''

    tarefas.forEach(tarefa => {
        addTarefa(tarefa)
    });
}

adicionarTarefaBtn.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden')
})

cancelarAddTarefa.addEventListener('click', fecharForm)

//em criacao...
editarListaBtn.addEventListener('click', () => {
    console.log(excluirTarefaBtns[0])
    excluirTarefaBtns.forEach(btn => {
        btn.classList.toggle('hidden')
    })

})

function fecharForm(){
    formTextArea.value = ''
    formAddTarefa.classList.add('hidden')
}


salvarAddTarefa.addEventListener('click', () =>{
    const tarefa = {
        descricao: formTextArea.value
    }
    tarefas.push(tarefa)
    addTarefa(tarefa)
})


function addTarefa(tarefa) {

    const li = document.createElement('li')
    li.classList.add('item-tarefa')

    const checkImg = document.createElement('img')
    checkImg.setAttribute('src' , 'styles/imagens/check-icon.png')
    checkImg.classList.add('tarefa-icone--check')

    const descricaoTarefa = document.createElement('p')
    descricaoTarefa.classList.add('tarefa-descricao')
    descricaoTarefa.textContent += tarefa.descricao


    //em criacao...
    const excluirBtn = document.createElement('button')
    excluirBtn.classList.add('tarefa-excluir')
    // excluirBtn.classList.add('hidden')
    const binImg = document.createElement('img')
    binImg.setAttribute('src' , 'styles/imagens/bin-icon.png')
    binImg.classList.add('tarefa-icone--bin')
    

    excluirBtn.appendChild(binImg)
    li.appendChild(excluirBtn)
    li.appendChild(checkImg)
    li.appendChild(descricaoTarefa)

    listaDeTarefas.appendChild(li)

    tarefas.push()
    atualizarTarefas()
    fecharForm()
}

carregarTarefas()