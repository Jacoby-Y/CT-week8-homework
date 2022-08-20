import React, { useContext } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BigBook from "../components/BigBook";


const ViewBook = ()=>{
    const { books, setAlerts } = useContext(AppContext);
    let { id } = useParams();
    
    if (isNaN(id)) id = null;
    else id = parseInt(id);

    if (id == null || !books.find((book)=> book.id == id)) {
        setAlerts({ theme: "error", text: "Book not found!" })
        return (<Navigate to="/books" />);
    }

    const book = books.find((book)=> book.id == id);

    return (
        <>
            <BigBook book={book} />
        </>
    )
}

export default ViewBook;