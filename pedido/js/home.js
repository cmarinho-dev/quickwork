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
    if(localStorage.getItem("pedido")){
        var lista = JSON.parse(localStorage.getItem("pedido"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td> </td>";
        html += "<td>Data</td>";
        html += "<td>Status</td>";
        html += "<td>Avaliação</td>";
        html += "<td>Valor</td>";
        html += "</tr>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td><a href='javascript:atualizar("+i+")'>Atualizar</a></td>";
            html += "<td>"+lista[i].data+"</td>";
            html += "<td>"+lista[i].status+"</td>";
            html += "<td>"+lista[i].avaliacao+"</td>";
            html += "<td>"+lista[i].valor+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }
}

function excluir(id){
    var lista = JSON.parse(localStorage.getItem("pedido"));
    lista.splice(id,1);
    localStorage.setItem("pedido",JSON.stringify(lista));
    window.location.reload();
}

function atualizar(id){
    window.location.href = "atualizar.html?id=" + id;
}
