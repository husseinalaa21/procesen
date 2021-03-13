import { faBolt, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function NotesCon(x) {
    var caseDiv = x.cx
    function checkThat(s) {
        if(caseDiv === "red"){
            return { 
                backgroundColor:' #f9f7cf',
                color: '#cc561e',
                border: '0'
            }
        }else{
            return { 
                backgroundColor:' #d3e0ea',
                color: '#383838',
                border: '0'
            }
        }
    }
    function checkThatLogo() {
        if(caseDiv === "red"){
            return ( 
                <div  style={{
                    width : "20px",
                    backgroundColor : "#da723c",
                    textAlign: "center"
                }}>
                <FontAwesomeIcon icon={faBullhorn} style={{ fontSize : '15px' , color : "#fbeeac"}}/>
                </div>
             )
        }else{
            return (
                <div  style={{
                    width : "20px",
                    backgroundColor : "#23689b",
                    textAlign: "center"
                }}>
                <FontAwesomeIcon icon={faBolt}  style={{ fontSize : '15px' , color : "#eee"}}/>
                </div>
            )
        }
    }
    return (
        <div className={"__desInfoContainerMAin "+x.type} style={checkThat()}>
            {checkThatLogo()}
            <div className="desInfoContainerMAin">
            {x.textTitle}
            {x.textCon}
            </div>
        </div>
    )
}