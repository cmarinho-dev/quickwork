document.addEventListener("DOMContentLoaded", () => {
    if(!validaSessao()){
        // window.location.href = '../../index.html';
        carregaItens();
    }else{
        carregaItens();
    }
});

document.getElementById("novo").addEventListener("click", function(){
    window.location.href = "../localizacao/nova_localizacao.html";
});

function validaSessao(){
    if(localStorage.getItem("sessao")){
        return true;
    }else{
        return false;
    }
}

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
    }else{
        var obj = {nome: "teste", email: "teste", nasc: "teste"};
        var lista = [];
        lista.push(obj);
        localStorage.setItem("listaClientes",JSON.stringify(lista));
        window.location.reload();
    }
}

function excluir(id){
    var listaClientes = JSON.parse(localStorage.getItem("localizacoes"));
    listaClientes.splice(id,1);
    localStorage.setItem("localizacoes",JSON.stringify(listaClientes));
    window.location.reload();
}

function atualizar(id){
    window.location.href = "../localizacao/upd_localizacao.html?id=" + id;
}

