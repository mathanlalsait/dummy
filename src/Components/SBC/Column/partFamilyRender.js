import React, {Component} from 'react'
import {Modal, Table} from 'react-bootstrap'

import PLANNED_CIRCLE from 'assets/images/planned_circle.svg'
import PICKING_CIRCLE from 'assets/images/picking_circle.svg'
import PICKED_CIRCLE from 'assets/images/picked_circle.svg'
import STAGED_CIRCLE from 'assets/images/staged_circle.svg'
import DISPATCHED_CIRCLE from 'assets/images/dispatched_circle.svg'
import ERROR_CIRCLE from 'assets/images/error_with_circle.svg'
import './modalWindow.scss'

var style ={
    height: "50px", 
    width: "20px"
}

class PartFamilyRender extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            show: false
        }
    }

handleModal(){
    this.setState({show: !this.state.show})
}

rowValues =(data) =>{
       //data.stillagesArray.forEach((values,index) =>{
        return <tbody>
            <tr>
                <td>BAT6588801</td>
                <td>L100413332082</td>
                <td>9032 - 9051</td>
                <td><img src={DISPATCHED_CIRCLE} style={style} alt= "dispatched" />Dispatched</td>
                <td></td>
              </tr>
              <tr>
              <td>BAT6588900</td>
              <td>L100413332137</td>
              <td>9052 - 9071</td>
              <td><img src={PICKING_CIRCLE} style={style} alt= "picking" />Picking</td>
              <td><img src={ERROR_CIRCLE} style={style} alt= "error" /></td>
            </tr>
            <tr>
            <td>BAT6589038</td>
            <td>L100413332349</td>
            <td>9072 - 9091</td>
            <td><img src={PICKED_CIRCLE} style={style} alt= "picked" />Picked</td>
            <td></td>
          </tr>
          <tr>
          <td>BAT6589148</td>
          <td>L100413332535</td>
          <td>9092 - 9111</td>
          <td><img src={PLANNED_CIRCLE} style={style} alt= "planned" />Planned</td>
          <td></td>
        </tr>
        <tr>
        <td>BAT6589364</td>
        <td>L100413333594</td>
        <td>9132 - 9151</td>
        <td><img src={STAGED_CIRCLE} style={style} alt= "staged" />Staged</td>
        <td><img src={ERROR_CIRCLE} style={style} alt= "error" /></td>
      </tr>  
      </tbody>          
}

render(){
        //console.log('part family....', this.props)
        let data = this.props.data

    return <div>     
          <a href="#" onClick={()=>{this.handleModal()}}>{data.part_family}</a>
          <Modal show={this.state.show} 
                 onHide={()=>{this.handleModal()}}
                 size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
                 >
                  <Modal.Header closeButton>
                      <Modal.Title>
                          Part Family Deails
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <span>
                          <div>Commodity: Ait Filter</div>
                          <div>Part Family: 1</div>
                      </span>
                      <Table striped hover>
                         <thead>
                             <tr>
                                 <th>Batch</th>
                                 <th>LPN Number</th>
                                 <th>TLS Range</th>
                                 <th>Status</th>
                                 <th>Error</th>
                             </tr>
                             </thead> 
                             {this.rowValues(data)}
                      </Table>
                  </Modal.Body>
              </Modal>
       </div> 
    }
}
export default PartFamilyRender;

