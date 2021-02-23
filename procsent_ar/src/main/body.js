import React from 'react'
import NotesCon from '../joint/notesCon'
import SendCommint from '../joint/sendCommint'
import TextCon from '../joint/textCon'
import Textsp from '../joint/textSp'

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
                    <NotesCon cx = "red" type="containerNotes_ar" textTitle=" تنويه :  " textCon = "الموقع قيد التطوير " />
                    <TextCon type="container_ar" text=" قم بأدخال العبارة أو الجملة التي ترغب في تغييرها و التعديل عليها , وسيتم معالجتها تلقائياً بواسطة الذاكاء الاصطناعي . " />
                    <SendCommint sec="1" />
                </div>
            </div>

            <div className="titleThisPage">
                <div className="thisTitlePage_first title_ar">
                    <div className="titleMain">
                        كيفية الاستخدام
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                     <TextCon text = '' type='container_ar' />
                     <TextCon text = ' أولا : ادخل النص المراد معالجته في أول خانة أعلاه . ' type='container_ar' />
                     <TextCon text = ' ثانيا : أسفل أول خانة - في قسم خيارات التحكم في معالجة الكلمات حدد التغييرات التي سوف تطبق على النص .' type='container_ar' />
                     <NotesCon cx = "blue" type="containerNotes_ar" textTitle=" ملاحضة : " textCon = " لأضهار الخيارات أنقر على أضهار في نفس القسم أعلاه و لأخفاء الكلمات أنقر على اخفاء و لا داعي لأعادة ضبط الاعدادات في كل مرة حيث أنها ستحفض ( على حسب متصفحك ) ." />
                     <TextCon text = ' ثالثاً : في خانة اضهار معلومات النص أعلاه سوف يضهر لك خيار حذف النص و بأمكانك أختيار حذف عنصر من النص أو لا بكل سهولة . ' type='container_ar' />
                     <TextCon text = ' رابعاً : في قسم النص المعدل سيضهر لك النص الجديد و بأمكانك نسخ النص أو التعديل عليه . ' type='container_ar' />
                    <NotesCon cx = "red" type="containerNotes_ar" textTitle=" تنويه :  " textCon = " هذا القسم يجري العمل عليه و تطويره و بمجرد الانتهاء من تعديله سيكون بأمكانك أستخدامه " />
                     <SendCommint sec="2" />
                </div>
            </div>
            <div className="titleThisPage">
                <div className="thisTitlePage_first title_ar">
                    <div className="titleMain" id="popsite">
                        شروط الاستخدام
                    </div>
                </div>
                <div className="thisTitlePage_seconed">
                     <NotesCon cx = "blue" type="containerNotes_ar" textTitle=" " textCon = " قد يتغير بعض من الشروط ادناه مع مرور الوقت . " />
                     <TextCon text = ' العبارات المعدلة بواسطة الذكاء الاصطناعي اعلاه ليست مقيدة بحقوق نشر , ويمكن لأي شخص استخدامها و التعديل عليها .' type='container_ar' />
                     <TextCon text = ' لا نفرض قيود لاستخدام الموقع  على أي شخص أو مؤسسة , حيث أن استخدام الموقع مجاناً .' type='container_ar' />
                     <TextCon text = ' نحن غير مسؤلين عن أي استخدم من قبل المستخدمين . ' type='container_ar' />
                     <TextCon text = ' الموقع لا ينتهك أي حقوق طبع و نشر لأي مؤسسة حيث أنه يعيد صياغة الجمل . ' type='container_ar' />
                     <SendCommint sec="2" />
                </div>
            </div>
        </div>
    )
}