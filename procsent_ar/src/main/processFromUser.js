import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faLightbulb, faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import SendCommint from '../joint/sendCommint';

export default class ProcessFromUser extends Component {
    constructor(props) {
        super(props);
        this.fontG = "GET"
        this.fontQ = "https://server.procsent.com/pc/procsentArQues"
        this.state = {
            enterEditer: false,
            cancelSendQu: false,
            ccvv: true,
            cannFromU: false,
            perU: 0,
            thisAnsw: 0,
            cqthis: 911,
            dataBasse: [],
            anThis: false,
            aun: {}
        }
        //this.saDay()
    }
    saDay() {
        var hxc = new XMLHttpRequest();
        hxc.open(this.fontG, this.fontQ , true);
        hxc.send();
        hxc.onreadystatechange = () => {
            var edata = JSON.parse(hxc.responseText)
            this.setState({ dataBasse: edata })
        }
    }
    __see_this() {
        try {
            if (this.state.aun.dataCase === true) {
                var nnub = this.state.thisAnsw + 1
                var nnux = this.state.perU + 1
                this.setState({ thisAnsw: nnub })
                this.setState({ anThis: false })
                this.setState({ aun: {} })
                this.setState({ cqthis: 911 })
                this.setState({ perU: nnux })
            } else {
                this.setState({ dataBasse: [] })
            }
        } catch (err) {
            this.setState({ dataBasse: [] })
        }
    }
    cchheecckkInput() {
        if (this.state.anThis === true) {
            return (
                <div className="sendTureST" onClick={() => this.__see_this()}> أرسال </div>
            )
        } else {
            return (
                <div className="sendTure" > أرسال </div>
            )
        }
    }
    ccbb() {
        this.setState({ cqthis: 911 })
        this.setState({ anThis: false })
        this.setState({ aun: {} })
        if (this.state.dataBasse.length === this.state.thisAnsw) {
            this.setState({ cannFromU: true })
        } else if (this.state.dataBasse.length > this.state.thisAnsw) {
            var nnu = this.state.thisAnsw + 1
            this.setState({ thisAnsw: nnu })
        } else {
            console.log("err")
        }
    }
    cchheecckkInputCncel() {
        return (
            <div className="can_elT__re" onClick={() => this.ccbb()}> ألغاء </div>
        )
    }
    iIQq() {
        try {
            var data = this.state.dataBasse
            if (data.length === this.state.thisAnsw) {
                this.setState({ cannFromU: true })
            } else {
                var cvAn = () => {
                    try {
                        if (data[this.state.thisAnsw].another === true) {
                            return true
                        } else {
                            return false
                        }
                    } catch {
                        return false
                    }
                }
                if (data.length > 0) {
                    var t = data[this.state.thisAnsw].nameQuestion
                    var c = data[this.state.thisAnsw].answers
                    var nn = data.length + " / " + (this.state.thisAnsw + 1)
                    return { ssa: true, ssDataAn: t, ssDataT: c, nu: nn, vAn: cvAn(), idQ: data[this.state.thisAnsw].idQ }
                } else {
                    return { ssa: false, ssDataAn: false, ssDataT: false, nu: false, vAn: false }
                }
            }
        } catch {
            return { ssa: false, ssDataAn: false, ssDataT: false, nu: false, vAn: false }
        }
    }
    getThis(n, is) {
        var data = this.state.dataBasse
        this.setState({ cqthis: n })
        this.setState({ anThis: true })
        var nnb = { nameAnswer: data[this.state.thisAnsw].answers[n], idQ: is, dataCase: true }
        this.setState({ aun: nnb })
    }
    cvCss(n) {
        if (n === this.state.cqthis) {
            return "itemDis__chor"
        } else {
            return "itemDis__nor"
        }
    }
    cconn() {
        var data = this.iIQq().ssDataT
        var xc = []
        try {
            if (data.length > 0) {
                for (var t = 0; t < data.length; t++) {
                    const tNew = 0 + t
                    xc.push(<p className={this.cvCss(t)} id={t} key={t + "Qw"} onClick={(t) => { this.getThis(tNew, this.iIQq().idQ) }}><span className="nnQuto">{t + 1}  -  </span>  {data[t]} </p>)
                }
                return xc
            } else {
                return data
            }
        } catch (err) {
            return data
        }
    }
    ssTitle() {
        try {
            if (this.iIQq().ssDataT.length > 0) {
                return true
            } else {
                return false
            }
        } catch (err) {
            return false
        }
    }
    IsQuAsk() {
        try {
            return (
                <div>
                    {this.iIQq().ssa ?
                        <div className="sectionQuAsk">
                            <div className="_sectionQuAskt">
                                <div className="titleQuestions">
                                    <div className="titleQuestionsSd">
                                        {this.iIQq().nu}
                                    </div>
                                    <div className="__titleQuestions">
                                        <div className="titleMainQ">
                                            {this.iIQq().ssDataAn}
                                        </div>
                                        <div className="titleQuestionsSS">
                                            سؤال
                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="_sectionQuAsk">
                                {this.ssTitle() ?
                                    <div>
                                        <div className="ooppAns"> الاجابات المقترحة </div>
                                        <div className="itemDis__l">
                                            {this.cconn()}
                                        </div>
                                        {this.iIQq().vAn ?
                                            <div className="itmeM__l">
                                                <div className="itmeM__Title"> اقترح اجابة </div>
                                                <div className="itmeM__lContainer">
                                                    <input type="text" />
                                                </div>
                                            </div> : " "
                                        }
                                    </div> :
                                    <div>
                                        <div className="ooppAns"> اقترح اجابة </div>
                                        {this.iIQq().vAn ?
                                            <div className="itmeM__l">
                                                <div className="itmeM__Title"> اقترح اجابة </div>
                                                <div className="itmeM__lContainer">
                                                    <input type="text" />
                                                </div>
                                            </div> : <div className="errRed"> [حدث خطء - 230] </div>}
                                    </div>
                                }
                                <div className="contr__los_t__is">
                                    <div className="contr__los_t__is_first">
                                        <div className="cancel_this">
                                            {this.cchheecckkInput()}
                                        </div>
                                        <div className="send_this">
                                            {this.cchheecckkInputCncel()}
                                        </div>
                                    </div>
                                    <div className="contr__los_t__is_rnd">
                                        <SendCommint sec="911" xc={true} />
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="errRed">
                            [حدث خطء - 200911]
                        </div>

                    }
                </div>
            )
        } catch (err) {
            return (
                <div className="errRed">
                    [حدث خطء - 110920]
                </div>
            )
        }
    }
    ccv() {
        if (this.state.perU > 0) {
            setTimeout(() => {
                this.setState({ ccvv: false })
            }, 3000);
            return (
                <>
                    {this.state.ccvv ? <div className="ccv_outPut"> <div>  شكراً لمساهمتك   </div> <div onClick={() => this.setState({ ccvv: false })}> <FontAwesomeIcon icon={faRemoveFormat} /> </div> </div> : ""}
                </>
            )
        } else {
            setTimeout(() => {
                this.setState({ ccvv: false })
            }, 3000);
            return (
                <>
                    {this.state.ccvv ? <div className="ccv_outPut"> <div>  تم الالغاء بنجاح   </div> <div onClick={() => this.setState({ ccvv: false })}> <FontAwesomeIcon icon={faRemoveFormat} /> </div> </div> : ""}
                </>
            )
        }
    }
    render() {
        var nbn = () => {
            try {
                if (this.state.dataBasse.length > 0) {
                    return true
                } else {
                    return false
                }
            } catch (err) {
                return false
            }
        }
        return (
            <>
                {nbn() ?
                    <div>
                        {this.state.cannFromU ? this.ccv() :
                            <div className="NotesInfoPage">
                                <div className={this.state.enterEditer ? "editeSectionsTr " + this.props.className : "editeSections " + this.props.className}>
                                    <div className="sectionsProcss">
                                        {this.state.enterEditer ?
                                            <div className="sectionEditeFromUserF" onClick={() => this.setState({ cannFromU: true })}> ألغاء </div> :
                                            <div className="sectionEditeFromUser" onClick={() => this.setState({ enterEditer: true })}> بدء تعليم الموقع </div>
                                        }
                                    </div>
                                    {this.state.enterEditer ?
                                        <div className="textTUsers"><FontAwesomeIcon icon={faFire} style={{ color: '#eb561b', fontSize: '15px' }} />  &nbsp;   مرحباً بك في قسم تطوير الموقع . &nbsp; <a style={{ fontSize: '14px', color: '#1a73e8', cursor: 'pointer' }} href="#learnWebsite"> أعرف المزيد </a></div> :
                                        <div className="textTUsers"> <FontAwesomeIcon icon={faLightbulb} style={{ color: '#ffd880', fontSize: '15px' }} />  &nbsp; يمكنك المبادرة بتعليم الموقع و المساهمة في تحسينه .</div>
                                    }
                                </div>
                                {this.state.enterEditer ? this.IsQuAsk() : ''}
                            </div>
                        }
                    </div> : ""
                }
            </>
        )
    }
}
