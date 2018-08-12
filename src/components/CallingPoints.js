import React, { Component } from 'react';

let startingStation = [];
let finishingStation = [];
let stops = [];
let arrivalScheduledArrivalTime = [];
let arrivalActualArrivalTime = [];
let departureScheduledArrivalTime = [];
let departureActualArrivalTime = [];
let trainCompany = [];
let onTimeDepartedOrExpected = [];

class CallingPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrival: {
                scheduledTime: [],
                actualTime: []
            },
            departure: {
                scheduledTime: [],
                actualTime: []
            },
            onTimeDepartedOrExpected: [],
            startingStation: [],
            finishingStation: [],
            stops: [],
            trainCompany: [],
            pageId: props.match.params.destination
        };
    }

    componentDidMount() {
        fetch(`./data/to${this.state.pageId}.json`)
            .then(response => response.json())
            .then(data => {

                startingStation.push(data.service.serviceOrigins[0]);
                finishingStation.push(data.service.serviceDestinations[0]);
                trainCompany.push(data.service.serviceOperator);

                data.service.stops.map((stop) => {
                    arrivalScheduledArrivalTime.push(this.extractArrivalTime(stop.arrival.scheduled.scheduledTime));
                    arrivalActualArrivalTime.push((this.extractArrivalTime(stop.arrival.realTime.realTimeServiceInfo.realTime)));
                    departureScheduledArrivalTime.push(this.extractArrivalTime(stop.departure.scheduled.scheduledTime));
                    departureActualArrivalTime.push((this.extractArrivalTime(stop.departure.realTime.realTimeServiceInfo.realTime)));
                    onTimeDepartedOrExpected.push(); // function to work out whether its late or not or not departed
                    stops.push(stop.location.crs);
                });
                this.setState({
                    startingStation,
                    finishingStation,
                    stops,
                    arrivalScheduledArrivalTime,
                    arrivalActualArrivalTime,
                    departureScheduledArrivalTime,
                    departureActualArrivalTime,
                    trainCompany,
                    onTimeDepartedOrExpected
                })
            })
    }

    extractArrivalTime(service) {
        return service.slice(11, -9);
    }

    onTimeDepartedOrExpected() {

    }

    source() {
    }

    render() {

        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default CallingPoints;
