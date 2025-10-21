
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("sessao")) {

        document.getElementById("enviar").addEventListener("click", function () {
            armazenar();
            window.location.href = "home.html";
        });

    } else {
        window.location.href = '../../index.html';
    }
});



function armazenar() {
    var listaServicos = JSON.parse(localStorage.getItem("servicos")) ?? []
    var servico = {
        categoria: "",
        titulo: "",
        descricao: "",
        tipo: ""
    }

    servico.categoria = document.getElementById("categoria").value;
    servico.titulo = document.getElementById("titulo").value;
    servico.descricao = document.getElementById("descricao").value;
    servico.tipo = document.querySelector('input[name="tipo"]:checked').value;
    listaServicos.push(servico);
    localStorage.setItem("servicos", JSON.stringify(listaServicos));
}