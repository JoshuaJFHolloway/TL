import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from 'react-router-dom'

const TrainTab = (props) => {

    const greenOrNormal = props.actualArrivalTime === "On time" ? {color: "green"} : '';

    return (
        <div>
            <div className='arrivalTime'>
                <div className="inline">
                    {props.scheduledArrivalTime}
                </div>
            </div>
            <div className="destination">
                <div className="inline">
                    {props.destination}
                </div>
            </div>
            <div className="platform">
                <div className="inline">
                    {props.platform}
                </div>
            </div>
            <div className="callingPointsButton">
                <div className="inline">
                    <Link to={`/${props.destination}`}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </Link>
                </div>
            </div>
            <div className="trainCompany">
                <div className="inline">
                    {props.trainCompany}
                </div>
            </div>
            <div className="actualArrivalTime">
                <div className="inline">
                    <div style={greenOrNormal}>
                         {props.actualArrivalTime}
                    </div>
                </div>
            </div>
            <br className="clearInlines"/>
        </div>
    );
};

export default TrainTab;