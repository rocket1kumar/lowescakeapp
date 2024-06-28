import axios from "axios";

axios.interceptors.requestuse(function(request){
    if(request.url.contains("cart") || request.url.contains("order")){
        request.headers.Authorization= localStorage.token
        console.log("AP is triggeed at", new Date())
        return request
    }
    console.log("AP is triggeed at", new Date())
    return request
})