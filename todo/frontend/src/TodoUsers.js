import React from 'react'


const TodoUser = ({todouser}) => {
   return (
       <tr>
           <td>
               {todouser.username}
           </td>
           <td>
               {todouser.first_name}
           </td>
           <td>
               {todouser.last_name}
           </td>
           <td>
               {todouser.email}
           </td>
       </tr>
   )
}

const TodoUsersList = ({todousers}) => {
   return (
       <table>
           <th>
               TodoUserName
           </th>
           <th>
               First name
           </th>
           <th>
               Last Name
           </th>
           <th>
               Email
           </th>
           {todousers.map((todouser) => <TodoUser todouser={todouser} />)}
       </table>
   )
}


export default TodoUsersList