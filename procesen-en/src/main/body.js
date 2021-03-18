import {faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React , { useState, useEffect} from 'react'
import NotesCon from '../joint/notesCon'
import SendCommint from '../joint/sendCommint'
import { useLocation, Switch } from 'react-router-dom'; 

export default function BodyEn(params) {
    const location = useLocation();
    var idw = []
    var idn = []
    const [idwa, setidwa] = useState(idw)
    const [idna, setidna] = useState(idn)
    const [numbol, setnumbol] = useState(0)
    var numCommint = 0

    function TextCon(x) {
        return (
            <p className={params.them ? "textConDark " + x.type : "textConLight " + x.type}> {x.text} </p>
        )
    }
    function Textsp(x) {
        return (
            <div className={params.them ? "textSp textSpDark" : "textSp textSpLight"}>
                <div className={params.them ? "textSpIcoDark" : "textSpIcoLight"}>
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <div className="textSpText">
                    {x.text}
                </div>
            </div>
        )
    }
    useEffect(() => {
        var wue = window.location.href
        if(window.location.port === "3000"){
            var tue = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/"
        } else {
            var tue = window.location.protocol+"//"+window.location.hostname+"/"
        }
        var twq = wue.replace(tue,"")
        if(idwa.includes(twq) === true){
            var ex = idwa.indexOf(twq)
            setnumbol(idna[ex])
        } else {
            setnumbol(0)
        }
    }, [location]);
    return (
        <div className="infoStart ar_text">
            <ContainerBody
                link={"#sec-definition-site"}
                them={params.them}
                title={'Definition of the site | Procesen '}
                idTi="sec-definition-site"
                container={<><Textsp type="container_sp_ar" text=" Procsent is a program for processing sentences ." />
                    <NotesCon cx="red" type="containerNotes_ar" textTitle=" Note :  " textCon=" The website is under development " />
                    <TextCon type="container_ar" text=" Enter the phrase or sentence that you want to change and amend, and it will be processed automatically by the artificial intelligence. " />
                </>}
            />
            <ContainerBody
                link={"#sec-how-use"} 
                them={params.them}
                title={'How to use '}
                idTi="sec-how-use"
                container={<>
                    <TextCon text='' type='container_ar' />
                    <TextCon text=' First: Enter the text to be processed in the first box above . ' type='container_ar' />
                    <TextCon text=' Second: Under the first column - in the Word Processing Control Options section, specify the changes to be applied to the text.' type='container_ar' />
                    <NotesCon cx="blue" type="containerNotes_ar" textTitle=" Note :" textCon=" To show the options, click on Adhar in the same section above, and to hide the words, click on Hide. There is no need to reset the settings every time as they will be saved (depending on your browser)." />
                    <TextCon text='Third: In the text display information box above, the option to delete the text will appear for you, and you can choose to delete an element of the text or not easily. ' type='container_ar' />
                    <TextCon text='Fourth: In the modified text section, the new text will appear for you, and you can copy or modify the text. ' type='container_ar' />
                    <NotesCon cx="red" type="containerNotes_ar" textTitle=" Note :   " textCon=" This section is being worked on and developed, and once it is modified, you will be able to use it " /></>}
            />
            <ContainerBody
                link={"#sec-policy-site"} 
                them={params.them}
                title={' Usage Policy '}
                idTi="sec-policy-site"
                container={<>
                    <NotesCon cx="blue" type="containerNotes_ar" textTitle=" " textCon="Some of the conditions below may change over time. " />
                    <TextCon text=' The above artificial intelligence modified expressions are not copyrighted, and anyone can use and modify them .' type='container_ar' />
                    <TextCon text=' We do not impose restrictions on the use of the site on any person or organization, as the use of the site is free of charge.' type='container_ar' />
                    <TextCon text=' We are not responsible for any use by users. ' type='container_ar' />
                    <TextCon text='The site does not violate any copyrights of any institution as it rewrites the sentences.' type='container_ar' />
                </>}
            />
            <ContainerBody
                link={"#sec-improve-site"}
                them={params.them}
                title={' Contribute to the development of the Procesen website'}
                idTi="sec-improve-site"
                container={<>
                    <TextCon text=' You can contribute to the improvement of the site by: ' type='container_ar' />
                    <TextCon text='1 - Contributing to submitting notes to the site or emailing us and suggesting modifications to the site' type='container_ar' />
                    <TextCon text='2 - Sometimes, but not most of the time, poems may appear above the page, suggesting you to teach the site some sentences. You can contribute to answering the questions.' type='container_ar' />
                    <Textsp type="container_sp_ar" text=" This notification is shown to people according to the artificial intelligence algorithms on the site. " />
                </>}
            />
        </div>
    )
    function xcsd(xy) {
        if(xy === numbol){
            setnumbol(0)
        } else {
            setnumbol(xy)
        }
    }
    function casexsec (x) {
        if(x === numbol){
            return true
        } else {
            return false
        }
    }
    function ContainerBody(params) {
        numCommint++;
        const lib = params.link
        idw.push(lib)
        const cnm = numCommint
        idn.push(cnm)
        return (
            <div className={params.them ? "titleThisPage titleThisPageDark" : "titleThisPage titleThisPageLight"} id={params.link}>
                <div className={params.them ? "thisTitlePage_first thisTitlePage_firstDark title_ar" : "thisTitlePage_first thisTitlePage_firstLight title_ar"}>
                    <div className={casexsec(cnm) ?"titleMain tiMaT" : "titleMain"}>
                        <div className="titleMainText" id={params.idTi}>
                            {params.title}
                        </div>
                        <div className={casexsec(cnm) ?"titleKic tickT":"titleKic tickF"} onClick={()=>xcsd(cnm)}>{casexsec(cnm) ? <FontAwesomeIcon icon={faSortDown } />: <FontAwesomeIcon icon={faSortUp } className="sorUp"/>}</div>
                    </div>
                </div>
                <div className={params.them ? "thisTitlePage_seconedDark" : "thisTitlePage_seconedLight"} style={casexsec(cnm) ? {display : "block"} : {display : "none"}}>
                    {params.container}
                    <SendCommint sec={cnm} them={params.them} />
                </div>
            </div>
        )
    }
}