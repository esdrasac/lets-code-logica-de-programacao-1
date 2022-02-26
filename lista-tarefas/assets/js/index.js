document.getElementById("hora-atual").innerHTML = obterHora();
setInterval(() => {
  document.getElementById("hora-atual").innerHTML = obterHora();
}, 60000);

const dataFormatada = obterDataFormatada();
const dataHtml = document.createTextNode(dataFormatada);
document.getElementById("data-atual").appendChild(dataHtml);

salvarTarefa({
  titulo: "Tarefa",
  categoria: "Categoria",
  hora: "08:00",
  concluida: false,
});

salvarTarefa({
  titulo: "Tarefa 2",
  categoria: "Categoria 2",
  hora: "09:00",
  concluida: true,
});

const atualizaListaNaTela = () => {
  document.getElementById("lista-tarefas");

  const tarefas = obterTarefas();
  tarefas.forEach((element) => {
    renderizaTarefa(element);
  });
};

const renderizaTarefa = (tarefa) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("col-md-6");
  newDiv.classList.add("col-sm-12");
  newDiv.classList.add("mb-3");
  newDiv.innerHTML = `
    <div class="card">
      <div class="row">
        <div class="col-1 status-tarefa">
          ${exibirIconeConcluida(tarefa.concluida)}
        </div>
        <div class="col-8">
          <p class="tarefa-titulo">${tarefa.titulo}</p>
          <p class="tarefa-detalhe">
            <span>${tarefa.categoria}</span>
            <span class="material-icons separador"
              >fiber_manual_record</span
            >
            <span class="material-icons clock">schedule</span>
            <span class="tarefa-horario">${tarefa.hora}</span>
          </p>
        </div>
        <div class="col-3 d-flex align-items-center">
          <button class="btn btn-dark">
            <span class="material-icons">edit</span>
          </button>
          <button class="btn btn-outlined-dark">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("lista-tarefas").appendChild(newDiv);
};

const exibirIconeConcluida = (status) => {
  return status
    ? `<span class="material-icons">check_circle</span>`
    : `<span class="material-icons">radio_button_unchecked</span>`;
};

atualizaListaNaTela();
