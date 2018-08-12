import React from 'react';
import DepartingServices from '../../components/departingServices';
import {shallow} from 'enzyme';

const state = {
    destinations: [],
    scheduledArrivalTime: [],
    trainCompany: [],
    platform: [],
    actualArrivalTime: []
};

const testJSON = {
    "serviceOperator": "SW",
    "scheduledInfo": {
        "scheduledTime": "2018-04-24T17:11:00+01:00",
        "scheduledPlatform": "11"
    },
    "destinationList": [{
        "crs": "BSK"
    }],
    "realTimeUpdatesInfo": {
        "realTimeServiceInfo": {
            "realTime": "2018-04-24T17:11:00+01:00",
            "realTimePlatform": "11",
        }
    },
};

const realTimePlatformExists = {
    "scheduledInfo": {
        "scheduledPlatform": "11"
    },
    "realTimeUpdatesInfo": {
        "realTimeServiceInfo": {
            "realTimePlatform": "11",
        }
    },
};

const realTimePlatformDoesntExist = {
    "scheduledInfo": {
        "scheduledPlatform": "11"
    },
    "realTimeUpdatesInfo": {
        "realTimeServiceInfo": {
        }
    },
};

const noPlatformExists = {
    "scheduledInfo": {
    },
    "realTimeUpdatesInfo": {
        "realTimeServiceInfo": {
        }
    },
};

const realTimeDoesntEqualScheduledTime = {
    "scheduledInfo": {
        "scheduledTime": "2018-04-24T17:11:00+01:00",
    },
    "realTimeUpdatesInfo": {
        "realTimeServiceInfo": {
            "realTime": "2018-04-24T17:12:00+01:00",
        }
    },
};

let departingServices;

describe('departingServices', () => {

    beforeEach(() => {
        departingServices = shallow(<DepartingServices/>);
    });

    it('renders correctly', () => {
        expect(departingServices).toMatchSnapshot();
    });

    describe('updating state successfully', () => {
        it('initialises empty state', () => {
            expect(departingServices.state()).toEqual(state);
        });
    });

    describe('scheduledOrRealTimePlatform', () => {
        it('returns realTimePlatform if it exists', () => {
            const realTimePlatform = realTimePlatformExists.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform;

            expect(departingServices.instance().scheduledOrRealTimePlatform(realTimePlatformExists)).toEqual(realTimePlatform)
        });

        it('returns scheduledPlatform if realTimePlatform does not exist', () => {
            const scheduledPlatform = realTimePlatformDoesntExist.scheduledInfo.scheduledPlatform;

            expect(departingServices.instance().scheduledOrRealTimePlatform(realTimePlatformDoesntExist)).toEqual(scheduledPlatform)
        });

        it("returns the string 'TBC' if neither scheduledPlatform or realTimePlatform exists", () => {
            expect(departingServices.instance().scheduledOrRealTimePlatform(noPlatformExists)).toEqual("TBC")
        });
    });

    describe('onTimeOrExpected', () => {
        it("returns 'On time' if scheduledTime === realTime", () => {
            expect(departingServices.instance().onTimeOrExpected(testJSON)).toEqual("On time")
        });

        it("returns 'exp.' + 'realTime' if scheduledTime !== realTime", () => {
            expect(departingServices.instance().onTimeOrExpected(realTimeDoesntEqualScheduledTime)).toEqual("exp.17:12")
        })
    });

    describe('extractArrivalTime', () => {
        it('extracts the time from the JSON string length supplied', () => {
            const elevenPastFive = testJSON.scheduledInfo.scheduledTime;

            expect(departingServices.instance().extractArrivalTime(elevenPastFive)).toEqual('17:11')
        });
    });
});