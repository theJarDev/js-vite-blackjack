import {pedirCarta, definirGanador, acumularPuntos, crearCartaHTML} from './index';

/**
 * Está función indica que es el turno de la computadora e intenta igualar o superar los puntos del jugador, tratando de hacerlo perder
 * @param {Number} puntosMinimos 
 * @param {Array<Number>} puntosJugadores 
 * @param {NodeListOf<Element>} actualizarPts 
 * @param {NodeListOf<Element>} divCartasJugadores 
 * @param {Array<String>} baraja 
 */
export const turnoComputadora = (puntosMinimos, puntosJugadores, actualizarPts, divCartasJugadores, baraja) => {
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(baraja);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, actualizarPts);

        crearCartaHTML(carta, puntosJugadores.length - 1, divCartasJugadores);

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    definirGanador(puntosComputadora, puntosMinimos);

}