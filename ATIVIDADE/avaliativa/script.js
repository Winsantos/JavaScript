const form = document.getElementById("registro");
const listaRegistros = document.getElementById("listaRegistros");

let registros = JSON.parse(localStorage.getItem("registros")) || [];

// Mostrar registros ao carregar a página
renderizarRegistros();

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const setor = document.getElementById("setor").value;
    const sala = document.getElementById("sala").value;
    const responsavel = document.getElementById("responsavel").value;
    const retirada = document.getElementById("retirada").value;
    const entrega = document.getElementById("entrega").value;

    const turnoSelecionado = document.querySelector(
        'input[name="turno"]:checked'
    );

    const turno = turnoSelecionado.value;

    // Validação do horário
    if (entrega <= retirada) {
        alert("A hora de entrega deve ser maior que a retirada.");
        return;
    }

    const novoRegistro = {
        id: Date.now(),
        setor,
        sala,
        responsavel,
        turno,
        retirada,
        entrega
    };

    registros.push(novoRegistro);

    salvarLocalStorage();

    renderizarRegistros();

    form.reset();
});

function renderizarRegistros() {

    listaRegistros.innerHTML = "";

    registros.forEach((registro) => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${registro.setor}</td>
            <td>${registro.sala}</td>
            <td>${registro.responsavel}</td>
            <td>${registro.turno}</td>
            <td>${registro.retirada}</td>
            <td>${registro.entrega}</td>
            <td>
                <button class="btn-remover" onclick="removerRegistro(${registro.id})">
                    Remover
                </button>
            </td>
        `;

        listaRegistros.appendChild(linha);
    });
}

function removerRegistro(id) {

    registros = registros.filter((registro) => registro.id !== id);

    salvarLocalStorage();

    renderizarRegistros();
}

function salvarLocalStorage() {
    localStorage.setItem("registros", JSON.stringify(registros));
}