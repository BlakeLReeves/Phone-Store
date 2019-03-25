import React, { Component } from 'react';

import './scss/app';
import Navbar from './shared/Navbar';
import ProductList from './public/ProductList';
import Product from './public/Product';
import Details from './public/Details';
import Cart from './public/Cart';
import Default from './public/Default';

export default class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <ProductList />
                <Details />
                <Cart />
                <Default />
            </>
        )
    }
}