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
            Places to Visit Page - loading places
        </div>);

    }


}

export default PlacesToVisitPage;