const note = "Welcome to the club!";
console.log(note);

let reverse = '';
for (let i of note){
    reverse = i+reverse;
}
console.log('Reverse is : '+reverse);