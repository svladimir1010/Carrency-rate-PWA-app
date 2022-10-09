import CurrencyInput from './components/CurrencyInput'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import useInput from './hooks/useInput'
import { liveCurrent } from './utils/liveCurrent'

function App() {
    const classes = "bg-myBg flex flex-col h-screen container mx-auto relative sm:min-w-full"
    const [ rates,
        error,
        amount_1,
        amount_2,
        currency_1,
        currency_2,
        handleAmount_1Change,
        handleCurrency_1Change,
        handleAmount_2Change,
        handleCurrency_2Change ] = useInput()
    return (
        <div className={classes}>
            <Header liveCurrent={ liveCurrent( rates ) }/>
            { error
                ? <Error/>
                : <div>
                    <CurrencyInput
                        onAmountChange={ handleAmount_1Change }
                        amount={ amount_1 }
                        onCurrencyChange={ handleCurrency_1Change }
                        currencies={ Object.keys( rates ) }
                        currency={ currency_1 }
                    />
                    <CurrencyInput
                        onAmountChange={ handleAmount_2Change }
                        onCurrencyChange={ handleCurrency_2Change }
                        currencies={ Object.keys( rates ) }
                        amount={ amount_2 }
                        currency={ currency_2 }
                    />
                </div>
            }
            <Footer/>
        </div>
    )
}

export default App

