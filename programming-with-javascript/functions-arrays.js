
// array examples.................

// creating a function to list the values in an array
function listArrayItems(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        console.log(i+1, arr[i]);
    }
}

// declaring an array

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];


// calling the function listArrayItems
listArrayItems(colors);


// function with a condition
function listArrayItems2(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(i == 'red')
        {
            console.log(i*100, 'tomato')
        }
        else
        {
            console.log(i*100, arr[i]);
        }  
    }
}

// calling the function listArrayItems2 
listArrayItems2(colors);