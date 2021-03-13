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
                    <Textsp type="container_sp" text="Procsent is a program for processing sentences ." />
                    <NotesCon cx = "red" type="containerNotes_ar" textTitle=" Note : " textCon = " The website is under development " />
                    <TextCon type="container_ar" text="Enter the phrase or sentence that you want to change and amend, and it will be processed automatically by the artificial intelligence.  " />
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
                     <TextCon text = '' type='container_ar' />
                     <TextCon text = ' First: Enter the text to be processed in the first box above. ' type='container_ar' />
                     <TextCon text = ' Second: Under the first column - in the Word Processing Control Options section, specify the changes to be applied to the text. ' type='container_ar' />
                     <NotesCon cx = "blue" type="containerNotes_ar" textTitle=" Note : " textCon = " To show the options, click on Adhar in the same section above, and to hide the words, click on Hide. There is no need to reset the settings every time as they will be saved (depending on your browser)." />
                     <TextCon text = 'Third: In the text display information box above, the option to delete the text will appear for you, and you can choose to delete an element of the text or not easily. ' type='container_ar' />
                     <TextCon text = ' Fourth: In the modified text section, the new text will appear for you, and you can copy or modify the text. ' type='container_ar' />
                    <NotesCon cx = "red" type="containerNotes_ar" textTitle=" Note :  " textCon = " This section is being worked on and developed, and once it is modified, you will be able to use it " />
                     <SendCommint sec="2" />
                </div>
            </div>
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_en">
                    <div className="titleMain" id="popsite">
                     Usage Policy
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                     <NotesCon cx = "blue" type="containerNotes_ar" textTitle=" " textCon = " Some of the conditions below may change over time. " />
                     <TextCon text = ' The above artificial intelligence modified expressions are not copyrighted, and anyone can use and modify them .' type='container_ar' />
                     <TextCon text = ' We do not impose restrictions on the use of the site on any person or organization, as the use of the site is free of charge.' type='container_ar' />
                     <TextCon text = ' We are not responsible for any use by users. ' type='container_ar' />
                     <TextCon text = ' The site does not violate any copyrights of any institution as it rewrites the sentences. ' type='container_ar' />
                     <SendCommint sec="3" />
                </div>
            </div>
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_en">
                    <div className="titleMain" id="learnWebsite">
                        Contribute to the development of the Proxin website
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                     <SendCommint sec="4" />
                </div>
            </div>
        </div>
    )
}