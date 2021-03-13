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
                title={'تعريف بالموقع |  محلل الجمل "Procsent"'}
                idTi="sec-definition-site"
                keyTitle={<TitleIcK case={true} link={"#sec-definition-site"} />}
                container={<><Textsp type="container_sp_ar" text=" بروكسين هو برنامج لمعالجة الجمل و التعديل عليها ." />
                    <NotesCon cx="red" type="containerNotes_ar" textTitle=" تنويه :  " textCon="الموقع قيد التطوير " />
                    <TextCon type="container_ar" text=" قم بأدخال العبارة أو الجملة التي ترغب في تغييرها و التعديل عليها , وسيتم معالجتها تلقائياً بواسطة الذاكاء الاصطناعي . " />
                </>}
            />
            <ContainerBody
                them={params.them}
                title={'كيفية الاستخدام'}
                keyTitle={<TitleIcK case={true} link={"#sec-how-use"} />}
                idTi="sec-how-use"
                container={<>
                    <TextCon text='' type='container_ar' />
                    <TextCon text=' أولا : ادخل النص المراد معالجته في أول خانة أعلاه . ' type='container_ar' />
                    <TextCon text=' ثانيا : أسفل أول خانة - في قسم خيارات التحكم في معالجة الكلمات حدد التغييرات التي سوف تطبق على النص .' type='container_ar' />
                    <NotesCon cx="blue" type="containerNotes_ar" textTitle=" ملاحضة : " textCon=" لأضهار الخيارات أنقر على أضهار في نفس القسم أعلاه و لأخفاء الكلمات أنقر على اخفاء و لا داعي لأعادة ضبط الاعدادات في كل مرة حيث أنها ستحفض ( على حسب متصفحك ) ." />
                    <TextCon text=' ثالثاً : في خانة اضهار معلومات النص أعلاه سوف يضهر لك خيار حذف النص و بأمكانك أختيار حذف عنصر من النص أو لا بكل سهولة . ' type='container_ar' />
                    <TextCon text=' رابعاً : في قسم النص المعدل سيضهر لك النص الجديد و بأمكانك نسخ النص أو التعديل عليه . ' type='container_ar' />
                    <NotesCon cx="red" type="containerNotes_ar" textTitle=" تنويه :  " textCon=" هذا القسم يجري العمل عليه و تطويره و بمجرد الانتهاء من تعديله سيكون بأمكانك أستخدامه " /></>}
            />
            <ContainerBody
                them={params.them}
                title={' شروط الاستخدام'}
                idTi="sec-policy-site"
                keyTitle={<TitleIcK case={true} link={"#sec-policy-site"} />}
                container={<>
                    <NotesCon cx="blue" type="containerNotes_ar" textTitle=" " textCon=" قد يتغير بعض من الشروط ادناه مع مرور الوقت . " />
                    <TextCon text=' العبارات المعدلة بواسطة الذكاء الاصطناعي اعلاه ليست مقيدة بحقوق نشر , ويمكن لأي شخص استخدامها و التعديل عليها .' type='container_ar' />
                    <TextCon text=' لا نفرض قيود لاستخدام الموقع  على أي شخص أو مؤسسة , حيث أن استخدام الموقع مجاناً .' type='container_ar' />
                    <TextCon text=' نحن غير مسؤلين عن أي استخدم من قبل المستخدمين . ' type='container_ar' />
                    <TextCon text=' الموقع لا ينتهك أي حقوق طبع و نشر لأي مؤسسة حيث أنه يعيد صياغة الجمل . ' type='container_ar' />
                </>}
            />
            <ContainerBody
                them={params.them}
                title={' المساهمة بتطوير موقع بروكسين'}
                idTi="sec-improve-site"
                keyTitle={<TitleIcK case={true} link={"#sec-improve-site"} />}
                container={<>
                    <TextCon text=' يمكنك المساهمة بتحسين الموقع عن طريق : ' type='container_ar' />
                    <TextCon text=' 1 - المساهمة بتقديم ملاحضات للموقع أو بمراسلتنا و اقتراح تعديل للموقع ' type='container_ar' />
                    <TextCon text=' 2 - في بعض الاحيان وليس في اغلب الاوقات قد يضهر اليك أشعار اعلا الصفحة يقترح عليك تعليم الموقع ببعض الجمل , يمكنك المساهمة بالاجابة عن الاسئلة . ' type='container_ar' />
                    <Textsp type="container_sp_ar" text=" هذا الاشعار يظهر للأشخاص حسب خوارزميات الذكاء الاصطناعي الموجدة بالموقع . " />
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