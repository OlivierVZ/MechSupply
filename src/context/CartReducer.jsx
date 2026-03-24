export const initialState = {
    cartItems: []
};

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const item = action.payload;

            const existItem = state.cartItems.find(
                (cartItem) => cartItem.id === item.id
            );
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.id === item.id
                            ? {...cartItem, quantity: cartItem.quantity + 1}
                            : cartItem
                    ),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, {...item, quantity: 1}],
            };
        }
        case 'DECREASE_QUANTITY': {
            const id = action.payload;

            return {
                ...state,
                cartItems: state.cartItems
                    .map((item) => {
                        if (item.id !== id) return item;
                        const newQuantity = (item.quantity || 1) - 1;
                        return {...item, quantity: newQuantity};
                    })
                    .filter((item) => item.quantity > 0),
            };
        }
        case 'INCREASE_QUANTITY': {
            const id = action.payload;

            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === id ? {...item, quantity: item.quantity + 1} : item
                ),
            };
        }
        case 'REMOVE_FROM_CART': {
            const id = action.payload;

            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== id),
            };
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                cartItems: [],
            };
        }
        default:
            return state;

    }
}
