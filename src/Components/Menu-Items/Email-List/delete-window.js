import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

class DeleteWindow extends Component{
    constructor(){
        super()
        this.state ={
            show: false
        }
    }
handleModal(){
    this.setState({show: !this.state.show})
}
    
render(){

        return <Modal show={this.state.show}
                      onHide={()=> this.handleModal()}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                              Delete Record
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure?</p>
                        <p>Do you really want to delete this record?</p>
                        <p>This process cannot be undone</p>
                    </Modal.Body>
                    <Modal.Footer>
                           <Button variant="secondary" onClick={()=> this.handleModal()}>Cancel</Button>
                           <Button variant="primary">Delete</Button>
                    </Modal.Footer>
               </Modal>
        }
}
export default DeleteWindow;
