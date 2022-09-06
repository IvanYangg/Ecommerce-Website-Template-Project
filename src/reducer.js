export const initialState = {
    cart: [],
    user: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, 
                cart: [...state.cart, action.item]
            };
        
        case 'REMOVE_FROM_CART':
            const foundIndex = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            let newCart = [...state.cart];

            if (foundIndex >= 0) {
                newCart.splice(foundIndex, 1);
            }
            else {
                console.warn(`Product (id: ${action.id} is not in cart`);
            }
            return {
                ...state,
                cart: newCart
            }
        
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default: 
            return state;
    }
};

export default reducer;