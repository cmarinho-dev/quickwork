
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
    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) ?? []
    var usuario = {
        nome: "",
        email: "",
        senha: ""
    }
    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) ?? [];

    usuario.nome = document.getElementById("nome").value;
    usuario.email = document.getElementById("email").value;
    usuario.senha = document.getElementById("senha").value;
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}