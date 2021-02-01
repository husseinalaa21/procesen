import './design/main.css';
import Body from './main/body'
import EndPage from './main/endPage'
import HeaderMenu from './main/headerMenu'


function mainHome() {

  return (
    <>
      <HeaderMenu />
      <div className="bodyDivs">
        <Body />
        <EndPage />
      </div>
    </>
  );
}

export default mainHome;