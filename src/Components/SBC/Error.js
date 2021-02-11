import React, {Component} from 'react'
import * as Icon from 'react-bootstrap-icons';
import {connect} from 'react-redux'
import _ from 'lodash'

import {getRowData} from '../../util'
import PLANNED_CIRCLE from 'assets/images/planned_circle.svg'
import PICKING_CIRCLE from 'assets/images/picking_circle.svg'
import PICKED_CIRCLE from 'assets/images/picked_circle.svg'
import STAGED_CIRCLE from 'assets/images/staged_circle.svg'
import DISPATCHED_CIRCLE from 'assets/images/dispatched_circle.svg'
import ERROR_CIRCLE from 'assets/images/error_with_circle.svg'

var style ={
    height: "50px", 
    width: "20px"
}

class SBCError extends Component {

    constructor(props){
        super(props)
        this.state ={
            renderData: [],
            totalPageCount: 1,
            currentPage: 1,
            rowDataPerPage: 5,
            errorArray: []
        }
    }
    
static getDerivedStateFromProps(nextProps, state){
    if(state.errorArray.length === 0){
    let errorArray =[]
    let errorData = getRowData(nextProps.dataPackageResponse) ? 
                    getRowData(nextProps.dataPackageResponse) : []               
                    
        errorData.forEach((errorValue) => {   
        if(errorValue.errorList){
            errorArray =_.concat(errorArray, errorValue.errorList)
        } 
     })

    if(errorArray && errorArray.length > 0){
    let totalPageCount = parseInt(errorArray.length) / parseInt(state.rowDataPerPage)
    let data = parseInt(errorArray.length) % parseInt(state.rowDataPerPage);
         if(data>0 && totalPageCount >0){
             totalPageCount = totalPageCount +1;
         }               
    totalPageCount = totalPageCount ? parseInt(totalPageCount) : 1
    let startIndex = (state.currentPage -1) * (state.rowDataPerPage)
    let endIndex = (state.currentPage * state.rowDataPerPage)
    let renderData = errorArray.slice(startIndex,endIndex)

    return{
        renderData: renderData, 
        totalPageCount:totalPageCount, 
        errorArray:errorArray,
    }
    } 
  }
   
}

onPreviousclick = () =>{
    if(this.state.currentPage>1){
        this.setState({currentPage:this.state.currentPage-1}, () =>{
            let startIndex =(this.state.currentPage-1) * (this.state.rowDataPerPage)
            let endIndex =(this.state.currentPage * this.state.rowDataPerPage)
            let renderData = this.state.errorArray.slice(startIndex,endIndex);

            this.setState({renderData:renderData});
        })
    }
}

onNextClick = () =>{
    if(this.state.currentPage < this.state.totalPageCount){
        this.setState({currentPage:this.state.currentPage +1}, () => {
            let startIndex = (this.state.currentPage -1) * (this.state.rowDataPerPage)
            let endIndex = (this.state.currentPage * this.state.rowDataPerPage)
            let renderData = this.state.errorArray.slice(startIndex, endIndex);

            this.setState({renderData:renderData});
        })
    }
}

getImageTag = (location) =>{
        location =location ? location.toLowerCase():'';
        if(location === "planned"){
           return <div>
                     <img src={PLANNED_CIRCLE} style={style} alt= "planned" />
                  </div>
        }
        else if(location === "picking"){
            return <div>
                      <img src={PICKING_CIRCLE} style={style} alt= "picking" />
                  </div>
        }
        else if(location === "picked"){
            return <div>
                       <img src={PICKED_CIRCLE} style={style} alt= "picked" />
                  </div>
        }
        else if(location === "staged"){
            return <div>
                      <img src={STAGED_CIRCLE} style={style} alt= "staged" />
                  </div>
        }
        else if(location === "dispatched"){
            return <div>
                    <img src={DISPATCHED_CIRCLE} style={style} alt= "dispatched" />
                   </div>
        }
    }

render(){
 
        return <span>
                <span>
                    <div style={{textAlign: "center"}}>
                        <img src={ERROR_CIRCLE} style={{height: "30px", width: "40px"}} alt="error" />
                             {this.state.errorArray.length} ERRORS
                    </div>
                </span>
                <hr />
        <span>{this.state.renderData.map((errorData, index) =>{
        return <span>
             <span key={`errorImages- ${index}`} style={{textAlign: "center"}}>
                          {this.getImageTag(errorData.location)}
                        <div>
                            <p style={{color: "red"}}>
                                {(errorData.location && errorData.location.toUpperCase() !== 'DISPATCHED') && 
                                <span>STILL</span>} {errorData.location && errorData.location.toUpperCase()}
                            </p>
                            <p>
                                {errorData.lpn}
                            </p>
                            <p>
                                {errorData.commodity}
                            </p>
                            <p>
                                {errorData.tls_range}
                            </p>
                        </div>  
                        <hr />
                      </span>
             </span>
             })
            }  
        </span>
        <span> 
            <span onClick={() => this.onPreviousclick()}>
            <Icon.ChevronLeft></Icon.ChevronLeft>
            </span>
             {this.state.currentPage} of {this.state.totalPageCount}Page
             <span onClick={() => this.onNextClick()}>
            <Icon.ChevronRight></Icon.ChevronRight>
            </span>
        </span>
    </span>
        } 
        
    }              
    
const mapStateToProps = state =>{
      return {
            dataPackageResponse: state.sbcTableReducer || []
        }
}

export default connect(mapStateToProps, null)(SBCError);