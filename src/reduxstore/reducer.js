
export function Reducer1(state={
    isloggedin : localStorage.token?true:false
},action){

    switch(action.type){
        case "LOGIN_SUCCESS" :{
            state = {...state}
            state.isloggedin = true
            return state
        }

        case "ADD_ADDRESS" :{
            state = {...state}
            state.userdetails = action.payload
            return state
        }

        default : return state
    }
}
export function Reducer2(state={
         cartlength : 0
                },action){

    switch(action.type){
        case "INIT_CAKES_SUCCESS":{
            state = {...state}
            state.cakes = action.payload
            return state
        }
        case "INIT_CART_ITEMS":{
            state = {...state}
            state.cartitems = action.payload
            return state
        }
        case "ADD_TO_CART_SUCCESS" :{
            state = {...state}
            state.cartlength = state.cartlength+1
            return state
        }

        default : return state
    }
}