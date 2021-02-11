import React, {Component} from 'react'

import EmailList from '../Components/Menu-Items/Email-List/email-list'
import Header from '../Components/Menu-Items/Email-List/Header'
import Footer from '../Components/Menu-Items/Email-List/Footer'
import EmailSchedular from 'Components/Menu-Items/Email-List/email-schedular'

class EmailIndex extends Component{

render(){

   return <div>
             <div className="app-container">
                      <Header />
                  <div className="EmailContent">
                       <div className="EmailGrid">
                           <EmailList />
                       </div>
                       <div className="EmailSlider-right">
                           <EmailSchedular />
                       </div>
                  </div>
                       <div className= "emailFooter">
                            <Footer />
                       </div> 
             </div>
          </div>
  }    
}
export default EmailIndex;