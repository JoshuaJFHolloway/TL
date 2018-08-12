import React, { Component } from 'react';
import TrainTab from './TrainTab';

let destinations = [];
let scheduledArrivalTime = [];
let trainCompany = [];
let platform = [];
let actualArrivalTime = [];

class DepartingServices extends Component {
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
                    platform.push(this.addPlatformString(this.scheduledOrRealTimePlatform(service)));
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

    onTimeOrExpected(service) {
        const scheduledTime = this.extractArrivalTime(service.scheduledInfo.scheduledTime);
        const actualTime = this.extractArrivalTime(service.realTimeUpdatesInfo.realTimeServiceInfo.realTime);

        return scheduledTime === actualTime ? "On time" : `exp.${actualTime}`
    }

    extractArrivalTime(service) {
        return service.slice(11, -9);
    }

    addPlatformString(service) {
        return `Plat.${service}`
    }

    render() {

        let departingServices = [];
        const state = this.state;

        for (let i = 0; i < this.state.destinations.length; i++) {
            departingServices.push(
                <tr>
                    <td>
                        <TrainTab
                            destination={state.destinations[i]}
                            scheduledArrivalTime={state.scheduledArrivalTime[i]}
                            trainCompany={state.trainCompany[i]}
                            platform={state.platform[i]}
                            actualArrivalTime={state.actualArrivalTime[i]}
                        />
                    </td>
                </tr>
            )
        }


        return (
            <div>
                <table>
                    <tbody>
                        {departingServices}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DepartingServices;