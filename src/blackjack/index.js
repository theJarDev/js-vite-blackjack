import {crearDeck, pedirCarta, acumularPuntos, crearCartaHTML, turnoComputadora} from './usecases';

let deck = [];
const tipos = ['C','D','H','S'],
      especiales = ['A','J','K','Q'];

let puntosJugadores = [];

//referencias del html
const btnPedir = document.querySelector('#btn-pedir'),
      btnNuevo = document.querySelector('#btn-nuevo'),
      btnDetener = document.querySelector('#btn-detener');


const divCartasJugadores = document.querySelectorAll('.div-cartas'),
      actualizarPts = document.querySelectorAll('small');

const inicializarJuego = ( numJugadores = 2 ) => {
deck = crearDeck(tipos, especiales);
puntosJugadores = [];
for(let i = 0; i<numJugadores; i++){
    puntosJugadores.push(0);
}

actualizarPts.forEach(elem => elem.innerText = 0);
divCartasJugadores.forEach(elem => elem.innerHTML = '');

btnPedir.disabled = false;
btnDetener.disabled = false;
}

// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    let puntosJugador = acumularPuntos(carta, 0, puntosJugadores, actualizarPts);

    crearCartaHTML(carta, 0, divCartasJugadores);

    if (puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, actualizarPts, divCartasJugadores, deck);
    } else if (puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosJugadores, actualizarPts, divCartasJugadores, deck);
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosJugadores, actualizarPts, divCartasJugadores, deck);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});