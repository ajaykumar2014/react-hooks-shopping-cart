
import React, { useContext } from 'react'
import { store } from '../store/store';
import './product.css'
import ProductQty from './ProductQty';

const CartList = () => {
    console.log('CartList')
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const { cartProduct, showCart,subTotal } = globalState.state;

    if (!showCart) return null;
    const hideCartPanelHandler = () => {
        dispatch({ type: 'TOGGLE_CART_PANEL', showCart: false });
    }
    const removeItemHandler = (id) => {
        dispatch({ type: 'REMOVE_PRODUCT_CART', removeItemId: id });
    }

    const qtyIncementHandler = (id) =>{
        let products = [...cartProduct];
        let index = products.findIndex(p => p.id === id);
        let product = products[index];
        product.qty = parseInt(product.qty) + 1;
        product.totPrice = parseInt(product.totPrice) + parseInt(product.price);  
        dispatch({ type: 'UPDATE_PRODUCT_CART',  payload: product});
    }

    const qtyDecementHandler = (id) =>{
        let products = [...cartProduct];
        let index = products.findIndex(p => p.id === id);
        let product = products[index];
        product.qty = parseInt(product.qty) - 1;
        product.totPrice = parseInt(product.totPrice)- parseInt(product.price); 
        dispatch({ type: 'UPDATE_PRODUCT_CART',  payload: product});
    }

    return (

        <div className="cart-container">
            <div className="close-button"><span onClick={hideCartPanelHandler}>X</span></div>
            <div className="shopping-label">
                <label>Images</label>
                <label>Name</label>
                <label>Quantity</label>
                <label>Price</label>
                <label>Total Price</label>
                <label>Remove</label>
            </div>
            {cartProduct && cartProduct.map((data) => (
                <div className="cart-product">
                    <div className="cart-image"><img src={data.photoUrl} alt={data.name}></img></div>
                    <div>{data.name}</div>
                    <div><ProductQty value={data.qty} incrementHandler={()=>qtyIncementHandler(data.id)} decementHandler = {()=>qtyDecementHandler(data.id)}></ProductQty></div>
                    <div>{data.price}</div>
                    <div>£{parseInt(data.totPrice)/100}</div>
                    <div><button className="remove-product" onClick={() => { removeItemHandler(data.id) }}>Remove</button></div>
                </div>
            ))}
            <div className="cart-product-subtotal">
                <span>Sub Total Amount is : £{parseInt(subTotal)/100}</span>
            </div>
        </div>

    )
}

export default CartList;