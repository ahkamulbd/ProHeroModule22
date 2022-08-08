const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

const partialFrd = friends.slice(2, 5);
console.log(partialFrd);
console.log(friends);   // i.e Original array friends will not be changed with splice

//const partialFrdSplice = friends.splice(2, 5);
//console.log(partialFrdSplice);
//console.log(friends);   // splice removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

const partialFrdSplice = friends.splice(2, 5, 99, 555, 777);
console.log(partialFrdSplice);
console.log(friends); // 99, 555 and 777 elements will placed between 2 to 5 index position in array


