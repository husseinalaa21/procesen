import React from 'react'
import './design/style/main.css';
import './design/style/end.css';
import './design/style/procs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Body from './main/body'
import EndPage from './main/endPage'
import ProcessFromUser from './main/processFromUser'
import Proc from './ppccssee/proc';
import { faBolt, faInfo } from '@fortawesome/free-solid-svg-icons'

export default function main(x) {
  var secPlusClass = x.themHeader ? "secplus secplusDark" : "secplus secplusLight"
  return (
    <>
      <div className="bodyRootDisplay">
        <div className={x.themHeader ? "webDiskTols webDiskDark" : "webDiskTols webDiskLight"}>
          <div className="sectionProcess">
            <SetSec class={secPlusClass + " onePlus"} ico={<FontAwesomeIcon icon={faInfo} />} title={"Text writing section ( section One ) ."} con={"Enter in this section the text you want to process . "} linN={true} lin={"#sec-how-use"} />
            <WebAds ad={""} />
            <SetSec class={secPlusClass + " threeplus"} ico={<FontAwesomeIcon icon={faInfo} />} title={"The next section ."} con={"In this section the text will appear after editing and processing ."} linN={true} lin={"#sec-how-use"} />
            <SetSec class={secPlusClass + " twonPlus"} ico={<FontAwesomeIcon icon={faBolt} />} title={""} con={<ul> <li> You can add a specific word, letter, or symbol to be deleted . </li> <li> You can remove sentences or parts of the text entered, such as deleting quotations or sources . </li> </ul>} linN={false} lin={false} />
            <WebAds ad={""} />
          </div>
          <div className="anTolsWeb">

          </div>
        </div>
        <div className={x.themHeader ? "bodyDivs divsDark" : "bodyDivs divsLight"}>
          <ProcessFromUser them={x.them} className="messArabic" useWeb=" use site . " learnWeb=" Site instruction " messToApper=" You can use the site or you can take the initiative to improve the site." />
          <Proc them={x.themHeader} />
          <Body them={x.themHeader} />
        </div>
      </div>
      <EndPage them={x.themHeader}/>
    </>
  );

  function SetSec(p) {
    return (
      <div className={p.class}>
        <div className="titlePlus">
          <div className="icoPlus">
            {p.ico}
          </div>
          <div className={x.themHeader ? "textPlusDark" : "textPlus"}>
            {p.title}
          </div>
        </div>
        <div className="conPlus">
          <div className="conA">
            {p.con}
          </div>
          {p.linN ?
            <div className="conB">
              <div className={x.themHeader ? "conBsecADark" :"conBsecA" } >
                <a href={p.lin} > learn more . </a>
              </div>
            </div> : ""}
        </div>
      </div>
    )
  }

  function WebAds(params) {
    return (
      <div className={x.themHeader ? "webAdDark" : "webAd"}>
        <div className={x.themHeader ?"titleWebAdDark":"titleWebAd"}>
          Ad
          </div>
        <div className="containerAd">
          {params.ad}
        </div>
      </div>
    )
  }
}