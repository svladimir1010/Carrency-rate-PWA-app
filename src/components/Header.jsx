const Header = ( { liveCurrent } ) => {
    const { USD, EUR } = liveCurrent()
    return (
        <div
            className="lg:py-24 py-20  flex flex-col justify-center items-center text-myWhite font-medium text-3xl">
            <div>
                Live Currency Converter
            </div>
            <hr/>
            <div className="w-3/6 flex flex-col gap-7 items-center lg:justify-around pt-14 lg:flex-row">
                <span>USD: { USD }</span> <span>EUR: { EUR }</span>
            </div>
        </div>
    )
}

export default Header
