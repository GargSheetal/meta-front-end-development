import React from 'react';

// childeren prop should be placed bet the opening and closing tags of a component. eg: <Book> <p></p> </Book>
// it can be rendered anywhere inside the component inside the curly braces with the help of props
// the keyword used to declare children is 'children'


const Book = (props) => {
    const { img, title, author } = props.book;
    return (
        <article className='book'>
            <img className='image' src={img} alt="Book Image" />
            <h3>{title}</h3>
            <h4>{author}</h4>
        </article>
    )
}
export default Book;