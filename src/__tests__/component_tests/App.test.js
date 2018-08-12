import React from 'react';
import App from '../../components/App';
import {shallow} from 'enzyme';

let app;

describe('App', () => {

    app = shallow(<App/>);

    beforeEach(() => {
        app = shallow(<App/>);
    });

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
});
