const adicionarTarefaBtn = document.querySelector('.lista-de-tarefas-add-button');
const formAddTarefa = document.querySelector('.form-adicionar-tarefa');

adicionarTarefaBtn.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden')
})
console.log(formAddTarefa.classList)

// function fecharFormAddTarefa{
//     formAddTarefa.classList.
// }