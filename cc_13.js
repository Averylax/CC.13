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

    const editButton = document.createElement("button"); // Task 5
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-btn");

    const removeButton = document.createElement("button"); // Adds a remove button
    removeButton.textContent = "x"; // Adds "x" to delete employee
    removeButton.setAttribute("class", "remove-btn"); //gives the "x" the attribute to act like a remove button

    removeButton.addEventListener("click", function(event) { // Listens for the deleted employees - Task 4 adding stop propagation
    event.stopPropagation();
    if (container.contains(card)) {
        container.removeChild(card);
        console.log("Employee Card is Removed")
        }
    });

    editButton.addEventListener("click", function(event) { // Task 5
        event.stopPropagation();
        enableEditing(card, nameHeading, positionPara, editButton);
    });

    card.appendChild(nameHeading); // Name
    card.appendChild(positionPara); // Position for the text
    card.appendChild(editButton); // Task 5 - Edit button
    card.appendChild(removeButton); // Remove button

    container.appendChild(card); 
    }
// Task 5 - Inline editing for employee cards
function enableEditing(card, nameHeading, positionPara, editButton) {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameHeading.textContent;

    const positionInput = document.createElement("input");
    positionInput.type = "text";
    positionInput.value = positionPara.textContent.replace("Position: ", "");

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    saveButton.addEventListener("click", function(event) {
        event.stopPropagation();
        nameHeading.textContent = nameInput.value;
        positionPara.textContent = `Position: ${positionInput.value}`;
        card.replaceChild(nameHeading, nameInput);
        card.replaceChild(positionPara, positionInput);
        card.replaceChild(editButton, saveButton);
    });

    card.replaceChild(nameInput, nameHeading);
    card.replaceChild(positionInput, positionPara);
    card.replaceChild(saveButton, editButton);
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

// Task 4 - Employee Card Removal With Event Bubbling
const employeeContainer = document.getElementById("employeeContainer");

employeeContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee card clicked");
    }
});
// Task 4 - End