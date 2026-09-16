const tentativas = 5;
const min = 1;
const max = 100;

let numero;
let tentativasRestantes;
let end = false;

const Palpite = document.getElementById("MN");
const Chute = document.getElementById("C");
const Dica = document.getElementById("tip");
const Tentativa = document.getElementById("try");

function jogo()
{
    numero = Math.floor(Math.random() * max) + min;
    tentativasRestantes = tentativas;
    end = false;

    Dica.textContent = "Digite seu palpite, boa sorte.";
    Tentativa.textContent = 'Chutes restantes: ${tentativasRestantes}';

    Palpite.value = "";
    Palpite.focus();
    Chute.disabled = false;
}