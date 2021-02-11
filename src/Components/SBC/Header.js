import React, {Component} from 'react'
import logo from '../../assets/images/logo.png'
import { Calendar } from 'react-bootstrap-icons';

import '../../App.scss'

class SBCHeader extends Component {

getCurrentDate(separator='.'){
    
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let timeStamp = newDate.getHours() + ':' + newDate.getMinutes() + ',' + days[newDate.getDay()]

    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year},${timeStamp}`
    }

render(){
    
    return <div>
        <i className="bi bi-file-earmark-text"></i>
             <header className="app-header"> 
                <div className="left">
                    <img id="logo" className="logo" src={logo} alt="SBC DASHBORD"/>
                        <span>SBC DASHBOARD - SBC </span>
                </div>
            <div className="right">
                 <div className="sbc-row">
                      <span className="mr-15">BLESSED DAY EVERYONE !!!</span>
                            <Calendar />
                            <span className="ml-5">{this.getCurrentDate()}</span>
                 </div>
            <div className="sbc-row">
                <span>Last updated: 11:15:11 on Oct 14, 2020</span>
            </div>
        </div>
      </header> 
    </div>
    }
}

export default SBCHeader;