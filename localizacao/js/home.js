document.addEventListener("DOMContentLoaded", () => {
    if(sessionStorage.getItem("sessao")){
        carregaItens()
    }else{
        window.location.href = '../../index.html';
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "novo.html";
});

function carregaItens(){
    if(localStorage.getItem("localizacoes")){
        var lista = JSON.parse(localStorage.getItem("localizacoes"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td> </td>";
        html += "<td>Rua</td>";
        html += "<td>Numero</td>";
        html += "<td>Bairro</td>";
        html += "<td>CEP</td>";
        html += "</tr>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td><a href='javascript:atualizar("+i+")'>Atualizar</a></td>";
            html += "<td>"+lista[i].rua+"</td>";
            html += "<td>"+lista[i].numero+"</td>";
            html += "<td>"+lista[i].bairro+"</td>";
            html += "<td>"+lista[i].cep+"</td>";
            html += "</tr>";
        }



        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }
}

function excluir(id){
    var listaClientes = JSON.parse(localStorage.getItem("localizacoes"));
    listaClientes.splice(id,1);
    localStorage.setItem("localizacoes",JSON.stringify(listaClientes));
    window.location.reload();
}

function atualizar(id){
    window.location.href = "atualizar.html?id=" + id;
}

