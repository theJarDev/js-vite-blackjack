
/**
 * Está función crea la carta que fue extraída del deck y la crea en el DOM
 * @param {String} carta 
 * @param {Number} turno 
 * @param {NodeListOf<Element>} divCartasJugadores 
 */
export const crearCartaHTML = (carta, turno, divCartasJugadores) => {
    const crearCarta = document.createElement('img');
    crearCarta.src = `assets/cartas/${carta}.png`;
    crearCarta.classList.add('carta');
    divCartasJugadores[turno].append(crearCarta);
}