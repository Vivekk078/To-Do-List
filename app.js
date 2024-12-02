/*
    © 2024 Vivek Pant 😁😁. All Rights Reserved.
    This script manages a TO-DO List app with features to add, complete, delete, 
    and persist tasks using localStorage.
*/

const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// Add a task to the list
function addtask() {
    if (inputbox.value === '') {
        alert("You Must Add Some Task! 😑");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for '×'
        li.appendChild(span);
    }
    inputbox.value = ""; // Clear input
    savedata(); // Save the list
}

// Handle task interactions (toggle completion or delete)
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Mark/unmark as complete
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Delete task
    }
    savedata(); // Save changes
});

// Save tasks to localStorage
function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Load tasks from localStorage
function showtask() {
    if (localStorage.getItem("data")) {
        listcontainer.innerHTML = localStorage.getItem("data");
    }
}

// Initialize the list on page load
showtask();
