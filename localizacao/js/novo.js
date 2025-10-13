
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
    var listaLocalizacoes = JSON.parse(localStorage.getItem("localizacoes")) ?? [];
    var localizacao = { 
        rua: "", 
        numero: "", 
        bairro: "", 
        cep: "" 
    };
    localizacao.rua = document.getElementById("rua").value;
    localizacao.numero = document.getElementById("numero").value;
    localizacao.bairro = document.getElementById("bairro").value;
    localizacao.cep = document.getElementById("cep").value;
    listaLocalizacoes.push(localizacao);
    localStorage.setItem("localizacoes", JSON.stringify(listaLocalizacoes));
}