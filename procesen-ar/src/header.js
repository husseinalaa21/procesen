import './design/style/header.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './design/logo/logo5.png';
import { useState } from 'react'
import TolsNavMain from './joint/tolsNavMain'
import { faLanguage, faMoon } from '@fortawesome/free-solid-svg-icons';
import Main from './main'

export default function App() {
  const [clickNav, setClickNav] = useState(false)
  const [clickNavLang, setClickNavLang] = useState(false)
  const [isNight, isNightX] = useState(false)
  const [srcc, setsrcc] = useState(false)
  var themLd = isNight ? "barDark" : "barLight"
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
            <ItemListMain i={" سياسة استعمال الموقع "} css={"#ppsite"} />
            <ItemListMain i={" المطور "} css={"#ppsite"} />
            <ItemListMain i={" تواصل معنا "} css={"#ppsite"} />
          </div>
        </div>
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
              <div className="searchToggThem" onClick={() => { isNightX(!isNight) }}>
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
      <div className="conProcesen">
        <div className="defProcesen">
          <img src={Logo} alt="def" width="25px" height="25px" className="defImgIco" />
          <p className="defText"> بروسيسن هو أختصال : ( <b className="defTextProce"> Proce</b><b className="defTextSen">sen</b> ) أي <b className="defTextProce">processing</b> <b className="defTextSen">sentences</b> by artificial intelligence . for more information , " و التي تعني معالجة الجُمل بواسطة الذكاء الاصطناعي " , <a href="#sec-definition-site" > معرفة المزيد </a> </p>
        </div>
      </div>
      <Main themHeader={isNight} />
    </>
  )
}