import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';

interface IProductListProps { }

interface IProductListState {
    products: Array<{ id: number, title: string, img: string, price: number, inCart: boolean }>;
}

export default class ProductList extends React.Component<IProductListProps, IProductListState> {

    constructor(props: IProductListProps) {
        super(props);

        this.state = { products: storeProducts };
    }

    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title name="Our" title="Products" />
                        </div>
                        {this.state.products.map(product => {
                            return <Product key={product.id} product={product}/>
                        })}
                    </div>
                </div>
            </>
        )
    }
}