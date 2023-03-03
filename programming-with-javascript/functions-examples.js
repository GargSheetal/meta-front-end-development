
// Practicing functions

// a function that accepts two parameters
function letterFinder(word, match)
{
    var condition1 = (typeof(word) === 'string' && word.length >= 2); //if the word is a string and the length is greater than or equal to 2
    var condition2 = (typeof(match) === 'string' && match.length === 1); //if the match is a string and the length is equal to 1

    if(condition1 === true && condition2 === true) //if both condition matches
    {   
        for(var i = 0; i < word.length; i++)
        {
            if(word[i] == match)
            {
                console.log('Found the', match, 'at', i);
            }
            else
            {
                console.log('---No match found at', i);
            }
        }    
    }
    else
    {
        console.log('Please pass correct arguments to the function');
    }
}

// calling the letterFinder function
letterFinder([],[]);    // negative test
letterFinder('cat', 't');   // positive test



