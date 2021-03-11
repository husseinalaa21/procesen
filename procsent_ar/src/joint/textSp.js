import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function TextSp(x) {
    return (
        <div className="textSp ">
            <div className="textSpIco">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <div className="textSpText">
                {x.text}
            </div>
        </div>
    )
}