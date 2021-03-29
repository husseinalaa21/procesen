import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCopy, faInfo, faMinus, faPlus, faUndoAlt, faPenAlt, faThumbtack, faBookmark, faClipboard, faHistory, faSortDown, faSortUp, faTrash, faEraser, faUnderline, faArrowAltCircleDown, faArrowCircleUp, faLongArrowAltLeft, faRocket, faArrowRight, faPaintBrush, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'
import TextareaAutosize from 'react-textarea-autosize';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class Sent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseInfoProcs: " لا يوجد ",
            // Just For New Text
            vnText: "<div class='isWiteTextInput'> </div>",
            isW: false,
            valTex: "",
            lValEn: " ",
            valed: "",
            isH: false
        }
        this.ddrThem = this.props.ddrThem
        this.drThem = this.props.drThem
        this.lliThem = this.props.lliThem
        this.liThem = this.props.liThem
        this.apiUndoAlt = false
        this.state.disVew = false
        this.state.isCoFo = false
        this.state.areaControl = false
        this.state.isColor = true
        this._ctxvcr = this._ctxvnr.bind(this)
        this.state.his = []
        this.state.isInfo = false
        // ...

        this.state.obp = []
        this.state.ev = []
        this.state.dzVbn = []
        this.state.ezVbn = []
        this.xs_ert()

        // To
        this.state.shMoTo = false
        this.state.isclc = false
    }
    xs_ert() {
        fetch("https://server.procesen.com/pc/procsentAr")
            .then(res => res.json())
            .then(
                (result) => {
                    var _obp_ = []
                    var dz = []
                    var ez = []
                    var _ev_ = []
                    for (var e = 0; e < result["_dvBn"].length; e++) {
                        if (result["_dvBn"][e].exdz !== false) {
                            dz.push(result["_dvBn"][e])
                            _obp_.push(false)
                        } else {
                            ez.push(result["_dvBn"][e])
                            _ev_.push(false)
                        }
                    }
                    var cookMyLis = cookies.get('meLis')
                    if (cookMyLis !== undefined) {
                        for (var co = 0; co < cookMyLis.length; co++) {
                            ez.push(cookMyLis[co])
                            _ev_.push(false)
                        }
                    }
                    this.setState({
                        isW: true,
                        obp: _obp_,
                        dzVbn: dz,
                        ezVbn: ez,
                        ev: _ev_,
                        vnText: "<i className='nullTextArea'> لا يوجد شيء بعد </i>"
                    });
                },
                (error) => {
                    this.setState({
                        vnText: " يبدو أن هنالك مشكلة بالخادم [ 002 ] , يرجى الانتضار قليلاً ثم أعادة المحاولة "
                    });
                }
            )
    }
    childOppenProcessx(x) {
        let obpC = this.state.obp
        obpC[x] = !obpC[x]
        this.setState({ obp: obpC })
    }
    infTextEnter() {
        // tol ingTextEnter
        function TabIbfU(params) {
            return (
                <div className={params.th ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                    <div className="seInfCurTable">
                        <div className="sict_logo sictLiIc"> {params.log} </div>
                        <div className="sict_text sictLi"> {params.tit} </div>
                    </div>
                    <div className="_scsinf">
                        {params.con}
                    </div>
                </div>
            )
        }
        var ePoin = (x) => {
            if (x >= 50 && x < 95) {
                return (<div className="nitfRen"><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlueLi"></div></div>)
            } if (x < 50) {
                return (<div className="nitfRen"><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlueLi"></div><div className="powerPoint powerPointBlueLi"></div></div>)
            } if (x === 100 || x >= 95) {
                return (<div className="nitfRen"><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlue"></div><div className="powerPoint powerPointBlue"></div></div>)
            }
        }
        // tex
        var swp;
        if (this.state.isH === true) {
            swp = this.state.valTex
        } else {
            swp = this.props.xtex
        }
        // to set
        var obj = this.state.obp
        var vbn = this.state.dzVbn
        var ez = this.state.ezVbn
        var ev = this.state.ev
        // arr sec ed
        var oj = []
        var avd = []
        // ...
        for (var v = 0; v < ez.length; v++) {
            const eznu = v;
            var xsz;
            if ((ez[eznu].hasOwnProperty('exs')) === true) {
                xsz = ez[eznu].exs
            } else {
                xsz = false
            }
            let ze = { caseP: ev[eznu], num: ez[eznu].nam, ex: ez[eznu].ex, eo: ez[eznu].eo, exs: xsz, nr: eznu }
            avd.push(ze)
        }
        var containerItems = []
        var containerItemsSp = []
        // ...
        if (swp.length > 0) {
            for (var t = 0; t < vbn.length; t++) {
                const namb = t
                let oi = { caseP: obj[namb], num: vbn[namb].nam, dz: vbn[namb].exdz }
                oj.push(oi)
            }
            var nifn = 0
            var nift = ""
            var nifb = false
            var swpEls = 0
            var wasw = 0
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
                    containerItems.push(item)
                    if (Xswp > nifn) {
                        nifn = XswpS
                        nift = num
                        if (nifb === false) {
                            nifb = true
                        }
                    }
                }
                if (oj.length - 1 === ch) {
                    if (swpEls < swp.length) {
                        let Xswp = swp.length - swpEls
                        let XswpS = Xswp / swpEls * swpEls
                        let item = this.infItems({ item: "اخرى", itemNu: Xswp, itemNumP: XswpS + "%", key: 12, ccv: false, nm: 12 })
                        containerItems.push(item)
                    }
                }
            }
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
        }
        var salaD = () => {
            var ads = this.vxTextvx()[4]
            if (ads.length > 0) {
                var xRet = []
                for (var eq = 0; eq < ads.length; eq++) {
                    if (ads[eq].con > 0) {
                        xRet.push(<div className="coNads" key={911 + eq}>  تم حذف ( {ads[eq].con} ) من {ads[eq].ty} .</div>)
                    }
                    if (ads.length - 1 === eq) {
                        return xRet
                    }
                }
            }
        }
        var onAdv = "",
            twAdv = "",
            namAdv = ""
        var cotait = () => {
            if (swp.length > 0) {
                return true
            } else {
                return false
            }
        }
        return (
            <>
                <TabIbfU tit=" الخيارات الاساسية للتحكم بالنص ." log={<FontAwesomeIcon icon={faEraser} />} th={this.props.bThem} con={
                    cotait() ?
                        <div className={this.props.bThem ? "tcontaorTabDr" : "tcontaorTab"}><table className={this.props.bThem ? "_listInfoDr" : "_listInfo"}>
                            <tbody>
                                <tr>
                                    <th> نوع العنصر </th>
                                    <th> العدد </th>
                                    <th> النسبة </th>
                                    <th> حذف </th>
                                </tr>
                                {containerItems}
                            </tbody>
                        </table>
                            <div className={this.props.bThem ? "infTableXDr" : "infTableX"}><div className={this.props.bThem ? "infTableDr" : "infTable"}> عدد المصفوفات : {wasw} </div> </div></div> :

                        <div className={this.props.bThem ? "rtaWait rtaWaitDr" : "rtaWait rtaWaitLi"}>
                            <div className="rtaTitle">لا يوجد شيء بعد ..</div>
                            <div className="rtaCon">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                        </div>}
                />
                <TabIbfU tit=" الخيارت المتقدمة للتحكم بالنص . " log={<FontAwesomeIcon icon={faEraser} />} th={this.props.bThem} con={
                    <div className="conLisSp">
                        <div className="conLisCon conLisConLi">
                            <table className="xTbo">
                                <tbody>
                                    <tr className="edvEx">
                                        <th className="trfEx"> الأسم </th>
                                        <th> النوع </th>
                                        <th className="actEFe"> تفعيل </th>
                                        <th className="trdEx"> حذف </th>
                                    </tr>
                                    {containerItemsSp}
                                </tbody>
                            </table>
                        </div>
                        <div className="conLisCr">
                            <div className="conLisCrSxTi">
                                <div className={this.state.isclc ? "conLisCrTiA conLisCrTiT" : "conLisCrTiA conLisCrTiFalse"} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}> أستبدال عنصر بعنصر </div>
                                <div className={this.state.isclc ? "conLisCrTiB conLisCrTiFalse" : "conLisCrTiB conLisCrTiT"} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}> حذف عنصر </div>
                            </div>
                            <div className="conLisCrCon">
                                {this.state.isclc ?
                                    <div>
                                        <div className="zWtext">
                                            <div className="inptText">
                                                <div className="titleInpY"> اسم العنصر </div>
                                                <div className="borInptY">
                                                    <input type="text" placeholder="أكتب هنا" onChange={(x) => { namAdv = x.target.value }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="zxzWtext">
                                            <div className="inptText">
                                                <div className="titleInp"> الكلمة </div>
                                                <div className="borInpt">
                                                    <input type="text" placeholder="أكتب هنا" onChange={(x) => { onAdv = x.target.value }} />
                                                </div>
                                            </div>
                                            <div className="inptText">
                                                <div className="titleInp"> عكسها </div>
                                                <div className="borInpt">
                                                    <input type="text" placeholder="أكتب هنا" onChange={(x) => { twAdv = x.target.value }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="zxzWtext">
                                        <div className="inptText">
                                            <div className="titleInpY"> اسم العنصر </div>
                                            <div className="borInptY">
                                                <input type="text" placeholder="أكتب هنا" onChange={(x) => { namAdv = x.target.value }} />
                                            </div>
                                        </div>
                                        <div className="inptText">
                                            <div className="titleInp"> الكلمة </div>
                                            <div className="borInpt">
                                                <input type="text" placeholder="أكتب هنا" onChange={(x) => { onAdv = x.target.value }} />
                                            </div>
                                        </div>
                                    </div>}
                                <div className="itpButomN">
                                    <button className="itpButom" onClick={() => this.adAdvSet(onAdv, twAdv, namAdv)}> <FontAwesomeIcon icon={faArrowRight} /> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                />
                <div className="secTwSitc" style={this.state.shMoTo ? { display: "block" } : { display: "none" }}>
                    <TabIbfU tit=" معلومات النص " log={<FontAwesomeIcon icon={faUnderline} />} th={this.props.bThem} con={
                        <div>
                            <div className="noteWeInf nift">
                                {ePoin(nifn)}
                                <div className="niftT"> اعلى عنصر في الجملة هو {nift} , حيث يشكل {nifn} % من الجملة . </div>
                            </div>
                            <div className="noteWeInf nift">
                                {ePoin(this.vxTextvx()[5])}
                                <div className="niftT"> نسبة التغيير في النص هي {this.vxTextvx()[5]} % .</div>
                            </div>
                            {salaD()}
                        </div>
                    }
                    />
                </div>
                <div className="shMoTo" onClick={() => { this.setState({ shMoTo: !this.state.shMoTo }) }}> <div className="shMoToTit"> {this.state.shMoTo ? "عرض أقل" : " عرض المزيد "} </div> <div className="shMoToLo"> {this.state.shMoTo ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />} </div> </div>
            </>
        )
    }
    adAdvSet(x, y, u) {
        var uez = this.state.ezVbn
        var iez = this.state.ev
        if (this.state.isclc === true) {
            if (x.length > 0 && y.length > 0) {
                let ise = false
                var arx = [[x, y]]
                uez.forEach(ui => {
                    if (ui.ex === false) {
                        if (arx.toString() === ui.eo.toString() || x.length === 0 || ui.nam === u) {
                            ise = true
                        }
                    }
                })
                if (ise === false) {
                    let eqa = { nam: u, ex: false, eo: arx, exs: true }
                    uez.push(eqa)
                    iez.push(false)
                    this.setState({ ezVbn: uez })
                    this.setState({ ev: iez })
                    let cookMe = cookies.get('meLis')
                    if (cookMe !== undefined && cookMe.length > 0) {
                        cookMe.push(eqa)
                        cookies.set('meLis', cookMe);
                    } else {
                        let newLisMy = []
                        newLisMy.push(eqa)
                        cookies.set('meLis', newLisMy);
                    }
                }
            }
        } else {
            if (x.length > 0) {
                let ise = false
                uez.forEach(ui => {
                    if (ui.ex === true) {
                        if (x === ui.eo || x.length === 0 || ui.nam === u) {
                            ise = true
                        }
                    }
                })
                if (ise === false) {
                    let eqa = { nam: u, ex: true, eo: x, exs: true }
                    uez.push(eqa)
                    iez.push(false)
                    this.setState({ ezVbn: uez })
                    this.setState({ ev: iez })
                    let cookMe = cookies.get('meLis')
                    if (cookMe !== undefined && cookMe.length > 0) {
                        cookMe.push(eqa)
                        cookies.set('meLis', cookMe);
                    } else {
                        let newLisMy = []
                        newLisMy.push(eqa)
                        cookies.set('meLis', newLisMy);
                    }
                }
            }
        }
    }
    setAvd(ax) {
        if (ax.tn === false) {
            return (
                <tr className="edExcon" key={18 + ax.nu}>
                    <td className="trfEx edExTf">{ax.n}</td >
                    <td className="edExTu"> تعديل </td >
                    <td className={ax.c ? "edExCf" : "edExC"} onClick={() => this.szAvd(ax.nu)}>
                        {ax.c ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
                    </td >
                    {ax.fu ?
                        <td className="trdEx" onClick={() => this.deItAdv(ax.nu)}> <FontAwesomeIcon icon={faTrash} /> </td > :
                        <td className="trdExX"> <FontAwesomeIcon icon={faTrash} /> </td >}
                </tr>
            )
        } else {
            return (
                <tr className="deExcon" key={18 + ax.nu}>
                    <td className="trfEx deExTf"> {ax.n} </td >
                    <td> حذف </td >
                    <td className={ax.c ? "edExCf" : "edExC"} onClick={() => this.szAvd(ax.nu)}>
                        {ax.c ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
                    </td >
                    {ax.fu ?
                        <td className="trdEx" onClick={() => this.deItAdv(ax.nu)}> <FontAwesomeIcon icon={faTrash} /> </td > :
                        <td className="trdExX"> <FontAwesomeIcon icon={faTrash} /> </td >}
                </tr>
            )
        }
    }
    deItAdv(x) {
        var uez = this.state.ezVbn
        var iez = this.state.ev
        if (uez[x].exs === true) {
            var cookMe = cookies.get('meLis')
            var s = x-(uez.length - cookMe.length)
            if (cookMe !== undefined && cookMe.length > 0) {
                cookMe.splice(s, 1)
                cookies.set('meLis', cookMe);
            }
            uez.splice(x, 1)
            iez.splice(x, 1)
            this.setState({ ezVbn: uez })
            this.setState({ ev: iez })
        } else {
            console.log("false")
        }
    }
    szAvd(x) {
        let ecC = this.state.ev
        ecC[x] = !ecC[x]
        this.setState({ ev: ecC })
    }
    infItems(cx) {
        return (
            <tr key={cx.key}>
                <td > {cx.item} </td>
                <td > {cx.itemNu} </td>
                <td > {cx.itemNumP} </td>
                {this.props.bThem ? <td onClick={() => this.childOppenProcessx(cx.nam)} className={cx.ccv ? "faMinusDivDr" : "faPlusDivDr"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusiDr" : "faPlusiDr"} /> </td> :
                    <td onClick={() => this.childOppenProcessx(cx.nm)} className={cx.ccv ? "faMinusDiv" : "faPlusDiv"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusi" : "faPlusi"} /> </td>}
            </tr>
        )
    }
    seText(x) {
        var tvp = this.state.dzVbn,
            tbo = this.state.obp,
            rv = this.state.ev,
            erv = this.state.ezVbn

        let tezx = x,
            ttezx = x,
            ty = [];

        for (var a = 0; a < tvp.length; a++) {
            const na = a
            if (tbo[na] === true) {
                let vdv = new RegExp(tvp[na].exdz, 'g');
                //var thTy = tezx.match(vdv)
                //const thTy = x.length - x.replace(vdv, "").length
                //var deSa = {ty : tvp[na].nam , con : thTy}
                //ty.push(deSa)
                tezx = tezx.replace(vdv, "")
                ttezx = tezx.replace(vdv, "")
            }
        }
        for (var s = 0; s < erv.length; s++) {
            const rn = s
            if (erv[rn].ex === true && rv[rn] === true) {
                let vdv = new RegExp(erv[rn].eo, 'g');
                //const thTy = x.length - x.replace(vdv, "").length
                tezx = tezx.replace(vdv, "")
                this.state.isColor ? ttezx = ttezx.replace(vdv, '<b class="deWor">' + erv[rn].eo + '</b>') : ttezx = ttezx.replace(vdv, '')
            } else if (erv[rn].ex === false && rv[rn] === true) {
                for (var wd = 0; wd < erv[rn].eo.length; wd++) {
                    const wr = wd
                    let wx = erv[rn].eo[wr]
                    let ao = new RegExp(wx[0], 'g');
                    if ((ao.test(tezx)) === true) {
                        tezx = tezx.replace(ao, wx[1])
                        this.state.isColor ? ttezx = ttezx.replace(ao, '<b class="olWor"> ' + wx[0] + ' </b> <b class="oneWor"> ' + wx[1] + ' </b>') : ttezx = ttezx.replace(ao, wx[1])
                    }
                }
            }
        }
        ttezx = ttezx.replace(/\n/g, "<br />")
        let el = tezx.length
        return [ttezx, tezx, el, ty]
        // 0 === <br />
        // 1 === \n
    }
    vxTextvx() {
        var texUpStr = "",
            coText = "",
            le = 0,
            led = 0,
            cLed = 0,
            swp,
            ty = [];

        if (this.state.isH === true) {
            swp = this.state.valTex
        } else {
            swp = this.props.xtex
        }
        if (swp.length > 0) {
            if (this.state.isW === true) {
                var ets = this.seText(swp)
                if (ets[1].length > 0) {
                    texUpStr = ets[1]
                    coText = ets[0]
                    le = ets[2]
                    ty = ets[3]
                } else {
                    texUpStr = this.state.vnText
                    coText = this.state.vnText
                    le = 0
                    ty = ets[3]
                }
            } else {
                texUpStr = " ... "
                coText = " ... "
                le = 0
            }
            led = swp.length
        } else {
            texUpStr = this.state.vnText
            coText = this.state.vnText
            le = 0
            led = 0
        }
        if (led > 0) {
            cLed = Math.round(((led - le) / led) * 100)
        } else {
            cLed = 0
        }
        return [texUpStr, coText, le, led, ty, cLed]
        // 0 === \n
        // 1 === <br />
    }
    _ctxvnr(x) {
        var xcd = x.target.value
        this.setState({ valTex: xcd })
    }
    chanDis() {
        if (this.state.disVew === false) {
            this.setState({ disVew: true })
            this.setState({ lValEn: this.vxTextvx()[0] })
        } else {
            this.setState({ disVew: false })
        }
        this.setState({ valTex: this.tekal(true) })
    }
    tekal(b) {
        var ntne = this.vxTextvx()[1]
        var ntnea = this.vxTextvx()[0]
        var teEd = this.state.valTex
        if (this.vxTextvx()[0] === this.state.lValEn) {
            if (teEd.length > 0) {
                if (b === false) {
                    return teEd.replace(/\n/g, "<br />")
                } else {
                    return teEd
                }
            } else {
                return this.state.vnText
            }
        } else {
            if (b === false) {
                return ntne
            } else {
                return ntnea
            }
        }
    }
    tdech() {
        if (this.vxTextvx()[0] === this.state.lValEn) {
            return true
        } else {
            return false
        }
    }
    clenEd() {
        // if any error in text ( check this code ! )
        this.setState({ lValEn: " " })
        this.setState({ valTex: " " })
    }
    marba() {
        var vta = this.tekal(true)
        var hisV = this.state.his
        var isW = false
        if (vta !== this.state.vnText) {
            hisV.forEach(el => {
                if (el.corg === vta) {
                    let wc = hisV.indexOf(el)
                    isW = true
                    hisV.splice(wc, 1);
                    this.setState({ his: hisV })
                }
            })
            if (isW === false) {
                let we = { corg: vta, org: this.props.xtex, corgd: this.tekal(false) }
                hisV.push(we)
                this.setState({ his: hisV })
                isW = true
            }
        }
    }
    // tols history
    deIlm(x) {
        var hisV = this.state.his
        hisV.splice(x, 1);
        this.setState({ his: hisV })
    }
    deHis() {
        if (this.state.his.length > 0) {
            var ritOrg = []
            var ogn = 0
            var arHis = this.state.his
            arHis.forEach(el => {
                ogn++;
                const corg = el.corg
                const corgd = el.corgd
                const org = el.org
                const indx = arHis.indexOf(el)
                var itOrg = <div className="hisSec" key={ogn + 1}>
                    <div className="hisT"><div className="hisTn"> {ogn}# </div> <div className="hisTxo"> <FontAwesomeIcon icon={faTrash} className="hisTx" onClick={() => this.deIlm(indx)} /> <FontAwesomeIcon icon={faCopy} className="hisTx" onClick={() => { navigator.clipboard.writeText(corg) }} /> </div> </div>
                    <div className="hisCon">
                        <div className="hisOrg">
                            <div className="titleHisNam"> النص الاصلي </div>
                            <div className="conHisNam">
                                <ContentEditable
                                    html={org.replace(/\n/g, "<br />")}
                                    disabled={true}
                                    tagName='div'
                                    className="areaPcP areaPlus"
                                />
                            </div></div>
                        <div className="hisOrg">
                            <div className="titleHisNam"> النص المعدل </div>
                            <div className="conHisNam">
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
                <div className="pshCon">
                    <div className="nPshOn"> لا توجد محفوظات لهذه الجلسة بعد .. </div>
                    <div className="nPshOnLogo">
                        <FontAwesomeIcon icon={faClipboard} />
                    </div>
                </div>
            )
        }
    }
    thThisK() {
        if (this.tekal(true) === this.state.vnText) {
            this.setState({
                isH: !this.state.isH,
                valTex: ""
            })
        } else {
            this.setState({
                isH: !this.state.isH,
                valTex: this.tekal(true)
            })
        }
    }
    infoContainer(){
        var itemsAr = []
        var infoContainerItems = (x,y) => {
            return (
                <tr><td className="tdInfA"> {x} </td> <td className="tdInfB"> {y} </td></tr>
            )
        }
        var infTextArea = [
            {n : "أختيار طريقة عرض النص من الشمال الى اليمين أو العكس" , s : <FontAwesomeIcon icon={faAlignLeft} />},
            {n : "أعادة التغييرات التي أجريت" , s : <FontAwesomeIcon icon={faUndoAlt} />},
            {n : "تثبيت النص الحالي بغض النضر عن التغييرات التي تجري في الحقل الاول" , s :<FontAwesomeIcon icon={faThumbtack} />},
            {n : "أضافة تأثيرات الالوان الى النص المعدل" , s :<FontAwesomeIcon icon={faPaintBrush} />}
        ]
        infTextArea.forEach(re =>{
            var itTr = infoContainerItems(re.s,re.n)
            itemsAr.push(itTr)
        })
        return (
            <table className="textAreaInf">
                <tbody><tr>
                    <th> الرمز </th>
                    <th> الاستخدام </th>
                </tr>{itemsAr}</tbody>
            </table>
        )
    }
    render() {
        var ccThem = this.props.ccThem,
            xtexs = this.props.xtex;
        var caseInfoPP = () => {
            if (xtexs.length > 0) {
                return true
            } else {
                return false
            }
        }
        var chew = () => {
            if (this.tdech() === true) {
                if (this.state.valTex === this.state.vnText) {
                    return false
                } else {
                    if (this.state.valTex.length > 0) {
                        return true
                    } else {
                        return false
                    }
                }
            } else {
                if (this.vxTextvx()[0] === this.state.vnText) {
                    return false
                } else {
                    if (this.vxTextvx()[0].length > 0) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
        var cheq = () => {
            if (this.tdech() === true) {
                if (this.state.valTex !== this.vxTextvx()[0]) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        var marBo = () => {
            var his = this.state.his
            if (his.length > 0) {
                var diFi = false
                for (var om = 0; om < his.length; om++) {
                    var moragen = his[om].corg
                    if (this.tekal(true) === moragen) {
                        diFi = true
                    }
                }
                if (diFi === true) {
                    diFi = false
                    return true
                } else {
                    return false
                }
            }
        }
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
                                    <div className="tolsMainTextArea">
                                        <div className="apiChoose" onClick={() => this.marba()}>
                                            {marBo() ? <FontAwesomeIcon icon={faBookmark} className={"apiBookMark"} /> : <FontAwesomeIcon icon={faBookmark} className={"unapiBookMark"} />}
                                        </div>
                                        <div className="apiChoose" onClick={() => { navigator.clipboard.writeText(this.tekal(true)) }}>
                                            <FontAwesomeIcon icon={faCopy} className={this.state.apicopy ? "apiChose" : chew() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        <div className="apiChoose" onClick={() => this.chanDis()}>
                                            <FontAwesomeIcon icon={faPenAlt} className={this.state.disVew ? "apiChose" : chew() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        <div className="apiChoose" onClick={()=>{this.setState({isColor : !this.state.isColor})}}>
                                            <FontAwesomeIcon icon={faPaintBrush} className={this.state.isColor ? "apiChose" : "apiunChose"} />
                                        </div>
                                        <div className="apiChoose" onClick={() => this.thThisK()}>
                                            <FontAwesomeIcon icon={faThumbtack} className={this.state.isH ? "apiChose" : "apiunChose"} />
                                        </div>
                                        {cheq() ? <div className="apiChoose" onClick={() => this.clenEd()}><FontAwesomeIcon icon={faUndoAlt} className="apiChoseUndo" /></div> : ""}
                                    </div>
                                    <div className="apiChoose" onClick={() => { this.setState({ isInfo: !this.state.isInfo }) }}>
                                        <FontAwesomeIcon icon={faInfoCircle} className={this.state.isInfo ? "apiChose" : "apiunChose"} />
                                    </div>
                                </div>
                            </div>
                            <div className="textArea" style={this.props.dirFontThm ? { direction: 'ltr' } : { direction: 'rtl' }}>
                                {this.state.disVew ?
                                    <TextareaAutosize
                                        className={this.props.themFont ? "areaPcP largFont" : "areaPcP smallFont"}
                                        style={this.props.bThem ? this.ddrThem : this.lliThem}
                                        rows="4"
                                        placeholder="  "
                                        onChange={this._ctxvcr}
                                        value={this.state.valTex} />
                                    : <ContentEditable
                                        html={'<p className="textareap">' + this.tekal(false) + '</p>'}
                                        disabled={true}
                                        tagName='div'
                                        className={this.props.themFont ? "areaPcP areaPlus largFont" : "areaPcP areaPlus smallFont"}
                                    />}
                            </div>
                            <div className="toolsBottomAreaPcs toolsBottomAreaPcsPro">
                                <div className="textAreaBottom">
                                    {this.vxTextvx()[3]} / {this.vxTextvx()[2]}
                                </div>
                                <div className="textAreaBottomLogo"> نسبة التغيير  {this.vxTextvx()[5]} %</div>
                            </div>
                        </div>
                    </label>
                </div>
                {this.state.isInfo ? this.infoContainer() : <div></div>}
                <div className="redeyTextAreaInf">
                    <div className={this.props.bThem ? "redeyTextAreaInfTIT TextAreaDr TextAreaSDr" : "redeyTextAreaInfTIT TextAreaLi TextAreaSLi"}>
                        <div className="stolsConSec">
                            <div className={this.props.bThem ? caseInfoPP() ? "casSett casSettHide" : "casSettShow Dr" : caseInfoPP() ? "casSett casSettHide" : "casSett casSettShow"}>
                                <FontAwesomeIcon icon={faAlignLeft} className="icTolsSett" />
                            </div>
                            <div className="stolsCONTROLX">{this.state.isW ? "  معلومات النص المدخل و خيارات التحكم ." : <div className="isWiteTextControal"></div>}</div>
                        </div>
                        <div className="areaControl" onClick={() => this.setState({ areaControl: !this.state.areaControl })}>
                            <FontAwesomeIcon icon={this.state.areaControl ? faSortUp : faSortDown} className={this.state.areaControl ? "pshHSPPlus" : "pshHSD"} />
                        </div>
                    </div>
                    <div style={this.state.areaControl ? { display: 'none' } : { display: 'block' }}>
                        {this.infTextEnter()}
                    </div>
                </div>
                <div className={this.state.sorHs ? "psh pshS" : "psh pshH"}>
                    <div className="psEcTitle">
                        <div className="psht_t">
                            <FontAwesomeIcon icon={faHistory} className="clipboard" />
                            <div className="pshTitle">السجل</div>
                        </div>
                        <div className="pshHS" onClick={() => this.setState({ sorHs: !this.state.sorHs })}>
                            <FontAwesomeIcon icon={this.state.sorHs ? faSortUp : faSortDown} className={this.state.sorHs ? "pshHSP" : "pshHSD"} />
                        </div>
                    </div>
                    <div className="pshContainer" style={this.state.sorHs ? { display: 'none' } : { display: 'block' }}>
                        <div className="infPsh">
                            <div className="infPshF">
                                ملاحضة سوف يضهر في هذا القسم النصوص المعدله التي تقوم بتعيينها كمّيزة <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "14px", color: "rgba(255, 187, 0, 0.705)" }} /> , وايضاً سوف تحذف النصوص بمجرد الخروج من الموقع أو  اعادة تحميله .
                            </div>
                        </div>
                        {this.deHis()}
                    </div>
                </div>
            </>
        )
    }
}