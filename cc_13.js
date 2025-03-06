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

    const editButton = document.createElement("button"); // Task 5 - added the ability to edit the employees
    editButton.textContent = "Edit"; // name of the button is Edit
    editButton.setAttribute("class", "edit-btn"); // Attributes of the edit button

    const removeButton = document.createElement("button"); // Adds a remove button
    removeButton.textContent = "x"; // Adds "x" to delete employee
    removeButton.setAttribute("class", "remove-btn"); //gives the "x" the attribute to act like a remove button

    removeButton.addEventListener("click", function(event) { // Listens for the deleted employees - Task 4 adding stop propagation
    event.stopPropagation(); // Stops the event from listening to the parent class
    if (container.contains(card)) { // Allows the ability to remove employe
        container.removeChild(card);
        console.log("Employee Card is Removed") // Pops up as Employee Card is Removed
        }
    });

    editButton.addEventListener("click", function(event) { // Task 5 - Listens when the edit button is used
        event.stopPropagation(); // Stops the event from listening to the parent class
        enableEditing(card, nameHeading, positionPara, editButton); // Allows user to edit these attributes
    });

    card.appendChild(nameHeading); // Name
    card.appendChild(positionPara); // Position for the text
    card.appendChild(editButton); // Task 5 - Edit button
    card.appendChild(removeButton); // Remove button

    container.appendChild(card); 
    }
// Task 5 - Inline editing for employee cards
function enableEditing(card, nameHeading, positionPara, editButton) { // Function to enable editing
    const nameInput = document.createElement("input"); // Allows the user to add names of the employee
    nameInput.type = "text"; // Text
    nameInput.value = nameHeading.textContent; // adds the name to the html

    const positionInput = document.createElement("input"); // Allows in line text editing
    positionInput.type = "text"; // uses text type
    positionInput.value = positionPara.textContent.replace("Position: ", ""); // replaces the old text with the new text

    const saveButton = document.createElement("button"); // Creates a save button called "save"
    saveButton.textContent = "Save";

    saveButton.addEventListener("click", function(event) { // listens for the save button
        event.stopPropagation();
        nameHeading.textContent = nameInput.value; // Replaces the name of the employee
        positionPara.textContent = `Position: ${positionInput.value}`; // updates the position value
        card.replaceChild(nameHeading, nameInput); // Name input
        card.replaceChild(positionPara, positionInput); // Position Input
        card.replaceChild(editButton, saveButton); // Save button
    });
    // zreplaces card with new data
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
function highlightAllEmployees() { // Highlights all employees
    const employeeCards = document.querySelectorAll(".employee-card"); // Selects employees from employee card
    const employeeArray = Array.from(employeeCards); // Array of employee cards

    employeeArray.forEach(card => {  // Arrow fucntion that highlights all employees
        card.classList.add("highlight");
    });
}

function removeHighlightFromAllEmployees() { // Removes highlight
    const employeeCards = document.querySelectorAll(".employee-card"); // selects from tje employee card
    const employeeArray = [...employeeCards]; // Expands the employee array

    employeeArray.forEach(card => { // Arrow function to remove the highlight
        card.classList.remove("highlight");
    });
}
// Task 3 - End

// Task 4 - Employee Card Removal With Event Bubbling
const employeeContainer = document.getElementById("employeeContainer"); // Identifies the area that contains the employee

employeeContainer.addEventListener("click", function(event) { // Listens to when the employee card is selected
    if (event.target.classList.contains("employee-card")) {
        console.log("Employee card clicked");
    }
});
// Task 4 - End