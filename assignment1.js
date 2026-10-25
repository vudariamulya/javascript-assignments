code:

var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
console.log("Skills: " + JSON.stringify(skills) + " (Type: " + typeof skills + ")");



output:

Name: Alice (Type: string)
Age: 25 (Type: number)
Is Employed: true (Type: boolean)
Skills: ["HTML","CSS","JavaScript"] (Type: object)

