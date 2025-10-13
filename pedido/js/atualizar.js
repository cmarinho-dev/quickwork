let url = new URL(window.location.href);
let id = url.searchParams.get('id');
let item = {};
let itens = [];

document.addEventListener("DOMContentLoaded", () => {
    if(!localStorage.getItem('sessao')){
        window.location.href = '../../index.html';
    }else{
        carregarItens();
    }
});

document.getElementById("enviar").addEventListener("click", () => {
    atualizar()
});

function carregarItens() {
    if (!parametroValido()) {
        window.location.href = 'home.html';
    }

    document.getElementById("data").value = item.data
    document.getElementById("status").value = item.status
    document.getElementById("avaliacao").value = item.avaliacao;
    document.getElementById("valor").value = item.valor;
}

function parametroValido () {
    if (id == null) {
        return false
    }
    itens = JSON.parse(localStorage.getItem("pedido"));
    item = itens[id];
    return item;
}

function atualizar() {
    item.data = document.getElementById("data").value;
    item.status = document.getElementById("status").value;
    item.avaliacao = document.getElementById("avaliacao").value;
    item.valor = document.getElementById("valor").value;
    itens[id] = item;
    localStorage.setItem("pedido", JSON.stringify(itens));

    window.location.href = "home.html";
}
