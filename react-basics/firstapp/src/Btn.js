function Btn () {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light Mode is On</h1>

    function clickHandler() {
        darkModeOn = !darkModeOn;
        if(darkModeOn == true)
        {
            console.log('Dark Mode is on')
        }
        else
        {
            console.log('Light Mode is on')
        }
    }

    return(
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={clickHandler}>
                Click me
            </button>
        </div>
    )

}
export default Btn;



// function Btn () {
//     const clickHandler = 
//     () => console.log('Clicked');

//     return(
//         <button onClick={clickHandler}>
//             Click me
//         </button>
//     )

// }
// export default Btn;