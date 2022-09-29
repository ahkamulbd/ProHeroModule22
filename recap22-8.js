function ticketPrice(ticketQuantity) {
    const ticketPriceFirst100 = 100;
    const ticketPrice101To200 = 90;
    const ticketPriceMoreThan200 = 70;

    if (ticketQuantity <= 100) {
        const totalCostFor100 = ticketQuantity * ticketPriceFirst100;
        return totalCostFor100;
    }
    else if (ticketQuantity <= 200) {
        const first100Cost = ticketPriceFirst100 * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketQuantityCost = restTicketQuantity * ticketPrice101To200;
        const totalCostFor200 = first100Cost + restTicketQuantityCost;
        return totalCostFor200;
    }
    else {
        const first100Cost = ticketPriceFirst100 * 100;
        const second100Cost = ticketPrice101To200 * 100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketQuantityCost = restTicketQuantity * ticketPriceMoreThan200;
        const totalCostForMoreThan200 = first100Cost + second100Cost + restTicketQuantityCost;
        return totalCostForMoreThan200;
    }
}

const totalCostForTicket = ticketPrice(210);
console.log(totalCostForTicket);