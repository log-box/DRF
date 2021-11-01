import React from 'react';
import './App.css';
// import TodoUsers from "./TodoUsers";
import TodoUsersList from "./TodoUsers";
import TodoFooter from "./footer"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'todousers': []
        }
    }

    componentDidMount() {
        const todousers = [
            {
                'username': 'User1',
                'first_name': 'Фёдор',
                'last_name': 'Достоевский',
                'email': 'email@mai.ru'
            },
            {
                'username': 'User2',
                'first_name': 'Александр',
                'last_name': 'Грин',
                'email': 'yandex@ya.ru'
            },
        ]
        this.setState(
            {
                'todousers': todousers
            }
        )
    }

    render() {
        return (

            <div>
                <TodoUsersList todousers={this.state.todousers}/>
                <TodoFooter></TodoFooter>
            </div>

        )
    }
}

export default App;