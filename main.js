
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
// Constante com Refencia a lista de teclas chamada atraves do querySelectorAll chamando todas as treclas da class tecla
const listaDeTeclas = document.querySelectorAll('.tecla');




for(let contador = 0; contador < listaDeTeclas.length ;contador++){

    const tecla =listaDeTeclas[contador];

    // Essa constante tem o nome de intrumento,e ela vai armazenar essa instrução (tecla.classList[1])
    const instrumento = tecla.classList[1];

    const idAudio =`#som_${instrumento }`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
// ==========================================================
    tecla.onkeydown = function(liga) {

        if(liga.code === 'Space'|| liga.code === 'Enter') {

        tecla.classList.add('ativa');
        }   
    }
// ========================================================

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
   
 
}
