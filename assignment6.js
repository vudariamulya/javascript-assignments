code:

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");

products.forEach(function(product) {
    console.log(
        `Item: ${product.name} - Price: $${product.price}`
    );
});

console.log("\n-- Filtered Products (Price < $50) --");

const affordableProducts = products.filter(
    product => product.price < 50
);

console.log(affordableProducts);

console.log("\n-- Mapped Product Tags (map) --");

const productTags = products.map(
    product => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(productTags);

output:

-- All Products (forEach) --
Item: Laptop - Price: $800
Item: Mouse - Price: $25
Item: Keyboard - Price: $45

-- Filtered Products (Price < $50) --
[ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]

-- Mapped Product Tags (map) --
[ 'LAPTOP costs $800', 'MOUSE costs $25', 'KEYBOARD costs $45' ]
