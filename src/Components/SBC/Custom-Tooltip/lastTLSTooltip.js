import React, {Component} from 'react'
import './style.css'


export default class LastTLSTooltip extends Component {

    getReactContainerClasses() {
        return ['custom-tooltip'];
      }

render(){
    
    const data = this.props.api.getDisplayedRowAtIndex(this.props.rowIndex).data;
    //console.log('last tls value----', this.props.api.getDisplayedRowAtIndex(this.props.rowIndex))

return (
    <div className="custom-tooltip">
      <p>
        <span>{data.last_tls_hover}</span>
      </p>
    </div>
  );
}    
}