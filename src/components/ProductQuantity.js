import React from 'react'

const ProductQuantity = ({onQtyHandler}) =>{
    console.log('ProductQuantity')
    return(
        <select onChange={onQtyHandler} >
            {[...Array(10)].map((x, i) =>
                <option key={i} value={i}>{i}</option>
            )}
        </select>
    )
}

export default React.memo(ProductQuantity);