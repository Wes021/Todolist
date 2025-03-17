// Function to add a task
function AddTask() {
    const taskContainer = document.getElementById("TasksContainer");
    const todoValue = document.getElementById("textt");

    if (todoValue.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create task div
    let div = document.createElement("div");
    div.id = "task"; // Add class for task, not id

    const task = `
        <p>${todoValue.value}</p>
        <div id="tools">
            
            <img id="delete" src="https://img.icons8.com/?size=100&id=102550&format=png&color=000000" alt="Delete">
        </div>`;

    div.innerHTML = task; // Set inner HTML for the task

    taskContainer.appendChild(div); // Append the new task to the container

    todoValue.value = ""; // Clear input field

    // Add event listener for delete button
    const deleteButton = div.querySelector("#delete");
    deleteButton.addEventListener("click", function () {
        div.remove(); // Remove the specific task div when delete is clicked
    });
}
