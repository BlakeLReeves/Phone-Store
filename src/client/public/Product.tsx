import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import console = require('console');

export interface IProductProps {
    product: { id: number, title: string, img: string, price: number, inCart: boolean };
}

export default class Product extends React.Component<IProductProps> {
    render() {

        const { id, title, img, price, inCart } = this.props.product;

        return (
            <div className="product-container col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5"
                        onClick={() => console.log("Clicked!")}
                    >
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="card-btn"
                            disabled={inCart ? true : false}
                            onClick={() => { console.log('added to cart!') }}
                        >
                            {inCart ? (
                                <p className="mb-0">
                                    {" "}
                                    In Cart
                                </p>
                            ) : (
                                    <i className="fas fa-cart-plus" />
                                )}
                        </button>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}