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
document.getElementById("loginBtn").addEventListener('click', function() {
    login();
});
async function login() {
    var usersList = JSON.parse(localStorage.getItem("users")) ?? []

    var email = document.getElementById("login_username").value;
    var password = document.getElementById("login_password").value;

    console.log(email)
    console.log(password)

    for (i = 0; i < usersList.length; i++) {
        console.log(usersList[i].email == email)
        console.log(usersList[i].password == password)
        if (usersList[i].email == email && usersList[i].password == password) {
            sessionStorage.setItem("users", JSON.stringify(usersList[i]))
            window.location.href = "localizacao/localizacao/"
            return
        }
    }
    alert("Usuário ou senha inválidos")
}




//REGISTER
document.getElementById("registerBtn").addEventListener('click', function() {
    register();
});
async function register() {
    var usersList = JSON.parse(localStorage.getItem("users")) ?? []
    var user = { 
        username: document.getElementById("reg_username").value,
        email: document.getElementById("reg_email").value,
        password: document.getElementById("reg_password").value
    }

    for (i = 0; i < usersList.length; i++) {
        if (usersList[i].email == user.email) {
            alert("este usuário já existe")
            return
        }
    }

    console.log(usersList)
    usersList.push(user)
    localStorage.setItem("users", JSON.stringify(usersList));

    window.location.reload();
}