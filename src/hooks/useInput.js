import { useEffect, useState } from 'react'
import Service from '../API/service'
import { format } from '../utils/formatInput'
// import { useFetching } from './useFetching'

export default function useInput() {
    const [ amount_1, setAmount_1 ] = useState( '' )
    const [ amount_2, setAmount_2 ] = useState( '' )
    const [ currency_1, setCurrency_1 ] = useState( 'USD' )
    const [ currency_2, setCurrency_2 ] = useState( 'UAH' )
    const [ rates, setRates ] = useState( [] )
    const [ error, setError ] = useState( false )

    // const [ fetchData, errorData ] = useFetching( async() => {
    //     const data = await Service.getRate()
    //     setRates( data )
    // } )

    async function response () {
        try{
            const data = await Service.getRate()
            setRates( data )
        }catch( e ) {
            setError(true)
        }
    }

    useEffect( ( ) => {
        response()
    }, [ currency_1, currency_2 ] )

    const handleAmount_1Change = amount => {
        setAmount_2( format( amount * rates[currency_2] / rates[currency_1] ) )
        setAmount_1( amount )
    }

    const handleCurrency_1Change = currency => {
        setAmount_2( amount_1 * rates[currency_2] / rates[currency] )
        setCurrency_1( currency )
    }

    const handleAmount_2Change = amount => {
        setAmount_1( format( amount * rates[currency_1] / rates[currency_2] ) )
        setAmount_2( amount )
    }

    const handleCurrency_2Change = currency => {
        setAmount_1( amount_2 * rates[currency_1] / rates[currency] )
        setCurrency_2( currency )
    }

    return [
        rates,
         error,
        amount_1,
        amount_2,
        currency_1,
        currency_2,
        handleAmount_1Change,
        handleCurrency_1Change,
        handleAmount_2Change,
        handleCurrency_2Change
    ]
}