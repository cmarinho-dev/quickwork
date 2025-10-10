
document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("sessao")) {

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
    var obj = { rua: "", numero: "", bairro: "", cep: "" };
    obj.rua = document.getElementById("rua").value;
    obj.numero = document.getElementById("numero").value;
    obj.bairro = document.getElementById("bairro").value;
    obj.cep = document.getElementById("cep").value;
    listaLocalizacoes.push(obj);
    localStorage.setItem("localizacoes", JSON.stringify(listaLocalizacoes));
}