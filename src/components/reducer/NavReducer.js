const initState="Login";
function NavReducer(state=initState,action){
    switch(action.type){
        case "nav": 
            state=action.data.route_val;
            return state;
        default:
            return state;
    }
}
export default NavReducer;