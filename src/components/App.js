import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom'
import departingServices from './departingServices';
import trainTab from './trainTab';

// import departingTrains from '../data/departingTrains';
// import toBSK from '../data/toBSK';
// import toSHP from '../data/toSHP';

const App = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={departingServices}/>
                    <Route path="/:" component={trainTab}/>
                    {/*departingTrains={this.state.departingTrains}*/}
                    {/*toBSK={this.state.toBSK}*/}
                    {/*toSHP={this.state.toSHP}*/}
                    {/*/>*/}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
