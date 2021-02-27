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
        this.state = { len: '0', words: '0', heightList: '100px', removeX: this.checkThat('removeX'), removeNuQu: this.checkThat('removeNuQu'), removeQu: this.checkThat('removeQu'), removeNum: this.checkThat('removeNum'), removeAR: this.checkThat('removeAR'), removeEN: this.checkThat('removeEN'), changetoEN: this.checkThat('changetoEN'), changetoAR: this.checkThat('changetoAR') };
        this.state.themProcs = false
        this.state.styleFormPrcsDark = styleFormPrcsDarkV
        this.state.styleFormPrcsLight = styleFormPrcsLightV
        this.state.styleFormPrcsTextAreaLight = styleFormPrcsTextAreaLightV
        this.state.styleFormPrcsTextAreaDark = styleFormPrcsTextAreaDarkV

        this.state.isStaProcs = false

        // ...

        this.changeTolsVis = this.changevis.bind(this)

        this.styleIconChoose = { color: '#1687a7', marginRight: '6px' }
        this.styleIconChooseTrue = { color: '#383838c4', marginRight: '6px' }

        this.state.isShowMoreOpProcs = false
        this.cShowHide = this.thisShowHide.bind(this)
        this.caseSettingTols = false

        // styleChose

        this.apipast = false
        this.apicopy = false
        this.apiTrashAlt = false

        // < />

        this.xtex = "n"
        this.caseXtext = false
    }

    checkThat(x) {
        if (cookies.get(x) === 'true') {
            return true
        } else {
            return false
        }
    }

    changevis(x) {
        if (this.state.caseSettingTols === true) {
            this.setState({ caseSettingTols: false })
        } else {
            this.setState({ caseSettingTols: true })
        }
    }

    thisShowHide(x) {
        if (this.state.isShowMoreOpProcs === false) {
            this.setState({ isShowMoreOpProcs: true })
            this.setState({ heightList: '100%' })
        } else {
            this.setState({ isShowMoreOpProcs: false })
            this.setState({ heightList: '100px' })
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
        } else {
            this.setState({apiTrashAlt : false})
        }
        this.setState({ xtex: x.target.value })
        this.setState({ words: wwords });
    }
    setCo(x, z) {
        if (z === false) {
            cookies.set(x, true, { path: '/' });
        } else {
            cookies.set(x, false, { path: '/' });
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
                                                <div>
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
                                            onChange={this.wordsPcs} />
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

                        <div className="mainTolsControl">
                            <div className="headerTolsMain">
                                <div className="stolsCONTROL">
                                        خيارات التحكم بمعالجة الكلمات
                                </div>
                                <div className={this.state.caseSettingTols ? "casSett casSettHide" : "casSett casSettShow"} onClick={this.changeTolsVis}>
                                    <FontAwesomeIcon icon={faSlidersH} className="icTolsSett" />
                                </div>
                            </div>
                            <div className="chooseListProcs" style={this.state.caseSettingTols ? { display: 'block' } : { display: 'none' }}>
                                <div style={{ height: this.state.heightList, overflow: 'hidden' }} >
                                    <div className="listProcs">
                                        <div onClick={() => {
                                            this.setCo('removeX', this.state.removeX)
                                            this.state.removeX ? this.setState({ removeX: false }) : this.setState({ removeX: true })
                                        }} className={this.state.removeX ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div> ازالة الفواصل </div> <FontAwesomeIcon icon={this.state.removeX ? faMinus : faPlus} style={this.state.removeX ? this.styleIconChooseTrue : this.styleIconChoose} /> </div>
                                        <div onClick={() => {
                                            this.setCo('removeNuQu', this.state.removeNuQu)
                                            this.state.removeNuQu ? this.setState({ removeNuQu: false }) : this.setState({ removeNuQu: true })
                                        }} className={this.state.removeNuQu ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div>ازالة علامات الترقيم</div><FontAwesomeIcon icon={this.state.removeNuQu ? faMinus : faPlus} style={this.state.removeNuQu ? this.styleIconChooseTrue : this.styleIconChoose} /></div>
                                        <div onClick={() => {
                                            this.setCo('removeQu', this.state.removeQu)
                                            this.state.removeQu ? this.setState({ removeQu: false }) : this.setState({ removeQu: true })
                                        }} className={this.state.removeQu ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}><div> ازالة علامات الاقتباس</div> <FontAwesomeIcon icon={this.state.removeQu ? faMinus : faPlus} style={this.state.removeQu ? this.styleIconChooseTrue : this.styleIconChoose} /></div>
                                        <div onClick={() => {
                                            this.setCo('removeNum', this.state.removeNum)
                                            this.state.removeNum ? this.setState({ removeNum: false }) : this.setState({ removeNum: true })
                                        }} className={this.state.removeNum ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div>ازالة الارقام</div>  <FontAwesomeIcon icon={this.state.removeNum ? faMinus : faPlus} style={this.state.removeNum ? this.styleIconChooseTrue : this.styleIconChoose} /></div>
                                        <div onClick={() => {
                                            this.setCo('removeAR', this.state.removeAR)
                                            this.state.removeAR ? this.setState({ removeAR: false }) : this.setState({ removeAR: true })
                                        }} className={this.state.removeAR ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div>ازالة الاحرف العربية</div>  <FontAwesomeIcon icon={this.state.removeAR ? faMinus : faPlus} style={this.state.removeAR ? this.styleIconChooseTrue : this.styleIconChoose} /></div>
                                        <div onClick={() => {
                                            this.setCo('removeEN', this.state.removeEN)
                                            this.state.removeEN ? this.setState({ removeEN: false }) : this.setState({ removeEN: true })
                                        }} className={this.state.removeEN ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div>ازالة الاحرف الانجليزية</div>  <FontAwesomeIcon icon={this.state.removeEN ? faMinus : faPlus} style={this.state.removeEN ? this.styleIconChooseTrue : this.styleIconChoose} /> </div>
                                        <div onClick={() => {
                                            this.setCo('changetoEN', this.state.changetoEN)
                                            this.state.changetoEN ? this.setState({ changetoEN: false }) : this.setState({ changetoEN: true })
                                        }} className={this.state.changetoEN ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div>تحويل الارقام العربية الى ارقام انجليزية </div> <FontAwesomeIcon icon={this.state.changetoEN ? faMinus : faPlus} style={this.state.changetoEN ? this.styleIconChooseTrue : this.styleIconChoose} /> </div>
                                        <div onClick={() => {
                                            this.setCo('changetoAR', this.state.changetoAR)
                                            this.state.changetoAR ? this.setState({ changetoAR: false }) : this.setState({ changetoAR: true })
                                        }} className={this.state.changetoAR ? "checkBoxLestChooTrue" : "checkBoxLestChoo"}> <div>تحويل الارقام الانجليزية الى ارقام عربية</div> <FontAwesomeIcon icon={this.state.changetoAR ? faMinus : faPlus} style={this.state.changetoAR ? this.styleIconChooseTrue : this.styleIconChoose} /> </div>
                                    </div>
                                </div>
                                <div>
                                    {this.state.isShowMoreOpProcs ? <div className="showHideList" onClick={this.cShowHide}><div> عرض اقل </div><div> <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '16px', marginRight: '15px', color: '#1687a7' }} /> </div></div> : <div className="showHideList" onClick={this.cShowHide}><div > عرض المزيد </div><div> <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: '16px', marginRight: '15px', color: '#1687a7' }} /> </div></div>}
                                </div>
                            </div>
                        </div>

                        <P___rps ccThem={this.state.themProcs} drThem={styleFormPrcsDarkV} liThem={styleFormPrcsLightV} ddrThem={styleFormPrcsTextAreaDarkV} lliThem={styleFormPrcsTextAreaLightV} xtex={this.state.xtex} caseXtex={this.state.caseXtex}/>
                    </div>
                </div>
            </div>
        )
    }
}