import './design/style/header.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './design/logo/logo5.png';
import { useState } from 'react'
import TolsNavMain from './joint/tolsNavMain'
import { faHandHoldingUsd, faLanguage, faMoon } from '@fortawesome/free-solid-svg-icons';
import Main from './main'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function App() {
    const [clickNav, setClickNav] = useState(false)
    const [clickNavLang, setClickNavLang] = useState(false)
    function cockInfF() {
      const coInf = cookies.get('infFront')
      if (coInf !== undefined && coInf === 'true') {
        return true
      } else {
        return false
      }
    }
    function isNi() {
        const letMe = cookies.get('liNi')
        if (letMe !== undefined && letMe === 'true') {
            return true
        } else {
            return false
        }
    }
    function resThem() {
        let ili = '"' + !isNight + '"'
        cookies.set('liNi', ili)
        isNightX(!isNight)
    }
    function deFroTex(x) {
      setinfI(false)
      cookies.set('infFront', false)
    }
    const [isNight, isNightX] = useState(isNi())
    const [srcc, setsrcc] = useState(false)
    const [copThisLin, setcopThisLin] = useState(false)
    var themLd = isNight ? "barDark" : "barLight"
    var tue = window.location.protocol + "//" + window.location.hostname + "/"
    function tolsMenu() {
        if (clickNav) {
            return (
                <div className="navMain">
                    <div className="secTopHeader">
                        <a className="secHh scb" href="#sec-definition-site"> About us </a>
                        <a className="secHh scw" href="#sec-policy-site"> Terms of use </a>
                        <a className="secHh scw" href="https://callus.procesen.com/callus-en/index.html"> Connect with us  </a>
                        <a className="secHh scb" href="https://www.paypal.com/paypalme/husseinalaa2000"> Our support <FontAwesomeIcon icon={faHandHoldingUsd} className="supUs" /></a>
                    </div>
                    <div className="secLinksTop ">
                        <div className="_soceLi">
                            <a href="https://web.facebook.com/procesen" className="_face"> <i className="fa fa-facebook" ></i> </a>
                            <a href="https://twitter.com/procesen_" className="_twit"> <i className="fa fa-twitter" ></i> </a>
                            <a href="mailto:procesen@gmail.com" className="__email"> <i className="fa fa-envelope" ></i> </a>
                            <div className="_lin" onClick={() => { setcopThisLin(!copThisLin) }}> <i className="fa fa-link"></i> </div>
                        </div>
                        <div className="copThis" style={copThisLin ? { display: "block" } : { display: "none" }}>
                            <div className="texCopThis"> Copy this website link please </div>
                            <div className="sopThisCon">
                                <div className="icoCopThis"> <i className="fa fa-link"></i> </div>
                                <div className="LiCopThis"> {tue} </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } if (clickNavLang) {
            return (
                <div className="langChose">
                    <TolsNavMain itemCase="Lang" lang=" English " thisHref="" thisLang={true} />
                    <TolsNavMain itemCase="Lang" lang="Arabic " thisHref="ar." thisLang={false} />
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
        <>
            <div className={isNight ? "headerMenu headerDark" : "headerMenu headerNight"}>
                <div className={srcc ? "header sha" : "header normHeader"}>
                    <div className="header_main">
                        <div className="sectionsNavFlex">
                            <div className="searchToggThem" onClick={() => { resThem(!isNight) }}>
                                <FontAwesomeIcon icon={faMoon} style={isNight ? { marginTop: '10px', color: ' rgb(223, 180, 39)', fontSize: '17px', transition: '0.4s' } : { marginTop: '10px', color: ' #30475ecc', fontSize: '17px', transition: '0.4s' }} />
                            </div>
                            <div className="searchChangeLang" onClick={() => {
                                setClickNavLang(!clickNavLang)
                                if (clickNav === true) {
                                    document.getElementById("toggleNavBar").classList.toggle("change");
                                    setClickNav(false)
                                }
                            }}>
                                <FontAwesomeIcon icon={faLanguage} style={clickNavLang ? { marginTop: '6px', color: '  #3b72aa', fontSize: '24px', transition: '0.4s' } : { marginTop: '6px', color: ' #30475ecc', fontSize: '24px', transition: '0.4s' }} />
                            </div>
                        </div>

                        <div className="container_log">
                            <div className={isNight ? "logo_text logo_textD" : "logo_text logo_textN"}>
                                <p className={"prolog_logo "}>Proce</p>
                                <p className={isNight ? "net_logoD " : "net_logo"}>sen</p>
                                <img src={Logo} width="35px" height="35px" alt="" style={{ marginTop: '1px' }}></img>
                            </div>
                        </div>

                        <div id="toggleNavBar" className="container" onClick={() => {
                            setClickNav(!clickNav)
                            document.getElementById("toggleNavBar").classList.toggle("change");
                            if (clickNavLang === true) {
                                setClickNavLang(false)
                            }
                        }}>
                            <div className={"bar1 " + themLd}></div>
                            <div className={"bar2 " + themLd}></div>
                            <div className={"bar3 " + themLd}></div>
                        </div>
                    </div>

                    {tolsMenu()}

                </div>
            </div>
            <div className={isNight ? "conProcesen conProDr" : "conProcesen conProL"}>{infI ?
                <div className={isNight ? "defProcesen defProDr" : "defProcesen defProL"}>
                    <div className={isNight ? "defImgIco dImgDr" : "defImgIco dImgL"} ><img src={Logo} alt="def" width="25px" height="25px" /></div>
                    <div className="defText"> <b className="defTextProce"> Proce</b><b className="defTextSen">sen</b> is a site for <b className="defTextProce">processing</b> <b className="defTextSen">sentences</b> by artificial intelligence . for more information , <a href="#sec-definition-site" > click here </a> , To remove the introductory text <span className="spanDeleteInfoFront" onClick={() => deFroTex()}> click here . </span> </div>
                </div> : ""}
            </div>
            <Main themHeader={isNight} />
        </>
    )
}