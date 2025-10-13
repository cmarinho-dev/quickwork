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
    if(localStorage.getItem("oportunidade_servico")){
        var lista = JSON.parse(localStorage.getItem("oportunidade_servico"));
        var html = "";
        html += "<table>";
        html += "<tr>";
        html += "<td>#</td>";
        html += "<td> </td>";
        html += "<td>Título</td>";
        html += "<td>Descrição</td>";
        html += "<td>Valor Médio</td>";
        html += "<td>Status</td>";
        html += "<td>Data</td>";
        html += "</tr>";

        for(var i=0;i<lista.length;i++){
            html += "<tr>";
            html += "<td><a href='javascript:excluir("+i+")'>Excluir</a></td>";
            html += "<td><a href='javascript:atualizar("+i+")'>Atualizar</a></td>";
            html += "<td>"+lista[i].titulo+"</td>";
            html += "<td>"+lista[i].descricao+"</td>";
            html += "<td>"+lista[i].valor_medio+"</td>";
            html += "<td>"+lista[i].status+"</td>";
            html += "<td>"+lista[i].data+"</td>";
            html += "</tr>";
        }

        html += "</table>";
        document.getElementById("lista").innerHTML = html;
    }
}

function excluir(id){
    var lista = JSON.parse(localStorage.getItem("oportunidade_servico"));
    lista.splice(id,1);
    localStorage.setItem("oportunidade_servico",JSON.stringify(lista));
    window.location.reload();
}

function atualizar(id){
    window.location.href = "atualizar.html?id=" + id;
}
