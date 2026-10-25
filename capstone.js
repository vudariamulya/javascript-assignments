code:

console.log("--- Initializing Inventory System ---");

// Initial inventory
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Input from the user
let productName = prompt("Enter product name:");
let productPrice = Number(prompt("Enter product price:"));

console.log(
    `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
);

// Validate user input
if (
    productName === null ||
    productName.trim() === "" ||
    !Number.isFinite(productPrice) ||
    productPrice <= 0
) {
    console.log("Invalid product details. Product not added.");
} else {
    // Add new product
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });
}

// Function to determine product category
function getCategory(price) {
    if (price < 100) {
        return "Budget";
    } else if (price < 500) {
        return "Standard";
    } else {
        return "Premium";
    }
}

// Arrow function to calculate total inventory value
const calculateTotal = items =>
    items.reduce((total, item) => total + item.price, 0);

// Display inventory using forEach
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(item => {
    let category = getCategory(item.price);

    switch (category) {
        case "Budget":
            category = "Budget";
            break;
        case "Standard":
            category = "Standard";
            break;
        case "Premium":
            category = "Premium";
            break;
    }

    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${category}`
    );
});

// Financial analytics
console.log("\n--- Financial Analytics ---");

const totalValue = calculateTotal(inventory);

console.log(`Total Inventory Value: $${totalValue}`);

// Filter products under $200
const affordableItems = inventory.filter(
    item => item.price < 200
);

console.log(
    "Filtered Affordable Items (Under $200): " +
    JSON.stringify(affordableItems.map(item => item.name))
);

// Generate formatted report
const report = inventory.map(
    item => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("Formatted Report List: " + JSON.stringify(report));

expected output:

--- Initializing Inventory System ---
[Prompt executed: User adds "Monitor" at "$150"]

--- Processing Inventory Roster (forEach) ---
* Item: Laptop ($800) -> Category: Premium
* Item: Mouse ($25) -> Category: Budget
* Item: Monitor ($150) -> Category: Standard

--- Financial Analytics ---
Total Inventory Value: $975
Filtered Affordable Items (Under $200): ["Mouse","Monitor"]
Formatted Report List: ["LAPTOP: $800","MOUSE: $25","MONITOR: $150"]
