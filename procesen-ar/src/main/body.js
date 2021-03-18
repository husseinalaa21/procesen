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
                title={'تعريف بالموقع |  محلل الجمل "Procesen"'}
                idTi="sec-definition-site"
                container={<><Textsp type="container_sp_ar" text=" بروسيسن هو برنامج لمعالجة الجمل و التعديل عليها ." />
                    <NotesCon cx="red" type="containerNotes_ar" textTitle=" تنويه :  " textCon="الموقع قيد التطوير " />
                    <TextCon type="container_ar" text=" قم بأدخال العبارة أو الجملة التي ترغب في تغييرها و التعديل عليها , وسيتم معالجتها تلقائياً بواسطة الذاكاء الاصطناعي . " />
                </>}
            />
            <ContainerBody
                link={"#sec-how-use"} 
                them={params.them}
                title={'كيفية الاستخدام'}
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
                link={"#sec-policy-site"} 
                them={params.them}
                title={' شروط الاستخدام'}
                idTi="sec-policy-site"
                container={<>
                    <NotesCon cx="blue" type="containerNotes_ar" textTitle=" " textCon=" قد يتغير بعض من الشروط ادناه مع مرور الوقت . " />
                    <TextCon text=' العبارات المعدلة بواسطة الذكاء الاصطناعي اعلاه ليست مقيدة بحقوق نشر , ويمكن لأي شخص استخدامها و التعديل عليها .' type='container_ar' />
                    <TextCon text=' لا نفرض قيود لاستخدام الموقع  على أي شخص أو مؤسسة , حيث أن استخدام الموقع مجاناً .' type='container_ar' />
                    <TextCon text=' نحن غير مسؤلين عن أي استخدم من قبل المستخدمين . ' type='container_ar' />
                    <TextCon text=' الموقع لا ينتهك أي حقوق طبع و نشر لأي مؤسسة حيث أنه يعيد صياغة الجمل . ' type='container_ar' />
                </>}
            />
            <ContainerBody
                link={"#sec-improve-site"}
                them={params.them}
                title={' المساهمة بتطوير موقع بروسيسن'}
                idTi="sec-improve-site"
                container={<>
                    <TextCon text=' يمكنك المساهمة بتحسين الموقع عن طريق : ' type='container_ar' />
                    <TextCon text=' 1 - المساهمة بتقديم ملاحضات للموقع أو بمراسلتنا و اقتراح تعديل للموقع ' type='container_ar' />
                    <TextCon text=' 2 - في بعض الاحيان وليس في اغلب الاوقات قد يضهر اليك أشعار اعلا الصفحة يقترح عليك تعليم الموقع ببعض الجمل , يمكنك المساهمة بالاجابة عن الاسئلة . ' type='container_ar' />
                    <Textsp type="container_sp_ar" text=" هذا الاشعار يظهر للأشخاص حسب خوارزميات الذكاء الاصطناعي الموجدة بالموقع . " />
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