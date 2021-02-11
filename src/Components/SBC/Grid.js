import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { AgGridReact } from '@ag-grid-community/react'
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css'
import 'App.scss'

import { COLUMN_DEF } from 'Components/SBC/gridConfig'
import {getSBCDataPackage} from '../../redux/actions/sbcAction'
import {getRowData} from '../../util'
import PartFamilyRenderer from 'Components/SBC/Column/partFamilyRender'
import StillageRenderer from 'Components/SBC/Stillages/Stillage/stillage'
import stillageHeader from 'Components/SBC/Stillages/stillageHeader/stillageHeader'

let SBCTable = class extends Component {
    constructor(props) {
      super(props);
  
      this.state = {

        modules: AllCommunityModules,
        columnDefs: COLUMN_DEF,
  
        defaultColDef: {
          flex: 2,
          wrapText: true,
          autoHeight: true
        },
  
        defaultColGroupDef: {
          marryChildren: true,
        },
        columnTypes: {
          stillagesGroup: {
            width: 100,
            columnGroupShow: "open",
          },
        },
        rowData: [],
        dataPackageResponse: [],
        context: {
          componentParent: this,
        },
        tooltipShowDelay: 0,
        frameworkComponents: {
          stillageHeader: stillageHeader,
          stillageRenderer: StillageRenderer,
          partFamilyRenderer: PartFamilyRenderer
        },
        suppressRowTransform: true,
        onColumnResized : function(params) {
          params.api.resetRowHeights();
        }
      
      };
    }
    
    onGridReady = (params) => {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    };
  
    //getRowData from the mock service response
    static getDerivedStateFromProps(nextProps, state){
      if(nextProps.dataPackageResponse !== state.dataPackageResponse){
        return {
          dataPackageResponse:nextProps.dataPackageResponse,
          rowData:getRowData(nextProps.dataPackageResponse)
          
        };
      }
    }
      
    componentDidMount() {
      //retrieve mapped vales from the getRowData function
      this.props.getSBCDataPackage(); 

      if(this.props.dataPackageResponse){
        this.setState({
          rowData: getRowData(this.props.dataPackageResponse),
          dataPackageResponse : this.props.dataPackageResponse
        });
      }        
    }

render() {
      
    return (
        <div className="App">
          <div
            className="ag-theme-bootstrap"
            style={{
              height: "calc(92vh - 2rem)",
            }}
          >
            <AgGridReact
                modules={this.state.modules}
                columnDefs={this.state.columnDefs}
                defaultColDef={this.state.defaultColDef}
                defaultColGroupDef={this.state.defaultColGroupDef}
                columnTypes={this.state.columnTypes}
                rowData={this.state.rowData}
                context={this.state.context}
                frameworkComponents={this.state.frameworkComponents}
                tooltipShowDelay={this.state.tooltipShowDelay}
                onGridReady={this.onGridReady}
                suppressRowTransform={true}
                headerHeight = {20}
                suppressCellSelection={ true }
                onColumnResized= { this.state.onColumnResized }
                onSelectionChanged={this.state.onSelectionChanged}
              >
            </AgGridReact>
          </div>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return{
      dataPackageResponse: state.sbcTableReducer || []
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({  
      getSBCDataPackage
    }, dispatch)
  }

  SBCTable.propTypes = {
    serviceRespRowData : PropTypes.array
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SBCTable);
  