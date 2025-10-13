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
    var lista = JSON.parse(localStorage.getItem("pedido")) ?? [];
    var item = {
        data: "",
        status: "",
        avaliacao: "",
        valor: ""
    };
    item.data = document.getElementById("data").value;
    item.status = document.getElementById("status").value;
    item.avaliacao = document.getElementById("avaliacao").value;
    item.valor = document.getElementById("valor").value;
    lista.push(item);
    localStorage.setItem("pedido", JSON.stringify(lista));
}
