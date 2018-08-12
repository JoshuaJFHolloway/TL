import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch,
} from 'react-router-dom'
import DepartingServices from './DepartingServices';
import CallingPoints from './CallingPoints';

const App = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={DepartingServices}/>
                    <Route path="/:destination" component={CallingPoints}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
