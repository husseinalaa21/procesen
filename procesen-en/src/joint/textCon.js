import React from 'react'

export default function TextCon(x) {
    return (
        <p className={"textCon "+x.type}> {x.text} </p>
    )
}
