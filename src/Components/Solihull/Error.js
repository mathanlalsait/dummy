import React, {Component} from 'react'

import PLANNED_CIRCLE from '../../assets/images/planned_circle.svg'
import PICKING_CIRCLE from '../../assets/images/picking_circle.svg'
import PICKED_CIRCLE from '../../assets/images/picked_circle.svg'
import STAGED_CIRCLE from '../../assets/images/staged_circle.svg'
import DISPATCHED_CIRCLE from '../../assets/images/dispatched_circle.svg'

var style ={
    height: "50px", 
    width: "20px", 
    textAlign: "center"
}

class SolihullError extends Component {

render(){

    let {data} = this.props
    console.log('data to display error', data)
    
    return  <span>
                <span style={{textAlign: "center"}}>
                    <div>
                        <img src={PLANNED_CIRCLE} style={style} alt= "planned" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>
                            STILL PLANNED
                        </p>
                        <p>
                           LPNL100412930591 
                        </p>
                        <p>
                            Pan Roof Blind
                        </p>
                        <p>
                            1235-1246
                        </p>
                    </div>
               </span>

               <span style={{textAlign: "center"}}>
                    <div>
                        <img src={PICKING_CIRCLE} style={style} alt= "picking" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>
                            STILL PICKING
                        </p>
                        <p>
                            LPNL100412930510 
                        </p>
                        <p>
                            Headlamp RH
                        </p>
                        <p>
                            3700-3708
                        </p>
                    </div>
               </span>
               
               
               <span style={{textAlign: "center"}}>
                    <div>
                        <img src={PICKED_CIRCLE} style={style} alt= "picked" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>
                            STILL PICKED
                        </p>
                        <p>
                            LPNL100412930197 
                        </p>
                        <p>
                            Spoiler Rear
                        </p>
                        <p>
                            1204-1207
                        </p>
                    </div>
               </span>

               <span style={{textAlign: "center"}}>
                    <div>
                        <img src={STAGED_CIRCLE} style={style} alt= "staged" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>
                            STILL STAGED
                        </p>
                        <p>
                            LPNL100412930236 
                        </p>
                        <p>
                            Door Handle and Bezel
                        </p>
                        <p>
                            2764-2768
                        </p>
                    </div>
               </span>

               <span style={{textAlign: "center"}}>
                    <div>
                         <img src={DISPATCHED_CIRCLE} style={style} alt= "dispatched" />
                    </div>
                    <div>
                        <p style={{color: "red"}}>
                             DISPATCHED
                        </p>
                        <p>
                            LPNL100412930763 
                        </p>
                        <p>
                            Pedals
                        </p>
                        <p>
                            4563-4571
                        </p>
                    </div>
               </span>
    </span>
    
}    
}

export default SolihullError;