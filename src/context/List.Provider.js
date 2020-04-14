

import React, {createContext, useState} from 'react'

export const ListContext = createContext([{},()=>{}]);

export const ListProvider = (props)=>{
    const [state, setState] = useState({
        tracks: [
          {
            name: 'Lost Chameleon - Genesis',
          },
          {
            name: 'The Hipsta - Shaken Soda',
          },
          {
            name: 'Tobu - Such Fun',
          },
        ],
      });

    //const [state, setState] = useState('Click me');
    
    return(<ListContext.Provider value={[state, setState]}>
        {props.children}
    </ListContext.Provider>)
}
