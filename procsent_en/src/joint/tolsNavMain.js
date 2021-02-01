import React from 'react'

export default function TolsNavMain(props) {
    if (props.itemCase === "Lang") {
        return (
            <div className="header_tols" className={props.thisLang ? "thisLangItem": "LangItem"} onClick={() => props.thisLang ? "" : window.location.href = "./"+props.thisHref}> {props.lang} </div>
        )
    } else {
        return (
            <div>
                <div className="header_tols"> {props.items} </div>
            </div>
        )
    }
}