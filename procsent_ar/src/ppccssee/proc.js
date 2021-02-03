import React, { Component } from 'react'
import { useState } from 'react'

export default class Proc extends Component {
    constructor(props) {
        super(props);
        this.wordsPcs = this.tPcsWor.bind(this);
        this.state = { len: '0', words: '0' };
    }

    tPcsWor(x) {
        this.setState({ len: x.target.value.length });
        var words = x.target.value.split(" ")
        var wwords = words.length
        if (x.target.value.length < 3) {
            wwords = words.length - 1
        }
        var wowords = x.target.value.replace(/[^\x00-\x7F]/g, "").replace(/[0-9]/g, '')
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
                        <div className="areaPcc">
                            <div className="toolsMenuAreaPcs">

                            </div>
                            <textarea className="areaPcP"
                                style={{
                                    color: '#393e46',
                                    resize: 'none',
                                    backgroundColor: 'transparent',
                                    margin: 'auto',
                                    width: '100%',
                                    fontSize: '17px'

                                }}
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