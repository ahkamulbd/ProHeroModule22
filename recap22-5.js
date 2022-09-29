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

const totalWoodRequired = woodCalculator(2, 3, 5);
console.log(totalWoodRequired);