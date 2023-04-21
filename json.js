const user = {
	id: 1,
	name: "John",
	age: 36,
};
// console.log(user);
const stringifed = JSON.stringify(user);
// console.log(stringifed);
const parsed = JSON.parse(stringifed);
// console.log(parsed);

const shop = {
	owner: "Rased",
	address: {
		road: "Badda",
		district: "Dhaka",
	},
	product: ["Laptop", "Mobile", "Watch", "Headphone"],
	amount: 50000,
	isOpen: true,
	isNew: false,
};
console.log(shop);
const stringifedShop = JSON.stringify(shop);
console.log(stringifedShop);
const parsedShop = JSON.parse(stringifedShop);
console.log(parsedShop);
