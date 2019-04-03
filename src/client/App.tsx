import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './scss/app';
import Navbar from './shared/Navbar';
import ProductList from './public/ProductList';
import Details from './public/Details';
import Cart from './public/Cart';
import Default from './public/Default';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={ProductList} />
                        <Route exact path='/details' component={Details} />
                        <Route exact path='/cart' component={Cart} />
                        <Route component={Default} />
                    </Switch>
                </Router>
            </>
        )
    }
}