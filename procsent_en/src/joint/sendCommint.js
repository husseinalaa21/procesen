import React from 'react'
import { useState } from 'react'

export default function SendCommint(x) {
    const [isSendCo, sendingco] = useState(false)
    const [isCancel, isCancelX] = useState(false)
    const [isCncelSend, isCncelSendX] = useState(false)
    const [isWrAll , isWrAllX] = useState(false)

    return (
        <div className="sendCommitn" onClick={() => sendingco(true)}>
            <i className='fas fa-question-circle' style={{ fontSize: '12px', color: '#383838', marginRight: '6px' }}></i>

            {isSendCo ? <ThenSendThis sec={x.sec} /> : <TextSendHere type=" Reporting . " classN={false} />}
        </div>
    )

    function FormSend() {
        return (
            <div className="formSendNotesMain" style={{ textAlign: 'center' }}>
                <p style={{fontSize : '18px', padding : '10px', paddingBottom : '15px', color : ' #494a4b'}}> Submit a report </p>
                <div className="enterNam">
                    <input type="text" className="inputInf" placeholder=" Enter your name  "></input>
                </div>
                <div className="enterGmail" >
                    <input type="text" className="inputInf" placeholder=" Enter your email "></input>
                </div>
                <div className="enterNotes">
                    <textarea className="textarea" style={{color: '#393e46',resize: 'none',backgroundColor: 'rgba(255, 255, 255, 0.527)',borderRradius: '3px',width: '90%',border: '0', padding: '10px'}} rows="10" placeholder=" Enter your notes "></textarea>
                </div>
                <div className="entserSendThin " style={isWrAll ? {backgroundColor : ' #30475e' , cursor : 'pointer'}: {backgroundColor : ' #30475e3d'}}> Submit </div>
            </div>
        )
    }

    function ThenSendThis(x) {
        return (
            <>
                <div className="formSendNotes" style={isCancel ? {padding: '5px' , paddingTop : '0'}:{ padding: '10px', border: '0', borderLeft: ' 4px solid  #2682df', width: '80%', borderRadius: '2px', margin: 'auto', backgroundColor: ' rgb(245, 245, 245)', marginTop: '20px' }}>
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

function TextSendHere(x) {
    return (
        <div style={x.classN ? { color: '#00458b', marginRight: '6px', fontSize: '13px' } : { border: '0', borderBottom: '1px solid  #2c2a2a5d', cursor: 'pointer', fontSize: '15px' }}>
            {x.type}
        </div>
    )
}