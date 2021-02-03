import React from 'react'
import NotesCon from '../joint/notesCon'
import SendCommint from '../joint/sendCommint'
import TextCon from '../joint/textCon'
import Textsp from '../joint/textSp'
import Sent from '../ppccssee/sent'

export default function BodyEn() {
    return (
        <div className="infoStart ar_text">
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_ar">
                    <div className="titleMain">
                        تعريف بالموقع |  محلل الجمل "Procsent"
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                    <Textsp type="container_sp_ar" text=" بروكسين هو برنامج لمعالجة الجمل" />
                    <NotesCon type="containerNotes_ar" text=" ملاحظة : الموقع قيد التطوير " />
                    <TextCon type="container_ar" text=" قم بأدخال العبارة أو الجملة التي ترغب في تغييرها و التعديل عليها , وسيتم معالجتها تلقائياً بواسطة الذاكاء الاصطناعي . " />
                    <SendCommint sec="1" />
                </div>
            </div>

            {/* Main Function :  */}

            <Sent />

            {/* . */}

            <div className="titleThisPage">
                <div className="thisTitlePage_first title_ar">
                    <div className="titleMain">
                        كيفية الاستخدام
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                     <TextCon text = '' type='container_ar' />
                     <SendCommint sec="2" />
                </div>
            </div>
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_ar">
                    <div className="titleMain">
                        شروط الاستخدام
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                     <TextCon text = '' type='container_ar' />
                     <SendCommint sec="2" />
                </div>
            </div>
        </div>
    )
}