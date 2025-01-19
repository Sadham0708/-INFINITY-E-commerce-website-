import { useState } from "react";
import React, { createContext, useEffect} from "react";
import all_product from "../Components/Assets/all_products"

 
export const ShopContext = createContext(null)
const getDefaultCart = () => {
    // Check if cart data is already in localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
        return savedCart;
    }
    
    // If no cart in localStorage, create a default cart
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
};
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = {...prev,[itemId]:prev[itemId]+1}
        return updatedCart
        })
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
            return updatedCart;
        });
    };
        
    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id === Number(item))
                if (itemInfo){
                   totalAmount += itemInfo.new_price * cartItems[item]

                }
            }
        }            
        return parseFloat(totalAmount.toFixed(2))

    }

    const getTotalCartItems = () => {
        let totalItem = 0
        for(const item in cartItems){
              if (cartItems[item]>0){
                totalItem += cartItems[item]
              }
             }    
             return totalItem
        }

    const contextValue = {getTotalCartItems,
                          getTotalCartAmount,
                          all_product,
                          cartItems,
                          addToCart,
                          removeFromCart}


    return (
        <ShopContext.Provider value = {contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider