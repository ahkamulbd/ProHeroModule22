/*
    1. If ticket number < 100, ticket price : 100 / ticket
    2. if ticket number > 100, but < 200, ticket price:
                    first 100 price: 100 / ticket
                    rest 100 price: 90 / ticket
    3. ticket no > 200, ticket price: 70 / ticket
*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;

        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;

        return totalCost;
    }
}
const price = ticketPrice(220);
console.log('Price: ', price);