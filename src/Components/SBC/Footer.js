import React, {Component} from 'react'
import '../../App.scss'

class SBCFooter extends Component {
  
    render(){
            
        return(
            <div className="footer-container">
                <div className="block">
                    <div className="key-items">
                        <span className= "key-item unplanned">Unplanned</span>
                        <span className= "key-item planned">Planned</span>
                        <span className= "key-item picking"> Picking</span>
                        <span className= "key-item picked">Picked</span>
                        <span className= "key-item staged">Staged</span>
                        <span className= "key-item loaded">Loaded</span>
                        <span className= "key-item dispatched">Dispatched</span>
                    </div>
                </div>
                <div className="block refresh-block">
                     <span>Loading Dataset. Please Wait…</span>
                </div>
            </div>
        )
    }
}

export default SBCFooter;