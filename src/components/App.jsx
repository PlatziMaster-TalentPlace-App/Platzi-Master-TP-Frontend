import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import User from '../pages/User/User'
import Error404 from '../pages/Error404/Error404'
import Layout from '../components/Layout/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/user" component={User}/>
                <Route component={Error404} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
