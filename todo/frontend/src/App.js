import React from 'react';
import './App.css';
// import TodoUsers from "./TodoUsers";
import TodoUsersList from "./components/TodoUsers";
import TodoFooter from "./components/footer"
import axios from 'axios'
import TodoHeader from "./components/header";
import Todo from "./components/Todo";
import Projects from "./components/Projects";


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
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todos')
            .then(response => {
                const todos = response.data
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
                <TodoUsersList todousers={this.state.todousers}/>
                <Projects projects={this.state.projects}/>
                {/*<Todo todos={this.state.todos}/>*/}
                <TodoFooter></TodoFooter>
            </div>

        )
    }
}

export default App;