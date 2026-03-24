import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer, {initialState} from "./CartReducer.jsx";

const CartContext = createContext();

function init(initial) {
    try {
        const persisted = localStorage.getItem('mechSupply_cart');
        if (persisted) {
            const parsed = JSON.parse(persisted);
            return { cartItems: Array.isArray(parsed) ? parsed : initial.cartItems };
        }
    } catch (e) {
        console.warn('Failed to read cart from localStorage, using empty cart.', e);
    }
    return initial;
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState, () => init(initialState));

    useEffect(() => {
        try {
            localStorage.setItem('mechSupply_cart', JSON.stringify(state.cartItems));
        } catch (e) {
            console.warn('Failed to save cart to localStorage.', e);
        }
    }, [state.cartItems]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    return useContext(CartContext);
}