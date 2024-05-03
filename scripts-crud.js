
const adicionarTarefaBtn = document.querySelector('.lista-de-tarefas-add-button');
const formAddTarefa = document.querySelector('.form-adicionar-tarefa');
const cancelarAddTarefa = document.querySelector('.form-footer__button--cancelar');
const salvarAddTarefa = document.querySelector('.form-footer__button--salvar')
const formTextArea = document.querySelector('.form-textarea')
const listaDeTarefas = document.querySelector('.lista-de-tarefas')
const editarListaBtn = document.querySelector('.lista-de-tarefas-edit-button')
const tarefaItemAndamento = document.querySelector('.tarefa-andamento-item')
const finalizarTarefaBtn = document.querySelector('.finalizar-tarefa')


let tarefaSelecionada = null
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaEmAndamento = JSON.parse(localStorage.getItem('tarefa_selecionada')) || {}

function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function carregarTarefas() {
    listaDeTarefas.innerHTML = ''

    tarefas.forEach(tarefa => {
        addTarefa(tarefa)
    });
}

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
    // fechar modo edição caso esteja adicionando tarefa
    const excluirTarefaBtns = document.querySelectorAll('.tarefa-excluir')
    excluirTarefaBtns.forEach(btn => {
            btn.classList.add('hidden')
            
    })
})

cancelarAddTarefa.addEventListener('click', fecharForm)

salvarAddTarefa.addEventListener('click', () => {
    const tarefa = {
        descricao: formTextArea.value,
        tempoDecorrido : "",
        id: formTextArea.value
    }
    tarefas.push(tarefa)
    addTarefa(tarefa)
})

// implementando
finalizarTarefaBtn.addEventListener("click", finalizarTarefa )

function finalizarTarefa(){
    
    const idTarefaSelecionada = JSON.parse(localStorage.getItem('tarefa_selecionada'));
    tarefas.forEach(tarefa => {
        if (tarefa.id == idTarefaSelecionada){
            const liTarefa = document.getElementById(tarefa.id)
            liTarefa.classList.add('completada')
            console.log(liTarefa)
            tarefa.tempoDecorrido = formataTempo(tempoDecorridoEmSegundos)
            idTarefaSelecionada
            
        }
        atualizarTarefas()
        carregarTarefas()
    })

    pararContagem()
    zerarContagem()
    tarefaItemAndamento.textContent = 'nenhuma tarefa em andamento...'
    
}

function addTarefa(tarefa) {

    const li = document.createElement('li')
    li.classList.add('item-tarefa')
    
    
    const checkImg = document.createElement('img')
    checkImg.setAttribute('src' , 'styles/imagens/check-icon.png')
    checkImg.classList.add('tarefa-icone--check')
    
    const descricaoTarefa = document.createElement('p')
    descricaoTarefa.classList.add('tarefa-descricao')
    descricaoTarefa.textContent = tarefa.descricao

    const temporizadorTarefa = document.createElement('p')
    temporizadorTarefa.classList.add('temporizador-tarefa')
    temporizadorTarefa.textContent = tarefa.tempoDecorrido

    const excluirBtn = document.createElement('button')
    excluirBtn.classList.add('tarefa-excluir')
    excluirBtn.classList.add('hidden')
    const binImg = document.createElement('img')
    binImg.setAttribute('src' , 'styles/imagens/bin-icon.png')
    binImg.classList.add('tarefa-icone--bin')
    

    excluirBtn.appendChild(binImg)
    li.appendChild(checkImg)
    li.appendChild(descricaoTarefa)
    li.appendChild(temporizadorTarefa)
    li.appendChild(excluirBtn)
    
    li.setAttribute('id', tarefa.id)

    listaDeTarefas.appendChild(li)

    tarefas.push()
    atualizarTarefas()
    fecharForm()

    li.onclick = () => {
        tarefaSelecionada = tarefa
        tarefaItemAndamento.textContent = tarefaSelecionada.descricao
        const liTarefaAndamento = document.getElementById(tarefa.id)
        localStorage.setItem('tarefa_selecionada', JSON.stringify(liTarefaAndamento.id))
        pararContagem()
        zerarContagem()
    }

}

carregarTarefas()
