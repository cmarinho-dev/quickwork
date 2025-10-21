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
    if(localStorage.getItem("servicos")){
        var lista = JSON.parse(localStorage.getItem("servicos"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td> </td>";
        html += "<td>Categoria</td>";
        html += "<td>Titulo</td>";
        html += "<td>Descricao</td>";
        html += "<td>Tipo</td>";
        html += "</tr>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td><a href='javascript:atualizar("+i+")'>Atualizar</a></td>";
            html += "<td>"+lista[i].categoria+"</td>";
            html += "<td>"+lista[i].titulo+"</td>";
            html += "<td>"+lista[i].descricao+"</td>";
            html += "<td>"+lista[i].tipo+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }
}

function excluir(id){
    var listaUsuarios = JSON.parse(localStorage.getItem("servicos"));
    listaUsuarios.splice(id,1);
    localStorage.setItem("servicos",JSON.stringify(listaUsuarios));
    window.location.reload();
}

function atualizar(id){
    window.location.href = "atualizar.html?id=" + id;
}

