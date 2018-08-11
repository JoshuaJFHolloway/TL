import React from 'react';
import App from '../../components/App';
import {shallow} from 'enzyme';
import departingTrains from '../../data/departingTrains';
import toBSK from '../../data/toBSK';
import toSHP from '../../data/toSHP';

let app;

const state = {
    departingTrains: departingTrains,
    toBSK: toBSK,
    toSHP: toSHP
};

describe('App', () => {

    app = shallow(<App/>);

    beforeEach(() => {
        app = shallow(<App/>);
    });

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    describe('Initializes state', () => {
        it('initializes state correctly', () => {
            expect(app.state()).toEqual(state);
        });
    });
});
