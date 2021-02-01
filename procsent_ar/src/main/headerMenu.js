import React  from 'react'
import Logo from '../design/logo7.png';
import { useState } from 'react'
import TolsNavMain from '../joint/tolsNavMain'

export default function HeaderMenuEn() {
    const [clickNav, setClickNav] = useState(false)
    const [clickNavLang, setClickNavLang] = useState(false)

    function tolsMenu() {
        if (clickNav) {
            return (
                <TolsNavMain itemCase="menu" lang=" English " />
            )
        } if (clickNavLang) {
            return (
                <div className="langChose">
                    <TolsNavMain itemCase="Lang" lang=" انجليزي " thisHref="en" thisLang={false} />
                    <TolsNavMain itemCase="Lang" lang=" عربي " thisHref="ar" thisLang={true} />
                </div>
            )
        }
    }

    return (
        <div className = "headerMenu">
        <div className="header">
            <div className="header_main">
                <div className="sectionsNavFlex">
                    <div className="searchToggThem">
                        <i className="fa fa-moon-o" style={{ marginTop: '6px', color: '#30475e', fontSize: '20px' }}></i>
                    </div>

                    <div className="searchChangeLang" onClick={() => {
                        setClickNavLang(!clickNavLang)
                        if (clickNav === true) {
                            document.getElementById("toggleNavBar").classList.toggle("change");
                            setClickNav(false)
                        }
                    }}>
                        <i className="fa fa-language" style={{ marginTop: '6px', color: '#30475e', fontSize: '20px' }}></i>
                    </div>
                </div>

                <div className="container_log">
                    <div className="logo_text">
                        <p className="prolog_logo">Proc</p>
                        <p className="net_logo">sent</p>
                        <img src={Logo} width="30px" height="30px" alt="" style={{ marginTop: '1px' }}></img>
                    </div>
                    <div className="info_about_logo">
                        <p className="Pprocessing">الجمل &nbsp;</p><p className="Psentence">محلل</p>
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
