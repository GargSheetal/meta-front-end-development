
import './App.css';
import Book from './Book';

// all files except .js files have to be named with their extension in the import statement. eg: App.css
// styles added from inline takes priority over .css file properties

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL900_SR900,600_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL900_SR900,600_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/713lRguJLsL._AC_UL900_SR900,600_.jpg',
    title: "You're My Little Cuddle Bug",
    author: 'Nicola Edwards'
  },
];

function App() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book book={book} />
        )
      })}
    </section>
  );
}

export default App;
