import booksArr from '../data/books.js';
import Book from './book.jsx';

const BookWrapper = () => {
    return (<div className="wrapper">
        {booksArr.map(b => {
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