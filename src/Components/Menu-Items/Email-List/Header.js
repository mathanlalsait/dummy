import React, {Component} from 'react'
import logo from '../../../assets/images/logo.png'
import * as Icon from 'react-bootstrap-icons';

import '../../../App.scss'

class Header extends Component {

render(){
    
    return <div>
        <i className="bi bi-file-earmark-text"></i>
             <header className="app-header"> 
                <div className="left">
                    <img id="logo" className="logo" src={logo} alt="EMAIL DASHBORD"/>
                        <span>SEQUENCE BUFFER CALCULATOR </span>
                </div>
            <div className="right">
                 <div className="sbc-row">
                      <span className="mr-15"></span>
                            <Icon.BellFill />
                            <span className="ml-5"></span>
                 </div>
            <div className="sbc-row">
                <span>Last updated: 11:15:11 on Oct 14, 2020</span>
            </div>
        </div>
      </header> 
    </div>
    }
}

export default Header;