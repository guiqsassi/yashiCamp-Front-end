const initialState = {
    name: "aa",
    token: "aaa",
    logged: false
}

const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "logged":
            return{
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                logged: true
             }
            break;
        default:
            return state
            break;
    }
}
export default userReducer