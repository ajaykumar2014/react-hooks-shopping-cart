import React, { useContext, useState, useCallback} from 'react'
import Product from '../components/product'
import './product.css';
import { store } from '../store/store';

const ProductList = ({ list }) => {
    console.log('ProductList')
    const [qty, setQty] = useState(0);
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const addProductOnCart = useCallback((data) => {
        console.log('addProductOnCart');
        const product = { ...data, qty: parseInt(qty),price:parseInt(data.price),totPrice: parseInt(data.price)*parseInt(qty) };
        dispatch({ type: 'ADD_PRODUCT_CART', payload: product })    
    },[dispatch,qty]);

    const onQtyHandler = useCallback((e) => {
        setQty(parseInt(e.target.value));
    }, []);

    return (
        <div className="products-contianer">
            <div className="products">
                {list && list.map(data => {
                    return (<Product {...data} onProductAddClick = {()=>addProductOnCart(data)} onQtyHandler={onQtyHandler}/>);
                })}
            </div>
        </div>
    )
}

export default React.memo(ProductList);