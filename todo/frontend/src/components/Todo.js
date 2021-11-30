import React from 'react'
import Todo from "./TodoDetail";


const TodoList = ({todos, deleteTodo}) => {
    return (
        <table>
            <th>
                TodoId
            </th>
            <th>
                TodoProject
            </th>
            <th>
                Text
            </th>
            <th>
                Created
            </th>
            <th>
                Updated
            </th>
            <th>
                User
            </th>
            <th>
                Статус
            </th>
            <th>

            </th>
            {
                todos.map((todo) => <Todo todo={todo} deleteTodo={deleteTodo}/>)
            }
        </table>
    )
}


export default TodoList