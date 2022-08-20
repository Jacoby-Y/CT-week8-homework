import { create } from "apisauce";

const base = "https://cae-bootstore.herokuapp.com"

export const apiClientNoAuth = (cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken
})

export const apiClientBasicAuth = (email, password, cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken,
    headers:{
        Authorization: 'Basic ' + btoa(email + ":" + password)
    }
})

export const apiClientTokenAuth =(token, cancelToken) => create({
    baseURL: base,
    cancelToken: cancelToken,
    headers:{
        Authorization: 'Bearer ' + token
    }
})