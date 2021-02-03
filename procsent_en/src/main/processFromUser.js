import React, { Component } from 'react'

export default class ProcessFromUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="NotesInfoPage">
                <div className={"editeSections " + this.props.className}>
                    <div className="sectionsProcss">
                        <div className="sectionEditeFromUser">
                            {this.props.learnWeb}
                        </div>
                    </div>
                    <div className="textTUsers">
                   <i className='fas fa-fire' style={{ color: '#eb561b', fontSize: '15px' }}></i> &nbsp;
                        {this.props.messToApper}
                    </div>
                </div>
            </div>
        )
    }
}
