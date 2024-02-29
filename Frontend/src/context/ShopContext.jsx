import data from "../Components/Assets/all_product";

import { createContext, useReducer, useState } from "react";
import data_product from "../Components/Assets/data";
export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {

    function CartReducer(state,action){
       let newState = state;
       if(action.type ==='ADD'){
        const  NewItem = data.find((e)=>{ return e.id === action.payload.id});
        console.log(NewItem);
        newState = [
            NewItem,
            ...state
        ] ;
       }
       else if(action.type==='REMOVE'){
        const NewItem = state.filter((e)=> e.id !== action.payload.id)
        newState = NewItem;
       }

       return newState;
    }

    const [cart,DispatchCart] = useReducer(CartReducer,[]);

    function Rmproduct(id){
        DispatchCart(
            {
                type:"REMOVE",
                payload:{
                    id
                }
            }
        )
    }

    function AddProduct(id){
        DispatchCart(
            {
                type:"ADD",
                payload:{
                    id
                }
            }
        )
        console.log('dispatched add' , id)
    }

  const [rel, Setrel] = useState("none");
  return (
    <ShopContext.Provider
      value={{
        data,
        rel,
        Setrel,
        cart,
        Rmproduct,
        AddProduct,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
