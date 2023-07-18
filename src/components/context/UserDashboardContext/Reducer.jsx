const Reducer = (state, action) => {
    switch (action.type) {
        case "BUY":
            return {
                ...state,
                ui: "buy",
            };
        case "LOAD_CART": {
            // Load cart data from localStorage if available
            const cartData = JSON.parse(localStorage.getItem("cart")) || [];
            return {
                ...state,
                cart: cartData,
            };
        }
        case "CATEGORIES":
            return {
                ...state,
                ui: "categories",
            };
        case "ORDER":
            return {
                ...state,
                ui: "order",
            };
        case "CART":
            return {
                ...state,
                ui: "cart",
            };
        case "ACCOUNT":
            return {
                ...state,
                ui: "account",
            };
        case "ADD_TO_CART": {
            const updatedCart = [...state.cart, action.payload];
            // Save the updated cart data to localStorage
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return {
                ...state,
                cart: updatedCart,
            };
        }
        default:
            return state;
    }
};

export default Reducer;
