// switch statements

var place = 'fourth';

switch(place){
    case 'first':
        console.log('Gold');
        break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No Medal')
}


// Practice example..............................

var day = 'Sunday';

switch(day){
    case 'Monday':
        console.log('Start gym');
        break;
    case 'Tuesday':
        console.log('Go to yoga');
        break;
    case 'Wednesday':
        console.log('Its Karate class');
        break;
    case 'Thursday':
        console.log('Time to swim');
        break;
    case 'Friday':
        console.log('Party hard');
        break;  
    case 'Saturday':
        console.log('Go to Movies');
        break;
    case 'Sunday':
        console.log('Take Rest');
        break;
    default:
        console.log('There is no such day')

}

function concatStrings(str1, str2){
    return str1 + str2;
}