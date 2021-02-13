import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faFire}style={{ color: '#eb561b', fontSize: '15px' }} /> &nbsp;
                        {this.props.messToApper}
                    </div>
                </div>
            </div>
        )
    }
}
