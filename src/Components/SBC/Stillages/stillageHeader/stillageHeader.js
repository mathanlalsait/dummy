import React from 'react'
import './stillageHeader.scss'

// stillage logo
import unplannedLogo from 'assets/images/unplanned-ic-new.svg';
import plannedLogo from 'assets/images/planned_ic.svg';
import pickingLogo from 'assets/images/picking_ic.svg';
import pickedLogo from 'assets/images/picked_ic.svg';
import staggedLogo from 'assets/images/staged_ic.svg';
import loadedLogo from 'assets/images/loaded_ic-new.svg';
import dispatchedLogo from 'assets/images/dispatched_ic.svg';

const sillageList = {
    unplanned : {
        imgSrc: unplannedLogo,
    },
    planned : {
        imgSrc: plannedLogo,
    },
    picking : {
        imgSrc: pickingLogo,
    },
    picked : {
        imgSrc: pickedLogo,
    },
    staged : {
        imgSrc: staggedLogo,
    },
    loaded : {
        imgSrc: loadedLogo,
    },
    dispatched : {
        imgSrc: dispatchedLogo,
    },

};

export default class stillageHeader extends React.Component {
    
    render(){
        const type = this.props.column.colDef.field;
        //console.log(type);
        if(!sillageList[type])
            return <span></span>;
        const imgSrc  = sillageList[type]['imgSrc'];
        // console.log(imgSrc, this.props.displayName);
        return  <div className="sl-header">
                <img src={ imgSrc } alt="stillage" />
                <span>{ this.props.displayName }</span>
            </div>
        }
}
