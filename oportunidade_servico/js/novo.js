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
    var lista = JSON.parse(localStorage.getItem("oportunidade_servico")) ?? [];
    var item = {
        titulo: "",
        descricao: "",
        valor_medio: "",
        status: "",
        data: ""
    };
    item.titulo = document.getElementById("titulo").value;
    item.descricao = document.getElementById("descricao").value;
    item.valor_medio = document.getElementById("valor_medio").value;
    item.status = document.getElementById("status").value;
    item.data = document.getElementById("data").value;
    lista.push(item);
    localStorage.setItem("oportunidade_servico", JSON.stringify(lista));
}
