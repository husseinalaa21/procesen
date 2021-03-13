import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import NotesCon from '../joint/notesCon'
import SendCommint from '../joint/sendCommint'

let numCommint = 0
export default function BodyEn(params) {
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
    return (
        <div className="infoStart ar_text">
            <ContainerBody
                them={params.them}
                title={'Definition of the site | Procesen '}
                idTi="sec-definition-site"
                keyTitle={<TitleIcK case={true} link={"#sec-definition-site"} />}
                container={<><Textsp type="container_sp_ar" text=" Procsent is a program for processing sentences ." />
                    <NotesCon cx="red" type="containerNotes_ar" textTitle=" Note :  " textCon=" The website is under development " />
                    <TextCon type="container_ar" text=" Enter the phrase or sentence that you want to change and amend, and it will be processed automatically by the artificial intelligence. " />
                </>}
            />
            <ContainerBody
                them={params.them}
                title={'How to use '}
                keyTitle={<TitleIcK case={true} link={"#sec-how-use"} />}
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
                them={params.them}
                title={' Usage Policy '}
                idTi="sec-policy-site"
                keyTitle={<TitleIcK case={true} link={"#sec-policy-site"} />}
                container={<>
                    <NotesCon cx="blue" type="containerNotes_ar" textTitle=" " textCon="Some of the conditions below may change over time. " />
                    <TextCon text=' The above artificial intelligence modified expressions are not copyrighted, and anyone can use and modify them .' type='container_ar' />
                    <TextCon text=' We do not impose restrictions on the use of the site on any person or organization, as the use of the site is free of charge.' type='container_ar' />
                    <TextCon text=' We are not responsible for any use by users. ' type='container_ar' />
                    <TextCon text='The site does not violate any copyrights of any institution as it rewrites the sentences.' type='container_ar' />
                </>}
            />
            <ContainerBody
                them={params.them}
                title={' Contribute to the development of the Procesen website'}
                idTi="sec-improve-site"
                keyTitle={<TitleIcK case={true} link={"#sec-improve-site"} />}
                container={<>
                    <TextCon text=' You can contribute to the improvement of the site by: ' type='container_ar' />
                    <TextCon text='1 - Contributing to submitting notes to the site or emailing us and suggesting modifications to the site' type='container_ar' />
                    <TextCon text='2 - Sometimes, but not most of the time, poems may appear above the page, suggesting you to teach the site some sentences. You can contribute to answering the questions.' type='container_ar' />
                    <Textsp type="container_sp_ar" text=" This notification is shown to people according to the artificial intelligence algorithms on the site. " />
                </>}
            />
        </div>
    )

    function TitleIcK(x) {
        return (
            <> {x.case ? <div className="titleKic"><a className={params.them ?"atitleKicDark" : "atitleKic"} href={x.link}><FontAwesomeIcon icon={faLink} /> </a></div> : ""} </>
        )
    }
}
function ContainerBody(params) {
    numCommint++;
    return (
        <div className={params.them ? "titleThisPage titleThisPageDark" : "titleThisPage titleThisPageLight"}>
            <div className={params.them ? "thisTitlePage_first thisTitlePage_firstDark title_ar" : "thisTitlePage_first thisTitlePage_firstLight title_ar"}>
                <div className="titleMain">
                    <div className="titleMainText" id={params.idTi}>
                        {params.title}
                    </div>
                    {params.keyTitle}
                </div>
            </div>
            <div className={params.them ? "thisTitlePage_seconedDark" : "thisTitlePage_seconedLight"}>
                {params.container}
                <SendCommint sec={numCommint} them={params.them} />
            </div>
        </div>
    )
}