import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function TextSp(x) {
    return (
        <div className={"textSp " + x.type}>
            <FontAwesomeIcon icon={faQuoteLeft} style={{fontSize : '10px', color : '#383838', padding: '5px', border : '2px solid  #38383828'}}/>
            {x.text}
        </div>
    )
}