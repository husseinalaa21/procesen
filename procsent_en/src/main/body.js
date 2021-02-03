import React from 'react'
import NotesCon from '../joint/notesCon'
import SendCommint from '../joint/sendCommint'
import TextCon from '../joint/textCon'
import Textsp from '../joint/textSp'

export default function BodyEn() {
    return (
        <div className="infoStart en_text">
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_en">
                    <div className="titleMain">
                        Definition of the site | Procsent
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                    <Textsp type="container_sp_ar" text=" Procsent is a program for processing sentences " />
                    <NotesCon type="containerNotes_ar" text=" Note : The website is under development " />
                    <TextCon type="container_ar" text=" Enter the sentence that you want to change and amend, and it will be processed automatically by the artificial intelligence . " />
                    <SendCommint sec="1" />
                </div>
            </div>
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_en">
                    <div className="titleMain">
                        How to use
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                    <TextCon text='' type='container_en' />
                    <SendCommint sec="2" />
                </div>
            </div>
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_en">
                    <div className="titleMain">
                        Usage Policy
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                    <TextCon text='' type='container_en' />
                    <SendCommint sec="2" />
                </div>
            </div>
        </div>
    )
}