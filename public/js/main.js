var frase = $(".frase").text();//numero de palavras na frase
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function(){
    var conteudo = campo.val();
    var palavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(palavras);
    $("#contador-caracteres").text(conteudo.length);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function(){
    var cronometroID = setInterval(function(){
        tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroID);
            alert("GAME OVER");
        }    
    }, 1000);
    
});
