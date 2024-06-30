// Import necessary modules from React library
import React, { useState } from "react";

// Import CSS file for styling
import "./App.css";

// Define the main component of our app
function App() {
  // Define state variables using useState hook
  // 'task' stores the current value of the input field
  // 'setTask' is a function to update the value of 'task'
  const [task, setTask] = useState('');
  // 'items' stores an array of tasks added by the user
  // 'setItems' is a function to update the array of tasks
  const [items, setItems] = useState([]);

  // Function to handle changes in the input field
  function handleChange(event) {
    // Get the new value entered by the user
    const newTask = event.target.value;
    // Update the 'task' state with the new value
    setTask(newTask);
  }

  // Function to add a new task to the list
  function addTask() {
    // Add the current task to the 'items' array
    setItems(prevItems => [...prevItems, task]);
    // Clear the input field by setting 'task' to an empty string
    setTask('');
  }

  // Function to remove a task from the list
  function removeTask(index) {
    // Filter out the task at the specified index from 'items' array
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  }

  // Render the UI of the app
  return (
    <div className="main">
      <div className="container">
        {/* Title of the todo list */}
        <h1 className="text-center text-muted">Todo list</h1>
        {/* Input field for adding tasks */}
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Add task"
            value={task}
            onChange={handleChange}
          />
          {/* Button to add task */}
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={addTask}
            >
              Add
            </button>
          </div>
        </div>
        {/* List of tasks */}
        <ul className="list-group">
          {items.map((item, index) => (
            <li className="list-group-item" key={index}>
              {/* Task item */}
              <div className="d-flex justify-content-between align-items-center">
                {item}
                {/* Button to delete task */}
                <button
                  onClick={() => removeTask(index)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export the App component to be used in other files
export default App;
