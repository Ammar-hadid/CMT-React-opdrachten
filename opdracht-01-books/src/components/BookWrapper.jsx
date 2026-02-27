import booksArr from '../data/books.js';
import Book from './book.jsx';

import { useState } from 'react';

const BookWrapper = () => {
    const [books, Setbook] = useState(booksArr);


    return (<div className="wrapper">
        {books.map(b => {
            return <Book
                key={b.id}
                name={b.name}
                author={b.author}
                image={b.image}
            />
        })}
    </div>)
}

export default BookWrapper;