import React, { Component } from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faArrowDown, faArrowUp, faMinus, faMoon, faPlus, faSun} from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

var themProcs = false;

const styleFormPrcsDarkV = { backgroundColor: '#02101f', color: '#eee', border: '1.4px solid rgb(204, 202, 202)', paddingTop: '5px', paddingBottom: '10px', padding: ' 10px', borderRadius: '9px' }
const styleFormPrcsLightV = { border: '1.4px solid rgb(204, 202, 202)', paddingTop: '5px', paddingBottom: '10px', padding: ' 10px', borderRadius: '9px' }
const styleFormPrcsTextAreaLightV = { color: '#393e46', resize: 'none', backgroundColor: 'transparent', margin: 'auto', width: '100%', fontSize: '17px' }
const styleFormPrcsTextAreaDarkV = { color: '#f7f7f7', resize: 'none', backgroundColor: 'transparent', margin: 'auto', width: '100%', fontSize: '17px' }

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.wordsPcs = this.tPcsWor.bind(this);
        this.chThemProcsThat = this.chThemProcs.bind(this);
        this.state = { len: '0', words: '0' , heightList : '100px', removeX : this.checkThat('removeX') , removeNuQu : this.checkThat('removeNuQu') , removeQu : this.checkThat('removeQu') , removeNum : this.checkThat('removeNum')   , removeAR : this.checkThat('removeAR')  , removeEN : this.checkThat('removeEN'), changetoEN : this.checkThat('changetoEN')  , changetoAR :  this.checkThat('changetoAR')};
        this.state.themProcs = false
        this.state.styleFormPrcsDark = styleFormPrcsDarkV
        this.state.styleFormPrcsLight = styleFormPrcsLightV
        this.state.styleFormPrcsTextAreaLight = styleFormPrcsTextAreaLightV
        this.state.styleFormPrcsTextAreaDark = styleFormPrcsTextAreaDarkV

        this.state.isStaProcs = false

        // ...
        this.styleIconChoose = { color : '#1687a7', marginRight : '6px' }
        this.styleIconChooseTrue = { color : '#383838c4', marginRight : '6px' }

        this.state.isShowMoreOpProcs = false
        this.cShowHide = this.thisShowHide.bind(this)
    }

    checkThat(x){
        if(cookies.get(x) === 'true'){
            return true
        } else {
            return false
        }
    }

    thisShowHide(x){
        if( this.state.isShowMoreOpProcs === false){
            this.setState({ isShowMoreOpProcs : true })
            this.setState({ heightList : '100%' })
        }else {
            this.setState({ isShowMoreOpProcs : false })
            this.setState({ heightList : '100px' })
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

        this.setState({ words: wwords });

        // ....
        if(x.target.value.length < 3){
            if(this.state.isStaProcs === true){
                this.setState({ isStaProcs: false })
            }
        } else {
            if(this.state.isStaProcs === false){
                this.setState({ isStaProcs: true })
            }
        }
    }
    setCo(x,z){
        if(z === false){
            cookies.set(x, true, { path: '/'});
        } else {
            cookies.set(x, false, { path: '/'});
        }
    }

    render() {
        return (
            <div className="MainProcsent infoStartP ar_text">
                <div className="MainProcsentSec">
                    <div className="sectionProcsent">
                        <div className="ffPcs">
                            <label className="llPcs">
                                <div className="areaPcc" style={this.state.themProcs ? this.state.styleFormPrcsDark : this.state.styleFormPrcsLight}>
                                    <div className="toolsMenuAreaPcs">
                                        <div>تحضير النص</div>

                                        <div onClick={this.chThemProcsThat}>
                                            {this.state.themProcs ? <FontAwesomeIcon icon={faSun} style={{ color: ' rgb(223, 180, 39)', fontSize: '17px', transition: '0.4s' }} /> : <FontAwesomeIcon icon={faMoon} style={{ color: ' #1687a7', fontSize: '17px', transition: '0.4s' }} />}
                                        </div>
                                    </div>
                                    <textarea className="areaPcP"
                                        style={this.state.themProcs ? this.state.styleFormPrcsTextAreaDark : this.state.styleFormPrcsTextAreaLight}
                                        rows="10"
                                        placeholder=" اكتب هنا .."
                                        onChange={this.wordsPcs}>
                                    </textarea>
                                    <div className="toolsBottomAreaPcs">
                                        <div className="textAreaBottom">
                                            عدد الاحرف : {this.state.len}
                                        </div>
                                        <div className="textAreaBottom">
                                            عدد الكلمات : {this.state.words}
                                        </div>
                                    </div>
                                </div>
                                <span className="titlePcs"> Procsent </span>
                            </label>
                        </div>

                        <div className="chooseListProcs">
                            <div className="titleNameList">
                                خيارات معالجة الكلمات
                            </div>
                            <div style={{height : this.state.heightList, overflow : 'hidden'}} >
                            <div className="listProcs">
                                <div onClick={()=> {
                                    this.setCo('removeX', this.state.removeX)
                                    this.state.removeX ? this.setState({removeX : false }) : this.setState({removeX : true })}} className={this.state.removeX ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div> ازالة الفواصل </div> <FontAwesomeIcon icon={this.state.removeX ? faMinus : faPlus} style={this.state.removeX ? this.styleIconChooseTrue : this.styleIconChoose}/> </div>
                                <div onClick={()=> {
                                    this.setCo('removeNuQu', this.state.removeNuQu)
                                    this.state.removeNuQu  ? this.setState({removeNuQu : false }): this.setState({removeNuQu : true })}} className={this.state.removeNuQu ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div>ازالة علامات الترقيم</div><FontAwesomeIcon icon={this.state.removeNuQu? faMinus : faPlus}  style={this.state.removeNuQu? this.styleIconChooseTrue  :this.styleIconChoose}/></div>
                                <div onClick={()=>{ 
                                    this.setCo('removeQu', this.state.removeQu)
                                    this.state.removeQu ? this.setState({removeQu : false }): this.setState({removeQu : true })}} className={this.state.removeQu ? "checkBoxLestChooTrue":"checkBoxLestChoo"}><div> ازالة علامات الاقتباس</div> <FontAwesomeIcon icon={ this.state.removeQu ? faMinus : faPlus}  style={this.state.removeQu ? this.styleIconChooseTrue  :this.styleIconChoose}/></div>
                                <div onClick={()=>{ 
                                    this.setCo('removeNum', this.state.removeNum)
                                    this.state.removeNum ? this.setState({removeNum : false }): this.setState({removeNum : true })}}  className={this.state.removeNum ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div>ازالة الارقام</div>  <FontAwesomeIcon icon={this.state.removeNum? faMinus : faPlus}  style={this.state.removeNum? this.styleIconChooseTrue :this.styleIconChoose}/></div>
                                <div onClick={()=> {
                                    this.setCo('removeAR',this.state.removeAR)
                                    this.state.removeAR ? this.setState({removeAR : false }): this.setState({removeAR : true })}}  className={this.state.removeAR ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div>ازالة الاحرف العربية</div>  <FontAwesomeIcon icon={this.state.removeAR? faMinus : faPlus}  style={this.state.removeAR? this.styleIconChooseTrue : this.styleIconChoose}/></div>
                                <div onClick={()=> {
                                    this.setCo('removeEN',this.state.removeEN )
                                    this.state.removeEN ? this.setState({removeEN: false }): this.setState({removeEN : true })}}  className={this.state.removeEN ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div>ازالة الاحرف الانجليزية</div>  <FontAwesomeIcon icon={this.state.removeEN? faMinus : faPlus}  style={this.state.removeEN? this.styleIconChooseTrue:this.styleIconChoose}/> </div>
                                <div onClick={()=>{
                                    this.setCo('changetoEN',this.state.changetoEN )
                                    this.state.changetoEN ? this.setState({changetoEN : false }): this.setState({changetoEN : true })}}  className={this.state.changetoEN ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div>تحويل الارقام العربية الى ارقام انجليزية </div> <FontAwesomeIcon icon={this.state.changetoEN? faMinus : faPlus}  style={this.state.changetoEN? this.styleIconChooseTrue:this.styleIconChoose}/> </div>
                                <div onClick={()=> {
                                    this.setCo('changetoAR',this.state.changetoAR )
                                    this.state.changetoAR ? this.setState({changetoAR : false }): this.setState({changetoAR : true })}}  className={this.state.changetoAR ? "checkBoxLestChooTrue":"checkBoxLestChoo"}> <div>تحويل الارقام الانجليزية الى ارقام عربية</div> <FontAwesomeIcon icon={this.state.changetoAR? faMinus : faPlus}  style={this.state.changetoAR? this.styleIconChooseTrue : this.styleIconChoose}/> </div>
                            </div>
                            </div>
                            <div>
                                { this.state.isShowMoreOpProcs ? <div className="showHideList"  onClick={this.cShowHide}><div> عرض اقل </div><div> <FontAwesomeIcon icon={faArrowUp}  style= {{fontSize: '16px' , marginRight : '15px' , color : '#1687a7'}}/> </div></div> : <div className="showHideList" onClick={this.cShowHide}><div > عرض المزيد </div><div> <FontAwesomeIcon icon={faArrowDown}  style= {{fontSize: '16px' , marginRight : '15px', color : '#1687a7'}}/> </div></div>}
                            </div>
                        </div>
                        {this.state.isStaProcs ?  <IsStaProcs case = {true}/> : <IsStaProcs case = {false}/>}
                        <TextAfProc />
                    </div>
                </div>
            </div>
        )

        function IsStaProcs(x) {
            if(x.case === true){
                return (
                    <div className="containerStartdProcs" style={{ backgroundColor : '#1687a7' , color : '#eee' }}>
                        <div>
                            بدء المعالجة
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAngleDoubleLeft}  style= {{fontSize: '20px' , marginRight : '15px'}} />
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="containerStartdProcs" style={{ backgroundColor : '#1688a72f' , color : '#eee' }}>
                        <div>
                            بدء المعالجة
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faAngleDoubleLeft}  style= {{fontSize: '20px' , marginRight : '15px'}} />
                        </div>
                    </div>
                )
            }
        }

        function TextAfProc() {
            const [themP, setthemP] = useState(themProcs)
            return (
                <div className="ffPcsSec" style={{paddingTop : '20px'}}>
                    <label className="llPcsSec">
                        <div className="titlePcsSec" > النص بعد التعديل و المعالجة </div>
                        <div className="areaPccSec" style={themP ? styleFormPrcsDarkV : styleFormPrcsLightV}>
                            <div className="toolsMenuAreaPcs">
                                <div className="optionTolsJs" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ paddingLeft: '10px', paddingRight: '5px', border: '0', borderLeft: '1.5px solid  #38383867' }}>
                                        نسخ
                                   </div>
                                    <div style={{ paddingLeft: '5px', paddingRight: '10px', }}>
                                        مسح
                                   </div>
                                </div>
                                <div >

                                </div>
                            </div>
                            <textarea className="areaPcP"
                                style={themP ? styleFormPrcsTextAreaDarkV : styleFormPrcsTextAreaLightV}
                                rows="10"
                                placeholder="  "
                            >
                            </textarea>
                            <div className="toolsBottomAreaPcsSec">
                                <div className="textAreaBottom">
                                    عدد الاحرف :
                                </div>
                                <div className="textAreaBottomSec">
                                    عدد الكلمات :
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            )
        }
    }
}
