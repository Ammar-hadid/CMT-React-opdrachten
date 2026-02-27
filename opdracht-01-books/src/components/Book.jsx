import { useState } from 'react';

const Book = ({ name, author, image }) => {
    const [amountRead, setAmountRead] = useState(0);

    const incrementTeller = () => setAmountRead(prev => prev + 1);

    return (
        <div className="book">
            <div className="image">
                <img src={image} />
            </div>
            <div className="content">
                <p>{name}</p>
                <p>{author}</p>

                <button onClick={incrementTeller}>Times read: {amountRead}</button>
            </div>
        </div>
    );
}

export default Book;