import { createContext, useEffect, useReducer, useState } from "react";
export const ShopContext = createContext(null);
const ShopContextProvider = ({ children }) => {
  const [all_product, setall_product] = useState([]);
  const [data_product, setdata_product] = useState([]);
  const [new_collections, setnew_collections] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: null,
    email: null,
    id: null,
  });

  function CartReducer(state, action) {
    let newState = state;
    if (action.type === "ADD") {
      const NewItem = all_product.find((e) => {
        return e.id === action.payload.id;
      });
      newState = [NewItem, ...state];
    } else if (action.type === "REMOVE") {
      const NewItem = state.filter((e) => e.id !== action.payload.id);
      newState = NewItem;
    }

    return newState;
  }

  const [cart, DispatchCart] = useReducer(CartReducer, []);

  useEffect(() => {
    async function cartUpdate() {
      try {
        const res = await fetch("/backend/user/update/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cart, id:currentUser.id }),
        });
        const data = await res.json();
      } catch (error) {
        console.log(error);
      }
    }
    cartUpdate();
  }, [cart]);

  function Rmproduct(id) {
    DispatchCart({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  }

  function AddProduct(id) {
    DispatchCart({
      type: "ADD",
      payload: {
        id,
      },
    });
  }

  const [rel, Setrel] = useState("none");

  async function DataFetch() {
    const res = await fetch("/backend/product/allproduct");
    const data = await res.json();
    setall_product(data);
    let temp = [];
    for (let i = 0; i < 4; i++) {
      temp.push(data[i]);
    }
    setdata_product(temp);
    temp = [];
    temp = data.filter((item) => {
      if (
        item.id === 12 ||
        item.id === 35 ||
        item.id === 14 ||
        item.id === 8 ||
        item.id === 15 ||
        item.id === 2 ||
        item.id === 17 ||
        item.id === 28
      ) {
        return true;
      } else {
        false;
      }
    });
    setnew_collections(temp);
  }

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        rel,
        Setrel,
        cart,
        Rmproduct,
        AddProduct,
        currentUser,
        setCurrentUser,
        all_product,
        data_product,
        new_collections,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
