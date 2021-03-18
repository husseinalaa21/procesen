import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCopy, faInfo, faMinus, faPlus, faUndoAlt, faSlidersH, faPenAlt, faThumbtack, faEllipsisH, faBookmark, faClipboard, faHistory, faSortDown, faSortUp, faTrash, faEdit, faEraser, faUnderline, faNewspaper, faSatellite, faArrowsAltH, faArrowAltCircleDown, faArrowCircleUp, faLongArrowAltLeft, faRocket } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'
import TextareaAutosize from 'react-textarea-autosize';

export default class P___rps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseInfoProcs: " لا يوجد ",
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

        this.styleIconChoose = { color: '#1687a7', marginRight: '6px' }
        this.styleIconChooseTrue = { color: '#383838c4', marginRight: '6px' }

        this.changeTolsVis = this.changevis.bind(this)
        this.caseSettingTols = false

        this.state.obp = []
        this.state.dzVbn = []
        this.xs_ert()

        // To
        this.state.shMoTo = false
    }
    xs_ert() {
        fetch("https://server.procesen.com/pc/procsentAr")
            .then(res => res.json())
            .then(
                (result) => {
                    var _obp_ = []
                    for (var i = 0; i < result["_dvBn"].length; i++) {
                        _obp_.push(false)
                    }
                    this.setState({
                        isW: true,
                        obp: _obp_,
                        dzVbn: result["_dvBn"],
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

    changevis(x) {
        if (this.state.caseSettingTols === true) {
            this.setState({ caseSettingTols: false })
        } else {
            this.setState({ caseSettingTols: true })
        }
    }
    childOppenProcess() {
        var obj = this.state.obp
        var dOi = this.state.dzVbn
        var oj = []
        for (var y = 0; y < dOi.length; y++) {
            const un = y
            var ov = { case: obj[un], num: dOi[un].nam }
            oj.push(ov)
        }
        var areObjProcess = []
        for (var ch = 0; ch < oj.length; ch++) {
            const num = oj[ch].num
            const cs = ch
            var item = <div key={cs} onClick={() => this.childOppenProcessx(cs)} className={oj[cs].case ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div> {num} </div> <FontAwesomeIcon icon={oj[cs].case ? faMinus : faPlus} style={oj[cs].case ? this.styleIconChooseTrue : this.styleIconChoose} /> </div>
            areObjProcess.push(item)
        }
        return (
            <div className="chooseListProcs" style={this.state.caseSettingTols ? { display: 'block' } : { display: 'none' }}>
                <div className="listProcs">
                    {areObjProcess}
                </div>
            </div>
        )
    }
    childOppenProcessx(x) {
        let obpC = this.state.obp
        obpC[x] = !obpC[x]
        this.setState({ obp: obpC })
    }
    infTextEnter() {
        if (this.props.caseXtex === true) {
            var swp = this.props.xtex
            if (swp.length > 0) {
                var obj = this.state.obp
                var vbn = this.state.dzVbn
                var oj = []
                for (var t = 0; t < vbn.length; t++) {
                    const namb = t
                    if (vbn[namb].exdz !== false) {
                        var oi = { caseP: obj[namb], num: vbn[namb].nam, dz: vbn[namb].exdz }
                        oj.push(oi)
                    }
                }
                var containerItems = []
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
                        if(Xswp > nifn){
                            nifn = XswpS
                            nift = num
                            if(nifb === false){
                                nifb = true
                            }
                        }
                    }
                    if (oj.length - 1 === ch) {
                        if (swpEls < swp.length) {
                            var Xswp = swp.length - swpEls
                            var XswpS = Xswp / swpEls * swpEls
                            var item = this.infItems({ item: "اخرى", itemNu: Xswp, itemNumP: XswpS + "%", key: 12, ccv: false, nm: 12 })
                            containerItems.push(item)
                        }
                    }
                }
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
                var ePoin = (x) =>{
                    if(x >= 50 && x < 95){
                        return (<div className="nitfRen"><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlueLi"></div></div>)
                    }if(x < 50){
                        return (<div className="nitfRen"><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlueLi"></div><div class="powerPoint powerPointBlueLi"></div></div>)
                    } if(x == 100 || x >= 95){
                        return (<div className="nitfRen"><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlue"></div><div class="powerPoint powerPointBlue"></div></div>)
                    }
                }
                return (
                    <>
                        <TabIbfU tit=" خيارات التحكم بالنص الحالي" log={<FontAwesomeIcon icon={faEraser} />} th={this.props.bThem} con={
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
                            <div className={this.props.bThem ? "infTableXDr" : "infTableX"}><div className={this.props.bThem ? "infTableDr" : "infTable"}> عدد المصفوفات : {wasw} </div> </div></div>}
                        />
                        <div className="secTwSitc" style={this.state.shMoTo ? {display : "block" }: {display : "none"} }>
                            <TabIbfU tit=" معلومات النص " log={<FontAwesomeIcon icon={faUnderline} />} th={this.props.bThem} con={ 
                                <div className="noteWeInf nift">
                                    {ePoin(nifn)}
                                    <div className="niftT"> اعلى عنصر في الجملة هو {nift} , حيث يشكل {nifn} % من الجملة . </div>
                                </div> 
                            }
                            />
                        </div>
                        <div className="shMoTo" onClick={() => { this.setState({ shMoTo: !this.state.shMoTo }) }}> <div className="shMoToTit"> {this.state.shMoTo ? "عرض أقل" : " عرض المزيد "} </div> <div className="shMoToLo"> {this.state.shMoTo ? <FontAwesomeIcon icon={faArrowCircleUp} /> : <FontAwesomeIcon icon={faArrowAltCircleDown} />} </div> </div>
                    </>
                )
            } else {
                return ""
            }
        }
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
        let tezx = x
        for (var a = 0; a < tvp.length; a++) {
            const na = a
            if (tvp[na].exdz !== false) {
                if (tbo[na] === true) {
                    const ew = tvp[na].exdz
                    const vdv = new RegExp(ew, 'g');
                    tezx = tezx.replace(vdv, "")
                }
            }
        }
        return tezx
    }
    vxTextvx() {
        var texUpStr = ""
        if (this.props.caseXtex == true) {
            var swp = this.props.xtex
            if (swp.length > 0) {
                if (this.state.isW === true) {
                    if (this.seText(swp).length > 0) {
                        texUpStr = this.seText(swp)
                    } else {
                        texUpStr = this.state.vnText
                    }
                } else {
                    texUpStr = " ... "
                }
            } else {
                texUpStr = this.state.vnText
            }
        } else {
            texUpStr = this.state.vnText
        }
        return texUpStr
    }
    _ctxvnr(x) {
        var xcd = x.target.value
        this.setState({ valTex: xcd })
    }
    chanDis() {
        if (this.state.disVew === false) {
            this.setState({ disVew: true })
            this.setState({ lValEn: this.props.xtex })
        } else {
            this.setState({ disVew: false })
        }
        this.setState({ valTex: this.tekal() })
    }
    tekal() {
        var ntne = this.vxTextvx()
        var teEd = this.state.valTex
        if (this.props.xtex === this.state.lValEn) {
            if (teEd.length > 0) {
                return teEd
            } else {
                return this.state.vnText
            }
        } else {
            return ntne
        }
    }
    tdech() {
        if (this.props.xtex === this.state.lValEn) {
            return true
        } else {
            return false
        }
    }
    clenEd() {
        this.setState({ valTex: this.vxTextvx() })
    }
    marba() {
        var vta = this.tekal()
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
                var itOrg = <div className="hisSec"> <div className="hisT"><div className="hisTn"> {ogn}# </div> <div className="hisTxo"> <FontAwesomeIcon icon={faTrash} className="hisTx" onClick={() => this.deIlm(indx)} /> <FontAwesomeIcon icon={faCopy} className="hisTx" onClick={() => { navigator.clipboard.writeText(corg) }} /> </div> </div> <div className="hisCon"> <div className="hisOrg"> {org} </div> <div className="hisCorg"> {corg} </div> </div> </div>
                ritOrg.push(itOrg)
            })
            return (
                <>
                    { /*<div className="searchHis">
                        <label className="laHisIn">
                            <div className="dLaHisIn"> # </div>
                            <input className="dLaHisInp" type="search" placeholder=" أدخل رقم العنصر " max="10"/>
                        </label>
                    </div>*/}
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
    swiLis() {
        if(this.state.swli === true){
            return (
                <div className="listSwiDiv">
                <div className="listSwi">
                    <div className="listSwiCon">
                        <div className="lswItem">
                            حجم الخط
                        </div>
                    </div>
                    <div className="listSwiEnd">
                        <div className="listSwiBack" onClick={()=>{this.setState({swli : false})}}>
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
                if (this.vxTextvx() === this.state.vnText) {
                    return false
                } else {
                    if (this.vxTextvx().length > 0) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        }
        var cheq = () => {
            if (this.tdech() === true) {
                if (this.state.valTex !== this.vxTextvx()) {
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
                    if (this.tekal() === moragen) {
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
                <div className={this.props.bThem ? "mainTolsControl mainTolsControlDr" : "mainTolsControl mainTolsControlLi"}>
                    <div className={this.props.bThem ? "headerTolsMain heinDr" : "headerTolsMain heinLi"}>
                        <div className="stolsCONTROL">{this.state.isW ? "خيارات التحكم بمعالجة الكلمات" : <div className="isWiteTextControal"></div>} </div>
                        {this.state.isW ?
                            <div className={this.state.caseSettingTols ? this.props.bThem ? "casSett casSettHideDr" : "casSett casSettHide" : this.props.bThem ? "casSett casSettShowDr" : "casSett casSettShow"} onClick={this.changeTolsVis}>
                                <FontAwesomeIcon icon={faSlidersH} className="icTolsSett" />
                            </div> :
                            <div className={this.state.caseSettingTols ? this.props.bThem ? "casSett casSettHideDr" : "casSett casSettHide" : this.props.bThem ? "casSett casSettShowDr" : "casSett casSettShow"}>
                                <FontAwesomeIcon icon={faSlidersH} className="icTolsSett" />
                            </div>}
                    </div>
                    {this.childOppenProcess()}
                </div>
                <div className="ffPcsSec" style={{ paddingTop: '10px' }}>
                    <label className="llPcsSec">
                        <div className={this.props.bThem ? "titlePcs redeyTextAreaKDr" : "titlePcs redeyTextAreaK"}>
                            <div className="InfredeyTextAreaK"> <FontAwesomeIcon icon={faInfo} /> </div>
                            <div className="titleTextArea"> في هذا القسم سيظهر النص بعد التعديل و المعالجة  . <a href="#"> معرفة المزيد </a></div>
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
                                    <div className={this.state.classDivWait} onClick={()=> {this.setState({swli : !this.state.swli})}}>
                                        <FontAwesomeIcon icon={faEllipsisH} className={this.state.swli ? "lixs lixsT" : "lixs"} />
                                    </div>
                                </div>
                                {this.swiLis()}
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
                                        html={'<p className="textareap">' + this.tekal() + '</p>'}
                                        disabled={true}
                                        tagName='div'
                                        className="areaPcP areaPlus"
                                    />}
                            </div>
                            <div className="toolsBottomAreaPcs toolsBottomAreaPcsPro">
                                <div className="textAreaBottom">
                                    2000 / 0
                            </div>
                                <div className="textAreaBottomLogo"> Powered by procesen </div>
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
                            <div className="stolsCONTROLX">{this.state.isW ? " معلومات النص المدخل" : <div className="isWiteTextControal"></div>}</div>
                        </div>
                    </div>
                    <div className={this.props.bThem ? "rtaWait rtaWaitDr" : "rtaWait rtaWaitLi"} style={caseInfoPP() ? { display: "none" } : { display: "block" }}>
                        <div className="rtaTitle">
                            لا يوجد شيء بعد ..
                        </div>
                        <div className="rtaCon">
                            <FontAwesomeIcon icon={faRocket} />
                        </div>
                    </div>
                    {this.infTextEnter()}
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