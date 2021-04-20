var tempoInicial = $("#tempo-digitacao").text();
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

function iniciaCronometro(){
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
}


//$("#botao-reiniciar").on("click", function(){
//        console.log("Botão clicado");
//});
$("#botao-reiniciar").click(function(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
});