import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faExclamationTriangle, faInfo, faMoon, faPaste, faSun, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import TextareaAutosize from 'react-textarea-autosize';
import P___rps from './sent';

const cookies = new Cookies();

const styleFormPrcsDarkV = { backgroundColor: '#02101f', color: '#eee', border: '1.4px solid #02101f', borderRadius: '9px' }
const styleFormPrcsLightV = {backgroundColor: 'rgb(243, 243, 243)', border: '1.4px solid rgb(204, 202, 202)', borderRadius: '9px' }

const styleFormPrcsTextAreaLightV = { color: '#393e46', resize: 'none', backgroundColor: 'transparent', margin: 'auto', width: '100%', fontSize: '17px', overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }
const styleFormPrcsTextAreaDarkV = { color: '#f7f7f7', resize: 'none', backgroundColor: 'transparent', margin: 'auto', width: '100%', fontSize: '17px', overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.wordsPcs = this.tPcsWor.bind(this);
        this.state = { len: '0', words: '0', TextPcs: "", didOve: false, overTextNumX: '0' };
        this.state.styleFormPrcsDark = styleFormPrcsDarkV
        this.state.styleFormPrcsLight = styleFormPrcsLightV
        this.state.styleFormPrcsTextAreaLight = styleFormPrcsTextAreaLightV
        this.state.styleFormPrcsTextAreaDark = styleFormPrcsTextAreaDarkV

        this.state.isStaProcs = false
        // < />
        this.state.caseXtext = false

        // tols state ..
        this.state.apiTrashAlt = false
    }

    checkThat(x) {
        if (cookies.get(x) === 'true') {
            return true
        } else {
            return false
        }
    }

    tPcsWor(x) {
        this.setState({ len: x.target.value.length });
        var words = x.target.value.split(" ")
        var wwords = words.length
        if (x.target.value.length < 3) {
            wwords = words.length - 1
            this.setState({ caseXtex: true })
        }
        var wowords = x.target.value.replace(/\d+||\s+||\s+$/g, '')
        var woword = wowords.split(" ")
        for (var w = 0; w < woword.length; w++) {
            if (woword[w] < 1) {
                wwords = wwords - 1
            }
        }
        if (wwords === -1) {
            wwords = wwords + 1
        }
        if (x.target.value.length > 0) {
            this.setState({ apiTrashAlt: true })
        } else {
            this.setState({ apiTrashAlt: false })
        }
        if (x.target.value.length > 5000) {
            var xNum = x.target.value.length - 5000
            var ovText = x.target.value.slice(5000, x.target.value.length);
            this.setState({ overTextNumX: xNum })
            this.setState({overText : ovText})
            this.setState({ didOve: true })
        } else {
            this.setState({ didOve: false })
        }
        this.setState({ words: wwords });
        this.setState({ TextPcs: x.target.value })
    }

    // tols ..
    doApiTrashAlt() {
        if (this.state.apiTrashAlt === true) {
            this.setState({ apiTrashAlt: false })
            this.setState({ TextPcs: "" })
            this.setState({ didOve: false })
            this.setState({ len: 0 });
        }
    }
    cOveText() {
        this.setState({ didOve: false })
        this.setState({ overTextNumX: 0 })
        this.setState({overText : ''})
        var orText = this.state.TextPcs
        var onText = orText.slice(0, 5000);
        this.setState({ TextPcs: onText })
    }

    render() {
        return (
            <div className="MainProcsent infoStartP ar_text">
                <div className="MainProcsentSec">
                    <div className="sectionProcsent">
                        <div className="ffPcs">
                            <label className="llPcs">
                                <div className={this.props.them ? "titlePcs redeyTextArea redeyTextAreaDark" : "titlePcs redeyTextArea redeyTextAreaLight"}>
                                    <div className={this.props.them ?"inforedeyTextAreaDr" :"inforedeyTextArea"}> <FontAwesomeIcon icon={faInfo} className="icInfredeyTextArea" /></div>
                                    <div className="titleTextArea "> أدخل في هذا القسم النص الذي ترغب بمعالجته  . <a href="#learnSectionOne"> معرفة المزيد </a> </div>
                                </div>
                                <div className="areaPcc" style={this.props.them ? this.state.styleFormPrcsDark : this.state.styleFormPrcsLight}>
                                    <div className="secOntext">
                                        <div className="toolsMenuAreaPcs">
                                            <div className="tolsMainTextArea">
                                                <div className="apiChoose">
                                                    <FontAwesomeIcon icon={faPaste} className={this.state.apipast ? "apiChose" : "apiunChose"} />
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faCopy} className={this.state.apicopy ? "apiChose" : "apiunChose"} />
                                                </div>
                                                <div onClick={() => this.doApiTrashAlt()}>
                                                    <FontAwesomeIcon icon={faTrashAlt} className={this.state.apiTrashAlt ? "apiChoseTrashT" : "apiChoseTrash"} />
                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="textArea">
                                        <TextareaAutosize className="areaPcP"
                                            style={this.props.them ? this.state.styleFormPrcsTextAreaDark : this.state.styleFormPrcsTextAreaLight}
                                            rows="4"
                                            placeholder=" اكتب هنا .."
                                            onChange={this.wordsPcs}
                                            value={this.state.TextPcs} />
                                        {this.state.didOve ?
                                            <div className="oveTextWrong">
                                                <div className="titleOverText">
                                                    <div className="icoTitleOverText"> <FontAwesomeIcon icon={faExclamationTriangle} /> </div>
                                                    <div className="textTitleOverText"> تم تحاوز العدد المسموح به , ينبغي أزالة {this.state.overTextNumX} حرف </div>
                                                </div>
                                                <div className="containerOverTextCovert">
                                                    <div className="containerOverText">{this.state.overText} <mark className="remoOveText" onClick={()=>this.cOveText()}>[-]</mark></div>
                                                </div>
                                            </div> : ""}
                                    </div>
                                    <div className="toolsBottomAreaPcs">
                                        <div className="textAreaBottom">
                                            5000 /<mark className={this.state.didOve ? "marNumEnMain marNumX" : "marNumEnMain marNumN"}>{this.state.len}</mark>
                                        </div>
                                        <div className="textAreaBottomLogo">
                                            Powered by procesen
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <P___rps ccThem={this.props.them} drThem={styleFormPrcsDarkV} liThem={styleFormPrcsLightV} ddrThem={styleFormPrcsTextAreaDarkV} lliThem={styleFormPrcsTextAreaLightV} xtex={this.state.TextPcs} caseXtex={this.state.caseXtex} bThem = {this.props.them}/>
                    </div>
                </div>
            </div>
        )
    }
}