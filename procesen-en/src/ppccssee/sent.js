import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCopy, faInfo, faMinus, faPlus, faUndoAlt, faSlidersH, faPenAlt, faThumbtack, faEllipsisH, faBookmark, faClipboard, faHistory, faSortDown, faSortUp, faTrash, faEdit, faEraser, faUnderline, faNewspaper, faSatellite, faArrowsAltH, faArrowAltCircleDown, faArrowCircleUp, faLongArrowAltLeft, faRocket, faArrowRight, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'
import TextareaAutosize from 'react-textarea-autosize';

export default class P___rps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseInfoProcs: "  ",
            // Just For New Text
            vnText: "<div class='isWiteTextInput'> </div>",
            classDivWait: "vxTextvxN",
            isW: false,
            valTex: "",
            lValEn: " ",
            valed: ""
        }
        this.ddrThem = this.props.ddrThem
        this.drThem = this.props.drThem
        this.lliThem = this.props.lliThem
        this.liThem = this.props.liThem
        this.apiUndoAlt = false
        this.state.disVew = false
        this._ctxvcr = this._ctxvnr.bind(this)
        this.state.his = []
        this.state.swli = false
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
        fetch("https://server.procesen.com/pc/procsentEn")
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
                    this.setState({
                        isW: true,
                        obp: _obp_,
                        dzVbn: dz,
                        ezVbn: ez,
                        ev: _ev_,
                        vnText: "<i className='nullTextArea'> There is nothing yet .. </i>"
                    });
                },
                (error) => {
                    this.setState({
                        vnText: "There appears to be a problem with the server [002]. Please wait a while and try again ."
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
                return (<div className="nitfRen"><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlueLi"></div></div>)
            } if (x < 50) {
                return (<div className="nitfRen"><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlueLi"></div><div class="powerPoint powerPointBlueLi"></div></div>)
            } if (x == 100 || x >= 95) {
                return (<div className="nitfRen"><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlue"></div></div>)
            }
        }
        // tex
        var swp = this.props.xtex
        // to set
        var obj = this.state.obp
        var vbn = this.state.dzVbn
        var ez = this.state.ezVbn
        var ev = this.state.ev
        // ...
        // arr sec ed
        var oj = []
        var avd = []
        // ...
        for (var v = 0; v < ez.length; v++) {
            const eznu = v
            if ((ez[eznu].hasOwnProperty('exs')) === true) {
                var xsz = ez[eznu].exs
            } else {
                var xsz = false
            }
            var ze = { caseP: ev[eznu], num: ez[eznu].nam, ex: ez[eznu].ex, eo: ez[eznu].eo, exs: xsz, nr: eznu }
            avd.push(ze)
        }
        var containerItems = []
        var containerItemsSp = []
        if (this.props.caseXtex === true) {
            if (swp.length > 0) {
                for (var t = 0; t < vbn.length; t++) {
                    const namb = t
                    var oi = { caseP: obj[namb], num: vbn[namb].nam, dz: vbn[namb].exdz }
                    oj.push(oi)
                }
                var nifn = 0
                var nift = ""
                var nifb = false
                var swpEls = 0
                var wasw = 0
                for (var ch = 0; ch < oj.length; ch++) {
                    const tNumber = ch
                    const dzv = oj[tNumber].dz
                    const dz = new RegExp(dzv, 'g');
                    const num = oj[ch].num
                    const ccv = oj[ch].caseP
                    if (dz.test(swp)) {
                        wasw++;
                        const Xswp = swp.length - swp.replace(dz, "").length
                        swpEls += Xswp
                        var XswpS = Math.round(Xswp / swp.length * 100)
                        var item = this.infItems({ item: num, itemNu: Xswp, itemNumP: XswpS + "%", key: tNumber, ccv: ccv, nm: tNumber })
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
                            var Xswp = swp.length - swpEls
                            var XswpS = Xswp / swpEls * swpEls
                            var item = this.infItems({ item: "else", itemNu: Xswp, itemNumP: XswpS + "%", key: 12, ccv: false, nm: 12 })
                            containerItems.push(item)
                        }
                    }
                }
            }
        }
        for (var fe = 0; fe < avd.length; fe++) {
            const nb = fe
            if (avd[nb].exs === true) {
                var zEz = this.setAvd({ n: avd[nb].num, c: avd[nb].caseP, nu: avd[nb].nr, tn: avd[nb].ex, fu: true })
                containerItemsSp.push(zEz)
            } else {
                var zEz = this.setAvd({ n: avd[nb].num, c: avd[nb].caseP, nu: avd[nb].nr, tn: avd[nb].ex, fu: false })
                containerItemsSp.push(zEz)
            }
        }
        var salaD = () => {
            var ads = this.vxTextvx()[4]
            if (ads.length > 0) {
                var xRet = []
                for (var eq = 0; eq < ads.length; eq++) {
                    if (ads[eq].con > 0) {
                        xRet.push(<div className="coNads" key={911 + eq}> from  {ads[eq].ty} Has been deleted ( {ads[eq].con} )  .</div>)
                    }
                    if (ads.length - 1 === eq) {
                        return xRet
                    }
                }
            }
        }
        var cotait = () => {
            if (this.props.caseXtex === true && swp.length > 0) {
                return true
            } else {
                return false
            }
        }
        var chnNewNum = Math.round(((this.vxTextvx()[3] - this.vxTextvx()[2]) / this.vxTextvx()[3]) * 100)
        var onAdv = "",
            twAdv = "",
            namAdv = ""
        return (
            <>
                <TabIbfU tit=" Current text control options" log={<FontAwesomeIcon icon={faEraser} />} th={this.props.bThem} con={
                    cotait() ?
                        <div className={this.props.bThem ? "tcontaorTabDr" : "tcontaorTab"}><table className={this.props.bThem ? "_listInfoDr" : "_listInfo"}>
                            <tbody>
                                <tr>
                                    <th> Item type </th>
                                    <th> The number </th>
                                    <th> Percentage	 </th>
                                    <th> Delete </th>
                                </tr>
                                {containerItems}
                            </tbody>
                        </table>
                            <div className={this.props.bThem ? "infTableXDr" : "infTableX"}><div className={this.props.bThem ? "infTableDr" : "infTable"}> The number of matrices : {wasw} </div> </div></div> :
                        <div className={this.props.bThem ? "rtaWait rtaWaitDr" : "rtaWait rtaWaitLi"}>
                            <div className="rtaTitle">There is nothing yet ..</div>
                            <div className="rtaCon">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                        </div>}
                />
                <TabIbfU tit=" Advanced text control options . " log={<FontAwesomeIcon icon={faEraser} />} th={this.props.bThem} con={
                    <div className="conLisSp">
                        <div className="conLisCon conLisConLi">
                            <table className="xTbo">
                                <tbody>
                                    <tr className="edvEx">
                                        <th className="trfEx"> Name </th>
                                        <th> Type </th>
                                        <th className="actEFe"> Activation </th>
                                        <th className="trdEx"> Delete </th>
                                    </tr>
                                    {containerItemsSp}
                                </tbody>
                            </table>
                        </div>
                        <div className="conLisCr">
                            <div className="conLisCrSxTi">
                                <div className={this.state.isclc ? "conLisCrTiA conLisCrTiT" : "conLisCrTiA conLisCrTiFalse"} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}> Replace element with element </div>
                                <div className={this.state.isclc ? "conLisCrTiB conLisCrTiFalse" : "conLisCrTiB conLisCrTiT"} onClick={() => { this.setState({ isclc: !this.state.isclc }) }}>Delete an item</div>
                            </div>
                            <div className="conLisCrCon">
                                {this.state.isclc ?
                                    <div>
                                        <div className="zWtext">
                                            <div className="inptText">
                                                <div className="titleInpY"> Name of the element </div>
                                                <div className="borInptY">
                                                    <input type="text" placeholder="write here " onChange={(x) => { namAdv = x.target.value }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="zxzWtext">
                                            <div className="inptText">
                                                <div className="titleInp"> Word </div>
                                                <div className="borInpt">
                                                    <input type="text" placeholder="write here " onChange={(x) => { onAdv = x.target.value }} />
                                                </div>
                                            </div>
                                            <div className="inptText">
                                                <div className="titleInp"> Reversible </div>
                                                <div className="borInpt">
                                                    <input type="text" placeholder="write here " onChange={(x) => { twAdv = x.target.value }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="zxzWtext">
                                        <div className="inptText">
                                            <div className="titleInpY"> Name of the element </div>
                                            <div className="borInptY">
                                                <input type="text" placeholder="write here" onChange={(x) => { namAdv = x.target.value }} />
                                            </div>
                                        </div>
                                        <div className="inptText">
                                            <div className="titleInp"> Word </div>
                                            <div className="borInpt">
                                                <input type="text" placeholder="write here" onChange={(x) => { onAdv = x.target.value }} />
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
                    <TabIbfU tit=" Text information " log={<FontAwesomeIcon icon={faUnderline} />} th={this.props.bThem} con={
                        <div>
                            <div className="noteWeInf nift">
                                {ePoin(nifn)}
                                <div className="niftT"> The highest element of the sentence is {nift} , Where it poses {nifn} % Of the sentence . </div>
                            </div>
                            <div className="noteWeInf nift">
                                {ePoin(chnNewNum)}
                                <div className="niftT"> The percentage change in the text is {chnNewNum} % .</div>
                            </div>
                            {salaD()}
                        </div>
                    }
                    />
                </div>
                <div className="shMoTo" onClick={() => { this.setState({ shMoTo: !this.state.shMoTo }) }}> <div className="shMoToTit"> {this.state.shMoTo ? " Show more " : " Show less "} </div> <div className="shMoToLo"> {this.state.shMoTo ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />} </div> </div>
            </>
        )
    }
    adAdvSet(x, y, u) {
        var uez = this.state.ezVbn
        var iez = this.state.ev
        if (this.state.isclc === true) {
            if (x.length > 0 && y.length > 0) {
                var ise = false
                var arx = [[x, y]]
                uez.forEach(ui => {
                    if (ui.ex === false) {
                        if (arx.toString() === ui.eo.toString() || x.length === 0 || ui.nam === u) {
                            ise = true
                        }
                    }
                })
                if (ise === false) {
                    var eqa = { nam: u, ex: false, eo: arx, exs: true }
                    uez.push(eqa)
                    iez.push(false)
                    this.setState({ ezVbn: uez })
                    this.setState({ ev: iez })
                }
            }
        } else {
            if (x.length > 0) {
                var ise = false
                uez.forEach(ui => {
                    if (ui.ex === true) {
                        if (x === ui.eo || x.length === 0|| ui.nam === u) {
                            ise = true
                        }
                    }
                })
                if (ise === false) {
                    var eqa = { nam: u, ex: true, eo: x, exs: true }
                    uez.push(eqa)
                    iez.push(false)
                    this.setState({ ezVbn: uez })
                    this.setState({ ev: iez })
                }
            }
        }
    }
    setAvd(ax) {
        if (ax.tn === false) {
            return (
                <tr className="edExcon" key={18 + ax.nu}>
                    <td className="trfEx edExTf">{ax.n}</td >
                    <td className="edExTu"> Modification </td >
                    <td className={ax.c ? "edExCf": "edExC"} onClick={() => this.szAvd(ax.nu)}>
                        {ax.c ?<FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
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
                    <td> delete </td >
                    <td className={ax.c ? "edExCf": "edExC"} onClick={() => this.szAvd(ax.nu)}>
                        {ax.c ?<FontAwesomeIcon icon={faPlus} />:<FontAwesomeIcon icon={faMinus} />}
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
        var tvp = this.state.dzVbn
        var tbo = this.state.obp
        var rv = this.state.ev
        var erv = this.state.ezVbn

        let tezx = x
        var ty = []
        for (var a = 0; a < tvp.length; a++) {
            const na = a
            if (tbo[na] === true) {
                const vdv = new RegExp(tvp[na].exdz, 'g');
                //var thTy = tezx.match(vdv)
                //const thTy = x.length - x.replace(vdv, "").length
                //var deSa = {ty : tvp[na].nam , con : thTy}
                //ty.push(deSa)
                tezx = tezx.replace(vdv, "")
            }
        }
        for (var s = 0; s < erv.length; s++) {
            const rn = s
            if (erv[rn].ex === true && rv[rn] === true) {
                const vdv = new RegExp(erv[rn].eo, 'g');
                //const thTy = x.length - x.replace(vdv, "").length
                tezx = tezx.replace(vdv, "")
            } else if(erv[rn].ex === false && rv[rn] === true){
                for(var wd = 0 ;wd < erv[rn].eo.length; wd ++){
                    const wr = wd
                    var wx = erv[rn].eo[wr]
                    var ao = new RegExp(wx[0], 'g');
                    if((ao.test(tezx)) === true){
                        tezx = tezx.replace(ao,wx[1])
                    }
                }
            }
        }
        var ttezx = tezx.replace(/\n/g, "<br />")
        var el = tezx.length
        return [ttezx, tezx, el, ty]
        // 0 === <br />
        // 1 === \n
    }
    vxTextvx() {
        var texUpStr = ""
        var coText = ""
        var le = 0
        var led = 0
        var ty = []
        if (this.props.caseXtex == true) {
            var swp = this.props.xtex
            if (swp.length > 0) {
                if (this.state.isW === true) {
                    var ets = this.seText(swp)
                    if (ets[1].length > 0) {
                        texUpStr = ets[1]
                        coText = ets[0]
                        le = ets[2]
                        ty = ets[3]
                        led = swp.length
                    } else {
                        texUpStr = this.state.vnText
                        coText = this.state.vnText
                        le = 0
                        led = swp.length
                        ty = ets[3]
                    }
                } else {
                    texUpStr = " ... "
                    coText = " ... "
                    le = 0
                    led = 0
                }
            } else {
                texUpStr = this.state.vnText
                coText = this.state.vnText
                le = 0
                led = swp.length
            }
        } else {
            texUpStr = this.state.vnText
            coText = this.state.vnText
            le = 0
            led = 0
        }
        return [texUpStr, coText, le, led, ty]
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
                let we = { corg: vta, org: this.props.xtex }
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
                const org = el.org
                const indx = arHis.indexOf(el)
                var brt = ' <br />'
                var itOrg = <div className="hisSec"> <div className="hisT"><div className="hisTn"> {ogn}# </div> <div className="hisTxo"> <FontAwesomeIcon icon={faTrash} className="hisTx" onClick={() => this.deIlm(indx)} /> <FontAwesomeIcon icon={faCopy} className="hisTx" onClick={() => { navigator.clipboard.writeText(corg) }} /> </div> </div> <div className="hisCon"> <div className="hisOrg"> {org.replace(/\n/g, brt)} </div> <div className="hisCorg"> {corg.replace(/\n/g, brt)} </div> </div> </div>
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
                    <div className="rtaTitle"> There are no archives for this session yet .. </div>
                    <div className="nPshOnLogo">
                        <FontAwesomeIcon icon={faClipboard} />
                    </div>
                </div>
            )
        }
    }
    swiLis() {
        if (this.state.swli === true) {
            return (
                <div className="listSwiDiv">
                    <div className="listSwi">
                        <div className="listSwiCon">
                            <div className="lswItem">
                                Font Size
                        </div>
                        </div>
                        <div className="listSwiEnd">
                            <div className="listSwiBack" onClick={() => { this.setState({ swli: false }) }}>
                                <FontAwesomeIcon icon={faLongArrowAltLeft} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        var ccThem = this.props.ccThem,
            xtexs = this.props.xtex;
        var caseInfoPP = () => {
            if (this.props.caseXtex == true) {
                if (xtexs.length > 0) {
                    return true
                } else {
                    return false
                }
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
                            <div className="titleTextArea"> In this section the text will appear after editing and processing . <a href="#"> Learn more </a></div>
                        </div>
                        <div className="areaPccSec" style={ccThem ? this.drThem : this.liThem}>
                            <div className="secOntext">
                                <div className="toolsMenuAreaPcs">
                                    <div className="tolsMainTextArea">
                                        <div className="apiChoose" onClick={() => this.marba()}>
                                            {marBo() ? <FontAwesomeIcon icon={faBookmark} className={"apiBookMark"} /> : <FontAwesomeIcon icon={faBookmark} className={"unapiBookMark"} />}
                                        </div>
                                        <div className="apiChoose" >
                                            <FontAwesomeIcon icon={faCopy} className={this.state.apicopy ? "apiChose" : chew() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        <div className="apiChoose" onClick={() => this.chanDis()}>
                                            <FontAwesomeIcon icon={faPenAlt} className={this.state.disVew ? "apiChose" : chew() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        <div className="apiChoose" >
                                            <FontAwesomeIcon icon={faThumbtack} className={this.state.apiUndoAlt ? "apiChose" : chew() ? "apiunChose" : "apiunChoseQ"} />
                                        </div>
                                        {cheq() ? <div className="apiChoose" onClick={() => this.clenEd()}><FontAwesomeIcon icon={faUndoAlt} className="apiChoseUndo" /></div> : ""}
                                    </div>
                                    {/*<div className={this.state.classDivWait} onClick={() => { this.setState({ swli: !this.state.swli }) }}>
                                        <FontAwesomeIcon icon={faEllipsisH} className={this.state.swli ? "lixs lixsT" : "lixs"} />
                                    </div>*/}
                                </div>
                                {/*this.swiLis()*/}
                            </div>
                            <div className="textArea">
                                {this.state.disVew ?
                                    <TextareaAutosize className="areaPcP"
                                        style={this.props.bThem ? this.ddrThem : this.lliThem}
                                        rows="4"
                                        placeholder="  "
                                        onChange={this._ctxvcr}
                                        value={this.state.valTex} />
                                    : <ContentEditable
                                        html={'<p className="textareap">' + this.tekal(false) + '</p>'}
                                        disabled={true}
                                        tagName='div'
                                        className="areaPcP areaPlus"
                                    />}
                            </div>
                            <div className="toolsBottomAreaPcs toolsBottomAreaPcsPro">
                                <div className="textAreaBottom">
                                    {this.vxTextvx()[3]} / {this.vxTextvx()[2]}
                                </div>
                                <div className="textAreaBottomLogo">
                                    Percentage change  {Math.round(((this.vxTextvx()[3] - this.vxTextvx()[2]) / this.vxTextvx()[3]) * 100)} %
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="redeyTextAreaInf">
                    <div className={this.props.bThem ? "redeyTextAreaInfTIT TextAreaDr TextAreaSDr" : "redeyTextAreaInfTIT TextAreaLi TextAreaSLi"}>
                        <div className="stolsConSec">
                            <div className={this.props.bThem ? caseInfoPP() ? "casSett casSettHide" : "casSettShow" + "Dr" : caseInfoPP() ? "casSett casSettHide" : "casSett casSettShow"}>
                                <FontAwesomeIcon icon={faAlignLeft} className="icTolsSett" />
                            </div>
                            <div className="stolsCONTROLX">{this.state.isW ? " Input text information and control options. " : <div className="isWiteTextControal"></div>}</div>
                        </div>
                    </div>
                    {this.infTextEnter()}
                </div>
                <div className={this.state.sorHs ? "psh pshS" : "psh pshH"}>
                    <div className="psEcTitle">
                        <div className="psht_t">
                            <FontAwesomeIcon icon={faHistory} className="clipboard" />
                            <div className="pshTitle">The record</div>
                        </div>
                        <div className="pshHS" onClick={() => this.setState({ sorHs: !this.state.sorHs })}>
                            <FontAwesomeIcon icon={this.state.sorHs ? faSortUp : faSortDown} className={this.state.sorHs ? "pshHSP" : "pshHSD"} />
                        </div>
                    </div>
                    <div className="pshContainer" style={this.state.sorHs ? { display: 'none' } : { display: 'block' }}>
                        <div className="infPsh">
                            <div className="infPshF">
                                Note that the modified texts that it sets as a feature will appear in this section  <FontAwesomeIcon icon={faBookmark} style={{ fontSize: "14px", color: "rgba(255, 187, 0, 0.705)" }} /> Also, texts will be deleted as soon as you exit the site and re-download it .
                            </div>
                        </div>
                        {this.deHis()}
                    </div>
                </div>
            </>
        )
    }
}