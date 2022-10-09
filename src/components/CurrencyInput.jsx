const CurrencyInput = ( { amount, currency, currencies, onCurrencyChange, onAmountChange } ) => {
    const inputClasses = 'text-myWhite outline-none border border-x-0 border-t-0 py-4 px-7 w-3/5 text-3xl bg-inherit font-medium'
    const selectClasses = 'outline-none text-gray-500 text-2xl bg-inherit font-medium cursor-pointer border border-x-0 border-t-0'
    return (
        <div className="flex justify-center py-6 lg:py-10 mx-auto">
            <input
                className={ inputClasses }
                type="number"
                value={ amount }
                onChange={ e => onAmountChange( e.target.value ) }
                placeholder="Enter amount"
            />
            <select
                className={ selectClasses }
                value={ currency }
                onChange={ e => onCurrencyChange( e.target.value ) }>
                { currencies.map( currency =>
                    <option
                        key={ currency }
                        value={ currency }>
                        { currency }
                    </option>
                ) }
            </select>
        </div>
    )
}

export default CurrencyInput

