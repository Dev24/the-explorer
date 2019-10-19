import React, { Component } from 'react';
import DiscoverServices from '../common/DiscoverServices';

class PlacesToVisitPage extends Component{

    constructor(props){
        super(props);
        
        DiscoverServices.getMerchant();
    }

    render(){
        return (
        <div className="page-placestovisit">
            
        </div>);

    }


}

export default PlacesToVisitPage;