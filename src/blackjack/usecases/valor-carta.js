//función para obtener el valor numérico de la carta que fue pedida por el jugador
/**
 * Está función obtiene el valor numérico de la carta que fue pedida por un jugador
 * @param {String} carta 
 * @returns {number} Retorna el valor numérico de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN(valor) ) ? 
        (valor === 'A') ? 11 : 10
        : valor * 1;
}