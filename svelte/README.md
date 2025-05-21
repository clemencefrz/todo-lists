Homework 

Build a todo list with Svelte.

## Instructions

1. **Setup the Project**:
   - Ensure you have Node.js installed.
   - Run `npm install` to install dependencies.
   - Start the development server with `npm run dev`.

2. **Todo List Implementation**:
   - The todo list is implemented in `src/lib/TodoList.svelte`.
   - It includes the following features:
     - Display a list of tasks.
     - Add new tasks using the input field and pressing Enter.
     - Toggle task completion with checkboxes.
     - Filter tasks to show or hide completed tasks using the checkbox labeled "show completed".

3. **Key Components**:
   - The `todos` array stores the list of tasks, each with a `text` and `done` status.
   - The `addTodo` function adds a new task to the list and clears the input field.
   - The `showCompleted` variable controls the visibility of completed tasks.

4. **Accessibility**:
   - Ensure that all interactive elements (inputs, buttons) have appropriate labels and ARIA attributes for better accessibility.

5. **Testing**:
   - Test the application to ensure that adding, completing, and filtering tasks work as expected.

6. **Deployment**:
   - Once satisfied with the implementation, build the project using `npm run build` and deploy it to your preferred hosting service.

Happy coding! 