import React from 'react'

export default function NotesCon(x) {
    return (
        <div className={"desInfoContainerMAin "+x.type}>
            {x.text}
        </div>
    )
}