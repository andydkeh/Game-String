var tempoInicial = $("#tempo-digitacao").text();
var campo = $("#campo-digitacao");
//quando todo o html carregar, essa função puxa as outras
$(function(){
    atualizaFrase();
    iniciaContadores();
    iniciaCronometro();
    iniciaMarcadores();
    inserePlacar();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaFrase(){
    var frase = $(".frase").text();//numero de palavras na frase
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);
}

function iniciaContadores(){
    campo.on("input", function(){
        campo.addClass("campo-off");
        var conteudo = campo.val();
        var palavras = conteudo.split(/\S+/).length -1;
        $("#contador-palavras").text(palavras);
        $("#contador-caracteres").text(conteudo.length);
});  
}

function iniciaMarcadores(){
    //campo verefica se ta digitando certo
    var frase = $(".frase").text();
    campo.on("input", function(){
    var digitando = campo.val();
    var comparavel = frase.substr(0, digitando.length);
    if(digitando == comparavel){
        campo.addClass("campo-ok");
        campo.removeClass("campo-errado");
    }else{
        campo.addClass("campo-errado");
        campo.removeClass("campo-ok");
    }
});
}

function iniciaCronometro(){
   var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function(){
        $("#botao-reiniciar").attr("disabled", true);
        var cronometroID = setInterval(function(){
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
            clearInterval(cronometroID);
            finalizaJogo();
            }    
        }, 1000);
    }); 
}

function finalizaJogo(){
    campo.attr("disabled", true);
    alert("GAME OVER");
    $("#botao-reiniciar").attr("disabled", false);
    inserePlacar();
}

//$("#botao-reiniciar").on("click", function(){ ---> outra forma de fazer;
//        console.log("Botão clicado");
//});

function reiniciaJogo(){
    campo.addClass("campo-on");
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    iniciaCronometro();
    campo.removeClass("campo-ok");
    campo.removeClass("campo-errado");
}