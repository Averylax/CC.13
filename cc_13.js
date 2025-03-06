console.log(`cc_13.js has succesfully been loaded!`)
// Task 2 - Adding Employee Cards Dynamically 
function createEmployeeCard(name, position) { // Function that adds employees by name and position
    const container = document.getElementById("employeeContainer"); // New employees go in the Employee Container

    const card = document.createElement("div"); // Adds the new employees into its own box
    card.setAttribute("class", "employee-card"); // Attributes use Class and Employee-Card

    const nameHeading = document.createElement("h2"); // Adds the name using h2
    nameHeading.textContent = name; // Name of the employee

    const positionPara = document.createElement("p"); // Positions the text
    positionPara.textContent = `Position: ${position}`;

    const removeButton = document.createElement("button"); // Adds a remove button
    removeButton.textContent = "x"; // Adds "x" to delete employee
    removeButton.setAttribute("class", "remove-btn"); //gives the "x" the attribute to act like a remove button

    removeButton.addEventListener("click", function() { // Listens for the deleted employees
        container.removeChild(card); // Puts it under the removed list
    });

    card.appendChild(nameHeading); // Name
    card.appendChild(positionPara); // Position for the text
    card.appendChild(removeButton); // Remove button

    container.appendChild(card); 
}

document.addEventListener("DOMContentLoaded", function() { // Function to add the new employees
    createEmployeeCard("John Doe", "Software Engineer"); // Employee #1
    createEmployeeCard("Jane Smith", "Project Manager"); // Employee #2
});
// Task 2 - End

// Task 3 - Converting Nodelists to Arrays for Bulk Updates
function highlightAllEmployees() {
    const employeeCards = document.querySelectorAll(".employee-card");
    const employeeArray = Array.from(employeeCards);

    employeeArray.forEach(card => {
        card.classList.add("highlight");
    });
}

function removeHighlightFromAllEmployees() {
    const employeeCards = document.querySelectorAll(".employee-card");
    const employeeArray = [...employeeCards];

    employeeArray.forEach(card => {
        card.classList.remove("highlight");
    });
}
// Task 3 - End

