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
    Tentativa.textContent = 'Chutes restantes: '${tentativasRestantes};

    Palpite.value = "";
    Palpite.focus();
    Chute.disabled = false;
}

function Chute()
{
    if(end) return;

    let MN = parseInt(Palpite.value);

    if(isNaN(MN) || MN < min || MN > max)
    {
        Dica.textContent = 'Digite um número entre 1 e 100.';
        Palpite.focus;
        return;
    }

    tentativasRestantes --;

    if(MN ===numero)
    {
        Dica.textContent = 'você acertou o número' ${MN};
        end(true);
        return;
    }

    if(MN < numero)
    {
        Dica.textContent = 'Onúmero é maior que ' ${MN};
    }
    else
    {
        Dica.textContent = 'Onúmero é menor que ' ${MN};
    }

    Tentativa,textContent = 'Tentativas restantes: ' ${tentativasRestantes};

    if(tentativasRestantes <= 0)
    {
        Dica.textContent = 'Você perdeu tentativas esgotadas! O número misterioso era ' ${numero};
        end(false);
    }

    Palpite.value = "";
    Palpite.focus();
}

function Termina(win)
{
    end = true;
    Chute.disabled = true;
    Palpite.disabled = true;
}