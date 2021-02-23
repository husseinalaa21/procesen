import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function endPage() {
    return (
        <div className="information">
            <div className="about_info">
                <div className="mainInfoAbout">
                    <div>
                        <a><div className="infoDirPage"> اتصل بنا </div></a>
                        <a><div  className="infoDirPage"> دعمنا </div></a>
                    </div>
                    <div>
                        <a><div  className="infoDirPage"> المطور </div></a>
                        <a><div  className="infoDirPage" > سياسة استخدام الموقع </div></a>
                    </div>
                </div>
                <div className="socialInfoAbout">
                    <div> <a href="#" className="fa fa-facebook"></a> </div>
                    <div> <a href="#" className="fa fa-twitter"></a> </div>
                    <div> <a href="#" className="fa fa-linkedin"></a> </div>
                    <div> <a href="#" className="fa fa-google"></a> </div>
                </div>
            </div>
            <div className="prolognet_info">
                <div className="logoInfoAr"> © جميع الحقوق محفوضة  </div>
                <div className="logoInfoaa"> Prcosent @ 2020 - 2021 </div>
            </div>
        </div>
    )
}
