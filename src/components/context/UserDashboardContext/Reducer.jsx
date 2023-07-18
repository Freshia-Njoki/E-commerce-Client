const Reducer = (state, action) => {
    switch (action.type) {
        case "BUY":
            return {
                ui: action.payload
            }
        case "CATEGORIES":
            return {
                ui: action.payload
            }
        case "ORDER":
            return {
                ui: action.payload
            }
        case "CART":
            return {
                ui: action.payload
            }
        case "ACCOUNT":
            return {
                ui: action.payload
            }

        default:
            return state;
    }
}
export default Reducer;