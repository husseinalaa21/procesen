import React from 'react'

export default function TolsNavMain(props) {
    if (props.itemCase === "Lang") {
        var thisLang = props.thisLang
        var lang = props.lang
        var hrefX = props.thisHref
        return (
            <div className="header_tols" className={thisLang ? "thisLangItem" : "LangItem"} onClick={() => thisLang? "" : window.location.href = "https://"+hrefX+".procsent.com"}>
                {lang}
            </div>
        )
    } else {
        var ix = props.items
        return (
            <div className="tolsSwitch">
                <div className="header_tols"> {ix} </div>
            </div>
        )
    }
}