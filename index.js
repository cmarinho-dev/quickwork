//LOGIN REGISTER ALTERNATE
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})




//LOGIN
document.getElementById("loginBtn").addEventListener('click', function () {
    usuario();
});
function usuario() {
    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) ?? []

    var email = document.getElementById("login_email").value;
    var senha = document.getElementById("login_senha").value;

    for (i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email == email && listaUsuarios[i].senha == senha) {
            localStorage.setItem("sessao", JSON.stringify(listaUsuarios[i]))
            window.location.href = "./_home/index.html";
            return;
        }
    }
    alert("Credenciais inválidas");
}




//REGISTRO
document.getElementById("registerBtn").addEventListener('click', function () {
    register();
});
function register() {
    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) ?? []
    var usuario = {
        nome: document.getElementById("reg_usuario").value,
        email: document.getElementById("reg_email").value,
        senha: document.getElementById("reg_senha").value
    }

    for (i = 0; i < listaUsuarios.length; i++) {
        if (listaUsuarios[i].email == usuario.email) {
            alert("Este usuário já existe");
            return;
        }
    }
    listaUsuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    location.reload();
}
