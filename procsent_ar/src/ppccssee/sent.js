import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faAtom, faGrinHearts, faInfoCircle, faSpider, faSpinner } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize';


export default function P___rps(x) {
    const [caseInfoProcs, setcaseInfoProcs] = useState(false)
    var vText = x.xtex
    var listCaseInf = {}

    function checkInfCase() {
        if (vText.includes("s")) {

        } else {

        }
    }

    function CaseInfoThisP(s) {
        try {
            if (vText.length > 0) {
                if (caseInfoProcs === false) {
                    return (
                        <div>
                            <FontAwesomeIcon icon={faSpinner} />
                        </div>
                    )
                } else {
                    return (
                        <div>
                            يوجد
                        </div>
                    )
                }
            } else {
                return (
                    <div>
                    <FontAwesomeIcon icon={faSpinner} />
                    </div>
                )
            }
        } catch (err) {
            return (
                <div>
                <FontAwesomeIcon icon={faSpinner} />
                </div>
            )
        }
    }

    return (
        <div className="ffPcsSec" style={{ paddingTop: '10px' }}>
            <label className="llPcsSec">
                <div className="redeyTextAreaInf">
                    <div className="redeyTextAreaInfTIT">
                        <div>
                            <FontAwesomeIcon icon={faAlignLeft} className="icInfPrcs" />
                            معلومات النص المدخل
                        </div>
                        <div>
                            <CaseInfoThisP />
                        </div>
                    </div>

                </div>
                <div className="titlePcs redeyTextAreaK">
                    <div className="titleTextArea"> <FontAwesomeIcon icon={faAtom} className="icInfredeyTextAreaKV" />  النص بعد التعديل و المعالجة  </div>
                    <FontAwesomeIcon icon={faInfoCircle} className="icInfredeyTextAreaK" />
                </div>
                <div className="areaPccSec" style={x.ccThem ? x.drThem : x.liThem}>
                    <div className="toolsMenuAreaPcs">
                        <div className="optionTolsJs" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div style={{ paddingLeft: '10px', paddingRight: '5px', border: '0', borderLeft: '1.5px solid  #38383867' }}>
                                نسخ
                           </div>
                            <div style={{ paddingLeft: '5px', paddingRight: '10px', }}>
                                مسح
                           </div>
                        </div>
                        <div >

                        </div>
                    </div>
                    <div className="textArea">
                        <TextareaAutosize className="areaPcP"
                            style={x.ccThem ? x.ddrThem : x.lliThem}
                            rows="4"
                            placeholder=" النص المستخرج "
                            value={vText} />
                    </div>
                    <div className="toolsBottomAreaPcs">
                        <div className="textAreaBottom">
                            2000 / 0
                        </div>
                        <div className="textAreaBottomLogo">
                            Powered by procsent
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}
