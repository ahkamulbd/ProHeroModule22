// const shoppingCart = [
//     { name: 'shoe', price: 1200 },
//     { name: 'shirt', price: 2200 },
//     { name: 'pant', price: 3700 },
//     { name: 'belt', price: 600 }
// ]

// function totalShoppingCost(shoppingCart) {
//     let totalPrice = 0;
//     for (let i = 0; i < shoppingCart.length; i++) {
//         let item = shoppingCart[i];
//         //console.log(item);
//         totalPrice = totalPrice + item.price;
//     }
//     return totalPrice;
// }

// const totalCost = totalShoppingCost(shoppingCart);
// console.log(totalCost);

// Total Product Cost:
const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 3 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 2 },
]

function totalShoppingCost(shoppingCart) {
    let totalPrice = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        let item = shoppingCart[i];
        //console.log(item);
        let totalItemCost = item.quantity * item.price;
        totalPrice = totalPrice + totalItemCost;
    }
    return totalPrice;
}

const totalCost = totalShoppingCost(shoppingCart);
console.log(totalCost); 