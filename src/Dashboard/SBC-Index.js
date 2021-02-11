import React, {Component} from 'react'

import SBCTable from '../Components/SBC/Grid'
import SBCHeader from '../Components/SBC/Header'
import SBCFooter from '../Components/SBC/Footer'
import SBCError from '../Components/SBC/Error'
import TableTotal from '../Components/SBC/Table-Total'

class SBCIndex extends Component {

render(){

    return <div>
        <div className="app-container">
            <SBCHeader />
        <div className="content">
             <div className="grid">
                  <SBCTable />
              <div className= "footer">
                  <TableTotal />
              </div>                             
             </div>       
        <div className="slider-right">
        <div className="error-block">
             <div>
                <SBCError />
             </div>
        </div>
            
        </div>
    </div>
    <div className= "footer">
                  <SBCFooter />
            </div>  
    </div>

</div>
    }
}
export default SBCIndex;