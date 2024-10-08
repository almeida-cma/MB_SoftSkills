// Seleciona o botão de adicionar tarefa e adiciona um evento de clique
const botaoAdicionarTarefa = document.getElementById('botaoAdicionarTarefa');
// NIVEL1 // console.log('Botão Adicionar Tarefa:', botaoAdicionarTarefa);
botaoAdicionarTarefa.addEventListener('click', adicionarTarefa);

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    // Seleciona o campo de entrada e obtém o valor da tarefa
    const entradaTarefa = document.getElementById('entradaTarefa');
    // NIVEL1 // console.log('Campo de Entrada Tarefa:', entradaTarefa);
    const textoTarefa = entradaTarefa.value.trim();
    // NIVEL1 // console.log('Texto da Tarefa:', textoTarefa);

    // Verifica se o campo está vazio
    if (textoTarefa === '') {
        alert('Por favor, adicione uma tarefa!');
        return;
    }

    // Seleciona a lista onde as tarefas serão adicionadas
    const listaTarefas = document.getElementById('listaTarefas');
    // NIVEL1 // console.log('Lista de Tarefas:', listaTarefas);

    // Cria um novo item de lista (<li>)
    const itemLista = document.createElement('li');
    itemLista.textContent = textoTarefa;
    // NIVEL1 // console.log('Item da Lista Criado:', itemLista);

    // Botão para editar a tarefa
    /*const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.classList.add('editar');
    botaoEditar.addEventListener('click', () => editarTarefa(itemLista));

    // Botão para excluir a tarefa
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.addEventListener('click', () => listaTarefas.removeChild(itemLista));

    // Adiciona os botões ao item da lista
    itemLista.appendChild(botaoEditar);
    itemLista.appendChild(botaoExcluir);*/

    // Adiciona o item à lista de tarefas
    listaTarefas.appendChild(itemLista);
    // NIVEL1 // console.log('Item Adicionado à Lista de Tarefas:', listaTarefas);

    // Limpa o campo de entrada após a tarefa ser adicionada
    entradaTarefa.value = '';
}

// Função para editar uma tarefa
/*function editarTarefa(itemTarefa) {
    const novoTextoTarefa = prompt('Editar tarefa:', itemTarefa.firstChild.textContent);
    // NIVEL1 // console.log('Novo Texto da Tarefa:', novoTextoTarefa);
    if (novoTextoTarefa !== null && novoTextoTarefa.trim() !== '') {
        itemTarefa.firstChild.textContent = novoTextoTarefa.trim();
        console.log('Texto da Tarefa Atualizado:', itemTarefa.firstChild.textContent);
    }
}*/