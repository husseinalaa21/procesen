import React from 'react'

export default function TextSp(x) {
    return (
        <div className={"textSp " + x.type}>
            <i className="fa fa-quote-left" style={{fontSize : '10px', color : '#383838', padding: '5px', border : '2px solid  #38383828'}}></i>
            {x.text}
        </div>
    )
}