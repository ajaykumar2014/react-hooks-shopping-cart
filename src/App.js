import React, {  useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/productList';
import { StateProvider } from './store/store';
import CartList from './components/CartList';
import Header from './components/header';

const App = () => {

  const [fruits,setFruits] = useState([]);   
 
  useEffect(()=>{
      fetch('./data/fruits.json')
        .then(res=>res.json())
        .then(data=>setFruits(data));
  },[])
  
  return (
   <div className="container"> 
   
   <StateProvider> <React.Fragment>
    <Header/>
    <ProductList list={fruits}></ProductList>
    <CartList/>
    </React.Fragment></StateProvider>
  </div>
  );
}


export default App;
