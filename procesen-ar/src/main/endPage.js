import React from 'react'

export default function endPage(x) {
    return (
        <div className={x.them ? "informationDr" : "information"}>
            <div className="about_info">
                <div className="mainInfoAbout">
                    <div>
                        <a><div className="infoDirPage"> call us </div></a>
                        <a><div  className="infoDirPage"> Our support </div></a>
                    </div>
                    <div>
                        <a><div  className="infoDirPage"> About </div></a>
                        <a href="#sec-policy-site"><div  className="infoDirPage" > Website usage policy </div></a>
                    </div>
                </div>
                <div className="socialInfoAbout">
                    <div> <a href="#" className="fa fa-facebook facebookDiv"></a> </div>
                    <div> <a href="#" className="fa fa-twitter twitterDiv"></a> </div>
                </div>
            </div>
            <div className="prolognet_info">
                <div className="logoInfoAr"> All rights reserved  </div>
                <div className="logoInfoaa"> Prcosent © 2020 - 2021 </div>
            </div>
        </div>
    )
}