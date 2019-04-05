import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { detailProduct } from '../data';
import console = require('console');

export interface IDetailProps { }

export interface IDetailState {
    detailProduct: { id: number, title: string, img: string, price: number, company: string, info: string, inCart: boolean, count: number, total: number };
}

export default class Details extends React.Component<IDetailProps, IDetailState> {
    constructor(props: IDetailProps) {
        super(props);

        this.state = {
            detailProduct: detailProduct
        };
    };

    addToCart = (id) => {
        console.log(`Id is ${id}`);
    };

    render() {

        const { id, company, img, info, price, title, inCart } = this.state.detailProduct;

        return (
            <>
                <div className="container py-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {/* product info */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} alt="product" className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model : {title}</h2>
                            <h4 className="text-title text-muted text-uppercase mt-3 mb-2">made by : <span className="text-uppercase">{company}</span></h4>
                            <h4 className="text-blue">
                                <strong>
                                    price : <span>$</span>{price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product:
                            </p>
                            <p className="text-muted lead">{info}</p>
                            {/* buttons */}
                            <div>
                                <Link to="/">
                                    <button className="button-container text-capitalize">back to products</button>
                                </Link>
                                <button
                                    className="button-container text-capitalize"
                                    disabled={inCart ? true : false}
                                    onClick={() => this.addToCart(id)}
                                >
                                    {inCart ? 'in cart' : 'add to cart'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}