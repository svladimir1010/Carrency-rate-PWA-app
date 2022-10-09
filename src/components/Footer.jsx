import React from 'react'
import svg from '../img/icon.svg'

const Footer = () => {
    return (
        <div>
            <div className="flex text-myWhite font-light absolute bottom-0 text-myWhite">
                <img src={ svg } alt="svg" className="mr-1"/>
                made by dev
            </div>
        </div>
    )
}

export default Footer
