import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import Switch from 'react-switch'
import * as Icon from 'react-bootstrap-icons'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getEmailSchedulerData} from '../../../redux/actions/email-schedulerAction'
import EmailDisablePeriod from './email-disablePeriodList'

class EmailSchedular extends Component{
    constructor(props){
        super(props)
        this.state ={
            isdntSendEmail: false,
            isScheduledRun: false,
            checked: false,
            message: "No data available",
            rowData: []
        }
    this.handleChange = this.handleChange.bind(this)    
}

onChange =(event) =>{
    this.setState({[event.target.name]: event.target.checked})
}

handleChange =() =>{
        this.setState({checked: true})
}

static getDerivedStateFromProps(nextProps, state){
    if(nextProps.emailSchedulerList !== state.emailSchedulerList){
        return {
            rowData: nextProps.emailSchedulerList      
        };
    }
}    

componentDidMount(){
    this.props.getEmailSchedulerData();

    if(this.props.emailSchedulerList){
    this.setState({rowData: this.props.emailSchedulerList})
    }
} 

render(){
        const {isdntSendEmail, isScheduledRun, message} = this.state
        //console.log('email scheduler data@@@@@', this.state.rowData)
        let schedulerData = []
        let data = this.state.rowData
            data.forEach(value =>{
            schedulerData = value.schedulerTimeList
        })

        return <div>
                  <div><Icon.GearFill /> Scheduling email delivery</div>
                  <hr />
                  <form>
                        <label>
                             <input type="checkbox" name="isdntSendEmail" checked={isdntSendEmail} onChange={this.onChange} />
                                Do not send email on
                        </label>
                        <Table>
                        <thead>
                            <tr>
                                <th>Warehouse <Icon.Filter /></th>
                                <th>From Date & Time - To Date & Time <Icon.Filter /></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {isdntSendEmail ?
                            <EmailDisablePeriod />
                            : message }
                        </Table>  
                    <div>
                        <label>
                             <input type="checkbox" />
                                Run Now
                        </label>
                    </div> 
                    <div>   
                        <label>
                             <input type="checkbox" name="isScheduledRun" checked={isScheduledRun} onChange={this.onChange} />
                                Scheduled Run
                        </label>
                    </div> 
                    <div> 
                        <Table>
                            <thead>
                                <tr>
                                    <th>Date & Time</th>
                                    <th>Email Flag</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {isScheduledRun ?
                            <tbody>
                                {schedulerData.map((values, index) =>{
                               return <tr>
                                         <td>
                                            <input key={index} type="text" name="name" value={values.scheduleTime} />   
                                          </td>
                                    {values.emailFlag === "Y" ? <td>
                                            <Switch className="react-switch" 
                                             checked= {true} 
                                             uncheckedIcon={false}
                                             checkedIcon={false}
                                             offColor="#D6D6D6"
                                             onColor="#7FFF00"
                                             height={20}
                                             width={38} />
                                         </td> :     
                                         <td>
                                            <Switch className="react-switch" 
                                             checked= {false} 
                                             uncheckedIcon={false}
                                             checkedIcon={false}
                                             offColor="#D6D6D6"
                                             onColor="#7FFF00"
                                             height={20}
                                             width={38} />
                                         </td>
                                        }
                                         <td>
                                             <Icon.TrashFill />
                                             <Icon.PlusCircleFill color="red" />
                                         </td>
                                      </tr>     
                                })}
                            </tbody>
                            : message }
                        </Table> 
                    </div>   
                  </form>
               </div>
    }
}

const mapStateToProps = state =>{
    //console.log('email scheduler...', state.emailSchedulerReducer)
    return {
        emailSchedulerList: state.emailSchedulerReducer || []
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        getEmailSchedulerData
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EmailSchedular);
