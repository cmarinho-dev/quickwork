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

    document.getElementById("titulo").value = item.titulo
    document.getElementById("descricao").value = item.descricao
    document.getElementById("valor_medio").value = item.valor_medio;
    document.getElementById("status").value = item.status;
    document.getElementById("data").value = item.data;
}

function parametroValido () {
    if (id == null) {
        return false
    }
    itens = JSON.parse(localStorage.getItem("oportunidade_servico"));
    item = itens[id];
    return item;
}

function atualizar() {
    item.titulo = document.getElementById("titulo").value;
    item.descricao = document.getElementById("descricao").value;
    item.valor_medio = document.getElementById("valor_medio").value;
    item.status = document.getElementById("status").value;
    item.data = document.getElementById("data").value;
    itens[id] = item;
    localStorage.setItem("oportunidade_servico", JSON.stringify(itens));

    window.location.href = "home.html";
}
