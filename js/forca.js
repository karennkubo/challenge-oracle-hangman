let tentativas = 6;
let criandoLista = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [                                                                                       
    palavra001 = {
        nome: "CHINA",
        categoria:"LUGARES"
    },
    palavra002 = {
        nome: "BAHAMAS",
        categoria: "LUGARES"
    },
    palavra003 = {
        nome: "BRASIL",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "CUAITE",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "FILIPINAS",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "IRAQUE",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "MEXICO",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "MONACO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "VATICANO",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "ERITREIA",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "LICHIA",
        categoria: "FRUTA"
    },
    palavra012 = {
        nome: "ABACATE",
        categoria: "FRUTA"
    },
    palavra013 = {
        nome: "MANGA",
        categoria: "FRUTA"
    },
    palavra014 = {
        nome: "TOMATE",
        categoria: "FRUTA"
    },
    palavra015 = {
        nome: "CACAU",
        categoria: "FRUTA"
    },
    palavra016 = {
        nome: "CARAMBOLA",
        categoria: "FRUTA"
    },
    palavra017 = {
        nome: "PITANGA",
        categoria: "FRUTA"
    },
    palavra018 = {
        nome: "FRAMBOESA",
        categoria: "FRUTA"
    },
    palavra019 = {
        nome: "ABACAXI",
        categoria: "FRUTA"
    },
    palavra020 = {
        nome: "AMORA",
        categoria: "FRUTA"
    },
    palavra021 = {
        nome: "JOANINHA",
        categoria: "ANIMAIS"
    },
    palavra022 = {
        nome: "MORCEGO",
        categoria: "ANIMAIS"
    },
    palavra023 = {
        nome: "LAGOSTA",
        categoria: "ANIMAIS"
    },
    palavra024 = {
        nome: "ORNITORRINCO",
        categoria: "ANIMAIS"
    },
    palavra025 = {
        nome: "ABUTRE",
        categoria: "ANIMAIS"
    },
    palavra026 = {
        nome: "BESOURO",
        categoria: "ANIMAIS"
    },
    palavra027 = {
        nome: "CEGONHA",
        categoria: "ANIMAIS"
    },
    palavra028 = {
        nome: "DONINHA",
        categoria: "ANIMAIS"
    },
    palavra029 = {
        nome: "ESQUILO",
        categoria: "ANIMAIS"
    },
    palavra030 = {
        nome: "GUAXINIM",
        categoria: "ANIMAIS"
    } 
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    
}

colocarPalavraNaTela();
function colocarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;
    
    const palavraSecreta = document.getElementById("palavra-secreta");
    palavraSecreta.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (criandoLista[i] == undefined) {
            criandoLista[i] = "&nbsp";
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + criandoLista[i] + "</div>";
            } else {
                palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + criandoLista[i] + "</div>";
            };
    };
};

function validarEntrada(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarEstiloLetra("tecla-" + letra);
        comparaLetras(letra);
        colocarPalavraNaTela();
    };
};
function mudarEstiloLetra(tecla) {
    document.getElementById(tecla).style.background = "#FFAE42";
    document.getElementById(tecla).style.color = "black";
};

function comparaLetras(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0 ) {
        tentativas--;
        montarBoneco();

        if (tentativas == 0) {
        abrirModal("Vish!", "Foi quase, hein... 😩 A palavra secreta era " + palavraSecretaSorteada);
        };

    } else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                criandoLista[i] = letra;
            };
        };
    };

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != criandoLista[i]) {
            vitoria = false;
        };
    };
    if (vitoria == true) {

        abrirModal("YAYYY", "PARABÉNS! 🙌 Você acertou");
        tentativas = 0;
        
    };
};

function montarBoneco() {
    switch(tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca00.png')";
            break;
    };
};

function abrirModal(titulo, mensagem) {

    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalbody");
    modalBody.innerHTML = mensagem;

       $("#meuModal").modal({
        show:true
    });
};

let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function() {
    location.reload();
});