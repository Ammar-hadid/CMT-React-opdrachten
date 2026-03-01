import booksArr from '../data/books.js';
import Book from './book.jsx';
import AmountOfBooks from './BookCounter.jsx';

import { useState } from 'react';

const BookWrapper = () => {
    const [books, setBook] = useState(booksArr);

    return (<div className="wrapper">
        <AmountOfBooks amount={books.length} />

        <div className="booksWrapper">
            {books.map(b => {
                return <Book
                    key={b.id}
                    name={b.name}
                    author={b.author}
                    image={b.image}
                />
            })}
        </div>

    </div>)
}

export default BookWrapper;