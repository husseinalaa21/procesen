import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default function SendCommint(x) {
    const [isSendCo, sendingco] = useState(false)
    const [isCancel, isCancelX] = useState(false)
    const [isCncelSend, isCncelSendX] = useState(false)
    const [isSendIt, setisSendIt] = useState(false)
    var them = x.them
    try {
        if (x.xc === true) {
            return (
                <div className={x.them ? "sendCommitnDark" : "sendCommitnLight"} onClick={() => sendingco(true)}>
                    {isSendCo ? <ThenSendThis sec={x.sec} /> : <TextSendHere type=" Submit a report  " classN={false} />}
                </div>
            )
        } else {
            return (
                <div className={x.them ? "sendCommitnDark" : "sendCommitnLight"} onClick={() => sendingco(true)}>
                    <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '11px', marginRight: '6px', marginTop: '2px' }} />

                    {isSendCo ? <ThenSendThis sec={x.sec} /> : <TextSendHere type=" report . " classN={false} />}
                </div>
            )
        }
    } catch (err) {
        return (
            <div className={x.them ? "sendCommitnDark" : "sendCommitnLight"} onClick={() => sendingco(true)}>
                <FontAwesomeIcon icon={faQuestionCircle} style={{ fontSize: '11px', marginRight: '6px', marginTop: '2px' }} />

                {isSendCo ? <ThenSendThis sec={x.sec} /> : <TextSendHere type="report . " classN={false} />}
            </div>
        )
    }

    function FormSend() {
        var textNma = "",
            textEm = "",
            textArea = "";

        function subm() {
            if (textNma.length > 0 && textEm.length > 0 && textArea.length > 0) {
                fetch("http://server.procesen.com/FeedMessage"+ "?name=" + textNma + "&email=" + textEm + "&mess=" + textArea + "&formNum=5100&sec=0")
                    setisSendIt(true)
            }
        }
            var textTitleLi = { fontSize: '18px', padding: '10px', paddingBottom: '15px', color: ' #494a4b', width: '90%' }
            var textTitleDr = { fontSize: '18px', padding: '10px', paddingBottom: '15px', color: '#eee', width: '90%' }
            var btnLi = { cursor: 'pointer', backgroundColor: ' #30475e' }
            var btnDr = { cursor: 'pointer', backgroundColor: ' #3993cf', color: '#d4d4d4', border: "1px solid rgb(128, 155, 236)" }
            return (
                <div className={them ? "formSendNotesMain sendReDr" : "formSendNotesMain senReLi"} style={{ textAlign: 'center' }}>
                    <p style={them ? textTitleDr : textTitleLi}> Submit a report </p>
                    <div className="enterNam">
                        <input type="text" className={them ? "inputInf inputInfDr" : "inputInf"} placeholder=" Enter your name  " onChange={(x) => textNma = x.target.value}></input>
                    </div>
                    <div className="enterGmail" >
                        <input type="text" className={them ? "inputInf inputInfDr" : "inputInf"} placeholder=" Enter your email " onChange={(x) => textEm = x.target.value}></input>
                    </div>
                    <div className="enterNotes">
                        <textarea onChange={(x) => textArea = x.target.value} className={them ? "textarea textareaDr" : "textarea"} style={{ borderRadius: '3px', color: '#393e46', resize: 'none', backgroundColor: 'rgba(255, 255, 255, 0.527)', borderRradius: '3px', width: '90%', border: '0', padding: '10px' }} rows="10" placeholder=" Enter your notes "></textarea>
                    </div>
                    <div className="entserSendThin " style={them ? btnDr : btnLi} onClick={() => { subm() }}> Submit </div>
                </div>
            )
        }

        function ThenSendThis(x) {
            var thmFormLi = isCancel ? { padding: '5px', paddingTop: '0' } : { padding: '10px', border: '0', borderLeft: ' 4px solid  #2682df', width: '80%', borderRadius: '2px', margin: 'auto', backgroundColor: ' rgb(245, 245, 245)', marginTop: '20px' }
            var thmFormDr = isCancel ? { padding: '5px', paddingTop: '0' } : { padding: '10px', border: '0', borderLeft: ' 4px solid  #2682df', width: '80%', borderRadius: '2px', margin: 'auto', backgroundColor: 'rgb(15, 34, 70)', marginTop: '20px' }
            if (isSendIt === true) {
                return (
                    <div> Thanks for your report . </div>
                )
            } else {
                return (
                    <>
                        <div className="formSendNotes" style={them ? thmFormDr : thmFormLi}>
                            {isCancel ? '' : <FormSend />}
                            <div onClick={() => {
                                isCancelX(true)
                                isCncelSendX(true)
                            }}>{isCncelSend ? ' Report canceled .  ' : <div className="cancelSendNote"> Cancel </div>}</div>

                        </div>
                    </>
                )
            }
        }
    }

    function TextSendHere(x) {
        return (
            <div style={x.classN ? { color: '#00458b', marginRight: '6px', fontSize: '13px' } : { border: '0', borderBottom: '1px solid  #2c2a2a5d', cursor: 'pointer', fontSize: '15px' }}>
                {x.type}
            </div>
        )
    }