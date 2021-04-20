import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Auth from './components/Auth/Auth';


const App = () => {
    const [open, setOpen] = useState(false);

    return (
        <Router>
            <Header setOpen={setOpen} />
            <Switch>
                <Route exact path="/">
                    <HomePage setOpen={setOpen} open={open} />
                </Route>
                <Route exact path="/auth" component={Auth}/>
            </Switch>
        </Router>
    );
};

export default App;