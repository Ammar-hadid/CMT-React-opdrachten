const Book = ( {name, author, image} ) => {
    return (<div className="book">
                <div className="image">
                    <img src={image}/>
                </div>
                <div className="content">
                    <p>{name}</p>
                    <p>{author}</p>
                </div>
            </div>
            );
}

export default Book;