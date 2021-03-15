import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faCopy, faInfo, faMinus, faPlus, faUndoAlt,faSlidersH } from '@fortawesome/free-solid-svg-icons'
import ContentEditable from 'react-contenteditable'

export default class P___rps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseInfoProcs: " لا يوجد ",
            // Just For New Text
            vnText: "<i className='nullTextArea'> لا يوجد شيء بعد </i>",
            classDivWait: "vxTextvxN",
            divWait: ". . ."

        }
        this.ddrThem = this.props.ddrThem
        this.drThem = this.props.drThem
        this.lliThem = this.props.lliThem
        this.liThem = this.props.liThem

        this.apiUndoAlt = false

        // ...

        this.styleIconChoose = { color: '#1687a7', marginRight: '6px' }
        this.styleIconChooseTrue = { color: '#383838c4', marginRight: '6px' }

        this.changeTolsVis = this.changevis.bind(this)
        this.caseSettingTols = false

        this.state.obp = []
        this.state.dzVbn = []
        this.xs_ert()
    }
    xs_ert(){
          fetch("https://server.procesen.com/pc/procsentAr")
            .then(res => res.json())
            .then(
              (result) => {
                var _obp_ = []
                for (var i = 0 ; i < result["_dvBn"].length; i ++){
                    _obp_.push(false)
                }
                this.setState({
                  divWait : "Ready",
                  obp : _obp_,
                  dzVbn : result["_dvBn"]
                });
              },
              (error) => {
                this.setState({
                  vnText : error
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
        var oj = [ ]
        for(var y = 0; y < dOi.length; y++){
            const un = y
            var ov = {case : obj[un] , num : dOi[un].nam}
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
                for(var t = 0; t < vbn.length ; t++){
                    const namb = t
                    if(vbn[namb].exdz !== false){
                        var oi = {caseP : obj[namb], num : vbn[namb].nam , dz : vbn[namb].exdz}
                        oj.push(oi)
                    }
                }
                var containerItems = []
                var swpEls = 0
                for (var ch = 0; ch < oj.length; ch++) {
                    const tNumber = ch
                    const dzv = oj[tNumber].dz
                    const dz = new RegExp(dzv,'g');
                    const num = oj[ch].num
                    const ccv = oj[ch].caseP
                    if (dz.test(swp)) {
                        var Xswp = swp.length - swp.replace(dz, "").length
                        swpEls += Xswp
                        var XswpS = Xswp / swp.replace(dz, "").length * swp.replace(dz, "").length
                        var item = this.infItems({ item: num, itemNu: Xswp, itemNumP: XswpS + "%", key: tNumber, ccv: ccv, nm: tNumber })
                        containerItems.push(item)
                    }
                    if (oj.length - 1 === ch) {
                        if (swpEls < swp.length) {
                            var Xswp = swp.length - swpEls
                            var XswpS = Xswp / swpEls * swpEls
                            var item = this.infItems({ item: "اخرى", itemNu: Xswp, itemNumP: XswpS + "%", key: 12, ccv: 12, nm: 12 })
                            containerItems.push(item)
                        }
                    }
                }
                return (
                    <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                        <table className={this.props.bThem ? "_listInfoDr" : "_listInfo"}>
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
                    </div>
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
                {this.props.bThem ? <td onClick={() => this.childOppenProcessx(cx.nam)} className={cx.ccv ? "faMinusDivDr" : "faPlusDivDr"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusiDr" : "faPlusiDr"} /> </td>:
                <td onClick={() => this.childOppenProcessx(cx.nm)} className={cx.ccv ? "faMinusDiv" : "faPlusDiv"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusi" : "faPlusi"} /> </td>}
            </tr>
        )
    }
    seText(x){
    }
    vxTextvx() {
        if (this.props.caseXtex == true) {
            var swp = this.props.xtex
            if (swp.length > 0) {
                this.seText(swp)
            }
        }
        return this.state.vnText
    }
    render() {
        var ccThem = this.props.ccThem,
            xtexs = this.props.xtex,
            caseInfoPP = "casSettShow";
        if (this.props.caseXtex == true) {
            if (xtexs.length > 0) {
                caseInfoPP = "casSettHide"
            } else {
                caseInfoPP = "casSettShow"
            }
        }
        var n_NTos_ols = () => {
            if (this.props.caseXtex == true) {
                if (this.props.xtex.length > 0) {
                    return false
                } else {
                    return true
                }
            } else {
                return true
            }
        }
        return (
            <>
                <div className={this.props.bThem ?"mainTolsControl mainTolsControlDr":"mainTolsControl mainTolsControlLi"}>
                    <div className={this.props.bThem ? "headerTolsMain heinDr" : "headerTolsMain heinLi"}>
                        <div className="stolsCONTROL">خيارات التحكم بمعالجة الكلمات</div>
                        <div className={this.state.caseSettingTols ? this.props.bThem ?"casSett casSettHideDr" : "casSett casSettHide" : this.props.bThem ? "casSett casSettShowDr" : "casSett casSettShow" } onClick={this.changeTolsVis}>
                            <FontAwesomeIcon icon={faSlidersH} className="icTolsSett" />
                        </div>
                    </div>
                    {this.childOppenProcess()}
                </div>
                <div className="ffPcsSec" style={{ paddingTop: '10px' }}>
                    <label className="llPcsSec">
                        <div className={this.props.bThem ?"redeyTextAreaInf TextAreaSDr":"redeyTextAreaInf TextAreaSLi"}>
                            <div className={this.props.bThem ?"redeyTextAreaInfTIT TextAreaDr":"redeyTextAreaInfTIT TextAreaLi"}>
                                <div className="stolsCONTROL">معلومات النص المدخل</div>
                                <div className={this.props.bThem? "casSett " + caseInfoPP + "Dr":"casSett " + caseInfoPP}>
                                    <FontAwesomeIcon icon={faAlignLeft} className="icTolsSett" />
                                </div>
                            </div>
                            {this.infTextEnter()}
                        </div>
                        <div className={this.props.bThem ? "titlePcs redeyTextAreaKDr" : "titlePcs redeyTextAreaK"}>
                            <div className="InfredeyTextAreaK"> <FontAwesomeIcon icon={faInfo} /> </div>
                            <div className="titleTextArea"> في هذا القسم سيظهر النص بعد التعديل و المعالجة  . <a href="#"> معرفة المزيد </a></div>
                        </div>
                        <div className="areaPccSec" style={ccThem ? this.drThem : this.liThem}>
                            <div className="secOntext">
                                <div className="toolsMenuAreaPcs">
                                    <div className="tolsMainTextArea">
                                        <div className="apiChoose">
                                            <FontAwesomeIcon icon={faCopy} className={this.state.apicopy ? "apiChose" : "apiunChose"} />
                                        </div>
                                        <div className="apiChoose">
                                            <FontAwesomeIcon icon={faUndoAlt} className={this.state.apiUndoAlt ? "apiChose" : "apiunChose"} />
                                        </div>
                                    </div>
                                    <div className={this.state.classDivWait}>
                                        {this.state.divWait}
                                    </div>
                                </div>
                            </div>
                            <div className="textArea">
                                <ContentEditable
                                    html={'<p className="textareap">' + this.vxTextvx() + '</p>'}
                                    disabled={n_NTos_ols()}
                                    tagName='div'
                                    className="areaPcP areaPlus"
                                />
                            </div>
                            <div className="toolsBottomAreaPcs toolsBottomAreaPcsPro">
                                <div className="textAreaBottom">
                                    2000 / 0
                            </div>
                                <div className="textAreaBottomLogo">
                                    Powered by procsent
                            </div>
                            </div>
                        </div>
                    </label>
                </div>
            </>
        )
    }
}