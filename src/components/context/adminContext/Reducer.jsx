const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                admin: action.payload,
            }


        case "LOGIN_FAILURE":
            return {
                admin: null
            }
        case "LOGOUT":
            return {
                admin: null
            }
        default:
            return state;
    }
}

export default Reducer;