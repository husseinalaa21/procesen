import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function endPage() {
    return (
        <div className="information">
            <div className="about_info">
                <div className="mainInfoAbout">
                    <div>
                        <div className="infoDirPage"> call us </div>
                        <div  className="infoDirPage"> support us </div>
                    </div>
                    <div>
                        <div  className="infoDirPage"> developer </div>
                        <div  className="infoDirPage"> Website usage policy </div>
                    </div>
                </div>
                <div className="socialInfoAbout">
                    <div> <FontAwesomeIcon icon={['fab', 'facebook-f']}  /> </div>
                    <div> <i className="fab fa-facebook-f"></i> </div>
                    <div> <i className="fas fa-envelope-open"></i> </div>
                    <div> <i className="fas fa-paper-plane"></i> </div>
                </div>
            </div>
            <div className="prolognet_info">
                <div className="logoInfoAr"> © all rights are save  </div>
                <div> <mark className="prolog_about">P</mark>rologNet @ 2020 - 2021</div>
            </div>
        </div>
    )
}
