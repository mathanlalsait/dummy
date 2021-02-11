import React, {Component} from 'react';
import ShippedTooltip from '../Stillages-Tooltip/shippedTooltip'
import '../../../App.scss'

export default class DispatchedRowRender extends Component {

    constructor(props){
        super(props);
        this.state ={
           fieldDisplay:{}
        }
     }
   
render(){
    return <span>{this.props.value.map((obj,index) =>{
        if(obj.stillage.error === "ERROR"){
            return <div className= "stillage error"
            style={{height:"10px", width:"12px", marginRight:"2px"}}
         onMouseOver={() =>{
            
             let fieldDisplay =this.state.fieldDisplay;
             fieldDisplay[index] = true;
             this.setState({fieldDisplay:fieldDisplay});  
  }}
         onMouseOut={() =>{
              
             let fieldDisplay =this.state.fieldDisplay;
             fieldDisplay[index] = false;
             this.setState({fieldDisplay:fieldDisplay});
 }}
   >
         {this.state.fieldDisplay[index]===true && <ShippedTooltip data={obj.stillage}></ShippedTooltip>}
         </div>
        }
        else{
    return <span>
              <div className= "stillage shipped"  key={index}
               style={{height:"10px", width:"12px", marginRight:"2px"}}
            onMouseOver={() =>{
               
                let fieldDisplay =this.state.fieldDisplay;
                fieldDisplay[index] = true;
                this.setState({fieldDisplay:fieldDisplay});  
     }}
            onMouseOut={() =>{
                 
                let fieldDisplay =this.state.fieldDisplay;
                fieldDisplay[index] = false;
                this.setState({fieldDisplay:fieldDisplay});
    }}
      >
            {this.state.fieldDisplay[index]===true && <ShippedTooltip data={obj.stillage}></ShippedTooltip>}
            </div>
            </span>
            }
        }
          
        )}
            </span>
    }

}