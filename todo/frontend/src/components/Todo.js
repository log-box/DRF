import React from 'react'
import Todo from "./TodoDetail";


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
           {
               todos.map((todo) => <Todo todo={todo} />)
           }
       </table>
   )
}


export default TodoList