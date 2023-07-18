const Reducer = (state, action) => {
    switch (action.type) {
        case "MINIDASHBOARD":
            return {
                ui: action.payload
            }
        case "ORDERS":
            return {
                ui: action.payload
            }
        case "PRODUCTS":
            return {
                ui: action.payload
            }
        case "MARKETING":
            return {
                ui: action.payload
            }
        case "RATES":
            return {
                ui: action.payload
            }
        case "REPORTS":
            return {
                ui: action.payload
            }
        case "LOGOUT":
            return {
                ui: action.payload
            }

        default:
            return state;
    }
}
export default Reducer;