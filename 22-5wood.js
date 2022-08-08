/*
    1. Chair >>> 3 cft;
    2. table >>> 10 cft;
    3. bed >>> 50 cft;

    condition: 
        fixed : per item wood requirements
        vary : quantity
*/

function woodCalculator(chairQty, tableQty, bedQty) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQty * perChairWood;
    const tableWood = tableQty * perTableWood;
    const bedWood = bedQty * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}
const totalWood = woodCalculator(2, 2, 5);
console.log(totalWood);

