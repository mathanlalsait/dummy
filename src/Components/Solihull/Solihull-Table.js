import React, {Component} from 'react'
import '../../App.scss'
import '../../App.scss'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css'

import {Data} from '../../SOLIHULL_MOCK_DATA'

import ShippedCellRender from './Column-Stillages/shippedRowRender.jsx'
import OnSiteCellRender from './Column-Stillages/onSiteRowRender.jsx'
import AtSupplierCellRender from './Column-Stillages/atSupplierRowRender.jsx'
import NotRequiredCellRender from './Column-Stillages/notRequiredRowRender.jsx'


class SolihullTable extends Component {

    constructor(props){
        super(props)
        this.state={

            columnDefs:[

                 {headerName:'Commodity', field:'commodity',
                  cellStyle: (params) => (params.data.error === "ERROR") ? {borderLeft: "4px #d40612 solid"} : null
                 },

                 {headerName:'Supplier', field:'supplier'},
                 {headerName:'Track', field:'track'},
                 {headerName:'Area', field:'area'},
                 {headerName:'Part Family', field:'part_family',
                  cellRenderer: function (params) {
                    let keyData = params.value;
                    let newLink = `<a href= https://exelice.dhl.com/sbc/PartFamily.htm?Plant=SH&PartFamily=${keyData}&Track=67-getting-started
                               target="_blank">${keyData}</a>`;
                    return newLink;
                  }
                },

                 {headerName:'Last Broadcast TLS', field:'lastLTLS'},
                 {headerName:'TLS Inbound', field:'inbndTLS'},
                 {headerName:'Visible TLS Hours', field:'visTLSHR'},

                 {headerName:'Stillages',
                 groupId: 'stillagesGroup',

                 children:[

                    {headerName:'SHIPPED', 
                    field:'shipped',
                    type: 'stillagesGroup',
                    cellRenderer: 'shippedCellRender'
                    },

                    {headerName:'ONSITE', 
                    field:'onSite',
                    type: 'stillagesGroup',
                    cellRenderer: 'onSiteCellRender'
                    },

                    {headerName:'ATSUPPLIER', 
                     field:'atSupplier',
                     type: 'stillagesGroup',
                     cellRenderer: 'atSupplierCellRender'
                    },

                    {headerName:'NOT REQUIRED', 
                     field:'notRequired',
                     type: 'stillagesGroup',
                     cellRenderer: 'notRequiredCellRender'
                    }
                 ]
               },
                  {headerName:'Fit Station', field:'stationNumber'},
                  {headerName:'TLS in Station', field:'onTrack'},
                  {headerName:'Last TLS Ship', field:'lastShp'},
                  {headerName:'Last TLS Rec.', field:'lastRec'},
                  
                  {headerName:'On Site + Ship Buffer', field:'shipBuffer',
                   cellStyle: (params) => 
                   (params.data.shipBufferColor === "GREEN") ? {background: "#00FD00"} : {background: "#d40612",
                    color: "#FFFFFF"}
                  },

                  {headerName:'On Site Buffer', field:'onSiteBuffer',
                   cellStyle: (params) =>
                   (params.data.onSiteBufferColor === "GREEN") ? {background: "#00FD00"} : {background: "#d40612",
                    color: "#FFFFFF"}
                  },

                  {headerName:'Max Stock', field:'maxStock',
                   cellStyle: (params) =>
                   (params.data.maxStockColor === "GREEN") ? {background: "#00FD00"} : {background: "#d40612",
                    color: "#FFFFFF"}
                  },

                  {headerName:'Start TLS', field:'startTLS'},
                  {headerName:'Finish TLS', field:'finishTLS'},
                  {headerName:'Next Days TLS', field:'nxtDTLS'},

                  {headerName:'Next Days TLS Buffer', field:'nxtDBuffer',
                   cellStyle: (params) =>
                   (params.data.nxtDBufferColor === "GREEN") ? {background: "#00FD00"} : {background: "#d40612",
                    color: "#FFFFFF"}
                  }
            ],

            defaultColDef: 
            {
                flex:1, 
                resizable: true, 
            },

            defaultColGroupDef: { marryChildren: true },
            columnTypes: {
                stillagesGroup: {
                width: 100,
                columnGroupShow: 'open'
          }
        },    
            rowData: [],
            frameworkComponents:{
                shippedCellRender: ShippedCellRender,
                onSiteCellRender: OnSiteCellRender,
                atSupplierCellRender: AtSupplierCellRender,
                notRequiredCellRender: NotRequiredCellRender
            }

        }
    }

getSolihullRowData = (serviceResponseData) =>{
   let rowData=[]
   serviceResponseData.forEach((responseData) =>{
         
        let customerObject ={
            commodity:'',
            supplier:'',
            track:'',
            area:'',
            part_family:'',
            inbndTLS:'',
            lastLTLS:'',
            visTLSHR:'',
            stationNumber:'',
            onTrack:'',
            lastShp:'',
            lastRec:'',
            shipBuffer:'',
            shipBufferColor:'',
            onSiteBuffer:'',
            onSiteBufferColor:'',
            maxStock:'',
            maxStockColor:'',
            startTLS:'',
            finishTLS:'',
            nxtDTLS:'',
            nxtDBuffer:'',
            nxtDBufferColor:'',
            shipped:'',
            onSite:'',
            atSupplier:'',
            notRequired:'',
            error:''
 }
    //Iterating commodities from mock data    
    responseData.commodities.forEach((commodityArray) =>{
        
        customerObject.commodity = commodityArray.name
        customerObject.supplier = commodityArray.supplier
        customerObject.track = commodityArray.track
        customerObject.area = commodityArray.area
        customerObject.part_family = commodityArray.part_family
        customerObject.inbndTLS = commodityArray.inbndTLS
        customerObject.lastLTLS = commodityArray.lastLTLS
        customerObject.visTLSHR = commodityArray.visTLSHR
        customerObject.stationNumber = commodityArray.stationNumber
        customerObject.onTrack = commodityArray.onTrack
        customerObject.lastShp = commodityArray.lastShp
        customerObject.lastRec = commodityArray.lastRec
        customerObject.shipBuffer = commodityArray.shipBuffer
        customerObject.shipBufferColor = commodityArray.shipBufferColor
        customerObject.onSiteBuffer = commodityArray.onSiteBuffer
        customerObject.onSiteBufferColor = commodityArray.onSiteBufferColor
        customerObject.maxStock = commodityArray.maxStock
        customerObject.maxStockColor = commodityArray.maxStockColor
        customerObject.startTLS = commodityArray.startTLS
        customerObject.finishTLS = commodityArray.finishTLS
        customerObject.nxtDTLS = commodityArray.nxtDTLS
        customerObject.nxtDBuffer = commodityArray.nxtDBuffer
        customerObject.nxtDBufferColor = commodityArray.nxtDBufferColor
        customerObject.error = commodityArray.error

        let stillagesArray = commodityArray.stillages
        stillagesArray.forEach((stillagesObject) =>{
        customerObject.shipped = stillagesObject.shipped

        //console.log('Stillage array....', stillagesObject)
        customerObject.onSite = stillagesObject.onSite
        customerObject.atSupplier = stillagesObject.atSupplier
        customerObject.notRequired = stillagesObject.notRequired

        })
    })   

     rowData.push(customerObject)
   })
  return rowData;   
}    

componentDidMount (){
    // retrieve mapped values for the getSolihullRowData function
    this.setState({rowData: this.getSolihullRowData(this.props.defaultDataPackageSolihull)})  
}    

    render(){

        return(
            <div className="App">
            <div className="ag-theme-bootstrap" style={ {height: 'calc(92vh - 2rem)', }}>
            <AgGridReact
                columnDefs={this.state.columnDefs}
                defaultColDef={this.state.defaultColDef}
                defaultColGroupDef={this.state.defaultColGroupDef}
                columnTypes={this.state.columnTypes}
                rowData={this.state.rowData}
                frameworkComponents={this.state.frameworkComponents}
            >
            </AgGridReact>
            </div>
        </div>
    
        )
    }
}

SolihullTable.defaultProps ={
    defaultDataPackageSolihull: Data
}

export default SolihullTable;
