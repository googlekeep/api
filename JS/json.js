const user = {id:1, name: 'raja', job:'actor'};
const stringifird = JSON.stringify(user);
// console.log(user);
// console.log(stringifird);

const shop = {
    owner: 'aliya',
    address: '12 / 30 kolkata,pin-700000',
    revenue: 45000,
    ispoen: true,
    isNew: false,
};
console.log(shop);
const shopJson =JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);