type Product = [name: string, price: number, qty: number];

const inventory: Product[] = [
    ["Laptop", 999.99, 10],
    ["Smartphone", 599.99, 25],
    ["Tablet", 299.99, 15],
    ["Monitor", 199.99, 20],
    ["Keyboard", 49.99, 30]
];
for (const item of inventory) {
    const [name, price, qty] = item;
   
    console.log(`Product: ${name}, Price: $${price.toFixed(2)}, Quantity: ${qty}`);
}
