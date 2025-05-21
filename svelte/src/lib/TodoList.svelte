<script lang="ts">
  let todos = [
    {
      name: "Chocolats",
      completed: true,
    },
  ];
  let newTodo = "";

  let showCompleted = false;

  function addTodo(e: Event) {
    e.preventDefault();
    todos = [
      ...todos,
      {
        name: newTodo,
        completed: false,
      },
    ];
    newTodo = ""
  }
</script>

<div>
  <span>Ma TODO liste</span>
  <label>Afficher les tâches complétées<input type="checkbox" bind:checked={showCompleted}/></label>
  <ul>
    {#each todos.filter((todo) => showCompleted ? true : !todo.completed) as todo, i}
      <li id={`key-${i}`}>
        <label for={`input-${i}`}>{todo.name}</label>
        <input type="checkbox" id={`input-${i}`} bind:checked={todo.completed} />
      </li>
    {/each}
  </ul>
</div>

<div>
  <label for="add-task-input">Ajouter une tâche</label>
  <input id="add-task-input" type="text" bind:value={newTodo} />
  <button onclick={addTodo}>Ajouter</button>
</div>
