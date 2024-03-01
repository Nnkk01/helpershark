// Prompt the user for their name
var name = prompt("What is your name?");

// Check if the user entered a name
if (name != null && name != "") {
    // Display a greeting message with the user's name
    alert("Hello, " + name + "! Welcome.");
} else {
    // If the user didn't enter a name, display a generic greeting
    alert("Hello! Welcome.");
}
