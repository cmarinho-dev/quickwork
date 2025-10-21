let url = new URL(window.location.href);
let id = url.searchParams.get('id');
let servico = {};
let servicos = [];

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

    document.getElementById("categoria").value = servico.categoria;
    document.getElementById("titulo").value = servico.titulo;
    document.getElementById("descricao").value = servico.descricao;
    if(servico.tipo == "presencial") {
        document.querySelector('input[value="presencial"]').checked = true;
    } else {
        document.querySelector('input[value="online"]').checked = true;
    }
    servico.tipo = document.querySelector('input[name="tipo"]:checked').value;
}

function parametroValido () {
    if (id == null) {
        return false
    }
    servicos = JSON.parse(localStorage.getItem("servicos"));
    servico = servicos[id];
    return servico;
}

function atualizar() {
    servico.categoria = document.getElementById("categoria").value;
    servico.titulo = document.getElementById("titulo").value;
    servico.descricao = document.getElementById("descricao").value;
    servico.tipo = document.querySelector('input[name="tipo"]:checked').value;
    servicos[id] = servico;
    localStorage.setItem("servicos", JSON.stringify(servicos));

    window.location.href = "home.html";
}
