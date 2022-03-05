const DB_TAREFAS_KEY = "tarefas_db";

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(DB_TAREFAS_KEY)) || [];
};

const setLocalStorage = (tarefas) => {
  return localStorage.setItem(DB_TAREFAS_KEY, JSON.stringify(tarefas));
};
