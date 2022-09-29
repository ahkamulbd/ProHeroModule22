const phones = [
    { name: 'Samsung', camera: 12, storage: '32 gb', price: 56000, color: 'silver' },
    { name: 'Apple', camera: 12, storage: '32 gb', price: 82000, color: 'silver' },
    { name: 'Tecno', camera: 12, storage: '32 gb', price: 32000, color: 'silver' },
    { name: 'Oppo', camera: 12, storage: '32 gb', price: 36000, color: 'silver' },
    { name: 'Xaomi', camera: 12, storage: '32 gb', price: 46000, color: 'silver' },
    { name: 'Walton', camera: 12, storage: '32 gb', price: 20000, color: 'silver' },
    { name: 'Nokia', camera: 12, storage: '32 gb', price: 23000, color: 'silver' },
    { name: 'htc', camera: 12, storage: '32 gb', price: 26000, color: 'silver' },
    { name: 'Vivo', camera: 12, storage: '32 gb', price: 25000, color: 'silver' },
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        //console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);