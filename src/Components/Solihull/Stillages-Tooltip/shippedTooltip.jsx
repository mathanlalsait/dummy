import React, {Component} from 'react'

export default class ShippedTooltip extends Component {
 
render(){
    let {data} = this.props
    let {tlsRangeEnd} = data.FirstTLS - data.LastTLS
    
return(
    <div>
        <p>
          <span>LPN:{data.LPN}</span>
        </p>
        <p>
          <span>Status:</span> {data.Status}
        </p>
        <p>
          <span>TLS Range:</span> {data.FirstTLS} - {tlsRangeEnd}
        </p>
        <p>
            <span>Loaded At:</span> {data.LoadedAt}
        </p>
        <p>
            <span>Departed At:</span> {data.ShippedAt}
        </p>
        <p>
            <span>Trailer ID:</span> {data.TrailerID}
        </p>
        <p>
            <span>Haulier:</span> {data.Haulier}
        </p>
        <p>
            <span>On Site At:</span> {data.OnSiteAt}
        </p>
        <p>
            <span>Receipt Number:</span> {data.ReceiptNo}
        </p>
      </div>
    );
}    
}
