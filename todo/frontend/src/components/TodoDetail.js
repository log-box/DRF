const Todo = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>
                {todo.id}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.todo_text}
            </td>
            <td>
                {todo.created}
            </td>
            <td>
                {todo.updated}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {(todo.is_active).toString()}
            </td>
            <td>
                <button type='button' onClick={() => deleteTodo(todo.id)}> Удалить</button>
            </td>
        </tr>
    )
}

export default Todo;