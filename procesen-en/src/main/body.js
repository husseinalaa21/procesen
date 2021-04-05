import {faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React , { useState, useEffect} from 'react'
import NotesCon from '../joint/notesCon'
import SendCommint from '../joint/sendCommint'
import { useLocation } from 'react-router-dom'; 

export default function BodyEn(params) {
    const location = useLocation();
    var idw = []
    var idn = []
    const [idwa, setidwa] = useState(idw)
    const [idna, setidna] = useState(idn)
    const [numbol, setnumbol] = useState(0)
    //const [NotesBanal, setNotesBanal] = useState(<div>  </div>)
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
        var wue = window.location.href,
        tue;
        if(window.location.port === "3000"){
            tue = window.location.protocol+"//"+window.location.hostname+":"+window.location.port+"/"
        } else {
            tue = window.location.protocol+"//"+window.location.hostname+"/"
        }
        var twq = wue.replace(tue,"")
        if(idwa.includes(twq) === true){
            var ex = idwa.indexOf(twq)
            setnumbol(idna[ex])
            /*var isUnde =()=>{
                if(idna[ex] - 1 > 0){
                    return true
                } else {
                    return false
                }
            }
            var isNext =()=>{
                if(idna[ex] < idna.length){
                    return true
                } else {
                    return false
                }
            }
            setNotesBanal(<div className="noBanBod"> <div className="riNoBan"> {isUnde() ? <a>  <FontAwesomeIcon icon={faArrowLeft} /> </a> : <FontAwesomeIcon icon={faArrowLeft} className="icoBaNoBan"/>}  </div> <div className="naNoBan"> <a href="/"> [ أغلاق ] </a> &npbs; <a href={twq}> الانتقال الى العنصر </a> <div > </div> </div> <div className="riNoBan"> {isNext() ? <a><FontAwesomeIcon icon={faArrowRight} /> </a> : <FontAwesomeIcon icon={faArrowRight}  className="icoBaNoBan"/>}</div></div>)*/
            
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
                container={<>
                    <TextCon type="container_ar" text=" The site Procesen to amend the text by removing certain numbers, letters, punctuation marks, or words, or changing the words in the text . " />
                    <Textsp type="container_sp_ar" text=" More features will be added in the future ." />
                    <TextCon type="container_ar" text="Procesen is derived from a sentence ( Processing sentences ) Which means processing the sentence by artificial intelligence . " />
                    <Textsp type="container_sp_ar" text="Procesen is also based on a principle natural language processing Or (NLP)" />
                    <TextCon type="container_ar" text=" The site was launched in 2021 . " />
                </>}
            />
            <ContainerBody
                link={"#sec-how-use"} 
                them={params.them}
                title={'How to use '}
                idTi="sec-how-use"
                container={<>
                    <TextCon text=' First: Enter the text to be processed in the first box above . ' type='container_ar' />
                    <TextCon text=' Second: The modified text will appear in the next section .' type='container_ar' />
                    <NotesCon cx="blue" type="containerNotes_En" textTitle=" Note :" textCon=" You must notify the site of any changes you want to the text ." />
                    <TextCon text='Text control section : Basic data shows information about letters, symbols and numbers and their control , Advanced data shows options related to deleting, modifying, or changing specific words . ' type='container_ar' />
                    <Textsp type="container_sp_ar" text="To apply any option, you must click on the plus sign. To not apply it, click on the minus sign ." />
                    <TextCon text='And you can also add specific words, sentences or letters to delete or replace them . ' type='container_ar' /></>}
            />
            <ContainerBody
                link={"#sec-policy-site"} 
                them={params.them}
                title={' Usage Policy '}
                idTi="sec-policy-site"
                container={<>
                    <NotesCon cx="blue" type="containerNotes_En" textTitle=" " textCon="Some of the conditions below may change over time. " />
                    <TextCon text=' Text area in Section Two in Above are not copyrighted, and anyone can use .' type='container_ar' />
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
            {/*NotesBanal*/}
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
        var thmSortLi = casexsec(cnm) ?"titleKic tickT":"titleKic tickF",
            thmSortDr = casexsec(cnm) ?"titleKic tickT":"titleKic tickFDr"
        return (
            <div className={params.them ? "titleThisPage titleThisPageDark" : "titleThisPage titleThisPageLight"} id={params.link}>
                <div className={params.them ? "thisTitlePage_first thisTitlePage_firstDark title_ar" : "thisTitlePage_first thisTitlePage_firstLight title_ar"}>
                    <div className={casexsec(cnm) ?"titleMain tiMaT" : "titleMain"}>
                        <div className="titleMainText" id={params.idTi}>
                            {params.title}
                        </div>
                        <div className={params.them ? thmSortDr : thmSortLi} onClick={()=>xcsd(cnm)}>{casexsec(cnm) ? <FontAwesomeIcon icon={faSortDown } />: <FontAwesomeIcon icon={faSortUp } className="sorUp"/>}</div>
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