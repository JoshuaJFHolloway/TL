import React, { Component } from 'react';
import trainTab from './trainTab';

let destinations = [];
let scheduledArrivalTime = [];
let trainCompany = [];
let platform = [];
let actualArrivalTime = [];

class departingServices extends Component {
    constructor() {
        super();
        this.state = {
            destinations: [],
            scheduledArrivalTime: [],
            trainCompany: [],
            platform: [],
            actualArrivalTime: []
        }
    }

    componentDidMount() {
        fetch('./data/departingTrains.json')
            .then(response => response.json())
            .then(data => {
                data.services.map((service) => {
                    destinations.push(service.destinationList[0].crs);
                    scheduledArrivalTime.push(this.extractArrivalTime(service.scheduledInfo.scheduledTime));
                    platform.push(this.scheduledOrRealTimePlatform(service));
                    trainCompany.push(service.serviceOperator);
                    actualArrivalTime.push(this.onTimeOrExpected(service));
                });
                this.setState({destinations, scheduledArrivalTime, trainCompany, platform, actualArrivalTime})
            })
    }

    scheduledOrRealTimePlatform(service) {
        const realTimePlatform = service.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform;
        const scheduledPlatform = service.scheduledInfo.scheduledPlatform;

        if(realTimePlatform){return realTimePlatform}
        if(scheduledPlatform){return scheduledPlatform}
        else{return "TBC"}
    }

    onTimeOrExpected(service){
        const scheduledTime = this.extractArrivalTime(service.scheduledInfo.scheduledTime);
        const actualTime = this.extractArrivalTime(service.realTimeUpdatesInfo.realTimeServiceInfo.realTime);

        return scheduledTime === actualTime ? "On time" : `exp.${actualTime}`
    }

    extractArrivalTime(service){
        return service.slice(11, -9);
    }


    onClick = () => {

    };

    render() {

        return (
            <div>
                <tr>
                    <h1>Hello</h1>
                    {/*if the station === BSK or SHP then pass down those props*/}
                    {/*toBSK={this.state.toBSK} toSHP={this.state.toSHP}*/}
                    {/*<trainTab/>*/}
                </tr>
            </div>
        );
    }
}

export default departingServices;