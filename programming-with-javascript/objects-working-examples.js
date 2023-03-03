
//working with objects

// This task is to convert an object to an array
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)  // [ 'speed', 100, 'color', 'yellow' ]