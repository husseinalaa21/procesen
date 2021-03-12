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
            <SetSec class={secPlusClass + " onePlus"} ico={<FontAwesomeIcon icon={faInfo} />} title={"قسم كتابة النص"} con={"أدخل في هذا القسم النص الذي ترغب بمعالجته ."} linN={true} lin={"#learnSectionOne"} />
            <WebAds ad={""} />
            <SetSec class={secPlusClass + " threeplus"} ico={<FontAwesomeIcon icon={faInfo} />} title={"النص المعدل "} con={"في هذا القسم سيظهر النص بعد التعديل و المعالجة  ."} linN={true} lin={"#learnSectionThree"} />
            <SetSec class={secPlusClass + " twonPlus"} ico={<FontAwesomeIcon icon={faBolt} />} title={""} con={<ul> <li> يمكنك اضافة كلمة أو حرف أو رمز معين لكي يتم حذفه </li> <li> يمكنك أزالة جمل أو جزء من النص لمدخل كحذف الاقتباسات أو المصادر . </li> </ul>} linN={false} lin={false} />
            <WebAds ad={""} />
          </div>
          <div className="anTolsWeb">

          </div>
        </div>
        <div className={x.themHeader ? "bodyDivs divsDark" : "bodyDivs divsLight"}>
          <ProcessFromUser them={x.them} className="messArabic" useWeb=" استخدام الموقع " learnWeb=" تعليم الموقع " messToApper=" يمكنك استخدام الموقع أو يمكنك المبادرة في تحسين الموقع ." />
          <Proc them={x.themHeader} />
          <Body them={x.themHeader} />
        </div>
      </div>
      <EndPage />
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
                <a href={p.lin} > معرفة المزيد . </a>
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
          Ads
          </div>
        <div className="containerAd">
          {params.ad}
        </div>
      </div>
    )
  }
}