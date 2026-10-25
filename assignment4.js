code:

console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found: " + num);
        break;
    }
    num++;
}

console.log("\n-- Do-While Loop with Continue --");

let i = 0;

do {
    i++;

    if (i === 2 || i === 4) {
        continue;
    }

    console.log(i);
} while (i < 5);

output:

-- Multiplication Table of 5 --
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25

-- First number > 10 divisible by 6 --
Found: 12

-- Do-While Loop with Continue --
1
3
5
