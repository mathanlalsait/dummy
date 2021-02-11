import React, {Component} from 'react'

export default class PickingTooltip extends Component {
 
render(){
    let {data} = this.props
    let {tlsRangeEnd} = data.tls_last - data.unplan_tls
    
return(
    <div>
        <p>
          <span>LPN{data.lpn}</span>
        </p>
        <p>
          <span>Location </span> {data.location}
        </p>
        <p>
          <span>TLS Range</span> {data.tls_last} - {tlsRangeEnd}
        </p>
        <p>
            <span>Pick Start date</span> {data.pick_start_date}
        </p>
        <p>
            <span>Pick Finish date</span> {data.pick_finish_date}
        </p>
        <p>
            <span>Marshal date</span> {data.marshal_date}
        </p>
        <p>
            <span>Load date</span> {data.load_date}
        </p>
        <p>
            <span>Ship date</span> {data.ship_date}
        </p>
      </div>
    );
}    
}
