import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons';

export default class ProcessFromUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enterEditer: false,
            dataBasse: [
                { nameQuestion: ' مرادف كلمة ذكاء ؟ ', answers: [' مجرات ', ' انسان ', ' كوكب '], another: '', idQ: 'dWc243df' }
            ]
        }
    }
    render() {
        return (
            <>
            <div className="NotesInfoPage">
                <div className={"editeSections " + this.props.className}>
                    <div className="sectionsProcss">
                        <div className="sectionEditeFromUser">
                            <div onClick={() => this.setState({enterEditer : !this.state.enterEditer})}>{this.props.learnWeb}</div>
                        </div>
                    </div>
                    <div className="textTUsers">
                        <FontAwesomeIcon icon={faFire} style={{ color: '#eb561b', fontSize: '15px' }} /> &nbsp;
                        {this.props.messToApper}
                    </div>
                </div>
            {this.state.enterEditer ? <IsQuAsk /> : ''}
            </div>
            </>
        )
        function IsQuAsk(s) {
            function br(x) {
                return {ssDataAn : "  answers  " , ssDataT : " title "}
            }
            return (
                <div className="sectionQuAsk">
                    <div className="_sectionQuAsk">
                        <div className="titleQuestions">
                            assadsas
                        </div>
                    </div>
                    <div className="_sectionQuAsk">
                        asdasd
                    </div>
                </div>
            )
        }
    }
}
