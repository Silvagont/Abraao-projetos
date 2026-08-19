let tarefas = [];
let contadorId = 0;

const inputText = document.querySelector(".inputText");
const btnEnviar = document.querySelector(".btnEnviar");
const lista = document.querySelector(".lista");

btnEnviar.addEventListener("click", adicionarTarefa);

inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    let texto = inputText.value.trim();

    if (texto !== "") {
        contadorId++;
        tarefas.push({ id: contadorId, tarefa: texto, concluido: false });
        inputText.value = "";
        renderizarTarefas();
    }
}

function renderizarTarefas() {
    lista.innerHTML = ""; 

    tarefas.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item.tarefa + " ";

        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "❌"; 
        
        btnExcluir.addEventListener("click", function(e) {
            e.stopPropagation();

            tarefas = tarefas.filter(function(t) {
                return t.id !== item.id;
            });

            renderizarTarefas(); 
        });

        li.appendChild(btnExcluir);
        lista.appendChild(li);
    });
}