import React from 'react'

export default function TolsNavMain(props) {
    if (props.itemCase === "Lang") {
        var thisLang = props.thisLang
        var lang = props.lang
        var hrefX = props.thisHref
        return (
            <div className={thisLang ? "header_tols thisLangItem" : "header_tols LangItem"} onClick={() => thisLang? "" : window.location.href = "https://"+hrefX+"procesen.com"}>
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