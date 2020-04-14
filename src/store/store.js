import React, { createContext, useReducer } from 'react';


const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const initialState = {
    cartProduct: [],
    subTotal:0.0,
    showCart: false
  };
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT_CART':
        console.log('*****************');
        let product = action.payload;
        let subTotal = state.subTotal;
        let products = [...state.cartProduct];
        let index = products.findIndex(p => p.id === product.id);
        subTotal += product.totPrice;
        if (index > -1) {
          products[index].qty += product.qty;
          products[index].totPrice += product.totPrice;
          subTotal+=products[index].totPrice;
          return {
            cartProduct: [...products],
            showCart: true,
            subTotal:subTotal
          }
        } else {
          return {
            cartProduct: [...products, product],
            showCart: true,
            subTotal:subTotal
          }
        }

      /*
      let groupingProduct = Object.assign([], products.map(p => {
        if (p.id === product.id) {
          p.qty += product.qty;
        }
        console.log(p);
        return p;
      }));
      console.log(groupingProduct);
      return {
        cartProduct: [...groupingProduct],
        showCart: true
      }
      */
      case 'REMOVE_PRODUCT_CART':
        let cardProductList = [...state.cartProduct];
        let newCardProductList = cardProductList.filter(data => data.id !== action.removeItemId);
        return {
          cartProduct: [...newCardProductList],
          showCart: true
        };
      case 'TOGGLE_CART_PANEL':
        return {
          ...state, showCart: action.showCart

        }

      case 'UPDATE_PRODUCT_CART':
        let _product = action.payload;
        let _subTotal = state.subTotal;
        let _products = [...state.cartProduct];
        let _index = _products.findIndex(p => p.id === _product.id);
        _products[_index].qty = _product.qty;
        _products[_index].totPrice =_product.totPrice;
        _subTotal += _products[_index].totPrice;
        return {
          cartProduct: [..._products],
          showCart: true,
          subTotal:_subTotal
        }
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }