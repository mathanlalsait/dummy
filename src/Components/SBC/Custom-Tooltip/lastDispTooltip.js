import React, {Component} from 'react'
import './style.css'

export default class LastDispTooltip extends Component {

    getReactContainerClasses(){
        return ['custom-tooltip']
    }

    render(){

        const data = this.props.api.getDisplayedRowAtIndex(this.props.rowIndex).data

        return(
            <div>
                <span>{data.last_disp_hover}</span>
            </div>
        );
    }
}
