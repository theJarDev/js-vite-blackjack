
import _ from 'underscore';

/**
 * Está función crea un nuevo deck con las cartas en posición aleatoria
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','K','Q']
 * @returns {Array<String>} Retorna el deck creado aleatoriamente
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for(let i = 2; i<=10; i++){
        
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }

    }

    for(let esp of tiposEspeciales){

        for(let tipo of tiposDeCarta){
            deck.push(esp + tipo);
        }

    }

    return _.shuffle(deck);
}