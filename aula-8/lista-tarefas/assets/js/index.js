document.getElementById("hora-atual").innerHTML = obterHora();
setInterval(() => {
  document.getElementById("hora-atual").innerHTML = obterHora();
}, 60000);

const dataFormatada = obterDataFormatada();
const dataHtml = document.createTextNode(dataFormatada);
document.getElementById("data-atual").appendChild(dataHtml);

const atualizaListaNaTela = () => {
  document.getElementById("lista-tarefas").innerHTML = "";

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
          ${exibirIconeConcluida(tarefa)}
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
          <button class="btn btn-dark" onclick="editarTarefa('${tarefa.id}')">
            <span class="material-icons">edit</span>
          </button>
          <button class="btn btn-outlined-dark" onclick="excluirTarefa('${
            tarefa.id
          }')">
            <span class="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("lista-tarefas").appendChild(newDiv);
};

const exibirIconeConcluida = (tarefa) => {
  return tarefa.concluida
    ? `<span class="material-icons" onclick="alterarStatus('${tarefa.id}')">check_circle</span>`
    : `<span class="material-icons" onclick="alterarStatus('${tarefa.id}')">radio_button_unchecked</span>`;
};

const alterarStatus = (id) => {
  const tarefas = obterTarefas();
  const index = tarefas.findIndex((item) => item.id === id);
  const tarefa = tarefas[index];
  tarefa.concluida = !tarefa.concluida;
  atualizarTarefa(tarefa);
  atualizaListaNaTela();
};

const abrirModal = () => {
  document.getElementById("modal-titulo").innerHTML = "Nova tarefa";
  const myModal = new bootstrap.Modal(document.getElementById("modal"), {});
  myModal.show();
};

atualizaListaNaTela();

const formValido = () => {
  return document.getElementById("form").reportValidity();
};

const alterarTarefa = () => {
  if (formValido()) {
    const tarefa = {
      id: document.getElementById("id").value,
      titulo: document.getElementById("titulo").value,
      categoria: document.getElementById("categoria").value,
      hora: document.getElementById("hora").value,
    };

    if (!tarefa.id) {
      salvarTarefa(tarefa);
    } else {
      atualizarTarefa(tarefa);
    }

    atualizaListaNaTela();
    document.getElementById("form").reset();
  }
};

const editarTarefa = (id) => {
  const tarefas = obterTarefas();
  const index = tarefas.findIndex((item) => item.id === id);
  const tarefa = tarefas[index];

  abrirModal();
  document.getElementById("modal-titulo").innerHTML = "Editar tarefa";

  document.getElementById("id").value = tarefa.id;
  document.getElementById("titulo").value = tarefa.titulo;
  document.getElementById("categoria").value = tarefa.categoria;
  document.getElementById("hora").value = tarefa.hora;
};

const excluirTarefa = (id) => {
  const resposta = confirm("Deseja realmente excluir a tarefa?");
  if (resposta) {
    deletarTarefa(id);
    atualizaListaNaTela();
  }
};
