import React from 'react'


const Project = ({project}) => {
   return (
       <tr>
           <td>
               {project.project_name}
           </td>
           <td>
               {project.project_user}
           </td>
           <td>
               {project.repository}
           </td>
       </tr>
   )
}

const ProjectsList = ({projects}) => {
   return (
       <table>
           <th>
               Project name
           </th>
           <th>
               Project user
           </th>
           <th>
               Project repository
           </th>
           {
               projects.map((project) => <Project project={project} />)
           }
       </table>
   )
}


export default ProjectsList