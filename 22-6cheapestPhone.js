const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 13, storage: '32gb', price: 22000, color: 'golden' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'black' },
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'white' },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'ash' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'brown' },
    { name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'diamond' }
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);