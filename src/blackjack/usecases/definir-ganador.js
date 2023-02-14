
/**
 * Está función determina quien es el ganador del juego
 * @param {number} puntosComputadora 
 * @param {number} puntosMinimos 
 */
export const definirGanador = (puntosComputadora, puntosMinimos) => {

    setTimeout(() => {
        if(puntosComputadora === puntosMinimos){
            alert('Nadie gana');
        } else if(puntosMinimos > 21){
            alert('Computadora gana');
        } else if(puntosComputadora > 21){
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        };
    }, 80);

}