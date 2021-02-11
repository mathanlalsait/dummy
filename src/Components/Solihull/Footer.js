import React, {Component} from 'react'
import '../../App.scss'

class SolihullFooter extends Component {

    constructor(props){
        super(props)
        this.state ={
            isLoading: false
        }
    }

    render(){

        return(
            <div className="footer-container">
                <div className="block">
                    <div className="key-items">
                           <span className= "key-item shipped">Shipped</span>
                           <span className= "key-item onsite">Onsite</span>
                           <span className= "key-item missing">Missing</span>
                           <span className= "key-item atsupplier">Atsupplier</span>
                           <span className= "key-item notrequired">Notrequired</span>
                    </div>
                </div>
                <div className="block refresh-block">
                     <span>Loading Dataset. Please Wait…</span>
                </div>
            </div>    
        )
    }
}

export default SolihullFooter;
