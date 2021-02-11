import React, {Component} from 'react';
import OnSiteTooltip from '../Stillages-Tooltip/onsiteTooltip'
import '../../../App.scss'

export default class OnSiteRowRender extends Component {

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
         {this.state.fieldDisplay[index]===true && <OnSiteTooltip data={obj.stillage}></OnSiteTooltip>}
         </div>
        }
        else{
    return <span>
              <div className= "stillage onsite"  key={index}
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
            {this.state.fieldDisplay[index]===true && <OnSiteTooltip data={obj.stillage}></OnSiteTooltip>}
            </div>
            </span>
            }
        }
          
        )}
            </span>
    }

}