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
            const newItem = action.payload;
            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === newItem.id
            );

            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, update its price by doubling it
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    price: updatedCart[existingItemIndex].price * 2,
                };

                // Save the updated cart data to localStorage
                localStorage.setItem("cart", JSON.stringify(updatedCart));

                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                // If the item doesn't exist, add it to the cart
                const updatedCart = [...state.cart, newItem];

                // Save the updated cart data to localStorage
                localStorage.setItem("cart", JSON.stringify(updatedCart));

                return {
                    ...state,
                    cart: updatedCart,
                };
            }
        }
        case "REMOVE_ITEM":
            const filteredCart = state.cart.filter(
                (item) => item.created_at !== action.payload
            );

            // Update localStorage with the new cart value
            localStorage.setItem("cart", JSON.stringify(filteredCart));

            return {
                ...state,
                cart: filteredCart,
            };
        default:
            return state;
    }
};

export default Reducer;
