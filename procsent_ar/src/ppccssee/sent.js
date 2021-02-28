import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faAtom, faBold, faCircle, faCopy, faInfo, faInfoCircle, faMinus, faPaste, faPlus, faRedoAlt, faStream, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize';
import ContentEditable from 'react-contenteditable'
export default class P___rps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseInfoProcs: " لا يوجد ",
            vnum: false,
            vtext: false,
            vspace: false,
            vpm: false,
            vnumNu: 0,
            vspacemNu: 0,
            vpmNu: 0,
            vnumNuP: 0,
            vspacemNuP: 0,
            vpmNuP: 0
        }
        this.ddrThem = this.props.ddrThem
        this.drThem = this.props.drThem
        this.lliThem = this.props.lliThem
        this.liThem = this.props.liThem

        this.careavsold = this.careavsoldv.bind(this)
        this.apiUndoAlt = false
    }
    chxxc() {
        alert("D")
    }
    checkN(xtexs) {
        if (/[0-9]/.test(xtexs)) {
            var nis = xtexs.length - xtexs.replace(/[0-9]/g, "").length
            var nnis = xtexs.replace(/[0-9]/g, "").length
            var nisp = nis / nnis * 100 + "%"
            var ccs = true
            return [nis, nisp, ccs]
        } else {
            var nis = 0
            var nisp = 0
            var ccs = false
            return [nis, nisp, ccs]
        }
    }
    checkS(xtexs) {
        if (/ /.test(xtexs)) {
            var nis = xtexs.length - xtexs.replace(/ /g, "").length
            var nnis = xtexs.replace(/ /g, "").length
            var nisp = nis / nnis * 100 + "%"
            var ccs = true
            return [nis, nisp, ccs]
        } else {
            var nis = 0
            var nnis = 0
            var nisp = 0
            var ccs = false
            return [nis, nisp, ccs]
        }
    }
    chLa(x, s) {
        if (x.inputLan.test(s)) {
            var nis = s.length - s.replace(x.inputLan, "").length
            var nnis = s.replace(x.inputLan, "").length
            var nisp = nis / nnis * 100 + "%"
            var ccs = true
            return [nis, nisp, ccs]
        } else {
            var nis = 0
            var nnis = 0
            var nisp = 0
            var ccs = false
            return [nis, nisp, ccs]
        }
    }
    checkEls() {

    }
    careavsoldv(x) {
        if (this.props.xtex != x.target.value) {
            this.setState({apiUndoAlt : true})
        } else {
            this.setState({apiUndoAlt : false})
        }
    }

    render() {

        var ccThem = this.props.ccThem,
            xtexs = false,
            vnum = false,
            vspace = false,
            vpm = false,
            velse = false,
            vnumNu = 0,
            vnumNuP = 0,
            vspacemNu = 0,
            vspacemNuP = 0,
            vpmNu = 0,
            vpmNuP = 0,
            velseNu = 0,
            velseNup = 0,
            caseInfoPP = "casSettShow";

        var vnumX = false,
            vspaceX = false,
            vpmX = false,
            velseX = false;

        var laChar = [
            { lan: "ar", caseLan: false, inputLan: /[\u0600-\u06FF]/g, n: 0, np: 0, lann: " عربية ", caseLann: false },
            { lan: "en", caseLan: false, inputLan: /[a-zA-Z]/g, n: 0, np: 0, lann: " انجليزية ", caseLann: false }
        ]

        var xtexs = this.props.xtex
        var n_NTes_ols = () => {
            if (this.props.caseXtex == true) {
                if(this.props.xtex.length > 0){
                    var tab = this.props.xtex.replace(/\n/g, "<br />")
                    return tab;
                } else {
                    return "<i className='nullTextArea'> لا يوجد شيء بعد </i>"
                }
            } else {
                return "<i className='nullTextArea'> لا يوجد شيء بعد <i>"
            }
        }
        if (this.props.caseXtex == true) {
            if (xtexs.length > 0) {
                caseInfoPP = "casSettHide"
                var ccss = this.checkN(xtexs)
                var sspp = this.checkS(xtexs)
                vnum = ccss[2]
                vnumNuP = ccss[1]
                vnumNu = ccss[0]
                vspace = sspp[2]
                vspacemNuP = sspp[1]
                vspacemNu = sspp[0]
                for (var i = 0; i < laChar.length; i++) {
                    var thisCx = this.chLa(laChar[i], xtexs)
                    laChar[i].caseLan = thisCx[2]
                    laChar[i].np = thisCx[1]
                    laChar[i].n = thisCx[0]
                }
            } else {
                caseInfoPP = "casSettShow"
            }
        }
        var n_NTos_ols = () =>{
            if (this.props.caseXtex == true) {
                if(this.props.xtex.length > 0){
                    return false
                } else {
                    return true
                }
            } else {
                return true
            }
        }
        var cct = []
        var ccm = -1;
        function chxxc(x) {
            cct[x] = true
        }
        return (
            <div className="ffPcsSec" style={{ paddingTop: '10px' }}>
                <label className="llPcsSec">
                    <div className="redeyTextAreaInf">
                        <div className="redeyTextAreaInfTIT">
                            <div className="stolsCONTROL">
                                معلومات النص المدخل
                            </div>
                            <div className={"casSett " + caseInfoPP}>
                                <FontAwesomeIcon icon={faAlignLeft} className="icTolsSett" />
                            </div>
                        </div>
                        <CseInfoThisP />
                    </div>
                    <div className="titlePcs redeyTextAreaK">
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
                                <div >
                                </div>
                            </div>
                        </div>
                        <div className="textArea">
                                <ContentEditable
                                    html={'<p className="textareap">' + n_NTes_ols() + '</p>'}
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
        )

        function CseInfoThisP() {
            try {
                if (xtexs.length > 0) {
                    return (
                        <div className="ddTable">
                            <table className="_listInfo">
                                <tbody>
                                    <tr>
                                        <th> نوع العنصر </th>
                                        <th> العدد </th>
                                        <th> النسبة </th>
                                        <th> حذف </th>
                                    </tr>
                                    {vnum ? <SetElement item={" ارقام "} itemNu={vnumNu} itemNumP={vnumNuP} cn={""} ccv={vnumX} ccb={vnumX} /> : false}
                                    {vspace ? <SetElement item={" مسافات "} itemNu={vspacemNu} itemNumP={vspacemNuP} cn={""} ccv={vspaceX} ccb={vspaceX} /> : false}
                                    {vpm ? <SetElement item={" علامات ترقيم "} itemNu={vpmNu} itemNumP={vpmNuP} cn={""} ccv={vpmX} ccb={vpmX} /> : false}
                                    {laChar[0].caseLan ? <SetElement item={" احرف " + laChar[0].lann} itemNu={laChar[0].n} itemNumP={laChar[0].np} cn={""} ccv={laChar[0].caseLann} ccb={laChar[0].caseLann} /> : false}
                                    {laChar[1].caseLan ? <SetElement item={" احرف " + laChar[1].lann} itemNu={laChar[1].n} itemNumP={laChar[1].np} cn={""} ccv={laChar[1].caseLann} ccb={laChar[1].caseLann} /> : false}
                                    {velse ? <SetElement item={" أخرى "} itemNu={velseNu} itemNumP={velseNup} cn={""} ccv={velseX} ccb={velseX} /> : false}
                                </tbody>
                            </table>
                        </div>
                    )
                } else {
                    return (
                        <div>  </div>
                    )
                }
            } catch (err) {
                return (
                    <div>  </div>
                )
            }
        }

        function SetElement(cx) {
            return (
                <tr>
                    <td > {cx.item} </td>
                    <td > {cx.itemNu} </td>
                    <td > {cx.itemNumP} </td>
                    {cx.ccv ? <td className="faMinusDiv" onClick={() => chxxc()}> <FontAwesomeIcon icon={faMinus} className="faMinusi" /> </td> : <td className="faPlusDiv" onClick={() => chxxc()}> <FontAwesomeIcon icon={faPlus} className="faPlusi" /> </td>}
                </tr>
            )
        }
    }
}