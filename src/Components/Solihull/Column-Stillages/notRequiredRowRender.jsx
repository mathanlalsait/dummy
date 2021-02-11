import React, {Component} from 'react';
import NotRequiredTooltip from '../Stillages-Tooltip/notRequiredTolltip'
import '../../../App.scss'

export default class NotRequiredRowRender extends Component {

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
         {this.state.fieldDisplay[index]===true && <NotRequiredTooltip data={obj.stillage}></NotRequiredTooltip>}
         </div>
        }
        else{
    return <span>
              <div className= "stillage NotRequired"  key={index}
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
            {this.state.fieldDisplay[index]===true && <NotRequiredTooltip data={obj.stillage}></NotRequiredTooltip>}
            </div>
            </span>
            }
        }
          
        )}
            </span>
    }

}