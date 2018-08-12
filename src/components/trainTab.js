import React from 'react';
import Button from './Button';

const trainTab = (props) => {

    return (
        <div>
            <div>
                {props.scheduledArrivalTime}
            </div>
            <div>
                {props.station}
                {props.trainCompany}
            </div>
            <div>
                {props.platform}
                {props.actualArrivalTime}
            </div>
            <div>
                <Button
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
};

export default trainTab;