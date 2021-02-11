import React, {Component} from 'react'

import SolihullTable from '../Components/Solihull/Solihull-Table'
import SolihullHeader from '../Components/Solihull/Header'
import SolihullFooter from '../Components/Solihull/Footer'
import SolihullError from '../Components/Solihull/Error'

import ERROR_CIRCLE from 'assets/images/error_with_circle.svg'

class SolihullIndex extends Component {

render(){

    return <div>
        <div className="app-container">
            <SolihullHeader />
        <div className="content">
             <div className="grid">
                  <SolihullTable />
                  <div className= "footer">
                       <SolihullFooter />
                  </div>                              
             </div>

        <div className="slider-right">
        <div className="error-block">
                <div>
                    <img src={ERROR_CIRCLE} style={{height: "30px", width: "40px"}} alert="error" />
                         15 ERRORS
                </div>
            <div>
                <SolihullError />
            </div>
        </div>
            
        </div>
    </div>
    </div>

</div>
    }
}
export default SolihullIndex;