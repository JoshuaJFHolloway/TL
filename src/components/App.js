import React, { Component } from 'react';
import departingTrains from '../data/departingTrains';
import toBSK from '../data/toBSK';
import toSHP from '../data/toSHP';

class App extends Component {
    constructor() {
        super();
        this.state = {
            departingTrains: departingTrains,
            toBSK: toBSK,
            toSHP: toSHP
        }
    }


    render() {
        return (
            <div>
            </div>
        );
    }
}

export default App;
