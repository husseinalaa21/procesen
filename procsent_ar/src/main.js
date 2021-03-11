import './design/style/main.css';
import './design/style/header.css';
import './design/style/end.css';
import './design/style/procs.css';
import Body from './main/body'
import EndPage from './main/endPage'
import HeaderMenu from './main/headerMenu'
import ProcessFromUser from './main/processFromUser'
import Proc from './ppccssee/proc';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faInfo} from '@fortawesome/free-solid-svg-icons'

function mainHome() {
  return (
    <>
      <HeaderMenu />
      <div className="bodyRootDisplay">
        <div className="webDiskTols">
          <div className="sectionProcess">
            <SetSec class={"secplus onePlus"} ico={<FontAwesomeIcon icon={faInfo} />} title={"قسم كتابة النص"} con={"أدخل في هذا القسم النص الذي ترغب بمعالجته ."} linN={true} lin = {"#learnSectionOne"}/>
            <WebAds ad={""} />
            <SetSec class={"secplus threeplus"} ico={<FontAwesomeIcon icon={faInfo} />} title={"النص المعدل "} con={"في هذا القسم سيظهر النص بعد التعديل و المعالجة  ."} linN={true} lin = {"#learnSectionThree"}/>
            <SetSec class={"secplus twonPlus"} ico={ <FontAwesomeIcon icon={faBolt} /> } title={" بعض من مزاية تعديل النص "} con={<ul> <li> يمكنك اضافة كلمة أو حرف أو رمز معين لكي يتم حذفه </li> <li> يمكنك أزالة جمل أو جزء من النص لمدخل كحذف الاقتباسات أو المصادر . </li> </ul>} linN={false} lin = {false}/>
            <WebAds ad={""} />
          </div>
          <div className="anTolsWeb">

          </div>
        </div>
        <div className="bodyDivs">
          <ProcessFromUser className="messArabic" useWeb=" استخدام الموقع " learnWeb=" تعليم الموقع " messToApper=" يمكنك استخدام الموقع أو يمكنك المبادرة في تحسين الموقع ." />
          <Proc />
          <Body />
        </div>
      </div>
      <EndPage />
    </>
  );
}

function SetSec(p) {
  return (
    <div className={p.class}>
      <div className="titlePlus">
        <div className="icoPlus">
          {p.ico}
        </div>
        <div className="textPlus">
          {p.title}
        </div>
      </div>
      <div className="conPlus">
        <div className="conA">
          {p.con}
        </div>
        {p.linN ?
        <div className="conB">
          <div className="conBsecA">
          <a href={p.lin} > معرفة المزيد . </a>
          </div>
        </div> : ""}
      </div>
    </div>
  )
}

function WebAds(params) {
  return (
    <div className="webAd">
      <div className="titleWebAd">
        Ads
      </div>
      <div className="containerAd">
        {params.ad}
      </div>
    </div>
  )
}

export default mainHome;