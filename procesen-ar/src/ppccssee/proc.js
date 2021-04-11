import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faAlignRight, faBold, faCopy, faInfo,  faPaintBrush, faThumbtack, faUndoAlt, faPenAlt,  faEraser,  faBars } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize';
import Sent from './sent';

const styleFormPrcsDarkV = { backgroundColor: '#02101f', color: '#eee', border: '1.4px solid #02101f', borderRadius: '9px' }
const styleFormPrcsLightV = { backgroundColor: 'rgb(243, 243, 243)', border: '1.4px solid rgb(204, 202, 202)', borderRadius: '9px' }

const styleFormPrcsTextAreaLightV = { color: '#393e46', backgroundColor: 'transparent', margin: 'auto', width: '100%', overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }
const styleFormPrcsTextAreaDarkV = { color: '#f7f7f7', backgroundColor: 'transparent', margin: 'auto', width: '100%', overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.state = { len: 0, TextPcs: "", didOve: false, overTextNumX: '0', toolSet: false };
        this.styleFormPrcsDark = styleFormPrcsDarkV
        this.styleFormPrcsLight = styleFormPrcsLightV
        this.styleFormPrcsTextAreaLight = styleFormPrcsTextAreaLightV
        this.styleFormPrcsTextAreaDark = styleFormPrcsTextAreaDarkV

        this.isStaProcs = false
        this.state.isInfo = false
        // < />
        this.caseXtext = false

        // tols state ..
        this.apiTrashAlt = false
        this.timeout = 0;
        this.dde = false
        this.state.apiBlod = false
        this.state.dirFont = false
        this.prcText = this.tPcsWor.bind(this)
    }
    tPcsWor(es) {
        var x = es.target.value.slice(0,3000)
        this.setState({ TextPcs: x })
        if (x.length > 0) {
            this.setState({
                apiTrashAlt: true,
                len: x.length
            })
        } else {
            this.setState({
                apiTrashAlt: false,
                len: 0
            })
        }
        /*if (x.length > 5000) {
            var xNum = x.length - 5000
            var ovText = x.slice(5000, x.length);
            this.setState({
                overTextNumX: xNum,
                overText: ovText,
                didOve: true
            })
        } else {
            this.setState({ didOve: false })
        }*/
    }
    /*cOveText() {
        var orText = this.state.TextPcs
        var onText = orText.slice(0, 5000);
        this.setState({ didOve: false , overTextNumX: 0 , overText: '' , TextPcs: onText })
    }*/
    doApiTrashAlt() {
        this.setState({
            TextPcs: "", len: 0, apiTrashAlt: false
        })
    }
    infoContainer() {
        var itemsAr = []
        var infoContainerItems = (x, y,k) => {
            return (
                <tr className="trTbIf" key={544+k}><td className={this.props.them ?"tdInfADr":"tdInfA"}>{x}</td><td className="tdInfB">{y}</td></tr>
            )
        }
        var infTextArea = [
            { n: " تكبير الاحرف . ", s: <FontAwesomeIcon icon={faBold} /> },
            { n: " اختر كيفية عرض النص من اليسار إلى اليمين أو العكس .", s: <FontAwesomeIcon icon={faAlignLeft} /> },
            { n: " استعادة التغييرات التي تم إجراؤها . ", s: <FontAwesomeIcon icon={faUndoAlt} /> },
            { n: " يثبت النص الحالي بغض النظر عن التغييرات التي تم إجراؤها في الحقل الأول . ", s: <FontAwesomeIcon icon={faThumbtack} /> },
            { n: " حذف النص الحالي .", s: <FontAwesomeIcon icon={faEraser} /> },
            { n: "تحرير النص المعدل .", s: <FontAwesomeIcon icon={faPenAlt} /> }
        ]
        for(var re = 0; re < infTextArea.length; re++){
            const ker = re
            var itTr = infoContainerItems(infTextArea[re].s, infTextArea[re].n,ker)
            itemsAr.push(itTr)
        }
        return (
            <table className={this.props.them ? "textAreaInfDr texInfTabDr" : "textAreaInf texInfTabLi"}>
                <tbody><tr>
                    <th className="tfTbTh"> الرمز </th>
                    <th className="tfTbTh"> الاستخدام </th>
                </tr>{itemsAr}</tbody>
            </table>
        )
    }
    render() {
        return (
            <div className="MainProcsent infoStartP ar_text">
                <div className="MainProcsentSec">
                    <div className="sectionProcsent">
                        <div className="ffPcs">
                            <label className="llPcs">
                                <div className={this.props.them ? "titlePcs redeyTextArea redeyTextAreaDark" : "titlePcs redeyTextArea redeyTextAreaLight"}>
                                    <div className={this.props.them ? "inforedeyTextAreaDr" : "inforedeyTextArea"}> <FontAwesomeIcon icon={faInfo} className="icInfredeyTextArea" /></div>
                                    <div className="titleTextArea "> أدخل في هذا القسم النص الذي ترغب بمعالجته  . <a href="#sec-how-use"> معرفة المزيد </a> </div>
                                </div>
                                <div className="areaPcc" style={this.props.them ? this.styleFormPrcsDark : this.styleFormPrcsLight}>
                                    <div className="secOntext">
                                        <div className="toolsMenuAreaPcs">
                                            <div className={this.props.them ? "tolsMainTextArea tolsDr" : "tolsMainTextArea tolsLi"}>
                                                <div onClick={() => { navigator.clipboard.writeText(this.TextPcs) }}>
                                                    <FontAwesomeIcon icon={faCopy} className={this.apicopy ? "apiChose" : "apiunChose"} />
                                                </div>
                                                <div onClick={() => this.doApiTrashAlt()}>
                                                    <FontAwesomeIcon icon={faEraser} className={this.state.apiTrashAlt ? "apiChoseTrashT" : "apiChoseTrash"} />
                                                </div>
                                            </div>
                                            <div className={this.props.them ? "tolsSecAreaPcs tolsDr" : "tolsSecAreaPcs tolsLi"}>
                                                <div className="tolsSetText">
                                                    {this.state.toolSet ?
                                                        <div className="containerTols">
                                                            <div onClick={() => { this.setState({ apiBlod: !this.state.apiBlod }) }}>
                                                                <FontAwesomeIcon icon={faBold} className={this.state.apiBlod ? "toolSetApiT" : "toolSetApi"} />
                                                            </div>
                                                            <div onClick={() => { this.setState({ dirFont: true }) }}>
                                                                <FontAwesomeIcon icon={faAlignLeft} className={this.state.dirFont ? "toolSetApiT" : "toolSetApi"} />
                                                            </div>
                                                            <div onClick={() => { this.setState({ dirFont: false }) }}>
                                                                <FontAwesomeIcon icon={faAlignRight} className={this.state.dirFont ? "toolSetApi" : "toolSetApiT"} />
                                                            </div>
                                                        </div>
                                                        : ""}
                                                    <div className={this.state.toolSet ? "MainTolsSet MainTolsSetT" : "MainTolsSet MainTolsSetF"}>
                                                        <FontAwesomeIcon icon={faBars} onClick={() => this.setState({ toolSet: !this.state.toolSet })} />
                                                    </div>
                                                </div>
                                                <div className="apiChoose" onClick={() => { this.setState({ isInfo: !this.state.isInfo }) }}>
                                                    <FontAwesomeIcon icon={faInfo} className={this.state.isInfo ? "apiChose" : "apiunChose"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textArea" style={this.state.dirFont ? { direction: 'ltr' } : { direction: 'rtl' }}>
                                        <TextareaAutosize
                                            className={this.state.apiBlod ? "areaPcP largFont" : "areaPcP smallFont"}
                                            style={this.props.them ? this.styleFormPrcsTextAreaDark : this.styleFormPrcsTextAreaLight}
                                            rows="4"
                                            placeholder=" اكتب هنا .. "
                                            onChange={this.prcText}
                                            onPaste={this.prcText}
                                            value={this.state.TextPcs} />
                                        {/*this.state.didOve ?
                                                <div className="oveTextWrong">
                                                    <div className="titleOverText">
                                                        <div className="icoTitleOverText"> <FontAwesomeIcon icon={faExclamationTriangle} /> </div>
                                                        <div className="textTitleOverText"> تم تجاوز العدد المسموح به , ينبغي أزالة {this.state.overTextNumX} حرف </div>
                                                    </div>
                                                    <div className="containerOverTextCovert">
                                                        <div className="containerOverText">{this.state.overText} <mark className="remoOveText" onClick={() => this.cOveText()}>[-]</mark></div>
                                                    </div>
                                            </div> : ""*/}
                                    </div>
                                    <div className={this.props.them ? "toolsBottomAreaPcs toolsBottomAreaPcsDr" : "toolsBottomAreaPcs toolsBottomAreaPcsLi"}>
                                        <div className="textAreaBottom">
                                            عدد الاحرف : {this.state.len} {/*<mark className={this.state.didOve ? "marNumEnMain marNumX" : "marNumEnMain marNumN"}> {this.state.len} </mark>*/}
                                        </div>
                                        <div className="textAreaBottomLogo">
                                            Powered by procesen
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        {this.state.isInfo ? this.infoContainer() : <div></div>}
                        <Sent ccThem={this.props.them} drThem={styleFormPrcsDarkV} liThem={styleFormPrcsLightV} ddrThem={styleFormPrcsTextAreaDarkV} lliThem={styleFormPrcsTextAreaLightV} xtex={this.state.TextPcs} bThem={this.props.them} themFont={this.state.apiBlod} dirFontThm={this.state.dirFont} />
                    </div>
                </div>
            </div>
        )
    }
}