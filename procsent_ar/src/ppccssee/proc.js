import React, { Component } from 'react'
import { useState } from 'react'

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.wordsPcs = this.tPcsWor.bind(this);
        this.chThemProcsThat = this.chThemProcs.bind(this);
        this.state = { len: '0', words: '0' };
        this.state.themProcs = false
        this.state.styleFormPrcsDark = { backgroundColor : '#02101f', color : '#eee',border: '1.4px solid rgb(204, 202, 202)',paddingTop: '5px',paddingBottom: '10px',padding:' 10px',borderRadius: '9px' }
        this.state.styleFormPrcsLight = { border: '1.4px solid rgb(204, 202, 202)',paddingTop: '5px',paddingBottom: '10px',padding:' 10px',borderRadius: '9px' }
        this.state.styleFormPrcsTextAreaLight = {color: '#393e46',resize: 'none',backgroundColor: 'transparent',margin: 'auto',width: '100%',fontSize: '17px'}
        this.state.styleFormPrcsTextAreaDark = {color: '#f7f7f7',resize: 'none',backgroundColor: 'transparent',margin: 'auto',width: '100%',fontSize: '17px'}
    }
    
    chThemProcs(x){
        if(this.state.themProcs == false){
            this.setState({themProcs : true })
        } else {
            this.setState({themProcs : false})
        }
        
    }

    tPcsWor(x) {
        this.setState({ len: x.target.value.length });
        var words = x.target.value.split(" ")
        var wwords = words.length
        if (x.target.value.length < 3) {
            wwords = words.length - 1
        }
        var wowords = x.target.value.replace(/\d+||\s+||\s+$/g,'')
        var woword = wowords.split(" ")
        for (var w = 0; w < woword.length; w++) {
            if (woword[w] < 1) {
                wwords = wwords - 1
            } 
        }
        if(wwords == -1){
            wwords = wwords + 1
        }

        this.setState({ words: wwords });
    }

    render() {
        return (
            <div className="sectionProcsent">
                <div className="ffPcs">
                    <label className="llPcs">
                        <div className="areaPcc" style={this.state.themProcs ? this.state.styleFormPrcsDark : this.state.styleFormPrcsLight}>
                            <div className="toolsMenuAreaPcs">
                                <div>
                                    تحضير النص
                                </div>
                                <div onClick={this.chThemProcsThat}>
                                    {this.state.themProcs ? <i class="fas fa-sun" style={{ color: ' rgb(223, 180, 39)', fontSize: '17px' ,transition: '0.4s' }}></i> : <i class="fas fa-moon" style={{ color: ' #1687a7', fontSize: '17px' ,transition: '0.4s' }}></i>}
                                </div>
                            </div>
                            <textarea className="areaPcP"
                                style={this.state.themProcs ? this.state.styleFormPrcsTextAreaDark: this.state.styleFormPrcsTextAreaLight}
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
            </div>
        )
    }
}