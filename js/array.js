// Array
var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var weekDays = [1, 2, 3, 4, 5, 6, 7];

var friendAges = [23, 23, 24, 26, 22, 25];

// show element numbers and all elements
console.log(monthNames.length);
console.log(weekDays);

// show a single element by index
console.log(monthNames[4]);

// show the index of an element
let indexNumber = monthNames.indexOf('november');
console.log(indexNumber);

// Insert an element to array
friendAges.push("null");
console.log(friendAges);

// Remove last element of an array
friendAges.pop("null");
console.log(friendAges);

// insert an element to array in the beginning
friendAges.unshift("null");
console.log(friendAges);

//remove the first element of an array
friendAges.shift();
console.log(friendAges);
