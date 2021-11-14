import React from 'react';
import './App.css';
// import TodoUsers from "./TodoUsers";
import TodoUsersList from "./components/TodoUsers";
import TodoFooter from "./components/footer"
import axios from 'axios'
import TodoHeader from "./components/header";
import Todo from "./components/Todo";
import Projects from "./components/Projects";
import {HashRouter, Route, Link, Switch, Redirect} from "react-router-dom";
import TodoByProject from "./components/TodoByProject";

const NotFound404 = ({ location }) => {
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
            'projects': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                const todousers = response.data
                this.setState(
                    {
                        'todousers': todousers
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                const projects = response.data.results
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todos')
            .then(response => {
                const todos = response.data.results
                this.setState(
                    {
                        'todos': todos
                    }
                )
            }).catch(error => console.log(error))

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
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <TodoUsersList todousers={this.state.todousers}/>} />
                        <Route exact path='/projects' component={() => <Projects projects={this.state.projects}/>} />
                        <Route exact path='/todos' component={() => <Todo todos={this.state.todos}/>} />
                            <Route path='/projects/:id'>
                                <TodoByProject todos={this.state.projects}/>} />
                            </Route>
                        <Route component={NotFound404} />
                        {/*<Redirect from='/users' to='/'/>*/}
                    </Switch>
                </HashRouter>
                <TodoFooter></TodoFooter>
            </div>

        )
    }
}

export default App;