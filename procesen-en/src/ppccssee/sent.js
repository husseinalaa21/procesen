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
            vnText: "<i className='nullTextArea'> There is nothing yet .. </i>",
            classDivWait: "vxTextvxN",
            divWait: ""

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

        this.state.obp = {
            "rSpace": false,
            "rPun": false,
            "rArChar": false,
            "rEnChar": false,
            "rChar": false,
            "rEnNumbers": false,
            "rArNumbers": false,
            "rNumbers": false,
            "processAr": false,
            "processEn": false
        }
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
        var oj = [
            { case: obj.rSpace, num: "Remove spaces", nam: "rSpace" },
            { case: obj.rPun, num: "Remove the Breaks and symbols", nam: "rPun" },
            { case: obj.rArChar, num: "Remove the Arabic letters", nam: "rArChar" },
            { case: obj.rEnChar, num: "Remove the English letters ", nam: "rEnChar" },
            { case: obj.rChar, num: "Remove all letters", nam: "rChar" },
            { case: obj.rArNumbers, num: "Remove Arabic numbers", nam: "rArNumbers" },
            { case: obj.rEnNumbers, num: "Remove English numbers", nam: "rEnNumbers" },
            { case: obj.rNumbers, num: "Remove Numbers", nam: "rNumbers" },
            { case: obj.processAr, num: "Arabic word processing", nam: "processAr" },
            { case: obj.processEn, num: "English word processing", nam: "processEn" }
        ]
        var areObjProcess = []
        for (var ch = 0; ch < oj.length; ch++) {
            const num = oj[ch].num
            const cs = ch
            const nam = oj[ch].nam
            var item = <div key={cs} onClick={() => this.childOppenProcessx(nam, cs)} className={oj[cs].case ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div> {num} </div> <FontAwesomeIcon icon={oj[cs].case ? faMinus : faPlus} style={oj[cs].case ? this.styleIconChooseTrue : this.styleIconChoose} /> </div>
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
                var oj = [
                    { caseP: obj.rNumbers, num: " Numbers ", nam: "rNumbers", dz: /[0-9]/g },
                    { caseP: obj.rSpace, num: " Space ", nam: "rSpace", dz: / /g },
                    { caseP: obj.rArChar, num: " Letters Arabic	 ", nam: "rArChar", dz: /[\u0600-\u06FF]/g },
                    { caseP: obj.rEnChar, num: " Letters English	 ", nam: "rEnChar", dz: /[a-zA-Z]/g },
                    { caseP: obj.rPun, num: " Breaks and symbols ", nam: "rPun", dz: /[\$\uFFE5\^\+=`~<>{}\[\]|\u3000-\u303F!-#%-\x2A,-/:;\x3F@\x5B-\x5D_\x7B}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/g }
                ]
                var containerItems = []
                var swpEls = 0
                for (var ch = 0; ch < oj.length; ch++) {
                    const tNumber = ch
                    const dz = oj[ch].dz
                    const num = oj[ch].num
                    const ccv = oj[ch].caseP
                    const nam = oj[ch].nam
                    if (dz.test(swp)) {
                        var Xswp = swp.length - swp.replace(dz, "").length
                        swpEls += Xswp
                        var XswpS = Xswp / swp.replace(dz, "").length * swp.replace(dz, "").length
                        var item = this.infItems({ item: num, itemNu: Xswp, itemNumP: XswpS + "%", key: tNumber, ccv: ccv, nam: nam })
                        containerItems.push(item)
                    }
                    if (oj.length - 1 === ch) {
                        if (swpEls < swp.length) {
                            var Xswp = swp.length - swpEls
                            var XswpS = Xswp / swpEls * swpEls
                            var item = this.infItems({ item: "Else", itemNu: Xswp, itemNumP: XswpS + "%", key: 12, ccv: 12, nam: 12 })
                            containerItems.push(item)
                        }
                    }
                }
                return (
                    <div className={this.props.bThem ? "ddTable ddTableDr" : "ddTable ddTableLi"}>
                        <table className={this.props.bThem ? "_listInfoDr" : "_listInfo"}>
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
                <td onClick={() => this.childOppenProcessx(cx.nam)} className={cx.ccv ? "faMinusDiv" : "faPlusDiv"}> <FontAwesomeIcon icon={cx.ccv ? faMinus : faPlus} className={cx.ccv ? "faMinusi" : "faPlusi"} /> </td>}
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
                        <div className="stolsCONTROL">Word processing control options .</div>
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
                                <div className="stolsCONTROL">Entered text information</div>
                                <div className={this.props.bThem? "casSett " + caseInfoPP + "Dr":"casSett " + caseInfoPP}>
                                    <FontAwesomeIcon icon={faAlignLeft} className="icTolsSett" />
                                </div>
                            </div>
                            {this.infTextEnter()}
                        </div>
                        <div className={this.props.bThem ? "titlePcs redeyTextAreaKDr" : "titlePcs redeyTextAreaK"}>
                            <div className="InfredeyTextAreaK"> <FontAwesomeIcon icon={faInfo} /> </div>
                            <div className="titleTextArea"> In this section the text will appear after editing and processing . <a href="#"> Learn more </a></div>
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