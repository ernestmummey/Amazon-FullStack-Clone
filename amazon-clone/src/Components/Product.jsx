import React from 'react';
import '../Style/Product.css'

const Product = (props) => {
    return (
        <div className='product__pageContent'>
            <div className="product__container">
                <div className="product__multiProduct">
                    <p> {props.clothingtitle} </p>
                    <p>Product div</p>
                </div>
            </div>
        </div>
    )
};

export default Product