import React from 'react'
import './product.css';
import ProductQuantity from './ProductQuantity';

 const Product = ({ photoUrl, name, price,onProductAddClick,onQtyHandler }) => {
    console.log('Product');
    return (
        <div class="product-card">
            <div className="product-image"><img src={photoUrl} alt={name} /></div>
            <div className="product-info">
                <h5>{name}</h5>
                <h6 className="price">{price}</h6>
            </div>
            <div className="quantity">
                <ProductQuantity onQtyHandler={onQtyHandler}/>
            </div>
            <p><button onClick={onProductAddClick}>Add to Cart</button></p>
        </div>

    )
}

export default Product;
