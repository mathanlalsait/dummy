import React, {Component} from 'react'

import * as Icon from 'react-bootstrap-icons'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getEmailDisablePeriod} from '../../../redux/actions/email-disablePeriodAction'

class EmailDisablePeriod extends Component{
    constructor(props){
        super(props)
        this.state ={
            rowData: []
        } 
}

static getDerivedStateFromProps(nextProps, state){
    if(nextProps.emailDisablePeriodList !== state.emailDisablePeriodList){
        return {
            rowData: nextProps.emailDisablePeriodList      
        };
    }
}    

componentDidMount(){
    this.props.getEmailDisablePeriod();

    if(this.props.emailDisablePeriodList){
    this.setState({rowData: this.props.emailDisablePeriodList})
    }
} 

render(){
        
        console.log('email disable data@@@@@', this.state.rowData)
        let disablePeriodData = []
        let data = this.state.rowData
            data.forEach(value =>{
            disablePeriodData = value.disablePeriodList
        })

        return <tbody>
                  {disablePeriodData.map((values, index) => {
                   let dateValue = values.disableFromDate + '-' + values.disableToDate   
        return <tr key={index}>
                    <td>
                        <select>
                            <option key={index} value={values.warehouse}>{values.warehouse}</option>
                        </select>
                    </td>
                    <td>
                        <input type="input" name="name" value={dateValue}/>
                        
                    </td>
                    <td>
                        <Icon.TrashFill />
                        <Icon.PlusCircleFill color="red" />
                    </td>
               </tr>
                })} 
            </tbody>
   }
}

const mapStateToProps = state =>{
    console.log('email disable...', state.emailDisablePeriodReducer)
    return {
        emailDisablePeriodList: state.emailDisablePeriodReducer || []
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        getEmailDisablePeriod
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(EmailDisablePeriod);
