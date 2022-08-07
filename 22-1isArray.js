const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name: 'Agun'
}
const friends = [13, 14, 11, 17, 21, 16, 15, 20];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);    // print: object

// To check array
console.log(Array.isArray(friends));  // print : true i.e. friends is array

console.log(friends.includes(10));
console.log(friends.includes(21));

if (friends.indexOf(252) !== -1) {
    console.log(friends.includes(41));
}

// Array Concatenation:

const newFriends = [12, 13, 11, 13];

const allFriends = newFriends.concat(friends);
console.log(allFriends);

