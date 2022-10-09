import { useState } from 'react'

export const useFetching = callback => {
    const [ error, setError ] = useState( false )
    const fetching = async() => {
        try {
            setError( false )
            await callback()
        } catch(e) {
            setError( true )
        }
    }
    return [ fetching, error ]
}