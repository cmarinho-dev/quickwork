let url = new URL(window.location.href);
let id = url.searchParams.get('id');
let localizacao = {};
let localizacoes = [];

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

    document.getElementById("rua").value = localizacao.rua
    document.getElementById("numero").value = localizacao.numero
    document.getElementById("bairro").value = localizacao.bairro;
    document.getElementById("cep").value = localizacao.cep;
}

function parametroValido () {
    if (id == null) {
        return false
    }
    localizacoes = JSON.parse(localStorage.getItem("localizacoes"));
    localizacao = localizacoes[id];
    return localizacao;
}

function atualizar() {
    localizacao.rua = document.getElementById("rua").value;
    localizacao.numero = document.getElementById("numero").value;
    localizacao.bairro = document.getElementById("bairro").value;
    localizacao.cep = document.getElementById("cep").value;
    localizacoes[id] = localizacao;
    localStorage.setItem("localizacoes", JSON.stringify(localizacoes));

    window.location.href = "home.html";
}
