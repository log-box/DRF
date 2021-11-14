import TodoList from "./Todo";

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

export default Todo;