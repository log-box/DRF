import Todo from "./TodoDetail";
import {useParams} from "react-router-dom";



const TodoByProject = ({todos}) => {

    let {id} = useParams();
    console.log({id})

    let todos_filtered = todos.filter((todo => todo.project.includes(parseInt(id))))

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
               todos_filtered.map((todo) => <Todo todo={todo} />)
           }
       </table>
   )
}


export default TodoByProject