
import './App.css';
import Book from './Book';
import { BookList } from './BookList';

// all files except .js files have to be named with their extension in the import statement. eg: App.css
// styles added from inline takes priority over .css file properties


function App() {
  return (
    <section className='booklist'>
      {BookList.map((book) => {
        return (
          //   <Book key={book.id} book={book} />
          // Another way of passing book object is by using a spread operator and spreading all properties of the object 
          // to be used directly in the component where ther ar passed
          <Book key={book.id} {...book} />
        )
      })}
    </section>
  );
}

export default App;
