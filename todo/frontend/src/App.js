import React from 'react';
import './App.css';
import TodoUsersList from "./components/TodoUsers";
import TodoFooter from "./components/footer"
import axios from 'axios'
import TodoHeader from "./components/header";
import Todo from "./components/Todo";
import Projects from "./components/Projects";
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import TodoByProject from "./components/TodoByProject";
import LoginForm from "./components/Auth";
import Cookies from 'universal-cookie';
import ProjectForm from "./components/ProjectForm";
import TodoForm from "./components/TodoForm";

const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todousers': [],
            'todos': [],
            'projects': [],
            'token': []
        }
    }

    load_data() {

        const headers = this.get_headers()

        axios.get('http://127.0.0.1:8000/api/users', {headers})
            .then(response => {
                const todousers = response.data
                this.setState(
                    {
                        'todousers': todousers
                    }
                )
            }).catch(error => {
            console.log(error)
            this.setState({'todousers': []})
        })

        axios.get('http://127.0.0.1:8000/api/projects', {headers})
            .then(response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error)
        )

        axios.get('http://127.0.0.1:8000/api/todos', {headers})
            .then(response => {
                const todos = response.data.results
                this.setState(
                    {
                        'todos': todos
                    }
                )
            }).catch(error => console.log(error))
        console.log(this.state.todos)
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }


    deleteTodo(id) {
        const headers = this.get_headers()
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, {headers})
            .then(response => {
                this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)})
            }).catch(error => console.log(error))
    }

    deleteProject(id) {
        const headers = this.get_headers()
        console.log(id)
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers})
            .then(response => {
                this.load_data()
                // this.setState({projects: this.state.projects.filter((project) => project.id !== id)})
            }).catch(error => console.log(error))
    }


    createProject(project_name, project_user) {
        const headers = this.get_headers()
        const data = {project_name: project_name, project_user: [project_user]}
        console.log(data)
        axios.post(`http://127.0.0.1:8000/api/projects/`, data, {headers})
            .then(response => {
                // let new_project = response.data
                // const author = this.state.authors.filter((item) => item.id === new_project.author)[0]
                // new_project.author = author
                // this.setState({books: [...this.state.books, new_project]})


                this.load_data()
            }).catch(error => console.log(error))
    }

    createTodo(user, project, todo_text) {
        const headers = this.get_headers()
        const data = {user: user, project: project, todo_text: todo_text}
        console.log(data)
        axios.post(`http://127.0.0.1:8000/api/todos/`, data, {headers})
            .then(response => {
                // let new_project = response.data
                // const author = this.state.authors.filter((item) => item.id === new_project.author)[0]
                // new_project.author = author
                // this.setState({books: [...this.state.books, new_project]})


                this.load_data()
            }).catch(error => console.log(error))
    }


    is_authenticated() {

        return this.state.token != '';
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => alert('Неверный логин или пароль'))
    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        console.log(this.state.token)
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        console.log("AAAAAAAAAAAAAAAAAAAA", headers)
        return headers
    }

    componentDidMount() {
        this.get_token_from_storage()
        // this.load_data()
    }


    render() {
        return (
            <div>
                <TodoHeader></TodoHeader>
                <HashRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Пользователи</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Проекты</Link>
                            </li>


                            <li>
                                <Link to='/todos'>Заметки TODO</Link>
                            </li>
                            <li>
                                {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> :
                                    <Link to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        {/*<Route exact path='/todos' component={() => <Todo todos={this.state.todos}*/}
                        {/*                                                      deleteTodo={(id) => this.deleteTodo(id)}/>}/>*/}
                        <Route exact path='/' component={() => <TodoUsersList todousers={this.state.todousers}/>}/>
                        <Route exact path='/projects' component={() => <Projects projects={this.state.projects}
                                                                                 deleteProject={(id) => this.deleteProject(id)}/>}/>
                        <Route exact path='/projects/create'
                               component={() => <ProjectForm
                                   createProject={(project_name, project_user) => this.createProject(project_name, project_user)}
                                   todousers={this.state.todousers}/>}/>

                        <Route exact path='/todos/create'
                               component={() => <TodoForm
                                   createTodo={(user, project, todo_text) => this.createTodo(user, project, todo_text)}
                                   todousers={this.state.todousers}
                                   projects={this.state.projects}/>}/>


                        <Route exact path='/todos' component={() => <Todo todos={this.state.todos}
                                                                          deleteTodo={(id) => this.deleteTodo(id)}/>}/>
                        <Route exact path='/login' component={() => <LoginForm
                            get_token={(username, password) => this.get_token(username, password)}/>}/>
                        <Route path='/projects/:id'>
                            <TodoByProject todos={this.state.projects}/>} />
                        </Route>
                        <Route component={NotFound404}/>
                    </Switch>
                </HashRouter>
                <TodoFooter></TodoFooter>
            </div>

        )
    }
}

export default App;