import React from 'react';
import './App.css';
import TodoUsersList from "./components/TodoUsers";
import TodoFooter from "./components/footer"
import axios from 'axios'
import TodoHeader from "./components/header";
import Todo from "./components/Todo";
import Projects from "./components/Projects";
import {HashRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import TodoByProject from "./components/TodoByProject";
import LoginForm from "./components/Auth";
import Cookies from 'universal-cookie';

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
            }).catch(error =>console.log(error)
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
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
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
        console.log("AAAAAAAAAAAAAAAAAAAA",headers)
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
                        <Route exact path='/' component={() => <TodoUsersList todousers={this.state.todousers}/>}/>
                        <Route exact path='/projects' component={() => <Projects projects={this.state.projects}/>}/>
                        <Route exact path='/todos' component={() => <Todo todos={this.state.todos}/>}/>
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