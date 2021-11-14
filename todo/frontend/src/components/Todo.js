import React from 'react'


const Todo = ({todo}) => {
   return (
       <tr>
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
       </tr>
   )
}

const TodoList = ({todos}) => {
   return (
       <table>
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
           {todos.map((todo) => <Todo todo={todo} />)}
       </table>
   )
}


export default TodoList