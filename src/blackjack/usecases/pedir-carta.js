/**
 * Está función toma una carta del deck y la elimina del mismo
 * @param {Array<String>} baraja 
 * @returns {String} Retorna una carta del deck
 */

export const pedirCarta = (baraja) => {

    if(baraja.length === 0){
        throw 'No hay cartas en el deck';
    }

    return baraja.pop();
}