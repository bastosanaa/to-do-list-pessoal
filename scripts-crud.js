const adicionarTarefaBtn = document.querySelector('.lista-de-tarefas-add-button');
const formAddTarefa = document.querySelector('.form-adicionar-tarefa');
const cancelarAddTarefa = document.querySelector('.form-footer__button--cancelar');
const salvarAddTarefa = document.querySelector('.form-footer__button--salvar')
const formTextArea = document.querySelector('.form-textarea')
const listaDeTarefas = document.querySelector('.lista-de-tarefas')
const editarListaBtn = document.querySelector('.lista-de-tarefas-edit-button')

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


//implementando...
function apagarTarefa(tarefa){
    const descricaoItemLista = tarefa.querySelector('.tarefa-descricao')
    tarefa.remove()
    tarefas = tarefas.filter(item => item.descricao != descricaoItemLista.textContent);
    atualizarTarefas()
}
function fecharForm(){
    formTextArea.value = ''
    formAddTarefa.classList.add('hidden')
}

editarListaBtn.addEventListener('click', () => {
    const excluirTarefaBtns = document.querySelectorAll('.tarefa-excluir')
    excluirTarefaBtns.forEach(btn => {
            btn.classList.toggle('hidden')
            btn.addEventListener('click', () => {
                const tarefa = btn.parentElement;
                apagarTarefa(tarefa)
            })
        })
})





adicionarTarefaBtn.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden')
})

cancelarAddTarefa.addEventListener('click', fecharForm)




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

    const excluirBtn = document.createElement('button')
    excluirBtn.classList.add('tarefa-excluir')
    excluirBtn.classList.add('hidden')
    const binImg = document.createElement('img')
    binImg.setAttribute('src' , 'styles/imagens/bin-icon.png')
    binImg.classList.add('tarefa-icone--bin')
    

    excluirBtn.appendChild(binImg)
    li.appendChild(checkImg)
    li.appendChild(descricaoTarefa)
    li.appendChild(excluirBtn)

    listaDeTarefas.appendChild(li)

    tarefas.push()
    atualizarTarefas()
    fecharForm()
}



carregarTarefas()