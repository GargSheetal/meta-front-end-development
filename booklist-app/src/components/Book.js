import React from 'react';

// children prop should be placed bet the opening and closing tags of a component. eg: <Book> <p></p> </Book>
// it can be rendered anywhere inside the component inside the curly braces with the help of props
// the keyword used to declare children is 'children'


const Book = (props) => {
    // you don't need to use props.book as the properties ar spread out and can be accessed directly using props
    const { img, title, author } = props;
    // settting events such as onClick. Events need an attribute and an eventHandler
    // Example of reference function
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target); // for printing the target of the event
        alert('Hello world')
    }

    const complexExample = (author) => {
        console.log(author);
    }

    return (
        <article className='book' onMouseOver={() => { console.log(title) }}>
            <img className='image' src={img} alt="Book Image" />
            {/* example of inlione function */}
            <h3 onClick={() => console.log(title)} >{title}</h3>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>Reference Example</button>
            <button type='button' onClick={() => complexExample(author)}>More complex example</button>
        </article>
    )
}
export default Book;