document.getElementById('button').addEventListener('click', function() { // ao clicar no steve
    let ataque = document.getElementsByClassName('div-espada-braco')[0]; 
    let cabecaZumbi = document.getElementsByClassName('cabeca-zumbi')[0]; 
    let zumbi = document.getElementById('zumbi').getBoundingClientRect();
    
    ataque.setAttribute('style', 'animation: anim-atacar 0.3s infinite;'); // adiciona a anim, anim-atacar    
    
    if (zumbi.left <= window.innerWidth * 0.695) { // compara a posicao
        getBlood(); // funcao que faz o efeito de sangue
        cabecaZumbi.setAttribute('style', 'animation: zumbi-atacado 0.1s 1;'); // adiciona a anim, zumbi-atacado
        document.body.style.background = "#cf4e4e"; // muda o background para essa cor
    }

    setTimeout(function () { // temporizador, apos 300ms, tudo volta ao padrao
        cabecaZumbi.setAttribute('style', 'animation: none');
        document.body.style.background = "#ace7ed";
        ataque.setAttribute('style', 'animation: anim-espada 5s infinite;');
    }, 300);
});

let splashesUsed = []; // evita repeticao do mesmo svg  

function getBlood () {

    if (splashesUsed.length == 3) { // remove os 2 primeiros elementos, caso haja 2
        splashesUsed.shift();
        splashesUsed.shift();
    }

    let randomNumber = Math.floor(Math.random() * 3); // gera um numero aleatorio

    while (splashesUsed.includes(randomNumber)) { // verifica o numero aleatorio esta no array
        randomNumber = Math.floor(Math.random() * 3);
    }

    let chosenNumber = randomNumber;

    if (chosenNumber === 0) { // escolhe o prox svg
        Blood1();
    } else if (chosenNumber === 1) {
        Blood2();
    } else if (chosenNumber === 2) {
        Blood3();
    }
    splashesUsed.push(chosenNumber);
}

function Blood1 () {
    document.getElementById("splash-1-fade").beginElement();
    document.getElementById("splash-1a-drip").beginElement();
    document.getElementById("splash-1b-drip").beginElement();
}

function Blood2 () {
    document.getElementById("splash-2-fade").beginElement();
    document.getElementById("splash-2-drip").beginElement();
}

function Blood3 () {
    document.getElementById("splash-3-fade").beginElement();
    document.getElementById("splash-3-drip").beginElement();
}

 