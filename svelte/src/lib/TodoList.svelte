<script lang="ts">
  type Todo = {
    text: string;
    done: boolean;
  };

  let todos = $state<Todo[]>([
    {
      text: "Chocolats",
      done: true,
    },
  ]);

  let showCompleted = $state<boolean>(false);

  let filteredTodos = $derived(
    [...todos].filter((t) => (showCompleted ? true : !t.done))
  );

  function addTodo(e: KeyboardEvent) {
    if (e.key === "Enter") {
      const todoEl = e.target as HTMLInputElement;

      const text = todoEl.value;
      const done = false;

      todos = [...todos, { text, done }];
      todoEl.value = "";
    }
  }


</script>

<div role="region" aria-label="Todo List">
  <span>Ma TODO liste</span>
  <label>
    show completed
    <input type="checkbox" onchange={() => (showCompleted = !showCompleted)} aria-label="Show completed tasks" />
  </label>
  <ul role="list">
    <input placeholder="Add todo" type="text" onkeydown={addTodo} aria-label="Add a new task" />
    {#each filteredTodos as todo}
      <label>
        {todo.text}
        <input bind:checked={todo.done} type="checkbox" aria-label={`Mark ${todo.text} as done`} />
      </label>
    {/each}
  </ul>
  {JSON.stringify(todos)}
  {JSON.stringify(filteredTodos)}
</div>

<style>
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
