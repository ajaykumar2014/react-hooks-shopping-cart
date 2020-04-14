import React from 'react'

const ProductQty = (props)=>{
    const {value} = props;
    const disabled = value === 0 ? 'disabled' : '';
    return(
        <div>
            <button value="+" onClick={props.incrementHandler}  >+</button>
            <span> {value} </span>
            <button value="-" onClick={props.decementHandler} disabled={disabled}>-</button>
        </div>
    );
}

export default React.memo(ProductQty);