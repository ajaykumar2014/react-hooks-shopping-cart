
import React, { useContext }from 'react'
import { store } from '../store/store';

const Header = () =>{
    console.log('Header')
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const { showCart,cartProduct } = globalState.state; 

    const doToggle = () =>{
        let isToggle = !showCart;
        dispatch({type:'TOGGLE_CART_PANEL',showCart:isToggle});
    }

    return (
        <header>
            <div className="brand-name">
                <span>Product List</span>
            </div>
            <div className="cart-info">
                <span onClick={doToggle}>Cart({cartProduct.length})</span>
            </div>
        </header>
    );
}

export default Header;