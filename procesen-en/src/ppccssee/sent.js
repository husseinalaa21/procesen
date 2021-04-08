import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCopy, faInfo, faMinus, faPlus, faUndoAlt, faPenAlt, faThumbtack, faBookmark, faClipboard, faHistory, faSortDown, faSortUp, faTrash, faEraser, faUnderline, faArrowAltCircleDown, faArrowCircleUp, faLongArrowAltLeft, faRocket, faArrowRight, faPaintBrush, faInfoCircle, faTools, faPalette, faCircleNotch, faDotCircle } from '@fortawesome/free-solid-svg-icons'
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
            containerItems: [],
            containerItemsSp: [],
            // else with ed text
            tyDel: [],
            numLis: [0, 0, 0],
            cpu: <FontAwesomeIcon icon={faDotCircle} className="donCpu" />,
            wasw: 0,
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
        this.lsBlack = /[\[]/g
        this.state.mesAdsList = ""

        this.xs_ert()
    }
    xs_ert() {
        fetch("http://localhost:4200/pc/procsentEn")
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
                        vxTextB: "<i className='nullTextArea'> There is nothing yet .. </i>"
                    });
                    this.resLisAdv()
                },
                (error) => {
                    this.setState({
                        vxTextB: "There appears to be a problem with the server [002]. Please wait a while and try again ."
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
            tvp = this.state.dzVbn,
            tbo = this.state.obp,
            rv = this.state.ev,
            erv = this.state.ezVbn,
            lisNum = this.state.numLis,
            donCpu = <FontAwesomeIcon icon={faDotCircle} className="donCpu" />;

        this.setState({ cpu: <FontAwesomeIcon icon={faCircleNotch} className="loader" /> })
        if (swp.length > 0 && this.state.isW === true) {
            var tezx = swp,
                ttezx = swp,
                textZip = swp,
                tRash = [];
            try {
                ttezx = textZip.replace(/\n/g, "<br/>").replace(/ /g, "&nbsp;")
                for (var a = 0; a < tvp.length; a++) {
                    const na = a
                    if (tbo[na] === true) {
                        let vdv = new RegExp(tvp[na].exdz, 'g');
                        //var thTy = tezx.match(vdv)
                        //const thTy = x.length - x.replace(vdv, "").length
                        //var deSa = {ty : tvp[na].nam , con : thTy}
                        //ty.push(deSa)
                        tezx = tezx.replace(vdv, "")
                        ttezx = textZip.replace(vdv, "")
                    }
                    tRash.push(tvp[na].exdz)
                }
                if(this.state.unKo === true){
                    var newSwp = []
                    for (var eo = 0; eo < tezx.length; eo++) {
                        let isExs = false
                        tRash.forEach(tb => {
                            if (isExs === false) {
                                let asw = new RegExp(tb, 'g');
                                if (asw.test(tezx[eo])) {
                                    newSwp.push(tezx[eo])
                                    isExs = true
                                }
                            }
                        })
                    }
                    var nan = newSwp.join('');
                    tezx = nan
                    ttezx = nan
                }
                for (var s = 0; s < erv.length; s++) {
                    const rn = s
                    if (erv[rn].ex === true && rv[rn] === true) {
                        let vdv = new RegExp(erv[rn].eo, 'g');
                        //const thTy = x.length - x.replace(vdv, "").length
                        tezx = tezx.replace(vdv, "")
                        this.state.isColor ? ttezx = textZip.replace(vdv, '<b class="deWor">' + erv[rn].eo + '</b>') : ttezx = textZip.replace(vdv, '')
                    } else if (erv[rn].ex === false && rv[rn] === true) {
                        for (var wd = 0; wd < erv[rn].eo.length; wd++) {
                            const wr = wd
                            let wx = erv[rn].eo[wr]
                            let ao = new RegExp(wx[0], 'g');
                            if ((ao.test(tezx)) === true) {
                                tezx = tezx.replace(ao, wx[1])
                                this.state.isColor ? ttezx = textZip.replace(ao, '<b class="olWor">' + wx[0] + '</b> <b class="oneWor">' + wx[1] + '</b>') : ttezx = textZip.replace(ao, wx[1])
                            }
                        }
                    }
                }
            } catch (err) {
                tezx = " ... "
                ttezx = "<div class='errTextArea'> A problem occurred, there is an error in the input process, either with the input elements, or you entered an invalid value, or you tried to enter invalid functions to delete or modify, a notification has been sent to the programmers and they will work on solving the problem soon . </div> <div class='listErrInfo'> <p class='titleErr'> Please follow one of the following options : </p> <ul class='ulErr'> <li>Please check the text settings entered by you . </li> <li> To Reload page <a href='/'>click here</a> </li></ul> </div>"
            }
            lisNum[0] = swp.length
            lisNum[1] = tezx.length
            lisNum[2] = Math.round(((swp.length - tezx.length) / swp.length) * 100)
            if (this.cpuProcesen) clearTimeout(this.cpuProcesen);
            this.cpuProcesen = setTimeout(() => {
                this.setState({
                    vxTextA: tezx,
                    vxTextACopy: tezx,
                    vxTextB: ttezx,
                    numLis: lisNum,
                    cpu: donCpu
                })
            }, 200);
        } else {
            lisNum[0] = 0
            lisNum[1] = 0
            lisNum[2] = 0
            if (this.cpuProcesen) clearTimeout(this.cpuProcesen);
            this.cpuProcesen = setTimeout(() => {
                this.setState({
                    vxTextA: "",
                    vxTextACopy: "",
                    vxTextB: "<i className='nullTextArea'> There is nothing yet .. </i>",
                    numLis: lisNum,
                    cpu: donCpu
                })
            }, 200);
        }
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
                        let item = this.elsaIt({ itemNu: Xswp, itemNumP: XswpS + "%" , cas : this.state.unKo})
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
    elsaIt (cx) {
        return (
            <tr key={20000911}>
                <td > Else </td>
                <td > {cx.itemNu} </td>
                <td > {cx.itemNumP} </td>
                {this.props.bThem ? <td onClick={() => this.callElsa()} className={cx.cas ? "faMinusDivDr" : "faPlusDivDr"}> <FontAwesomeIcon icon={cx.cas ? faMinus : faPlus} className={cx.cas ? "faMinusiDr" : "faPlusiDr"} /> </td> :
                    <td onClick={() => this.callElsa()} className={cx.cas ? "faMinusDiv" : "faPlusDiv"}> <FontAwesomeIcon icon={cx.cas ? faMinus : faPlus} className={cx.cas ? "faMinusi" : "faPlusi"} /> </td>}
            </tr>
        )
    }
    callElsa() {
        this.setState({unKo : !this.state.unKo})
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
    setAvd(ax) {
        var trLi = ax.tn ? "deExcon" : "edExcon"
        var trDr = ax.tn ? "deExconDr" : "edExconDr"
        var tdDeLi = "trfEx deExTf"
        var tdDeDr = "trfEx deExTfDr"
        var edEdLi = "trfEx edExTf"
        var edEdDr = "trfEx edExTfDr"
        return (
            <tr className={this.props.bThem ? trDr : trLi} key={18 + ax.nu}>{ax.tn ? <><td className={this.props.bThem ? tdDeDr : tdDeLi}> {ax.n} </td >
                <td> delete </td ></> : <><td className={this.props.bThem ? edEdDr : edEdLi}>{ax.n}</td >
                <td className="edExTu"> Modification </td ></>}
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
        if (uez[x].exs === true) {
            var cookMe = cookies.get('meLis')
            var s = x - (uez.length - cookMe.length)
            if (cookMe !== undefined && cookMe.length > 0) {
                cookMe.splice(s, 1)
                cookies.set('meLis', cookMe);
            }
            uez.splice(x, 1)
            iez.splice(x, 1)
            this.setState({ ezVbn: uez, ev: iez })
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
            iez = this.state.ev,
            x = this.state.onAdv,
            y = this.state.twAdv,
            u = this.state.namAdv;

        if (this.lsBlack.test(y) || this.lsBlack.test(x)) {
            this.setState({ mesAdsList: <div className="wrongMessLis"> <FontAwesomeIcon icon={faTools} /> One or both of the entered values are invalid. The value you are trying to enter may already be in the system options above .</div> })
            return false
        }
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
                    this.setState({ ezVbn: uez, ev: iez, mesAdsList: "" })
                } else {
                    this.setState({ mesAdsList: <div className="wrongMessLis"> <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '13px' }} /> It appears that the value or name is already in use. Please choose a new name or a new valid value .  </div> })
                }
                this.setState({
                    onAdv: "",
                    twAdv: "",
                    namAdv: ""
                })
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
                    this.setState({ ezVbn: uez, ev: iez, mesAdsList: "" })
                } else {
                    this.setState({ mesAdsList: <div className="wrongMessLis"> <FontAwesomeIcon icon={faInfoCircle} style={{ fontSize: '13px' }} /> It appears that the value or name is already in use. Please choose a new name or a new valid value . </div> })
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
                            <div className="titleTextArea"> In this section the text will appear after editing and processing . <a href="#sec-how-use"> Learn more </a></div>
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
                                        <div className="apiChoose" onClick={() => this.colorize()}>
                                            <FontAwesomeIcon icon={faPalette} className={this.state.isColor ? "apiChose" : "apiunChose"} />
                                        </div>
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
                                    Percentage change  {numTextLen[2]} %
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="redeyTextAreaInf">
                    <div className={this.props.bThem ? "redeyTextAreaInfTIT TextAreaDr TextAreaSDr" : "redeyTextAreaInfTIT TextAreaLi TextAreaSLi"}>
                        <div className="stolsConSec">
                            <div className={this.props.bThem ? this.caseInfoPP() ? "casSett casSettHideDr" : "casSett casSettShowDr" : this.caseInfoPP() ? "casSett casSettHide" : "casSett casSettShow"}>
                                <FontAwesomeIcon icon={faAlignLeft} className="icTolsSett" />
                            </div>
                            <div className="stolsCONTROLX">{this.state.isW ? "   Input text information and control options." : <div className="isWiteTextControal"></div>}</div>
                        </div>
                        <div className="areaControl" onClick={() => this.setState({ areaControl: !this.state.areaControl })}>
                            <FontAwesomeIcon icon={this.state.areaControl ? faSortUp : faSortDown} className={this.state.areaControl ? "pshHSPPlus" : "pshHSD"} />
                        </div>
                    </div>
                    <div style={this.state.areaControl ? { display: 'none' } : { display: 'block' }}>
                        <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                            <div className="seInfCurTable">
                                <div className={this.props.bThem ? "sictDrIc" : "sictLiIc"}> <FontAwesomeIcon icon={faEraser} /> </div>
                                <div className={this.props.bThem ? "sict_text sictDr" : "sict_text sictLi"}> Current text control options </div>
                            </div>
                            <div className="_scsinf">
                                {this.isCurText() ? <div className={this.props.bThem ? "tcontaorTabDr" : "tcontaorTab"}>
                                    <table className={this.props.bThem ? "_listInfoDr" : "_listInfo"}>
                                        <tbody>
                                            <tr>
                                                <th> Item type </th>
                                                <th> The number </th>
                                                <th> Percentage	 </th>
                                                <th> Delete </th>
                                            </tr>
                                            {this.state.containerItems}
                                        </tbody>
                                    </table>
                                    <div className={this.props.bThem ? "infTableXDr" : "infTableX"}><div className={this.props.bThem ? "infTableDr" : "infTable"}> The number of matrices : {this.state.wasw}</div> </div></div> :
                                    <div className={this.props.bThem ? "rtaWait rtaWaitDr" : "rtaWait rtaWaitLi"}>
                                        <div className="rtaTitle">There is nothing yet ..</div>
                                        <div className="rtaCon">
                                            <FontAwesomeIcon icon={faRocket} />
                                        </div>
                                    </div>}
                            </div>
                        </div>
                        <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                            <div className="seInfCurTable">
                                <div className={this.props.bThem ? "sictDrIc" : "sictLiIc"}> <FontAwesomeIcon icon={faEraser} /> </div>
                                <div className={this.props.bThem ? "sict_text sictDr" : "sict_text sictLi"}> Advanced text control options .  </div>
                            </div>
                            <div className="_scsinf">
                                <div className="conLisSp">
                                    <div className={this.props.bThem ? "conLisCon conLisConDr" : "conLisCon conLisConLi"}>
                                        <table className="xTbo">
                                            <tbody>
                                                <tr className={this.props.bThem ? "edvExDr" : "edvEx"}>
                                                    <th className="trfEx"> Name </th>
                                                    <th> Type </th>
                                                    <th className="actEFe"> Activation </th>
                                                    <th className="trsdEx"> Delete </th>
                                                </tr>
                                                {this.state.containerItemsSp}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="conLisCr">
                                        <div> {this.state.mesAdsList} </div>
                                        <div className="conLisCrSxTi">
                                            <div className={this.props.bThem ? conLiADr : conLiALi} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}> Replace element with element </div>
                                            <div className={this.props.bThem ? conLiBDr : conLiBLi} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}>Delete an item</div>
                                        </div>
                                        <div className={this.props.bThem ? "conLisCrCon conLisCrConDr" : "conLisCrCon conLisCrConLi"}>
                                            {this.state.isclc ?
                                                <div>
                                                    <div className="zWtext">
                                                        <div className="inptText">
                                                            <div className={this.props.bThem ? "titleInpY titleInpYDr" : "titleInpY titleInpYLi"}> Name of the element </div>
                                                            <div className={this.props.bThem ? "borInptY borInptYDr" : "borInptY borInptYLi"}>
                                                                <input type="text" placeholder="write here " value={this.state.namAdv} onChange={(x) => { this.setState({ namAdv: x.target.value }) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="zxzWtext">
                                                        <div className="inptText">
                                                            <div className={this.props.bThem ? "titleInp titleInpDr" : "titleInp titleInpLi"}> Word </div>
                                                            <div className={this.props.bThem ? "borInpt borInptDr" : "borInpt borInptLi"}>
                                                                <input type="text" placeholder="write here " value={this.state.onAdv} onChange={(x) => { this.setState({ onAdv: x.target.value }) }} />
                                                            </div>
                                                        </div>
                                                        <div className="inptText">
                                                            <div className={this.props.bThem ? "titleInp titleInpDr" : "titleInp titleInpLi"}> Reversible </div>
                                                            <div className={this.props.bThem ? "borInpt borInptDr" : "borInpt borInptLi"}>
                                                                <input type="text" placeholder="write here " value={this.state.twAdv} onChange={(x) => { this.setState({ twAdv: x.target.value }) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                <div className="zxzWtext">
                                                    <div className="inptText">
                                                        <div className={this.props.bThem ? "titleInpY titleInpYDr" : "titleInpY titleInpYLi"}> Name of the element </div>
                                                        <div className={this.props.bThem ? "borInptY borInptYDr" : "borInptY borInptYLi"}>
                                                            <input type="text" placeholder="write here" value={this.state.namAdv} onChange={(x) => { this.setState({ namAdv: x.target.value }) }} />
                                                        </div>
                                                    </div>
                                                    <div className="inptText">
                                                        <div className={this.props.bThem ? "titleInp titleInpDr" : "titleInp titleInpLi"}> Word </div>
                                                        <div className={this.props.bThem ? "borInpt borInptDr" : "borInpt borInptLi"}>
                                                            <input type="text" placeholder="write here" value={this.state.onAdv} onChange={(x) => { this.setState({ onAdv: x.target.value }) }} />
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
                                    <div className={this.props.bThem ? "sict_text sictDr" : "sict_text sictLi"}> Text information </div>
                                </div>
                                <div className="_scsinf">
                                    <div>
                                        {this.state.hightEle[0] ?
                                            <div className={this.props.bThem ? "noteWeInf dift" : "noteWeInf nift"}>
                                                <EPoin n={this.state.hightEle[2]} />
                                                <div className="niftT"> The highest element of the sentence is {this.state.hightEle[1]} , Where it poses {this.state.hightEle[2]} % Of the sentence . </div>
                                            </div>
                                            : ""}
                                        <div className={this.props.bThem ? "noteWeInf dift" : "noteWeInf nift"}>
                                            <EPoin n={numTextLen[2]} />
                                            <div className="niftT"> The percentage change in the text is {this.state.numLis[2]} % .</div>
                                        </div>
                                        {/*salaD()*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shMoTo" onClick={() => { this.setState({ shMoTo: !this.state.shMoTo }) }}> <div className="shMoToTit"> {this.state.shMoTo ? " Show more " : " Show less "} </div> <div className="shMoToLo"> {this.state.shMoTo ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />} </div> </div>
                    </div>
                </div>
                <div className={this.props.bThem ? "psh pshDr" : "psh pshH"}>
                    <div className="psEcTitle">
                        <div className={this.props.bThem ? "psht_t psht_tDr" : "psht_t psht_tLi"}>
                            <FontAwesomeIcon icon={faHistory} className="clipboard" />
                            <div className="pshTitle">The record</div>
                        </div>
                        <div className={this.props.bThem ? "pshHS pshHSDr" : "pshHS pshHSLi"} onClick={() => this.setState({ sorHs: !this.state.sorHs })}>
                            <FontAwesomeIcon icon={this.state.sorHs ? faSortDown : faSortUp} className={this.state.sorHs ? "pshHSD" : "pshHSP"} />
                        </div>
                    </div>
                    <div className={this.props.bThem ? "pshContainerDr" : "pshContainer"} style={this.state.sorHs ? { display: 'none' } : { display: 'block' }}>
                        <div className={this.props.bThem ? "infPsh infPshDr" : "infPsh infPshLi"}>
                            <div className="infPshF">
                                Note that the modified texts that it sets as a feature will appear in this section  <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "14px", color: "rgba(255, 187, 0, 0.705)" }} /> Also, texts will be deleted as soon as you exit the site and re-download it .
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
                                <div className="titleHisNam"> The original text </div>
                                <div className={params.bthem ? "conHisNamDr" : "conHisNam"}>
                                    <ContentEditable
                                        html={org.replace(/\n/g, "<br />")}
                                        disabled={true}
                                        tagName='div'
                                        className="areaPcP areaPlus"
                                    />
                                </div></div>
                            <div className="hisOrg">
                                <div className="titleHisNam"> Revised text </div>
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
                        <div className="rtaTitle"> There are no archives for this session yet .. </div>
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