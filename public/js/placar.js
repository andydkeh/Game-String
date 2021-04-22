function inserePlacar(){
    var tabela = $(".placar").find("tbody");
    var user = "Usuario Padrão";
    var numPalavras = $("#contador-palavras").text();
    
    var linha = novaLinha(user, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
    tabela.prepend(linha);
}

function novaLinha(user, palavras){
    var linha = $("<tr>");
    var colunaUser = $("<td>").text(user);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUser);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
}