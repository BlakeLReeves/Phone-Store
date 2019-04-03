import React, { Component } from 'react';

export interface IProductProps {
    product: { id: number, title: string, img: string, price: number, inCart: boolean };
}

export default class Product extends React.Component<IProductProps> {
    render() {

        const { id, title, img, price, inCart } = this.props.product;

        return (
            <div className="product-container col-9 mx-auto col-md-6 col-lg-3">
                <h3>{title}</h3>
            </div>
        )
    }
}