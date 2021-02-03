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
        <ProcessFromUser className = "messEn" 
          learnWeb = " Website education "
          messToApper = " You can use the site or you can take the initiative to improve the site ."/>
        <Body />
        <EndPage />
      </div>
    </>
  );
}

export default mainHome;