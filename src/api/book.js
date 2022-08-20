import { apiClientNoAuth, apiClientBasicAuth } from "./client.js";

const get = async (cancelToken)=>{
    const res = await apiClientNoAuth(cancelToken).get("/book");
    
    if (!res?.data?.books) {
        console.error("Can't find the books! ):");
        return [];
    }
    return res.data.books;
}

export default {
    get
}