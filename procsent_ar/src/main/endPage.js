import React from 'react'

export default function endPage() {
    return (
        <div className="information">
            <div className="about_info">
                <div className="mainInfoAbout">
                    <div>
                        <div className="infoDirPage"> اتصل بنا </div>
                        <div  className="infoDirPage"> دعمنا </div>
                    </div>
                    <div>
                        <div  className="infoDirPage"> المطور </div>
                        <div  className="infoDirPage"> سياسة استخدام الموقع </div>
                    </div>
                </div>
                <div className="socialInfoAbout">
                    <div> <i class="fab fa-twitter"></i> </div>
                    <div> <i class="fab fa-facebook-f"></i> </div>
                    <div> <i class="fas fa-envelope-open"></i> </div>
                    <div> <i class="fas fa-paper-plane"></i> </div>
                </div>
            </div>
            <div className="prolognet_info">
                <div className="logoInfoAr"> © جميع الحقوق محفوضة  </div>
                <div> <mark className="prolog_about">P</mark>rologNet @ 2020 - 2021</div>
            </div>
        </div>
    )
}
