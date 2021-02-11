import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

import 'Components/SBC/Stillages/Stillage/stillage.scss'

export default class StillageRenderer extends Component {
  constructor(props){
    super(props)
    this.state ={
      showModal: false
      }
  }

  popoverValues =(obj)=>{
    return <span>
           <div>
              <p>
                LPN: {obj.lpn}
              </p>
              <p>
                Location: {obj.location}
              </p>
              <p>
                TLS Range: {obj.tls_first}-{obj.tls_last}
              </p>
              <p>
                Pick Start date: {obj.pick_state_date}
              </p>
              <p>
                Pick Finish date: {obj.pick_finish_date}
              </p>
              <p>
                Marshal date: {obj.marshal_date}
              </p>
              <p>
                Load date: {obj.load_date}
              </p>
              <p>
                Ship date: {obj.ship_date}
              </p>
          </div>    
      </span>
  }

  popover = (obj) =>{
         if(obj.status === "Unplanned"){
          return <div>{obj.status}</div>
         }  
         else if(obj.status === "Planned"){
          return <div>{obj.status}</div>
         }  
         else if(obj.status === "Picking"){
          return <div>{obj.status}</div>
         }
         else if(obj.status === "Picked"){
          return <div>{obj.status}</div>
         }
         else if(obj.status === "Staged"){
          return <div>{obj.status}</div>
         }
         else if(obj.status === "Loaded"){
          return <div>{obj.status}</div>
         }
         else if(obj.status === "Dispatched"){
          return <div>{obj.status}</div>
         }
  }

  handleChange = () =>{
      this.setState({showModal:!this.state.showModal})
  }
    
  render() {
  
    if (
      !this.props.data.stillagesArray ||
      (this.props.data.stillagesArray && this.props.data.stillagesArray.length === 0)
    ) {
      return <div></div>;
    }
    return (
      <div className="stillage-container">
        {this.props.data.stillagesArray.map((obj, index) => {
          return (
            <div>
            <OverlayTrigger 
              trigger="click" 
              placement="bottom"
              rootClose={true}
              overlay={
                <Popover id="popover-basic">
                <Popover.Title as="h3">{this.popover(obj)}
                </Popover.Title>
                <Popover.Content>
                        {this.popoverValues(obj)}
                </Popover.Content>
                </Popover>     
              }
            > 
              <div className={"stillage " + obj.status}></div>
            </OverlayTrigger>
            </div>
          );
        })}
      </div>
    );
  }
}
