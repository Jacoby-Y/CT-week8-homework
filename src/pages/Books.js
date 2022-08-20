import "../App.css"
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BookInfo from '../components/BookInfo';

const Books = ({ userBooks })=>{
    const { books, savedBooks, dispatchSavedBooks } = useContext(AppContext);

    const bookList = (userBooks
        ? savedBooks.map((id)=> books.find((book)=> book.id == id))
        : books
    );

    const clearBooks = ()=>{
        dispatchSavedBooks("CLEAR", null);
    }

    return (
        <main className="center-column">
        {userBooks && <Button sx={{mx: "auto", my: 1}} onClick={clearBooks}>Clear all books</Button>}
        <main id="books-wrapper">
            {bookList && bookList.map((book, i)=>(
                <BookInfo book={book} key={i}/>
            ))}
        </main>
        </main>
    )
}

export default Books;