import React from 'react'

const ProductQty = (props)=>{
    
    return(
        <div>
            <button value="+" onClick={props.incrementHandler}>+</button>
            <span>{props.value}</span>
            <button value="-" onClick={props.decementHandler}>-</button>
        </div>
    );
}

export default React.memo(ProductQty);