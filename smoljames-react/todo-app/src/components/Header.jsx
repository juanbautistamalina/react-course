
export function Header({ todos }) {

    const todosLength = todos.length;
    const isTasksPlural = todosLength != 1;
    const taskOrTasks = isTasksPlural ? "tasks" : "task";

    return (
        <header className='text-gradient'>
            <h1>You have {todosLength} open {taskOrTasks}</h1>
        </header>
    )
}
