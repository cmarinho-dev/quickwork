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
    login();
});
function login() {
    var usersList = JSON.parse(localStorage.getItem("users")) ?? []

    var email = document.getElementById("login_username").value;
    var password = document.getElementById("login_password").value;

    for (i = 0; i < usersList.length; i++) {
        if (usersList[i].email == email && usersList[i].password == password) {
            sessionStorage.setItem("sessao", JSON.stringify(usersList[i]))
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
    var usersList = JSON.parse(localStorage.getItem("users")) ?? []
    var user = {
        username: document.getElementById("reg_username").value,
        email: document.getElementById("reg_email").value,
        password: document.getElementById("reg_password").value
    }

    for (i = 0; i < usersList.length; i++) {
        if (usersList[i].email == user.email) {
            alert("Este usuário já existe");
            return;
        }
    }
    usersList.push(user)
    localStorage.setItem("users", JSON.stringify(usersList));
}
