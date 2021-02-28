import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight } from '@fortawesome/free-solid-svg-icons'

export default function TextSp(x) {
    return (
        <div className={x.type}>
            <FontAwesomeIcon icon={faQuoteRight} style={{fontSize : '10px', color : '#383838', padding: '5px', border : '2px solid  #38383828'}}/>
            <i className="textSp">{x.text}</i>
        </div>
    )
}