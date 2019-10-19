import React, { Component } from 'react';
import DiscoverServices from '../common/DiscoverServices';

class PlacesToVisitPage extends Component{

    constructor(props){
        super(props);
        DiscoverServices.serviceLogin();
    }

    render(){
        return (
        <div className="page-placestovisit">
            Places To Visit

        </div>);

    }


}

export default PlacesToVisitPage;