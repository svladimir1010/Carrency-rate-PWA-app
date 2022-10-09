import axios from 'axios'

export default class Service {
    static async getRate() {
        // const res = await axios.get( /api/ )
        const res = await axios.get( 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,GBP,CAD,AUD,CHF,CNY,RUB,UAH&places=3' )
        return res.data.rates
    }
}