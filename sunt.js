let inner = ''; // Assume 'inner' is a global or higher-scope variable
const m = "Some final value"; // Return value after the operation

// Function 'innerText' that processes the input 't'
function innerText(t) {
  return t.toUpperCase();
}

// Example object with the 'text' property
const obj = {
  text: t => (inner += innerText(t), m)
};

// Usage:
console.log("Initial inner:", inner); // Should be empty initially

const result = obj.text("hello");

// 'inner' should now contain the result of 'innerText("hello")'
console.log("Updated inner:", inner); // Output: "HELLO"

// The function returns 'm'
console.log("Result of obj.text('hello'):", result); // Output: "Some final value"
