import React, {Component} from 'react';
import AtSupplierTooltip from '../Stillages-Tooltip/atSupplierTooltip'
import '../../../App.scss'

export default class AtSupplierRowRender extends Component {

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
         {this.state.fieldDisplay[index]===true && <AtSupplierTooltip data={obj.stillage}></AtSupplierTooltip>}
         </div>
        }
        else{
    return <span>
              <div className= "stillage atsupplier"  key={index}
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
            {this.state.fieldDisplay[index]===true && <AtSupplierTooltip data={obj.stillage}></AtSupplierTooltip>}
            </div>
            </span>
            }
        }
          
        )}
            </span>
    }

}