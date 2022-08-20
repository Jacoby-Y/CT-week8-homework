import "../App.css"
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BookInfo from '../components/BookInfo';

const Books = ({ userBooks })=>{
    const { books, savedBooks, dispatchSavedBooks } = useContext(AppContext);
    const [ search, setSearch ] = useState("");

    const bookList = (userBooks
        ? savedBooks.map((id)=> books.find((book)=> book.id == id))
        : books
    );

    const clearBooks = ()=>{
        dispatchSavedBooks("CLEAR", null);
    }
    const changeSearch = (ev)=>{
        setSearch(ev.target.value)
    }

    return (
        <main className="center-column">
            <Box sx={{mb: 3}}>
                <TextField
                    id="standard-basic"
                    label="Search book"
                    variant="standard"
                    onChange={changeSearch}
                    />
                {userBooks && <Button sx={{mx: 3, my: 1}} onClick={clearBooks}>Clear all books</Button>}
            </Box>
            <main id="books-wrapper">
                {bookList && bookList.filter(({title})=> title.toLowerCase().includes(search.toLowerCase())).map((book, i)=>(
                    <BookInfo book={book} key={i}/>
                ))}
            </main>
        </main>
    )
}

export default Books;