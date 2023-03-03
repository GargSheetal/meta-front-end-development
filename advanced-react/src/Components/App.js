import './App.css';
import DessertsList from './DessertsList';

const topDesserts = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best Tiramisu in town",
    calories: 200,
    image: "",
    price: "$5.00"
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    calories: 300,
    image: "",
    price: "$7.00"
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unxplored flavor",
    calories: 200,
    image: "",
    price: "$6.00"
  },
  {
    id: "4",
    title: "Cheesecake",
    description: "Finger licking good",
    calories: 600,
    image: "",
    price: "$8.00"
  },


]

function App() {
  const listitems = topDesserts.map(dessert => {
    const itemList = `${dessert.title} - ${dessert.price}`
    return <li> {itemList} </li>
  })

  return (
    <div className="App">
      <h2>List of low calorie desserts</h2>
      <DessertsList data={topDesserts}/>
      <h3>Our Specials</h3>
      <ul>
        {listitems}
      </ul>
    </div>
  );
}

export default App;
