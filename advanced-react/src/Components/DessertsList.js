// function DessertsList(props) {
//     const lowCalDessert = props.data
//     .filter(dessert => dessert.calories < 500)
//     .sort((a,b)=> a.calories - b.calories)
//     .map(dessert => {
//         return (
//         <li>
//             {dessert.title} - {dessert.calories} cal
//         </li>
//         );
//     });
//     return <ul>{lowCalDessert}</ul>;

// }

// export default DessertsList;

function DessertsList(props) {
    const lowCalDessert = props.data
    .filter(function(dessert){ return dessert.calories < 500})
    .sort(function(a,b){return a.calories - b.calories})
    .map(function(dessert){
        return (
        <li>
            {dessert.title} - {dessert.calories} cal
        </li> 
        );
    })

    return <ul>{lowCalDessert}</ul>

}

export default DessertsList;