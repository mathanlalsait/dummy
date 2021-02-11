import React, {Component} from 'react'
import {Table, Modal, Button} from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getEmailDataPackage} from 'redux/actions/emailAction'
import SearchBox from './search'
//import DeleteWindow from './delete-window'
var cid;
class EmailList extends Component{
    constructor(props){
        super(props)
        this.state = {
            rowData: [],
            show: false
        }    
}

handleDeleteRow ( ){
let data;
    console.log('bbbbbbb',this.cid)
    let rowData = [... this.state.rowData]
     console.log(rowData[0].users.splice(this.cid,1))
    rowData.splice(this.cid, 1)
    console.log( rowData+"last");

    this.setState({rowData:rowData, show: !this.state.show})
    //this.setState({show: !this.state.show})
}

//Adding row to the email list
    handleAddRow = () => {
        console.log("handle");
        this.setState([...this.state.rowData, { plant: "", track: "" ,warehouse:"",mail:""}]);
      };
      
      

    // var plant = this.state.plant;
    // var track = this.state.track;
    // var warehouse=this.state.warehouse;
    // var mail=this.state.mailId;

    // var elements = this.state.items.slice();
    // elements.push({addRowPlant: plant, addRowTrack: track,addRowWarehouse:warehouse,addRowMail:mail});
    // this.setState({ items: elements, firstName: "", lastName: "" });



    //console.log('values for adding row....', userData)
   
    // var rows = this.state.rowData.users
    // rows.push('new row')
    // this.setState({rows: rows})
    // return <tr>
    //           <td>
    //               <select>
    //                   <option></option>
    //               </select>
    //           </td>
    //           <td>
    //               <select>
    //                   <option></option>
    //               </select>
    //           </td>
    //           <td>
    //               <select>
    //                   <option></option>
    //               </select>
    //           </td>
    //           <td>
    //           <select>
    //                   <option></option>
    //               </select>
    //           </td>
    //       </tr>



// handle input change
 
//Delete record modalwindow
 
handleModal(index){
this.cid=index;
    console.log(cid)
    this.setState({show: !this.state.show})
}

static getDerivedStateFromProps(nextProps, state){
    if(nextProps.emailList !== state.emailList){
        return {
            rowData: nextProps.emailList      
        };
    }
}    

componentDidMount(){
    this.props.getEmailDataPackage();

    if(this.props.emailList){
    this.setState({rowData: this.props.emailList})
    //console.log('rowvaluesfsdfsd', this.setState({rowData: this.props.emailList}))
    }
} 

render(){
     
     let userData =[]
     let data = this.state.rowData 
     console.log('row data.....', data)
     data.forEach((value) => {
     userData  = value.users
     })
     //console.log('user data....', userData)
     const {plantValues, trackValues, warehouseValues} = this.state
     return <div>
              <div><h2>Email List</h2></div>
               <Table>
                   <thead>
                       <tr>
                           <th>Plant <Icon.Filter /></th>
                           <th>Track <Icon.Filter /></th>
                           <th>Warehouse <Icon.Filter /></th>
                           <th>Email Address <Icon.Filter /></th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                   {userData.map((obj, index) =>{

                       return <tr key={index}>
                                <td>
                               <select>
                                    <option value={obj.plant}>{obj.plant}</option>
                               </select>
                                  </td>
                                  <td>
                                      <select>
                                           <option value={obj.track}>{obj.track}</option>
                                      </select>
                                  </td>
                                  <td>
                                      <select>
                                           <option value={obj.warehouse}>{obj.warehouse}</option>
                                      </select>
                                  </td>
                                  <td>
                                      <input key={index} type="email" name="name" value={obj.mailId} />
                                  </td>
                                  <td>
                                      <div className="remove">
                                           <a href="#" onClick={() => this.handleModal(index)}>
                                                      <RiDeleteBin5Line />
                                           </a>
                    <Modal show={this.state.show}
                      onHide={()=> this.handleModal()}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                        <RiDeleteBin5Line />
                              Delete Record
                        </Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <p>Are you sure?</p>
                        <p>Do you really want to delete this record?</p>
                        <p>This process cannot be undone</p>
                    </Modal.Body>
                    
                    <Modal.Footer>
                           <Button variant="outline-danger" onClick={()=> this.handleModal()}>Cancel</Button>
                           <Button variant="danger" onClick={()=> this.handleDeleteRow( )}>Delete</Button>
                    </Modal.Footer>
               </Modal>

                           </div>     
                        </td>                           
                    </tr>
                    })
                }
                 <div onClick={() => this.handleAddRow()}>    
                     <Icon.PlusCircleFill color="red" />
                     
                </div> 

                
            </tbody>
        </Table>
    </div>
  }    
}

const mapStateToProps = state =>{
    console.log('email reducers....', state.emailReducer)
    return {
        emailList: state.emailReducer || []
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
       getEmailDataPackage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);