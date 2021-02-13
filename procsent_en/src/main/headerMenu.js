import React  from 'react'
import Logo from '../design/logo/logo7.png';
import { useState } from 'react'
import TolsNavMain from '../joint/tolsNavMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faMoon } from '@fortawesome/free-solid-svg-icons';

export default function HeaderMenuEn() {
    const [clickNav, setClickNav] = useState(false)
    const [clickNavLang, setClickNavLang] = useState(false)
    const [isNight, isNightX] = useState(false)

    function tolsMenu() {
        if (clickNav) {
            return (
                <TolsNavMain itemCase="menu" lang=" English " />
            )
        } if (clickNavLang) {
            return (
                <div className="langChose">
                    <TolsNavMain itemCase="Lang" lang=" English " thisHref="en" thisLang={true} />
                    <TolsNavMain itemCase="Lang" lang=" Arabic " thisHref="ar" thisLang={false} />
                </div>
            )
        }
    }

    return (
        <div className = "headerMenu">
        <div className="header">
            <div className="header_main">
                <div className="sectionsNavFlex">
                    <div className="searchToggThem" onClick={()=>{isNightX(!isNight)}}>
                        <FontAwesomeIcon icon={faMoon} style={isNight ? { marginTop: '10px', color: ' rgb(223, 180, 39)', fontSize: '17px' ,transition: '0.4s' }: { marginTop: '10px', color: ' #30475ecc', fontSize: '17px',transition: '0.4s'  }  } />
                    </div>

                    <div className="searchChangeLang" onClick={() => {
                        setClickNavLang(!clickNavLang)
                        if (clickNav === true) {
                            document.getElementById("toggleNavBar").classList.toggle("change");
                            setClickNav(false)
                        }
                    }}><FontAwesomeIcon icon={faLanguage} style={clickNavLang ? { marginTop: '6px', color: '  #3b72aa', fontSize: '24px',transition: '0.4s' } : { marginTop: '6px', color: ' #30475ecc', fontSize: '24px' ,transition: '0.4s' }} />
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

            { tolsMenu()}

        </div>
        </div>
    )
}
