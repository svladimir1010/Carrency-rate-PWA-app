import { format } from './formatInput'

export const liveCurrent = rates => {
    return function current() {
        return {
            USD: format( rates['UAH'] / rates['USD'] ),
            EUR: format( rates['UAH'] / rates['EUR'] )
        }
    }
}