import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCopy, faInfo, faMinus, faPlus, faUndoAlt, faPenAlt, faThumbtack, faBookmark, faClipboard, faHistory, faSortDown, faSortUp, faTrash, faUnderline, faArrowAltCircleDown, faArrowCircleUp, faRocket, faArrowRight, faInfoCircle, faTools, faPalette, faCircleNotch, faDotCircle, faBolt, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'
import TextareaAutosize from 'react-textarea-autosize';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Sent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isW: false,
            isH: false,
            onAdv: "",
            twAdv: "",
            namAdv: "",
            unKo: false,
            // Ne Text
            curTex: "",
            curTex_: "",
            vxTextA: "",
            vxTextACopy: "",
            shDit: "",
            vxTextB: "<div class='isWiteTextInput'> </div>",
            // FontAwsome
            disVew: false,
            isCoFo: false,
            areaControl: false,
            isColor: true,
            // arrays
            his: [],
            obp: [],
            ev: [],
            dzVbn: [],
            ezVbn: [],
            neIlemntEnter: [],
            containerItems: [],
            containerItemsSp: [],
            // else with ed text
            tyDel: [],
            numLis: [0, 0, 0],
            cpu: <FontAwesomeIcon icon={faDotCircle} className="donCpu" />,
            wasw: 0,
            numAdsEnt: 0,
            hightEle: [false, "", 0]
        }
        this.ddrThem = this.props.ddrThem
        this.drThem = this.props.drThem
        this.lliThem = this.props.lliThem
        this.liThem = this.props.liThem
        this.timeout = 0;
        this.cpuProcesen = 0;
        // To
        this.state.shMoTo = false
        this.state.isclc = false
        this.state.mesAdsList = ""

        this.xs_ert()
    }
    xs_ert() {
        fetch("https://server.procesen.com/pc/procsentAr")
            .then(res => res.json())
            .then(
                (result) => {
                    var _obp_ = [],
                        dz = [],
                        ez = [],
                        _ev_ = [],
                        _neIlemntEnter = []

                    for (var e = 0; e < result.length; e++) {
                        if (result[e].exdz !== false) {
                            dz.push(result[e])
                            _obp_.push(false)
                        } else {
                            ez.push(result[e])
                            _ev_.push(false)
                        }
                    }
                    var cookMyLis = cookies.get('meLis')
                    if (cookMyLis !== undefined) {
                        for (var co = 0; co < cookMyLis.length; co++) {
                            ez.push(cookMyLis[co])
                            _ev_.push(false)
                            _neIlemntEnter.push({ ex: cookMyLis[co].ex, eo: cookMyLis[co].eo })
                        }
                    }
                    this.setState({
                        isW: true,
                        obp: _obp_,
                        dzVbn: dz,
                        ezVbn: ez,
                        ev: _ev_,
                        neIlemntEnter: _neIlemntEnter,
                        numAdsEnt: _neIlemntEnter.length,
                        vxTextB: "<i class='nullTextArea'> لا يوجد شيء بعد </i>"
                    });
                    this.resLisAdv()
                },
                (error) => {
                    this.setState({
                        vxTextB: " يبدو أن هنالك مشكلة بالخادم [ 002 ] , يرجى الانتضار قليلاً ثم أعادة المحاولة "
                    });
                }
            )
    }
    componentDidUpdate(prevProps) {
        if (this.props.xtex !== prevProps.xtex) {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.setState({
                    curTex: this.props.xtex
                })
                if (this.state.isH === false) {
                    this.setState({ curTex_: this.props.xtex })
                    this.feediT()
                    this.anlyText()
                }
            }, 200);
        }
        if (this.props.bThem !== prevProps.bThem) {
            this.resLisAdv()
            this.anlyText()
        }
    }
    feediT() {
        var swp = this.state.curTex_,
            rr = "<div class='errTextArea'> A problem occurred, there is an error in the input process, either with the input elements, or you entered an invalid value, or you tried to enter invalid functions to delete or modify, a notification has been sent to the programmers and they will work on solving the problem soon . </div> <div class='listErrInfo'> <p class='titleErr'> Please follow one of the following options : </p> <ul class='ulErr'> <li>Please check the text settings entered by you . </li> <li> To Reload page <a href='/'>click here</a> </li></ul> </div>"
        this.setState({ cpu: <FontAwesomeIcon icon={faCircleNotch} className="loader" /> })
        if (swp.length > 0 && this.state.isW === true) {
            var daBot = [this.state.curTex_, this.state.obp, this.state.ev, this.state.unKo, this.state.neIlemntEnter]
            fetch("https://server.procesen.com/pc/procsentAr/sen/?pr=" + JSON.stringify(daBot))
                .then(res => res.json())
                .then((re) => {
                    try {
                        if (re[0] === false) {
                            this.iValCom({ a: swp.length, v: "", vb: rr, n: 0, p: 0 })
                        } else {
                            let perV = Math.round(((swp.length - re[0].length) / swp.length) * 100)
                            this.iValCom({ a: swp.length, v: re[0], vb: re[0].replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;"), n: re[0].length, p: perV })
                        }
                    } catch (err) {
                        this.iValCom({ a: swp.length, v: "", vb: rr, n: 0, p: 0 })
                    }
                }, (er) => {
                    this.iValCom({ a: swp.length, v: "", vb: " يبدو أن هنالك مشكلة بالخادم [ 002 ] , يرجى الانتضار قليلاً ثم أعادة المحاولة ", n: 0, p: 0 })
                })
        } else {
            this.iValCom({ a: swp.length, v: "", vb: "<i class='nullTextArea'> لا يوجد شيء بعد </i>", n: 0, p: 0 })
        }
    }
    iValCom(x) {
        var lisNum = this.state.numLis,
            donCpu = <FontAwesomeIcon icon={faDotCircle} className="donCpu" />;
        lisNum[0] = x.a
        lisNum[1] = x.n
        lisNum[2] = x.p
        this.setState({
            vxTextA: x.v,
            vxTextACopy: x.v,
            vxTextB: x.vb,
            numLis: lisNum,
            cpu: donCpu
        })
    }
    // Any Tools
    anlyText() {
        var containerItems = [],
            swp = this.state.curTex_;

        var vbn = this.state.dzVbn,
            oj = []
        if (swp.length > 0) {
            for (var t = 0; t < vbn.length; t++) {
                const namb = t
                let oi = { caseP: this.state.obp[namb], num: vbn[namb].nam, dz: vbn[namb].exdz }
                oj.push(oi)
            }
            var swpEls = 0, wasw = 0;
            var elementArr = [];
            for (var ch = 0; ch < oj.length; ch++) {
                const tNumber = ch
                let dzv = oj[tNumber].dz
                let dz = new RegExp(dzv, 'g');
                let num = oj[tNumber].num
                let ccv = oj[tNumber].caseP
                if (dz.test(swp)) {
                    wasw++;
                    const Xswp = swp.length - swp.replace(dz, "").length
                    swpEls += Xswp
                    let XswpS = Math.round(Xswp / swp.length * 100)
                    let item = this.infItems({ item: num, itemNu: Xswp, itemNumP: XswpS + "%", key: tNumber, ccv: ccv, nm: tNumber })
                    elementArr.push({ e: XswpS, n: num })
                    containerItems.push(item)
                }
                if (oj.length - 1 === ch) {
                    if (swpEls < swp.length) {
                        let Xswp = swp.length - swpEls
                        let XswpS = Xswp / swpEls * swpEls
                        let item = this.elsaIt({ itemNu: Xswp, itemNumP: XswpS + "%", cas: this.state.unKo })
                        containerItems.push(item)
                    }
                }
                if (oj.length - 1 === ch) {
                    var nifn = 0, nift = "", nifb = false;
                    elementArr.forEach(ew => {
                        if (ew.e > nifn) {
                            nifn = ew.e
                            nift = ew.n
                            nifb = true
                        }
                    })
                    this.setState({
                        containerItems: containerItems,
                        wasw: wasw,
                        hightEle: [nifb, nift, nifn]
                    })
                }
            }
        } else {
            var nifn = 0,
                nift = "",
                nifb = false;
            this.setState({
                hightEle: [nifb, nift, nifn]
            })
        }
    }
    infItems(cx) {
        return (
            <tr key={cx.key}>
                <td > {cx.item} </td>
                <td > {cx.itemNu} </td>
                <td > {cx.itemNumP} </td>
                {this.props.bThem ? <td onClick={() => this.childOppenProcessx(cx.nm)} className={cx.ccv ? "faMinusDivDr" : "faPlusDivDr"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusiDr" : "faPlusiDr"} /> </td> :
                    <td onClick={() => this.childOppenProcessx(cx.nm)} className={cx.ccv ? "faMinusDiv" : "faPlusDiv"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusi" : "faPlusi"} /> </td>}
            </tr>
        )
    }
    childOppenProcessx(x) {
        let obpC = this.state.obp
        obpC[x] = !obpC[x]
        this.setState({ obp: obpC })
        this.anlyText()
        this.feediT()
    }
    //unKo
    elsaIt(cx) {
        return (
            <tr key={20000911}>
                <td > أخرى </td>
                <td > {cx.itemNu} </td>
                <td > {cx.itemNumP} </td>
                {this.props.bThem ? <td onClick={() => this.callElsa()} className={cx.cas ? "faMinusDivDr" : "faPlusDivDr"}> <FontAwesomeIcon icon={cx.cas ? faMinus : faPlus} className={cx.cas ? "faMinusiDr" : "faPlusiDr"} /> </td> :
                    <td onClick={() => this.callElsa()} className={cx.cas ? "faMinusDiv" : "faPlusDiv"}> <FontAwesomeIcon icon={cx.cas ? faMinus : faPlus} className={cx.cas ? "faMinusi" : "faPlusi"} /> </td>}
            </tr>
        )
    }
    callElsa() {
        this.setState({ unKo: !this.state.unKo })
        setTimeout(() => {
            this.anlyText()
            this.feediT()
        }, 100);
    }
    // End unKo

    // End Any

    // Adv Tools
    resLisAdv() {
        var containerItemsSp = [], avd = [], ez = this.state.ezVbn;
        for (var v = 0; v < ez.length; v++) {
            const eznu = v;
            var xsz;
            if ((ez[eznu].hasOwnProperty('exs')) === true) {
                xsz = ez[eznu].exs
            } else {
                xsz = false
            }
            let ze = { caseP: this.state.ev[eznu], num: ez[eznu].nam, ex: ez[eznu].ex, eo: ez[eznu].eo, exs: xsz, nr: eznu }
            avd.push(ze)
        }
        for (var fe = 0; fe < avd.length; fe++) {
            const nb = fe
            if (avd[nb].exs === true) {
                let zEz = this.setAvd({ n: avd[nb].num, c: avd[nb].caseP, nu: avd[nb].nr, tn: avd[nb].ex, fu: true })
                containerItemsSp.push(zEz)
            } else {
                let zEz = this.setAvd({ n: avd[nb].num, c: avd[nb].caseP, nu: avd[nb].nr, tn: avd[nb].ex, fu: false })
                containerItemsSp.push(zEz)
            }
            if (avd.length - 1 === fe) {
                this.setState({
                    containerItemsSp: containerItemsSp
                })
            }
        }
    }
    shDit(x, y) {
        if (y === true) {
            var uez = this.state.ezVbn
            if (uez[x].exs === true) {
                let num = uez[x].nam
                let eo;
                let ex;
                if (uez[x].ex === true) {
                    ex = "حذف"
                    eo = uez[x].eo
                } else {
                    ex = "تعديل"
                    eo = uez[x].eo[0][0] + " - تعديل الى - " + uez[x].eo[0][1]
                }
                var itDi = <div className="botoMApSec"> <div className="secDiSh"><div className="namDiSh"> أسم القسم : </div> <div className="vamDiSh"> {num} </div></div>   <div className="secDiSh"><div className="namDiSh"> نوع العنصر : </div> <div className="vamDiSh"> {ex} </div></div>   <div className="secDiSh"><div className="namDiSh">  القيمة  :   </div> <div className="vamDiSh"> {eo} </div></div><span className="showDitAdsA" onClick={() => this.shDit(x, false)}> أغلاق </span></div>
                this.setState({ shDit: itDi })
            }
        } else {
            this.setState({ shDit: "" })
        }
    }
    setAvd(ax) {
        var trLi = ax.tn ? "deExcon" : "edExcon"
        var trDr = ax.tn ? "deExconDr" : "edExconDr"
        var tdDeLi = "trfEx deExTf"
        var tdDeDr = "trfEx deExTfDr"
        var edEdLi = "trfEx edExTf"
        var edEdDr = "trfEx edExTfDr"
        return (
            <tr className={this.props.bThem ? trDr : trLi} key={18 + ax.nu}>{ax.tn ? <><td className={this.props.bThem ? tdDeDr : tdDeLi}> {ax.n} {ax.fu ? <span className="caseAttrAds"> ( من قبلك )</span> : <span className="caseAttrAds"> ( من النظام ) </span>} {ax.fu ? <span className="showDitAds" onClick={() => this.shDit(ax.nu, true)}> [أضهار التفاصيل] </span> : ''} </td >
                <td> حذف </td ></> : <><td className={this.props.bThem ? edEdDr : edEdLi}>{ax.n} {ax.fu ? <span className="caseAttrAds"> ( من قبلك ) </span> : <span className="caseAttrAds"> ( من النظام ) </span>}{ax.fu ? <span className="showDitAds" onClick={() => this.shDit(ax.nu, true)}> [أضهار التفاصيل] </span> : ''} </td >
                <td className="edExTu"> تعديل </td ></>}
                <td className={ax.c ? "edExCf" : "edExC"} onClick={() => this.szAvd(ax.nu)}>
                    {ax.c ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
                </td >
                {ax.fu ?
                    <td className={this.props.bThem ? "trdExDr" : "trdEx"} onClick={() => this.deItAdv(ax.nu)}> <FontAwesomeIcon icon={faTrash} /> </td > :
                    <td className={this.props.bThem ? "trdExXDr" : "trdExX"}> <FontAwesomeIcon icon={faTrash} /> </td >}
            </tr>
        )
    }
    deItAdv(x) {
        var uez = this.state.ezVbn
        var iez = this.state.ev
        var neit = this.state.neIlemntEnter
        if (uez[x].exs === true) {
            var cookMe = cookies.get('meLis')
            var s = x - (uez.length - cookMe.length)
            if (cookMe !== undefined && cookMe.length > 0) {
                cookMe.splice(s, 1)
                cookies.set('meLis', cookMe);
            }
            if (neit !== undefined && neit.length > 0) {
                neit.splice(s, 1)
            }
            uez.splice(x, 1)
            iez.splice(x, 1)
            this.setState({ ezVbn: uez, ev: iez, neIlemntEnter: neit, numAdsEnt: neit.length })
        }
        this.resLisAdv()
        this.feediT()
    }
    szAvd(x) {
        let ecC = this.state.ev
        ecC[x] = !ecC[x]
        this.setState({ ev: ecC })
        this.resLisAdv()
        this.feediT()
    }
    // End Adv
    adAdvSet() {
        var uez = this.state.ezVbn,
            neit = this.state.neIlemntEnter,
            iez = this.state.ev,
            x = this.state.onAdv,
            y = this.state.twAdv,
            u = this.state.namAdv,
            mesErr = <div className="wrongMessLis"> <FontAwesomeIcon icon={faTools} /> واحدة من القيم المدخلة أو كلتيهما غير صالحة. قد تكون القيمة التي تحاول إدخالها موجودة بالفعل في خيارات النظام أعلاه .</div>,
            mesExc = <div className="wrongMessLis"> <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '13px' }} /> يبدو أن القيمة أو الاسم قيد الاستخدام بالفعل. الرجاء اختيار اسم جديد أو قيمة جديدة صالحة . </div>;

        if (this.state.numAdsEnt > 8) {
            this.setState({ mesAdsList: <div className="wrongMessLis"> <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '13px' }} />  يبدو أنك تجاوزت عدد الأقسام المسموح بها , يرجى حذف القيّم السابقة لأضافة قيم جديدة . </div>})
            return false
        }
        if(x.length > 80 && y.length > 80 || u.length > 80){
            this.setState({ mesAdsList: <div className="wrongMessLis"> <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '13px' }} />  يرجى عدم كتابة اكثر من ٨٠ حرف لكل قسم . </div> })
            return false
        }
        if(x.includes('#') || y.includes('#')){
            this.setState({ mesAdsList: mesErr })
            return false
        }
        if (this.state.isclc === true) {
            if (x.length > 0 && y.length > 0) {
                try {
                    // tee one check
                    let reLe = new RegExp(x, 'g')
                    let valOne = x.replace(reLe, y)
                    // tee two check
                    let eapi = { ex: x }
                    let api = JSON.parse(JSON.stringify(eapi))
                    let erle = new RegExp(api.ex, 'g')
                    let valapi = x.replace(erle, y)
                    // check both
                    if (valOne !== y && valapi !== y) {
                        this.setState({ mesAdsList: mesErr })
                        return false
                    }
                } catch (err) {
                    this.setState({ mesAdsList: mesErr })
                    return false
                }
                // check list
                let ise = false
                var arx = [[x, y]]
                uez.forEach(ui => {
                    if (ui.hasOwnProperty('eo') && ui.ex === false) {
                        if (arx.toString() === ui.eo.toString() || x.length === 0 || ui.nam === u) {
                            ise = true
                        }
                    }
                })
                if (ise === false) {
                    let eqa = { nam: u, ex: false, eo: arx, exs: true }
                    let syNe = { ex: false, eo: arx }
                    if (neit.length > 0 && neit !== undefined) {
                        neit.push(syNe)
                    } else {
                        let teeNeit = []
                        teeNeit.push(syNe)
                        neit = teeNeit
                    }
                    uez.push(eqa)
                    iez.push(false)
                    this.resLisAdv()
                    let cookMe = cookies.get('meLis')
                    if (cookMe !== undefined && cookMe.length > 0) {
                        cookMe.push(eqa)
                        cookies.set('meLis', cookMe);
                    } else {
                        let newLisMy = []
                        newLisMy.push(eqa)
                        cookies.set('meLis', newLisMy);
                    }
                    this.setState({ ezVbn: uez, ev: iez, mesAdsList: "", neIlemntEnter: neit, numAdsEnt: neit.length })
                } else {
                    this.setState({ mesAdsList: mesExc })
                }
                this.setState({
                    onAdv: "",
                    twAdv: "",
                    namAdv: ""
                })
            }
        } else {
            if (x.length > 0) {
                try {
                    // tee check one
                    let lily = new RegExp(x, 'g')
                    let valOne = x.replace(lily, "")
                    // tee check two
                    let layla = { ex: x }
                    let liiArr = JSON.parse(JSON.stringify(layla))
                    let leali = new RegExp(liiArr.ex, 'g')
                    let valapi = x.replace(leali, "")
                    // check both
                    if (valOne !== "" && valapi !== "") {
                        this.setState({ mesAdsList: mesErr })
                        return false
                    }
                } catch (err) {
                    this.setState({ mesAdsList: mesErr })
                    return false
                }
                let ise = false
                uez.forEach(ui => {
                    if (ui.hasOwnProperty('eo') && ui.ex === true) {
                        if (x === ui.eo || x.length === 0 || ui.nam === u) {
                            ise = true
                        }
                    }
                })
                if (ise === false) {
                    let eqa = { nam: u, ex: true, eo: x, exs: true }
                    let syNe = { ex: true, eo: x }
                    if (neit.length > 0 && neit !== undefined) {
                        neit.push(syNe)
                    } else {
                        let teeNeit = []
                        teeNeit.push(syNe)
                        neit = teeNeit
                    }
                    uez.push(eqa)
                    iez.push(false)
                    this.resLisAdv()
                    let cookMe = cookies.get('meLis')
                    if (cookMe !== undefined && cookMe.length > 0) {
                        cookMe.push(eqa)
                        cookies.set('meLis', cookMe);
                    } else {
                        let newLisMy = []
                        newLisMy.push(eqa)
                        cookies.set('meLis', newLisMy);
                    }
                    this.setState({ ezVbn: uez, ev: iez, mesAdsList: "", neIlemntEnter: neit, numAdsEnt: neit.length })
                } else {
                    this.setState({ mesAdsList: mesExc })
                }
                this.setState({
                    onAdv: "",
                    twAdv: "",
                    namAdv: ""
                })
            }
        }
    }
    // Call Main
    cleanUp() {
        this.feediT()
        this.resLisAdv()
    }
    // End Call Main

    // Tools TextBox
    caseInfoPP() {
        if (this.state.vxTextA.length > 0) {
            return true
        } else {
            return false
        }
    }
    isCurText() {
        if (this.state.curTex.length > 0) {
            return true
        } else {
            return false
        }
    }
    thThisK() {
        var isH = this.state.isH
        if (isH === true) {
            this.setState({
                isH: false
            })
        } else {
            this.setState({
                isH: true
            })
        }
    }
    marko() {
        var his = this.state.his
        if (his.length > 0) {
            var diFi = false
            his.forEach(g => {
                if (this.state.vxTextA === g.corg) {
                    diFi = true
                }
            })
            if (diFi === true) {
                diFi = false
                return true
            } else {
                return false
            }
        }
    }
    marba() {
        var vta = this.state.vxTextA
        var hisV = this.state.his
        var isE = false
        if (vta !== "") {
            hisV.forEach(el => {
                if (el.corg === vta) {
                    let wc = hisV.indexOf(el)
                    isE = true
                    hisV.splice(wc, 1);
                    this.setState({ his: hisV })
                }
            })
            if (isE === false) {
                let we = { corg: vta, org: this.state.curTex, corgd: this.state.vxTextB }
                hisV.push(we)
                this.setState({ his: hisV })
                isE = true
            }
        }
    }
    chanDis() {
        if (this.state.disVew === false) {
            this.setState({ disVew: true })
        } else {
            this.setState({ disVew: false })
        }
    }
    colorize() {
        this.setState({ isColor: !this.state.isColor })
        setTimeout(() => {
            this.feediT()
        }, 100);
    }
    isCleanUp() {
        if (this.state.vxTextA !== this.state.vxTextACopy) {
            return true
        } else {
            return false
        }
    }
    // End Tools TextBox

    render() {
        var ccThem = this.props.ccThem,
            numTextLen = this.state.numLis,
            conLisCrTiT = this.props.bThem ? "conLisCrTiTDr" : "conLisCrTiT",
            conLiALi = this.state.isclc ? "conLisCrTiALi " + conLisCrTiT : "conLisCrTiALi conLisCrTiFalse",
            conLiADr = this.state.isclc ? "conLisCrTiADr " + conLisCrTiT : "conLisCrTiADr conLisCrTiFalse",
            conLiBLi = this.state.isclc ? "conLisCrTiBLi conLisCrTiFalse" : "conLisCrTiBLi " + conLisCrTiT,
            conLiBDr = this.state.isclc ? "conLisCrTiBDr conLisCrTiFalse" : "conLisCrTiBDr " + conLisCrTiT;
        var houresMaker = function (x) {
            var hisV = this.state.his
            hisV.splice(x, 1);
            this.setState({ his: hisV })
        }.bind(this)
        return (
            <>
                <div className="ffPcsSec" style={{ paddingTop: '10px' }}>
                    <label className="llPcsSec">
                        <div className={this.props.bThem ? "titlePcs redeyTextAreaKDr" : "titlePcs redeyTextAreaK"}>
                            <div className="InfredeyTextAreaK"> <FontAwesomeIcon icon={faInfo} /> </div>
                            <div className="titleTextArea"> في هذا القسم سيظهر النص بعد التعديل و المعالجة  . <a href="#sec-how-use"> معرفة المزيد </a></div>
                        </div>
                        <div className="areaPccSec" style={ccThem ? this.drThem : this.liThem}>
                            <div className="secOntext">
                                <div className="toolsMenuAreaPcs">
                                    <div className={this.props.bThem ? "tolsMainTextArea tolsDr" : "tolsMainTextArea tolsLi"}>
                                        <div className="apiChoose" onClick={() => this.marba()}>
                                            {this.marko() ? <FontAwesomeIcon icon={faBookmark} className={"apiBookMark"} /> : <FontAwesomeIcon icon={faBookmark} className={"unapiBookMark"} />}
                                        </div>
                                        <div className="apiChoose" onClick={() => { navigator.clipboard.writeText(this.state.vxTextA) }}>
                                            <FontAwesomeIcon icon={faCopy} className={this.state.apicopy ? "apiChose" : this.caseInfoPP() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        <div className="apiChoose" onClick={() => this.chanDis()}>
                                            <FontAwesomeIcon icon={faPenAlt} className={this.state.disVew ? "apiChose" : this.caseInfoPP() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        {/*<div className="apiChoose" onClick={() => this.colorize()}>
                                            <FontAwesomeIcon icon={faPalette} className={this.state.isColor ? "apiChose" : "apiunChose"} />
                                        </div>*/}
                                        <div className="apiChoose" onClick={() => this.thThisK()}>
                                            <FontAwesomeIcon icon={faThumbtack} className={this.state.isH ? "apiChose" : "apiunChose"} />
                                        </div>
                                        {this.isCleanUp() ? <div className="apiChoose" onClick={() => this.cleanUp()}><FontAwesomeIcon icon={faUndoAlt} className="apiChoseUndo" /></div> : ""}
                                    </div>
                                    <div className="apiChoose">
                                        {this.state.cpu}
                                    </div>
                                </div>
                            </div>
                            <div className={this.props.bThem ? "textArea texArDr" : "textArea texArLi"} style={this.props.dirFontThm ? { direction: 'ltr' } : { direction: 'rtl' }}>
                                {this.state.disVew ?
                                    <TextareaAutosize
                                        className={this.props.themFont ? "areaPcP largFont" : "areaPcP smallFont"}
                                        style={this.props.bThem ? this.ddrThem : this.lliThem}
                                        rows="4"
                                        placeholder="  "
                                        onChange={(x) => { this.setState({ vxTextA: x.target.value, vxTextB: x.target.value, isEdi: true }) }}
                                        value={this.state.vxTextA} />
                                    : <ContentEditable
                                        html={'<p className="textareap">' + this.state.vxTextB + '</p>'}
                                        disabled={true}
                                        tagName='div'
                                        className={this.props.themFont ? "areaPcP areaPlus largFont" : "areaPcP areaPlus smallFont"}
                                    />}
                            </div>
                            <div className="toolsBottomAreaPcs toolsBottomAreaPcsPro">
                                <div className="textAreaBottom">
                                    {numTextLen[0]} / {numTextLen[1]}
                                </div>
                                <div className="textAreaBottomLogo">
                                    نسبة التغيير   {numTextLen[2]} %
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="redeyTextAreaInf">
                    <div className={this.props.bThem ? "redeyTextAreaInfTIT TextAreaDr TextAreaSDr" : "redeyTextAreaInfTIT TextAreaLi TextAreaSLi"}>
                        <div className="stolsConSec">
                            <div className={this.props.bThem ? this.caseInfoPP() ? "casSett casSettHideDr" : "casSett casSettShowDr" : this.caseInfoPP() ? "casSett casSettHide" : "casSett casSettShow"}>
                                <FontAwesomeIcon icon={faBolt} className="icTolsSett" />
                            </div>
                            <div className="stolsCONTROLX">{this.state.isW ? " معلومات النص المدخل و خيارات التحكم ." : <div className="isWiteTextControal"></div>}</div>
                        </div>
                        <div className="areaControl" onClick={() => this.setState({ areaControl: !this.state.areaControl })}>
                            <FontAwesomeIcon icon={this.state.areaControl ? faSortUp : faSortDown} className={this.state.areaControl ? "pshHSPPlus" : "pshHSD"} />
                        </div>
                    </div>
                    <div style={this.state.areaControl ? { display: 'none' } : { display: 'block' }}>
                        <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                            <div className="seInfCurTable">
                                <div className={this.props.bThem ? "sictDrIc" : "sictLiIc"}> <FontAwesomeIcon icon={faAlignLeft} /> </div>
                                <div className={this.props.bThem ? "sict_text sictDr" : "sict_text sictLi"}> الخيارات الاساسية للتحكم بالنص . </div>
                            </div>
                            <div className="_scsinf">
                                {this.isCurText() ? <div className={this.props.bThem ? "tcontaorTabDr" : "tcontaorTab"}>
                                    <table className={this.props.bThem ? "_listInfoDr" : "_listInfo"}>
                                        <tbody>
                                            <tr>
                                                <th> نوع العنصر </th>
                                                <th> العدد </th>
                                                <th> النسبة </th>
                                                <th> حذف </th>
                                            </tr>
                                            {this.state.containerItems}
                                        </tbody>
                                    </table>
                                    <div className={this.props.bThem ? "infTableXDr" : "infTableX"}><div className={this.props.bThem ? "infTableDr" : "infTable"}> عدد المصفوفات : {this.state.wasw} </div> </div></div> :
                                    <div className={this.props.bThem ? "rtaWait rtaWaitDr" : "rtaWait rtaWaitLi"}>
                                        <div className="rtaTitle"> لا يوجد شيء بعد .. </div>
                                        <div className="rtaCon">
                                            <FontAwesomeIcon icon={faRocket} />
                                        </div>
                                    </div>}
                            </div>
                        </div>
                        <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                            <div className="seInfCurTable">
                                <div className={this.props.bThem ? "sictDrIc" : "sictLiIc"}>  <FontAwesomeIcon icon={faPencilRuler} />  </div>
                                <div className={this.props.bThem ? "sict_text sictDr" : "sict_text sictLi"}> الخيارت المتقدمة للتحكم بالنص .  </div>
                            </div>
                            <div className="_scsinf">
                                <div className="conLisSp">
                                    <div className={this.props.bThem ? "conLisCon conLisConDr" : "conLisCon conLisConLi"}>
                                        <table className="xTbo">
                                            <tbody>
                                                <tr className={this.props.bThem ? "edvExDr" : "edvEx"}>
                                                    <th className="trfEx"> الأسم </th>
                                                    <th> النوع </th>
                                                    <th className="actEFe"> تفعيل </th>
                                                    <th className="trsdEx"> حذف </th>
                                                </tr>
                                                {this.state.containerItemsSp}
                                            </tbody>
                                        </table>
                                        <div className={this.props.bThem ? "botoAdsMapDr botoMApSec" : "botoAdsMap botoMApSec"}> تم أدخال ( {this.state.numAdsEnt} )  من أصل ثمانية أقسام مسموح بها .  </div>
                                        <div className={this.props.bThem ? "botoAdsMapDr" : "botoAdsMap"}> {this.state.shDit}  </div>
                                    </div>
                                    <div className="conLisCr">
                                        <div> {this.state.mesAdsList} </div>
                                        <div className="conLisCrSxTi">
                                            <div className={this.props.bThem ? conLiADr : conLiALi} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}>  أستبدال كلمة بأخرى </div>
                                            <div className={this.props.bThem ? conLiBDr : conLiBLi} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}> حذف عنصر </div>
                                        </div>
                                        <div className={this.props.bThem ? "conLisCrCon conLisCrConDr" : "conLisCrCon conLisCrConLi"}>
                                            <div className={this.props.bThem ? "secAdsInfo secAdsInfoDr" : "secAdsInfo secAdsInfoLi"}>
                                                <div className="secAdsInfoIco"><FontAwesomeIcon icon={faBolt} /></div>
                                                <div className="secAdsInfoCon"> أدخل عبارات أو كلمات صالحة ، يرجى الانتباه إلى المسافات قبل وبعد الكلمات أو العبارات . </div>
                                            </div>
                                            {this.state.isclc ?
                                                <div>
                                                    <div className="zWtext">
                                                        <div className="inptText">
                                                            <div className={this.props.bThem ? "titleInpY titleInpYDr" : "titleInpY titleInpYLi"}> اسم العنصر </div>
                                                            <div className={this.props.bThem ? "borInptY borInptYDr" : "borInptY borInptYLi"}>
                                                                <input type="text" placeholder="اكتب هنا " value={this.state.namAdv} onChange={(x) => { this.setState({ namAdv: x.target.value }) }} maxLength="80"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="zxzWtext">
                                                        <div className="inptText">
                                                            <div className={this.props.bThem ? "titleInp titleInpDr" : "titleInp titleInpLi"}>  الكلمة </div>
                                                            <div className={this.props.bThem ? "borInpt borInptDr" : "borInpt borInptLi"}>
                                                                <input type="text" placeholder="اكتب هنا " value={this.state.onAdv} onChange={(x) => { this.setState({ onAdv: x.target.value }) }} maxLength="80" />
                                                            </div>
                                                        </div>
                                                        <div className="inptText">
                                                            <div className={this.props.bThem ? "titleInp titleInpDr" : "titleInp titleInpLi"}> عكسها </div>
                                                            <div className={this.props.bThem ? "borInpt borInptDr" : "borInpt borInptLi"}>
                                                                <input type="text" placeholder="اكتب هنا" value={this.state.twAdv} onChange={(x) => { this.setState({ twAdv: x.target.value }) }} maxLength="80" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                <div className="zxzWtext">
                                                    <div className="inptText">
                                                        <div className={this.props.bThem ? "titleInpY titleInpYDr" : "titleInpY titleInpYLi"}> اسم العنصر </div>
                                                        <div className={this.props.bThem ? "borInptY borInptYDr" : "borInptY borInptYLi"}>
                                                            <input type="text" placeholder="اكتب هنا" value={this.state.namAdv} onChange={(x) => { this.setState({ namAdv: x.target.value }) }} maxLength="80" />
                                                        </div>
                                                    </div>
                                                    <div className="inptText">
                                                        <div className={this.props.bThem ? "titleInp titleInpDr" : "titleInp titleInpLi"}>  الكلمة </div>
                                                        <div className={this.props.bThem ? "borInpt borInptDr" : "borInpt borInptLi"}>
                                                            <input type="text" placeholder="اكتب هنا" value={this.state.onAdv} onChange={(x) => { this.setState({ onAdv: x.target.value }) }} maxLength="80" />
                                                        </div>
                                                    </div>
                                                </div>}
                                            <div className="itpButomN">
                                                <button className={this.props.bThem ? "itpButom itpButomDr" : "itpButom itpButomLi"} onClick={() => this.adAdvSet()}> <FontAwesomeIcon icon={faArrowRight} /> </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="secTwSitc" style={this.state.shMoTo ? { display: "block" } : { display: "none" }}>
                            <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                                <div className="seInfCurTable">
                                    <div className={this.props.bThem ? "sictDrIc" : "sictLiIc"}> <FontAwesomeIcon icon={faUnderline} /> </div>
                                    <div className={this.props.bThem ? "sict_text sictDr" : "sict_text sictLi"}> معلومات النص </div>
                                </div>
                                <div className="_scsinf">
                                    <div>
                                        {this.state.hightEle[0] ?
                                            <div className={this.props.bThem ? "noteWeInf dift" : "noteWeInf nift"}>
                                                <EPoin n={this.state.hightEle[2]} />
                                                <div className="niftT"> اعلى عنصر في الجملة هو {this.state.hightEle[1]} , حيث يشكل {this.state.hightEle[2]} % من الجملة . </div>
                                            </div>
                                            : ""}
                                        <div className={this.props.bThem ? "noteWeInf dift" : "noteWeInf nift"}>
                                            <EPoin n={numTextLen[2]} />
                                            <div className="niftT"> نسبة التغيير في النص هي {this.state.numLis[2]}  % .</div>
                                        </div>
                                        {/*salaD()*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shMoTo" onClick={() => { this.setState({ shMoTo: !this.state.shMoTo }) }}> <div className="shMoToTit"> {this.state.shMoTo ? " عرض أقل " : " عرض المزيد "} </div> <div className="shMoToLo"> {this.state.shMoTo ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />} </div> </div>
                    </div>
                </div>
                <div className={this.props.bThem ? "psh pshDr" : "psh pshH"}>
                    <div className="psEcTitle">
                        <div className={this.props.bThem ? "psht_t psht_tDr" : "psht_t psht_tLi"}>
                            <FontAwesomeIcon icon={faHistory} className="clipboard" />
                            <div className="pshTitle">السجل</div>
                        </div>
                        <div className={this.props.bThem ? "pshHS pshHSDr" : "pshHS pshHSLi"} onClick={() => this.setState({ sorHs: !this.state.sorHs })}>
                            <FontAwesomeIcon icon={this.state.sorHs ? faSortDown : faSortUp} className={this.state.sorHs ? "pshHSD" : "pshHSP"} />
                        </div>
                    </div>
                    <div className={this.props.bThem ? "pshContainerDr" : "pshContainer"} style={this.state.sorHs ? { display: 'none' } : { display: 'block' }}>
                        <div className={this.props.bThem ? "infPsh infPshDr" : "infPsh infPshLi"}>
                            <div className="infPshF">
                                ملاحضة سوف يضهر في هذا القسم النصوص المعدله التي تقوم بتعيينها كمّيزة <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "14px", color: "rgba(255, 187, 0, 0.705)" }} /> , وايضاً سوف تحذف النصوص بمجرد الخروج من الموقع أو  اعادة تحميله .
                            </div>
                        </div>
                        <HisDefi x={this.state.his} bthem={this.props.bThem} />
                    </div>
                </div>
            </>
        )
        function HisDefi(params) {
            if (params.x.length > 0) {
                var ritOrg = []
                var ogn = 0
                var arHis = params.x
                arHis.forEach(el => {
                    ogn++;
                    const corg = el.corg
                    const corgd = el.corgd
                    const org = el.org
                    const indx = arHis.indexOf(el)
                    var itOrg = <div className={params.bthem ? "hisSec hisSecDr" : "hisSec hisSecLi"} key={ogn + 1}>
                        <div className={params.bthem ? "hisT hisTDr" : "hisT hisTLi"}><div className="hisTn"> {ogn}# </div> <div className="hisTxo"> <FontAwesomeIcon icon={faTrash} className="hisTx" onClick={() => houresMaker(indx)} /> <FontAwesomeIcon icon={faCopy} className="hisTx" onClick={() => { navigator.clipboard.writeText(corg) }} /> </div> </div>
                        <div className="hisCon">
                            <div className="hisOrg">
                                <div className="titleHisNam"> النص الاصلي </div>
                                <div className={params.bthem ? "conHisNamDr" : "conHisNam"}>
                                    <ContentEditable
                                        html={org.replace(/\n/g, "<br />")}
                                        disabled={true}
                                        tagName='div'
                                        className="areaPcP areaPlus"
                                    />
                                </div></div>
                            <div className="hisOrg">
                                <div className="titleHisNam"> النص المعدل </div>
                                <div className={params.bthem ? "conHisNamDr" : "conHisNam"}>
                                    <ContentEditable
                                        html={corgd}
                                        disabled={true}
                                        tagName='div'
                                        className="areaPcP areaPlus"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    ritOrg.push(itOrg)
                })
                return (
                    <>
                        {ritOrg}
                    </>
                )
            } else {
                return (
                    <div className={params.bthem ? "pshConDr" : "pshCon"}>
                        <div className="rtaTitle"> لا توجد محفوظات لهذه الجلسة بعد .. </div>
                        <div className="nPshOnLogo">
                            <FontAwesomeIcon icon={faClipboard} />
                        </div>
                    </div>
                )
            }
        }
    }
}
function EPoin(x) {
    if (x.n >= 50 && x.n < 95) {
        return (<div className="nitfRen"><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlueLi"></div></div>)
    } if (x.n < 50) {
        return (<div className="nitfRen"><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlueLi"></div><div className="powerPoint powerPointBlueLi"></div></div>)
    } if (x.n === 100 || x.n >= 95) {
        return (<div className="nitfRen"><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlue"></div></div>)
    }
}