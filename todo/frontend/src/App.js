import React from 'react';
import './App.css';
// import TodoUsers from "./TodoUsers";
import TodoUsersList from "./TodoUsers";
import TodoFooter from "./components/footer"
import axios from 'axios'
import TodoHeader from "./components/header";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todousers': []
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

    }


    render() {
        return (

            <div>
                <TodoHeader></TodoHeader>
                <TodoUsersList todousers={this.state.todousers}/>
                <TodoFooter></TodoFooter>
            </div>

        )
    }
}

export default App;