import { createContext, useState, useEffect, useReducer } from "react"
import bookApi from "../api/book";
import { savedBooksReducer } from "../reducers/savedBooks";
// import { cartReducer, cartActions } from "../reducers/cartReducer";


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const getUserFromLS = () => {
        let user = localStorage.getItem('book_store_user');
        if (user) return JSON.parse(user);
    }
    const getBooksFromLS = () => {
        let books = localStorage.getItem('book_store_books');
        if (books) return JSON.parse(books);
    }

    const [user, _setUser] = useState(getUserFromLS() ?? null);
    const [savedBooks, _dispatchSavedBooks] = useReducer(savedBooksReducer, getBooksFromLS() ?? []);
    const [books, setBooks] = useState([]);
    const [alerts, setAlerts] = useState(null); // { theme: "success", text: "It works!" }

    const setUser = (user) => {
        localStorage.setItem('book_store_user', JSON.stringify(user));
        _setUser(user);
    }

    const dispatchSavedBooks = (type, item) => {
        _dispatchSavedBooks({type, item});
    }

    useEffect(()=>{
        localStorage.setItem('book_store_books', JSON.stringify(savedBooks));
    }, [savedBooks])

    useEffect(() => {
        (async () => {
            setBooks(await bookApi.get());
        })()
    }, []);


    const values = {
        user,
        setUser,
        alerts,
        setAlerts,
        books,
        savedBooks,
        dispatchSavedBooks,
        // setSavedBooks,
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider