import React from 'react'
import {Link} from "react-router-dom";


const Project = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                {project.project_name}
            </td>
            <td>
                {project.project_user}
            </td>
            <td>
                {project.repository}
            </td>
            <td>
                <button type='button' onClick={() => deleteProject(project.id)}> Удалить</button>
            </td>
        </tr>
    )
}

const ProjectsList = ({projects, deleteProject}) => {
    return (
        <div>
            <table>
                <th>
                    Project ID
                </th>
                <th>
                    Project name
                </th>
                <th>
                    Project user
                </th>
                <th>
                    Project repository
                </th>
                <th>

                </th>
                {
                    projects.map((project) => <Project project={project} deleteProject={deleteProject}/>)
                }
            </table>

            <Link to='/projects/create'>Создать проект</Link>
        </div>

    )
}


export default ProjectsList