import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faBold, faCopy, faEye, faEyeSlash, faFeatherAlt, faInfo, faInfoCircle, faMinus, faMoon, faPaste, faPlus, faRedoAlt, faSlidersH, faSun, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import TextareaAutosize from 'react-textarea-autosize';
import P___rps from './sent';

const cookies = new Cookies();

var themProcs = false;

const styleFormPrcsDarkV = { backgroundColor: '#02101f', color: '#eee', border: '1.4px solid rgb(204, 202, 202)', borderRadius: '9px' }
const styleFormPrcsLightV = { border: '1.4px solid rgb(204, 202, 202)', borderRadius: '9px' }

const styleFormPrcsTextAreaLightV = { color: '#393e46', resize: 'none', backgroundColor: 'transparent', margin: 'auto', width: '100%', fontSize: '17px', overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }
const styleFormPrcsTextAreaDarkV = { color: '#f7f7f7', resize: 'none', backgroundColor: 'transparent', margin: 'auto', width: '100%', fontSize: '17px', overflow: "hidden", wordWrap: "break-word", resize: "none", height: "160px" }

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.wordsPcs = this.tPcsWor.bind(this);
        this.chThemProcsThat = this.chThemProcs.bind(this);
        this.state = { len: '0', words: '0' , TextPcs : ""};
        this.state.themProcs = false
        this.state.styleFormPrcsDark = styleFormPrcsDarkV
        this.state.styleFormPrcsLight = styleFormPrcsLightV
        this.state.styleFormPrcsTextAreaLight = styleFormPrcsTextAreaLightV
        this.state.styleFormPrcsTextAreaDark = styleFormPrcsTextAreaDarkV

        this.state.isStaProcs = false
        // < />
        this.caseXtext = false
        
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
    chThemProcs(x) {
        if (this.state.themProcs === false) {
            this.setState({ themProcs: true })
            themProcs = true
        } else {
            this.setState({ themProcs: false })
            themProcs = false
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
            this.setState({apiTrashAlt : true})
            this.setState({apiTrashAlt : true})
        } else {
            this.setState({apiTrashAlt : false})
            this.setState({apiTrashAlt : false})
        }
        this.setState({ words: wwords });
        this.setState({TextPcs : x.target.value})
    }
    setCo(x, z) {
        if (z === false) {
            cookies.set(x, true, { path: '/' });
        } else {
            cookies.set(x, false, { path: '/' });
        }
    }

    // tols ..
    doApiTrashAlt(){
        if(this.state.apiTrashAlt === true){
            this.setState({TextPcs : ""})
        }
    }

    render() {
        return (
            <div className="MainProcsent infoStartP ar_text">
                <div className="MainProcsentSec">
                    <div className="sectionProcsent">
                        <div className="ffPcs">
                            <label className="llPcs">
                                <div className="titlePcs redeyTextArea">
                                    <div className="inforedeyTextArea"> <FontAwesomeIcon icon={faInfo} className="icInfredeyTextArea" /></div>
                                    <div className="titleTextArea "> أدخل في هذا القسم النص الذي ترغب بمعالجته  . <a href="#"> معرفة المزيد </a> </div>
                                </div>
                                <div className="areaPcc" style={this.state.themProcs ? this.state.styleFormPrcsDark : this.state.styleFormPrcsLight}>
                                    <div className="secOntext">
                                        <div className="toolsMenuAreaPcs">
                                            <div className="tolsMainTextArea">
                                                <div className="apiChoose">
                                                    <FontAwesomeIcon icon={faPaste} className={this.state.apipast ? "apiChose" : "apiunChose"}/>
                                                </div>
                                                <div>
                                                    <FontAwesomeIcon icon={faCopy} className={this.state.apicopy ? "apiChose" : "apiunChose"}/>
                                                </div>
                                                <div onClick={()=> this.doApiTrashAlt() }>
                                                    <FontAwesomeIcon icon={faTrashAlt} className={this.state.apiTrashAlt ? "apiChoseTrashT" : "apiChoseTrash"}/>
                                                </div>
                                            </div>
                                            <div onClick={this.chThemProcsThat}>
                                                {this.state.themProcs ? <FontAwesomeIcon icon={faSun} className="apiMoonFoucs" /> : <FontAwesomeIcon icon={faMoon} className="apiMoon" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textArea">
                                        <TextareaAutosize className="areaPcP"
                                            style={this.state.themProcs ? this.state.styleFormPrcsTextAreaDark : this.state.styleFormPrcsTextAreaLight}
                                            rows="4"
                                            placeholder=" اكتب هنا .."
                                            onChange={this.wordsPcs}
                                            value = {this.state.TextPcs}/>
                                    </div>
                                    <div className="toolsBottomAreaPcs">
                                        <div className="textAreaBottom">
                                            2000 / {this.state.len}
                                        </div>
                                        <div className="textAreaBottomLogo">
                                            Powered by procsent
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <P___rps ccThem={this.state.themProcs} drThem={styleFormPrcsDarkV} liThem={styleFormPrcsLightV} ddrThem={styleFormPrcsTextAreaDarkV} lliThem={styleFormPrcsTextAreaLightV} xtex={this.state.TextPcs} caseXtex={this.state.caseXtex}/>
                    </div>
                </div>
            </div>
        )
    }
}