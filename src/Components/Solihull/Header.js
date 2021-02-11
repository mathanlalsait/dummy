import React, {Component} from 'react'
import logo from '../../assets/images/logo.png'
import { Calendar } from 'react-bootstrap-icons';
import '../../App.scss'

class SolihullHeader extends Component {

    render(){

        return <div>
                 <header className="app-header"> 
                <div className="left">
                    <img id="logo" className="logo" src={logo} alt="SOLIHULL"/>
                        <span>SOLIHULL</span>
                </div>
            <div className="right">
                 <div className="sbc-row">
                      <span className="mr-15">BLESSED DAY EVERYONE !!!</span>
                            <Calendar />
                      <span className="ml-5">14.10.2020, 11:16, Wed</span>
                 </div>
            <div className="sbc-row">
                <span>Last updated: 11:15:11 on Oct 14, 2020</span>
            </div>
        </div>
      </header> 
              </div>
    }
}

export default SolihullHeader;