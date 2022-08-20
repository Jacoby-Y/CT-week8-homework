import { create } from "apisauce";
import { apiClientNoAuth, apiClientBasicAuth, apiClientTokenAuth } from "./client.js";


const login = async (email, password, cancelToken)=>{
    let error, user;

    const res = await apiClientBasicAuth(email, password, cancelToken).get("/login");
    // console.log(res?.json());

    if (res.ok) {
        user = res.data;
    } else if (res.status === 401) {
        error = "Invalid Email/Password Combo";
    } else {
        error = "An Unexpected Error Occurred. Please Try Again Later";
    }

    return {
        error,
        user
    }
}

const tokenLogin = async(token, cancelToken)=>{
    let error, user;

    const res = await apiClientTokenAuth(token, cancelToken).get("/");
    // "Authorization": "Bearer " + token
    // `Bearer gxrRYcrJCk4aNl9Z3I8Yn9fr0ZfUnzF5TUwRWmMKF4o`
}

/** User:   
 * "email" : STRING,   
 * "first_name" : STRING,   
 * "last_name" : STRING   
 * "password" : STRING,
*/
const register = async (email, first_name, last_name, password, cancelToken)=>{
    const res = await apiClientNoAuth(cancelToken).post("/user", {email, first_name, last_name, password}, {});
    // console.log(res);
    if (res.ok) {
        return { ok: true }
    } else if (res.status == 422) {
        // console.log("That use already has an account!");
        return { error: "That email is already in use!" }
    } else {
        // console.log(`Somethin' wrong happened. Error Status: ${res.status}`);
        return { error: "The server is having toubles! Try again later" }
    }
}

const updateUser = async (token, new_user, cancelToken)=>{
    let error, user;

    // new_user.email == undefined      || delete new_user.email;
    // new_user.password == undefined   || delete new_user.password;
    // new_user.first_name == undefined || delete new_user.first_name;
    // new_user.last_name == undefined  || delete new_user.last_name;

    const res = await apiClientTokenAuth(token, cancelToken).put("/user", new_user);
    // const res = await apiClientBasicAuth(email, password, cancelToken).put("/user", new_user);

    if (res.ok) {
        user = res.data;
    } else {
        error = "An Unexpected Error Occurred. Please Try Again Later";
    }

    return {
        error,
        user
    }
}

const delUser = async (token, cancelToken)=>{
    const res = await apiClientTokenAuth(token, cancelToken).delete("/user");
}


export default {
    login,
    register,
    updateUser,
    delUser
}
