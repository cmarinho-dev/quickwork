let url = new URL(window.location.href);
let id = url.searchParams.get('id');
let usuario = {};
let usuarios = [];

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

    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
    document.getElementById("senha").value = usuario.senha;
}

function parametroValido () {
    if (id == null) {
        return false
    }
    usuarios = JSON.parse(localStorage.getItem("usuarios"));
    usuario = usuarios[id];
    return usuario;
}

function atualizar() {
    usuario.nome = document.getElementById("nome").value;
    usuario.email = document.getElementById("email").value;
    usuario.senha = document.getElementById("senha").value;
    usuarios[id] = usuario;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    window.location.href = "home.html";
}
