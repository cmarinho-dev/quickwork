let url = new URL(window.location.href);
let id = url.searchParams.get('id');
let localizacao = {};
let localizacoes = {};

document.addEventListener("DOMContentLoaded", () => {
    console.log(id)
    if(true){ // check if prams not null
        console.log(id)
        // window.location.href = '../../index.html';
        loadForm();
    }else{
        loadForm();
    }
});

document.getElementById("enviar").addEventListener("click", () => {
    updateAndSave()
});

function loadForm() {
    if (!existsValidId()) {
        window.location.href = '../localizacao/index.html';
    }

    document.getElementById("rua").value = localizacao.rua
    document.getElementById("numero").value = localizacao.numero
    document.getElementById("bairro").value = localizacao.bairro;
    document.getElementById("cep").value = localizacao.cep;
}

function existsValidId () {
    if (id == null) {
        return false
    }
    localizacoes = JSON.parse(localStorage.getItem("localizacoes"));
    localizacao = localizacoes[id];
    return localizacao;
}

function updateAndSave() {
    localizacao.rua = document.getElementById("rua").value;
    localizacao.numero = document.getElementById("numero").value;
    localizacao.bairro = document.getElementById("bairro").value;
    localizacao.cep = document.getElementById("cep").value;
    localizacoes[id] = localizacao;
    localStorage.setItem("localizacoes", JSON.stringify(localizacoes));

    window.location.href = "../localizacao/index.html";
}