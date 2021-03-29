import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faAlignRight, faBold, faCopy, faInfo } from '@fortawesome/free-solid-svg-icons'
import TextareaAutosize from 'react-textarea-autosize';
import Sent from './sent';

const styleFormPrcsDarkV = { backgroundColor: '#02101f', color: '#eee', border: '1.4px solid #02101f', borderRadius: '9px' }
const styleFormPrcsLightV = { backgroundColor: 'rgb(243, 243, 243)', border: '1.4px solid rgb(204, 202, 202)', borderRadius: '9px' }

const styleFormPrcsTextAreaLightV = { color: '#393e46', backgroundColor: 'transparent', margin: 'auto', width: '100%',overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }
const styleFormPrcsTextAreaDarkV = { color: '#f7f7f7', backgroundColor: 'transparent', margin: 'auto', width: '100%',  overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.state = { len: 0, TextPcs: "", didOve: false, overTextNumX: '0' };
        this.styleFormPrcsDark = styleFormPrcsDarkV
        this.styleFormPrcsLight = styleFormPrcsLightV
        this.styleFormPrcsTextAreaLight = styleFormPrcsTextAreaLightV
        this.styleFormPrcsTextAreaDark = styleFormPrcsTextAreaDarkV

        this.isStaProcs = false
        // < />
        this.caseXtext = false

        // tols state ..
        this.apiTrashAlt = false
        this.timeout = 0;
        this.dde = false
        this.state.apiBlod = false
        this.state.dirFont = true
    }
    tPcsWor(x) {
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
        if (x.length > 5000) {
            var xNum = x.length - 5000
            var ovText = x.slice(5000, x.length);
            this.setState({
                overTextNumX: xNum,
                overText: ovText,
                didOve: true
            })
        } else {
            this.setState({ didOve: false })
        }
    }

    // tols ..
    /*doApiTrashAlt() {
        if (this.state.apiTrashAlt === true) {
            this.setState({
                dde : true,
                apiTrashAlt: false,
                didOve: false,
                len: 0
            })
        }
    }*/
    cOveText() {
        this.setState({ didOve: false })
        this.setState({ overTextNumX: 0 })
        this.setState({ overText: '' })
        var orText = this.state.TextPcs
        var onText = orText.slice(0, 5000);
        this.setState({ TextPcs: onText })
    }
    ppt(x) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            var namAdv = x.target.value
            this.tPcsWor(namAdv)
        }, 100);
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
                                    <div className="titleTextArea "> Enter in this section the text you want to process . <a href="#sec-how-use"> Learn more </a> </div>
                                </div>
                                <div className="areaPcc" style={this.props.them ? this.styleFormPrcsDark : this.styleFormPrcsLight}>
                                    <div className="secOntext">
                                        <div className="toolsMenuAreaPcs">
                                            <div className="tolsMainTextArea">
                                                <div onClick={() => { this.setState({apiBlod : !this.state.apiBlod}) }}>
                                                    <FontAwesomeIcon icon={faBold} className={this.state.apiBlod ? "apiChose" : "apiunChose"} />
                                                </div>
                                                <div onClick={() => { navigator.clipboard.writeText(this.TextPcs) }}>
                                                    <FontAwesomeIcon icon={faCopy} className={this.apicopy ? "apiChose" : "apiunChose"} />
                                                </div>
                                                <div onClick={() => {this.setState({dirFont : true}) }}>
                                                    <FontAwesomeIcon icon={faAlignLeft} className={this.state.dirFont ? "apiChose" : "apiunChose"} />
                                                </div>
                                                <div onClick={() => {this.setState({dirFont : false}) }}>
                                                    <FontAwesomeIcon icon={faAlignRight} className={this.state.dirFont ? "apiunChose" : "apiChose"} />
                                                </div>
                                                
                                                {/*<div onClick={() => this.doApiTrashAlt()}>
                                                    <FontAwesomeIcon icon={faTrashAlt} className={this.state.apiTrashAlt ? "apiChoseTrashT" : "apiChoseTrash"} />
                                                </div>*/}
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="textArea" style={this.state.dirFont ? {direction : 'ltr'} :{direction : 'rtl'} }>
                                        <TextareaAutosize
                                            className={this.state.apiBlod ? "areaPcP largFont" : "areaPcP smallFont"}
                                            style={this.props.them ? this.styleFormPrcsTextAreaDark : this.styleFormPrcsTextAreaLight}
                                            rows="4"
                                            placeholder=" write here .. "
                                            onChange={(x) => { this.ppt(x) }}
                                            onPaste={(x) => this.ppt(x)} />
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
                                    <div className="toolsBottomAreaPcs">
                                        <div className="textAreaBottom">
                                            5000 / <mark className={this.state.didOve ? "marNumEnMain marNumX" : "marNumEnMain marNumN"}> {this.state.len} </mark>
                                        </div>
                                        <div className="textAreaBottomLogo">
                                            Powered by procsent
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <Sent ccThem={this.props.them} drThem={styleFormPrcsDarkV} liThem={styleFormPrcsLightV} ddrThem={styleFormPrcsTextAreaDarkV} lliThem={styleFormPrcsTextAreaLightV} xtex={this.state.TextPcs} bThem={this.props.them} themFont={this.state.apiBlod} dirFontThm = {this.state.dirFont} />
                    </div>
                </div>
            </div>
        )
    }
}