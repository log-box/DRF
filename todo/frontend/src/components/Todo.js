import React from 'react'
import Todo from "./TodoDetail";
import {Link} from "react-router-dom";


const TodoList = ({todos, deleteTodo}) => {
    return (
        <div>
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

            <Link to='/todos/create'>Создать TODO</Link>
        </div>
    )
}


export default TodoList