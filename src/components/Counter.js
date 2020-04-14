import React from 'react';

const Counter = ({value, children, onClick}) => {
    console.log('Counter')

    return (
        <div>
            <button onClick={onClick} value={value}>
                {value}
            </button>
        </div>
    );
}

export default React.memo(Counter);