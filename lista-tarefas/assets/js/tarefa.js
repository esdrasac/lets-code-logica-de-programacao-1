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
