import React, {Component} from 'react'
import './style.css'


export default class LastPickedTooltip extends Component {

    getReactContainerClasses(){
        return['custom-tooltip'];
    }

    render(){

        const data = this.props.api.getDisplayedRowAtIndex(this.props.rowIndex).data

        return (<div className= "custom-tooltip">
                  <span>{data.last_picked_hover}</span>
               </div>
        );
    }
}