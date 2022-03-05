let tarefas = [];

const obterTarefas = () => {
  tarefas = getLocalStorage();
  return tarefas;
};

const salvarTarefa = (tarefa) => {
  tarefa.id = crypto.randomUUID();
  tarefa.concluida = false;
  tarefas.push(tarefa);
  setLocalStorage(tarefas);
};

const atualizarTarefa = (tarefa) => {
  const index = tarefas.findIndex((item) => item.id === tarefa.id);
  tarefas[index] = tarefa;
  setLocalStorage(tarefas);
};

const deletarTarefa = (id) => {
  const index = tarefas.findIndex((item) => item.id === id);
  tarefas.splice(index, 1);
  setLocalStorage(tarefas);
};
