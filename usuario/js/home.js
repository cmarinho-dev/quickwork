document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("sessao")){
        carregaItens()
    }else{
        window.location.href = '../../index.html';
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "novo.html";
});

function carregaItens(){
    if(localStorage.getItem("usuarios")){
        var lista = JSON.parse(localStorage.getItem("usuarios"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td> </td>";
        html += "<td>Nome</td>";
        html += "<td>Email</td>";
        html += "<td>Senha</td>";
        html += "</tr>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td><a href='javascript:atualizar("+i+")'>Atualizar</a></td>";
            html += "<td>"+lista[i].nome+"</td>";
            html += "<td>"+lista[i].email+"</td>";
            html += "<td>"+lista[i].senha+"</td>";
            html += "</tr>";
        }



        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }
}

function excluir(id){
    var listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    listaUsuarios.splice(id,1);
    localStorage.setItem("usuarios",JSON.stringify(listaUsuarios));
    window.location.reload();
}

function atualizar(id){
    window.location.href = "atualizar.html?id=" + id;
}

