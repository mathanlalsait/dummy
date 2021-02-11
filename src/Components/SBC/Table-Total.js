import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRowData} from '../../util'
import '../../App.scss'

class TableTotal extends Component{

    render(){
        let pick_buffer_total;
        let ship_buffer_total;
        let data = getRowData(this.props.dataPackageResponse)?
                   getRowData(this.props.dataPackageResponse) : []
        console.log('data.....',data)
        data.forEach((value) => {
        pick_buffer_total = value.pick_buffer_total;
        ship_buffer_total = value.ship_buffer_total;
        })           

        return <span>
                  <div className= "footer-container">
                       Total:
                  <div className="block refresh-block">
                    <div>{pick_buffer_total} {ship_buffer_total}</div>
                  </div>
                  </div>
              </span>
    }
}

const mapStateToProps = state =>{
    return {
        dataPackageResponse: state.sbcTableReducer || []
    }
}

export default connect(mapStateToProps, null)(TableTotal);