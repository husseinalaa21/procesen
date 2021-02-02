import './design/main.css';
import Body from './main/body'
import EndPage from './main/endPage'
import HeaderMenu from './main/headerMenu'
import ProcessFromUser from './main/processFromUser'


function mainHome() {

  return (
    <>
      <HeaderMenu />
      <div className="bodyDivs">
        <ProcessFromUser className = "messArabic" useWeb = " استخدام الموقع " learnWeb = " تعليم الموقع " messToApper = " يمكنك استخدام الموقع أو يمكنك المبادرة في تحسين الموقع ."/>
        <Body />
        <EndPage />
      </div>
    </>
  );
}

export default mainHome;