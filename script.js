// 🎯 Part 1: Variables, Data Types & Conditionals
let userName = prompt("Enter your name:");
const greeting = userName ? `Hello, ${userName}!` : "Hello, guest!";
document.getElementById("output").textContent = greeting;

// ❤️ Part 2: Functions

// Function 1: Multiply price and quantity
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Format a welcome string
function formatWelcome(name) {
  return `Welcome to the JS zone, ${name}!`;
}

// Example usage
console.log(formatWelcome(userName));
console.log("Total: ", calculateTotal(150, 3));

// 🔁 Part 3: Loops

// For loop: List of skills
const skills = ["HTML", "CSS", "JavaScript", "Python"];
for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`);
}

// forEach loop: Alternative iteration
skills.forEach((skill, index) => {
  console.log(`Skill ${index + 1}: ${skill}`);
});

// 🌐 Part 4: DOM Interactions

// DOM 1: Change text content (already shown above)
document.getElementById("output").textContent = formatWelcome(userName);

// DOM 2: Toggle class
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// DOM 3: Listen for button click
document.getElementById("themeButton").addEventListener("click", toggleTheme);