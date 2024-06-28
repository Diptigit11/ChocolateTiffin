import React, { createContext } from 'react'
import CartReducer from './CartReducer'
const CartContext = createContext()


const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReduces(CartReducer,[])
  return (
<CartContext.Provider value={{cart, dispatch}}>
 {children}
</CartContext.Provider>
  )
}

export default ContextProvider
