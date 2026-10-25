code:

let billAmount = Number(prompt("Enter your bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

let tip = billAmount * tipPercentage / 100;
let total = billAmount;

total += tip;

console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);

sample input:

Enter your bill amount: 100
Enter tip percentage: 15

output:

Subtotal: $100
Tip Percentage: 15%
Calculated Tip: $15
Total Amount to Pay: $115
