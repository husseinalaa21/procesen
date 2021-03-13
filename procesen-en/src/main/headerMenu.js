import React from 'react'
import Logo from '../design/logo/logo5.png';
import { useState } from 'react'
import TolsNavMain from '../joint/tolsNavMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMoon } from '@fortawesome/free-solid-svg-icons';
export default function HeaderMenuEn() {
    const [clickNav, setClickNav] = useState(false)
    const [clickNavLang, setClickNavLang] = useState(false)
    const [isNight, isNightX] = useState(false)
    const [srcc, setsrcc] = useState(false)

    function ItemListMain(x) {
        return (
            <div >
                <a href={x.css}> {x.i} </a>
            </div>
        )
    }
    function tolsMenu() {
        if (clickNav) {
            return (
                <div className="navMain">
                    <div className="socialMainMediaNav">
                        <div> <a href="#" className="fa fa-facebook"></a> </div>
                        <div> <a href="#" className="fa fa-twitter"></a> </div>
                        <div> <a href="#" className="fa fa-linkedin"></a> </div>
                        <div> <a href="#" className="fa fa-google"></a> </div>
                    </div>
                    <div className="namMainTols">
                        <ItemListMain i={" Site usage policy "} css={"#ppsite"} />
                        <ItemListMain i={" The developer "} css={"#ppsite"} />
                        <ItemListMain i={" Connect us "} css={"#ppsite"} />
                    </div>
                </div>
            )
        } if (clickNavLang) {
            return (
                <div className="langChose">
                    <TolsNavMain itemCase="Lang" lang=" English " thisHref="en" thisLang={true} />
                    <TolsNavMain itemCase="Lang" lang="Arabic " thisHref="ar" thisLang={false} />
                </div>
            )
        }
    }
    window.onscroll = function () { scr() };
    function scr() {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            setsrcc(true)
        } else {
            setsrcc(false)
        }
    }

    return (
        <div className="headerMenu">
            <div className={srcc ? "header sha" : "header normHeader"}>
                <div className="header_main">
                    <div className="sectionsNavFlex">
                        <div className="searchToggThem" onClick={() => { isNightX(!isNight) }}>
                            <FontAwesomeIcon icon={faMoon} style={isNight ? { marginTop: '10px', color: ' rgb(223, 180, 39)', fontSize: '17px', transition: '0.4s' } : { marginTop: '10px', color: ' #30475ecc', fontSize: '17px', transition: '0.4s' }} />
                        </div>

                        <div className="searchChangeLang" onClick={() => {
                            setClickNavLang(!clickNavLang)
                            if (clickNav === true) {
                                document.getElementById("toggleNavBar").classList.toggle("change");
                                setClickNav(false)
                            }
                        }}><FontAwesomeIcon icon={faLanguage} style={clickNavLang ? { marginTop: '6px', color: '  #3b72aa', fontSize: '24px', transition: '0.4s' } : { marginTop: '6px', color: ' #30475ecc', fontSize: '24px', transition: '0.4s' }} />
                        </div>
                    </div>

                    <div className="container_log">
                        <div className="logo_text">
                            <p className="prolog_logo">Proc</p>
                            <p className="net_logo">sent</p>
                            <img src={Logo} width="30px" height="30px" alt="" style={{ marginTop: '1px' }}></img>
                        </div>
                        <div className="info_about_logo">
                            <p className="Pprocessing">Processing &nbsp;</p><p className="Psentence">Sentence .</p>
                        </div>
                    </div>


                    <div id="toggleNavBar" className="container" onClick={() => {
                        setClickNav(!clickNav)
                        document.getElementById("toggleNavBar").classList.toggle("change");
                        if (clickNavLang === true) {
                            setClickNavLang(false)
                        }
                    }}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>

                {tolsMenu()}

            </div>
        </div>
    )
}
