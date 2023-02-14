import { valorCarta } from "./valor-carta";

/**
 * Está función acumula los puntos de cada jugador en un arreglo
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Array<Number>} puntosJugadores 
 * @param {NodeListOf<Element>} actualizarPts 
 * @returns {Number} Retorna los puntos acumulados por el jugador en turno
 */
export const acumularPuntos = (carta, turno, puntosJugadores, actualizarPts) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    actualizarPts[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}