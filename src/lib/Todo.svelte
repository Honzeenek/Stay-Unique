<!-- TodoList.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    interface Todo {
        id: number;
        text: string;
        completed: boolean;
    }

    type FilterType = 'all' | 'active' | 'completed';

    // Reactive todo list state
    let todos: Todo[] = [];
    let newTodo = "";
    let filter: FilterType = "all";

    // Load todos from localStorage on mount
    onMount(() => {
        const saved = localStorage.getItem("todos");
        if (saved) todos = JSON.parse(saved);
    });

    // Save to localStorage whenever todos change
    $: {
        if (typeof window !== "undefined") {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    // Computed properties
    $: filteredTodos = todos.filter((todo: Todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    $: remaining = todos.filter((todo: Todo) => !todo.completed).length;

    // Methods
    function addTodo(e: KeyboardEvent) {
        if (e.key === "Enter" && newTodo.trim()) {
            todos = [
                {
                    id: Date.now(),
                    text: newTodo.trim(),
                    completed: false,
                },
                ...todos,
            ];
            newTodo = "";
        }
    }

    function toggleTodo(id: number): void {
        todos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }

    function removeTodo(id: number): void {
        todos = todos.filter((todo) => todo.id !== id);
    }

    function clearCompleted(): void {
        todos = todos.filter((todo) => !todo.completed);
    }
</script>

<main>
    <h1>Todo List</h1>

    <div class="input-container">
        <input
            type="text"
            bind:value={newTodo}
            on:keydown={addTodo}
            placeholder="What needs to be done?"
        />
    </div>

    {#if todos.length > 0}
        <div class="filters">
            <button
                class:active={filter === "all"}
                on:click={() => (filter = "all")}>All</button
            >
            <button
                class:active={filter === "active"}
                on:click={() => (filter = "active")}>Active</button
            >
            <button
                class:active={filter === "completed"}
                on:click={() => (filter = "completed")}>Completed</button
            >
        </div>

        <ul transition:fade>
            {#each filteredTodos as todo (todo.id)}
                <li
                    class:completed={todo.completed}
                    transition:fade={{ duration: 200 }}
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        on:change={() => toggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                    <button class="delete" on:click={() => removeTodo(todo.id)}
                        >×</button
                    >
                </li>
            {/each}
        </ul>

        <div class="footer">
            <span>{remaining} items left</span>
            <button
                on:click={clearCompleted}
                disabled={todos.every((todo) => !todo.completed)}
                >Clear completed</button
            >
        </div>
    {/if}
</main>

<style>
    main {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .input-container {
        margin: 20px 0;
    }

    input[type="text"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .filters {
        margin: 10px 0;
    }

    .filters button {
        padding: 5px 10px;
        margin-right: 5px;
        border: 1px solid #ddd;
        background: none;
        cursor: pointer;
    }

    .filters button.active {
        background: #eee;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    .completed span {
        text-decoration: line-through;
        color: #888;
    }

    .delete {
        margin-left: auto;
        background: none;
        border: none;
        color: #ff4444;
        font-size: 20px;
        cursor: pointer;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        color: #666;
    }
</style>
